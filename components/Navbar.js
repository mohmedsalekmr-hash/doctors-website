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
        { name: t.nav.my_appointments, path: '/appointments' },
        { name: t.nav.contact, path: '/#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
                ? 'bg-white/90 backdrop-blur-2xl py-3 border-b border-slate-100'
                : 'bg-transparent py-6 md:py-8'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Medical Center Identity */}
                <Link href="/" className="flex items-center gap-4 group z-50">
                    <div className="relative">
                        <div className="w-12 h-12 bg-clinical-blue flex-center rounded-2xl shadow-clinical group-hover:scale-105 transition-all duration-500">
                            <i className="fa-solid fa-tooth text-white text-2xl"></i>
                        </div>
                        <div className="absolute -inset-1 border border-clinical-blue/20 rounded-2xl group-hover:scale-110 transition-transform duration-500"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tighter text-slate-900 leading-none">
                            Smile<span className="text-clinical-blue">Pro</span>
                        </span>
                        <span className={`text-[0.6rem] font-bold tracking-[0.3em] uppercase text-slate-400 mt-1 whitespace-nowrap ${isRTL ? 'font-arabic' : ''}`}>
                            {isRTL ? 'المركز الطبي المتكامل' : 'Clinical Medical Center'}
                        </span>
                    </div>
                </Link>

                {/* Professional Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`relative py-2 text-[0.8rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 group
                                        ${router.asPath === link.path ? 'text-clinical-blue' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-clinical-blue transition-all duration-300 group-hover:w-full ${router.asPath === link.path ? 'w-full' : ''}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Practical Actions */}
                    <div className="flex items-center gap-6 border-l border-slate-200 pl-10">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-2 group"
                        >
                            <span className="w-10 h-10 rounded-full border border-slate-200 flex-center text-[0.7rem] font-bold text-slate-500 group-hover:bg-clinical-blue group-hover:text-white group-hover:border-clinical-blue transition-all uppercase">
                                {lang === 'en' ? 'ع' : 'EN'}
                            </span>
                        </button>

                        <Link
                            href="/booking"
                            className="btn-premium px-10 py-4 bg-clinical-blue text-white text-[0.75rem] font-bold uppercase tracking-[0.2em] rounded-2xl shadow-clinical hover:bg-clinical-blue/90 flex items-center gap-3 transition-all"
                        >
                            <span>{t.nav.book}</span>
                            <i className="fa-solid fa-calendar-check opacity-50"></i>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 lg:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`w-12 h-12 flex-center rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-clinical-blue border-clinical-blue text-white' : 'bg-white border-slate-100 text-slate-900 shadow-soft'}`}
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Medical Menu */}
            <div className={`fixed inset-0 bg-white z-40 transition-all duration-700 lg:hidden ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="group flex flex-col items-center"
                        >
                            <span className="text-4xl font-heading font-bold text-slate-900 group-hover:text-clinical-blue transition-colors text-center">{link.name}</span>
                        </Link>
                    ))}
                    <div className="flex flex-col gap-6 w-full max-w-xs mt-10">
                        <Link
                            href="/booking"
                            onClick={() => setIsOpen(false)}
                            className="w-full px-12 py-5 bg-clinical-blue text-white rounded-2xl text-center font-bold shadow-clinical flex items-center justify-center gap-4"
                        >
                            {t.nav.book}
                            <i className="fa-solid fa-arrow-right-long text-white/50"></i>
                        </Link>
                        <button
                            onClick={() => { toggleLang(); setIsOpen(false); }}
                            className="w-full px-12 py-5 border border-slate-200 rounded-2xl text-slate-500 font-bold uppercase tracking-widest text-sm"
                        >
                            {lang === 'en' ? 'العربية' : 'English Language'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}




