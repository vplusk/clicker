<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([            
            'text' => 'Look I am a test text!'
        ]);

        DB::table('items')->insert([
            'text' => 'Look I am another one test text!'
        ]);
    }
}
