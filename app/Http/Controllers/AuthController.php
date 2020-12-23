<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
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
            'role' => $request->role,
        ]);

        return response()->json($user);
    }

    public function login(Request $request)
{
    $request->validate([
        'username' => 'required', 
        'password' => 'required'
    ]);

    if( Auth::attempt(['username'=>$request->username, 'password'=>$request->password]) ) {
        $user = Auth::user();

        $token = $user->createToken($user->username.'-'.now());

        return response()->json([
            'token' => $token->accessToken,
            'role'  => $user->role
            
        ]);
    }
}
}