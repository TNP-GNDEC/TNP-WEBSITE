<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\Matriculation;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class MatriculationController extends Controller
{
  public function __construct()
    {
        $this->middleware(function ($request, $next) {

            $this->user = Auth::user();

            return $next($request);
        });
    }

 public function getFormData(Request $request)
  {
    $user = User::findOrFail($request->id);
  $current_step= DB::table('form_statuses')
                    ->where('user_id', $user->id)
                    ->value('form_step');
  if($current_step==2){
    $file = $request->matriculation["file"];
    $filename  = $file->getClientOriginalName();
    $extension = $file->getClientOriginalExtension();
    $picture   = $user->username._.'matriculation';
    $file->move(public_path('img/matriculation'), $picture);
    $details = DB::table('matriculation')
    ->where('user_id', $user->id)
    ->update([
        'pincode' => $request->matriculation["pincode"],
        'city' => $request->matriculation["city_of_institution"],
        'state' => $request->matriculation["state_of_institution"],
        'marks_type' => $request->matriculation["marks_type"],
        'maximum_marks' => $request->matriculation["maximum_marks"],
        'obtained_marks' => $request->matriculation["obtained_marks"],
        'institution_name' => $request->matriculation["institution_name"],
        'board' => $request->matriculation["board"],
        'year_of_passing' => $request->matriculation["year_of_passing"]

    ]);
      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 3]);
      return response()->json(["details"=> $details, "pic"=>$picture, "form_status"=> $form_step_change]);
    }
    else return response()->json(["details"=> "first complete personal details"]);
  }
}
