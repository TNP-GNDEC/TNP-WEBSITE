<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\UgDetails;
use App\Models\PgDetails;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class UgpgController extends Controller
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
  if($current_step==4){
    //condition will be checked -> if user has done ug that file will be requested and stored or otherwise
    $ug_file = $request->file('file');
    $ug_filename  = $file->getClientOriginalName();
    $ug_extension = $file->getClientOriginalExtension();
    $ug_file_url  = $user->username.'_ug.'.$ug_extension;
    $ug_path = public_path('documents/ug');
    $ug_file->move(public_path('documents/ug'), $ug_file_url);
    
    $pg_file = $request->file('file');
    $pg_filename  = $pg_file->getClientOriginalName();
    $pg_extension = $pg_file->getClientOriginalExtension();
    $pg_file_url   = $user->username._.'pg.'.$pg_extension;
    $pg_path = public_path('documents/pg');
    $pg_file->move(public_path('documents/pg'), $pg_file_url);

    $ug_details = DB::table('ug')
    ->where('user_id', $user->id)
    ->update([
        'sgpa_sem1'=> $request->ug["sgpa_sem1"],
        'sgpa_sem2'=> $request->ug["sgpa_sem2"],
        'sgpa_sem3'=> $request->ug["sgpa_sem3"],
        'sgpa_sem4'=> $request->ug["sgpa_sem4"],
        'sgpa_sem5'=> $request->ug["sgpa_sem5"],
        'sgpa_sem6'=> $request->ug["sgpa_sem6"],
        'sgpa_sem7'=> $request->ug["sgpa_sem7"],
        'sgpa_sem8'=> $request->ug["sgpa_sem8"],
        'credits_sem1'=> $request->ug["credits_sem1"],
        'credits_sem2'=> $request->ug["credits_sem2"],
        'credits_sem3'=> $request->ug["credits_sem3"],
        'credits_sem4'=> $request->ug["credits_sem4"],
        'credits_sem5'=> $request->ug["credits_sem5"],
        'credits_sem6'=> $request->ug["credits_sem6"],
        'credits_sem7'=> $request->ug["credits_sem7"],
        'credits_sem8'=> $request->ug["credits_sem8"],
        'aggregate_credits'=> $request->ug["aggregate_credits"],
        'aggregate_sgpa'=> $request->ug["aggregate_sgpa"],
        'aggregate_percentage'=> $request->ug["aggregate_percentage"],
        'file' => $ug_file_url

    ]);

    $pg_details = DB::table('pg')
    ->where('user_id', $user->id)
    ->update([
        'pincode' => $request->pg["pincode_of_institution"],
        'city' => $request->pg["city_of_institution"],
        'state' => $request->pg["state_of_institution"],
        'branch' => $request->pg["stream"],
        'marks_type' => $request->pg["marks_type"],
        'maximum_marks' => $request->pg["maximum_marks"],
        'obtained_marks' => $request->pg["obtained_marks"],
        'institution_name' => $request->pg["institution_name"],
        'year_of_passing' => $request->pg["year_of_passing"],
        'file' => $pg_file_url

    ]);

      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 5]);
      return response()->json(["details"=> $details, "form_status"=> $form_step_change]);
    }
    else return response()->json(["details"=> "first complete 12th diploma details"]);
  }
}
