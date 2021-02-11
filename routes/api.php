<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SteptwoController;
use App\Http\Controllers\VerificationController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
  
Route::post('registerstudent', [AuthController::class, 'registerStudent']);
Route::post('registeradmin', [AuthController::class, 'registerAdmin']);
Route::post('login', [AuthController::class,'login'])->name('login');
Route::post('logout', [AuthController::class,'logout']);

// step 1 email verification
Route::post('email/verify', [VerificationController::class, 'verify'])->name('verification.verify');



Route::middleware('auth:api')->group(function (){ 
    Route::get('getUsers', [AuthController::class,'user']);
    Route::get('formStatus', [AuthController::class,'status']);
    
    // step 1 email verification
    Route::post('email/verify', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::get('email/getusers', [VerificationController::class, 'getUsers']);
    
    // step 2 personal details form post request
    Route::post('personaldetails', 'PersonaldetailsController@getFormData');
    Route::get('personalDetails', 'PersonaldetailsController@receiveFormData');

    // step 3  details form post request
    Route::post('matriculation', 'MatriculationController@getFormData');
    Route::get('matriculationdata', 'MatriculationController@receiveFormData');

    // step 4 Diploma or 12th details form post request
    Route::post('diplomatwelfth', 'TwelfthdiplomaController@getFormData');
    Route::get('diplomaTwelfth', 'TwelfthdiplomaController@receiveFormData');

    // step 5 Ug form post request
    Route::post('degreeDetails', 'UgController@getFormData');
    Route::get('degreedetails', 'UgController@receiveFormData');
 
    // step 6 Pg form post request
    Route::post('pgDetails', 'PgController@getFormData');
    Route::get('pgdetails', 'PgController@receiveFormData');
});