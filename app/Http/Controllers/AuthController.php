<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\Models\User;

class AuthController extends Controller
{
    //
    public function register(Request $request){

         $validatedData =  $request->validate([
            'name'=> 'required|string',
            'email'=> 'required|string|unique:users',
            'password'=> 'required|string|min:6',
            'estudiante_id'=> 'required'

        ]);
         $user =  User::create([
            'name'=> $validatedData['name'],
            'email'=> $validatedData['email'],
            'password'=> Hash::make($validatedData['password']),
            'estudiante_id'=> $validatedData['estudiante_id'],

        ]);
    
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'access_token' => $token,
            'token_type'=> 'Bearer',
             'user'=> $user,
        ]);
      
       
    }

    public function login(Request $request){


        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
         return response()->json([
            'access_token' => $token,
            'token_type'=> 'Bearer',
            'user'=> $user,
        ]);
        
        
    }
    public function infouser(Request $request){
        return $request->user();
    }
}

