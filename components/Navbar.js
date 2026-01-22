import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { t, lang, toggleLang, isRTL } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.services, path: '/#services' },
        { name: t.nav.about, path: '/#about' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <i className="fa-solid fa-tooth"></i>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-widest uppercase font-heading ${scrolled ? 'text-primary' : 'text-primary lg:text-primary'} transition-colors`}>
                            Smile<span className="text-accent">Pro</span>
                        </span>
                        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light hidden md:block">Luxury Dental Care</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`relative text-sm font-semibold tracking-wide uppercase hover:text-accent transition-colors
                                        ${router.asPath === link.path ? 'text-accent' : 'text-primary'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="h-6 w-px bg-slate-200"></div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="text-sm font-bold text-primary hover:text-accent transition-colors flex items-center gap-2"
                        >
                            <i className="fa-solid fa-globe"></i>
                            {lang === 'en' ? 'العربية' : 'English'}
                        </button>

                        <Link href="/booking" className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300 shadow-lg hidden xl:block">
                            {t.nav.book}
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggles */}
                <div className="flex items-center gap-4 lg:hidden z-50">
                    <button onClick={toggleLang} className={`text-sm font-bold ${scrolled ? 'text-primary' : 'text-primary'}`}>
                        {lang === 'en' ? 'عربي' : 'EN'}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-primary">
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-heading font-bold text-primary hover:text-accent transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="w-12 h-px bg-slate-100 my-4"></div>
                <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 bg-primary text-white rounded-none text-sm font-bold uppercase tracking-widest shadow-xl"
                >
                    {t.nav.book}
                </Link>
            </div>
        </header>
    );
}
