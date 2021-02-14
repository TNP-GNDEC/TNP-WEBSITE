<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Matriculation;

class FilterController extends Controller
{
    public function receiveFilterData(Request $request){
        // $user = auth()->user();
        $details = DB::table('matriculation')
          ->get();
          
        return response()->json(["details"=> $details]);
      }
}
