import { useLanguage } from '@/context/LanguageContext';

export default function AboutUs() {
    const { t, isRTL } = useLanguage();

    const stats = [
        { label: "Modern Clinics", value: "05" },
        { label: "Expert Doctors", value: "12+" },
        { label: "Global Awards", value: "08" },
        { label: "Happy Patients", value: "15k" }
    ];

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image Column */}
                    <div className="flex-1 relative order-2 lg:order-1">
                        <div className="relative z-10">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-premium border-[10px] border-white ring-1 ring-slate-100">
                                <img
                                    src="/images/doctor.png"
                                    alt="Expert Doctor"
                                    className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Experience Badge */}
                            <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-[2.5rem] shadow-premium animate-float">
                                <div className="text-center">
                                    <p className="text-4xl font-bold font-heading text-primary mb-1">15+</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-text-light whitespace-nowrap">Years of Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/50 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-widest mb-8">
                            <i className="fa-solid fa-user-doctor"></i>
                            Expert Medical Team
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-heading font-bold text-text-dark mb-8 leading-tight">
                            Redefining the <span className="text-gradient">Dental Experience</span> with Care.
                        </h2>

                        <div className="space-y-6 text-lg text-text-base leading-relaxed mb-12">
                            <p>
                                At SmilePro, we believe that visiting the dentist should be a restorative experience for both your smile and your mind. Our clinic mimics the comfort of a high-end spa, combined with the precision of modern medical technology.
                            </p>
                            <p>
                                From the moment you step in, you are treated with the utmost care, privacy, and personalized attention. Our team of specialists is dedicated to styling your perfect smile using the most advanced techniques available today.
                            </p>
                        </div>

                        {/* Mini Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 rounded-3xl bg-surface-light border border-slate-100 shadow-sm">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-light">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-[10px]">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <span className="text-sm font-bold text-text-dark">ADA Certified</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-[10px]">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <span className="text-sm font-bold text-text-dark">Digital Workflow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

