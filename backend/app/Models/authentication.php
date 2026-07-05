<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;


class authentication extends Authenticatable
{
    //
    protected $table = 'authentication';
    protected $fillable = [
        'name',
        'email',
        'password'
    ];
    public static function getalldata(){
     return  self::all();   
    }
 
    public static function getalldatastudent(){
        return self::select('name','email')->get();
    }
}
