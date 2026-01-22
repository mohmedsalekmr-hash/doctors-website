export const storage = {
    get: (key) => {
        if (typeof window === 'undefined') return null;
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    set: (key, value) => {
        if (typeof window === 'undefined') return false;
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    },
    remove: (key) => {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(key);
    },
    // CMS helpers
    getCMS: () => {
        const defaultCMS = {
            hero: {
                badge: "Voted #1 Dental Clinic 2025",
                title: "Experience the Future of Dental Care",
                desc: "Professional, painless, and personalized dental services tailored to your needs. Join thousands of satisfied patients today."
            },
            stats: {
                patients: "5k+",
                dentists: "15+",
                experience: "10+"
            },
            about: {
                heading: "Leading the Way in Dental Excellence",
                p1: "At SmilePro, we believe that every patient deserves the best possible dental care. Our state-of-the-art facility is equipped with the latest technology.",
                p2: "Led by Dr. Islam and a team of certified specialists, we have been serving the community for over 10 years, creating thousands of beautiful smiles."
            },
            contact: {
                phone: "+1 (555) 123-4567",
                email: "hello@smilepro.com",
                address: "123 Dental Street, Wellness City"
            },
            cta: {
                title: "Ready for a Brighter Smile?",
                desc: "Book your appointment online in less than 2 minutes. No credit card required."
            }
        };
        const saved = storage.get('smilepro_cms');
        return saved || defaultCMS;
    },
    saveCMS: (data) => {
        storage.set('smilepro_cms', data);
    }
};
