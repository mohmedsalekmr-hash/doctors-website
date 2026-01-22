import Link from 'next/link';

export default function Hero({ data }) {
    const { badge, title, desc } = data || {
        badge: "Voted #1 Dental Clinic 2025",
        title: "Experience the Future of Dental Care",
        desc: "Professional, painless, and personalized dental services tailored to your needs. Join thousands of satisfied patients today."
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -z-10 rounded-l-[100px] hidden lg:block"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-bold mb-6">
                            <i className="fa-solid fa-medal"></i>
                            <span>{badge}</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-dark leading-[1.1] mb-8">
                            {title}
                        </h1>

                        <p className="text-xl text-text-light leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            {desc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link href="/booking" className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 hover:-translate-y-1 transition-all">
                                Book Appointment
                            </Link>
                            <Link href="/appointments" className="px-10 py-5 bg-white text-dark border-2 border-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">
                                Manage My Booking
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 pt-12 border-t border-gray-100 flex flex-wrap items-center gap-8 justify-center lg:justify-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-shield-check"></i>
                                </div>
                                <span className="font-bold text-dark text-sm">Certified Specialists</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <span className="font-bold text-dark text-sm">24/7 Priority Support</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative animate-fadeIn">
                        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl skew-y-1">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
                                alt="Modern Clinic"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Floating cards */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div>
                                    <div className="font-bold text-dark leading-none">4.9/5 Rating</div>
                                    <div className="text-xs text-text-light mt-1">From 2k+ Patients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
