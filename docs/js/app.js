// SSAR RPOC Web Application
// Main application logic

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const contentArea = document.getElementById('content-area');
    const tocContent = document.getElementById('toc-content');
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    const quickLinks = document.querySelectorAll('.nav-item[data-jump]');
    const searchInput = document.getElementById('search-input');
    const searchOverlay = document.getElementById('search-overlay');
    const searchModalInput = document.getElementById('search-modal-input');
    const searchResults = document.getElementById('search-results');
    const closeSearch = document.getElementById('close-search');
    const themeToggle = document.getElementById('theme-toggle');
    const printBtn = document.getElementById('print-btn');
    const backToTop = document.getElementById('back-to-top');

    // State
    let currentSection = 'operations';
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Initialize
    init();

    function init() {
        // Apply saved theme
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        // Load initial section
        loadSection(currentSection);

        // Set up event listeners
        setupEventListeners();
    }

    function setupEventListeners() {
        // Navigation clicks
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                setActiveNav(item);
                loadSection(section);
            });
        });

        // Quick links
        quickLinks.forEach(link => {
            link.addEventListener('click', () => {
                const jumpId = link.dataset.jump;
                handleQuickJump(jumpId);
            });
        });

        // Search
        searchInput.addEventListener('click', openSearch);
        searchInput.addEventListener('focus', openSearch);
        closeSearch.addEventListener('click', closeSearchModal);
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearchModal();
        });
        searchModalInput.addEventListener('input', handleSearch);

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            if (e.key === 'Escape') {
                closeSearchModal();
            }
        });

        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);

        // Print button
        printBtn.addEventListener('click', () => window.print());

        // Back to top
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.remove('hidden');
            } else {
                backToTop.classList.add('hidden');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // TOC scroll spy
        const mainContent = document.querySelector('.main-content');
        mainContent.addEventListener('scroll', updateTocHighlight);
    }

    function setActiveNav(activeItem) {
        navItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
    }

    function loadSection(sectionKey) {
        currentSection = sectionKey;
        const section = RPOC_CONTENT[sectionKey];

        if (!section) {
            contentArea.innerHTML = '<p>Section not found.</p>';
            return;
        }

        // Parse markdown and render
        const html = marked.parse(section.content);
        contentArea.innerHTML = html;
        contentArea.classList.add('loaded');

        // Build table of contents
        buildTOC();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function buildTOC() {
        const headings = contentArea.querySelectorAll('h2, h3');
        let tocHTML = '<ul>';

        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;

            const level = heading.tagName.toLowerCase();
            const text = heading.textContent;

            tocHTML += \`<li><a href="#\${id}" class="toc-\${level}">\${text}</a></li>\`;
        });

        tocHTML += '</ul>';
        tocContent.innerHTML = tocHTML;

        // Add click handlers
        tocContent.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    function updateTocHighlight() {
        const headings = contentArea.querySelectorAll('h2, h3');
        const tocLinks = tocContent.querySelectorAll('a');
        const scrollTop = window.scrollY;

        let activeIndex = 0;
        headings.forEach((heading, index) => {
            if (heading.offsetTop <= scrollTop + 100) {
                activeIndex = index;
            }
        });

        tocLinks.forEach((link, index) => {
            link.classList.toggle('active', index === activeIndex);
        });
    }

    function handleQuickJump(jumpId) {
        const jumpConfig = QUICK_ACCESS[jumpId];
        if (!jumpConfig) return;

        // Switch to the section
        const navItem = document.querySelector(\`[data-section="\${jumpConfig.section}"]\`);
        if (navItem) {
            setActiveNav(navItem);
            loadSection(jumpConfig.section);

            // Wait for render then scroll to relevant content
            setTimeout(() => {
                const headings = contentArea.querySelectorAll('h2, h3, h4');
                for (const heading of headings) {
                    if (heading.textContent.toLowerCase().includes(jumpConfig.search.toLowerCase())) {
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        break;
                    }
                }
            }, 100);
        }
    }

    function openSearch() {
        searchOverlay.classList.remove('hidden');
        searchModalInput.value = '';
        searchModalInput.focus();
        searchResults.innerHTML = '<p class="search-hint">Type to search through all policy documents...</p>';
    }

    function closeSearchModal() {
        searchOverlay.classList.add('hidden');
    }

    function handleSearch() {
        const query = searchModalInput.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
            return;
        }

        const results = searchIndex.filter(item => {
            return item.heading.toLowerCase().includes(query) ||
                   item.text.toLowerCase().includes(query);
        });

        if (results.length === 0) {
            searchResults.innerHTML = '<p class="search-hint">No results found. Try different keywords.</p>';
            return;
        }

        let resultsHTML = '';
        results.slice(0, 10).forEach(result => {
            const excerpt = highlightText(result.text, query);
            resultsHTML += \`
                <div class="search-result-item" data-section="\${result.section}" data-heading="\${result.heading}">
                    <div class="search-result-section">\${result.sectionTitle}</div>
                    <div class="search-result-title">\${result.heading}</div>
                    <div class="search-result-excerpt">\${excerpt}</div>
                </div>
            \`;
        });

        searchResults.innerHTML = resultsHTML;

        // Add click handlers to results
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                const heading = item.dataset.heading;
                closeSearchModal();
                navigateToResult(section, heading);
            });
        });
    }

    function highlightText(text, query) {
        const regex = new RegExp(\`(\${query})\`, 'gi');
        return text.replace(regex, '<mark>$1</mark>').substring(0, 200) + '...';
    }

    function navigateToResult(sectionKey, headingText) {
        // Switch to section
        const navItem = document.querySelector(\`[data-section="\${sectionKey}"]\`);
        if (navItem) {
            setActiveNav(navItem);
            loadSection(sectionKey);

            // Scroll to heading
            setTimeout(() => {
                const headings = contentArea.querySelectorAll('h1, h2, h3, h4');
                for (const heading of headings) {
                    if (heading.textContent.trim() === headingText) {
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Highlight briefly
                        heading.style.backgroundColor = 'rgba(52, 152, 219, 0.3)';
                        setTimeout(() => {
                            heading.style.backgroundColor = '';
                        }, 2000);
                        break;
                    }
                }
            }, 100);
        }
    }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);

        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
});

// Console welcome message
console.log('%cSSAR RPOC Web Tool', 'font-size: 20px; font-weight: bold; color: #1e3a5f;');
console.log('%cSquamish Search and Rescue - RPAS Policy Manual', 'font-size: 12px; color: #666;');
console.log('%cCAR Part IX Compliant | STSC-003 | STSC-004', 'font-size: 10px; color: #3498db;');
