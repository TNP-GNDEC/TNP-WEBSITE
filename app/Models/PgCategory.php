<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PgCategory extends Model
{
    use HasFactory;
    protected $table = "pg_category";

    protected $fillable = [
        "user_id",
        "urn",
        "category",
    ];
}