import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'Clinic',
            services: 'Treatments',
            team: 'Specialists',
            contact: 'Contact',
            book: 'Book Appointment',
            my_appointments: 'My Appointments'
        },
        hero: {
            subtitle: 'Specialized Medical Center',
            title: 'Your Health, Our Priority',
            desc: 'Providing comprehensive dental care and pharmacy services with international clinical standards. Trust our specialists for your family health.',
            cta_primary: 'Request Visit',
            cta_secondary: 'View Specialties',
            badges: ['Certified Clinic', '24/7 Support']
        },
        services: {
            title: 'Medical Specializations',
            subtitle: 'Professional Clinical Care',
            items: [
                { title: 'Restorative Dentistry', desc: 'Expert restoration and clinical care for your teeth.' },
                { title: 'Oral Surgery', desc: 'Safe and specialized surgical procedures.' },
                { title: 'Family Practice', desc: 'Comprehensive medical care for all ages.' },
                { title: 'Pharmacy Services', desc: 'On-site medical supply and expert counseling.' }
            ]
        },
        contact: {
            title: 'Clinical Consultation',
            desc: 'Connect with our medical board for any inquiries.',
            location: 'Main Medical District, Suite 405, City Center',
            hours: {
                title: 'Clinical Operation Hours',
                days: 'Monday - Saturday',
                morning: '09:00 AM - 01:00 PM',
                evening: '04:00 PM - 10:00 PM',
                weekend: 'Friday: Emergency Only',
                weekdays: 'Mon - Fri: 08:00 AM - 10:00 PM',
                weekends: 'Sat - Sun: 10:00 AM - 06:00 PM'
            },
            form: {
                name: 'Patient Name',
                email: 'Institutional Email',
                phone: 'Contact Number',
                message: 'Clinical Inquiries / Symptoms',
                submit: 'Confirm Request',
                success_title: 'Request Registered',
                success_msg: 'Your clinical request has been received. A medical practitioner will review and contact you within 30 minutes.',
                time_estimate: 'Queue status: 2nd in line',
                back_home: 'Return to Homepage'
            }
        },
        appointments: {
            title: 'Medical Records',
            subtitle: 'Access and manage your clinical visits securely.',
            find_label: 'Retrieve Booking',
            phone_placeholder: 'Registered phone number...',
            no_results: 'No records found',
            no_results_sub: 'Check your number or register a new clinical visit.',
            id_label: 'Reference ID',
            adjust_btn: 'Reschedule',
            cancel_btn: 'Withdraw Visit',
            modal_edit_title: 'Clinical Schedule Adjustment',
            modal_cancel_title: 'Cancel Clinical Visit?',
            modal_cancel_msg: 'Note: Cancellations within 24 hours may affect prioritization.',
            modal_keep: 'Confirm Visit',
            modal_confirm_cancel: 'Withdraw',
            modal_save: 'Update Record',
            modal_date: 'Effective Date',
            modal_time: 'Assigned Time'
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'العيادة',
            services: 'التخصصات',
            team: 'الأطباء الأخصائيون',
            contact: 'اتصل بنا',
            book: 'حجز موعد جديد',
            my_appointments: 'مواعيدي'
        },
        hero: {
            subtitle: 'مركز طبي متكامل',
            title: 'صحتكم هي أولويتنا القصوى',
            desc: 'نقدم رعاية أسنان وخدمات صيدلانية متكاملة بمعايير طبية دولية. ثق بأخصائِينا من أجل صحة عائلتك.',
            cta_primary: 'طلب زيارة',
            cta_secondary: 'مشاهدة التخصصات',
            badges: ['عيادة معتمدة', 'دعم طبي 24/7']
        },
        services: {
            title: 'التخصصات الطبية',
            subtitle: 'الرعاية العيادية المتخصصة',
            items: [
                { title: 'طب الأسنان الترميمي', desc: 'ترميم وتجميل الأسنان بأحدث الوسائل الطبية.' },
                { title: 'جراحة الفم', desc: 'إجراءات جراحية متخصصة وآمنة تماماً.' },
                { title: 'الطب العائلي', desc: 'رعاية صحية شاملة لجميع أفراد الأسرة.' },
                { title: 'الخدمات الصيدلانية', desc: 'توفير الأدوية والاستشارات الطبية المتخصصة.' }
            ]
        },
        contact: {
            title: 'الاستشارة الطبية',
            desc: 'تواصل مع الطاقم الطبي لأي استفسار أو حالة طارئة.',
            location: 'الحي الطبي الرئيسي، جناح 405، مركز المدينة',
            hours: {
                title: 'ساعات العمل الرسمية',
                days: 'من السبت إلى الخميس',
                morning: '09:00 صباحاً - 01:00 ظهراً',
                evening: '04:00 مساءً - 10:00 مساءً',
                weekend: 'الجمعة: حالات الطوارئ فقط',
                weekdays: 'الأحد - الخميس: 08:00 صباحاً - 10:00 مساءً',
                weekends: 'الجمعة - السبت: 10:00 صباحاً - 06:00 مساءً'
            },
            form: {
                name: 'اسم المريض',
                email: 'البريد الإلكتروني المؤسسي',
                phone: 'رقم التواصل',
                message: 'الاستفسارات الطبية / الأعراض',
                submit: 'تأكيد الطلب',
                success_title: 'تم تسجيل الطلب طبياً',
                success_msg: 'لقد استلمنا طلبكم الطبي بنجاح. سيقوم أحد الأخصائيين بمراجعة الحالة والتواصل معكم خلال 30 دقيقة.',
                time_estimate: 'حالة الدور: الثاني في الانتظار',
                back_home: 'العودة للرئيسية'
            }
        },
        appointments: {
            title: 'السجل الطبي',
            subtitle: 'الوصول إلى زياراتك الطبية وإدارتها بشكل آمن تماماً.',
            find_label: 'استرجاع الحجز',
            phone_placeholder: 'رقم الهاتف المسجل...',
            no_results: 'لا توجد سجلات',
            no_results_sub: 'تحقق من رقم الهاتف أو قم بحجز زيارة طبية جديدة.',
            id_label: 'رقم المرجع',
            adjust_btn: 'تغيير الموعد',
            cancel_btn: 'إلغاء الزيارة',
            modal_edit_title: 'تعديل الجدول الطبي',
            modal_cancel_title: 'إلغاء الزيارة الطبية؟',
            modal_cancel_msg: 'ملاحظة: الإلغاء قبل أقل من 24 ساعة قد يؤثر على ترتيب الأولوية.',
            modal_keep: 'تأكيد الزيارة',
            modal_confirm_cancel: 'إلغاء',
            modal_save: 'تحديث السجل',
            modal_date: 'التاريخ الفعلي',
            modal_time: 'الوقت المحدد'
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
