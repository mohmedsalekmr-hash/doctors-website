import { useLanguage } from '@/context/LanguageContext';

export default function Reviews() {
    const { isRTL } = useLanguage();

    const reviews = [
        {
            name: 'Michael Scott',
            role: isRTL ? 'مريض عيادة' : 'General Patient',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
            text: isRTL ? "أفضل تجربة طبية مررت بها على الإطلاق. الفريق محترف للغاية والعيادة مجهزة بأحدث التقنيات." : "Excellent clinical experience. The specialists are incredibly professional, and the facility is equipped with state-of-the-art diagnostic tools."
        },
        {
            name: 'Sarah Jenkins',
            role: isRTL ? 'مريضة جراحة' : 'Surgical Patient',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
            text: isRTL ? "كنت قلقة بشأن الإجراء الجراحي، لكن الدكتور طمأنني وقدم رعاية استثنائية. عيادة موثوقة حقاً." : "I was concerned about the surgical procedure, but the clinical team provided exceptional reassurance and post-operative care. Highly reliable."
        },
        {
            name: 'David Chang',
            role: isRTL ? 'مريض فحص دوري' : 'Screening Patient',
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
            text: isRTL ? "نظام الحجز الذكي جعل التخطيط لزيارتي سهلاً جداً. الدقة في المواعيد والاحترافية هي السمة الغالبة هنا." : "The intelligent booking system made scheduling my screening effortless. Punctuality and professional standards are the norm here."
        },
    ];

    return (
        <section id="reviews" className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
                    <div className="reveal-text mb-6">
                        <span className="inline-flex items-center gap-3 text-primary-gold font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in text-primary-blue">
                            <i className="fa-solid fa-clipboard-check text-[0.8rem]"></i>
                            Clinical Success Stories
                        </span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-bold text-primary tracking-tight">
                        {isRTL ? 'تجارب المرضى' : (
                            <>Patient <span className="text-gradient font-serif italic font-normal px-2">Feedback</span></>
                        )}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="group bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-soft flex flex-col justify-between hover:shadow-clinical hover:-translate-y-2 transition-all duration-500 relative"
                        >
                            <i className="fa-solid fa-quote-left absolute top-8 left-8 text-4xl text-primary-blue/5"></i>

                            <div className="relative z-10">
                                <div className="flex text-primary-blue gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-[0.65rem]"></i>)}
                                </div>
                                <p className="text-primary font-medium italic mb-10 leading-relaxed text-lg">"{r.text}"</p>
                            </div>

                            <div className="relative z-10 flex items-center gap-5 pt-8 border-t border-slate-100">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm">
                                    <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                                </div>
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <h4 className="font-bold text-primary text-base tracking-tight mb-0.5">{r.name}</h4>
                                    <span className="text-[0.6rem] text-slate-400 font-bold uppercase tracking-widest">{r.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Medical Assets */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-clinical-teal/5 rounded-full blur-[80px] pointer-events-none"></div>
        </section>
    );
}
