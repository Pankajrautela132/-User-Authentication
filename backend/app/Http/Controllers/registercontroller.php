<?php

namespace App\Http\Controllers;


use App\Models\authentication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class registercontroller extends Controller
{
    //
    public function Singup(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        authentication::create([
            "name" => $request->name,
            "email" => $request->email,
            'password' => Hash::make($validated['password'])
        ]);
        return response()->json([
            'message' => 'successfully register',
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            return response()->json([
                'message' => 'Login successful'
            ]);
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }
    public function logout()
    {
        Auth::logout();
        return response()->json([
            "message" => "logout successfully"
        ]);
    }
    public function fetchall(Request $request){
        $student = authentication::getalldatastudent();
        return response()-> json($student);
    }
}
