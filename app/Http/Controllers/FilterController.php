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
        $details = DB::table('collective_data')
          ->get();
        
        return response()->json(["details"=> $details]);
      }
}

// create view collective_data as select personaldetails.*,users.username,users.uuid,matriculation.institution_name,matriculation.marks_type,matriculation.obtained_marks,matriculation.maximum_marks,matriculation.file,matriculation.year_of_passing,matriculation.board from personaldetails,matriculation,users where personaldetails.user_id = users.id and matriculation.user_id = users.id;
