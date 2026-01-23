import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Booking() {
    const { t, isRTL } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: ''
    });

    const [validation, setValidation] = useState({
        name: { valid: null, msg: '' },
        phone: { valid: null, msg: '' }
    });

    const validateName = (name) => {
        if (name.length === 0) return { valid: null, msg: '' };
        const hasNumbers = /\d/.test(name);
        if (hasNumbers) return { valid: false, msg: isRTL ? 'الاسم لا يمكن أن يحتوي على أرقام' : 'Name cannot contain numbers' };
        if (name.length < 3) return { valid: false, msg: isRTL ? 'الاسم قصير جداً' : 'Name is too short' };
        return { valid: true, msg: '' };
    };

    const validatePhone = (phone) => {
        if (phone.length === 0) return { valid: null, msg: '' };
        const isPhone = /^[+]?[\d\s-]{8,}$/.test(phone);
        if (!isPhone) return { valid: false, msg: isRTL ? 'رقم الهاتف غير صالح' : 'Invalid phone number' };
        return { valid: true, msg: '' };
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (field === 'name') {
            setValidation({ ...validation, name: validateName(value) });
        }
        if (field === 'phone') {
            setValidation({ ...validation, phone: validatePhone(value) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation.name.valid && validation.phone.valid) {
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (isSubmitted) {
        return (
            <Layout>
                <div className="min-h-screen bg-surface-cream flex items-center justify-center pt-24 px-8">
                    <div className="max-w-3xl w-full bg-white rounded-[4rem] shadow-luxury p-16 lg:p-24 text-center relative overflow-hidden animate-fade-in-up border border-luxury-gold/10">
                        {/* Elite Success Header */}
                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-luxury-gold via-primary to-luxury-gold"></div>

                        <div className="relative mb-12">
                            <div className="w-28 h-28 bg-surface-cream text-luxury-gold rounded-[2rem] flex-center text-5xl mx-auto shadow-sm border border-luxury-gold/20 animate-scale-in">
                                <i className="fa-solid fa-envelope-open-text"></i>
                            </div>
                            <div className="absolute -inset-4 border border-luxury-gold/10 rounded-[2.5rem] animate-pulse"></div>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-heading font-bold text-primary mb-8 leading-tight">
                            {isRTL ? 'تم استلام طلبك الملكي' : (
                                <>Awaiting Your <br /><span className="font-serif italic font-normal text-gradient-gold">Grand Entrance</span></>
                            )}
                        </h2>

                        <p className="text-xl text-luxury-slate leading-relaxed mb-12 max-w-lg mx-auto font-medium">
                            {t.contact.form.success_msg}
                        </p>

                        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-[2rem] bg-surface-cream text-primary font-bold text-sm mb-16 border border-luxury-gold/20 shadow-sm animate-fade-in delay-500">
                            <i className="fa-solid fa-paper-plane text-luxury-gold"></i>
                            {t.contact.form.time_estimate}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/" className="btn-premium px-12 py-6 bg-primary text-white rounded-[2rem] w-full sm:w-auto font-bold uppercase tracking-[0.2em] shadow-luxury flex-center gap-4 group">
                                <span>{t.contact.form.back_home}</span>
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left-long' : 'fa-arrow-right-long'} text-luxury-gold group-hover:translate-x-2 transition-transform`}></i>
                            </Link>
                            <button onClick={() => setIsSubmitted(false)} className="px-10 py-5 text-luxury-slate font-bold uppercase tracking-[0.15em] hover:text-primary transition-all">
                                {isRTL ? 'تعديل التفاصيل' : 'Refine Details'}
                            </button>
                        </div>

                        {/* Background Ambiance */}
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>{t.nav.book} | SmilePro Elite</title>
            </Head>

            <div className="min-h-screen bg-surface-cream pt-32 pb-24 relative overflow-hidden">
                {/* Background Mastery */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-luxury-blue/30 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20 lg:mb-28">
                            <div className="reveal-text mb-6">
                                <span className="inline-flex items-center gap-3 text-luxury-gold font-bold text-[0.7rem] uppercase tracking-[0.4em] animate-fade-in">
                                    <span className="w-8 h-px bg-luxury-gold"></span>
                                    The First Step to Mastery
                                </span>
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-heading font-bold text-primary mb-8 leading-tight">
                                {isRTL ? 'احجز استشارتك الخاصة' : (
                                    <>Reserve Your <br /><span className="font-serif italic font-normal text-luxury-gold">Private Consultation</span></>
                                )}
                            </h1>
                            <p className="text-xl text-luxury-slate max-w-2xl mx-auto leading-relaxed font-medium">
                                Curate your personal aesthetic journey with our world-class specialists in an environment of absolute discretion and comfort.
                            </p>
                        </div>

                        <div className="bg-white rounded-[4rem] shadow-luxury overflow-hidden border border-luxury-gold/10 flex flex-col lg:flex-row min-h-[800px] animate-scale-in">
                            {/* Prestige Information Sidebar */}
                            <div className="lg:w-[35%] bg-primary relative p-16 lg:p-20 flex flex-col justify-between text-white overflow-hidden">
                                {/* Elegant Texture Overlay */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C5A572 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-[80px]"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex-center text-4xl mb-12 border border-white/10 shadow-sm">
                                        <i className="fa-solid fa-calendar-plus text-luxury-gold"></i>
                                    </div>
                                    <h2 className="text-3xl font-bold font-heading mb-8 leading-tight">{isRTL ? 'معايير النخبة' : 'Elite Standards'}</h2>
                                    <ul className="space-y-10">
                                        {[
                                            { icon: 'fa-chess-king', text: isRTL ? 'خبرة فنية عالمية' : 'Artistic Clinical Mastery' },
                                            { icon: 'fa-vault', text: isRTL ? 'خصوصية مطلقة' : 'Absolute Patient Privacy' },
                                            { icon: 'fa-gem', text: isRTL ? 'مواد فاخرة عالمية' : 'World-Class Premium Materials' }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-5 group">
                                                <div className="w-10 h-10 rounded-xl bg-white/10 flex-center text-sm shrink-0 border border-white/10 group-hover:bg-luxury-gold transition-all duration-500">
                                                    <i className={`fa-solid ${item.icon} text-luxury-gold group-hover:text-primary`}></i>
                                                </div>
                                                <span className="font-bold text-white/80 text-sm tracking-wide mt-2">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative z-10 pt-12 mt-12 border-t border-white/10 flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-slate-200 shadow-lg">
                                        <img src="/images/doctor.png" alt="Director" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-luxury-gold uppercase tracking-widest mb-1 leading-none">Medical Director</p>
                                        <p className="text-lg font-bold font-heading leading-none">Islam Salek</p>
                                    </div>
                                </div>
                            </div>

                            {/* Precise Interaction Form */}
                            <div className="lg:w-[65%] p-12 lg:p-24 bg-white relative">
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="group relative">
                                            <label className={`text-[0.65rem] font-bold uppercase tracking-[0.3em] transition-colors block mb-1 ${validation.name.valid === false ? 'text-red-500' : 'text-luxury-slate group-focus-within:text-luxury-gold'}`}>
                                                {t.contact.form.name}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Curated Name"
                                                    className={`w-full bg-transparent border-b py-5 outline-none transition-all text-xl font-bold placeholder:text-slate-100 placeholder:font-normal ${validation.name.valid === false ? 'border-red-500 text-red-500' : 'border-luxury-slate/20 focus:border-luxury-gold text-primary'}`}
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    required
                                                />
                                                <div className={`absolute right-0 bottom-6 transition-colors ${validation.name.valid === false ? 'text-red-500' : validation.name.valid === true ? 'text-green-500' : 'text-slate-200 group-focus-within:text-luxury-gold'}`}>
                                                    <i className={`fa-solid ${validation.name.valid === false ? 'fa-circle-xmark' : validation.name.valid === true ? 'fa-circle-check' : 'fa-signature text-xs'}`}></i>
                                                </div>
                                            </div>
                                            {validation.name.valid === false && <p className="text-[10px] font-bold text-red-500 mt-2 uppercase tracking-widest">{validation.name.msg}</p>}
                                        </div>

                                        <div className="group relative">
                                            <label className={`text-[0.65rem] font-bold uppercase tracking-[0.3em] transition-colors block mb-1 ${validation.phone.valid === false ? 'text-red-500' : 'text-luxury-slate group-focus-within:text-luxury-gold'}`}>
                                                {t.contact.form.phone}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    placeholder="Secure Contact Number"
                                                    className={`w-full bg-transparent border-b py-5 outline-none transition-all text-xl font-bold placeholder:text-slate-100 placeholder:font-normal ${validation.phone.valid === false ? 'border-red-500 text-red-500' : 'border-luxury-slate/20 focus:border-luxury-gold text-primary'}`}
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    required
                                                />
                                                <div className={`absolute right-0 bottom-6 transition-colors ${validation.phone.valid === false ? 'text-red-500' : validation.phone.valid === true ? 'text-green-500' : 'text-slate-200 group-focus-within:text-luxury-gold'}`}>
                                                    <i className={`fa-solid ${validation.phone.valid === false ? 'fa-circle-xmark' : validation.phone.valid === true ? 'fa-circle-check' : 'fa-phone-lock text-xs'}`}></i>
                                                </div>
                                            </div>
                                            {validation.phone.valid === false && <p className="text-[10px] font-bold text-red-500 mt-2 uppercase tracking-widest">{validation.phone.msg}</p>}
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <label className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-luxury-slate group-focus-within:text-luxury-gold transition-colors block mb-1">
                                            {isRTL ? 'نوع الخدمة' : 'Clinical Objective'}
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-transparent border-b border-luxury-slate/20 py-5 outline-none focus:border-luxury-gold transition-all text-xl font-bold text-primary appearance-none cursor-pointer"
                                                value={formData.service}
                                                onChange={(e) => handleInputChange('service', e.target.value)}
                                                required
                                            >
                                                <option value="" disabled className="text-slate-400">{isRTL ? 'اختر التخصص...' : 'Select Specialty...'}</option>
                                                <option value="Cosmetic">{isRTL ? 'تجميل الأسنان' : 'Esthetic Smile Design'}</option>
                                                <option value="Implants">{isRTL ? 'زراعة الأسنان' : 'Elite Implantology'}</option>
                                                <option value="Checkup">{isRTL ? 'فحص دوري' : 'Executive Screening'}</option>
                                                <option value="Ortho">{isRTL ? 'تقويم الأسنان' : 'Advanced Orthodontics'}</option>
                                            </select>
                                            <div className="absolute right-0 bottom-6 text-luxury-gold/50 pointer-events-none group-focus-within:text-luxury-gold transition-colors">
                                                <i className="fa-solid fa-chevron-down text-xs"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="group relative">
                                            <label className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-luxury-slate group-focus-within:text-luxury-gold transition-colors block mb-1">
                                                {isRTL ? 'التاريخ' : 'Reserved Date'}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    className="w-full bg-transparent border-b border-luxury-slate/20 py-5 outline-none focus:border-luxury-gold transition-all text-xl font-bold text-primary"
                                                    value={formData.date}
                                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="group relative">
                                            <label className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-luxury-slate group-focus-within:text-luxury-gold transition-colors block mb-1">
                                                {isRTL ? 'الوقت' : 'Preferred Window'}
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="w-full bg-transparent border-b border-luxury-slate/20 py-5 outline-none focus:border-luxury-gold transition-all text-xl font-bold text-primary appearance-none cursor-pointer"
                                                    value={formData.time}
                                                    onChange={(e) => handleInputChange('time', e.target.value)}
                                                    required
                                                >
                                                    <option value="" disabled className="text-slate-400">{isRTL ? 'اختر الوقت...' : 'Select Window...'}</option>
                                                    <option value="09:00">09:00 AM</option>
                                                    <option value="11:00">11:00 AM</option>
                                                    <option value="13:00">01:00 PM</option>
                                                    <option value="15:00">03:00 PM</option>
                                                    <option value="17:00">05:00 PM</option>
                                                </select>
                                                <div className="absolute right-0 bottom-6 text-luxury-gold/50 pointer-events-none group-focus-within:text-luxury-gold transition-colors">
                                                    <i className="fa-solid fa-clock-ten text-xs"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-10">
                                        <button
                                            type="submit"
                                            disabled={!validation.name.valid || !validation.phone.valid}
                                            className="btn-premium w-full py-7 bg-primary text-white rounded-[2.5rem] text-[0.85rem] font-bold uppercase tracking-[0.3em] shadow-luxury hover:bg-luxury-gold hover:text-primary disabled:opacity-30 disabled:grayscale transition-all"
                                        >
                                            {isRTL ? 'إرسال طلب الاستشارة' : 'Confirm Consultation Request'}
                                        </button>
                                        <div className="flex items-center justify-center gap-4 mt-10 text-[0.6rem] font-bold text-luxury-slate uppercase tracking-[0.2em]">
                                            <i className="fa-solid fa-shield-halved text-luxury-gold"></i>
                                            {isRTL ? 'تشفير بيانات النخبة مفعل' : 'Elite Data Encryption Active'}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}



