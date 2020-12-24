<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Tymon\JWTAuth\Providers\JWTAuthServiceProvider;
use JWTAuth;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required', 
            'password' => 'required'
        ]);


        $user = User::create([
            'username' => $request->username, 
            'password' => bcrypt($request->password),
            'email' => $request->email,
            'remember_token' => 21,
            'uuid' => 12,
        ]);

        return response()->json($user);
    }

    public function login(Request $request){
    $request->validate([
        'username' => 'required', 
        'password' => 'required'
    ]);

    if (! $token = JWTAuth::attempt(['username'=>$request->username, 'password'=>$request->password]) ) {
        return response()->json(['error' => 'invalid_credentials'], 401);
    }

    return $this->respondWithToken($token);    
    
}
public function logout()
{
    auth()->logout();

    return response()->json(['message' => 'Successfully logged out']);
}
protected function respondWithToken($token)
{
    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60
    ]);
}
}