export default function Reviews() {
    const reviews = [
        { name: 'Michael Scott', role: 'Whitening Patient', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', text: "The best dental experience I've ever had. Dr. Islam is incredibly professional and the clinic is spotless." },
        { name: 'Sarah Jenkins', role: 'Implant Patient', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', text: "I was terrified of the dentist, but the team here made me feel so comfortable. Game changer for me." },
        { name: 'David Chang', role: 'Checkup Patient', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', text: "Highly recommend SmilePro! The booking system is super easy, and the staff is friendly. 5 stars." },
    ];

    return (
        <section id="reviews" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">Testimonials</span>
                    <h2 className="text-4xl font-bold text-dark">What Our Patients Say</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lgg shadow-sm border border-gray-100 flex flex-col justify-between hover:-translate-y-2 transition-transform">
                            <div>
                                <div className="flex text-amber-400 gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-sm"></i>)}
                                </div>
                                <p className="text-text-light italic mb-8 leading-relaxed">"{r.text}"</p>
                            </div>
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
                                <div>
                                    <h4 className="font-bold text-dark text-sm">{r.name}</h4>
                                    <span className="text-xs text-text-light">{r.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
