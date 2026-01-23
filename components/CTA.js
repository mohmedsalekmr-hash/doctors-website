import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden group">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-white opacity-[0.05] rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
                        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary-light opacity-[0.2] rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest mb-8 border border-white/20">
                                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                Now Accepting New Patients
                            </div>
                            <h2 className={`text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight font-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                                Ready for a <span className="opacity-80">Brighter, Healthier</span> Smile?
                            </h2>
                            <p className={`text-xl text-white/70 font-normal leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                Book your premium dental consultation online in less than 2 minutes. Experience the future of dentistry today.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-8 shrink-0">
                            <Link
                                href="/booking"
                                className="px-12 py-6 bg-white text-primary rounded-[2rem] font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 shadow-xl"
                            >
                                {isRTL ? 'احجز موعدك الآن' : 'Book Your Visit Now'}
                            </Link>

                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl border border-white/20">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </div>
                                <div className={`text-left ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <p className="font-bold text-sm uppercase tracking-widest text-white/60">Emergency Line</p>
                                    <p className="text-lg font-bold">+1 (555) 000-1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

