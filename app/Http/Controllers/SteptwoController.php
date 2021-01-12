<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\StepTwo;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class SteptwoController extends Controller
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
  //   $request->validate([
  //     'username' => 'required', 
  //     'password' => 'required|min:6'
  // ]);
  $current_step= DB::table('form_statuses')
                    ->where('user_id', $user->id)
                    ->value('form_step');
  if($current_step==1){
  $details = DB::table('step_two')
  ->where('user_id', $user->id)
  ->update([
      'first_name' => $request->first_name, 
      'last_name' => $request->last_name,
      'user_id' => $request->id,
      'mother_name' => $request->mother_name,
      'father_name' => $request->father_name,
      'father_mobile' => $request->father_contact,
      'mother_mobile' => $request->mother_contact,
      'dob' => $request->dob,
      'height' => $request->height,
      'weight' => $request->weight,
      'hostler'=>$request->hostler,
      'mobile' => $request->mobile,
      'whatsapp' => $request->whatsapp,
      'leet' => $request->leet,
      'category' => $request->category,
      'disability' => $request->disability,
      'shift' => $request->shift,
      'stream' => $request->stream,
      'branch_type' => $request->branch_type,
      'training_sem' => $request->training_sem,
      'blood_group' => $request->blood_group,
      'marital_status' => $request->marital_status,
      'aadhar' => $request->aadhar,
      'farming_background' => $request->farming_background,
      'pincode' => $request->pincode,
      'district' => $request->district,
      'city' => $request->city,
      'state' => $request->state,
      'address' => $request->address,
      'gender' => $request->gender

  ]);
    $form_step_change= DB::table('form_statuses')
    ->where('user_id', $user->id)
    ->update(['form_step' => 2]);
    return response()->json(["details"=> $details, "form_status"=> $form_step_change]);
  }
  else return response()->json(["details"=> "first complete email verification"]);
 }
}