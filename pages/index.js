import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';
import { storage } from '@/utils/storage';

export default function Home() {
    const [cms, setCms] = useState(null);

    useEffect(() => {
        setCms(storage.getCMS());
    }, []);

    return (
        <Layout>
            <Head>
                <title>SmilePro - Advanced Dental Care & Aesthetics</title>
                <meta name="description" content="Experience premium dental care with SmilePro. Book your appointment today for a brighter, healthier smile." />
            </Head>

            <Hero data={cms?.hero} />
            <Stats data={cms?.stats} />
            <AboutUs data={cms?.about} />
            <Services />
            <Reviews />
            <CTA data={cms?.cta} />
        </Layout>
    );
}
