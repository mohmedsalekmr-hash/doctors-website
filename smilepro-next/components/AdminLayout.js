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
    ];

    return (
        <div className="flex min-h-screen bg-[#f1f5f9]">
            {/* Sidebar */}
            <aside className="w-72 bg-[#0f172a] text-white flex flex-col fixed inset-y-0 z-50">
                <div className="p-8 border-b border-white/5 flex items-center gap-3">
                    <i className="fa-solid fa-tooth text-primary text-2xl"></i>
                    <span className="text-2xl font-bold font-outfit">Smile<span className="text-secondary">Pro</span> Admin</span>
                </div>

                <nav className="flex-grow py-8 px-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-medium ${activeTab === item.label.toLowerCase() || (activeTab === 'dashboard' && item.label === 'Dashboard')
                                            ? 'bg-primary text-white shadow-lg shadow-blue-500/20'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <i className={`fa-solid ${item.icon} w-6 text-center`}></i>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-6 border-t border-white/5">
                    <button
                        onClick={() => { storage.remove('smilepro_session'); router.push('/login'); }}
                        className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all font-medium"
                    >
                        <i className="fa-solid fa-right-from-bracket w-6 text-center"></i>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-72 p-10">
                {children}
            </main>
        </div>
    );
}
