import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';

export default function WatchDetail({ watch }) {
    return (
        <MainLayout>
            {/* Mengubah title tab browser sesuai nama produk */}
            <Head title={`${watch.name} | MYWATCH`} />

            <div className="max-w-7xl mx-auto px-10 py-24 min-h-screen flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">

                    {/* Bagian Kiri: Gambar Produk (Muncul dari kiri) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="aspect-square bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src={watch.image_url}
                            alt={watch.name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Bagian Kanan: Detail & Tombol (Muncul dari kanan) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Tombol Kembali (Menggunakan komponen Link dari Inertia) */}
                        <Link
                            href="/"
                            className="text-sm text-gray-500 hover:text-black dark:hover:text-white uppercase tracking-widest mb-8 inline-block transition-colors"
                        >
                            ← Back to Collection
                        </Link>

                        <h1 className="text-5xl font-light mb-6">{watch.name}</h1>
                        <p className="text-2xl font-light text-gray-600 dark:text-gray-300 mb-8">${watch.price}</p>

                        <div className="h-px bg-gray-300 dark:bg-zinc-800 w-full mb-8"></div> {/* Garis pembatas */}

                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 text-lg">
                            {watch.description}
                        </p>

                        <button className="px-10 py-4 bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto shadow-lg hover:shadow-xl">
                            Pre-Order Now
                        </button>
                    </motion.div>

                </div>
            </div>
        </MainLayout>
    );
}
