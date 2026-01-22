import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            team: 'Team',
            contact: 'Contact',
            book: 'Book Appointment'
        },
        hero: {
            subtitle: 'Premium Dental Care',
            title: 'Experience the Art of a Perfect Smile',
            desc: 'World-class dentistry in a serene, luxurious environment. We combine advanced technology with artistic precision.',
            cta_primary: 'Book Consultation',
            cta_secondary: 'Our Services',
            badges: ['5-Star Rated', 'Top Specialists']
        },
        services: {
            title: 'Our Expertise',
            subtitle: 'Excellence in Every Detail',
            items: [
                { title: 'Cosmetic Dentistry', desc: 'Veneers, whitening, and smile design.' },
                { title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement.' },
                { title: 'Orthodontics', desc: 'Invisalign and modern alignment solutions.' },
                { title: 'General Care', desc: 'Routine hygiene and preventative health.' }
            ]
        },
        contact: {
            title: 'Get in Touch',
            desc: 'We look forward to welcoming you.',
            form: {
                name: 'Full Name',
                email: 'Email Address',
                phone: 'Phone Number',
                message: 'Message',
                submit: 'Send Request'
            }
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            services: 'خدماتنا',
            team: 'الفريق الطبي',
            contact: 'اتصل بنا',
            book: 'احجز موعد'
        },
        hero: {
            subtitle: 'رعاية أسنان فاخرة',
            title: 'اكتشف فن الابتسامة المثالية',
            desc: 'طب أسنان عالمي المستوى في بيئة هادئة وفاخرة. نجمع بين التكنولوجيا المتقدمة والدقة الفنية.',
            cta_primary: 'احجز استشارة',
            cta_secondary: 'خدماتنا',
            badges: ['تقييم 5 نجوم', 'أفضل الأخصائيين']
        },
        services: {
            title: 'خبراتنا',
            subtitle: 'التميز في كل التفاصيل',
            items: [
                { title: 'تجميل الأسنان', desc: 'الفينير، التبييض، وتصميم الابتسامة.' },
                { title: 'زراعة الأسنان', desc: 'حلول دائمة وطبيعية لتعويض الأسنان.' },
                { title: 'تقويم الأسنان', desc: 'إنفيزالاين وحلول التقويم الحديثة.' },
                { title: 'العناية العامة', desc: 'النظافة الروتينية والصحة الوقائية.' }
            ]
        },
        contact: {
            title: 'تواصل معنا',
            desc: 'نتطلع للترحيب بكم.',
            form: {
                name: 'الاسم الكامل',
                email: 'البريد الإلكتروني',
                phone: 'رقم الهاتف',
                message: 'الرسالة',
                submit: 'أرسل الطلب'
            }
        }
    }
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en');

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'ar' : 'en');
    };

    const t = translations[lang];
    const isRTL = lang === 'ar';

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t, isRTL }}>
            <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : 'font-sans'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
