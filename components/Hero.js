import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-cream pt-24 lg:pt-32">
            {/* Artistic Background Assets */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-luxury-blue rounded-full blur-[150px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
                    {/* Elite Content Side */}
                    <div className="flex-[1.2] text-center lg:text-left">
                        <div className="reveal-text mb-8">
                            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary text-luxury-gold font-bold text-[0.65rem] uppercase tracking-[0.3em] animate-fade-in">
                                <i className="fa-solid fa-crown text-[0.8rem]"></i>
                                {t.hero.subtitle}
                            </span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-primary mb-10 leading-[0.95] font-heading animate-fade-in-up">
                            {isRTL ? (
                                <span className="block">تحويل <span className="font-serif italic font-normal text-luxury-gold">ابتسامتك</span> إلى فن</span>
                            ) : (
                                <>
                                    The Art of <br />
                                    <span className="font-serif italic font-normal text-luxury-gold leading-normal">Exquisite</span> Smiles
                                </>
                            )}
                        </h1>

                        <p className="text-xl lg:text-2xl text-luxury-slate leading-relaxed mb-14 max-w-xl mx-auto lg:mx-0 font-medium animate-fade-in-up delay-200">
                            {t.hero.desc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in-up delay-300">
                            <Link
                                href="/booking"
                                className="btn-premium group px-12 py-6 bg-primary text-white text-[0.85rem] font-bold uppercase tracking-[0.2em] rounded-2xl shadow-luxury w-full sm:w-auto flex-center gap-4 group"
                            >
                                <span>{t.hero.cta_primary}</span>
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left-long' : 'fa-arrow-right-long'} text-luxury-gold group-hover:translate-x-2 transition-transform duration-500`}></i>
                            </Link>
                            <Link
                                href="/#services"
                                className="group relative px-12 py-6 text-primary text-[0.85rem] font-bold uppercase tracking-[0.15em] w-full sm:w-auto text-center"
                            >
                                <span className="relative z-10">{t.hero.cta_secondary}</span>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-luxury-gold/50 group-hover:w-full transition-all duration-500"></div>
                            </Link>
                        </div>

                        {/* Prestige Metrics */}
                        <div className="mt-20 pt-10 border-t border-luxury-gold/10 flex flex-wrap justify-center lg:justify-start gap-12 animate-fade-in delay-500">
                            {t.hero.badges.map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl border border-luxury-gold/20 flex-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-500">
                                        <i className="fa-solid fa-medal text-luxury-gold group-hover:text-white transition-colors"></i>
                                    </div>
                                    <span className="text-[0.7rem] font-bold text-primary uppercase tracking-[0.2em]">{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Elite Visual Side */}
                    <div className="flex-1 relative w-full group">
                        <div className="relative z-10 animate-scale-in">
                            <div className="relative rounded-[4rem] overflow-hidden shadow-floating border-[15px] border-white ring-1 ring-luxury-gold/10 aspect-[4/5] lg:aspect-[3/4]">
                                <img
                                    src="/images/hero.png"
                                    alt="Luxury Dental Clinic"
                                    className="w-full h-full object-cover img-luxury-hover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>

                                {/* Inner Floating HUD */}
                                <div className="absolute bottom-10 left-10 right-10 p-8 glass-panel rounded-[2rem] border-white/30 animate-fade-in delay-700">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[0.6rem] font-bold text-luxury-gold uppercase tracking-[0.2em] mb-1">Clinic Excellence</span>
                                            <span className="text-xl font-bold font-heading text-primary">Top 1% Rated</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <i key={star} className="fa-solid fa-star text-luxury-gold text-xs"></i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* External Floating Elements */}
                            <div className="absolute -top-12 -right-6 lg:-right-12 glass-panel px-8 py-6 rounded-[2rem] animate-float">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex-center text-luxury-gold text-2xl">
                                        <i className="fa-solid fa-microscope text-lg"></i>
                                    </div>
                                    <div>
                                        <p className="text-[0.6rem] text-luxury-gold font-bold uppercase tracking-widest">Innovation</p>
                                        <p className="text-sm font-bold text-primary whitespace-nowrap">Digital Smile Design</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 lg:-left-12 glass-panel px-8 py-6 rounded-[2rem] animate-float" style={{ animationDelay: '1.5s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-[0.6rem] text-luxury-gold font-bold uppercase tracking-widest leading-none mb-1">Satisfied Patients</p>
                                        <p className="text-sm font-bold text-primary leading-none">5,000+ Journeys</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Luxury Halo */}
                        <div className="absolute -inset-10 bg-luxury-gold/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
                <span className="text-[0.5rem] font-bold text-luxury-gold uppercase tracking-[0.4em] rotate-90 origin-left translate-x-1.5 whitespace-nowrap">Explore Luxe</span>
                <div className="w-px h-16 bg-gradient-to-b from-luxury-gold to-transparent uppercase"></div>
            </div>
        </section>
    );
}


