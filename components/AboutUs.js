import { useLanguage } from '@/context/LanguageContext';

export default function AboutUs() {
    const { t, isRTL } = useLanguage();

    const stats = [
        { label: "Medical Labs", value: "03" },
        { label: "Specialists", value: "15+" },
        { label: "Clinical Certs", value: "12" },
        { label: "Patient Care", value: "20k" }
    ];

    return (
        <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
                    {/* Professional Visualization */}
                    <div className="flex-1 relative order-2 lg:order-1 group">
                        <div className="relative z-10">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-floating border-[15px] border-white ring-1 ring-slate-100">
                                <img
                                    src="/images/doctor.png"
                                    alt="Expert Medical Staff"
                                    className="w-full h-full object-cover aspect-[4/5] img-hover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                            {/* Clinical Performance Badge */}
                            <div className="absolute -bottom-10 -right-6 lg:-right-10 glass-panel p-10 rounded-[2.5rem] shadow-clinical animate-float border-slate-100/50">
                                <div className="text-center">
                                    <p className="text-5xl font-bold text-primary-blue mb-2 tracking-tighter">15+</p>
                                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Years Clinical Practice</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Effect */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-blue/5 rounded-full blur-[100px] -z-10 animate-pulse-soft"></div>
                    </div>

                    {/* Medical Board Narrative */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="reveal-text mb-8">
                            <span className="inline-flex items-center gap-3 text-primary-blue font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in">
                                <i className="fa-solid fa-microscope text-[0.8rem]"></i>
                                Professional Diagnostics
                            </span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-bold text-primary mb-10 leading-tight tracking-tight">
                            {isRTL ? 'إعادة تعريف معايير الرعاية' : (
                                <>Advancing the <br /><span className="text-gradient font-serif italic font-normal leading-normal">Clinical Standard</span></>
                            )}
                        </h2>

                        <div className="space-y-6 text-lg text-slate-500 leading-relaxed mb-12 font-medium">
                            <p>
                                SmilePro is a multidisciplinary health center committed to clinical excellence. We provide comprehensive healthcare services through a collaborative board of specialists using the latest medical diagnostic tools.
                            </p>
                            <p>
                                Our objective is to deliver evidence-based treatment plans in a safe, clinical environment. From advanced oral surgery to family medicine, our patient-centric approach ensures you receive the highest standard of specialized care.
                            </p>
                        </div>

                        {/* Medical Metric Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-slate-100">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <p className="text-3xl font-bold text-primary mb-1 tracking-tighter">{stat.value}</p>
                                    <p className="text-[0.55rem] font-bold uppercase tracking-widest text-slate-400 leading-none">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Accredited Badges */}
                        <div className="mt-12 flex flex-wrap gap-8">
                            {[
                                { icon: 'fa-certificate', text: 'ISO Medical Certified' },
                                { icon: 'fa-dna', text: 'Genomic Lab Integrated' }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex-center text-primary-blue text-lg border border-slate-100 shadow-sm">
                                        <i className={`fa-solid ${badge.icon}`}></i>
                                    </div>
                                    <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
