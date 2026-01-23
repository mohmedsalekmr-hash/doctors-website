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
                <div className="min-h-screen bg-surface-light flex items-center justify-center pt-20 px-6">
                    <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-premium p-12 lg:p-20 text-center relative overflow-hidden animate-fade-in-up">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-400"></div>

                        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-10 shadow-sm border border-green-100">
                            <i className="fa-solid fa-check-double scale-110"></i>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6">
                            {t.contact.form.success_title}
                        </h2>

                        <p className="text-lg text-text-light leading-relaxed mb-10 max-w-md mx-auto font-medium">
                            {t.contact.form.success_msg}
                        </p>

                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 text-primary font-bold text-sm mb-12 border border-primary/10">
                            <i className="fa-solid fa-clock-rotate-left"></i>
                            {t.contact.form.time_estimate}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/" className="btn-premium px-10 py-5 bg-primary text-white rounded-2xl w-full sm:w-auto font-bold shadow-premium">
                                {t.contact.form.back_home}
                            </Link>
                            <button onClick={() => setIsSubmitted(false)} className="px-10 py-5 text-text-light font-bold hover:text-primary transition-colors">
                                {isRTL ? 'تعديل الطلب' : 'Modify Request'}
                            </button>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>{t.nav.book} | SmilePro</title>
            </Head>

            <div className="min-h-screen bg-surface-light pt-32 pb-20 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/30 rounded-full blur-[100px]"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16 lg:mb-20">
                            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
                                {isRTL ? 'احجز موعدك' : 'Schedule Your Visit'}
                            </h1>
                            <p className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
                                Join over 15,000 happy patients. Choose your preferred time and service, and we'll take care of the rest.
                            </p>
                        </div>

                        <div className="bg-white rounded-[3rem] shadow-premium overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[700px]">
                            {/* Left Side: Info & Visual */}
                            <div className="lg:w-[40%] bg-primary relative p-12 lg:p-16 flex flex-col justify-between text-white overflow-hidden">
                                {/* Abstract BG Pattern */}
                                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                    <div className="absolute -top-10 -right-10 w-48 h-48 border-[20px] border-white rounded-full"></div>
                                    <div className="absolute bottom-20 -left-10 w-32 h-32 border-[10px] border-white rotate-45"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-12 border border-white/20">
                                        <i className="fa-solid fa-calendar-check text-white"></i>
                                    </div>
                                    <h2 className="text-3xl font-bold font-heading mb-6">{isRTL ? 'لماذا تختارنا؟' : 'Why SmilePro?'}</h2>
                                    <ul className="space-y-6">
                                        {[
                                            { icon: 'fa-user-doctor', text: isRTL ? 'أطباء معتمدون دولياً' : 'Board Certified Specialists' },
                                            { icon: 'fa-shield-heart', text: isRTL ? 'رعاية متميزة ومرتكزة على المريض' : 'Patient-Centered Premium Care' },
                                            { icon: 'fa-microscope', text: isRTL ? 'أحدث تكنولوجيا طب الأسنان' : 'State-of-the-Art Dental Tech' }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs shrink-0 border border-white/20">
                                                    <i className={`fa-solid ${item.icon}`}></i>
                                                </div>
                                                <span className="font-medium text-white/90">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative z-10 pt-12 mt-12 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-slate-200">
                                            <img src="/images/doctor.png" alt="Doctor" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Dr. Islam</p>
                                            <p className="text-xs text-white/60">Lead Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="lg:w-[60%] p-10 lg:p-20">
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group relative">
                                            <label className={`text-xs font-bold uppercase tracking-widest transition-colors block mb-4 ${validation.name.valid === false ? 'text-red-500' : 'text-text-light group-focus-within:text-primary'}`}>
                                                {t.contact.form.name}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="e.g. John Doe"
                                                    className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all text-lg font-medium placeholder:text-slate-300 ${validation.name.valid === false ? 'border-red-500' : 'border-slate-100 focus:border-primary'}`}
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    required
                                                />
                                                <div className={`absolute right-0 bottom-4 transition-colors ${validation.name.valid === false ? 'text-red-500' : validation.name.valid === true ? 'text-green-500' : 'text-slate-300 group-focus-within:text-primary'}`}>
                                                    <i className={`fa-solid ${validation.name.valid === false ? 'fa-circle-xmark' : validation.name.valid === true ? 'fa-circle-check' : 'fa-user'}`}></i>
                                                </div>
                                            </div>
                                            {validation.name.valid === false && <p className="text-[10px] font-bold text-red-500 mt-2 uppercase tracking-tighter">{validation.name.msg}</p>}
                                        </div>

                                        <div className="group relative">
                                            <label className={`text-xs font-bold uppercase tracking-widest transition-colors block mb-4 ${validation.phone.valid === false ? 'text-red-500' : 'text-text-light group-focus-within:text-primary'}`}>
                                                {t.contact.form.phone}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all text-lg font-medium placeholder:text-slate-300 ${validation.phone.valid === false ? 'border-red-500' : 'border-slate-100 focus:border-primary'}`}
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    required
                                                />
                                                <div className={`absolute right-0 bottom-4 transition-colors ${validation.phone.valid === false ? 'text-red-500' : validation.phone.valid === true ? 'text-green-500' : 'text-slate-300 group-focus-within:text-primary'}`}>
                                                    <i className={`fa-solid ${validation.phone.valid === false ? 'fa-circle-xmark' : validation.phone.valid === true ? 'fa-circle-check' : 'fa-phone'}`}></i>
                                                </div>
                                            </div>
                                            {validation.phone.valid === false && <p className="text-[10px] font-bold text-red-500 mt-2 uppercase tracking-tighter">{validation.phone.msg}</p>}
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary transition-colors block mb-4">
                                            {isRTL ? 'نوع الخدمة' : 'Type of Service'}
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-primary transition-all text-lg font-medium appearance-none cursor-pointer"
                                                value={formData.service}
                                                onChange={(e) => handleInputChange('service', e.target.value)}
                                                required
                                            >
                                                <option value="">{isRTL ? 'اختر الخدمة...' : 'Choose a service...'}</option>
                                                <option value="Cosmetic">{isRTL ? 'تجميل الأسنان' : 'Cosmetic Dentistry'}</option>
                                                <option value="Implants">{isRTL ? 'زراعة الأسنان' : 'Dental Implants'}</option>
                                                <option value="Checkup">{isRTL ? 'فحص دوري' : 'General Checkup'}</option>
                                                <option value="Ortho">{isRTL ? 'تقويم الأسنان' : 'Orthodontics'}</option>
                                            </select>
                                            <div className="absolute right-0 bottom-4 text-slate-300 pointer-events-none group-focus-within:text-primary transition-colors">
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group relative">
                                            <label className="text-xs font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary transition-colors block mb-4">
                                                {isRTL ? 'التاريخ' : 'Preferred Date'}
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-primary transition-all text-lg font-medium"
                                                    value={formData.date}
                                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="group relative">
                                            <label className="text-xs font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary transition-colors block mb-4">
                                                {isRTL ? 'الوقت' : 'Preferred Time'}
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-primary transition-all text-lg font-medium appearance-none cursor-pointer"
                                                    value={formData.time}
                                                    onChange={(e) => handleInputChange('time', e.target.value)}
                                                    required
                                                >
                                                    <option value="">{isRTL ? 'اختر الوقت...' : 'Select time...'}</option>
                                                    <option value="09:00">09:00 AM</option>
                                                    <option value="11:00">11:00 AM</option>
                                                    <option value="13:00">01:00 PM</option>
                                                    <option value="15:00">03:00 PM</option>
                                                    <option value="17:00">05:00 PM</option>
                                                </select>
                                                <div className="absolute right-0 bottom-4 text-slate-300 pointer-events-none group-focus-within:text-primary transition-colors">
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={!validation.name.valid || !validation.phone.valid}
                                            className="btn-premium w-full py-6 bg-primary text-white rounded-[2rem] text-lg font-bold shadow-premium hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {t.contact.form.submit}
                                        </button>
                                        <p className="text-center text-xs text-text-light mt-6 font-medium">
                                            {isRTL ? 'لا يلزم وجود بطاقة ائتمان. سنؤكد موعدك هاتفياً.' : 'No credit card required. We will confirm your visit via phone.'}
                                        </p>
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


