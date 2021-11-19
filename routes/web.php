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

Route::get('/coreMembers', function () {
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

Route::get('/technicalMembers', function () {
    return view('welcome');
});

Route::get('/placementRecords', function () {
    return view('welcome');
});

Route::get('/edit/:id', function () {
    return view('welcome');
})->name('example');
Route::get('/editConnect/:id', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/editExplore/:id', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/editDownloads/:id', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/editLinks/:id', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/login', function () {
    return view('welcome');
})
    ->name('example');

Route::get('/majorRecruiters', function () {
    return view('welcome');
})->name('example');

Route::get('/executiveMembers', function () {
    return view('welcome');
})->name('example');

Route::get('/contactDetails', function () {
    return view('welcome');
})->name('example');

Route::get('/more', function () {
    return view('welcome');
})->name('example');

Route::get('/coordinator', function () {

    return view('welcome');
})
    ->name('example');
Route::get('/student', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/admin', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/about', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/genconians', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/forms', function () {
    return view('welcome');
})
    ->name('example');
Route::get('/verify', function () {
    return view('welcome');
})
    ->name('example');

// Route::get('/resetPassword/:token', function () {
//     return view('welcome');
// });
Route::get('/forgetPassword', function () {
    return view('welcome');
});

Route::resource('/addPost', "postController");
Route::resource('/addConnectItems', "ConnectController");
Route::resource('/addExploreItems', "ExploreController");
Route::resource('/addDownloadsItems', "DownloadsController");
Route::resource('/addLinksItems', "LinksController");

Route::post('getposts', 'postController@getposts');

Route::post('/forget-password', 'ForgotPasswordController@postEmail');

Route::get('/resetPassword/{token}', function () {
    return view('welcome');
})->name('example');
Route::post('/checktoken', 'ForgotPasswordController@checkToken');
Route::post('/reset-password', 'ForgotPasswordController@resetPassword');

Route::get('/showPost/{id}', function () {
    return view('welcome');
})->name('example');

//Filter Controller
Route::get('filterData', 'FilterController@receiveFilterData');

//PlacementRecord Controller
Route::get('/placement2021', 'PlacementController@Data2021');
Route::get('/placement2020', 'PlacementController@Data2020');
Route::get('/placement2019', 'PlacementController@Data2019');
Route::get('/placement2018', 'PlacementController@Data2018');
Route::get('/placement2017', 'PlacementController@Data2017');
Route::get('/placement2016', 'PlacementController@Data2016');
Route::get('/placement2015', 'PlacementController@Data2015');

//Certificates
Route::get('/certificate/{id}', function () {
    return view('welcome');
})->name('example');

Route::post('/certData', 'CertificateController@GetCert');

Route::get('/{path?}', function () {
    return view('welcome');
});
