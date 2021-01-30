<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\Twelfth;
use App\Models\Diploma;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class TwelfthdiplomaController extends Controller
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
  if($current_step==3){
    //condition will be checked -> if user has done 12th that file will be requested and stored or otherwise
    $twelfth_file = $request->file('file');
    $twelfth_filename  = $file->getClientOriginalName();
    $twelfth_extension = $file->getClientOriginalExtension();
    $twelfth_file_url  = $user->username.'_twelfth.'.$twelfth_extension;
    $twelfth_path = public_path('documents/twelfth');
    $twelfth_file->move(public_path('documents/twelfth'), $twelfth_file_url);
    
    $diploma_file = $request->file('file');
    $diploma_filename  = $diploma_file->getClientOriginalName();
    $diploma_extension = $diploma_file->getClientOriginalExtension();
    $diploma_file_url   = $user->username._.'diploma.'.$diploma_extension;
    $diploma_path = public_path('documents/diploma');
    $diploma_file->move(public_path('documents/diploma'), $diploma_file_url);

    $twelfth_details = DB::table('twelfth')
    ->where('user_id', $user->id)
    ->update([
        'pincode' => $request->twelfth["pincode"],
        'city' => $request->twelfth["city_of_institution"],
        'state' => $request->twelfth["state_of_institution"],
        'marks_type' => $request->twelfth["marks_type"],
        'maximum_marks' => $request->twelfth["maximum_marks"],
        'obtained_marks' => $request->twelfth["obtained_marks"],
        'institution_name' => $request->twelfth["institution_name"],
        'board' => $request->twelfth["board"],
        'year_of_passing' => $request->twelfth["year_of_passing"],
        'file' => $twelfth_file_url

    ]);

    $diploma_details = DB::table('diploma')
    ->where('user_id', $user->id)
    ->update([
        'pincode' => $request->diploma["pincode"],
        'city' => $request->diploma["city_of_institution"],
        'state' => $request->diploma["state_of_institution"],
        'marks_type' => $request->diploma["marks_type"],
        'maximum_marks' => $request->diploma["maximum_marks"],
        'obtained_marks' => $request->diploma["obtained_marks"],
        'institution_name' => $request->diploma["institution_name"],
        'board' => $request->diploma["board"],
        'year_of_passing' => $request->diploma["year_of_passing"],
        'file' => $diploma_file_url

    ]);

      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 4]);
      return response()->json(["details"=> $details, "form_status"=> $form_step_change]);
    }
    else return response()->json(["details"=> "first complete matriculation details"]);
  }
}
