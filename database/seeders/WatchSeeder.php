<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Watch; // Pastikan model di-import
use Illuminate\Support\Str;

class WatchSeeder extends Seeder
{
    public function run(): void
    {
        $watches = [
            [
                'name' => 'MYWATCH Classic Zero',
                'description' => 'Desain murni tanpa distraksi. Casing stainless steel dengan strap kulit vegan premium.',
                'price' => 299.00,
                'image_url' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'
            ],
            [
                'name' => 'MYWATCH Sport X',
                'description' => 'Diciptakan untuk bergerak. Material aluminium ringan dengan ketahanan air hingga 50 meter.',
                'price' => 349.00,
                'image_url' => 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop'
            ],
            [
                'name' => 'MYWATCH Lunar Edition',
                'description' => 'Edisi terbatas dengan sentuhan warna midnight black dan layar sapphire anti-gores.',
                'price' => 499.00,
                'image_url' => 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop'
            ]
        ];

        foreach ($watches as $watch) {
            Watch::create([
                'name' => $watch['name'],
                'slug' => Str::slug($watch['name']), // Otomatis membuat URL slug
                'description' => $watch['description'],
                'price' => $watch['price'],
                'image_url' => $watch['image_url'],
            ]);
        }
    }
}
