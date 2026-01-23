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
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.services, path: '/#services' },
        { name: t.nav.about, path: '/#about' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group z-50">
                    <div className="w-11 h-11 bg-primary text-white rounded-2xl flex items-center justify-center text-xl shadow-premium group-hover:rotate-12 transition-all duration-500">
                        <i className="fa-solid fa-tooth"></i>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight font-heading ${scrolled ? 'text-primary' : 'text-primary'} transition-colors`}>
                            Smile<span className="text-primary-light">Pro</span>
                        </span>
                        <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-text-light/80 hidden md:block">
                            Premium Clinic
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                                        ${router.asPath === link.path
                                            ? 'text-primary bg-primary/5'
                                            : 'text-text-base hover:text-primary hover:bg-primary/5'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="h-4 w-px bg-slate-200 mx-2"></div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-all text-primary"
                            title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                        >
                            <span className="font-bold text-sm">{lang === 'en' ? 'ع' : 'EN'}</span>
                        </button>

                        <Link
                            href="/booking"
                            className="btn-premium px-8 py-3 bg-primary text-white text-sm font-bold rounded-2xl shadow-premium hover:bg-primary-dark"
                        >
                            {t.nav.book}
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-3 lg:hidden z-50">
                    <button
                        onClick={toggleLang}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 text-primary font-bold text-xs"
                    >
                        {lang === 'en' ? 'ع' : 'EN'}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white text-lg shadow-lg"
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'
                }`}>
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-heading font-bold text-primary hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="w-12 h-px bg-slate-200 my-4"></div>
                <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="px-10 py-5 bg-primary text-white rounded-2xl text-lg font-bold shadow-premium"
                >
                    {t.nav.book}
                </Link>
            </div>
        </header>
    );
}

