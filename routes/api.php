<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CitasController;
use App\Http\Controllers\EstudiantesController;
use App\Http\Controllers\PsicologosController;

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
Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);
Route::get('/estudiantes', [EstudiantesController::class,'show']);
Route::get('/psicologos', [PsicologosController::class,'show']);

Route::get('/citas', [CitasController::class,'index']);
Route::get('/citas/psicologo/{id}', [CitasController::class,'citasPsicologo']);
Route::get('/citas/user/{id}', [CitasController::class,'citasUser']);
Route::post('/citas', [CitasController::class,'index']);
Route::put('/citas/{id}', [CitasController::class,'citasPsicologo']);

Route::get('/userinfo', [AuthController::class,'infouser'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
