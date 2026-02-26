<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Watch; // Import model Watch

Route::get('/', function () {
    // Ambil semua data jam tangan dari database
    $watches = Watch::all();

    // Kirim data tersebut ke komponen Welcome.jsx dengan nama props 'watches'
    return Inertia::render('Welcome', [
        'watches' => $watches
    ]);
});

Route::get('/watch/{slug}', function ($slug) {
    // Cari data jam tangan berdasarkan kolom 'slug'
    $watch = App\Models\Watch::where('slug', $slug)->firstOrFail();

    // Kirim data ke halaman React bernama 'WatchDetail'
    return Inertia::render('WatchDetail', [
        'watch' => $watch
    ]);
})->name('watch.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
