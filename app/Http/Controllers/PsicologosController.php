<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Psicologos;

class PsicologosController extends Controller
{
    //
    public function show(){
         $psicologos = Psicologos::all();
        return response()->json([
            'psicologos' => $psicologos
        ]);
    }

    public function create(){
        

         $psicologo =  Psicologos::create([
            'name'=> $validatedData['name'],
            'email'=> $validatedData['email'],
            'password'=> Hash::make($validatedData['password'])

        ]);
    }
}
