import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Calendar from '@/components/Calendar';

export default function Booking() {
    const { t, isRTL } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState(1);
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

    const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '19:00', '20:00'];

    const validateName = (name) => {
        if (name.length === 0) return { valid: null, msg: '' };
        const hasNumbers = /\d/.test(name);
        if (hasNumbers) return { valid: false, msg: isRTL ? 'الاسم لا يمكن أن يحتوي على أقام' : 'Name cannot contain numbers' };
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
        if (field === 'name') setValidation({ ...validation, name: validateName(value) });
        if (field === 'phone') setValidation({ ...validation, phone: validatePhone(value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation.name.valid && validation.phone.valid && formData.date && formData.time) {
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (isSubmitted) {
        return (
            <Layout>
                <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-24 px-6 md:px-12">
                    <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-clinical p-12 lg:p-20 text-center relative overflow-hidden animate-fade-in-up border border-slate-100">
                        <div className="absolute top-0 left-0 w-full h-2 bg-clinical-blue"></div>

                        <div className="relative mb-10">
                            <div className="w-24 h-24 bg-slate-50 text-clinical-blue rounded-3xl flex-center text-4xl mx-auto shadow-sm animate-scale-in">
                                <i className="fa-solid fa-calendar-check"></i>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
                            {t.contact.form.success_title}
                        </h2>

                        <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md mx-auto font-medium">
                            {t.contact.form.success_msg}
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100 flex flex-col items-center gap-3">
                            <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">{t.contact.form.time_estimate}</span>
                            <div className="flex items-center gap-4">
                                <i className="fa-solid fa-clock text-clinical-blue"></i>
                                <span className="text-xl font-bold text-slate-900">~ 30 Minutes</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/" className="btn-premium px-10 py-5 bg-clinical-blue text-white rounded-2xl w-full sm:w-auto font-bold uppercase tracking-[0.1em] shadow-clinical flex-center gap-3 hover:bg-clinical-blue/90">
                                <span>{t.contact.form.back_home}</span>
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>{t.nav.book} | SmilePro Clinical</title>
            </Head>

            <div className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-primary-light to-transparent"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16 lg:mb-20">
                            <div className="reveal-text mb-4">
                                <span className="inline-flex items-center gap-3 text-clinical-blue font-bold text-[0.7rem] uppercase tracking-[0.3em]">
                                    <span className="w-8 h-px bg-clinical-blue"></span>
                                    Clinical Scheduling
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                                {t.nav.book}
                            </h1>
                            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                                Secure your clinical consultation with our medical specialists in a few simple steps.
                            </p>
                        </div>

                        <div className="bg-white rounded-[2.5rem] lg:rounded-[4rem] shadow-floating border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[750px] animate-scale-in">
                            {/* Left Side: Medical Progress info */}
                            <div className="lg:w-1/3 bg-slate-50 p-12 lg:p-16 border-r border-slate-100 flex flex-col gap-12">
                                <div>
                                    <h2 className="text-xl font-bold text-primary mb-8">{isRTL ? 'نظام الحجز الذكي' : 'Intelligent Booking'}</h2>
                                    <div className="space-y-8">
                                        {[
                                            { step: 1, title: isRTL ? 'معلومات المريض' : 'Patient Identity', active: step === 1 },
                                            { step: 2, title: isRTL ? 'التاريخ والوقت' : 'Schedule Select', active: step === 2 },
                                            { step: 3, title: isRTL ? 'تأكيد الحجز' : 'Final Validation', active: step === 3 },
                                        ].map((s) => (
                                            <div key={s.step} className="flex items-center gap-5 group">
                                                <div className={`w-10 h-10 rounded-xl flex-center font-bold text-sm transition-all duration-500 ${s.active ? 'bg-clinical-blue text-white shadow-clinical scale-110' : 'bg-white border border-slate-200 text-slate-400'}`}>
                                                    {s.step}
                                                </div>
                                                <span className={`text-sm font-bold tracking-wide transition-colors ${s.active ? 'text-slate-900' : 'text-slate-400'}`}>{s.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-10 border-t border-slate-200">
                                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-soft">
                                        <div className="w-10 h-10 rounded-full bg-clinical-blue/10 flex-center text-clinical-blue">
                                            <i className="fa-solid fa-lock text-xs"></i>
                                        </div>
                                        <div>
                                            <p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Secure</p>
                                            <p className="text-[0.7rem] font-bold text-slate-900 leading-none">Medical Data Encryption</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Step-based Form */}
                            <div className="lg:w-2/3 p-8 lg:p-20 flex flex-col">
                                <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
                                    {step === 1 && (
                                        <div className="space-y-10 animate-fade-in">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="group">
                                                    <label>{t.contact.form.name}</label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            placeholder="John Doe"
                                                            className={validation.name.valid === false ? 'border-red-400 focus:border-red-500' : ''}
                                                            value={formData.name}
                                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                                        />
                                                        {validation.name.valid === true && <i className="fa-solid fa-check absolute right-5 top-1/2 -translate-y-1/2 text-green-500"></i>}
                                                    </div>
                                                </div>
                                                <div className="group">
                                                    <label>{t.contact.form.phone}</label>
                                                    <div className="relative">
                                                        <input
                                                            type="tel"
                                                            placeholder="+1 (555) 000-0000"
                                                            className={validation.phone.valid === false ? 'border-red-400 focus:border-red-500' : ''}
                                                            value={formData.phone}
                                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                                        />
                                                        {validation.phone.valid === true && <i className="fa-solid fa-check absolute right-5 top-1/2 -translate-y-1/2 text-green-500"></i>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label>{isRTL ? 'المجال الطبي' : 'Medical Department'}</label>
                                                <select value={formData.service} onChange={(e) => handleInputChange('service', e.target.value)}>
                                                    <option value="" disabled>{isRTL ? 'اختر التخصص...' : 'Select Specialty...'}</option>
                                                    <option value="General">Family Medicine</option>
                                                    <option value="Cardiology">Dental Restorative</option>
                                                    <option value="Orthopedic">Oral Surgery</option>
                                                    <option value="Pharmacy">Pharmacy Consultation</option>
                                                </select>
                                            </div>
                                            <button
                                                type="button"
                                                disabled={!validation.name.valid || !validation.phone.valid || !formData.service}
                                                onClick={() => setStep(2)}
                                                className="btn-premium w-full py-6 bg-clinical-blue text-white font-bold uppercase tracking-[0.15em] rounded-2xl shadow-clinical mt-10 disabled:opacity-50 hover:bg-clinical-blue/90"
                                            >
                                                {isRTL ? 'الخطوة التالية' : 'Selection Schedule'}
                                            </button>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="space-y-10 animate-fade-in">
                                            <div className="group">
                                                <label className="mb-6">{isRTL ? 'اختر تاريخ الزيارة' : 'Choose Appointment Date'}</label>
                                                <Calendar
                                                    selectedDate={formData.date}
                                                    onDateSelect={(date) => handleInputChange('date', date)}
                                                />
                                            </div>

                                            <div className="group">
                                                <label className="mb-6">{isRTL ? 'المواعيد المتاحة' : 'Available Time Slots'}</label>
                                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                                    {timeSlots.map((time) => (
                                                        <button
                                                            key={time}
                                                            type="button"
                                                            onClick={() => handleInputChange('time', time)}
                                                            className={`py-4 rounded-xl font-bold text-sm transition-all border ${formData.time === time ? 'bg-primary text-white shadow-clinical border-primary' : 'bg-white border-slate-100 text-slate-500 hover:border-primary/30 hover:bg-slate-50'}`}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex gap-4 mt-auto">
                                                <button type="button" onClick={() => setStep(1)} className="w-1/3 py-5 border border-slate-200 rounded-2xl font-bold uppercase tracking-widest text-xs text-slate-400 hover:bg-slate-50 transition-colors">{isRTL ? 'رجوع' : 'Back'}</button>
                                                <button
                                                    type="button"
                                                    disabled={!formData.date || !formData.time}
                                                    onClick={() => setStep(3)}
                                                    className="w-2/3 py-5 bg-clinical-blue text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-clinical disabled:opacity-50 hover:bg-clinical-blue/90"
                                                >
                                                    {isRTL ? 'الخطوة الأخيرة' : 'Final Summary'}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="animate-fade-in flex flex-col h-full">
                                            <h3 className="text-xl font-bold text-primary mb-10">{isRTL ? 'مراجعة بيانات الحجز' : 'Review Appointment Summary'}</h3>
                                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-6 mb-12">
                                                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{isRTL ? 'المريض' : 'Patient'}</span>
                                                    <span className="font-bold text-primary">{formData.name}</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{isRTL ? 'التخصص' : 'Department'}</span>
                                                    <span className="font-bold text-primary">{formData.service}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{isRTL ? 'الموعد' : 'Schedule'}</span>
                                                    <div className="text-right">
                                                        <p className="font-bold text-slate-900">{formData.date}</p>
                                                        <p className="text-clinical-blue font-bold">{formData.time}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 mt-auto">
                                                <button type="button" onClick={() => setStep(2)} className="w-1/3 py-5 border border-slate-200 rounded-2xl font-bold uppercase tracking-widest text-xs text-slate-400 hover:bg-slate-50 transition-colors">{isRTL ? 'تعديل' : 'Modify'}</button>
                                                <button
                                                    type="submit"
                                                    className="w-2/3 py-5 bg-clinical-teal text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-clinical hover:bg-teal-700 transition-all flex-center gap-3"
                                                >
                                                    <span>{isRTL ? 'تأكيد الحجز الطبي' : 'Confirm Clinical Visit'}</span>
                                                    <i className="fa-solid fa-check-double"></i>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}





