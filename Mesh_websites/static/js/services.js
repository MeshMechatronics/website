document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    // Animasyon
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

    // Dil değiştirme
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const languageSelect = document.getElementById('language-select');

    const translations = {
        'tr': {
            'home': 'Anasayfa',
            'about': 'Hakkımızda',
            'services': 'Hizmetler',
            'projects': 'Projeler',
            'contact': 'İletişim',
            'services-title': 'Hizmetlerimiz',
            'service1-title': 'Tasarım ve Prototipleme',
            'service1-text': 'Fikirlerinizi gerçeğe dönüştürmek için kapsamlı tasarım ve prototipleme hizmetleri sunuyoruz. Ekibimiz, her projede hassasiyet ve verimlilik sağlamak için en son CAD araçlarını ve 3D baskı teknolojisini kullanır.',
            'service2-title': 'Otomasyon Çözümleri',
            'service2-text': 'Otomasyon çözümlerimiz, verimliliği artırmak ve operasyonel maliyetleri azaltmak için tasarlanmıştır. Mevcut süreçlerinizle sorunsuz bir şekilde entegre olan özel otomasyon sistemleri geliştirme konusunda uzmanız.',
            'service3-title': 'Bakım ve Destek',
            'service3-text': 'Sistemlerinizin sorunsuz çalışmasını sağlamak için sürekli bakım ve destek hizmetleri sağlıyoruz. Özel destek ekibimiz, ortaya çıkan herhangi bir sorunu çözmek için 7/24 hizmetinizdedir.',
            'service4-title': 'Danışmanlık ve Eğitim',
            'service4-text': 'Danışmanlık ve eğitim hizmetlerimiz, ekibinizin güncel kalmasını sağlamayı amaçlamaktadır. En son sektör trendleri hakkında uzman tavsiyeleri sunuyor ve iş gücünüzü geliştirmek için eğitim programları sağlıyoruz.',
            'service5-title': 'Robotik Entegrasyonu',
            'service5-text': 'Üretim hattınıza robot entegrasyonu konusunda uzmanız. Çözümlerimiz, üretim süreçlerinizde verimliliği, doğruluğu ve güvenliği artırmak için tasarlanmıştır.',
            'service6-title': 'IoT Çözümleri',
            'service6-text': 'IoT çözümlerimiz, cihazlarınızı ve sistemlerinizi birbirine bağlayarak gerçek zamanlı veri izleme ve analiz imkanı sağlar. Bu, daha iyi karar verme ve operasyonel verimlilik sağlar.',
            'footer-text': '© 2024 Mesh Mechatronics. Tüm hakları saklıdır.'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'projects': 'Projects',
            'contact': 'Contact',
            'services-title': 'Our Services',
            'service1-title': 'Design and Prototyping',
            'service1-text': 'We offer comprehensive design and prototyping services to turn your ideas into reality. Our team uses the latest CAD tools and 3D printing technology to ensure precision and efficiency in every project.',
            'service2-title': 'Automation Solutions',
            'service2-text': 'Our automation solutions are designed to enhance productivity and reduce operational costs. We specialize in developing custom automation systems that integrate seamlessly with your existing processes.',
            'service3-title': 'Maintenance and Support',
            'service3-text': 'We provide ongoing maintenance and support services to ensure your systems operate smoothly. Our dedicated support team is available 24/7 to assist with any issues that arise.',
            'service4-title': 'Consulting and Training',
            'service4-text': 'Our consulting and training services are aimed at helping your team stay ahead of the curve. We offer expert advice on the latest industry trends and provide training programs to upskill your workforce.',
            'service5-title': 'Robotics Integration',
            'service5-text': 'We specialize in the integration of robotics into your production line. Our solutions are tailored to improve efficiency, accuracy, and safety in your manufacturing processes.',
            'service6-title': 'IoT Solutions',
            'service6-text': 'Our IoT solutions connect your devices and systems, allowing for real-time data monitoring and analysis. This enables better decision-making and increased operational efficiency.',
            'footer-text': '© 2024 Mesh Mechatronics. All rights reserved.'
        },
        'de': {
            'home': 'Startseite',
            'about': 'Über uns',
            'services': 'Dienstleistungen',
            'projects': 'Projekte',
            'contact': 'Kontakt',
            'services-title': 'Unsere Dienstleistungen',
            'service1-title': 'Design und Prototyping',
            'service1-text': 'Wir bieten umfassende Design- und Prototyping-Dienstleistungen, um Ihre Ideen in die Realität umzusetzen. Unser Team verwendet die neuesten CAD-Tools und 3D-Drucktechnologie, um Präzision und Effizienz in jedem Projekt zu gewährleisten.',
            'service2-title': 'Automatisierungslösungen',
            'service2-text': 'Unsere Automatisierungslösungen sind darauf ausgelegt, die Produktivität zu steigern und die Betriebskosten zu senken. Wir sind auf die Entwicklung maßgeschneiderter Automatisierungssysteme spezialisiert, die sich nahtlos in Ihre bestehenden Prozesse integrieren lassen.',
            'service3-title': 'Wartung und Support',
            'service3-text': 'Wir bieten kontinuierliche Wartungs- und Supportdienste, um sicherzustellen, dass Ihre Systeme reibungslos funktionieren. Unser engagiertes Support-Team steht Ihnen rund um die Uhr zur Verfügung, um bei auftretenden Problemen zu helfen.',
            'service4-title': 'Beratung und Schulung',
            'service4-text': 'Unsere Beratungs- und Schulungsdienste zielen darauf ab, Ihr Team auf dem neuesten Stand zu halten. Wir bieten Expertenrat zu den neuesten Branchentrends und Schulungsprogramme zur Weiterqualifizierung Ihrer Mitarbeiter.',
            'service5-title': 'Robotik-Integration',
            'service5-text': 'Wir sind auf die Integration von Robotik in Ihre Produktionslinie spezialisiert. Unsere Lösungen sind darauf ausgelegt, die Effizienz, Genauigkeit und Sicherheit in Ihren Fertigungsprozessen zu verbessern.',
            'service6-title': 'IoT-Lösungen',
            'service6-text': 'Unsere IoT-Lösungen verbinden Ihre Geräte und Systeme und ermöglichen so die Echtzeit-Überwachung und -Analyse von Daten. Dies ermöglicht bessere Entscheidungen und eine höhere betriebliche Effizienz.',
            'footer-text': '© 2024 Mesh Mechatronics. Alle Rechte vorbehalten.'
        }
    };

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

    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    languageSelect.value = savedLanguage;
    translatePage(savedLanguage);

    languageSelect.addEventListener('change', changeLanguage);
});
