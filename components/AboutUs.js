export default function AboutUs({ data }) {
    const { heading, p1, p2 } = data || {
        heading: "Leading the Way in Dental Excellence",
        p1: "At SmilePro, we believe that every patient deserves the best possible dental care. Our state-of-the-art facility is equipped with the latest technology.",
        p2: "Led by Dr. Islam and a team of certified specialists, we have been serving the community for over 10 years, creating thousands of beautiful smiles."
    };

    return (
        <section className="py-24 bg-surface" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80"
                                alt="Our Clinic"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] flex flex-col items-center justify-center shadow-floating z-20 border border-slate-100 max-w-[200px]">
                            <span className="text-5xl font-bold font-heading text-primary bg-primary/5 px-2 rounded-lg mb-2">10+</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-center text-dark">Years of Excellence</span>
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2">
                        <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                            Since 2012
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-dark font-heading mb-8 leading-tight">
                            {heading}
                        </h2>
                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-medium">
                            <p>{p1}</p>
                            <p>{p2}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                            {[
                                { title: "Modern Technology", desc: "Latest dental equipment" },
                                { title: "Expert Doctors", desc: "Certified specialists" },
                                { title: "Affordable Plans", desc: "Flexible payment options" },
                                { title: "Emergency Care", desc: "24/7 priority support" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50 transition-colors">
                                    <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-text-secondary">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
