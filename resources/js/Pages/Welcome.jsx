import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';


export default function Welcome({ watches = [] }) {
    const heroImages = [
        "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=1632&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1434494343833-76b479733705?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1600&auto=format&fit=crop"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const scrollVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const scrollToContent = (e) => {
        e.preventDefault();
        const content = document.getElementById('explore-content');
        if (content) {
            content.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <MainLayout>
            <Head title="MYWATCH | Elegance on your wrist" />

            {/* 1. GAMBAR BACKGROUND ABSOLUTE (FULLSCREEN) */}
            {/* Mengambil alih seluruh layar (h-screen) mulai dari pojok kiri atas (top-0 left-0) */}
            <div className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt={`MYWATCH Hero ${currentImageIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        // Hilangkan padding & border-radius, penuhi layar (w-full h-full object-cover)
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 dark:opacity-50"
                    />
                </AnimatePresence>
            </div>

            {/* 2. KONTEN TEKS HERO DI TENGAH */}
            {/* Memiliki z-10 agar berada di atas gambar */}
            <section className="relative z-10 w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-extrabold text-white uppercase tracking-[0.5em] ml-[0.5em] text-center drop-shadow-lg"
                >
                    MYWATCH
                </motion.h1>

                {/* Tombol Scroll */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10"
                >
                    <a
                        href="#explore-content"
                        onClick={scrollToContent}
                        className="text-xs uppercase tracking-[0.3em] font-semibold text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                        scroll
                    </a>
                </motion.div>
            </section>

            {/* 3. BAGIAN BAWAH (Konten Website) */}
            {/* Diberi background solid agar saat di-scroll menutupi gambar fullscreen di atasnya */}
            <div id="explore-content" className="relative z-10 bg-[#f4f4f4] dark:bg-zinc-900 pt-32 pb-20 transition-colors duration-500 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">

                <div className="flex flex-col items-center justify-center px-10">
                    <motion.h2
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-light tracking-tight text-center"
                    >
                        Time, Redefined.
                    </motion.h2>

                    <motion.p
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 text-lg text-gray-500 tracking-wide max-w-xl text-center"
                    >
                        Minimalist smartwatch concept inspired by Japanese aesthetic principles.
                    </motion.p>
                </div>

                <section className="mt-40 px-10 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-4xl font-light mb-6">Crafted with Precision.</h2>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Setiap lekukan pada MYWATCH dirancang untuk menyatu dengan pergelangan tanganmu. Material aluminium ringan premium dipadukan dengan antarmuka yang bersih, menciptakan harmoni antara teknologi dan gaya hidup minimalis.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="aspect-square rounded-lg overflow-hidden shadow-xl"
                        >
                        <img
                                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
                                alt="MYWATCH Detail"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                <section id="collection" className="mt-40 px-10 max-w-7xl mx-auto">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scrollVariant}
                        className="text-4xl font-light mb-16 text-center"
                    >
                        The Collection

                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {watches.map((watch, index) => (
                            <motion.div
                                key={watch.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={scrollVariant}
                                transition={{ delay: index * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <Link href={`/watch/${watch.slug}`} className="block">
                                    <div className="aspect-[4/5] bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                                        <img
                                            src={watch.image_url}
                                            alt={watch.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-medium tracking-wide">{watch.name}</h3>
                                        <p className="text-gray-500 mt-2 text-sm px-4">{watch.description}</p>
                                        <p className="mt-4 text-lg font-light">${watch.price}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="design" className="mt-40 px-10 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Gambar di kiri (Posisi zig-zag dari section sebelumnya) */}
                        {/* Menggunakan order-2 di HP, order-1 di PC agar di HP teks tetap di atas gambar */}
                        <motion.div
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
                        >
                            <img
                                /* Gambar UI Smartwatch bernuansa gelap/fokus pada layar */
                                src="https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                                alt="MYWATCH Digital Experience"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Teks di kanan */}
                        <motion.div
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl font-light mb-6">Interface Without Distraction.</h2>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Sistem operasi MYWATCH dirancang untuk meredam kebisingan digital. Antarmuka yang murni dan tipografi yang presisi hanya menampilkan informasi yang benar-benar esensial. Kami mengubah kecemasan dari rentetan notifikasi menjadi sebuah ketenangan yang terukur.
                            </p>
                        </motion.div>

                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
