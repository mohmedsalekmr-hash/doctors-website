import { useLanguage } from '@/context/LanguageContext';

export default function AboutUs() {
    const { t, isRTL } = useLanguage();

    const stats = [
        { label: "Elite Clinics", value: "05" },
        { label: "Specialists", value: "12+" },
        { label: "Global Awards", value: "08" },
        { label: "Patient Success", value: "15k" }
    ];

    return (
        <section id="about" className="section-padding bg-surface-cream relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
                    {/* Prestigious Image Presentation */}
                    <div className="flex-1 relative order-2 lg:order-1 group">
                        <div className="relative z-10">
                            <div className="relative rounded-[4rem] overflow-hidden shadow-floating border-[15px] border-white ring-1 ring-luxury-gold/10">
                                <img
                                    src="/images/doctor.png"
                                    alt="Expert Doctor"
                                    className="w-full h-full object-cover aspect-[4/5] img-luxury-hover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                            {/* Floating Legacy Badge */}
                            <div className="absolute -bottom-10 -right-6 lg:-right-10 glass-panel p-10 rounded-[3rem] shadow-luxury animate-float border-white/50">
                                <div className="text-center">
                                    <p className="text-5xl font-bold font-heading text-primary mb-2">15+</p>
                                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-luxury-gold whitespace-nowrap">Years of Mastery</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Luxury Halo */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-luxury-gold/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    </div>

                    {/* Elite Narrative Side */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="reveal-text mb-8">
                            <span className="inline-flex items-center gap-3 text-luxury-gold font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in">
                                <i className="fa-solid fa-user-tie text-[0.8rem]"></i>
                                Expert Medical Board
                            </span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-heading font-bold text-primary mb-10 leading-tight">
                            {isRTL ? 'إعادة تعريف تجربة طب الأسنان' : (
                                <>Redefining the <br /><span className="font-serif italic font-normal text-luxury-gold leading-normal text-gradient-gold">Dental Narrative</span></>
                            )}
                        </h2>

                        <div className="space-y-8 text-xl text-luxury-slate leading-relaxed mb-16 font-medium">
                            <p>
                                At SmilePro, we believe that visiting the dentist should be a restorative experience. Our studio replicates the serenity of an international private club, combined with the precision of cutting-edge clinical technology.
                            </p>
                            <p>
                                From the initial consultation to the final reveal, your journey is curated by our concierge medical team. We specialize in digital smile design and minimally invasive procedures that prioritize your long-term health and aesthetic perfection.
                            </p>
                        </div>

                        {/* High-End Stats Ribbon */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6 rounded-[2.5rem] bg-white border border-luxury-gold/10 shadow-premium group">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center group-hover:px-2 transition-all duration-500">
                                    <p className="text-3xl font-bold text-primary mb-2 font-heading tracking-tighter">{stat.value}</p>
                                    <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-luxury-gold/60">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Trust Components */}
                        <div className="mt-14 flex flex-wrap gap-10">
                            {[
                                { icon: 'fa-shield-check', text: 'ADA Clinical Excellence' },
                                { icon: 'fa-microchip', text: 'Digital Workflow 4.0' }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-luxury-gold/5 flex-center text-luxury-gold text-lg border border-luxury-gold/10 shadow-sm">
                                        <i className={`fa-solid ${badge.icon}`}></i>
                                    </div>
                                    <span className="text-[0.75rem] font-bold text-primary uppercase tracking-[0.15em]">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


