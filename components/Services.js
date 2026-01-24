import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t, isRTL } = useLanguage();

    const icons = [
        'fa-tooth',
        'fa-briefcase-medical',
        'fa-user-nurse',
        'fa-prescription-bottle-medical'
    ];

    return (
        <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Technical Clinical Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-clinical-blue/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-clinical-teal/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
                    <div className="reveal-text mb-6">
                        <span className="inline-flex items-center gap-3 text-clinical-blue font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in">
                            <span className="w-8 h-px bg-clinical-blue"></span>
                            {t.services.title}
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                        {isRTL ? 'التميز في الرعاية الصحية' : (
                            <>Expert Care for <br /><span className="text-gradient font-serif italic font-normal">Optimal Health</span></>
                        )}
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Clinical precision, advanced diagnostics, and compassionate patient care define our medical standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.services.items.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-10 rounded-3xl border border-slate-100 shadow-soft hover:shadow-clinical hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
                        >
                            <div className="relative mb-8">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex-center text-clinical-blue text-3xl group-hover:bg-clinical-blue group-hover:text-white transition-all duration-500 border border-clinical-blue/5 shadow-sm">
                                    <i className={`fa-solid ${icons[idx]}`}></i>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-4">
                                {service.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed mb-6 flex-grow font-medium text-sm">
                                {service.desc}
                            </p>

                            <div className="relative overflow-hidden pt-4 mt-auto border-t border-slate-50 w-full">
                                <a href="#contact" className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-clinical-blue hover:text-clinical-blue/80 transition-colors">
                                    <span>{isRTL ? 'اكتشف المزيد' : 'Learn More'}</span>
                                    <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'} text-[0.6rem] group-hover:translate-x-1 transition-transform`}></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
