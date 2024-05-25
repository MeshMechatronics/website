document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.categories button');
    const projectGroups = document.querySelectorAll('.project-group');
    const projectItems = document.querySelectorAll('.project-item');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const languageSelect = document.getElementById('language-select');

    const translations = {
        'tr': {
            'home': 'Anasayfa',
            'about': 'Hakkımızda',
            'services': 'Hizmetler',
            'contact': 'İletişim',
            'projects': 'Projeler',
            'projects-title': 'Projelerimiz',
            'all': 'Tümü',
            'concept-designs': 'Konsept Tasarımlar',
            'fixtures': 'Fikstürler',
            'special-machines': 'Özel Makineler',
            'concept-design-1': 'Konsept Tasarım 1',
            'concept-design-2': 'Konsept Tasarım 2',
            'fixture-1': 'Fikstür 1',
            'fixture-2': 'Fikstür 2',
            'fixture-3': 'Fikstür 3',
            'special-machine-1': 'Özel Makine 1',
            'special-machine-2': 'Özel Makine 2',
            'footer-text': '© 2024 Mesh Mekatronik. Tüm hakları saklıdır.'
        },
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'contact': 'Contact',
            'projects': 'Projects',
            'projects-title': 'Our Projects',
            'all': 'All',
            'concept-designs': 'Concept Designs',
            'fixtures': 'Fixtures',
            'special-machines': 'Special Machines',
            'concept-design-1': 'Concept Design 1',
            'concept-design-2': 'Concept Design 2',
            'fixture-1': 'Fixture 1',
            'fixture-2': 'Fixture 2',
            'fixture-3': 'Fixture 3',
            'special-machine-1': 'Special Machine 1',
            'special-machine-2': 'Special Machine 2',
            'footer-text': '© 2024 Mesh Mechatronics. All rights reserved.'
        },
        'de': {
            'home': 'Startseite',
            'about': 'Über uns',
            'services': 'Dienstleistungen',
            'contact': 'Kontakt',
            'projects': 'Projekte',
            'projects-title': 'Unsere Projekte',
            'all': 'Alle',
            'concept-designs': 'Konzeptdesigns',
            'fixtures': 'Befestigungen',
            'special-machines': 'Spezialmaschinen',
            'concept-design-1': 'Konzeptdesign 1',
            'concept-design-2': 'Konzeptdesign 2',
            'fixture-1': 'Befestigung 1',
            'fixture-2': 'Befestigung 2',
            'fixture-3': 'Befestigung 3',
            'special-machine-1': 'Spezialmaschine 1',
            'special-machine-2': 'Spezialmaschine 2',
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

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterProjects(category);
            animateButton(button);
        });
    });

    function filterProjects(category) {
        projectGroups.forEach(group => {
            if (category === 'all' || group.getAttribute('data-category') === category) {
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        });
    }

    filterProjects('all');

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = item.querySelector('img').src;
            captionText.innerHTML = item.querySelector('p').innerHTML;
            item.querySelector('p').style.display = 'block'; // İsimleri göster
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        projectItems.forEach(item => {
            item.querySelector('p').style.display = 'none'; // İsimleri gizle
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            projectItems.forEach(item => {
                item.querySelector('p').style.display = 'none'; // İsimleri gizle
            });
        }
    });

    function animateButton(button) {
        button.classList.add('animated');
        setTimeout(() => {
            button.classList.remove('animated');
        }, 300);
    }
});
