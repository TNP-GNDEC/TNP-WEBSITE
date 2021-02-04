<?php

namespace App\Http\Controllers;

use App\ApiCode;
use App\Models\User;
use App\Models\FormStatus;
use Illuminate\Http\Request;
use App\Notifications\EmailVerification;
use Illuminate\Support\Facades\DB;

class VerificationController extends Controller {

    public function __construct() {
        
        }

    /**
     * Verify email
     *
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function verify($user_id, Request $request) {

        $user = User::findOrFail($request->id);
        $user->email = $request->email;
    	$userValid = User::where('email', $user->email)->first();
    	if (!$userValid) {
    		return response()->json(['alert'=> 'Invalid Mail!']);		
        }
        
        if (!$user->hasVerifiedEmail()) {
            $user->sendEmailVerificationNotification(new EmailVerification);
            // $user->markEmailAsVerified();
            // $form_step_change= DB::table('form_statuses')
            // ->where('user_id', $user->id)
            // ->update(['form_step' => 1]);
            return response()->json(["msg" => "Email verification link sent on your email id, it may take upto 5mins Rewards GNE Server"]);
        }

        return response()->json(["msg" => "Email already verified."]);

        return redirect()->to('/');
    }

    /**
     * Resend email verification link
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function resend() {
        if (auth()->user()->hasVerifiedEmail()) {
            return $this->respondBadRequest(ApiCode::EMAIL_ALREADY_VERIFIED);
        }

        auth()->user()->sendEmailVerificationNotification();

        return $this->respondWithMessage("Email verification link sent on your email id");
    }
}
