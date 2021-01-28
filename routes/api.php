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
Route::post('email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');

// step 2 personal details form post request
Route::post('personaldetails/{id}', 'PersonaldetailsController@getFormData');

// step 3  details form post request
Route::post('matriculation/{id}', 'MatriculationController@getFormData');

// step 4 Diploma or 12th details form post request
Route::post('diplomatwelfth/{id}', 'TwelfthdiplomaController@getFormData');