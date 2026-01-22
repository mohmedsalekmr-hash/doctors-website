import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
    const { t } = useLanguage();

    return (
        <Layout>
            <Head>
                <title>SmilePro - Luxury Dental Care</title>
                <meta name="description" content="Experience premium dental services in a luxurious environment. Book your consultation today." />
            </Head>

            <Hero />

            {/* About Teaser */}
            <section className="py-24 bg-white" id="about">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 block">About Us</span>
                            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-8 leading-tight">Redefining the Dental Experience.</h2>
                            <p className="text-lg text-text-light leading-relaxed mb-6 font-light">
                                We believe that visiting the dentist should be a restorative experience for both your smile and your mind. Our clinic mimics the comfort of a high-end spa, combined with the precision of modern medical technology.
                            </p>
                            <div className="h-px w-24 bg-accent my-8"></div>
                            <p className="text-lg text-text-light leading-relaxed font-light">
                                From the moment you step in, you are treated with the utmost care, privacy, and personalized attention. Our team of specialists is dedicated to styling your perfect smile.
                            </p>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative z-10">
                                <img src="https://images.unsplash.com/photo-1609840114035-1c29046a8af3?q=80&w=1000&auto=format&fit=crop" alt="Doctor" className="rounded-none shadow-2xl sepia-[.2] hover:sepia-0 transition-all duration-700" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-accent/30 z-0 hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />

        </Layout>
    );
}
