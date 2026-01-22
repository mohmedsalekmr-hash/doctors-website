import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { storage } from '@/utils/storage';

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: 'admin@smilepro.com',
        password: 'password',
    });

    useEffect(() => {
        if (storage.get('smilepro_session')) {
            router.push('/admin-dashboard');
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API Call
        setTimeout(() => {
            storage.set('smilepro_session', { user: 'Admin', role: 'root', ts: Date.now() });
            router.push('/admin-dashboard');
        }, 1200);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
            {/* Left Branding Area */}
            <div className="flex-1 bg-gradient-to-br from-primary to-blue-400 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 text-center animate-fadeIn">
                    <div className="text-5xl md:text-6xl font-bold font-outfit mb-6 flex items-center justify-center gap-4">
                        <i className="fa-solid fa-tooth"></i> SmilePro
                    </div>
                    <p className="text-xl opacity-90 max-w-md mx-auto leading-relaxed">
                        Manage your clinic efficiently with our premium dashboard. Secure, fast, and reliable.
                    </p>
                </div>
            </div>

            {/* Right Login Area */}
            <div className="lg:w-[500px] flex items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-md animate-fadeIn">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-dark mb-3">Welcome Back</h2>
                        <p className="text-text-light">Please sign in to access your dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-wider">Email Address</label>
                            <div className="relative group">
                                <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"></i>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-dark md:text-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-dark uppercase tracking-wider">Password</label>
                                <button type="button" className="text-sm font-bold text-primary hover:underline">Forgot?</button>
                            </div>
                            <div className="relative group">
                                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"></i>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full p-4 pl-12 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-dark md:text-lg"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white p-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {loading ? <><i className="fa-solid fa-spinner fa-spin"></i> Signing In...</> : <>Sign In <i className="fa-solid fa-arrow-right"></i></>}
                        </button>
                    </form>

                    <div className="mt-12 text-center text-sm text-text-light">
                        <p>New to SmilePro? Contact system administrator.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
