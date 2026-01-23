import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, isRTL } = useLanguage();

    const treatments = [
        'Cosmetic Dentistry',
        'Dental Implants',
        'Orthodontics',
        'Teeth Whitening',
        'Executive Checkup'
    ];

    const quickLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/#about' },
        { name: t.nav.services, path: '/#services' },
        { name: t.nav.contact, path: '/#contact' },
    ];

    return (
        <footer className="bg-primary pt-32 pb-16 overflow-hidden relative">
            {/* Atmospheric Background Mastery */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #C5A572 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-24 border-b border-white/10">
                    <div className="space-y-10">
                        {/* Luxury Logo Branding */}
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/5 border border-white/20 rounded-2xl flex-center group-hover:bg-luxury-gold transition-all duration-700">
                                <i className="fa-solid fa-tooth text-luxury-gold group-hover:text-primary text-xl"></i>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white font-heading tracking-tighter leading-none">
                                    Smile<span className="font-serif italic font-normal text-luxury-gold ml-0.5">Pro</span>
                                </span>
                                <span className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-white/40 mt-1">Esthetic Studio</span>
                            </div>
                        </Link>

                        <p className="text-white/40 leading-relaxed font-medium text-sm max-w-xs">
                            Architecting refined smiles through artistic clinical mastery and avant-garde dental innovation. The pinnacle of personalized oral care.
                        </p>

                        <div className="flex gap-5">
                            {['facebook-f', 'instagram', 'twitter', 'linkedin-in'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 bg-white/5 text-white/30 rounded-xl flex-center hover:bg-luxury-gold hover:text-primary transition-all duration-500 border border-white/5 group">
                                    <i className={`fa-brands fa-${social} text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-luxury-gold font-bold mb-10 uppercase tracking-[0.3em] text-[0.65rem]">Dental Masteries</h4>
                        <ul className="space-y-5">
                            {treatments.map(item => (
                                <li key={item}>
                                    <a href="#" className="text-white/50 hover:text-luxury-gold transition-all duration-500 text-sm font-medium flex items-center gap-3 group">
                                        <div className="w-1 h-1 rounded-full bg-luxury-gold/30 group-hover:scale-150 transition-transform"></div>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-luxury-gold font-bold mb-10 uppercase tracking-[0.3em] text-[0.65rem]">Corporate Board</h4>
                        <ul className="space-y-5">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.path} className="text-white/50 hover:text-luxury-gold transition-all duration-500 text-sm font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-luxury-gold font-bold mb-10 uppercase tracking-[0.3em] text-[0.65rem]">Private Reception</h4>
                        <ul className="space-y-8">
                            <li className="flex gap-5 items-start">
                                <div className="text-luxury-gold mt-1 text-sm">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className="text-white/40 text-sm leading-relaxed font-medium">
                                    123 Elite Plaza, <br />Upper Medical District, <br />Global City 889
                                </p>
                            </li>
                            <li className="flex gap-5 items-center">
                                <div className="text-luxury-gold text-sm">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </div>
                                <p className="text-white font-bold tracking-tight text-lg">+1 (555) 000-1234</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-white/20 text-[0.6rem] font-bold uppercase tracking-[0.4em]">© 2026 SmilePro International. Curated by Excellence.</p>
                    <div className="flex gap-10 text-[0.6rem] font-bold uppercase tracking-[0.2em]">
                        <a href="#" className="text-white/20 hover:text-luxury-gold transition-colors">Privacy Charter</a>
                        <a href="#" className="text-white/20 hover:text-luxury-gold transition-colors">Service Protocols</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


