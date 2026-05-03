document.addEventListener('DOMContentLoaded', () => {
    // === State ===
    let currentLang = 'fr';

    // === DOM Elements ===
    const projectsGrid = document.getElementById('projects-grid');
    const langFrBtn = document.getElementById('lang-fr');
    const langEnBtn = document.getElementById('lang-en');
    const typingTextEl = document.getElementById('typing-text');

    // === Initialize Projects ===
    function renderProjects(lang) {
        projectsGrid.innerHTML = '';
        projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card glass-panel reveal active'; // Active by default if rendering after scroll
            
            const techTags = proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
            
            card.innerHTML = `
                <div class="project-header">
                    <span class="folder-icon">📁</span>
                    <a href="${proj.github}" target="_blank" class="github-link" title="GitHub Repository">🔗</a>
                </div>
                <h3 class="project-title">${proj.title[lang]}</h3>
                <p class="project-desc">${proj.desc[lang]}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
                <div class="project-skills">
                    > ${proj.skills[lang]}
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // === Translate Page ===
    function translatePage(lang) {
        currentLang = lang;
        
        // Update active class on buttons
        if (lang === 'fr') {
            langFrBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langFrBtn.classList.remove('active');
        }

        // Translate static text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Re-render projects
        renderProjects(lang);
        
        // Retrigger typing animation with new language
        typeText(translations[lang]['hero-typing']);
    }

    // === Event Listeners for Language ===
    langFrBtn.addEventListener('click', () => {
        if (currentLang !== 'fr') translatePage('fr');
    });

    langEnBtn.addEventListener('click', () => {
        if (currentLang !== 'en') translatePage('en');
    });

    // === Terminal Typing Effect ===
    let typingTimeout;
    function typeText(text) {
        typingTextEl.textContent = '';
        clearTimeout(typingTimeout);
        let i = 0;

        function type() {
            if (i < text.length) {
                typingTextEl.textContent += text.charAt(i);
                i++;
                typingTimeout = setTimeout(type, 50); // Typing speed
            }
        }
        type();
    }

    // === Scroll Reveal Effect ===
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only reveal once
                }
            });
        };
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };
        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
        revealElements.forEach(el => revealObserver.observe(el));
    }

    // === Initial Setup ===
    translatePage('fr');
    initScrollReveal();
});
