import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-surface-cream">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&w=2069&auto=format&fit=crop"
                    alt="Luxury Dental Interior"
                    className={`w-full h-full object-cover transition-transform duration-[20s] hover:scale-105 ${isRTL ? 'scale-x-[-1]' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-cream via-surface-cream/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6 animate-fade-in opacity-0">
                        <div className="h-px w-12 bg-accent"></div>
                        <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                            {t.hero.subtitle}
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 leading-[1.1] font-heading animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
                        {t.hero.title}
                    </h1>

                    <p className="text-lg text-text-light leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
                        {t.hero.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
                        <Link href="/booking" className="px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-light transition-all shadow-xl hover:shadow-2xl text-center">
                            {t.hero.cta_primary}
                        </Link>
                        <Link href="/#services" className="px-8 py-4 bg-transparent border border-primary text-primary text-sm font-bold uppercase tracking-widest hover:bg-surface-cream transition-all text-center">
                            {t.hero.cta_secondary}
                        </Link>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200/60 flex gap-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
                        {t.hero.badges.map((badge, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <i className="fa-solid fa-star text-accent text-xs"></i>
                                <span className="text-sm font-medium text-primary tracking-wide">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
