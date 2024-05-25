document.addEventListener('DOMContentLoaded', () => {
    const aboutParagraphs = document.querySelectorAll('.about-content p');

    aboutParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.style.opacity = 1;
            paragraph.style.transform = 'translateY(0)';
        }, index * 500);
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
            'about1': 'Mesh Mekatronik, endüstriyel sistemler ve makineler üzerinde mekanik tasarım, imalat ve montaj hizmetleri sunan bir firmadır. Anahtar teslim projelerimiz ile müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz.',
            'about2': 'Misyonumuz, müşteri memnuniyetini ön planda tutarak yüksek kaliteli ve güvenilir ürünler sunmaktır. Otomotiv, beyaz eşya ve savunma sanayi gibi çeşitli sektörlerde hizmet vermekteyiz.',
            'about3': 'Vizyonumuz, dünya çapında lider bir firma olmaktır. Özel müşteri ihtiyaçlarına göre tasarım ve üretim yaparak sektördeki yerimizi her geçen gün güçlendiriyoruz.',
            'footer-text': '© 2024 Mesh Mechatronics. All rights reserved.'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'projects': 'Projects',
            'contact': 'Contact',
            'about1': 'Mesh Mechatronics is a company that offers mechanical design, manufacturing, and assembly services for industrial systems and machines. We provide custom solutions tailored to our customers\' needs with turnkey projects.',
            'about2': 'Our mission is to offer high-quality and reliable products by prioritizing customer satisfaction. We serve various industries such as automotive, white goods, and defense.',
            'about3': 'Our vision is to become a leading company worldwide. We strengthen our position in the industry day by day by designing and manufacturing according to special customer needs.',
            'footer-text': '© 2024 Mesh Mechatronics. All rights reserved.'
        },
        'de': {
            'home': 'Startseite',
            'about': 'Über uns',
            'services': 'Dienstleistungen',
            'projects': 'Projekte',
            'contact': 'Kontakt',
            'about1': 'Mesh Mechatronics ist ein Unternehmen, das mechanische Design-, Herstellungs- und Montagedienstleistungen für industrielle Systeme und Maschinen anbietet. Wir bieten maßgeschneiderte Lösungen, die auf die Bedürfnisse unserer Kunden mit schlüsselfertigen Projekten zugeschnitten sind.',
            'about2': 'Unsere Mission ist es, hochwertige und zuverlässige Produkte anzubieten, indem wir die Kundenzufriedenheit in den Vordergrund stellen. Wir bedienen verschiedene Branchen wie Automobil, Weißwaren und Verteidigung.',
            'about3': 'Unsere Vision ist es, weltweit führend zu werden. Wir stärken unsere Position in der Branche Tag für Tag, indem wir nach speziellen Kundenbedürfnissen entwerfen und fertigen.',
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

    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    languageSelect.value = savedLanguage;
    translatePage(savedLanguage);

    languageSelect.addEventListener('change', changeLanguage);
});
