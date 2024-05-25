document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    serviceItems.forEach(item => {
        observer.observe(item);
    });

    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const languageSelect = document.getElementById('language-select');

    const translations = {
        'tr': {
            'home': 'Anasayfa',
            'about': 'Hakkımızda',
            'services': 'Hizmetler',
            'projects': 'Projeler',
            'contact': 'İletişim',
            'hero-title': 'Endüstriyel Mekanik Çözümler Uzmanı',
            'hero-text': 'Mesh Mekatronik - Endüstriyel İnovasyonunuzun Ortağı',
            'hero-btn': 'Daha Fazla Bilgi',
            'services-title': 'Hizmetlerimiz',
            'service1-title': 'Mekanik Tasarım ve Prototip Üretimi',
            'service1-text': 'Tüm ihtiyaçlarınız için yüksek kaliteli tasarım ve prototip üretimi hizmetleri.',
            'service2-title': 'Otomasyon Çözümleri',
            'service2-text': 'İşlemlerinizi optimize etmek için uzman otomasyon çözümleri.',
            'service3-title': 'Bakım ve Destek',
            'service3-text': 'Sistemlerinizin sorunsuz çalışmasını sağlamak için güvenilir bakım ve destek hizmetleri.',
            'service4-title': 'Danışmanlık ve Eğitim',
            'service4-text': 'Takımınızı güçlendirmek için profesyonel danışmanlık ve eğitim hizmetleri.',
            'footer-text': '© 2024 Mesh Mekatronik. Tüm hakları saklıdır.'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'projects': 'Projects',
            'contact': 'Contact',
            'hero-title': 'Industrial Mechanical Solutions Expert',
            'hero-text': 'Mesh Mechatronics - Your Partner in Industrial Innovation',
            'hero-btn': 'Learn More',
            'services-title': 'Our Services',
            'service1-title': 'Mechanical Design and Prototyping',
            'service1-text': 'High-quality design and prototyping services for all your needs.',
            'service2-title': 'Automation Solutions',
            'service2-text': 'Expert automation solutions to streamline your processes.',
            'service3-title': 'Maintenance and Support',
            'service3-text': 'Reliable maintenance and support services to keep your systems running smoothly.',
            'service4-title': 'Consulting and Training',
            'service4-text': 'Professional consulting and training services to empower your team.',
            'footer-text': '© 2024 Mesh Mechatronics. All rights reserved.'
        },
        'de': {
            'home': 'Startseite',
            'about': 'Über uns',
            'services': 'Dienstleistungen',
            'projects': 'Projekte',
            'contact': 'Kontakt',
            'hero-title': 'Experte für industrielle mechanische Lösungen',
            'hero-text': 'Mesh Mechatronics - Ihr Partner für industrielle Innovation',
            'hero-btn': 'Erfahren Sie mehr',
            'services-title': 'Unsere Dienstleistungen',
            'service1-title': 'Mechanisches Design und Prototyping',
            'service1-text': 'Hochwertige Design- und Prototyping-Dienstleistungen für alle Ihre Bedürfnisse.',
            'service2-title': 'Automatisierungslösungen',
            'service2-text': 'Expertenantworten zur Automatisierung zur Optimierung Ihrer Prozesse.',
            'service3-title': 'Wartung und Support',
            'service3-text': 'Zuverlässige Wartungs- und Support-Dienstleistungen, um Ihre Systeme reibungslos am Laufen zu halten.',
            'service4-title': 'Beratung und Schulung',
            'service4-text': 'Professionelle Beratungs- und Schulungsdienste zur Stärkung Ihres Teams.',
            'footer-text': '© 2024 Mesh Mechatronics. Alle Rechte vorbehalten.'
        }
    };

    const images = ['static/images/index/hero1.jpg', 'static/images/index/hero2.jpg', 
                    'static/images/index/hero3.jpg', 'static/images/index/hero4.jpg',
                    'static/images/index/hero5.jpg', 'static/images/index/hero6.jpg',
                    'static/images/index/hero7.jpg', 'static/images/index/hero8.jpg',
                    'static/images/index/hero9.jpg'];

    // Görüntülerin dizisi üzerinde döngü
    let index = 0;
    function changeBackground() {
        document.querySelector('.hero').style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length; // Dizinin sonuna ulaşıldığında başa dön
    }

    // Her 5 saniyede bir arka plan resmini değiştir
    setInterval(changeBackground, 5000); // Milisaniye cinsinden süreyi değiştirin (örneğin, 5000 => 5 saniye)

    function translatePage(language) {
        elementsToTranslate.forEach(element => {
            const key = element.dataset.translate;
            element.textContent = translations[language][key];
        });
    }

    function changeLanguage() {
        const selectedLanguage = languageSelect.value;
        localStorage.setItem('preferredLanguage', selectedLanguage);
        translatePage(selectedLanguage);
    }

    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    languageSelect.value = savedLanguage;
    translatePage(savedLanguage);

    languageSelect.addEventListener('change', changeLanguage);
});
