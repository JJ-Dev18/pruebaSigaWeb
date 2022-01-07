<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Citas;

class CitasController extends Controller
{
    //
    public function index(){
        $citas = Citas::all();
        return response()->json([
            'citas' => $citas
        ]);
    }
    public function citasPsicologo(Request $request){
        $id = $request->id;
        $citas = Citas::join('users','user_id','=','users.id')->join('estudiantes','users.estudiante_id','=','estudiantes.id')
        ->where('psicologo_id','=', $id )
        ->where('status','=', 1 )
        ->get(['citas.*','estudiantes.name as estudiante','users.name as acudiente']);
        // ->get([])
                             
        return response()->json([
            'citas'=> $citas
        ]);
    }
    public function citasUser(Request $request){
        $id = $request->id;
        $citas = Citas::join('users','user_id','=','users.id')->join('psicologos', 'psicologo_id','=','psicologos.id')
        ->where('users.id','=', $id )
        ->where('status','=', 1 )
        ->get(['citas.*','users.name as acudiente','psicologos.name as psicologo']);
        // ->get([])
                             
        return response()->json([
            'citas'=> $citas
        ]);
    }
    public function create(Request $request){
       $cita = Citas::create([
        'motivo'=> $request->motivo,
        'status'=> 1,       
        'fecha'=>$request->fecha,
        'hora'=>$request->hora,
        'user_id'=>$request->id,
        'psicologo_id' => $request->psicologo
       ]);
    }
    public function update(Request $request){

         $cita = Citas::findOrFail($request->id);
         $cita->observacion = $request->observacion;
         $cita->fecha = $request->fecha;
         $cita->hora = $request->hora;
         $cita->save();

         return $cita;
    //
    }
    public function destroy(Request $request){
     $cita = Citas::findOrFail($request->id);
     $cita->status = 0;
     $cita->save();
    }
}
