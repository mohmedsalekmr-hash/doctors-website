import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Contact() {
    const { t, isRTL } = useLanguage();

    return (
        <Layout>
            <Head>
                <title>{t.nav.contact} | SmilePro</title>
            </Head>

            <div className="pt-32 pb-20 bg-surface">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">{t.contact.title}</h1>
                        <p className="text-xl text-text-light">{t.hero.desc}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Info Column */}
                        <div className="space-y-12">
                            <div className="border-l-2 border-accent pl-8 py-2">
                                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Location</h3>
                                <p className="text-text-light text-lg leading-relaxed">
                                    123 Dental Street, Wellness District<br />
                                    Luxury Tower, Floor 15<br />
                                    New York, NY 10001
                                </p>
                            </div>

                            <div className="border-l-2 border-accent pl-8 py-2">
                                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Contact</h3>
                                <p className="text-text-light text-lg leading-relaxed">
                                    <a href="tel:+15551234567" className="block hover:text-accent transition-colors">+1 (555) 123-4567</a>
                                    <a href="mailto:hello@smilepro.com" className="block hover:text-accent transition-colors">hello@smilepro.com</a>
                                    <a href="#" className="block hover:text-accent transition-colors">WhatsApp Support</a>
                                </p>
                            </div>

                            <div className="border-l-2 border-accent pl-8 py-2">
                                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Hours</h3>
                                <ul className="text-text-light text-lg space-y-2">
                                    <li className="flex justify-between max-w-xs border-b border-slate-100 pb-2"><span>Monday - Friday</span> <span>09:00 - 20:00</span></li>
                                    <li className="flex justify-between max-w-xs border-b border-slate-100 pb-2"><span>Saturday</span> <span>10:00 - 16:00</span></li>
                                    <li className="flex justify-between max-w-xs text-accent"><span>Sunday</span> <span>Closed</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Map Column */}
                        <div className="h-[500px] bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1570129477492-45f003f2ddfa?q=80&w=1000&auto=format&fit=crop"
                                alt="Map Location"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 shadow-2xl z-10">
                                <span className="font-bold text-primary tracking-widest uppercase text-xs">SmilePro Clinic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
