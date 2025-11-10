const config = {
    appName: 'terzicepte',
    appStoreUrl: 'https://apps.apple.com/tr/app/terzicepte',
    contactEmail: 'murat.atalay@hotmail.com.tr',
    copyrightYear: '2025',

    // Uygulama durumları
    playStoreStatus: 'coming_soon',

    // Sosyal medya linkleri
    socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
    }
};

// HTML elementlerini güncelle
document.addEventListener('DOMContentLoaded', function () {
    // App Store linklerini güncelle
    document.querySelectorAll('[data-app-store-link]').forEach(el => {
        el.href = config.appStoreUrl;
    });

    // Email linklerini güncelle
    document.querySelectorAll('[data-contact-email]').forEach(el => {
        el.href = `mailto:${config.contactEmail}`;
    });

    // Copyright yılını güncelle
    document.querySelectorAll('[data-copyright-year]').forEach(el => {
        el.textContent = config.copyrightYear;
    });
});
