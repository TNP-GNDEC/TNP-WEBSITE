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
  $user = auth()->user();
  $current_step= DB::table('form_statuses')
                    ->where('user_id', $user->id)
                    ->value('form_step');
  if($current_step>=2){
    if($request->category=="XII" || $request->category=="both"){
    $twelfth_file = $request->file('file_12');
    $twelfth_filename  = $twelfth_file->getClientOriginalName();
    $twelfth_extension = $twelfth_file->getClientOriginalExtension();
    $twelfth_file_url  = $user->username.'_twelfth.'.$twelfth_extension;
    $twelfth_path = public_path('documents/twelfth');
    $twelfth_file->move(public_path('documents/twelfth'), $twelfth_file_url);

    $twelfth_details = Twelfth::updateOrCreate(
      ['user_id' => $user->id],
      [
        'urn' => $user->username,
        'user_id' => $user->id,
        'pincode' => $request->pincode_12,
        'city' => $user->username,
        'jee_rank' => $request->jee_rank_12,
        'state' => $request->state_12,
        'marks_type' => $request->marks_type_12,
        'maximum_marks' => $request->maximum_marks_12,
        'obtained_marks' => $request->obtained_marks_12,
        'institution_name' => $request->institution_name_12,
        'board' => $request->board_12,
        'year_of_passing' => $request->year_of_passing_12,
        'file' => $twelfth_file_url

  ]);
  
    }
    
    if($request->category=="diploma" || $request->category=="both"){
    $diploma_file = $request->file('file_diploma');
    $diploma_filename  = $diploma_file->getClientOriginalName();
    $diploma_extension = $diploma_file->getClientOriginalExtension();
    $diploma_file_url   = $user->username.'_diploma.'.$diploma_extension;
    $diploma_path = public_path('documents/diploma');
    $diploma_file->move(public_path('documents/diploma'), $diploma_file_url);

    $diploma_details = Diploma::updateOrCreate(
      ['user_id' => $user->id],
      [ 'user_id' => $user->id,
      'urn' => $user->username,
      'pincode' => $request->pincode_diploma,
      'city' => $request->city_diploma,
      'state' => $request->state_diploma,
      'marks_type' => $request->marks_type_diploma,
      'maximum_marks' => $request->maximum_marks_diploma,
      'obtained_marks' => $request->obtained_marks_diploma,
      'institution_name' => $request->institution_name_diploma,
      'branch' => $request->branch_diploma,
      'year_of_passing' => $request->year_of_passing_diploma,
      'file' => $diploma_file_url
      ]
  );

    }
    return response()->json(["message"=> "step complete"]);

      }
    else return response()->json(["message"=> "fill 10th details first"]);
  }
}
