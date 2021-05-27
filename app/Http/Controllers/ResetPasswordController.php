<?php 

namespace App\Http\Controllers; 
use Illuminate\Http\Request; 
use DB; use App\User; 
use Hash; 
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\FormStatus;
use App\Models\PasswordReset;

class ResetPasswordController extends Controller { 

  public function getPassword($token) { 

     return view('customauth.passwords.reset', ['token' => $token]);
  }

  public function checkToken(Request $request){
    $ResetTable = DB::table('password_resets')
                      ->where(['token' => $request->token])
                      ->first();
    
    if($ResetTable){
      return response()->json(['msg' => 'Valid token!']);
    }

    return redirect('/invalid-token')->with('message', 'Token not valid!');
  }


  public function updatePassword(Request $request)
  {

  $request->validate([
      'password' => 'required|string|min:6|confirmed',
      'password_confirmation' => 'required',
  ]);

  $ResetTable = DB::table('password_resets')
                      ->where(['token' => $request->token])
                      ->first();

  if(!$ResetTable)
      return back()->withInput()->with('error', 'Invalid token!');

  $user = User::where('email', $ResetTable->email)
    ->update(['password' => Hash::make($request->password)]);

  DB::table('password_resets')->where(['email'=> $ResetTable->email])->delete();

    if($user->is_verified === true){
      return redirect('/login')->with('message', 'Your password has been changed!');
    }
    else{
      DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 1]);

      DB::table('users')->where(['email'=> $request->email])
      ->update(['is_verified' => true]);

      return redirect('/login')->with('message', 'Your password has been changed!');
    }
  }
}
