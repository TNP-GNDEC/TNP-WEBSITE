<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use App\Models\PersonalDetails;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class PersonaldetailsController extends Controller
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
    $details = DB::table('personalDetails')
    ->where('user_id', $user->id)
    ->update([
        'user_id'=> $user->id,
        'first_name' => $request->profile["first_name"], 
        'last_name' => $request->profile["last_name"],
        'height' => $request->profile["height"],
        'weight' => $request->profile["weight"],
        'dob' => $request->profile["dob"],
        'blood_group' => $request->profile["blood_group"],
        'gender' => $request->profile["gender"],
        'marital_status' => $request->profile["marital_status"],
        'disability' => $request->profile["disability"],
        'aadhar' => $request->profile["aadhar"],
        'farming_background' => $request->profile["farming_background"],
        'ruralarea' => $request->profile["ruralarea"],

        'mother_name' => $request->parent["mother_name"],
        'father_name' => $request->parent["father_name"],
        'father_mobile' => $request->parent["father_phone"],
        'mother_mobile' => $request->parent["mother_phone"],

        'shift' => $request->academics["shift"],
        'stream' => $request->academics["stream"],
        'category' => $request->academics["course"],
        'branch_type' => $request->academics["section"],
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
    if($current_step < 3){
      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 2]);
    }
    
    
    return response()->json([ "msg"=> "stepcomplete", "user"=>$user]);
 }

  public function receiveFormData(Request $request){
      try {
        $user = auth()->user();
    } catch (Exception $e) {
        if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
            return response()->json(['status' => 'Token is Invalid']);
        }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
            return response()->json(['status' => 'Token is Expired']);
        }else{
            return response()->json(['status' => 'Authorization Token not found']);
        }
    }
    $details = DB::table('personalDetails')
      ->where('user_id', $user->id)
      ->first();
    return response()->json(['details' => $details]);

  }
}