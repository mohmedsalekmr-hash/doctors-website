import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
    const { t, isRTL } = useLanguage();

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-white">
            <div className="container-custom">
                <div className="bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden group shadow-floating">
                    {/* Clinical Atmosphere */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/[0.03] rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-[2000ms]"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-clinical-blue/5 rounded-full blur-[100px]"></div>
                        <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: `radial-gradient(circle, rgb(var(--clinical-blue)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 text-clinical-blue font-bold text-[0.65rem] uppercase tracking-[0.3em] mb-8 border border-white/10">
                                <span className="w-2 h-2 rounded-full bg-clinical-blue animate-pulse"></span>
                                Clinical Consultations Open
                            </div>
                            <h2 className={`text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                                {isRTL ? 'جاهز للعناية بصحتك؟' : (
                                    <>Take the First Step to <br /><span className="text-gradient font-serif italic font-normal">Advanced Health</span></>
                                )}
                            </h2>
                            <p className={`text-lg lg:text-xl text-white/50 font-medium leading-relaxed ${isRTL ? 'text-right ml-auto' : 'text-left'}`}>
                                Register your profile for a comprehensive clinical screening. Our specialists are ready to provide expert medical guidance tailored to your needs.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-10 shrink-0 w-full lg:w-auto">
                            <Link
                                href="/booking"
                                className="btn-premium px-12 py-6 bg-clinical-blue text-white rounded-2xl font-bold text-[0.85rem] uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all shadow-clinical group w-full lg:w-auto flex items-center justify-center gap-4"
                            >
                                {isRTL ? 'حجز موعد عيادي' : 'Request Clinical Visit'}
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                            </Link>

                            <div className="flex items-center gap-5 text-white group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex-center text-xl border border-white/10 group-hover:bg-clinical-blue group-hover:border-clinical-blue transition-all duration-500 shadow-sm">
                                    <i className="fa-solid fa-headset text-clinical-blue group-hover:text-white"></i>
                                </div>
                                <div className={`text-left ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <p className="font-bold text-[0.6rem] uppercase tracking-[0.3em] text-white/30 mb-1">Clinical Support</p>
                                    <p className="text-xl font-bold tracking-tight">+1 (555) 000-1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
