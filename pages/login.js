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

        setTimeout(() => {
            storage.set('smilepro_session', { user: 'Admin', role: 'root', ts: Date.now() });
            router.push('/admin-dashboard');
        }, 1500);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-surface-cream overflow-hidden">
            <Head>
                <title>Professional Access | SmilePro International</title>
            </Head>

            {/* Elite Branding Side */}
            <div className="hidden lg:flex flex-1 bg-primary relative p-24 flex-col justify-between overflow-hidden">
                {/* Atmospheric Luxury Assets */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-luxury-gold/5 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-luxury-blue/5 rounded-full blur-[120px]"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C5A572 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-5 text-white text-3xl font-bold font-heading mb-24 cursor-pointer group">
                        <div className="relative">
                            <div className="w-14 h-14 bg-white/5 border border-white/20 rounded-2xl flex-center group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-700">
                                <i className="fa-solid fa-tooth text-luxury-gold group-hover:text-primary text-2xl"></i>
                            </div>
                            <div className="absolute inset-[-4px] border border-luxury-gold/20 rounded-2xl animate-pulse"></div>
                        </div>
                        <span className="tracking-tighter">Smile<span className="font-serif italic font-normal text-luxury-gold ml-1">Pro</span></span>
                    </div>

                    <div className="max-w-xl">
                        <h1 className="text-6xl lg:text-7xl font-bold text-white font-heading leading-[1.1] mb-10 translate-y-0 animate-fade-in-up">
                            Gateway to <br />
                            <span className="font-serif italic font-normal text-luxury-gold text-gradient-gold">Clinical Excellence.</span>
                        </h1>
                        <p className="text-xl text-white/50 leading-relaxed font-medium animate-fade-in-up delay-200">
                            Secure access to our centralized medical management system. Reserved for registered healthcare professionals and administrative specialists.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 flex items-center gap-6 animate-fade-in delay-500">
                    <div className="h-px w-12 bg-luxury-gold/30"></div>
                    <p className="text-[0.7rem] text-white/40 font-bold uppercase tracking-[0.4em]">Esthetic Dental Studio Management</p>
                </div>
            </div>

            {/* Interaction Terminal */}
            <div className="flex-center p-8 lg:p-24 bg-white relative">
                {/* Decorative Elements for Mobile */}
                <div className="absolute top-0 right-0 p-8 lg:hidden">
                    <i className="fa-solid fa-tooth text-luxury-gold text-3xl"></i>
                </div>

                <div className="w-full max-w-sm animate-fade-in-up">
                    <div className="mb-16 text-center lg:text-left">
                        <span className="text-[0.6rem] font-bold text-luxury-gold uppercase tracking-[0.4em] mb-4 block">Security Authentication</span>
                        <h2 className="text-4xl font-bold text-primary font-heading mb-4">Professional Access</h2>
                        <div className="w-12 h-1 bg-luxury-gold mb-6 mx-auto lg:mx-0"></div>
                        <p className="text-luxury-slate font-medium leading-relaxed">Enter your private credentials to access the administrative studio.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-12">
                        <div className="group relative">
                            <label className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-luxury-slate group-focus-within:text-luxury-gold transition-colors block mb-1">
                                Clinical Identity
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-transparent border-b border-luxury-slate/20 py-5 outline-none focus:border-luxury-gold transition-all text-xl font-bold text-primary placeholder:text-slate-200"
                                    placeholder="Enter practitioner email"
                                    required
                                />
                                <div className="absolute right-0 bottom-6 text-luxury-gold/30 group-focus-within:text-luxury-gold transition-colors">
                                    <i className="fa-solid fa-id-badge text-sm"></i>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex justify-between items-end mb-1">
                                <label className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-luxury-slate group-focus-within:text-luxury-gold transition-colors">
                                    Private Key
                                </label>
                                <button type="button" className="text-[0.6rem] font-bold text-luxury-gold hover:text-primary transition-colors uppercase tracking-[0.2em] pb-1">
                                    Forgot Key?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full bg-transparent border-b border-luxury-slate/20 py-5 outline-none focus:border-luxury-gold transition-all text-xl font-bold text-primary placeholder:text-slate-200"
                                    placeholder="••••••••"
                                    required
                                />
                                <div className="absolute right-0 bottom-6 text-luxury-gold/30 group-focus-within:text-luxury-gold transition-colors">
                                    <i className="fa-solid fa-fingerprint text-sm"></i>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-premium py-6 bg-primary text-white rounded-2xl text-[0.85rem] font-bold uppercase tracking-[0.3em] shadow-luxury hover:bg-luxury-charcoal flex-center gap-4 group disabled:opacity-70"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-luxury-gold">Verifying Mastery...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Establish Session</span>
                                        <i className="fa-solid fa-arrow-right text-luxury-gold group-hover:translate-x-1 transition-transform"></i>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-20 pt-10 border-t border-luxury-gold/10 text-center">
                        <div className="flex flex-center gap-8 opacity-20 grayscale mb-6">
                            <i className="fa-solid fa-shield-virus text-2xl"></i>
                            <i className="fa-solid fa-microchip text-2xl"></i>
                            <i className="fa-solid fa-key text-2xl"></i>
                        </div>
                        <p className="text-[0.6rem] font-bold text-luxury-slate tracking-[0.4em] uppercase">AES-256 Encrypted Connection</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


