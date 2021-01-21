<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matriculation extends Model
{
    protected $table = "matriculation";
    use HasFactory;
    protected $fillable = [
     "user_id",
     "urn",
     "crn",
     "file",
     "city", 
     "board",
     "state", 
     "pincode", 
     "marks_type", 
     "maximum_marks",
     "obtained_marks",
     "institution_name",
     "year_of_passing",
    ];

}
