import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <MainLayout>
            <Head title="About | MYWATCH" />

            <div className="max-w-5xl mx-auto px-10 py-24">
                {/* Bagian 1: Visi Desain */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="mb-32 text-center"
                >
                    <h1 className="text-5xl font-light mb-10 tracking-tight text-black dark:text-white">Designing Time.</h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                        MYWATCH adalah sebuah studi dalam minimalisme. Lahir dari keinginan untuk menggabungkan estetika desain Jepang dengan fungsionalitas teknologi modern, proyek ini mempertanyakan kembali cara kita berinteraksi dengan waktu di era digital.
                    </p>
                </motion.section>

                {/* Bagian 2: Profil Kreator (Nova) */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32"
                >
                    <div className="aspect-[3/4] bg-gray-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                            alt="Nova - Developer"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 tracking-widest uppercase">The Architect</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            Halo, saya <strong className="text-gray-900 dark:text-white font-bold">Nova</strong>, seorang lulusan Sistem Komputer (S.Kom) dari Universitas Pembangunan Panca Budi. Ketertarikan saya pada dunia IT membawa saya untuk tidak hanya membangun aplikasi yang berfungsi, tetapi juga memiliki nilai estetika yang tinggi.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Dengan pengalaman riset di Badan Riset dan Inovasi Daerah serta pengalaman membangun sistem pemesanan makanan digital untuk tugas akhir saya, saya percaya bahwa teknologi terbaik adalah teknologi yang terasa "tidak ada" karena kemudahannya.
                        </p>
                    </div>
                </motion.section>

                {/* Bagian 3: Technical Stack */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="border-t border-gray-300 dark:border-zinc-800 pt-20"
                >
                    <h2 className="text-sm uppercase tracking-[0.5em] mb-12 text-center text-gray-400">Engineering the Experience</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        <div>
                            <h4 className="font-bold mb-2">Backend</h4>
                            <p className="text-sm text-gray-500">Laravel & MySQL</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Frontend</h4>
                            <p className="text-sm text-gray-500">React & Inertia.js</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Styling</h4>
                            <p className="text-sm text-gray-500">Tailwind CSS</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Location</h4>
                            <p className="text-sm text-gray-500">Gunungsitoli, Indonesia</p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </MainLayout>
    );
}
