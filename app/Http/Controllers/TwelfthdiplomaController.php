<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\Twelfth;
use App\Models\Diploma;
use App\Models\FormStatus;
use App\Models\TwelfthDiplomaCategory;
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

  $category = TwelfthDiplomaCategory::updateOrCreate(
    ['user_id' => $user->id],
    [
      'urn' => $user->username,
      'user_id' => $user->id,
      'category' => $request->category
  ]);
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
        'file' => $twelfth_path.'/'.$twelfth_file_url

  ]);
  if($request->category=="XII"){
    
    $dip = DB::table('diploma')->where('user_id', $user->id);
    if($dip->id!=0){
    $filename=$dip->file;
    unlink(storage_path($filename));
    $dip->delete();
    }
  }
  if($current_step <5){
    $form_step_change= DB::table('form_statuses')
    ->where('user_id', $user->id)
    ->update(['form_step' => 4]);
  }

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
      'file' => $diploma_path.'/'.$diploma_file_url
      ]
    );
    if($request->category=="diploma"){
      $twe = DB::table('twelfth')->where('user_id', $user->id);
      if($twe->id!=0){
      unlink(storage_path($filename));
      $twe->delete();
      }
    }
    if($current_step <5){
      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 4]);
    }
    }
    return response()->json(["message"=> "step complete"]);
  }

  public function receiveFormData(Request $request){
    $user = auth()->user();
    $category = DB::table('twelfth_diploma_category')
      ->where('user_id', $user->id)
      ->first();
    if(!$category){
      return response()->json(["category"=> "no category"]);
    }
    elseif($category->category == "both"){
      $twelfth = DB::table('twelfth')
        ->where('user_id', $user->id)
        ->first();
      $diploma = DB::table('diploma')
        ->where('user_id', $user->id)
        ->first();
      return response()->json(["category"=> $category->category,"twelfth" => $twelfth, "diploma" => $diploma]);
    }
    elseif($category->category == "XII"){
      $twelfth = DB::table('twelfth')
        ->where('user_id', $user->id)
        ->first();
      return response()->json(["category"=> $category->category,"twelfth" => $twelfth]);
    }
    elseif($category->category == "diploma"){
      $diploma = DB::table('diploma')
        ->where('user_id', $user->id)
        ->first();
      return response()->json(["category"=> $category->category,"diploma" => $diploma]);
    }
  }
}
