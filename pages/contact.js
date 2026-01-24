import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Contact() {
    const { t, isRTL } = useLanguage();

    return (
        <Layout>
            <Head>
                <title>{t.nav.contact} | SmilePro Clinical</title>
            </Head>

            <div className="pt-32 pb-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-96 bg-slate-50"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-20 lg:mb-28 max-w-4xl mx-auto">
                        <div className="reveal-text mb-4">
                            <span className="inline-flex items-center gap-3 text-primary-blue font-bold text-[0.7rem] uppercase tracking-[0.4em]">
                                <span className="w-8 h-px bg-primary-blue"></span>
                                {t.nav.contact}
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 tracking-tight">{t.contact.title}</h1>
                        <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">{t.contact.desc}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        {/* Info Column */}
                        <div className="space-y-8">
                            {/* Location Box */}
                            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-soft hover:shadow-clinical transition-all duration-500">
                                <div className="w-14 h-14 bg-primary-blue rounded-2xl flex-center text-white text-2xl mb-8">
                                    <i className="fa-solid fa-map-location-dot"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">{isRTL ? 'موقع العيادة' : 'Clinical Location'}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                    {t.contact.location}
                                </p>
                            </div>

                            {/* Hours Box */}
                            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-soft hover:shadow-clinical transition-all duration-500">
                                <div className="w-14 h-14 bg-clinical-teal rounded-2xl flex-center text-white text-2xl mb-8">
                                    <i className="fa-solid fa-clock-rotate-left"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">{t.contact.hours.title}</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{isRTL ? 'أيام العمل' : 'Working Days'}</span>
                                        <span className="font-bold text-primary text-sm">{t.contact.hours.days}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{isRTL ? 'الفترة الصباحية' : 'Morning Shift'}</span>
                                        <span className="font-bold text-primary text-sm">{t.contact.hours.morning}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{isRTL ? 'الفترة المسائية' : 'Evening Shift'}</span>
                                        <span className="font-bold text-primary text-sm">{t.contact.hours.evening}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{isRTL ? 'يوم الجمعة' : 'Friday'}</span>
                                        <span className="font-bold text-rose-500 text-sm">{t.contact.hours.weekend}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Visual/Map Area */}
                        <div className="rounded-[3rem] overflow-hidden relative group min-h-[500px] shadow-floating">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                                alt="Modern Clinical Environment"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Floating Action Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl px-10 py-6 rounded-2xl border border-white/50 shadow-luxury z-10 text-center animate-bounce-slow">
                                <i className="fa-solid fa-location-dot text-primary-blue text-3xl mb-3 block"></i>
                                <span className="font-bold text-primary tracking-widest uppercase text-xs block">SmilePro Clinical</span>
                            </div>

                            {/* Directions Shortcut */}
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-8 left-8 right-8 py-5 bg-primary-blue text-white rounded-2xl flex-center gap-3 font-bold uppercase tracking-widest text-xs hover:bg-clinical-blue transition-all shadow-clinical opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-700"
                            >
                                <i className="fa-solid fa-diamond-turn-right"></i>
                                {isRTL ? 'احصل على الاتجاهات' : 'Get Live Directions'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

