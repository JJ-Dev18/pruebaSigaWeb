<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class DashboardController extends Controller
{
    //
    public function loggeado(){
        if(Auth::guess()){
            return route('/');
        }

        return view('dashboard');
    }
}
