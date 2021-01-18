<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StepThree extends Model
{
    protected $table = "step_two";
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
