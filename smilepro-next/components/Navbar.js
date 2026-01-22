import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/#services' },
        { name: 'About', path: '/#about' },
        { name: 'Contact', path: '/contact' },
        { name: 'My Bookings', path: '/appointments' },
    ];

    const isActive = (path) => router.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-dark flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
                        <i className="fa-solid fa-tooth"></i>
                    </div>
                    <span className="font-outfit tracking-tight">Smile<span className="text-primary group-hover:text-secondary transition-colors">Pro</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className={`relative py-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-slate-500'
                                        }`}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                                    )}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/booking"
                                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-sm hover:-translate-y-1 transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2"
                            >
                                Book Now <i className="fa-solid fa-calendar-check"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${scrolled ? 'bg-gray-100 text-dark' : 'bg-white/10 text-white'
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                <button
                    className="absolute top-10 right-10 text-white text-3xl"
                    onClick={() => setIsOpen(false)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-bold font-outfit tracking-wider transition-all hover:text-primary ${isActive(link.path) ? 'text-primary scale-110' : 'text-slate-400'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="mt-6 bg-primary text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-blue-500/40"
                >
                    Book Appointment
                </Link>

                <div className="absolute bottom-20 flex gap-6 text-slate-500 text-xl">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </header>
    );
}
