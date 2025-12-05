const config = {
    appName: 'terzicepte',
    appStoreUrl: 'https://apps.apple.com/tr/app/terzicepte/id6752545996',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.terzicepte.app',
    contactEmail: 'destek@terzicepte.net',
    copyrightYear: new Date().getFullYear(),

    // Uygulama durumları
    playStoreStatus: 'coming_soon',

    // Sosyal medya linkleri
    socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        youtue: '#',
        linkedin: '#',
        tiktok: '#'
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
