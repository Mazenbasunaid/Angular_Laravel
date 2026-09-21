<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'first_name' => 'Jane',
            'last_name' => 'Doe',
            'username' => 'janedoe',
            'email' => 'jane.doe@dentalclinic.test',
            'dob' => '1973-06-09',
            'license_accepted' => true
        ]);
    }
}
