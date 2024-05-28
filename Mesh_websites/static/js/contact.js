document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Mesajınız için teşekkürler! En kısa sürede size geri döneceğiz.');
            contactForm.reset();
        } else {
            alert('Lütfen tüm alanları doldurun.');
        }
    });

    // Dil değiştirme işlevi
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const languageSelect = document.getElementById('language-select');

    const translations = {
        'tr': {
            'home': 'Anasayfa',
            'about': 'Hakkımızda',
            'services': 'Hizmetler',
            'projects': 'Projeler',
            'contact': 'İletişim',
            'contact-title': 'Bizimle İletişime Geçin',
            'address': 'Adres: Kadıköy Mahallesi Bağdat Caddesi Bahri Çakır Sokak İzmit/Kocaeli',
            'phone': 'Telefon: <a href="https://wa.me/905382770495" target="_blank">+90 538 277 0495</a>',
            'email': 'E-posta: <a href="mailto:info@meshmechatronics.com">info@meshmechatronics.com</a>',
            'label-name': 'İsim:',
            'label-email': 'E-posta:',
            'label-message': 'Mesaj:',
            'send-button': 'Mesaj Gönder',
            'footer-text': '© 2024 Mesh Mechatronics. Tüm hakları saklıdır.'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'projects': 'Projects',
            'contact': 'Contact',
            'contact-title': 'Contact Us',
            'address': 'Address: Bahri Cakir Street, Izmit, Turkey',
            'phone': 'Phone: <a href="https://wa.me/905382770495" target="_blank">+90 538 277 0495</a>',
            'email': 'Email: <a href="mailto:info@meshmechatronics.com">info@meshmechatronics.com</a>',
            'label-name': 'Name:',
            'label-email': 'Email:',
            'label-message': 'Message:',
            'send-button': 'Send Message',
            'footer-text': '© 2024 Mesh Mechatronics. All rights reserved.'
        },
        'de': {
            'home': 'Startseite',
            'about': 'Über uns',
            'services': 'Dienstleistungen',
            'projects': 'Projekte',
            'contact': 'Kontakt',
            'contact-title': 'Kontaktieren Sie uns',
            'address': 'Adresse: Bahri Cakir Hauptstraße, Izmit, Turkey',
            'phone': 'Telefon: <a href="https://wa.me/905382770495" target="_blank">+90 538 277 0495</a>',
            'email': 'E-Mail: <a href="mailto:info@meshmechatronics.com">info@meshmechatronics.com</a>',
            'label-name': 'Name:',
            'label-email': 'E-Mail:',
            'label-message': 'Nachricht:',
            'send-button': 'Nachricht senden',
            'footer-text': '© 2024 Mesh Mechatronics. Alle Rechte vorbehalten.'
        }
    };

    function translatePage(language) {
        elementsToTranslate.forEach(element => {
            const key = element.dataset.translate;
            element.innerHTML = translations[language][key];
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
