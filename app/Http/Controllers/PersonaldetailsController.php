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
        $file = $request->file('file');
        if ($file)
        {
            $filename = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $profile_pic = $user->username . '_picture.' . $extension;
            $file->move(public_path('documents/profile_picture') , $profile_pic);
            $detail = DB::table('personaldetails')->where('user_id', $user->id)
                ->update(['file' => 'documents/profile_picture/' . $profile_pic, ]);
        }

        $details = DB::table('personaldetails')->where('user_id', $user->id)
            ->update(['user_id' => $user->id, 'first_name' => $request->first_name, 'last_name' => $request->last_name, 'height' => $request->height, 'weight' => $request->weight, 'dob' => $request->dob, 'blood_group' => $request->blood_group, 'gender' => $request->gender, 'marital_status' => $request->marital_status, 'disability' => $request->disability, 'aadhar' => $request->aadhar, 'farming_background' => $request->farming_background, 'ruralarea' => $request->ruralarea,

        'mother_name' => $request->mother_name, 'father_name' => $request->father_name, 'father_mobile' => $request->father_phone, 'mother_mobile' => $request->mother_phone,

        'shift' => $request->shift, 'stream' => $request->stream, 'category' => $request->course, //btech mtech
        'section' => $request->section,
        // 'training_sem' => $request->training_sem,
        'training_sem' => "7", 'hostler' => $request->hostler, 'leet' => $request->leet,

        'mobile' => $request->contact, 'whatsapp' => $request->whatsapp_contact,

        'pincode' => $request->pincode, 'district' => $request->district, 'city' => $request->city, 'state' => $request->state, 'address' => $request->address,

        ]);
        if ($current_step < 3)
        {
            $form_step_change = DB::table('form_statuses')->where('user_id', $user->id)
                ->update(['form_step' => 2]);
        }

        return response()
            ->json(["msg" => "stepcomplete", "user" => $user]);
    }

    public function receiveFormData(Request $request)
    {
        try
        {
            $user = auth()->user();
        }
        catch(Exception $e)
        {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException)
            {
                return response()->json(['status' => 'Token is Invalid']);
            }
            else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException)
            {
                return response()->json(['status' => 'Token is Expired']);
            }
            else
            {
                return response()
                    ->json(['status' => 'Authorization Token not found']);
            }
        }
        $details = DB::table('personaldetails')->where('user_id', $user->id)
            ->first();
        return response()
            ->json(['details' => $details]);

    }
}