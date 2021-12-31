<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\FormStatus;
use App\Models\PersonalDetails;
use App\Models\Matriculation;
use Exception;
use Illuminate\Support\Facades\Hash;
// use App\Models\Diploma;
// use App\Models\Twelfth;
// use App\Models\TwelfthDiplomaCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Providers\JWTAuthServiceProvider;
use JWTAuth;

class AuthController extends Controller
{
    public function registerStudent(Request $request)
    {
        // error_log("----------------------------------------------------");
        // error_log($request);
        $users= $request->data;
        $data=0;
        foreach($users["data"] as $user){
            $user['uuid']=(string) Str::uuid();
            $user['role_id']=1;
            $user['is_verified']=0;
            $user['username']=(string) $user['urn'];
            $user['password']=bcrypt($user['crn']);

            // error_log("=================================================================");
            // error_log($user['username']);
            // error_log($user['password']);
            // error_log("=================================================================");

            $is_user= DB::table('users')
				->where('username', $user['username'])->exists();

            if($is_user){
                error_log("if condition");
                //$update=DB::table('users')
                    // ->where('username', $user['username'])
                    // ->update(['password' => $user['password']]);
                $update2=DB::table('personaldetails')
                    ->where('urn', $user['username'])
                    ->update(['crn' => $user['crn']]);
                $update3=DB::table('matriculation')
                    ->where('urn', $user['username'])
                    ->update(['crn' => $user['crn']]);
                $update4=DB::table('twelfth')
                    ->where('urn', $user['username'])
                    ->update(['crn' => $user['crn']]);
                $update5=DB::table('diploma')
                    ->where('urn', $user['username'])
                    ->update(['crn' => $user['crn']]);
            }
            else{
                try{
                    $newUser = User::create([
                        "username" => $user['username'],
                        "password" => $user['password'],
                        "role_id" => 1,
                        "uuid" => $user['uuid'],
                        "email" => ""
                    ]);
                    // $count++;
                    $form_user= formStatus::create([
                        'user_id' => $newUser->id,
                        'form_step' => 0
                    ]);
                    $form_step_two = PersonalDetails::create([
                        'user_id' => $newUser->id,
                        'urn' => $user['urn'],
                        'crn' => $user['crn'],
                        // 'first_name' => $user['first_name'],
                        // 'last_name' => $user['last_name'],
                        // 'gender' => $user['gender'],
                        // 'father_name' => $user['father_name'],
                        // 'mother_name' => $user['mother_name'],
                        // 'category' => $user['category'], //course on frontend is btech mtech and category is course
                        // 'stream' => $user['stream'],
                        // 'shift' => $user['shift'],
                        // 'leet' => $user['leet'],
                    ]);
                    // if($user['maximum_marks_10']==10){
                    $form_step_three = Matriculation::create([
                        'user_id' => $newUser->id,
                        'urn' => $user['urn'],
                        'crn' => $user['crn'],
                        // 'maximum_marks' => $user['maximum_marks_10'],
                        // 'obtained_marks' => $user['obtained_marks_10'],
                        // 'percentage' => $user['percentage_10'],
                        // 'marks_type' => 1,
                        // 'year_of_passing' => $user['yop_10']
                    ]);
                    
                    // }
                    // else{
                    //     $form_step_three = Matriculation::create([
                    //         'user_id' => $newUser->id,
                    //         'urn' => $user['urn'],
                    //         'crn' => $user['crn'],
                    //         'maximum_marks' => $user['maximum_marks_10'],
                    //         'obtained_marks' => $user['obtained_marks_10'],
                    //         'percentage' => $user['percentage_10'],
                    //         'marks_type' => 0,
                    //         'year_of_passing' => $user['yop_10']
                    //     ]);
                    // }
                    // if($user['leet']==0){
                        // $form_step_four = Twelfth::updateOrCreate([
                        //     'user_id' => $newUser->id,
                        //     'urn' => $user['urn'],
                            // 'crn' => $user['crn'],
                            // 'maximum_marks' => $user['maximum_marks_12'],
                            // 'obtained_marks' => $user['obtained_marks_12'],
                            // 'percentage' => $user['percentage_12'],
                            // 'year_of_passing' => $user['yop_12']
                        // ]);
                        // $category = TwelfthDiplomaCategory::updateOrCreate(
                        //     ['user_id' => $newUser->id,
                        //     'urn' => $user['urn'],
                            //   'category' => 'XII'
                        //   ]);
                        // }
                        // else{
                        //     $form_step_four = Diploma::create([
                        //         'user_id' => $newUser->id,
                        //         'urn' => $user['urn'],
                        //         'crn' => $user['crn'],
                        //         'maximum_marks' => $user['maximum_marks_12'],
                        //         'obtained_marks' => $user['obtained_marks_12'],
                        //         'percentage' => $user['percentage_12'],
                        //         'year_of_passing' => $user['yop_12']
                        //     ]);
                        //     $category = TwelfthDiplomaCategory::create([
                        //         'user_id' => $newUser->id,
                        //         'urn' => $user['urn'],
                        //         'category' => 'Diploma'
                        //       ]);
                        //     }
                }
                catch(Exception $e){
                    // error_log($e);

                    // Error response incase something goes wrong in the server
                    return response()->json(["message"=>"Something went wrong","success"=>0]);
                }
            }
            //else return response()->json(["message"=>"Data couldn't be added", "success"=>0 ]);
        }

        // Success response when data is updated in the database
        return response()->json(["message"=>"Data added successfully","success"=>1,"data"=>$users["data"]]);
    }


