import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-widest mb-8 animate-fade-in">
                            <i className="fa-solid fa-tooth opacity-70"></i>
                            {t.hero.subtitle}
                        </div>

                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-text-dark mb-8 leading-[1.05] font-heading animate-fade-in-up">
                            {t.hero.title.split(' ').map((word, i) => (
                                <span key={i} className={word === 'Smile' || word === 'ابتسامة' ? 'text-gradient inline-block' : 'inline-block'}>
                                    {word}&nbsp;
                                </span>
                            ))}
                        </h1>

                        <p className="text-xl text-text-base leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                            {t.hero.desc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-300">
                            <Link
                                href="/booking"
                                className="btn-premium group px-10 py-5 bg-primary text-white text-base font-bold rounded-2xl shadow-premium hover:bg-primary-dark w-full sm:w-auto flex items-center justify-center gap-3"
                            >
                                {t.hero.cta_primary}
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'} group-hover:translate-x-1 transition-transform`}></i>
                            </Link>
                            <Link
                                href="/#services"
                                className="px-10 py-5 bg-white border-2 border-slate-100 text-text-dark text-base font-bold rounded-2xl hover:bg-slate-50 transition-all w-full sm:w-auto text-center"
                            >
                                {t.hero.cta_secondary}
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in delay-500">
                            {t.hero.badges.map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i className="fa-solid fa-check text-primary text-sm"></i>
                                    </div>
                                    <span className="text-sm font-bold text-text-dark tracking-tight">{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visuals */}
                    <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
                        <div className="relative z-10 animate-fade-in delay-300">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100 transform hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src="/images/hero.png"
                                    alt="Luxury Dental Clinic"
                                    className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute -top-10 -right-10 glass-panel p-6 rounded-3xl hidden xl:block animate-float">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary text-2xl">
                                        <i className="fa-solid fa-award"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-light font-bold uppercase tracking-widest">Quality Assurance</p>
                                        <p className="text-sm font-bold text-text-dark">ISO Certified Facility</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -bottom-10 -left-10 glass-panel p-6 rounded-3xl hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-light font-bold uppercase tracking-widest">Trust Score</p>
                                        <p className="text-sm font-bold text-text-dark">2,500+ Happy Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-secondary/50 via-transparent to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

