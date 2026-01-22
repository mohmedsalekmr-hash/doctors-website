export default function Doctors() {
    const doctors = [
        {
            name: "Dr. Sarah Islam",
            role: "Chief Orthodontist",
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80",
            desc: "Specializing in complex orthodontic treatments with over 15 years of clinical experience."
        },
        {
            name: "Dr. James Chen",
            role: "Cosmetic Specialist",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80",
            desc: "Expert in smile makeovers, veneers, and aesthetic bonding for the perfect confident smile."
        },
        {
            name: "Dr. Emily Roberts",
            role: "Pediatric Dentist",
            img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=80",
            desc: "Dedicated to providing gentle, fun, and fear-free dental care for children of all ages."
        }
    ];

    return (
        <section className="py-24 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Our Team</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-heading">Meet Our Specialists</h2>
                    <p className="text-text-secondary leading-relaxed">Highly qualified professionals dedicated to your dental health and comfort.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-300 group border border-slate-100">
                            <div className="h-80 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 right-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                                    <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-dark font-heading mb-1">{doc.name}</h3>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{doc.role}</p>
                                <p className="text-text-secondary text-sm leading-relaxed mb-6 border-b border-slate-100 pb-6">
                                    {doc.desc}
                                </p>
                                <button className="text-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Profile <i className="fa-solid fa-arrow-right text-primary"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
