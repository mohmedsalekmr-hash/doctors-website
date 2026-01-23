import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { storage } from '@/utils/storage';

export default function AdminLayout({ children, activeTab }) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!storage.get('smilepro_session')) {
            router.push('/login');
        }
    }, []);

    if (!mounted) return null;

    const menuItems = [
        { label: 'Dashboard', icon: 'fa-chart-pie', path: '/admin-dashboard' },
        { label: 'Appointments', icon: 'fa-calendar-check', path: '/admin-dashboard?tab=appointments' },
        { label: 'Patients', icon: 'fa-users', path: '/admin-dashboard?tab=patients' },
        { label: 'Website CMS', icon: 'fa-pen-to-square', path: '/admin-dashboard?tab=cms' },
        { label: 'Settings', icon: 'fa-gear', path: '/admin-dashboard?tab=settings' },
    ];

    return (
        <div className="flex min-h-screen bg-surface-light">
            {/* Sidebar */}
            <aside className="w-80 bg-primary text-white flex flex-col fixed inset-y-0 z-50">
                {/* Logo Area */}
                <div className="p-10 mb-6">
                    <div className="flex items-center gap-3 text-2xl font-bold font-heading">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                            <i className="fa-solid fa-tooth text-xl"></i>
                        </div>
                        SmilePro
                    </div>
                </div>

                <nav className="flex-grow px-6">
                    <ul className="space-y-3">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm tracking-wide ${activeTab?.toLowerCase() === item.label.toLowerCase() ||
                                            (activeTab?.toLowerCase() === 'dashboard' && item.label === 'Dashboard')
                                            ? 'bg-white/10 text-white shadow-lg border border-white/10'
                                            : 'text-white/50 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <i className={`fa-solid ${item.icon} w-6 text-center text-lg`}></i>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-8 mt-auto">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-400 overflow-hidden border-2 border-white/20">
                                <img src="/images/doctor.png" alt="Doctor" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Dr. Islam</p>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={() => { storage.remove('smilepro_session'); router.push('/login'); }}
                            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white/5 text-white/60 hover:bg-red-500/20 hover:text-red-300 transition-all font-bold text-xs uppercase tracking-widest"
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-80 p-12">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

