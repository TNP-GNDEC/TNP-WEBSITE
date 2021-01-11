<?php

namespace App\Http\Controllers;

use App\ApiCode;
use App\Models\User;
use Illuminate\Http\Request;
use App\Notifications\EmailVerification;

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

        if (!$user->hasVerifiedEmail()) {
            $user->sendEmailVerificationNotification(new EmailVerification);
            $user->markEmailAsVerified();
            return response()->json(["msg" => "Email verification link sent on your email id"]);
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
