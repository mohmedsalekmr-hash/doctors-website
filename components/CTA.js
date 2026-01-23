import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
    const { t, isRTL } = useLanguage();

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-white">
            <div className="container-custom">
                <div className="bg-primary rounded-[4rem] p-16 lg:p-32 relative overflow-hidden group shadow-floating">
                    {/* Elite Background Atmosphere */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/[0.03] rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-[2000ms]"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-luxury-gold/10 rounded-full blur-[100px]"></div>
                        {/* Decorative Mesh Grid */}
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #C5A572 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 text-center lg:text-left">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 text-luxury-gold font-bold text-[0.65rem] uppercase tracking-[0.3em] mb-10 border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-luxury-gold shadow-[0_0_10px_rgba(197,165,114,0.5)]"></span>
                                Now Welcoming Elite Patients
                            </div>
                            <h2 className={`text-5xl lg:text-7xl font-bold text-white mb-10 leading-[1.1] font-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                                {isRTL ? 'جاهز لابتسامة أكثر إشراقاً؟' : (
                                    <>Begin Your Journey to <br /><span className="font-serif italic font-normal text-luxury-gold">Radiant Health</span></>
                                )}
                            </h2>
                            <p className={`text-xl lg:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl ${isRTL ? 'text-right ml-auto' : 'text-left'}`}>
                                Experience the pinnacle of personalized dentistry. Our world-class studio is currently accepting a limited number of new patients seeking the ultimate in care and aesthetics.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-12 shrink-0">
                            <Link
                                href="/booking"
                                className="btn-premium px-14 py-7 bg-luxury-gold text-primary rounded-[2.5rem] font-bold text-[0.85rem] uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all shadow-luxury group"
                            >
                                <span className="relative z-10 flex items-center gap-4">
                                    {isRTL ? 'احجز موعدك الآن' : 'Request Appointment'}
                                    <i className={`fa-solid ${isRTL ? 'fa-arrow-left-long' : 'fa-arrow-right-long'}`}></i>
                                </span>
                            </Link>

                            <div className="flex items-center gap-6 text-white group cursor-pointer">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex-center text-2xl border border-white/10 group-hover:bg-luxury-gold/10 group-hover:border-luxury-gold transition-all duration-500 shadow-sm">
                                    <i className="fa-solid fa-phone-volume text-luxury-gold"></i>
                                </div>
                                <div className={`text-left ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <p className="font-bold text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-1">Private Reception</p>
                                    <p className="text-2xl font-bold font-heading tracking-tight">+1 (555) 000-1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


