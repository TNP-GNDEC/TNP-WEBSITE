<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\FormStatus;
use App\Models\StepTwo;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Providers\JWTAuthServiceProvider;
use JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required', 
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'username' => $request->username, 
            'password' => bcrypt($request->password),
            'email' => $request->email,
            'role_id'=>$request->role_id,
            'uuid' => (string) Str::uuid()

        ]);
        if($request->role_id=="1"){
            if($user){
            $form_user= formStatus::create([
                'user_id' => $user->id
                
            ]);
            $form_step_two = StepTwo::create([
                'user_id' => $user->id,
                'urn' => $request->username,
                'crn' => $request->password
            ]);
            }
        }
        return response()->json($user);
    }

    public function login(Request $request){
    $request->validate([
        'username' => 'required', 
        'password' => 'required'
    ]);
    $token = JWTAuth::attempt(['username'=>$request->username, 'password'=>$request->password]);

    if (! $token ) {
        return response()->json(['error' => 'invalid_credentials'], 401);
    }

    $currentUser = Auth::user();

    return $this->respondWithToken($token,$currentUser);    
    
}
public function logout()
{
    auth()->logout();

    return response()->json(['message' => 'Successfully logged out']);
}
protected function respondWithToken($token, $currentUser)
{
    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60,
        'current_user' => $currentUser
    ]);
}
}