<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\ugDetails;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class UgController extends Controller
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
    $user = auth()->user();
  $current_step= DB::table('form_statuses')
                    ->where('user_id', $user->id)
                    ->value('form_step');
  if($current_step>=6){
    $ug_file = $request->file('file');
    $ug_filename  = $ug_file->getClientOriginalName();
    $ug_extension = $ug_file->getClientOriginalExtension();
    $ug_file_url   = $user->username._.'ug.'.$ug_extension;
    $ug_path = public_path('documents/ug');
    $ug_file->move(public_path('documents/ug'), $ug_file_url);

    $ug_details = ugDetails::updateOrCreate(
      ['user_id' => $user->id],
      [ 'user_id' => $user->id,
        'urn' => $user->username,
        'crn' => 0,
        'pincode' => $request->pincode,
        'city' => $request->city,
        'state' => $request->state,
        'branch' => $request->stream,
        'marks_type' => $request->marks_type,
        'maximum_marks' => $request->maximum_marks,
        'obtained_marks' => $request->obtained_marks,
        'institution_name' => $request->institution_name,
        'year_of_passing' => $request->year_of_passing,
        'file' => $ug_path.'/'.$ug_file_url
        

    ]);

      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 7]);
      return response()->json(["details"=> $ug_details, "form_status"=> $form_step_change]);
    }
    else return response()->json(["details"=> "first complete ug details"]);
  }

  public function receiveFormData(Request $request){
    $user = auth()->user();
    $details = DB::table('ug')
      ->where('user_id', $user->id)
      ->first();
      
    return response()->json(["details"=> $details]);
  }
}
