import Link from 'next/link';

export default function Footer({ data }) {
    const { phone, email, address } = data || {
        phone: "+1 (555) 123-4567",
        email: "hello@smilepro.com",
        address: "123 Dental Street, Wellness City"
    };

    const treatments = ['Root Canal', 'Teeth Whitening', 'Dental Implants', 'Cosmetic Dentistry', 'Orthodontics'];
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/#about' },
        { name: 'Services', path: '/#services' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'My Bookings', path: '/appointments' },
    ];

    return (
        <footer className="bg-dark pt-24 pb-12 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/5">
                    <div className="space-y-8 text-center md:text-left">
                        <Link href="/" className="flex items-center gap-3 justify-center md:justify-start">
                            <i className="fa-solid fa-tooth text-primary text-3xl"></i>
                            <span className="text-2xl font-bold text-white font-outfit uppercase tracking-tighter">Smile<span className="text-secondary">Pro</span></span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Leading dental clinic providing world-class oral care with modern technology and a human touch. Your smile is our priority and our greatest achievement.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 bg-white/5 text-slate-400 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                    <i className={`fa-brands fa-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-[0.2em] text-xs text-secondary underline underline-offset-8 decoration-primary/30">Treatments</h4>
                        <ul className="space-y-4 text-slate-400 text-sm font-medium">
                            {treatments.map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors hover:pl-2 duration-300">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-[0.2em] text-xs text-secondary underline underline-offset-8 decoration-primary/30">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400 text-sm font-medium">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.path} className="hover:text-primary transition-colors hover:pl-2 duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-8 font-outfit uppercase tracking-[0.2em] text-xs text-secondary underline underline-offset-8 decoration-primary/30">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-center justify-center md:justify-start">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 border border-white/5">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className="text-slate-400 text-xs font-medium leading-relaxed">{address}</p>
                            </li>
                            <li className="flex gap-4 items-center justify-center md:justify-start">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 border border-white/5">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <p className="text-slate-400 text-sm font-bold tracking-wider">{phone}</p>
                            </li>
                            <li className="flex gap-4 items-center justify-center md:justify-start">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 border border-white/5">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <p className="text-slate-400 text-sm font-medium transition-colors hover:text-white cursor-pointer">{email}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">© 2026 SmilePro Dental Clinic. All rights reserved.</p>
                    <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-white underline decoration-primary/30">Privacy Policy</a>
                        <a href="#" className="hover:text-white underline decoration-primary/30">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
