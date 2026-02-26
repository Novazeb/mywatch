export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-300 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo / Nama Brand */}
                <div className="text-xl font-bold tracking-widest uppercase">
                    MYWATCH
                </div>

                {/* Tautan Sosial Media & Info */}
                <div className="flex space-x-8 text-xs uppercase tracking-widest text-gray-500">
                    <a href="https://www.instagram.com/zebua_1011" className="hover:text-black transition-colors duration-300">Instagram</a>
                    <a href="https://x.com" className="hover:text-black transition-colors duration-300">Twitter</a>
                    <a href="https://scholar.google.com/?hl=id" className="hover:text-black transition-colors duration-300">Journal</a>
                    <a href="https://wa.me/081218939696" className="hover:text-black transition-colors duration-300">Contact</a>
                </div>

                {/* Copyright */}
                <div className="text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} MYWATCH. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
