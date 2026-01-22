import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { storage } from '@/utils/storage';
import Link from 'next/link';

export default function Booking() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});

    const services = [
        { id: 'Checkup', name: 'General Checkup', desc: '30 min • $50', icon: 'fa-notes-medical' },
        { id: 'Whitening', name: 'Teeth Whitening', desc: '60 min • $200', icon: 'fa-wand-magic-sparkles' },
        { id: 'Cleaning', name: 'Deep Cleaning', desc: '45 min • $80', icon: 'fa-tooth' },
    ];

    const timeSlots = {
        morning: ['09:00 AM', '10:00 AM', '11:30 AM'],
        afternoon: ['01:00 PM', '02:30 PM', '04:00 PM'],
    };

    const handleNext = () => {
        if (step === 1 && !formData.service) return;
        if (step === 2 && (!formData.date || !formData.time)) return;
        setStep(step + 1);
    };

    const handlePrev = () => setStep(step - 1);

    const validate = () => {
        const newErrors = {};
        if (formData.name.trim().length < 3) newErrors.name = 'Name is too short';
        if (!/^\d{8}$/.test(formData.phone)) newErrors.phone = 'Phone must be 8 digits';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        const booking = {
            ...formData,
            id: Date.now().toString(),
            status: 'Pending',
            price: { 'Checkup': 50, 'Whitening': 200, 'Cleaning': 80 }[formData.service] || 50
        };

        setTimeout(() => {
            const bookings = storage.get('smilepro_bookings') || [];
            bookings.push(booking);
            storage.set('smilepro_bookings', bookings);
            setLoading(false);
            setStep(4);
        }, 1500);
    };

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-fadeIn">
                        {/* Steps Indicator */}
                        <div className="bg-dark p-8 md:p-12 text-center">
                            <h1 className="text-3xl font-bold text-white mb-4">Book Your Appointment</h1>
                            <div className="flex justify-center gap-4 md:gap-12 mt-8">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className="flex flex-col items-center gap-2">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-700 text-gray-400'
                                            }`}>
                                            {s}
                                        </div>
                                        <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s ? 'text-primary' : 'text-gray-500'
                                            }`}>
                                            {s === 1 ? 'Service' : s === 2 ? 'Time' : 'Details'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {/* Step 1: Service */}
                            {step === 1 && (
                                <div className="animate-fadeIn">
                                    <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                                        <div className="w-2 h-8 bg-primary rounded-full"></div>
                                        Choose a Service
                                    </h3>
                                    <div className="grid gap-4">
                                        {services.map((s) => (
                                            <button
                                                key={s.id}
                                                onClick={() => setFormData({ ...formData, service: s.id })}
                                                className={`flex items-center gap-6 p-6 rounded-2xl border-2 transition-all text-left group ${formData.service === s.id
                                                        ? 'border-primary bg-blue-50/50'
                                                        : 'border-gray-100 hover:border-blue-200'
                                                    }`}
                                            >
                                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-all ${formData.service === s.id ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-blue-100'
                                                    }`}>
                                                    <i className={`fa-solid ${s.icon}`}></i>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="font-bold text-dark text-lg">{s.name}</div>
                                                    <div className="text-sm text-text-light">{s.desc}</div>
                                                </div>
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.service === s.id ? 'border-primary bg-primary text-white' : 'border-gray-200'
                                                    }`}>
                                                    {formData.service === s.id && <i className="fa-solid fa-check text-[10px]"></i>}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex justify-end">
                                        <button
                                            onClick={handleNext}
                                            disabled={!formData.service}
                                            className="bg-primary text-white px-10 py-4 rounded-mdd font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 flex items-center gap-3"
                                        >
                                            Next Step <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Time */}
                            {step === 2 && (
                                <div className="animate-fadeIn">
                                    <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                                        <div className="w-2 h-8 bg-primary rounded-full"></div>
                                        Select Date & Time
                                    </h3>

                                    <div className="mb-10">
                                        <label className="block text-sm font-bold text-text-light uppercase tracking-widest mb-3">Pick a Date</label>
                                        <input
                                            type="date"
                                            min={new Date().toISOString().split('T')[0]}
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary focus:bg-white transition-all outline-none font-medium"
                                        />
                                    </div>

                                    <div className="space-y-8">
                                        {Object.entries(timeSlots).map(([label, slots]) => (
                                            <div key={label}>
                                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{label}</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {slots.map((slot) => (
                                                        <button
                                                            key={slot}
                                                            onClick={() => setFormData({ ...formData, time: slot })}
                                                            className={`p-4 rounded-xl font-bold transition-all border-2 ${formData.time === slot
                                                                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                                                                    : 'bg-white border-gray-100 text-dark hover:border-blue-100 hover:bg-blue-50/30'
                                                                }`}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 flex justify-between">
                                        <button onClick={handlePrev} className="text-dark font-bold px-8 py-4 border-2 border-gray-100 rounded-mdd hover:bg-gray-50">Back</button>
                                        <button
                                            onClick={handleNext}
                                            disabled={!formData.date || !formData.time}
                                            className="bg-primary text-white px-10 py-4 rounded-mdd font-bold disabled:opacity-50 hover:bg-blue-600 transition-all"
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Details */}
                            {step === 3 && (
                                <form onSubmit={handleSubmit} className="animate-fadeIn">
                                    <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                                        <div className="w-2 h-8 bg-primary rounded-full"></div>
                                        Your Information
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-text-light uppercase tracking-widest mb-3">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Johnny Smile"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full p-4 bg-gray-50 border-2 rounded-xl outline-none transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-100 focus:border-primary focus:bg-white'
                                                    }`}
                                                required
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-2 font-bold uppercase tracking-wider">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-text-light uppercase tracking-widest mb-3">Phone Number</label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    placeholder="01234567"
                                                    maxLength="8"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                                                    className={`w-full p-4 bg-gray-50 border-2 rounded-xl outline-none transition-all ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-100 focus:border-primary focus:bg-white'
                                                        }`}
                                                    required
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-xs mt-2 font-bold uppercase tracking-wider">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div className="mt-12 flex flex-col md:flex-row gap-4">
                                        <button type="button" onClick={handlePrev} className="text-dark font-bold px-8 py-4 border-2 border-gray-100 rounded-mdd hover:bg-gray-50 order-2 md:order-1">Back</button>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex-grow bg-primary text-white px-10 py-4 rounded-mdd font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-200 order-1 md:order-2 flex items-center justify-center gap-3"
                                        >
                                            {loading ? <><i className="fa-solid fa-spinner fa-spin"></i> Confirming...</> : 'Confirm Booking'}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Step 4: Success */}
                            {step === 4 && (
                                <div className="text-center py-12 animate-fadeIn">
                                    <div className="w-24 h-24 bg-green-100 text-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h2 className="text-4xl font-bold text-dark mb-4">Booking Confirmed!</h2>
                                    <p className="text-lg text-text-light mb-12 max-w-sm mx-auto">
                                        We look forward to seeing you on <span className="text-primary font-bold">{formData.date}</span> at <span className="text-primary font-bold">{formData.time}</span>.
                                    </p>
                                    <Link href="/" className="inline-block bg-primary text-white px-12 py-4 rounded-mdd font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                                        Return Home
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
