import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Products({ watches = [] }) {
    return (
        <MainLayout>
            <Head title="Products | MYWATCH" />

            <section className="w-full">
                {/* Grid layout: 1 kolom HP, 3 kolom Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {watches && watches.map((watch) => (
                        <Link
                            key={watch.id}
                            href={`/watch/${watch.slug}`}
                            className="relative group overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-zinc-800 cursor-pointer block"
                        >
                            <img
                                src={watch.image_url}
                                alt={watch.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-4">
                                <h3 className="text-lg md:text-xl font-bold tracking-[0.1em] text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {watch.name}
                                </h3>

                                <div className="w-8 h-px bg-white my-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>

                                <p className="text-xs font-bold tracking-[0.2em] transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    MYWATCH
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}
