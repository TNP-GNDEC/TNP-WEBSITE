<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use App\Mail\PasswordResetEmail;
use Illuminate\Support\Facades\Mail;
use App\Models\PasswordReset; 
use App\Models\User;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
  public function getEmail()
  {
     return view('customauth.passwords.email');
  }

 public function postEmail(Request $request)
  {
    $request->validate(['email' => 'required|email']);

    	$email = $request->email; 

    	$userEmail = User::where('email', $email)->first();

    	if (!$userEmail) {

    		return response()->json(['alert'=> 'Invalid Email!']);
    	}

    	$token = Str::random(60);

    	PasswordReset::create([

    		'email' => $email,

    		'token' => $token,
    	]);
    		 
    	$tokenData = PasswordReset::where('email', $email)->first();

    		if($tokenData){

    			Mail::to($tokenData->email)->send(new PasswordResetEmail($tokenData));

    			return response()->json(['msg' => 'A Reset Link has been sent to your Mail!']);
    		}
    		else{
    			return response()->json(['alert' => 'Sorry we could not send a link, try again later!']);
    		}
	}
	public function getpassword($token)
    {

    	return view('resetpassword')->with('token', $token);
    }
	
	public function resetPassword(Request $request)
    {
        $request->validate(['email'=>'required|email', 'password'=>'required|min:6|confirmed']);
      
    	$email = $request->email;

    	$user = User::where('email', $email)->first();

    	if (!$user) {

    		return back()->with('errors', 'Invalid Mail!');		
    	}
    	$tokenData = PasswordReset::where('token', $request->token)->first();

        if(!($request->has('token') && $tokenData)){

            return response()->json(['msg' =>'Token not Found!']);      

        }

         $user->fill(['password' => bcrypt($request->password)])->save();

     	 $token = PasswordReset::where('email', $user->email)->delete();
   
  
    	return redirect('/login')->with('success', 'Password Changed Successfully');		

    	
    }
}