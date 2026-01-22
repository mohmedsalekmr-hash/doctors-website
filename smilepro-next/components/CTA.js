import Link from 'next/link';

export default function CTA({ data }) {
    const { title, desc } = data || {
        title: "Ready for a Brighter Smile?",
        desc: "Book your appointment online in less than 2 minutes. No credit card required."
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-6 font-outfit">
                <div className="bg-[#0f172a] rounded-[50px] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-slate-400 font-normal">
                                {desc}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
                            <Link href="/booking" className="px-12 py-6 bg-primary text-white rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all shadow-xl shadow-blue-500/20">
                                Book My Visit Now
                            </Link>
                            <div className="text-white text-left hidden sm:block">
                                <div className="font-bold">Need Help?</div>
                                <div className="text-slate-400 text-sm">Call us: +1 (555) 123-4567</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
