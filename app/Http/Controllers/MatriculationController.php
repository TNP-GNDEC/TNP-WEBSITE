<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\Matriculation;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class MatriculationController extends Controller
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

    $file = $request->file('file');
    if($file){
      $filename  = $file->getClientOriginalName();
      $extension = $file->getClientOriginalExtension();
      $matriculation_file   = $user->username.'_matriculation.'.$extension;
      $path=public_path('documents/matriculation');
      $file->move(public_path('documents/matriculation'), $matriculation_file);
      $detail = DB::table('matriculation')
      ->where('user_id', $user->id)
      ->update(['file' => '/documents/matriculation/'.$matriculation_file]);
    }

    $details = DB::table('matriculation')
    ->where('user_id', $user->id)
    ->update([
        'state' => $request->state,
        'pincode' => $request->pincode,
        'city' => $request->city,
        'marks_type' => $request->marks_type,
        'maximum_marks' => $request->maximum_marks,
        'obtained_marks' => $request->obtained_marks,
        'institution_name' => $request->institution_name,
        'board' => $request->board,
        'year_of_passing' => $request->year_of_passing,

    ]);
    if($request->marks_type==1)
    $details = DB::table('matriculation')
    ->where('user_id', $user->id)
    ->update([
        'percentage' => $request->obtained_marks * 9.5,
    ]);
    else
    $details = DB::table('matriculation')
    ->where('user_id', $user->id)
    ->update([
        'percentage' => ($request->obtained_marks) * 100/ ($request->maximum_marks),
    ]);
    if($current_step <4){
      $form_step_change= DB::table('form_statuses')
      ->where('user_id', $user->id)
      ->update(['form_step' => 3]);
    }
    return response()->json(["msg"=> "stepcomplete"]);
  }

  public function receiveFormData(Request $request){
    $user = auth()->user();
    $details = DB::table('matriculation')
      ->where('user_id', $user->id)
      ->first();
      
    return response()->json(["details"=> $details]);
  }
}
