<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Twelfth extends Model
{
    use HasFactory;
    protected $table = "twelfth";

    protected $fillable = [
        "board",
        "user_id",
        "urn",
        "crn",
        "institution_name",
        "jee_rank",
        //"marks_type",
        "city",
        "state",
        "pincode",
        "year_of_passing",
        "year_gap",
        "obtained_marks",
        "maximum_marks",
        "percentage",
        "file"
    ];
}
