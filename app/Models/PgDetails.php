<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PgDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        "institution_name",
        "city",
        "state",
        "year_of_passing",
        "obtained_marks",
        "maximum_marks",
        "marks_type",
        "file",
        "pincode",
        "user_id"
    ];
}
