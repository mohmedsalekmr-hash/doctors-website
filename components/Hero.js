import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 lg:pt-32">
            {/* Technical Medical Background Assets */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-clinical-blue/5 rounded-full blur-[150px] opacity-60 pointer-events-none animate-pulse-soft"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-clinical-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: `radial-gradient(circle, rgb(var(--clinical-blue)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Clinical Content Side */}
                    <div className="flex-[1.2] text-center lg:text-left">
                        <div className="reveal-text mb-8">
                            <span className="inline-flex items-center gap-4 px-6 py-2 rounded-xl bg-slate-50 text-clinical-blue font-bold text-[0.65rem] uppercase tracking-[0.3em] animate-fade-in border border-slate-100">
                                <span className="w-2 h-2 rounded-full bg-clinical-blue animate-pulse"></span>
                                {t.hero.subtitle}
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-[1.1] tracking-tight animate-fade-in-up">
                            {isRTL ? (
                                <span className="block">صحتكم هي <br /><span className="text-gradient font-serif italic font-normal">أولويتنا القصوى</span></span>
                            ) : (
                                <>
                                    Your Health, Our <br />
                                    <span className="text-gradient font-serif italic font-normal leading-normal">Clinical Priority</span>
                                </>
                            )}
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-14 max-w-xl mx-auto lg:mx-0 font-medium animate-fade-in-up delay-200">
                            {t.hero.desc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in-up delay-300">
                            <Link
                                href="/booking"
                                className="btn-premium group px-12 py-6 bg-clinical-blue text-white text-[0.85rem] font-bold uppercase tracking-[0.2em] rounded-2xl shadow-clinical w-full sm:w-auto flex-center gap-4 transition-all hover:bg-clinical-blue"
                            >
                                <span>{t.hero.cta_primary}</span>
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left-long' : 'fa-arrow-right-long'} transition-transform duration-500 group-hover:translate-x-2`}></i>
                            </Link>

                            <Link
                                href="/#services"
                                className="group relative px-10 py-5 text-slate-700 text-[0.85rem] font-bold uppercase tracking-[0.15em] border-b-2 border-slate-100 hover:border-clinical-blue transition-all"
                            >
                                {t.hero.cta_secondary}
                            </Link>
                        </div>

                        {/* Professional Certification Badges */}
                        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-10 animate-fade-in delay-500">
                            {t.hero.badges.map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex-center text-clinical-blue border border-slate-100 group-hover:bg-clinical-blue group-hover:text-white transition-all">
                                        <i className={`fa-solid ${idx === 0 ? 'fa-certificate' : 'fa-user-nurse'}`}></i>
                                    </div>
                                    <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest leading-none">{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Medical Visualization Side */}
                    <div className="flex-1 relative w-full group">
                        <div className="relative z-10 animate-scale-in">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-floating border-[15px] border-white ring-1 ring-slate-100 aspect-[4/5] lg:aspect-[3/4]">
                                <img
                                    src="/images/doctor.png"
                                    alt="Professional Medical Services"
                                    className="w-full h-full object-cover img-hover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>

                                {/* Inner Diagnostic Panel */}
                                <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-[1.5rem] border-white/40 animate-fade-in delay-700">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[0.55rem] font-bold text-clinical-blue uppercase tracking-widest mb-1">Clinical Standard</span>
                                            <span className="text-lg font-bold text-primary">Certified Board Top 1%</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-clinical-blue/10 flex-center">
                                            <i className="fa-solid fa-check text-clinical-blue"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Diagnostic Icons */}
                            <div className="absolute -top-10 -right-6 lg:-right-10 glass-panel px-8 py-5 rounded-2xl animate-float shadow-clinical">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-clinical-blue/10 rounded-xl flex-center text-clinical-blue">
                                        <i className="fa-solid fa-microchip"></i>
                                    </div>
                                    <div>
                                        <p className="text-[0.6rem] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Advanced Tech</p>
                                        <p className="text-sm font-bold text-primary">In-house Lab</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 lg:-left-10 glass-panel px-8 py-5 rounded-2xl animate-float shadow-soft" style={{ animationDelay: '1.5s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Team Member" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-[0.6rem] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Emergency Support</p>
                                        <p className="text-sm font-bold text-primary">24/7 Availability</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Halo Effect */}
                        <div className="absolute -inset-10 bg-clinical-blue/5 rounded-full blur-[100px] -z-10 animate-pulse-soft"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
