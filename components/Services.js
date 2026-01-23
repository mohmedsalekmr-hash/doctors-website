import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t, isRTL } = useLanguage();

    const icons = [
        'fa-wand-magic-sparkles',
        'fa-tooth',
        'fa-align-center',
        'fa-stethoscope'
    ];

    const colors = [
        'bg-blue-50 text-blue-600',
        'bg-indigo-50 text-indigo-600',
        'bg-cyan-50 text-cyan-600',
        'bg-sky-50 text-sky-600'
    ];

    return (
        <section id="services" className="section-padding bg-surface-light relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-primary font-bold text-xs uppercase tracking-widest mb-6 animate-fade-in border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse"></span>
                        {t.services.title}
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
                        {t.services.subtitle}
                    </h2>
                    <p className="text-lg text-text-light max-w-2xl mx-auto">
                        We offer a comprehensive range of premium dental services, tailored to your unique needs using the latest clinical innovations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.services.items.map((service, idx) => (
                        <div
                            key={idx}
                            className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-premium hover:-translate-y-2 transition-all duration-500 hover:border-primary/20"
                        >
                            <div className={`w-16 h-16 ${colors[idx]} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                <i className={`fa-solid ${icons[idx]}`}></i>
                            </div>

                            <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-text-base leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                                Learn More
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'} text-xs`}></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

