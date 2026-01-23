import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t, isRTL } = useLanguage();

    const icons = [
        'fa-wand-magic-sparkles',
        'fa-tooth',
        'fa-align-center',
        'fa-stethoscope'
    ];

    return (
        <section id="services" className="section-padding bg-white relative overflow-hidden">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
                    <div className="reveal-text mb-6">
                        <span className="inline-flex items-center gap-3 text-luxury-gold font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in">
                            <span className="w-8 h-px bg-luxury-gold"></span>
                            {t.services.title}
                        </span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-heading font-bold text-primary mb-8 leading-tight">
                        {isRTL ? 'التميز في رعاية الأسنان' : (
                            <>Superior Care for <br /><span className="font-serif italic font-normal text-luxury-gold">Perfect Results</span></>
                        )}
                    </h2>
                    <p className="text-xl text-luxury-slate max-w-2xl mx-auto font-medium leading-relaxed">
                        Precision, comfort, and state-of-the-art technology define our approach to creating your most beautiful smile.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {t.services.items.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-12 rounded-[3.5rem] border border-luxury-gold/10 shadow-premium hover:shadow-luxury transition-all duration-700 flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* Decorative Item Number */}
                            <span className="absolute top-8 right-10 text-6xl font-heading font-black text-primary/[0.03] group-hover:text-luxury-gold/10 transition-colors duration-700 select-none">
                                0{idx + 1}
                            </span>

                            <div className="relative mb-10">
                                <div className="w-20 h-20 bg-surface-cream rounded-[2rem] flex-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm border border-luxury-gold/10">
                                    <i className={`fa-solid ${icons[idx]}`}></i>
                                </div>
                                <div className="absolute -inset-2 border border-luxury-gold/20 rounded-[2.2rem] group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-5 font-heading">
                                {service.title}
                            </h3>

                            <p className="text-luxury-slate leading-relaxed mb-8 flex-grow font-medium text-sm">
                                {service.desc}
                            </p>

                            <div className="relative overflow-hidden pt-4 mt-auto">
                                <a href="#contact" className="inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-luxury-gold group-hover:text-primary transition-colors">
                                    <span>{isRTL ? 'اكتشف المزيد' : 'Experience Luxury'}</span>
                                    <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'} text-[0.6rem] group-hover:translate-x-1 transition-transform`}></i>
                                </a>
                            </div>

                            {/* Hover Reveal Background */}
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 opacity-[0.02]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


