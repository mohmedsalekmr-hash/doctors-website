import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, isRTL } = useLanguage();

    const treatments = [
        'Cosmetic Dentistry',
        'Dental Implants',
        'Orthodontics',
        'Teeth Whitening',
        'General Checkup'
    ];

    const quickLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/#about' },
        { name: t.nav.services, path: '/#services' },
        { name: t.nav.contact, path: '/contact' },
    ];

    return (
        <footer className="bg-text-dark pt-24 pb-12 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-[0.03] rounded-full blur-[100px] -z-10"></div>

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/10">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-xl shadow-lg">
                                <i className="fa-solid fa-tooth"></i>
                            </div>
                            <span className="text-2xl font-bold text-white font-heading tracking-tight">
                                Smile<span className="text-primary-light">Pro</span>
                            </span>
                        </Link>
                        <p className="text-white/50 leading-relaxed">
                            Leading dental clinic providing world-class oral care with modern technology and a human touch. Your smile is our priority.
                        </p>
                        <div className="flex gap-4">
                            {['facebook-f', 'instagram', 'twitter', 'linkedin-in'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 bg-white/5 text-white/40 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 border border-white/5">
                                    <i className={`fa-brands fa-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Treatments</h4>
                        <ul className="space-y-4">
                            {treatments.map(item => (
                                <li key={item}>
                                    <a href="#" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.path} className="text-white/60 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <div className="text-primary mt-1">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    123 Dental Street, Medical District, <br />Wellness City, WC 45678
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="text-primary">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <p className="text-white font-bold">+1 (555) 000-1234</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <div className="text-primary">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <p className="text-white/60 text-sm">contact@smilepro.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
                    <p className="text-white text-xs">© 2026 SmilePro. All rights reserved.</p>
                    <div className="flex gap-8 text-xs text-white">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

