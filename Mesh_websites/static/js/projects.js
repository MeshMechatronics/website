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
            'concept-design-1': 'Manipülatör',
            'concept-design-2': 'Kablo Sarma Makinası',
            'concept-design-3': 'CNC Besleme',
            'concept-design-4': 'Çuval Gripper',
            'concept-design-title-1':'Tavan Sunroof Punta Tamamlama ve Taşıma Manipülatörü',
            'concept-design-title-2':'Kablo Sarma Makinası',
            'concept-design-title-3':'CNC Besleme',
            'concept-design-title-4':'Çuval Gripper',
            'fixture-1': 'Kaynak Fikstür',
            'fixture-2': 'Pillar Fikstür',
            'fixture-3': 'Salıncak Fikstürler',
            'fixture-4': 'Salıncak Fikstürler',
            'fixture-5': 'Şase Fikstür',
            'fixtures-title-1':'Kaynak Fikstür',
            'fixtures-title-2':'Pillar Fikstür',
            'fixtures-title-3':'Salıncak Fikstürler',
            'fixtures-title-4':'Salıncak Fikstürler',
            'fixtures-title-5':'Şase Fikstür',
            'special-machine-1': 'Skid Changer',
            'special-machine-2': 'Fırın Lifti',
            'special-machine-3': 'Makaslı Lift',
            'special-machines-title-1':'Skid Changer',
            'special-machines-title-2':'Fırın Lifti',
            'special-machines-title-3':'Makaslı Lift',
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
            'concept-design-1': 'Manipulator',
            'concept-design-2': 'Cable Winding Machine',
            'concept-design-3': 'CNC Feeding',
            'concept-design-4': 'Sack Gripper',
            'concept-design-title-1':'Ceiling Sunroof Spot Completion and Transport Manipulator',
            'concept-design-title-2':'Cable Winding Machine',
            'concept-design-title-3':'CNC Feeding',
            'concept-design-title-4':'Sack Gripper',
            'fixture-1': 'Welding Fixture',
            'fixture-2': 'Pillar Fixture',
            'fixture-3': 'Swing Fixtures',
            'fixture-4': 'Swing Fixtures',
            'fixture-5': 'Chassis Fixture',
            'fixtures-title-1':'Welding Fixture',
            'fixtures-title-2':'Pillar Fixture',
            'fixtures-title-3':'Swing Fixtures',
            'fixtures-title-4':'Swing Fixtures',
            'fixtures-title-5':'Chassis Fixture',
            'special-machine-1': 'Skid Changer',
            'special-machine-2': 'Oven Lift',
            'special-machine-3': 'Scissor Lift', 
            'special-machines-title-1':'Skid Changer',
            'special-machines-title-2':'Oven Lift',
            'special-machines-title-3':'Scissor Lift',   
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
            'concept-design-1': 'Manipulator',
            'concept-design-2': 'Kabelwickelmaschine',
            'concept-design-3': 'CNC-Zuführung',
            'concept-design-4': 'Sackgreifer',
            'concept-design-title-1':'Decken-Schiebedach-Spot-Komplettierungs- und Transportmanipulator',
            'concept-design-title-2':'Kabelwickelmaschine',
            'concept-design-title-3':'CNC-Zuführung',
            'concept-design-title-4':'Sackgreifer',
            'fixture-1': 'Schweißvorrichtung',
            'fixture-2': 'Säulenvorrichtung 2',
            'fixture-3': 'Schwenkvorrichtungen',
            'fixture-4': 'Schwenkvorrichtungen',
            'fixture-5': 'Chassisvorrichtung',
            'fixtures-title-1':'Schweißvorrichtung',
            'fixtures-title-2':'Säulenvorrichtung',
            'fixtures-title-3':'Schwenkvorrichtungen',
            'fixtures-title-4':'Schwenkvorrichtungen',
            'fixtures-title-5':'Chassisvorrichtung',
            'special-machines-1': 'Skid-Wechsler',
            'special-machines-2': 'Ofenlift',
            'special-machines-3': 'Scherenhebebühne',   
            'special-machines-title-1':'Skid-Wechsler',
            'special-machines-title-2':'Ofenlift',
            'special-machines-title-3':'Scherenhebebühne',    
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
