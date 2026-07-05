<?php

use App\Http\Controllers\registercontroller;
use Illuminate\Support\Facades\Route;

Route::post('register',[registercontroller::class,'Singup']);
Route::post("/login",[registercontroller::class,'login']);
Route::post("logout",[registercontroller::class,'logout']);
Route::get("datafetch",[registercontroller::class,'fetchall']);