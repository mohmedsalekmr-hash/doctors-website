export default function AboutUs({ data }) {
    const { heading, p1, p2 } = data || {
        heading: "Leading the Way in Dental Excellence",
        p1: "At SmilePro, we believe that every patient deserves the best possible dental care. Our state-of-the-art facility is equipped with the latest technology.",
        p2: "Led by Dr. Islam and a team of certified specialists, we have been serving the community for over 10 years, creating thousands of beautiful smiles."
    };

    return (
        <section className="py-24 bg-white" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-[50px] overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80"
                                alt="Our Clinic"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-2xl z-20 border-8 border-white animate-pulse-subtle">
                            <span className="text-4xl font-bold font-outfit">10+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-center">Years of Excellence</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6">
                            Establish Since 2012
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-dark font-outfit mb-10 leading-tight">
                            {heading}
                        </h2>
                        <div className="space-y-6 text-lg text-text-light leading-relaxed">
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
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors">
                                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-1">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-text-light">{item.desc}</p>
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
