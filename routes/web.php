<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;


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
    return view('login');
});
Route::get('/dashboard', function(){
    return view('login');
});
Route::get('/dashboard/edit', function(){
    return view('login');
});
Route::get('/dashboard/createCita', function(){
    return view('login');
});
Route::get('/dashboard/citas', function(){
    return view('login');
});
// Route::get('/login', function(){
//     return view('login');
// });
// Route::get('/dashboard', [DashboardController::class, 'loggeado'])->name('dashboard');;

