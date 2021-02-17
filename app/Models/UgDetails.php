<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UgDetails extends Model
{
    use HasFactory;
    protected $table = "ug";
    protected $fillable = [
        "institution_name",
        "pincode",
        "city",
        "marks_type",
        "maximum_marks",
        "obtained_marks",
        "state",
        "file",
        "year_of_passing",
        "branch",
        "urn",
        "user_id"
    ];
}
