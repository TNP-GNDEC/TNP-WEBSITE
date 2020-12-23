<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $secret = DB::table('oauth_clients')
        ->where('id', 2)
        ->pluck('secret')
        ->first();
        echo($secret);
        $request->merge([
            'grant_type' => 'password',
            'client_id' => 2,
            'client_secret' => $secret,
        ]);
        return $next($request);
    }
}