    public function registerUser(Request $request){
        $newUser['uuid'] = (string) Str::uuid();
        $newUser['urn'] = (string)($request->username);
        $newUser['crn'] = (string)($request->password);
        $newUser['username'] = (string)($request->username);
        $newUser['password'] = bcrypt($request->password);
        $newUser['role_id'] = 1;
        $newUser['is_verified'] = 0;
        // error_log("=================================================================");
        // error_log($newUser['username']);
        // error_log($newUser['password']);
        // error_log("=================================================================");

        $existingUser= DB::table('users')
				->where('username', $newUser['username'])->exists();

        if($existingUser){
            // This part executes when a user with the current username exists in the database

            // error_log("user match found");

            // $update=DB::table('users')
            //     ->where('username', $newUser['username'])
            //     ->update(['password' => $newUser['password']]);

            $update2 = DB::table('personaldetails')     // For updating the user in form status table
                ->where('urn', $newUser['username'])
                ->update(['crn' => $newUser['crn']]);

            $update3 = DB::table('matriculation')       // For updating the user in matriculation table
                ->where('urn', $newUser['username'])
                ->update(['crn' => $newUser['crn']]);

            $update4 = DB::table('twelfth')             // For updating the user in twelfth table
                ->where('urn', $newUser['username'])
                ->update(['crn' => $newUser['crn']]);

            $update5 = DB::table('diploma')             // For updating the user in diploma table
                ->where('urn', $newUser['username'])
                ->update(['crn' => $newUser['crn']]);

        }else{
            // This part executes when no user with the current username exists in the database

            // error_log("user match not found");
            try{
                $new_user = User::create([              // For registering the new user
                    "username" => $newUser['username'],
                    "password" => $newUser['password'],
                    "role_id" => 1,
                    "uuid" => $newUser['uuid'],
                    "email" => ""
                ]);

                $form_user= formStatus::create([        // For adding the user in form status table
                    'user_id' => $new_user->id,
                    'form_step' => 0
                ]);

                $form_step_two = PersonalDetails::create([      // For adding the user in form status table
                    'user_id' => $new_user->id,
                    'urn' => $newUser['urn'],
                    'crn' => $newUser['crn']
                ]);

                $form_step_three = Matriculation::create([      // For adding the user in matriculation table
                    'user_id' => $new_user->id,
                    'urn' => $newUser['urn'],
                    'crn' => $newUser['crn']
                ]);
            }
            catch(Exception $e) {
                // Error response incase something goes wrong in the server
                return response()->json(["message"=>"Something went wrong","success"=>0]);
            }
        }
        // Success response when data is updated in the database
        return response()->json(["message"=>"Data added successfully","success"=>1]);
    }


    public function registerAdmin(Request $request)
    {

        $user = $request->data;
        $newAdmin = User::create(['role_id' => 2, 'username' => $request->username, 'password' => bcrypt($request->password) , 'email' => $request->email, 'uuid' => (String)Str::uuid() ]);
        return response()
            ->json(["message" => "admin added successfully"]);
    }

    public function login(Request $request)
    {
        $request->validate(['username' => 'required', 'password' => 'required']);
        $token = JWTAuth::attempt(['username' => $request->username, 'password' => $request->password]);

        if (!$token)
        {
            return response()->json(['alert' => 'Invalid credentials']);
        }

        $currentUser = Auth::user();

        return $this->respondWithToken($token, $currentUser);

    }
    public function logout()
    {
        auth()->logout();

        return response()
            ->json(['message' => 'Successfully logged out']);
    }
    protected function respondWithToken($token, $currentUser)
    {
        return response()->json(['access_token' => $token, 'token_type' => 'bearer', 'expires_in' => auth('api')->factory()
            ->getTTL() * 2, 'current_user' => $currentUser]);
    }
    public function user()
    {
        $data = auth()->user();
        $user = DB::table('users')->where('id', $data->id)
            ->first();
        return response()
            ->json(['user' => $user]);
    }
    public function status(Request $request)
    {
        $data = auth()->user();
        $form = DB::table('form_statuses')->where('user_id', $data->id)
            ->first();
        return response()
            ->json(['step' => $form]);
    }

    public function refresh()
    {
        return $this->respondWithToken(Auth::guard('api')
            ->refresh());
    }

}

