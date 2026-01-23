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
        <section id="reviews" className="section-padding bg-surface-light relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-slate-100">
                        <i className="fa-solid fa-quote-left opacity-50"></i>
                        {isRTL ? 'آراء المرضى' : 'Patient Testimonials'}
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-heading font-bold text-text-dark">
                        {isRTL ? 'ماذا يقول مرضانا عنا' : 'Shared Experiences'}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-premium flex flex-col justify-between hover:-translate-y-2 transition-all duration-500"
                        >
                            <div>
                                <div className="flex text-accent gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-sm"></i>)}
                                </div>
                                <p className="text-text-base italic mb-10 leading-relaxed text-lg">"{r.text}"</p>
                            </div>
                            <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                                <div className="relative">
                                    <img src={r.img} alt={r.name} className="w-14 h-14 rounded-2xl object-cover shadow-md" />
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary text-white rounded-lg flex items-center justify-center text-[10px]">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                </div>
                                <div className={isRTL ? 'text-right' : 'text-left'}>
                                    <h4 className="font-bold text-text-dark text-base">{r.name}</h4>
                                    <span className="text-sm text-text-light font-medium">{r.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

