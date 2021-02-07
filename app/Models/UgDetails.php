<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UgDetails extends Model
{
    use HasFactory;
    protected $table = "ug";
    protected $fillable = [
        "credits_sem1",
        "credits_sem2",
        "credits_sem3",
        "credits_sem4",
        "credits_sem5",
        "credits_sem6",
        "credits_sem7",
        "credits_sem8",
        "sgpa_sem1",
        "sgpa_sem2",
        "sgpa_sem3",
        "sgpa_sem4",
        "sgpa_sem5",
        "sgpa_sem6",
        "sgpa_sem7",
        "sgpa_sem8",
        "aggregate_sgpa",
        "aggregate_percentage",
        "aggregate_credits",
        "file",
        "urn",
        "crn"
    ];
}
