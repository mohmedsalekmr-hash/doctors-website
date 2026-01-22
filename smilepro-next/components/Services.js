export default function Services() {
    const services = [
        { title: 'General Dentistry', desc: 'Routine check-ups, cleanings, and preventative care to keep your smile healthy.', icon: 'fa-tooth' },
        { title: 'Cosmetic Dentistry', desc: 'Transform your smile with veneers, whitening, and bonding for a perfect look.', icon: 'fa-wand-magic-sparkles' },
        { title: 'Dental Implants', desc: 'Permanent and natural-looking solutions for missing teeth using top tech.', icon: 'fa-tooth' },
        { title: 'Pediatric Dentistry', desc: 'Gentle and fun dental care experiences tailored specifically for children.', icon: 'fa-child' },
        { title: 'Orthodontics', desc: 'Straighten your teeth with modern braces and clear aligners like Invisalign.', icon: 'fa-teeth-open' },
        { title: 'Emergency Care', desc: 'Immediate attention for toothaches and urgent issues available 24/7.', icon: 'fa-notes-medical' },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Expertise</span>
                    <h2 className="text-4xl font-bold text-dark mb-4">Comprehensive Dental Care</h2>
                    <p className="text-text-light">We offer a wide range of specialized treatments to ensure your dental health remains in peak condition at all times.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lgg border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-blue-50 transition-all group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <i className={`fa-solid ${s.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4">{s.title}</h3>
                            <p className="text-text-light leading-relaxed mb-6">
                                {s.desc}
                            </p>
                            <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
