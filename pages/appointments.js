import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { storage } from '@/utils/storage';

export default function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const [searchPhone, setSearchPhone] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [editing, setEditing] = useState(null);
    const [cancelling, setCancelling] = useState(null);

    useEffect(() => {
        const data = storage.get('smilepro_bookings') || [];
        setAppointments(data);
        setFiltered(data);
    }, []);

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearchPhone(val);
        if (!val) {
            setFiltered(appointments);
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
            <div className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-dark mb-4">My Appointments</h1>
                        <p className="text-text-light text-lg">View, manage, or reschedule your upcoming visits with ease.</p>
                    </div>

                    <div className="max-w-xl mx-auto mb-12">
                        <div className="bg-white p-6 rounded-lgg shadow-sm border border-gray-100">
                            <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest text-center">Find Your Booking</label>
                            <div className="relative">
                                <i className="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-primary"></i>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number..."
                                    value={searchPhone}
                                    onChange={handleSearch}
                                    className="w-full p-4 pl-12 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary outline-none transition-all text-center text-xl font-bold tracking-widest"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.length > 0 ? filtered.map((a) => (
                            <div key={a.id} className={`bg-white rounded-lgg p-6 border-l-8 shadow-sm hover:shadow-md transition-all ${a.status === 'Cancelled' ? 'border-red-400 opacity-75' : 'border-primary'
                                }`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center text-xl">
                                            <i className={`fa-solid ${a.service.includes('Whitening') ? 'fa-wand-magic-sparkles' : 'fa-tooth'}`}></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-dark">{a.service}</h3>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">ID: #{a.id.slice(-6)}</span>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${a.status === 'Cancelled' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'
                                        }`}>
                                        {a.status}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-text-light">
                                        <i className="fa-regular fa-calendar-days text-primary w-4"></i>
                                        <span className="font-semibold text-dark">{a.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-text-light">
                                        <i className="fa-regular fa-clock text-primary w-4"></i>
                                        <span className="font-semibold text-dark">{a.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-text-light">
                                        <i className="fa-regular fa-user text-primary w-4"></i>
                                        <span>{a.name}</span>
                                    </div>
                                </div>

                                {a.status !== 'Cancelled' && (
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setEditing(a)}
                                            className="flex-1 py-3 bg-gray-50 text-dark font-bold rounded-xl text-xs hover:bg-gray-100 transition-all border border-gray-100"
                                        >
                                            <i className="fa-solid fa-pen-to-square mr-2"></i> Adjust
                                        </button>
                                        <button
                                            onClick={() => setCancelling(a)}
                                            className="flex-1 py-3 bg-red-50 text-red-500 font-bold rounded-xl text-xs hover:bg-red-100 transition-all border border-red-100"
                                        >
                                            <i className="fa-solid fa-ban mr-2"></i> Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                        )) : (
                            <div className="col-span-full py-20 text-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400 text-3xl">
                                    <i className="fa-regular fa-calendar-xmark"></i>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2">No appointments found</h3>
                                <p className="text-text-light">Try searching with a different phone number or book a new session.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {editing && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark/60 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white w-full max-w-lg rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
                        <button onClick={() => setEditing(null)} className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-dark">
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold text-dark mb-8">Edit Appointment</h3>
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Full Name</label>
                                    <input
                                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl outline-none"
                                        value={editing.name}
                                        onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Date</label>
                                    <input
                                        type="date"
                                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl outline-none"
                                        value={editing.date}
                                        onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Time</label>
                                    <select
                                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl outline-none"
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
                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => setEditing(null)} className="flex-1 py-4 font-bold border-2 border-gray-100 rounded-xl">Cancel</button>
                                <button type="submit" className="flex-1 py-4 bg-primary text-white font-bold rounded-xl">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Cancel Confirmation Modal */}
            {cancelling && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark/60 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white w-full max-w-md rounded-[2rem] p-8 md:p-12 text-center shadow-2xl">
                        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-dark mb-4">Cancel Appointment?</h3>
                        <p className="text-text-light mb-8 italic">Are you sure you want to cancel this booking? This action cannot be undone.</p>
                        <div className="flex gap-4">
                            <button onClick={() => setCancelling(null)} className="flex-1 py-4 font-bold border-2 border-gray-100 rounded-xl">No, Keep It</button>
                            <button onClick={handleCancel} className="flex-1 py-4 bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-200">Yes, Cancel It</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
