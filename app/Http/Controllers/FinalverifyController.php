<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\FormStatus;
use App\Models\PersonalDetails;
use App\Models\Matriculation;
use App\Models\Diploma;
use App\Models\Twelfth;
use App\Models\TwelfthDiplomaCategory;
use App\Models\ug;
use Illuminate\Support\Facades\DB;

class FinalverifyController extends Controller
{
  public function __construct()
    {
        $this->middleware(function ($request, $next) {

            $this->user = Auth::user();

            return $next($request);
        });
    }
 public function completeFormData(Request $request){
  $user = auth()->user();
  $current_step= DB::table('form_statuses')
                    ->where('user_id', $user->id)
                    ->value('form_step');
  if($current_step <6){
    $form_step_change= DB::table('form_statuses')
    ->where('user_id', $user->id)
    ->update(['form_step' => 6]);
  }
  return response()->json(["msg"=> "stepcomplete"]);
 }
 public function getFormData(Request $request)
  {
    $user = auth()->user();
    $personal_details = DB::table('personaldetails')
      ->where('user_id', $user->id)
      ->first();

    $matriculation_details = DB::table('matriculation')
      ->where('user_id', $user->id)
      ->first();

    $twelfth_diploma_category = DB::table('twelfth_diploma_category')
      ->where('user_id', $user->id)
      ->first();

    $twelfth_details = DB::table('twelfth')
    ->where('user_id', $user->id)
    ->first();

    $diploma_details = DB::table('diploma')
    ->where('user_id', $user->id)
    ->first(); 

    $ug_details = DB:: table('ug')
        ->where('user_id', $user->id)
        ->first();
    
    if($ug_details != null)
    return response()->json([
      "details"=>$personal_details,
      "matric"=>$matriculation_details,
      "category"=>$twelfth_diploma_category,
      "twelfth"=>$twelfth_details,
      "diploma"=>$diploma_details,
      "ug"=>$ug_details
      ]);
      else
      return response()->json([
        "details"=>$personal_details,
        "matric"=>$matriculation_details,
        "category"=>$twelfth_diploma_category,
        "twelfth"=>$twelfth_details,
        "diploma"=>$diploma_details,
        ]);

    // $ug_details = DB::table('ug')
    // ->where('user_id', $user->id)
    // ->first();
    
  }
}
