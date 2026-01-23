import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { storage } from '@/utils/storage';
import Head from 'next/head';

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
        <div className="flex flex-col lg:flex-row min-h-screen bg-surface-light">
            <Head>
                <title>Staff Login | SmilePro Dashboard</title>
            </Head>

            {/* Left Column: Branding & Experience */}
            <div className="flex-1 bg-primary relative p-12 lg:p-24 flex flex-col justify-between overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/40 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 text-white text-3xl font-bold font-heading mb-16">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                            <i className="fa-solid fa-tooth text-2xl"></i>
                        </div>
                        SmilePro
                    </div>

                    <div className="max-w-md">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-8">
                            Empowering Your <span className="text-blue-300">Dental Practice.</span>
                        </h1>
                        <p className="text-lg text-white/70 leading-relaxed font-medium">
                            Manage patient records, appointments, and clinic analytics in one secure, world-class platform.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 flex items-center gap-6">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200 overflow-hidden shadow-lg">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-white/60 font-medium">Joined by 50+ dental professionals</p>
                </div>
            </div>

            {/* Right Column: Interaction */}
            <div className="lg:w-[600px] bg-white flex items-center justify-center p-8 lg:p-24">
                <div className="w-full max-w-sm">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-text-dark font-heading mb-4">Staff Portal</h2>
                        <p className="text-text-light font-medium">Enter your credentials to access the administrative dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-10">
                        <div className="group relative">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary transition-colors block mb-4">
                                Professional Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-primary transition-all text-lg font-medium placeholder:text-slate-300"
                                    placeholder="name@smilepro.com"
                                    required
                                />
                                <div className="absolute right-0 bottom-4 text-slate-300 group-focus-within:text-primary transition-colors">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex justify-between mb-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-text-light group-focus-within:text-primary transition-colors">
                                    Security Password
                                </label>
                                <button type="button" className="text-xs font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest">
                                    Reset
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-primary transition-all text-lg font-medium placeholder:text-slate-300"
                                    placeholder="••••••••"
                                    required
                                />
                                <div className="absolute right-0 bottom-4 text-slate-300 group-focus-within:text-primary transition-colors">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-premium py-6 bg-primary text-white rounded-[2rem] text-lg font-bold shadow-premium hover:bg-primary-dark flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {loading ? (
                                    <>
                                        <i className="fa-solid fa-spinner fa-spin"></i>
                                        <span>Authenticating...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Secure Login</span>
                                        <i className="fa-solid fa-shield-halved text-white/50"></i>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-16 text-center">
                        <p className="text-xs text-text-light font-medium uppercase tracking-widest mb-6">Security Assurance</p>
                        <div className="flex items-center justify-center gap-6 opacity-30">
                            <i className="fa-solid fa-shield-check text-2xl"></i>
                            <i className="fa-solid fa-fingerprint text-2xl"></i>
                            <i className="fa-solid fa-key text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

