<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TwelfthDiplomaCategory extends Model
{
    use HasFactory;
    protected $table = "twelfth_diploma_category";

    protected $fillable = [
        "user_id",
        "urn",
        "category",
    ];
}
