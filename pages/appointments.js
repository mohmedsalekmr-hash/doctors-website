import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { storage } from '@/utils/storage';

export default function Appointments() {
    const { t, isRTL } = useLanguage();
    const [appointments, setAppointments] = useState([]);
    const [searchPhone, setSearchPhone] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [editing, setEditing] = useState(null);
    const [cancelling, setCancelling] = useState(null);

    useEffect(() => {
        const data = storage.get('smilepro_bookings') || [];
        setAppointments(data);
        setFiltered([]); // Start empty to encourage search
    }, []);

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearchPhone(val);
        if (!val) {
            setFiltered([]);
        } else {
            setFiltered(appointments.filter(a => a.phone.includes(val)));
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updated = appointments.map(a => a.id === editing.id ? editing : a);
        setAppointments(updated);
        setFiltered(updated.filter(a => searchPhone ? a.phone.includes(searchPhone) : true));
        storage.set('smilepro_bookings', updated);
        setEditing(null);
    };

    const handleCancel = () => {
        const updated = appointments.map(a => a.id === cancelling.id ? { ...a, status: 'Cancelled' } : a);
        setAppointments(updated);
        setFiltered(updated.filter(a => searchPhone ? a.phone.includes(searchPhone) : true));
        storage.set('smilepro_bookings', updated);
        setCancelling(null);
    };

    return (
        <Layout>
            <Head>
                <title>{t.appointments.title} | SmilePro</title>
            </Head>

            <div className="min-h-screen bg-surface-light pt-32 pb-20 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-secondary/30 rounded-full blur-[100px]"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16 lg:mb-20">
                        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
                            {t.appointments.title}
                        </h1>
                        <p className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
                            {t.appointments.subtitle}
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-premium border border-slate-100 relative group transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/10">
                            <label className="block text-xs font-bold text-text-light mb-4 uppercase tracking-widest text-center group-focus-within:text-primary transition-colors">
                                {t.appointments.find_label}
                            </label>
                            <div className="relative">
                                <i className="fa-solid fa-phone absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-slate-300 group-focus-within:text-primary transition-colors"></i>
                                <input
                                    type="tel"
                                    placeholder={t.appointments.phone_placeholder}
                                    value={searchPhone}
                                    onChange={handleSearch}
                                    className="w-full p-6 pl-16 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none transition-all text-center text-2xl lg:text-3xl font-bold tracking-widest text-primary focus:bg-white focus:border-primary/20"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.length > 0 ? filtered.map((a) => (
                            <div key={a.id} className={`bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-100 shadow-premium hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${a.status === 'Cancelled' ? 'opacity-75 grayscale-[0.5]' : ''}`}>
                                {a.status !== 'Cancelled' && (
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20"></div>
                                )}

                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center text-2xl">
                                            <i className="fa-solid fa-tooth"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-text-dark text-lg leading-tight">{a.service}</h3>
                                            <span className="text-[10px] text-text-light font-bold uppercase tracking-widest">{t.appointments.id_label}: #{a.id.slice(-6)}</span>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full ${a.status === 'Cancelled' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}`}>
                                        {a.status}
                                    </span>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 text-text-base">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary/60">
                                            <i className="fa-regular fa-calendar-days"></i>
                                        </div>
                                        <span className="font-bold">{a.date}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-text-base">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary/60">
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        <span className="font-bold">{a.time}</span>
                                    </div>
                                </div>

                                {a.status !== 'Cancelled' && (
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setEditing(a)}
                                            className="flex-1 py-4 bg-slate-50 text-text-dark font-bold rounded-2xl text-xs hover:bg-primary hover:text-white transition-all duration-300 border border-slate-100"
                                        >
                                            <i className="fa-solid fa-calendar-pen mr-2"></i> {t.appointments.adjust_btn}
                                        </button>
                                        <button
                                            onClick={() => setCancelling(a)}
                                            className="px-6 py-4 bg-red-50 text-red-500 font-bold rounded-2xl text-xs hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100"
                                            title={t.appointments.cancel_btn}
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )) : searchPhone && (
                            <div className="col-span-full py-24 text-center animate-fade-in">
                                <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-slate-300 text-4xl border border-slate-100">
                                    <i className="fa-regular fa-calendar-xmark"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-text-dark mb-3">{t.appointments.no_results}</h3>
                                <p className="text-text-light max-w-sm mx-auto">{t.appointments.no_results_sub}</p>
                            </div>
                        )}
                        {!searchPhone && (
                            <div className="col-span-full py-24 text-center opacity-40">
                                <i className="fa-solid fa-magnifying-glass text-6xl mb-6"></i>
                                <p className="text-xl font-medium tracking-wide font-heading">{isRTL ? 'انتظار رقم الهاتف...' : 'Awaiting Phone Search...'}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {editing && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-text-dark/80 backdrop-blur-md animate-fade-in">
                    <div className="bg-white w-full max-w-lg rounded-[3rem] p-10 lg:p-14 shadow-2xl relative border border-white/20">
                        <button onClick={() => setEditing(null)} className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-text-dark transition-colors">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="mb-10 text-center">
                            <div className="w-20 h-20 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center text-3xl mx-auto mb-6">
                                <i className="fa-solid fa-calendar-check"></i>
                            </div>
                            <h3 className="text-3xl font-bold text-text-dark font-heading">{t.appointments.modal_edit_title}</h3>
                        </div>

                        <form onSubmit={handleUpdate} className="space-y-8">
                            <div className="space-y-6">
                                <div className="group relative">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary block mb-3">{t.appointments.modal_name}</label>
                                    <input
                                        className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-text-dark"
                                        value={editing.name}
                                        onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                                        disabled
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="group relative">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary block mb-3">{t.appointments.modal_date}</label>
                                        <input
                                            type="date"
                                            className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-text-dark"
                                            value={editing.date}
                                            onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="group relative">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary block mb-3">{t.appointments.modal_time}</label>
                                        <select
                                            className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-text-dark appearance-none"
                                            value={editing.time}
                                            onChange={(e) => setEditing({ ...editing, time: e.target.value })}
                                        >
                                            <option>09:00 AM</option>
                                            <option>10:00 AM</option>
                                            <option>11:30 AM</option>
                                            <option>01:00 PM</option>
                                            <option>02:30 PM</option>
                                            <option>04:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <button type="submit" className="flex-1 btn-premium py-5 bg-primary text-white font-bold rounded-2xl shadow-premium">
                                    {t.appointments.modal_save}
                                </button>
                                <button type="button" onClick={() => setEditing(null)} className="flex-1 py-5 font-bold text-text-light hover:text-text-dark transition-colors">
                                    {isRTL ? 'إلغاء' : 'Cancel'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Cancel Confirmation Modal */}
            {cancelling && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-text-dark/80 backdrop-blur-md animate-fade-in">
                    <div className="bg-white w-full max-w-md rounded-[3rem] p-10 lg:p-14 text-center shadow-2xl relative">
                        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-8 shadow-sm border border-red-100">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <h3 className="text-3xl font-bold text-text-dark mb-4 font-heading">{t.appointments.modal_cancel_title}</h3>
                        <p className="text-text-light mb-10 leading-relaxed font-medium">{t.appointments.modal_cancel_msg}</p>
                        <div className="flex flex-col gap-4">
                            <button onClick={handleCancel} className="w-full py-5 bg-red-500 text-white font-bold rounded-2xl shadow-lg shadow-red-200 hover:bg-red-600 transition-all">
                                {t.appointments.modal_confirm_cancel}
                            </button>
                            <button onClick={() => setCancelling(null)} className="w-full py-5 text-text-light font-bold hover:text-text-dark transition-colors">
                                {t.appointments.modal_keep}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}

