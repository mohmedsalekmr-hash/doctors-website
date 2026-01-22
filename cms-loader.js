/**
 * SmilePro CMS Loader
 * This script runs on the main website pages (index.html, booking.html).
 * It fetches content from LocalStorage (saved by the CMS) and updates the UI dynamically.
 */

document.addEventListener('DOMContentLoaded', () => {
    const savedContent = localStorage.getItem('smilepro_content');

    if (savedContent) {
        const data = JSON.parse(savedContent);

        // --- 1. Hero Section ---
        safeUpdateText('#hero-title', data['cms-hero-title']);
        safeUpdateText('#hero-desc', data['cms-hero-desc']);
        safeUpdateText('#badge-text', data['cms-badge-text']); // Only works if element exists

        // --- 2. Statistics ---
        safeUpdateText('#stat-patients', data['cms-stat-patients']);
        safeUpdateText('#stat-exp', data['cms-stat-exp']);
        safeUpdateText('#stat-dentists', data['cms-stat-dentists']);

        // --- 3. Contact Info (Footer & Topbar) ---
        safeUpdateText('#footer-phone', data['cms-contact-phone']);
        safeUpdateText('#footer-email', data['cms-contact-email']);
        safeUpdateText('#footer-address', data['cms-contact-address']);

        // --- 4. About Us Section ---
        safeUpdateText('#about-heading', data['cms-about-heading']);
        safeUpdateText('#about-p1', data['cms-about-p1']);
        safeUpdateText('#about-p2', data['cms-about-p2']);

        // --- 5. CTA Section ---
        safeUpdateText('#cta-title', data['cms-cta-title']);
        safeUpdateText('#cta-desc', data['cms-cta-desc']);
    }
});

function safeUpdateText(selector, value) {
    if (!value) return;
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.innerText = value;
    });
}
