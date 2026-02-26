<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('watches', function (Blueprint $table) {
        $table->id();
        $table->string('name'); // Nama jam, misal: "MYWATCH Series 1"
        $table->string('slug')->unique(); // Untuk URL ramah SEO, misal: "mywatch-series-1"
        $table->text('description'); // Penjelasan produk
        $table->decimal('price', 10, 2); // Harga dengan 2 angka di belakang koma
        $table->string('image_url'); // Link/path gambar jam tangan
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('watches');
    }
};
