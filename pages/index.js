import { useLanguage } from '@/context/LanguageContext';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';

export default function Home() {
    const { t } = useLanguage();

    return (
        <Layout>
            <Head>
                <title>SmilePro | Premium Dental Care & Luxury Clinical Experience</title>
                <meta name="description" content="Experience world-class dental services in a luxurious, spa-like environment. Book your premium consultation with our expert specialists today." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <Services />

            {/* About Us Section */}
            <AboutUs />

            {/* Reviews Section */}
            <Reviews />

            {/* Call to Action Section */}
            <CTA />

        </Layout>
    );
}

