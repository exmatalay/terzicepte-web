const Layout = {
    // HTML Templates
    hero: `
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>İşinizin Dijital Hali Cebinizde</h1>
                <p>Müşteri kayıtlarından ölçülere, sipariş takibinden randevulara kadar tüm terzilik iş akışınızı
                    dijitalleştirin. Zamandan kazanın, verimliliğinizi artırın.</p>
                <div class="hero-buttons">
                    <a href="#download-app" class="btn btn-primary">Hemen İndir</a>
                </div>

                <div class="hero-image-slider">
                    <div class="slides">
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.55.37.png" alt="terzicepte Login Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.03.png" alt="terzicepte Müşteriler Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.18.png" alt="terzicepte Abonelik Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.40.png" alt="terzicepte Ayarlar Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.49.png" alt="terzicepte Müşteri Detay Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.56.png" alt="terzicepte Ölçü Detay Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.57.01.png" alt="terzicepte Sipariş Detay Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.57.26.png" alt="terzicepte Müşteri Silme Onayı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 19.02.28.png" alt="terzicepte Kayıt Ol Ekranı"></div>
                        <div class="slide"><img src="screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 19.02.37.png" alt="terzicepte Şifremi Unuttum Ekranı"></div>
                    </div>
                    <div class="slider-dots"></div>
                </div>
            </div>
        </div>
    </section>
    `,

    howItWorks: `
    <section class="how-it-works" id="how-it-works">
        <div class="container">
            <div class="section-header">
                <h2>Nasıl Çalışır?</h2>
                <p>Sadece 3 basit adımda atölyenizi dijitalleştirmeye başlayın.</p>
            </div>
            <div class="steps-container">
                <div class="step fade-in">
                    <span class="step-number">1</span>
                    <h3>Uygulamayı İndirin</h3>
                    <p>App Store veya Google Play'den terzicepte uygulamasını indirin.</p>
                </div>
                <div class="step fade-in">
                    <span class="step-number">2</span>
                    <h3>Hesap Oluşturun</h3>
                    <p>Uygulama içinde ücretsiz planla başlayın veya ihtiyacınıza uygun planı seçin.</p>
                </div>
                <div class="step fade-in">
                    <span class="step-number">3</span>
                    <h3>Yönetmeye Başlayın</h3>
                    <p>Müşterilerinizi, siparişlerinizi ve randevularınızı kolayca yönetin.</p>
                </div>
            </div>
        </div>
    </section>
    `,

    pricing: `
    <section class="pricing" id="pricing">
        <div class="container">
            <div class="section-header">
                <h2>Size Uygun Planı Seçin</h2>
                <p>İşletmenizin büyüklüğüne ve ihtiyaçlarına göre esnek abonelik planları.</p>
            </div>

            <div class="pricing-grid">
                <div class="pricing-card fade-in">
                    <h3>Ücretsiz</h3>
                    <div class="price">₺0<span>/ay</span></div>
                    <div class="billing-cycle">
                        <span>Her zaman ücretsiz</span>
                    </div>
                    <ul class="features-list">
                        <li>1 Kullanıcı Hesabı</li>
                        <li>30 Müşteri Kaydı</li>
                        <li>Müşteri başına 5 Ölçü</li>
                        <li>5 Sipariş Kaydı</li>
                        <li class="disabled">Randevu Sistemi</li>
                        <li class="disabled">Fotoğraf Ekleme</li>
                        <li class="disabled">Sesli Notlar</li>
                        <li class="disabled">Veri Yedekleme (Excel)</li>
                        <li class="disabled">Tema Desteği</li>
                        <li class="disabled">Basit Raporlama</li>
                        <li class="disabled">Fatura Oluşturma</li>
                        <li class="disabled">Ödeme Takibi</li>
                        <li class="disabled">QR Kod Sistemi</li>
                        <li>Reklam İçerir</li>
                    </ul>
                    <a href="#download-app" class="btn btn-secondary">Hemen İndir</a>
                </div>

                <div class="pricing-card popular fade-in">
                    <h3>Temel</h3>
                    <div class="price">₺249,99<span>/ay</span></div>
                    <div class="billing-cycle">
                        <span class="or-text">veya</span>
                        <div class="annual-plan-highlight">
                            <span class="amount">Yıllık ₺2499,99</span>
                            <span class="badge">%17 İndirim</span>
                        </div>
                    </div>
                    <ul class="features-list">
                        <li>3 Kullanıcı Hesabı</li>
                        <li>Sınırsız Müşteri Kaydı</li>
                        <li>Sınırsız Ölçü Kaydı</li>
                        <li>Sınırsız Sipariş Kaydı</li>
                        <li>Randevu Sistemi</li>
                        <li>Fotoğraf Ekleme</li>
                        <li>Sesli Notlar</li>
                        <li>Veri Yedekleme (Excel)</li>
                        <li>Tema Desteği (Açık/Koyu)</li>
                        <li>Basit Raporlama (Aylık Özet)</li>
                        <li class="disabled">Fatura Oluşturma</li>
                        <li class="disabled">Ödeme Takibi</li>
                        <li class="disabled">QR Kod Sistemi</li>
                        <li>Reklamsız Deneyim</li>
                    </ul>
                    <a href="#download-app" class="btn btn-primary">Hemen İndir</a>
                </div>

                <div class="pricing-card fade-in">
                    <h3>Gelişmiş</h3>
                    <div class="price">₺499,99<span>/ay</span></div>
                    <div class="billing-cycle">
                        <span class="or-text">veya</span>
                        <div class="annual-plan-highlight">
                            <span class="amount">Yıllık ₺4999,99</span>
                            <span class="badge">%17 İndirim</span>
                        </div>
                    </div>
                    <ul class="features-list">
                        <li>Sınırsız Kullanıcı Hesabı</li>
                        <li>Sınırsız Müşteri Kaydı</li>
                        <li>Sınırsız Ölçü Kaydı</li>
                        <li>Sınırsız Sipariş Kaydı</li>
                        <li>Randevu Sistemi</li>
                        <li>Fotoğraf Ekleme</li>
                        <li>Sesli Notlar</li>
                        <li>Veri Yedekleme (Excel)</li>
                        <li>Tema Desteği (Açık/Koyu)</li>
                        <li>Gelişmiş Raporlama</li>
                        <li>Fatura Oluşturma (PDF)</li>
                        <li>Ödeme Takibi</li>
                        <li>QR Kod Sistemi</li>
                        <li>Reklamsız Deneyim</li>
                        <li>Öncelikli Destek</li>
                    </ul>
                    <a href="#download-app" class="btn btn-secondary">Hemen İndir</a>
                </div>
            </div>
            <p style="text-align: center; margin-top: 40px; color: #6b7280;">*Fiyatlar web sitesinin güncellenmesine göre değişebilir. Güncel
                fiyatlar için uygulama içerisindeki abonelik ekranını kontrol ediniz.</p>
        </div>
    </section>
    `,

    cta: `
    <section class="cta-section container fade-in" id="download-app">
        <h2>Atölyenizi Cebinize Taşıyın!</h2>
        <p>terzicepte mobil uygulamasını şimdi indirin ve iş akışınızı her yerden yönetin.</p>
        <div class="download-buttons" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
            <a href="#" data-app-store-link target="_blank">
                <img src="src/img/appstorebutton.png" alt="App Store'dan İndirin" style="height: 50px;">
            </a>
            <div class="coming-soon" style="display: inline-block;">
                <img src="src/img/playstorebutton.png" alt="Google Play'den Alın (Yakında)" style="height: 50px;">
            </div>
        </div>
    </section>
    `,

    footer: `
    <footer class="footer" id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>@terzicepte</h3>
                    <p>Terziler için özel olarak geliştirilmiş dijital atölye yönetimi çözümü.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-youtube"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Hızlı Bağlantılar</h3>
                    <ul>
                        <li><a href="index.html#features">Özellikler</a></li>
                        <li><a href="#how-it-works">Nasıl Çalışır?</a></li>
                        <li><a href="#pricing">Fiyatlar</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Yasal</h3>
                    <ul>
                        <li><a href="privacy.html#features">Gizlilik Politikası</a></li>
                        <li><a href="terms.html#features">Kullanım Koşulları (EULA)</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Destek</h3>
                    <ul>
                        <li><a href="#" data-contact-email>İletişim</a></li>
                        <li><a href="support.html#features">Destek Sayfası</a></li>
                        <li><a href="sss.html#features">Sıkça Sorulan Sorular</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="copyright-year"></span> terzicepte. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>
    `,

    init: function() {
        const featuresSection = document.getElementById('features');
        if (!featuresSection) return;

        // Hero'yu features'dan önce ekle
        featuresSection.insertAdjacentHTML('beforebegin', this.hero);

        // Diğer bölümleri features'dan sonra ekle
        const bottomContent = this.howItWorks + this.pricing + this.cta + this.footer;
        featuresSection.insertAdjacentHTML('afterend', bottomContent);

        // Config değerlerini uygula (config.js'den gelen)
        if (typeof config !== 'undefined') {
            // App Store linklerini güncelle
            document.querySelectorAll('[data-app-store-link]').forEach(el => {
                el.href = config.appStoreUrl || config.appStoreLink;
            });
            
            // Email linklerini güncelle
            document.querySelectorAll('[data-contact-email]').forEach(el => {
                el.href = `mailto:${config.contactEmail}`;
            });
            
            // Copyright yılını güncelle
            const yearEl = document.getElementById('copyright-year');
            if(yearEl) yearEl.textContent = config.copyrightYear || config.year || new Date().getFullYear();
        }

        this.initScripts();
    },

    initScripts: function() {
        // --- SLIDER SCRIPT ---
        const slidesContainer = document.querySelector('.slides');
        const dotsContainer = document.querySelector('.slider-dots');
        let currentSlide = 0;
        let slideInterval;

        const screenshots = [
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.55.37.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.03.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.18.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.40.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.49.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.56.56.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.57.01.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 18.57.26.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 19.02.28.png",
            "screenshots/Simulator Screenshot - iPhone 17 Pro - 2025-10-22 at 19.02.37.png"
        ];

        if (dotsContainer) {
            dotsContainer.innerHTML = ''; // Temizle
            screenshots.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            });
            const dots = dotsContainer.querySelectorAll('.dot');
            if (dots.length > 0) {
                dots[0].classList.add('active');
            }
        }

        function updateDots() {
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
        }

        function goToSlide(slideIndex) {
            if (!slidesContainer) return;
            currentSlide = slideIndex;
            slidesContainer.style.transform = `translateX(-${currentSlide * 10}%)`;
            updateDots();
        }

        function nextSlide() {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= screenshots.length) {
                nextIndex = 0;
            }
            goToSlide(nextIndex);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 3000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        if (slidesContainer && dotsContainer) {
            startInterval();
        }

        // --- Navbar Scroll ---
        window.addEventListener('scroll', function () {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });

        // --- Fade In ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // --- Mobile Menu ---
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const navLinks = document.querySelector('.nav-links');
        if (mobileMenuButton && navLinks) {
            // Event listener'ları temizle (tekrar eklenmesini önlemek için)
            const newBtn = mobileMenuButton.cloneNode(true);
            mobileMenuButton.parentNode.replaceChild(newBtn, mobileMenuButton);
            
            newBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                newBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            });

            document.addEventListener('click', (e) => {
                if (!newBtn.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    newBtn.textContent = '☰';
                }
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    newBtn.textContent = '☰';
                });
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Layout.init());
