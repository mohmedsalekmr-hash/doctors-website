import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Booking() {
    const { t, isRTL } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking Request Sent (Frontend Demo)");
    };

    return (
        <Layout>
            <Head>
                <title>{t.nav.book} | SmilePro</title>
            </Head>

            <div className="min-h-screen bg-surface-gray pt-32 pb-20 relative">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                        {/* Image Side */}
                        <div className="md:w-1/2 relative bg-primary">
                            <img
                                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop"
                                alt="Booking"
                                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 p-12 flex flex-col justify-between text-white z-10">
                                <div>
                                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{t.hero.subtitle}</span>
                                    <h2 className="text-4xl font-heading font-bold">{t.nav.book}</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-accent"><i className="fa-solid fa-phone"></i></div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider opacity-70">{t.contact.title}</p>
                                            <p className="font-bold">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-accent"><i className="fa-solid fa-clock"></i></div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider opacity-70">Mon - Sat</p>
                                            <p className="font-bold">09:00 AM - 08:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="md:w-1/2 p-12 lg:p-16">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-text-light mb-2">{t.contact.form.name}</label>
                                    <input
                                        type="text"
                                        className="w-full border-b border-slate-200 py-3 bg-transparent text-primary outline-none focus:border-accent transition-colors text-lg"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-text-light mb-2">{t.contact.form.phone}</label>
                                        <input
                                            type="tel"
                                            className="w-full border-b border-slate-200 py-3 bg-transparent text-primary outline-none focus:border-accent transition-colors text-lg"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-text-light mb-2">Service</label>
                                        <select
                                            className="w-full border-b border-slate-200 py-3 bg-transparent text-primary outline-none focus:border-accent transition-colors text-lg appearance-none"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        >
                                            <option value="">Select...</option>
                                            <option value="Cosmetic">Cosmetic</option>
                                            <option value="Implants">Implants</option>
                                            <option value="Checkup">General Checkup</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-text-light mb-2">Date</label>
                                        <input
                                            type="date"
                                            className="w-full border-b border-slate-200 py-3 bg-transparent text-primary outline-none focus:border-accent transition-colors text-lg"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-text-light mb-2">Time</label>
                                        <select
                                            className="w-full border-b border-slate-200 py-3 bg-transparent text-primary outline-none focus:border-accent transition-colors text-lg appearance-none"
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                        >
                                            <option value="">Select...</option>
                                            <option value="morning">Morning</option>
                                            <option value="afternoon">Afternoon</option>
                                            <option value="evening">Evening</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary-light transition-all mt-8">
                                    {t.contact.form.submit}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
