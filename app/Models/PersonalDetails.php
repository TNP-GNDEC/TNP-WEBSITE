<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalDetails extends Model
{
    protected $table = "personaldetails";
    use HasFactory;
    protected $fillable = [
     "user_id",
     "urn",
     "crn",
     "first_name",
     "last_name", 
     "mobile", 
     "whatsapp", 
     "father_name", 
     "father_mobile", 
     "mother_name", 
     "mother_mobile", 
     "dob", 
     "height", 
     "weight", 
     "gender", 
     "address", 
     "city", 
     "state", 
     "district", 
     "pincode", 
     "farming_background", 
     "marital_status", 
     "aadhar", 
     "branch_type", 
     "stream", 
     "hostler", 
     "training_sem", 
     "shift", 
     "category", 
     "disability", 
     "leet", 
     "blood_group" 
    ];

}
