import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/AdminLayout';
import { storage } from '@/utils/storage';

export default function AdminDashboard() {
    const router = useRouter();
    const { tab = 'dashboard' } = router.query;
    const [appointments, setAppointments] = useState([]);
    const [stats, setStats] = useState({ today: 0, patients: 0, active: 0, revenue: 0 });
    const [cmsData, setCmsData] = useState(null);
    const [patients, setPatients] = useState([]);
    const [toast, setToast] = useState(null);
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        const data = storage.get('smilepro_bookings') || [];
        setAppointments(data);
        setCmsData(storage.getCMS());

        // Extract unique patients
        const patientList = [];
        const seen = new Set();
        data.forEach(a => {
            if (!seen.has(a.phone)) {
                seen.add(a.phone);
                patientList.push({ name: a.name, phone: a.phone, lastVisit: a.date, totalVisits: data.filter(v => v.phone === a.phone).length });
            }
        });
        setPatients(patientList);

        // Calculate Stats
        const todayStr = new Date().toISOString().split('T')[0];
        const todayCount = data.filter(a => a.date === todayStr).length;
        const totalPatientsCount = seen.size + 1242;
        const active = data.filter(a => a.status === 'Pending').length;
        const rev = data.reduce((sum, a) => sum + (Number(a.price) || 0), 0) + 48200;

        setStats({ today: todayCount, patients: totalPatientsCount, active, revenue: rev });
    }, [tab]);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    const updateStatus = (id, status) => {
        const updated = appointments.map(a => a.id === id ? { ...a, status } : a);
        setAppointments(updated);
        storage.set('smilepro_bookings', updated);
        showToast('Status Updated');
    };

    const deleteBooking = (id) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        const updated = appointments.filter(a => a.id !== id);
        setAppointments(updated);
        storage.set('smilepro_bookings', updated);
        showToast('Appointment Deleted');
    };

    const saveCMS = () => {
        storage.saveCMS(cmsData);
        setHasChanges(false);
        showToast('Website Content Saved Successfully');
    };

    const handleCMSChange = (section, field, value) => {
        setCmsData({
            ...cmsData,
            [section]: {
                ...cmsData[section],
                [field]: value
            }
        });
        setHasChanges(true);
    };

    if (!cmsData) return null;

    return (
        <AdminLayout activeTab={tab === 'dashboard' ? 'Dashboard' : tab}>
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-dark capitalize">{tab} Management</h1>
                    <p className="text-text-light">Manage your clinic's {tab} and preferences.</p>
                </div>

                <div className="flex items-center gap-4">
                    {hasChanges && (
                        <button
                            onClick={saveCMS}
                            className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-blue-500/20 animate-pulse hover:scale-105 transition-all"
                        >
                            Save Changes
                        </button>
                    )}
                    <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-sm border border-gray-100">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">I</div>
                        <div>
                            <div className="text-sm font-bold text-dark leading-none">Dr. Islam</div>
                            <div className="text-[10px] text-primary font-bold uppercase tracking-wider">Clinic Lead</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <div className="fixed top-10 right-10 bg-dark text-white px-6 py-4 rounded-2xl shadow-2xl z-[100] animate-slideInRight flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs">
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="font-bold">{toast}</span>
                </div>
            )}

            {tab === 'dashboard' && (
                <div className="animate-fadeIn">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {[
                            { label: "Today's Visits", val: stats.today, icon: 'fa-calendar-day', color: 'bg-blue-500' },
                            { label: "Total Patients", val: stats.patients.toLocaleString(), icon: 'fa-users', color: 'bg-green-500' },
                            { label: "Pending Bookings", val: stats.active, icon: 'fa-clock', color: 'bg-orange-500' },
                            { label: "Total Revenue", val: `$${stats.revenue.toLocaleString()}`, icon: 'fa-dollar-sign', color: 'bg-purple-500' },
                        ].map((s, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
                                <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}>
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-dark leading-none mb-1 font-outfit">{s.val}</h3>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                                <h3 className="font-bold text-dark font-outfit">Recent Activity</h3>
                                <button onClick={() => router.push('/admin-dashboard?tab=appointments')} className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-[#f8fafc] text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <tr>
                                            <th className="px-6 py-5">Patient</th>
                                            <th className="px-6 py-5">Service</th>
                                            <th className="px-6 py-5">Status</th>
                                            <th className="px-6 py-5">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {appointments.slice(-5).reverse().map((a) => (
                                            <tr key={a.id} className="hover:bg-gray-50/50 transition-all text-sm">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-blue-50 text-primary rounded-xl flex items-center justify-center text-[10px] font-bold">{a.name.charAt(0)}</div>
                                                        <span className="font-bold text-dark">{a.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 font-medium text-text-light">{a.service}</td>
                                                <td className="px-6 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${a.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                                                        }`}>
                                                        {a.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-dark font-bold whitespace-nowrap">{a.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-[#0f172a] rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold font-outfit mb-6">Quick Actions</h3>
                                <div className="space-y-4">
                                    <button onClick={() => router.push('/booking')} className="w-full p-4 bg-white/5 rounded-2xl flex items-center gap-4 hover:bg-primary transition-all group">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20"><i className="fa-solid fa-plus"></i></div>
                                        <span className="font-bold">Manual Booking</span>
                                    </button>
                                    <button onClick={() => router.push('/admin-dashboard?tab=cms')} className="w-full p-4 bg-white/5 rounded-2xl flex items-center gap-4 hover:bg-secondary transition-all group">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20"><i className="fa-solid fa-pen"></i></div>
                                        <span className="font-bold">Update Website</span>
                                    </button>
                                    <div className="pt-8 border-t border-white/5 mt-8">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-slate-400 text-sm">Working Capacity</span>
                                            <span className="text-secondary text-sm font-bold">85%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-secondary h-full w-[85%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'appointments' && (
                <div className="animate-fadeIn bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                        <h3 className="font-bold text-dark font-outfit">Full Appointment Log</h3>
                        <div className="flex gap-4">
                            <div className="relative">
                                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                                <input type="text" placeholder="Search bookings..." className="pl-12 pr-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm outline-none focus:border-primary w-64" />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#f8fafc] text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-5">Patient Details</th>
                                    <th className="px-8 py-5">Treatment</th>
                                    <th className="px-8 py-5">Schedule</th>
                                    <th className="px-8 py-5">Status</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {appointments.slice().reverse().map((a) => (
                                    <tr key={a.id} className="text-sm hover:bg-gray-50/30 transition-all">
                                        <td className="px-8 py-5">
                                            <div className="font-bold text-dark">{a.name}</div>
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{a.phone}</div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="px-3 py-1 bg-blue-50 text-primary rounded-lg text-xs font-bold">{a.service}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="font-bold text-dark">{a.date}</div>
                                            <div className="text-[10px] text-primary font-bold">{a.time}</div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <select
                                                value={a.status}
                                                onChange={(e) => updateStatus(a.id, e.target.value)}
                                                className="bg-gray-50 border-gray-200 border rounded-xl text-xs font-bold p-2 outline-none focus:border-primary"
                                            >
                                                <option>Pending</option>
                                                <option>Confirmed</option>
                                                <option>Completed</option>
                                                <option>Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <button onClick={() => deleteBooking(a.id)} className="w-10 h-10 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {appointments.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-20 text-center text-gray-400 italic">No appointments found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {tab === 'patients' && (
                <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {patients.map((p, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 text-white rounded-2xl flex items-center justify-center text-2xl font-bold font-outfit">
                                    {p.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark leading-tight">{p.name}</h4>
                                    <p className="text-primary text-sm font-bold">{p.phone}</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4 border-t border-gray-50">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Total Visits</span>
                                    <span className="font-bold text-dark">{p.totalVisits}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Last Visited</span>
                                    <span className="font-bold text-dark">{p.lastVisit}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {patients.length === 0 && (
                        <div className="col-span-full py-40 text-center opacity-50">
                            <i className="fa-solid fa-users text-6xl mb-6"></i>
                            <p className="text-xl font-bold">No patient records found.</p>
                        </div>
                    )}
                </div>
            )}

            {tab === 'cms' && (
                <div className="animate-fadeIn space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Hero Section */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-4">
                                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                                <h3 className="font-bold text-lg font-outfit text-dark">Hero & Branding</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Award Badge Text</label>
                                    <input value={cmsData.hero.badge} onChange={(e) => handleCMSChange('hero', 'badge', e.target.value)} type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary font-bold text-dark" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Main Headline</label>
                                    <input value={cmsData.hero.title} onChange={(e) => handleCMSChange('hero', 'title', e.target.value)} type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary font-bold text-dark" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Description</label>
                                    <textarea value={cmsData.hero.desc} onChange={(e) => handleCMSChange('hero', 'desc', e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary h-32 font-medium text-text-light" />
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-4">
                                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center"><i className="fa-solid fa-book-open"></i></div>
                                <h3 className="font-bold text-lg font-outfit text-dark">Brand Narrative</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">About Heading</label>
                                    <input value={cmsData.about.heading} onChange={(e) => handleCMSChange('about', 'heading', e.target.value)} type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary font-bold text-dark" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Intro Paragraph</label>
                                    <textarea value={cmsData.about.p1} onChange={(e) => handleCMSChange('about', 'p1', e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary h-24 font-medium text-text-light" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Vision Statement</label>
                                    <textarea value={cmsData.about.p2} onChange={(e) => handleCMSChange('about', 'p2', e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary h-24 font-medium text-text-light" />
                                </div>
                            </div>
                        </div>

                        {/* Counter Stats */}
                        <div className="bg-[#0f172a] p-8 rounded-3xl col-span-full shadow-xl">
                            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                                <div className="w-10 h-10 bg-white/5 text-secondary rounded-xl flex items-center justify-center"><i className="fa-solid fa-chart-line"></i></div>
                                <h3 className="font-bold text-lg font-outfit text-white">Counter Metrics</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Happy Patients</label>
                                    <input value={cmsData.stats.patients} onChange={(e) => handleCMSChange('stats', 'patients', e.target.value)} type="text" className="w-full p-4 bg-white/5 border border-white/10 text-white rounded-2xl outline-none focus:border-primary font-bold" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Expert Dentists</label>
                                    <input value={cmsData.stats.dentists} onChange={(e) => handleCMSChange('stats', 'dentists', e.target.value)} type="text" className="w-full p-4 bg-white/5 border border-white/10 text-white rounded-2xl outline-none focus:border-primary font-bold" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Years of Exp</label>
                                    <input value={cmsData.stats.experience} onChange={(e) => handleCMSChange('stats', 'experience', e.target.value)} type="text" className="w-full p-4 bg-white/5 border border-white/10 text-white rounded-2xl outline-none focus:border-primary font-bold" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'settings' && (
                <div className="animate-fadeIn max-w-4xl mx-auto space-y-8">
                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-primary/20"></div>

                        <h3 className="text-2xl font-bold text-dark font-outfit mb-2">Administrator Profile</h3>
                        <p className="text-text-light text-sm mb-10">Update your workspace identity and security credentials.</p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="col-span-2 flex items-center gap-8 mb-4">
                                <div className="w-24 h-24 bg-blue-50 rounded-3xl border-2 border-dashed border-primary/30 flex items-center justify-center text-primary text-3xl">
                                    <i className="fa-solid fa-camera"></i>
                                </div>
                                <div>
                                    <button className="px-6 py-2 bg-primary/5 text-primary rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all">Upload New Photo</button>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Recommended size: 500x500px</p>
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Full Display Name</label>
                                <input type="text" defaultValue="Dr. Islam" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary font-bold text-dark" />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Email Address</label>
                                <input type="email" defaultValue="admin@smilepro.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary font-bold text-dark" />
                            </div>
                            <div className="col-span-2 pt-4">
                                <button onClick={() => showToast('Profile Changes Saved')} className="px-10 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all">Update Account</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-dark font-outfit mb-8">Clinic Preferences</h3>

                        <div className="space-y-4">
                            {[
                                { label: 'Accept New Patients', desc: 'Allow visitors to book via the online portal', icon: 'fa-user-plus' },
                                { label: 'Email Notifications', desc: 'Send automatic booking confirmations to staff', icon: 'fa-envelope-open-text' },
                                { label: 'Maintenance Mode', desc: 'Temporarily disable the public landing page', icon: 'fa-screwdriver-wrench' },
                            ].map((pref, idx) => (
                                <div key={idx} className="flex items-center justify-between p-6 rounded-3xl border border-gray-50 hover:bg-gray-50/50 transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-primary"><i className={`fa-solid ${pref.icon}`}></i></div>
                                        <div>
                                            <div className="font-bold text-dark">{pref.label}</div>
                                            <div className="text-xs text-text-light">{pref.desc}</div>
                                        </div>
                                    </div>
                                    <div className="w-14 h-8 bg-blue-100 rounded-full p-1 cursor-pointer">
                                        <div className="w-6 h-6 bg-primary rounded-full ml-auto shadow-md"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
