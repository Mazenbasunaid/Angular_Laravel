<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserRoleMappingSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\UserRoleMapping::factory()->create([
            'user_id' => 1,
            'role_id' => 1
        ]);

        \App\Models\UserRoleMapping::factory()->create([
            'user_id' => 1,
            'role_id' => 2
        ]);
    }
}
