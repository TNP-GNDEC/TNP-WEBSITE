<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CertificateController extends Controller
{
  public function GetCert(Request $request)
  {
    $id = $request->id;
	  $cert = DB::table('certificate_tnp')->where('certificate_id', $request->id)->get();
    return response() -> json(['status' => 200, 'cert' => $cert , 'id' => $request->id]);
  }
}