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
        { name: t.nav.contact, path: '/#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
                ? 'bg-surface-cream/90 backdrop-blur-2xl py-3 border-b border-luxury-gold/10'
                : 'bg-transparent py-6 md:py-8'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Luxury Logo */}
                <Link href="/" className="flex items-center gap-4 group z-50">
                    <div className="relative">
                        <div className="w-12 h-12 bg-primary flex-center rounded-2xl shadow-luxury group-hover:rotate-6 transition-all duration-500">
                            <i className="fa-solid fa-tooth text-luxury-gold text-2xl"></i>
                        </div>
                        <div className="absolute -inset-1 border border-luxury-gold/20 rounded-2xl group-hover:scale-110 transition-transform duration-500"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tighter font-heading text-primary leading-none">
                            Smile<span className="text-luxury-gold font-serif italic font-normal ml-0.5">Pro</span>
                        </span>
                        <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-luxury-slate/60 mt-1 whitespace-nowrap">
                            Esthetic Dental Studio
                        </span>
                    </div>
                </Link>

                {/* Desktop High-End Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`relative py-2 text-[0.8rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 group
                                        ${router.asPath === link.path ? 'text-luxury-gold' : 'text-primary/70 hover:text-primary'}`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full ${router.asPath === link.path ? 'w-full' : ''}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Elite Actions */}
                    <div className="flex items-center gap-6 border-l border-luxury-gold/20 pl-10">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 group"
                            title={lang === 'en' ? 'Arabic' : 'English'}
                        >
                            <span className="w-8 h-8 rounded-full border border-luxury-gold/30 flex-center text-[0.7rem] font-bold group-hover:bg-luxury-gold group-hover:text-white transition-all uppercase">
                                {lang === 'en' ? 'ع' : 'EN'}
                            </span>
                        </button>

                        <Link
                            href="/booking"
                            className="btn-premium px-10 py-4 bg-primary text-white text-[0.75rem] font-bold uppercase tracking-[0.2em] rounded-2xl shadow-luxury flex items-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10">{t.nav.book}</span>
                            <i className="fa-solid fa-calendar-plus text-luxury-gold z-10"></i>
                            <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Elite Toggle */}
                <div className="flex items-center gap-4 lg:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-12 h-12 flex-center rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-white' : 'bg-white border-luxury-gold/20 text-primary shadow-premium'}`}
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
                    </button>
                </div>
            </div>

            {/* Premium Mobile Overlay */}
            <div className={`fixed inset-0 bg-surface-cream z-40 transition-all duration-700 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col items-center justify-center min-h-screen gap-12 p-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="group flex flex-col items-center"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <span className="text-[0.7rem] font-bold text-luxury-gold uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                            <span className="text-4xl font-heading font-bold text-primary group-hover:text-luxury-gold transition-colors">{link.name}</span>
                        </Link>
                    ))}
                    <Link
                        href="/booking"
                        onClick={() => setIsOpen(false)}
                        className="mt-8 px-12 py-5 bg-primary text-white rounded-2xl text-lg font-bold shadow-luxury flex items-center gap-4"
                    >
                        {t.nav.book}
                        <i className="fa-solid fa-arrow-right-long text-luxury-gold"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}


