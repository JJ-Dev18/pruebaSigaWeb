<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estudiantes;
class EstudiantesController extends Controller
{
    //
    public function show(){
         $estudiantes = Estudiantes::all();
        return response()->json([
            'estudiantes' => $estudiantes
        ]);
    }
}
