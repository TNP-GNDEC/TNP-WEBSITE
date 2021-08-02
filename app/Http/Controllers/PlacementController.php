<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use App\Models\Data2021;
use App\Models\Data2020;
use App\Models\Data2019;
use App\Models\Data2018;
use App\Models\Data2017;
use App\Models\Data2016;
use App\Models\Data2015;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class PlacementController extends Controller
{
  public function Data2021()
  {
	  $record = DB::table('2021_passout')->get();
    return response() -> json(['status' => 200, 'record21' => $record]);
  }

  public function Data2020()
  {
	  $record = DB::table('2020_passout')->get();
    return response() -> json(['status' => 200, 'record20' => $record]);
  }

  public function Data2019()
  {
	  $record = DB::table('2019_passout')->get();
    return response() -> json(['status' => 200, 'record19' => $record]);
  }

  public function Data2018()
  {
	  $record = DB::table('2018_passout')->get();
    return response() -> json(['status' => 200, 'record18' => $record]);
  }

  public function Data2017()
  {
	  $record = DB::table('2017_passout')->get();
    return response() -> json(['status' => 200, 'record17' => $record]);
  }

  public function Data2016()
  {
	  $record = DB::table('2016_passout')->get();
    return response() -> json(['status' => 200, 'record16' => $record]);
  }

  public function Data2015()
  {
	  $record = DB::table('2015_passout')->get();
    return response() -> json(['status' => 200, 'record15' => $record]);
  }
}