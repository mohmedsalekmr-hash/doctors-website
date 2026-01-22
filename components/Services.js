import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-24 bg-surface">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        {t.services.title}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                        {t.services.subtitle}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {t.services.items.map((service, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="mb-6 relative overflow-hidden h-64 w-full bg-slate-100">
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 z-10"></div>
                                {/* Placeholder for high-end service imagery */}
                                <img
                                    src={`https://source.unsplash.com/random/800x600?dental,${idx}`}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-white flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text-light text-sm leading-relaxed border-t border-slate-100 pt-4 mt-2">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
