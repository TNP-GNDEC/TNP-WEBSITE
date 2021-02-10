<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\PersonalDetails;
use App\Models\Matriculation;
use App\Models\Diploma;
use App\Models\Twelfth;
use App\Models\TwelfthDiplomaCategory;
use App\Models\UgDetails;
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

 public function getFormData(Request $request)
  {
    $user = auth()->user();
    $personal_details = DB::table('personalDetails')
      ->where('user_id', $user->id)
      ->first();

    $matriculation_details = DB::table('matriculation')
      ->where('user_id', $user->id)
      ->first();

    $twelfth_diploma_category = DB::table('twelfth_diploma_category')
      ->where('user_id', $user->id)
      ->first();
    
    if($twelfth_diploma_category->category == "both" || $twelfth_diploma_category->category=="diploma"){
      $diploma_details = DB::table('diploma')
        ->where('user_id', $user->id)
        ->first();
    }

    if($twelfth_diploma_category->category == "both" || $twelfth_diploma_category->category == "XII"){
      $twelfth_details = DB::table('twelfth')
        ->where('user_id', $user->id)
        ->first();
    }

    $ug_details = DB::table('ug')
    ->where('user_id', $user->id)
    ->first();


    }
}
