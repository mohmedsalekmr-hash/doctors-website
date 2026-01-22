<<<<<<< HEAD
/* Main Script for SmilePro Website */

document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sticky Header Effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }

                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Fade-in Animations (Optional polish)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CSS class for animation logic
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    // Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const htmlEl = document.documentElement;

    // Translations
    const translations = {
        en: {
            title: "Experience the Future of Dental Care",
            subtitle: "Professional, painless, and personalized dental services tailored to your needs. Join thousands of satisfied patients today.",
            badge: "Voted #1 Dental Clinic 2025",
            bookNow: "Book Now",
            ourServices: "Our Services",
            aboutTitle: "Leading the Way in Dental Excellence",
            aboutText1: "At SmilePro, we believe that every patient deserves the best possible dental care. Our state-of-the-art facility is equipped with the latest technology to ensure precise, painless, and effective treatments.",
            aboutText2: "Led by Dr. Islam and a team of certified specialists, we have been serving the community for over 10 years, creating thousands of beautiful, healthy smiles along the way.",
            statPatients: "Happy Patients",
            statDentists: "Expert Dentists",
            statExp: "Years Experience",
            statSupport: "Emergency Support",
            serviceTitle: "Comprehensive Dental Care",
            ctaTitle: "Ready for a Brighter Smile?",
            ctaText: "Book your appointment online in less than 2 minutes. No credit card required.",
            ctaBtn: "Book Your Visit Now",

            // Booking Page
            bookingTitle: "Book Your Appointment",
            bookingSubtitle: "Select a service and time that works for you",
            step1: "Service",
            step2: "Time",
            step3: "Details",
            chooseService: "Choose a Service",
            service1Name: "General Checkup",
            service1Desc: "30 min • $50",
            service2Name: "Teeth Whitening",
            service2Desc: "60 min • $200",
            service3Name: "Deep Cleaning",
            service3Desc: "45 min • $80",
            nextStep: "Next Step",
            selectTime: "Select Date & Time",
            availableSlots: "Available Slots",
            back: "Back",
            yourInfo: "Your Information",
            fullName: "Full Name",
            phoneNum: "Phone Number",
            confirmBooking: "Confirm Booking",
            successTitle: "Booking Confirmed!",
            successDesc: "We have sent a confirmation email to you.",
            returnHome: "Return Home",

            // Login Page
            adminPortal: "Admin Portal",
            signIn: "Sign In",
            backToWeb: "Back to Website",

            // My Bookings Page
            manageTitle: "Manage Your Appointment",
            manageDesc: "Enter your phone number to view or cancel your booking.",
            findBtn: "Find Booking",
            cancelBtn: "Cancel Appointment",
            confirmed: "Confirmed",
            cancelled: "Cancelled",
            noAppt: "No appointments found for this number."
        },
        ar: {
            title: "اختبر مستقبل العناية بالأسنان",
            subtitle: "خدمات أسنان احترافية، خالية من الألم، ومصممة خصيصاً لاحتياجاتك. انضم إلى آلاف المرضى السعداء اليوم.",
            badge: "تم التصويت كأفضل عيادة أسنان لعام 2025",
            bookNow: "احجز الآن",
            ourServices: "خدماتنا",
            aboutTitle: "ريادة في التميز الطبي للأسنان",
            aboutText1: "في سمايل برو، نؤمن بأن كل مريض يستحق أفضل رعاية ممكنة للأسنان. منشأتنا الحديثة مجهزة بأحدث التقنيات لضمان علاجات دقيقة، فعالة، وخالية من الألم.",
            aboutText2: "بقيادة د. إسلام وفريق من المتخصصين المعتمدين، نخدم المجتمع منذ أكثر من 10 سنوات، وصنعنا آلاف الابتسامات الجميلة والصحية.",
            statPatients: "مريض سعيد",
            statDentists: "طبيب خبير",
            statExp: "سنوات خبرة",
            statSupport: "دعم طوارئ",
            serviceTitle: "رعاية أسنان شاملة ومتكاملة",
            ctaTitle: "هل أنت مستعد لابتسامة أكثر إشراقاً؟",
            ctaText: "احجز موعدك عبر الإنترنت في أقل من دقيقتين. لا حاجة لبطاقة ائتمان.",
            ctaBtn: "احجز زيارتك الآن",

            // Booking Page
            bookingTitle: "احجز موعدك الآن",
            bookingSubtitle: "اختر الخدمة والوقت المناسب لك",
            step1: "الخدمة",
            step2: "الوقت",
            step3: "التفاصيل",
            chooseService: "اختر الخدمة المطلوبة",
            service1Name: "فحص عام",
            service1Desc: "30 دقيقة • 50$",
            service2Name: "تبييض الأسنان",
            service2Desc: "60 دقيقة • 200$",
            service3Name: "تنظيف عميق",
            service3Desc: "45 دقيقة • 80$",
            nextStep: "الخطوة التالية",
            selectTime: "تحديد التاريخ والوقت",
            availableSlots: "المواعيد المتاحة",
            back: "رجوع",
            yourInfo: "بياناتك الشخصية",
            fullName: "الاسم الكامل",
            phoneNum: "رقم الهاتف",
            confirmBooking: "تأكيد الحجز",
            successTitle: "تم الحجز بنجاح!",
            successDesc: "لقد أرسلنا تفاصيل الحجز إلى بريدك الإلكتروني.",
            returnHome: "العودة للرئيسية",

            // Login Page
            adminPortal: "بوابة المشرفين",
            signIn: "تسجيل الدخول",
            backToWeb: "العودة للموقع",

            // My Bookings Page
            manageTitle: "إدارة موعدك",
            manageDesc: "أدخل رقم هاتفك لعرض أو إلغاء حجزك.",
            findBtn: "البحث عن حجز",
            cancelBtn: "إلغاء الموعد",
            confirmed: "مؤكد",
            cancelled: "ملغي",
            noAppt: "لا توجد مواعيد لهذا الرقم."
        }
    };

    // Initialize Language from LocalStorage
    const savedLang = localStorage.getItem('siteLang') || 'en';
    // Always call setLanguage to ensure all text elements (including on new pages) are updated
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = htmlEl.getAttribute('lang');
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    function setLanguage(lang) {
        if (lang === 'ar') {
            htmlEl.setAttribute('lang', 'ar');
            htmlEl.setAttribute('dir', 'rtl');
            if (langText) langText.textContent = 'English';
            document.body.style.fontFamily = "'Cairo', sans-serif";
            localStorage.setItem('siteLang', 'ar');

            // Apply Translations
            applyTranslations(translations.ar);
        } else {
            htmlEl.setAttribute('lang', 'en');
            htmlEl.setAttribute('dir', 'ltr');
            if (langText) langText.textContent = 'العربية';
            document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
            localStorage.setItem('siteLang', 'en');

            // Apply Translations
            applyTranslations(translations.en);
        }
    }

    function applyTranslations(t) {
        // Helper to update text safely
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };

        setTxt('hero-title', t.title);
        setTxt('hero-desc', t.subtitle);
        setTxt('badge-text', t.badge);
        setTxt('book-btn-text', t.bookNow);
        setTxt('services-btn-text', t.ourServices);

        setTxt('about-heading', t.aboutTitle);
        setTxt('about-p1', t.aboutText1);
        setTxt('about-p2', t.aboutText2);

        setTxt('stat-patients', t.statPatients);
        setTxt('stat-dentists', t.statDentists);
        setTxt('stat-exp', t.statExp);
        setTxt('stat-support', t.statSupport);

        setTxt('services-heading', t.serviceTitle);
        setTxt('cta-title', t.ctaTitle);
        setTxt('cta-desc', t.ctaText);
        setTxt('cta-btn', t.ctaBtn);

        // Booking Translations
        setTxt('booking-title', t.bookingTitle);
        setTxt('booking-subtitle', t.bookingSubtitle);
        setTxt('step-1-label', t.step1);
        setTxt('step-2-label', t.step2);
        setTxt('step-3-label', t.step3);
        setTxt('choose-service-title', t.chooseService);
        setTxt('service-1-name', t.service1Name);
        setTxt('service-1-desc', t.service1Desc);
        setTxt('service-2-name', t.service2Name);
        setTxt('service-2-desc', t.service2Desc);
        setTxt('service-3-name', t.service3Name);
        setTxt('service-3-desc', t.service3Desc);
        setTxt('btn-next-1', t.nextStep);
        setTxt('select-time-title', t.selectTime);
        setTxt('available-slots-title', t.availableSlots);
        setTxt('btn-back-1', t.back);
        setTxt('btn-next-2', t.nextStep);
        setTxt('your-info-title', t.yourInfo);
        setTxt('label-fullname', t.fullName);
        setTxt('label-phone', t.phoneNum);
        setTxt('btn-confirm', t.confirmBooking);
        setTxt('btn-back-2', t.back);
        setTxt('success-title', t.successTitle);
        setTxt('success-desc', t.successDesc);
        setTxt('btn-home', t.returnHome);

        // Login Translations
        setTxt('admin-portal-title', t.adminPortal);
        setTxt('sign-in-btn', t.signIn);
        setTxt('back-to-web', t.backToWeb);

        // My Bookings Translations
        setTxt('manage-title', t.manageTitle);
        setTxt('manage-desc', t.manageDesc);
        setTxt('btn-find', t.findBtn);
        // Note: Dynamic elements like cards need internal translation logic in page script


        // Update Placeholders
        const updatePlaceholder = (selector, val) => {
            const inputs = document.querySelectorAll(selector);
            inputs.forEach(input => input.placeholder = val);
        }

        if (t === translations.ar) {
            updatePlaceholder('input[type="text"]', 'الاسم الكامل');
            updatePlaceholder('input[type="tel"]', 'رقم الهاتف (8 أرقام)');
            updatePlaceholder('input[type="email"]', 'البريد الإلكتروني');
            updatePlaceholder('input[type="password"]', 'كلمة المرور');
        } else {
            updatePlaceholder('input[type="text"]', 'John Doe');
            updatePlaceholder('input[type="tel"]', '12345678');
            updatePlaceholder('input[type="email"]', 'admin@smilepro.com');
            updatePlaceholder('input[type="password"]', '••••••••');
        }
    }

});
=======
/* Main Script for SmilePro Website */

