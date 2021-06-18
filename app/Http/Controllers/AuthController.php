<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\FormStatus;
use App\Models\PersonalDetails;
use App\Models\Matriculation;
use App\Models\Diploma;
use App\Models\Twelfth;
use App\Models\TwelfthDiplomaCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Providers\JWTAuthServiceProvider;
use JWTAuth;

class AuthController extends Controller
{
    public function registerStudent(Request $request)
    {
        $users= $request->data;
        $data=0;
        foreach($users["data"] as $user){
            $user['uuid']=(string) Str::uuid();
            $user['role_id']=1;
            $user['is_verified']=0;
            $user['username']=$user['urn'];
            $user['password']=bcrypt($user['crn']);
            
            
            $newUser = User::create($user);
            if($newUser){ 
                $form_user= formStatus::create([
                'user_id' => $newUser->id

                ]);
                $form_step_two = PersonalDetails::create([
                    'user_id' => $newUser->id,
                    'urn' => $user['urn'],
                    'crn' => $user['crn'],
                    'first_name' => $user['first_name'],
                    'last_name' => $user['last_name'],
                    'gender' => $user['gender'],
                    'father_name' => $user['father_name'],
                    'mother_name' => $user['mother_name'],
                    'category' => $user['category'], //course on frontend is btech mtech and category is course
                    'stream' => $user['stream'], 
                    'shift' => $user['shift'],
                    'leet' => $user['leet'],
                ]);
                if($user['maximum_marks_10']==10){
                $form_step_three = Matriculation::create([
                    'user_id' => $newUser->id,
                    'urn' => $user['urn'],
                    'crn' => $user['crn'],
                    'maximum_marks' => $user['maximum_marks_10'],
                    'obtained_marks' => $user['obtained_marks_10'],
                    'percentage' => $user['percentage_10'],
                    'marks_type' => 1,
                    'year_of_passing' => $user['yop_10']
                ]);
                }
                else{
                    $form_step_three = Matriculation::create([
                        'user_id' => $newUser->id,
                        'urn' => $user['urn'],
                        'crn' => $user['crn'],
                        'maximum_marks' => $user['maximum_marks_10'],
                        'obtained_marks' => $user['obtained_marks_10'],
                        'percentage' => $user['percentage_10'],
                        'marks_type' => 0,
                        'year_of_passing' => $user['yop_10']
                    ]);
                }
                if($user['leet']==0){
                    $form_step_four = Twelfth::create([
                        'user_id' => $newUser->id,
                        'urn' => $user['urn'],
                        'crn' => $user['crn'],
                        'maximum_marks' => $user['maximum_marks_12'],
                        'obtained_marks' => $user['obtained_marks_12'],
                        'percentage' => $user['percentage_12'],
                        'year_of_passing' => $user['yop_12']
                    ]);
                    $category = TwelfthDiplomaCategory::create(
                        ['user_id' => $newUser->id,
                        'urn' => $user['urn'],
                          'category' => 'XII'
                      ]);                
                    }

                    else{
                        $form_step_four = Diploma::create([
                            'user_id' => $newUser->id,
                            'urn' => $user['urn'],
                            'crn' => $user['crn'],
                            'maximum_marks' => $user['maximum_marks_12'],
                            'obtained_marks' => $user['obtained_marks_12'],
                            'percentage' => $user['percentage_12'],
                            'year_of_passing' => $user['yop_12']
                        ]);
                        $category = TwelfthDiplomaCategory::create([
                            'user_id' => $newUser->id,
                            'urn' => $user['urn'],
                            'category' => 'Diploma'
                          ]);                
                        }
                    }

               else return response()->json(["message"=>"Data couldn't be added", "success"=>0 ]);
            }
        
        return response()->json(["message"=>"Data added successfully","success"=>1,"data"=>$users["data"]]);
    }

    public function registerAdmin(Request $request){

        $user=$request->data;
        $newAdmin=User::create([
            'role_id'=> 2,
            'username'=> $request->username,
            'password' => bcrypt($request->password),
            'email' => $request->email,
            'uuid' => (String) Str::uuid()
        ]);
        return response()->json(["message"=>"admin added successfully"]);
    }

    public function login(Request $request){
    $request->validate([
        'username' => 'required',
        'password' => 'required'
    ]);
    $token = JWTAuth::attempt(['username'=>$request->username, 'password'=>$request->password]);

    if (! $token ) {
        return response()->json(['alert' => 'invalid credentials']);
    }

    $currentUser = Auth::user();

    return $this->respondWithToken($token,$currentUser);

}
public function logout()
{
    auth()->logout();

    return response()->json(['message' => 'Successfully logged out']);
}
protected function respondWithToken($token, $currentUser)
{
    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 2,
        'current_user' => $currentUser
    ]);
}
public function user(){
    $data = auth()->user();
    $user = DB::table('users')
       ->where('id', $data->id)
       ->first();
    return response()->json(['user' => $user]);
}
public function status(Request $request){
    $data= auth()->user();
    $form = DB::table('form_statuses')
      ->where('user_id', $data->id)
      ->first();
    return response()->json(['step'=>$form]);
}

public function refresh() {
    return $this->respondWithToken(Auth::guard('api')->refresh());
}

}