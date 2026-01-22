import Head from 'next/head';
import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';
import { storage } from '@/utils/storage';

export default function Contact() {
    const [cms, setCms] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setCms(storage.getCMS());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = cms?.contact || {
        phone: "+1 (555) 123-4567",
        email: "hello@smilepro.com",
        address: "123 Dental Street, Wellness City"
    };

    return (
        <Layout>
            <Head>
                <title>Contact Us - SmilePro Dental Clinic</title>
                <meta name="description" content="Get in touch with SmilePro Dental Clinic. We are here to help you with your dental health needs." />
            </Head>

            <div className="pt-32 pb-20 bg-white min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 animate-fadeIn">
                            <div className="inline-block px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
                                Get In Touch
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold font-outfit text-dark mb-6">How Can We Help?</h1>
                            <p className="text-xl text-text-light max-w-2xl mx-auto">
                                Have questions or need to schedule a consultation? Reach out to our friendly team today.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Sidebar */}
                            <div className="lg:col-span-1 space-y-8 animate-slideInLeft">
                                <div className="bg-gray-50 p-8 rounded-[40px] space-y-8 border border-gray-100">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-xl shrink-0">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark text-lg mb-1 italic">Call Us Directly</h4>
                                            <p className="text-text-light font-medium">{contactInfo.phone}</p>
                                            <p className="text-xs text-primary font-bold mt-2">Mon-Fri: 9am - 6pm</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center text-xl shrink-0">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark text-lg mb-1 italic">Email Support</h4>
                                            <p className="text-text-light font-medium">{contactInfo.email}</p>
                                            <p className="text-xs text-secondary font-bold mt-2">24h Response Time</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 bg-dark text-white rounded-2xl flex items-center justify-center text-xl shrink-0">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark text-lg mb-1 italic">Visit Our Clinic</h4>
                                            <p className="text-text-light font-medium">{contactInfo.address}</p>
                                            <p className="text-xs text-gray-400 font-bold mt-2 underline cursor-pointer hover:text-primary transition-colors">Open in Maps</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="bg-[#0f172a] p-8 rounded-[40px] text-white overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-0"></div>
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold font-outfit mb-6">Clinic Hours</h4>
                                        <ul className="space-y-4 text-sm font-medium">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-slate-400">Monday - Thursday</span>
                                                <span>09:00 AM - 08:00 PM</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-slate-400">Friday</span>
                                                <span>09:00 AM - 04:00 PM</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-slate-400">Saturday</span>
                                                <span>10:00 AM - 02:00 PM</span>
                                            </li>
                                            <li className="flex justify-between text-secondary">
                                                <span className="text-slate-400">Sunday</span>
                                                <span className="font-bold uppercase tracking-widest text-[10px]">Closed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2 animate-slideInRight">
                                <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-xl shadow-blue-500/5">
                                    {submitted ? (
                                        <div className="text-center py-20 animate-fadeIn">
                                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                                                <i className="fa-solid fa-paper-plane"></i>
                                            </div>
                                            <h3 className="text-3xl font-bold text-dark mb-4">Message Sent!</h3>
                                            <p className="text-text-light max-w-sm mx-auto">Thank you for reaching out. A member of our team will contact you shortly.</p>
                                            <button onClick={() => setSubmitted(false)} className="mt-8 text-primary font-bold uppercase tracking-widest text-xs hover:underline">Send Another Message</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Your Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full p-4 bg-gray-50 border-2 border-gray-50 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all font-medium text-dark"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className="w-full p-4 bg-gray-50 border-2 border-gray-50 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all font-medium text-dark"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Subject</label>
                                                <select
                                                    className="w-full p-4 bg-gray-50 border-2 border-gray-50 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all font-medium text-dark flex items-center"
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                >
                                                    <option value="">Select a reason</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Appointment Question">Appointment Question</option>
                                                    <option value="Insurance Help">Insurance & Billing</option>
                                                    <option value="Feedback">Feedback</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Your Message</label>
                                                <textarea
                                                    required
                                                    placeholder="Tell us how we can help..."
                                                    className="w-full p-4 bg-gray-50 border-2 border-gray-50 rounded-2xl outline-none focus:border-primary focus:bg-white transition-all font-medium text-dark h-40"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                                            >
                                                Send Message <i className="fa-solid fa-paper-plane"></i>
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-20 rounded-[50px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-4 border-white h-[400px] relative group">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop&q=80"
                                alt="Location Map"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-10 animate-bounce">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center"><i className="fa-solid fa-location-dot"></i></div>
                                <span className="font-bold text-dark font-outfit">Find Us Here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