document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sticky Header Effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }

                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Fade-in Animations (Optional polish)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CSS class for animation logic
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    // Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const htmlEl = document.documentElement;

    // Translations
    const translations = {
        en: {
            title: "Experience the Future of Dental Care",
            subtitle: "Professional, painless, and personalized dental services tailored to your needs. Join thousands of satisfied patients today.",
            badge: "Voted #1 Dental Clinic 2025",
            bookNow: "Book Now",
            ourServices: "Our Services",
            aboutTitle: "Leading the Way in Dental Excellence",
            aboutText1: "At SmilePro, we believe that every patient deserves the best possible dental care. Our state-of-the-art facility is equipped with the latest technology to ensure precise, painless, and effective treatments.",
            aboutText2: "Led by Dr. Islam and a team of certified specialists, we have been serving the community for over 10 years, creating thousands of beautiful, healthy smiles along the way.",
            statPatients: "Happy Patients",
            statDentists: "Expert Dentists",
            statExp: "Years Experience",
            statSupport: "Emergency Support",
            serviceTitle: "Comprehensive Dental Care",
            ctaTitle: "Ready for a Brighter Smile?",
            ctaText: "Book your appointment online in less than 2 minutes. No credit card required.",
            ctaBtn: "Book Your Visit Now",

            // Booking Page
            bookingTitle: "Book Your Appointment",
            bookingSubtitle: "Select a service and time that works for you",
            step1: "Service",
            step2: "Time",
            step3: "Details",
            chooseService: "Choose a Service",
            service1Name: "General Checkup",
            service1Desc: "30 min • $50",
            service2Name: "Teeth Whitening",
            service2Desc: "60 min • $200",
            service3Name: "Deep Cleaning",
            service3Desc: "45 min • $80",
            nextStep: "Next Step",
            selectTime: "Select Date & Time",
            availableSlots: "Available Slots",
            back: "Back",
            yourInfo: "Your Information",
            fullName: "Full Name",
            phoneNum: "Phone Number",
            confirmBooking: "Confirm Booking",
            successTitle: "Booking Confirmed!",
            successDesc: "We have sent a confirmation email to you.",
            returnHome: "Return Home",

            // Login Page
            adminPortal: "Admin Portal",
            signIn: "Sign In",
            backToWeb: "Back to Website",

            // My Bookings Page
            manageTitle: "Manage Your Appointment",
            manageDesc: "Enter your phone number to view or cancel your booking.",
            findBtn: "Find Booking",
            cancelBtn: "Cancel Appointment",
            confirmed: "Confirmed",
            cancelled: "Cancelled",
            noAppt: "No appointments found for this number."
        },
        ar: {
            title: "اختبر مستقبل العناية بالأسنان",
            subtitle: "خدمات أسنان احترافية، خالية من الألم، ومصممة خصيصاً لاحتياجاتك. انضم إلى آلاف المرضى السعداء اليوم.",
            badge: "تم التصويت كأفضل عيادة أسنان لعام 2025",
            bookNow: "احجز الآن",
            ourServices: "خدماتنا",
            aboutTitle: "ريادة في التميز الطبي للأسنان",
            aboutText1: "في سمايل برو، نؤمن بأن كل مريض يستحق أفضل رعاية ممكنة للأسنان. منشأتنا الحديثة مجهزة بأحدث التقنيات لضمان علاجات دقيقة، فعالة، وخالية من الألم.",
            aboutText2: "بقيادة د. إسلام وفريق من المتخصصين المعتمدين، نخدم المجتمع منذ أكثر من 10 سنوات، وصنعنا آلاف الابتسامات الجميلة والصحية.",
            statPatients: "مريض سعيد",
            statDentists: "طبيب خبير",
            statExp: "سنوات خبرة",
            statSupport: "دعم طوارئ",
            serviceTitle: "رعاية أسنان شاملة ومتكاملة",
            ctaTitle: "هل أنت مستعد لابتسامة أكثر إشراقاً؟",
            ctaText: "احجز موعدك عبر الإنترنت في أقل من دقيقتين. لا حاجة لبطاقة ائتمان.",
            ctaBtn: "احجز زيارتك الآن",

            // Booking Page
            bookingTitle: "احجز موعدك الآن",
            bookingSubtitle: "اختر الخدمة والوقت المناسب لك",
            step1: "الخدمة",
            step2: "الوقت",
            step3: "التفاصيل",
            chooseService: "اختر الخدمة المطلوبة",
            service1Name: "فحص عام",
            service1Desc: "30 دقيقة • 50$",
            service2Name: "تبييض الأسنان",
            service2Desc: "60 دقيقة • 200$",
            service3Name: "تنظيف عميق",
            service3Desc: "45 دقيقة • 80$",
            nextStep: "الخطوة التالية",
            selectTime: "تحديد التاريخ والوقت",
            availableSlots: "المواعيد المتاحة",
            back: "رجوع",
            yourInfo: "بياناتك الشخصية",
            fullName: "الاسم الكامل",
            phoneNum: "رقم الهاتف",
            confirmBooking: "تأكيد الحجز",
            successTitle: "تم الحجز بنجاح!",
            successDesc: "لقد أرسلنا تفاصيل الحجز إلى بريدك الإلكتروني.",
            returnHome: "العودة للرئيسية",

            // Login Page
            adminPortal: "بوابة المشرفين",
            signIn: "تسجيل الدخول",
            backToWeb: "العودة للموقع",

            // My Bookings Page
            manageTitle: "إدارة موعدك",
            manageDesc: "أدخل رقم هاتفك لعرض أو إلغاء حجزك.",
            findBtn: "البحث عن حجز",
            cancelBtn: "إلغاء الموعد",
            confirmed: "مؤكد",
            cancelled: "ملغي",
            noAppt: "لا توجد مواعيد لهذا الرقم."
        }
    };

    // Initialize Language from LocalStorage
    const savedLang = localStorage.getItem('siteLang') || 'en';
    // Always call setLanguage to ensure all text elements (including on new pages) are updated
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = htmlEl.getAttribute('lang');
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    function setLanguage(lang) {
        if (lang === 'ar') {
            htmlEl.setAttribute('lang', 'ar');
            htmlEl.setAttribute('dir', 'rtl');
            if (langText) langText.textContent = 'English';
            document.body.style.fontFamily = "'Cairo', sans-serif";
            localStorage.setItem('siteLang', 'ar');

            // Apply Translations
            applyTranslations(translations.ar);
        } else {
            htmlEl.setAttribute('lang', 'en');
            htmlEl.setAttribute('dir', 'ltr');
            if (langText) langText.textContent = 'العربية';
            document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
            localStorage.setItem('siteLang', 'en');

            // Apply Translations
            applyTranslations(translations.en);
        }
    }

    function applyTranslations(t) {
        // Helper to update text safely
        const setTxt = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };

        setTxt('hero-title', t.title);
        setTxt('hero-desc', t.subtitle);
        setTxt('badge-text', t.badge);
        setTxt('book-btn-text', t.bookNow);
        setTxt('services-btn-text', t.ourServices);

        setTxt('about-heading', t.aboutTitle);
        setTxt('about-p1', t.aboutText1);
        setTxt('about-p2', t.aboutText2);

        setTxt('stat-patients', t.statPatients);
        setTxt('stat-dentists', t.statDentists);
        setTxt('stat-exp', t.statExp);
        setTxt('stat-support', t.statSupport);

        setTxt('services-heading', t.serviceTitle);
        setTxt('cta-title', t.ctaTitle);
        setTxt('cta-desc', t.ctaText);
        setTxt('cta-btn', t.ctaBtn);

        // Booking Translations
        setTxt('booking-title', t.bookingTitle);
        setTxt('booking-subtitle', t.bookingSubtitle);
        setTxt('step-1-label', t.step1);
        setTxt('step-2-label', t.step2);
        setTxt('step-3-label', t.step3);
        setTxt('choose-service-title', t.chooseService);
        setTxt('service-1-name', t.service1Name);
        setTxt('service-1-desc', t.service1Desc);
        setTxt('service-2-name', t.service2Name);
        setTxt('service-2-desc', t.service2Desc);
        setTxt('service-3-name', t.service3Name);
        setTxt('service-3-desc', t.service3Desc);
        setTxt('btn-next-1', t.nextStep);
        setTxt('select-time-title', t.selectTime);
        setTxt('available-slots-title', t.availableSlots);
        setTxt('btn-back-1', t.back);
        setTxt('btn-next-2', t.nextStep);
        setTxt('your-info-title', t.yourInfo);
        setTxt('label-fullname', t.fullName);
        setTxt('label-phone', t.phoneNum);
        setTxt('btn-confirm', t.confirmBooking);
        setTxt('btn-back-2', t.back);
        setTxt('success-title', t.successTitle);
        setTxt('success-desc', t.successDesc);
        setTxt('btn-home', t.returnHome);

        // Login Translations
        setTxt('admin-portal-title', t.adminPortal);
        setTxt('sign-in-btn', t.signIn);
        setTxt('back-to-web', t.backToWeb);

        // My Bookings Translations
        setTxt('manage-title', t.manageTitle);
        setTxt('manage-desc', t.manageDesc);
        setTxt('btn-find', t.findBtn);
        // Note: Dynamic elements like cards need internal translation logic in page script


        // Update Placeholders
        const updatePlaceholder = (selector, val) => {
            const inputs = document.querySelectorAll(selector);
            inputs.forEach(input => input.placeholder = val);
        }

        if (t === translations.ar) {
            updatePlaceholder('input[type="text"]', 'الاسم الكامل');
            updatePlaceholder('input[type="tel"]', 'رقم الهاتف (8 أرقام)');
            updatePlaceholder('input[type="email"]', 'البريد الإلكتروني');
            updatePlaceholder('input[type="password"]', 'كلمة المرور');
        } else {
            updatePlaceholder('input[type="text"]', 'John Doe');
            updatePlaceholder('input[type="tel"]', '12345678');
            updatePlaceholder('input[type="email"]', 'admin@smilepro.com');
            updatePlaceholder('input[type="password"]', '••••••••');
        }
    }

});
>>>>>>> origin/main
