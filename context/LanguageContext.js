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
                submit: 'Send Request',
                success_title: 'Appointment Requested!',
                success_msg: 'Thank you for choosing SmilePro. Our medical coordinators will contact you within the next 2 hours to finalize your visit.',
                time_estimate: 'Estimated contact in: 1h 45m',
                back_home: 'Back to Home'
            }
        },
        appointments: {
            title: 'My Appointments',
            subtitle: 'View, manage, or reschedule your upcoming visits with ease.',
            find_label: 'Find Your Booking',
            phone_placeholder: 'Enter your phone number...',
            no_results: 'No appointments found',
            no_results_sub: 'Try searching with a different phone number or book a new session.',
            id_label: 'ID',
            adjust_btn: 'Reschedule',
            cancel_btn: 'Cancel Visit',
            modal_edit_title: 'Modify Appointment',
            modal_cancel_title: 'Cancel Appointment?',
            modal_cancel_msg: 'Are you sure you want to cancel this booking? This action cannot be undone.',
            modal_keep: 'No, Keep It',
            modal_confirm_cancel: 'Yes, Cancel It',
            modal_save: 'Update Appointment',
            modal_name: 'Patient Name',
            modal_date: 'New Date',
            modal_time: 'New Time'
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
            desc: 'نتطلع للرحب بكم.',
            form: {
                name: 'الاسم الكامل',
                email: 'البريد الإلكتروني',
                phone: 'رقم الهاتف',
                message: 'الرسالة',
                submit: 'أرسل الطلب',
                success_title: 'تم استلام طلب الحجز!',
                success_msg: 'شكراً لاختيارك SmilePro. سيتواصل معك منسقو المواعيد لدينا خلال الساعتين القادمتين لتأكيد موعدك.',
                time_estimate: 'وقت التواصل المتوقع: ساعة و 45 دقيقة',
                back_home: 'العودة للرئيسية'
            }
        },
        appointments: {
            title: 'مواعيدي',
            subtitle: 'عرض أو تعديل أو إلغاء زياراتك القادمة بكل سهولة.',
            find_label: 'ابحث عن حجزك',
            phone_placeholder: 'أدخل رقم هاتفك...',
            no_results: 'لم يتم العثور على مواعيد',
            no_results_sub: 'حاول البحث برقم هاتف مختلف أو احجز جلسة جديدة.',
            id_label: 'رقم الحجز',
            adjust_btn: 'تعديل الموعد',
            cancel_btn: 'إلغاء الزيارة',
            modal_edit_title: 'تعديل الموعد',
            modal_cancel_title: 'إلغاء الموعد؟',
            modal_cancel_msg: 'هل أنت متأكد أنك تريد إلغاء هذا الحجز؟ لا يمكن التراجع عن هذا الإجراء.',
            modal_keep: 'لا، احتفظ به',
            modal_confirm_cancel: 'نعم، قم بالإلغاء',
            modal_save: 'تحديث الموعد',
            modal_name: 'اسم المريض',
            modal_date: 'التاريخ الجديد',
            modal_time: 'الوقت الجديد'
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
