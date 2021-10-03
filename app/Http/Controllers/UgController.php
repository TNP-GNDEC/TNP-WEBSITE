<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Models\UgDetails;
use App\Models\FormStatus;
use Illuminate\Support\Facades\DB;

class UgController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next)
        {

            $this->user = Auth::user();

            return $next($request);
        });
    }

    public function getFormData(Request $request)
    {
        $user = auth()->user();
        $current_step = DB::table('form_statuses')->where('user_id', $user->id)
            ->value('form_step');
        $ug_file = $request->file('file');
        $ug_filename = $ug_file->getClientOriginalName();
        $ug_extension = $ug_file->getClientOriginalExtension();
        $ug_file_url = $user->username . '_ug.' . $ug_extension;
        $ug_path = public_path('documents/ug');
        $ug_file->move(public_path('documents/ug') , $ug_file_url);

        $ug_details = UgDetails::updateOrCreate(['user_id' => $user->id], ['urn' => $user->username, 'user_id' => $user->id, 'pincode' => $request->pincode, 'city' => $request->city, 'state' => $request->state, 'marks_type' => $request->marks_type, 'maximum_marks' => $request->maximum_marks, 'obtained_marks' => $request->obtained_marks, 'institution_name' => $request->institution_name, 'file' => $ug_path . '/' . $ug_file_url, 'year_of_passing' => $request->year_of_passing, 'branch' => $request->branch

        ]);
        if ($current_step < 6)
        {
            $form_step_change = DB::table('form_statuses')->where('user_id', $user->id)
                ->update(['form_step' => 5]);
        }
        return response()
            ->json(["msg" => "stepcomplete"]);
    }

    public function receiveFormData(Request $request)
    {
        $user = auth()->user();
        $details = DB::table('ug')->where('user_id', $user->id)
            ->first();

        return response()
            ->json(["details" => $details]);
    }
}