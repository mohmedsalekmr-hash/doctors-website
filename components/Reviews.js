import { useLanguage } from '@/context/LanguageContext';

export default function Reviews() {
    const { isRTL } = useLanguage();

    const reviews = [
        {
            name: 'Michael Scott',
            role: isRTL ? 'مريض تبييض' : 'Whitening Patient',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
            text: isRTL ? "أفضل تجربة أسنان مررت بها على الإطلاق. الدكتور إسلام محترف للغاية والعيادة نظيفة جداً." : "The best dental experience I've ever had. Dr. Islam is incredibly professional and the clinic is spotless."
        },
        {
            name: 'Sarah Jenkins',
            role: isRTL ? 'مريضة زراعة' : 'Implant Patient',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
            text: isRTL ? "كنت خائفة جداً من طبيب الأسنان، لكن الفريق هنا جعلني أشعر براحة كبيرة. لقد تغيرت نظرتي تماماً." : "I was terrified of the dentist, but the team here made me feel so comfortable. Game changer for me."
        },
        {
            name: 'David Chang',
            role: isRTL ? 'مريض فحص دوري' : 'Checkup Patient',
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
            text: isRTL ? "أوصي بشدة بـ SmilePro! نظام الحجز سهل للغاية والموظفون ودودون. 5 نجوم." : "Highly recommend SmilePro! The booking system is super easy, and the staff is friendly. 5 stars."
        },
    ];

    return (
        <section id="reviews" className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
                    <div className="reveal-text mb-6">
                        <span className="inline-flex items-center gap-3 text-luxury-gold font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in">
                            <i className="fa-solid fa-star-half-stroke text-[0.8rem]"></i>
                            Wall of Excellence
                        </span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-heading font-bold text-primary">
                        {isRTL ? 'ماذا يقول مرضانا عنا' : (
                            <>Shared <span className="font-serif italic font-normal text-luxury-gold">Journeys</span></>
                        )}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="group bg-surface-cream p-12 rounded-[4rem] border border-luxury-gold/5 shadow-premium flex flex-col justify-between hover:shadow-luxury transition-all duration-700 relative overflow-hidden"
                        >
                            {/* Decorative Quote Mark */}
                            <i className="fa-solid fa-quote-right absolute top-10 right-10 text-6xl text-primary/[0.03] group-hover:text-luxury-gold/10 transition-colors duration-700"></i>

                            <div className="relative z-10">
                                <div className="flex text-luxury-gold gap-1.5 mb-10 translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-[0.6rem]"></i>)}
                                </div>
                                <p className="text-primary font-medium italic mb-12 leading-relaxed text-xl">"{r.text}"</p>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 pt-10 border-t border-luxury-gold/10">
                                <div className="relative group/avatar">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-luxury group-hover/avatar:scale-110 transition-transform duration-500">
                                        <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-primary text-luxury-gold rounded-xl flex-center text-[0.6rem] border-2 border-white">
                                        <i className="fa-solid fa-check-double"></i>
                                    </div>
                                </div>
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <h4 className="font-bold text-primary text-lg font-heading tracking-tight mb-1">{r.name}</h4>
                                    <span className="text-[0.65rem] text-luxury-gold font-bold uppercase tracking-[0.2em]">{r.role}</span>
                                </div>
                            </div>

                            {/* Hover Reveal Mesh */}
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 opacity-[0.4] -z-10"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Luxury Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
        </section>
    );
}


