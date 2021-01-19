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
  $current_step= DB::table('form_statuses')
                    ->where('user_id', $user->id)
                    ->value('form_step');
  if($current_step==1){
    $details = DB::table('step_two')
    ->where('user_id', $user->id)
    ->update([
        'first_name' => $request->profile["first_name"], 
        'last_name' => $request->profile["last_name"],
        'height' => $request->profile["height"],
        'weight' => $request->profile["weight"],
        'dob' => $request->profile["dob"],
        'blood_group' => $request->profile["blood_group"],
        'user_id' => $request->id,
        'gender' => $request->profile["gender"],
        'marital_status' => $request->profile["marital_status"],
        'disability' => $request->profile["disability"],
        'aadhar' => $request->profile["aadhar"],
        'farming_background' => $request->profile["farming_background"],

        'mother_name' => $request->parent["mother_name"],
        'father_name' => $request->parent["father_name"],
        'father_mobile' => $request->parent["father_phone"],
        'mother_mobile' => $request->parent["mother_phone"],

        'shift' => $request->academics["shift"],
        'stream' => $request->academics["stream"],
        'category' => $request->academics["course"],
        'branch_type' => $request->academics["branch"],
        'training_sem' => $request->academics["training_sem"],
        'hostler' => $request->academics["hostler"],
        'leet' => $request->academics["leet"],

        'mobile' => $request->contact["contact"],
        'whatsapp' => $request->contact["whatsapp_contact"],
        
        'pincode' => $request->address["pincode"],
        'district' => $request->address["district"],
        'city' => $request->address["city"],
        'state' => $request->address["state"],
        'address' => $request->address["address"],

    ]);
      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 2]);
    return response()->json(["details"=> $request->academics["shift"], "form_status"=> "form_step_change"]);
  }
  else return response()->json(["details"=> "first complete email verification"]);
 }
}
