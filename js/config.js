const config = {
    appName: 'terzicepte',
    appStoreUrl: 'https://apps.apple.com/tr/app/terzicepte/id6752545996',
    appleEulaUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
    playStoreStatus: 'coming_soon',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.terzicepte.app',
    playStoreEulaUrl: 'https://play.google.com/about/developer-content-policy/',
    contactEmail: 'destek@terzicepte.net',
    contactEmailSubject: 'destek@terzicepte.net',
    copyrightYear: new Date().getFullYear(),

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
