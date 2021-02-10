<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\UgDetails;
use App\Models\PgDetails;
use App\Models\FormStatus;
use App\Models\PgCategory;
use Illuminate\Support\Facades\DB;

class PgController extends Controller
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
    $category = PgCategory::updateOrCreate(
      ['user_id' => $user->id],
      [
        'urn' => $user->username,
        'user_id' => $user->id,
        'category' => $request->category
    ]);
    if($request->category == "post"){
      $pg_file = $request->file('file');
      $pg_filename  = $pg_file->getClientOriginalName();
      $pg_extension = $pg_file->getClientOriginalExtension();
      $pg_file_url   = $user->username.'_pg.'.$pg_extension;
      $pg_path = public_path('documents/pg');
      $pg_file->move(public_path('documents/pg'), $pg_file_url);

      $pg_details = PgDetails::updateOrCreate(
        ['user_id' => $user->id],
        [ 'user_id' => $user->id,
          'urn' => $user->username,
          'crn' => 0,
          'pincode' => $request->pincode_of_institution,
          'city' => $request->city_of_institution,
          'state' => $request->state_of_institution,
          'branch' => $request->stream,
          'marks_type' => $request->marks_type,
          'maximum_marks' => $request->maximum_marks,
          'obtained_marks' => $request->obtained_marks,
          'institution_name' => $request->institution_name,
          'year_of_passing' => $request->year_of_passing,
          'file' => $pg_file_url
      ]);
    }
    if($request->category=="NA"){
      $dip = DB::table('pg')->where('user_id', $user->id)->delete();
    }
    if($current_step < 7){
      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 6]);
    }
    return response()->json(["msg"=> "stepcomplete"]);
  }
  public function receiveFormData(Request $request){
    $user = auth()->user();
    $category = DB::table('pg_category')
      ->where('user_id', $user->id)
      ->first();
    if(!$category){
      return response()->json(["category"=> "no category"]);
    }
    elseif($category->category == "post"){
      $details = DB::table('pg')
        ->where('user_id', $user->id)
        ->first();
      return response()->json(["category"=> $category->category, "details"=>$details]);
    }
    else{
      return response()->json(["category"=> $category->category]);
    }
    
  }
}
