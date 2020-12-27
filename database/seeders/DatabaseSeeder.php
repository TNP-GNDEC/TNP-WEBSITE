<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'username' => 'p',
            'role' => 'admin',
            'password' => bycrpt('p')
        ]);
    }
}
