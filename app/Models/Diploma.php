<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diploma extends Model
{
    use HasFactory;
    protected $table = "diploma";
    protected $fillable = [
        "branch",
        "user_id",
        "urn",
        "institution_name",
        "city",
        "state",
        "pincode",
        "year_of_passing",
        "obtained_marks",
        "maximum_marks",
        "file",
        "marks_type",
        "user_id"
    ];
}
