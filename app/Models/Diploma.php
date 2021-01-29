<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diploma extends Model
{
    use HasFactory;

    protected $fillable = [
        "board",
        "institution_name",
        "city_of_institute",
        "state_of_institute",
        "year_of_passing",
        "obtained_marks",
        "maximum_marks ",
        "stream",
        "file",
        "marks_type",
        "user_id"
    ];
}
