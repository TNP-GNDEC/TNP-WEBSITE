<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/addPosts', function () {
    return view('welcome');
});
Route::get('/addConnect', function () {
    return view('welcome');
});
Route::get('/addExplore', function () {
    return view('welcome');
});
Route::get('/addDownloads', function () {
    return view('welcome');
});
Route::get('/addLinks', function () {
    return view('welcome');
});

Route::get('/edit/:id', function () {
    return view('welcome');
});
Route::get('/editConnect/:id', function () {
    return view('welcome');
});
Route::get('/editExplore/:id', function () {
    return view('welcome');
});
Route::get('/editDownloads/:id', function () {
    return view('welcome');
});
Route::get('/editLinks/:id', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('welcome');
});

Route::get('/coordinator', function () {
    return view('welcome');
});
Route::get('/student', function () {
    return view('welcome');
});
Route::get('/about', function () {
    return view('welcome');
});
Route::get('/email', function () {
    return view('welcome');
});

Route::get('/resetPass', function () {
    return view('welcome');
});
Route::get('/forgetPass', function () {
    return view('welcome');
});

Route::resource('/addPost', "postController");
Route::resource('/addConnectItems', "ConnectController");
Route::resource('/addExploreItems', "ExploreController");
Route::resource('/addDownloadsItems', "DownloadsController");
Route::resource('/addLinksItems', "LinksController");