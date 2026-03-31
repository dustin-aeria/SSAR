// SSAR RPOC Web Application
// Main application logic with enhanced visual styling

// Supabase Configuration
const SUPABASE_URL = 'https://falrucbgwtpnzvodmytu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbHJ1Y2Jnd3Rwbnp2b2RteXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDYwMDcsImV4cCI6MjA4OTU4MjAwN30.hErSxGCeHDLFZu_9tYb0dKjz7bVgg_w10vKAYDwtqvI';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Content cache (populated from Supabase)
let contentCache = {};
let contentLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
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
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const editBtn = document.getElementById('edit-btn');
    const editOverlay = document.getElementById('edit-overlay');
    const editContent = document.getElementById('edit-content');
    const editPreview = document.getElementById('edit-preview');
    const editTitle = document.getElementById('edit-title');
    const editSave = document.getElementById('edit-save');
    const editClose = document.getElementById('edit-close');
    const editPreviewToggle = document.getElementById('edit-preview-toggle');
    const editBody = document.querySelector('.edit-body');

    // Admin Login Elements
    const adminLoginOverlay = document.getElementById('admin-login-overlay');
    const adminLoginClose = document.getElementById('admin-login-close');
    const adminEmail = document.getElementById('admin-email');
    const adminPassword = document.getElementById('admin-password');
    const adminLoginSubmit = document.getElementById('admin-login-submit');
    const adminLoginError = document.getElementById('admin-login-error');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');

    // State
    let currentSection = 'operations';
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    let isEditing = false;
    let editViewMode = 'edit'; // 'edit', 'preview', 'split'
    let isAuthenticated = false;

    // Optimized lookup tables for cell color coding (must be defined before init)
    const EXACT_MATCH_CLASSES = {
        // Risk levels
        'EXTREME': 'risk-extreme',
        'HIGH': 'risk-high',
        'HIGH PRIORITY': 'risk-high',
        'MEDIUM': 'risk-medium',
        'MODERATE': 'risk-medium',
        'LOW': 'risk-low',
        'LOW PRIORITY': 'risk-low',
        // Status colors
        'GREEN': 'status-green',
        'SERVICEABLE': 'status-green',
        'CURRENT': 'status-green',
        'PASS': 'status-green',
        'CLEAR': 'status-green',
        'YELLOW': 'status-yellow',
        'LIMITED': 'status-yellow',
        'CAUTION': 'status-yellow',
        'DUE WITHIN 30 DAYS': 'status-yellow',
        'ORANGE': 'status-orange',
        'WARNING': 'status-orange',
        'RED': 'status-red',
        'GROUNDED': 'status-red',
        'LOCKOUT': 'status-red',
        'EXPIRED': 'status-red',
        'FAIL': 'status-red',
        'NO-GO': 'status-red',
        // GO/NO-GO
        'GO': 'go-indicator',
        'NOGO': 'nogo-indicator',
        // Categories
        'A': 'category-a',
        'A - GROUNDING': 'category-a',
        'DEF-A': 'category-a',
        'B': 'category-b',
        'B - LIMITATION': 'category-b',
        'DEF-B': 'category-b',
        'C': 'category-c',
        'C - MONITOR': 'category-c',
        'DEF-C': 'category-c',
        'D': 'category-d',
        'D - COSMETIC': 'category-d',
        'DEF-D': 'category-d',
        // Ratings
        '4': 'rating-4',
        '4 - EXEMPLARY': 'rating-4',
        '3': 'rating-3',
        '3 - COMPETENT': 'rating-3',
        '2': 'rating-2',
        '2 - DEVELOPING': 'rating-2',
        '1': 'rating-1',
        '1 - UNSATISFACTORY': 'rating-1',
        // SAIL levels
        'SAIL I': 'sail-1',
        'SAIL 1': 'sail-1',
        'SAIL II': 'sail-2',
        'SAIL 2': 'sail-2',
        'SAIL III': 'sail-3',
        'SAIL 3': 'sail-3',
        'SAIL IV': 'sail-4',
        'SAIL 4': 'sail-4',
        'SAIL V': 'sail-5',
        'SAIL 5': 'sail-5',
        'SAIL VI': 'sail-6',
        'SAIL 6': 'sail-6'
    };

    const PARTIAL_MATCH_CLASSES = [
        { pattern: 'EXTREME', className: 'risk-extreme' },
        { pattern: 'HIGH RISK', className: 'risk-high' },
        { pattern: 'MEDIUM RISK', className: 'risk-medium' },
        { pattern: 'LOW RISK', className: 'risk-low' },
        { pattern: 'CATEGORY A', className: 'category-a' },
        { pattern: 'CATEGORY B', className: 'category-b' },
        { pattern: 'CATEGORY C', className: 'category-c' },
        { pattern: 'CATEGORY D', className: 'category-d' },
        { pattern: 'EXEMPLARY', className: 'rating-4' },
        { pattern: 'MEETS STANDARD', className: 'rating-3' },
        { pattern: 'BELOW STANDARD', className: 'rating-2' },
        { pattern: 'UNSATISFACTORY', className: 'rating-1' }
    ];

    const ROW_COLOR_MAP = {
        'GREEN': 'rgba(39, 174, 96, 0.1)',
        'YELLOW': 'rgba(241, 196, 15, 0.1)',
        'RED': 'rgba(231, 76, 60, 0.1)',
        'WHITE': 'rgba(200, 200, 200, 0.2)'
    };

    // Icon mapping for section headers
    const SECTION_ICON_MAP = [
        { patterns: ['INTRODUCTION', 'PURPOSE', 'OVERVIEW'], icon: 'fa-info-circle' },
        { patterns: ['REGULATORY', 'COMPLIANCE', 'CAR '], icon: 'fa-balance-scale' },
        { patterns: ['AIRCRAFT', 'FLEET', 'EQUIPMENT'], icon: 'fa-plane' },
        { patterns: ['WEATHER', 'ENVIRONMENTAL'], icon: 'fa-cloud-sun' },
        { patterns: ['COMMUNICATION'], icon: 'fa-comments' },
        { patterns: ['SAFETY', 'SMS', 'HAZARD'], icon: 'fa-shield-alt' },
        { patterns: ['BATTERY'], icon: 'fa-battery-full' },
        { patterns: ['FIRMWARE', 'SOFTWARE'], icon: 'fa-microchip' },
        { patterns: ['INSURANCE', 'LIABILITY'], icon: 'fa-file-contract' },
        { patterns: ['RECORD', 'DOCUMENTATION', 'DOCUMENT CONTROL'], icon: 'fa-folder-open' },
        { patterns: ['QUICK REFERENCE', 'REFERENCE CARD'], icon: 'fa-bolt' },
        { patterns: ['CONTACT'], icon: 'fa-phone' },
        { patterns: ['SCENARIO', 'STSC', 'STANDARD SCENARIO'], icon: 'fa-route' },
        { patterns: ['SITE SURVEY', 'FLIGHT PLANNING'], icon: 'fa-map-marked-alt' },
        { patterns: ['SEARCH', 'SAR'], icon: 'fa-search-location' },
        { patterns: ['PERSONNEL', 'ORGANIZATION', 'PEOPLE'], icon: 'fa-users' },
        { patterns: ['CHIEF PILOT', 'FLIGHT REVIEWER'], icon: 'fa-user-tie' },
        { patterns: ['PPE', 'PROTECTIVE'], icon: 'fa-hard-hat' },
        { patterns: ['TESTING', 'AIRWORTHINESS'], icon: 'fa-check-double' },
        { patterns: ['DEFECT'], icon: 'fa-exclamation-circle' },
        { patterns: ['VISUAL OBSERVER', ' VO '], icon: 'fa-eye' },
        { patterns: ['TRAINER', 'INSTRUCTOR'], icon: 'fa-chalkboard-teacher' },
        { patterns: ['CURRICULUM', 'PROGRESSION'], icon: 'fa-sitemap' },
        { patterns: ['RECURRENCY', 'CURRENCY'], icon: 'fa-redo' }
    ];

    // Initialize
    init();

    async function init() {
        // Apply saved theme
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        // Check authentication status
        await checkAuth();

        // Load content from Supabase
        await loadContentFromSupabase();

        // Load initial section
        loadSection(currentSection);

        // Set up event listeners
        setupEventListeners();

        // Set up keyboard navigation for nav items
        setupKeyboardNavigation();
    }

    async function loadContentFromSupabase() {
        try {
            const { data, error } = await supabaseClient
                .from('rpoc_content')
                .select('*')
                .eq('status', 'active');

            if (error) throw error;

            // Build content cache from Supabase data
            data.forEach(row => {
                contentCache[row.section_key] = {
                    title: row.title,
                    icon: row.icon,
                    docCount: row.doc_count,
                    content: row.content
                };
            });

            contentLoaded = true;
            console.log('Content loaded from Supabase:', Object.keys(contentCache));
        } catch (err) {
            console.warn('Failed to load from Supabase, using static fallback:', err.message);
            // Fallback to static content if available
            if (typeof RPOC_CONTENT !== 'undefined') {
                contentCache = RPOC_CONTENT;
                contentLoaded = true;
            }
        }
    }

    function setupEventListeners() {
        // Mobile menu toggle
        if (menuToggle && sidebar) {
            // Create overlay element
            const overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);

            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('active');
                const isOpen = sidebar.classList.contains('open');
                document.body.style.overflow = isOpen ? 'hidden' : '';
                menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });

            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        }

        // Navigation clicks
        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                setActiveNav(item);
                loadSection(section);
                // Close mobile menu after selection
                if (sidebar) {
                    sidebar.classList.remove('open');
                    const overlay = document.querySelector('.sidebar-overlay');
                    if (overlay) overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Quick links
        quickLinks.forEach((link) => {
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
        printBtn.addEventListener('click', () => { window.print(); });

        // Edit button
        if (editBtn) {
            editBtn.addEventListener('click', openEditor);
        }

        // Edit modal events
        if (editClose) {
            editClose.addEventListener('click', closeEditor);
        }

        if (editSave) {
            editSave.addEventListener('click', saveContent);
        }

        if (editPreviewToggle) {
            editPreviewToggle.addEventListener('click', toggleEditPreview);
        }

        // Admin login events
        if (adminLoginClose) {
            adminLoginClose.addEventListener('click', closeAdminLogin);
        }

        if (adminLoginSubmit) {
            adminLoginSubmit.addEventListener('click', handleAdminLogin);
        }

        if (adminLogoutBtn) {
            adminLogoutBtn.addEventListener('click', handleAdminLogout);
        }

        // Login form - handle Enter key
        if (adminPassword) {
            adminPassword.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleAdminLogin();
                }
            });
        }

        if (adminEmail) {
            adminEmail.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    adminPassword.focus();
                }
            });
        }

        if (editOverlay) {
            editOverlay.addEventListener('click', (e) => {
                if (e.target === editOverlay) {
                    closeEditor();
                }
            });
        }

        // Edit toolbar buttons
        document.querySelectorAll('.edit-toolbar button[data-action]').forEach((btn) => {
            btn.addEventListener('click', () => {
                handleToolbarAction(btn.dataset.action);
            });
        });

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

    // Keyboard navigation support for nav items
    function setupKeyboardNavigation() {
        // Add tabindex and role to all nav items
        const allNavItems = document.querySelectorAll('.nav-item');
        allNavItems.forEach((item) => {
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');

            // Handle Enter and Space key presses
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
    }

    function setActiveNav(activeItem) {
        navItems.forEach((item) => { item.classList.remove('active'); });
        activeItem.classList.add('active');
    }

    function loadSection(sectionKey) {
        currentSection = sectionKey;
        var section = contentCache[sectionKey];

        if (!section) {
            // Fallback to static content if cache miss
            if (typeof RPOC_CONTENT !== 'undefined' && RPOC_CONTENT[sectionKey]) {
                section = RPOC_CONTENT[sectionKey];
            } else {
                contentArea.innerHTML = '<p>Section not found.</p>';
                return;
            }
        }

        // Configure marked options
        // Note: Marked v9+ removed built-in sanitizer. Content is trusted (internal SSAR content only).
        // If user-supplied content is ever rendered, add DOMPurify or similar sanitization.
        marked.setOptions({ breaks: true, gfm: true });

        // Parse markdown and render
        var html = marked.parse(section.content);
        contentArea.innerHTML = html;

        // Apply visual enhancements
        applyVisualEnhancements();

        contentArea.classList.add('loaded');

        // Build table of contents
        buildTOC();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ========================================
    // VISUAL ENHANCEMENT FUNCTIONS
    // ========================================

    function applyVisualEnhancements() {
        colorCodeTables();
        enhanceBlockquotes();
        styleEmergencySections();
        styleMnemonics();
        enhanceChecklists();
        addSectionIcons();
    }

    function colorCodeTables() {
        const tables = contentArea.querySelectorAll('table');

        tables.forEach((table) => {
            const cells = table.querySelectorAll('td');

            cells.forEach((cell) => {
                const text = cell.textContent.trim().toUpperCase();

                // Try exact match first (faster)
                if (EXACT_MATCH_CLASSES[text]) {
                    cell.classList.add(EXACT_MATCH_CLASSES[text]);
                    return; // Early exit on match
                }

                // Try partial matches
                for (const { pattern, className } of PARTIAL_MATCH_CLASSES) {
                    if (text.includes(pattern)) {
                        cell.classList.add(className);
                        return; // Early exit on first match
                    }
                }
            });

            // Check for weather tables and apply row styling
            const headerCells = table.querySelectorAll('th');
            let isWeatherTable = false;
            const headerMap = {};

            headerCells.forEach((th, idx) => {
                const thText = th.textContent.toUpperCase();
                if (thText === 'GO' || thText === 'CAUTION' || thText === 'NO-GO') {
                    isWeatherTable = true;
                    headerMap[idx] = thText === 'GO' ? 'weather-go' :
                                     thText === 'CAUTION' ? 'weather-caution' : 'weather-nogo';
                }
            });

            if (isWeatherTable) {
                table.querySelectorAll('tr').forEach((row) => {
                    row.querySelectorAll('td').forEach((cell, idx) => {
                        if (headerMap[idx]) {
                            cell.classList.add(headerMap[idx]);
                        }
                    });
                });
            }

            // Color code tag rows in Equipment Status Tags table
            table.querySelectorAll('tr').forEach((row) => {
                const firstCell = row.querySelector('td:first-child');
                if (firstCell) {
                    const text = firstCell.textContent.trim().toUpperCase();
                    for (const [key, color] of Object.entries(ROW_COLOR_MAP)) {
                        if (text.includes(key)) {
                            row.style.background = color;
                            break;
                        }
                    }
                }
            });
        });
    }

    function enhanceBlockquotes() {
        const blockquotes = contentArea.querySelectorAll('blockquote');

        blockquotes.forEach((bq) => {
            const text = bq.textContent.toUpperCase();

            // Critical/Important callouts
            if (text.includes('CRITICAL') || text.includes('IMPORTANT') || text.includes('MANDATORY') ||
                text.includes('NO-GO') || text.includes('DO NOT FLY')) {
                bq.classList.add('critical');
            }
            // Warning callouts
            else if (text.includes('WARNING') || text.includes('CAUTION')) {
                bq.classList.add('warning');
            }
            // Note callouts
            else if (text.includes('NOTE:') || text.startsWith('NOTE')) {
                bq.classList.add('note');
            }
        });
    }

    function styleEmergencySections() {
        const headings = contentArea.querySelectorAll('h2, h3, h4');

        headings.forEach((heading) => {
            const text = heading.textContent.toUpperCase();

            // Skip if already has icon
            if (heading.innerHTML.includes('fa-')) return;

            // Emergency-related headings
            if (text.includes('EMERGENCY') || text.includes('FLY-AWAY') || text.includes('FLYAWAY') ||
                text.includes('CRASH') || text.includes('INCIDENT') || text.includes('ACCIDENT')) {
                heading.classList.add('emergency-heading');
                heading.style.color = '#e74c3c';
                heading.innerHTML = '<i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>' + heading.innerHTML;
            }
            // Checklist/Procedure headings
            else if (text.includes('CHECKLIST') || text.includes('PROCEDURE') || text.includes('PROTOCOL')) {
                heading.innerHTML = '<i class="fas fa-clipboard-check" style="margin-right: 8px; color: #3498db;"></i>' + heading.innerHTML;
            }
            // Training headings
            else if (text.includes('TRAINING') || text.includes('ASSESSMENT') || text.includes('COMPETENCY')) {
                heading.innerHTML = '<i class="fas fa-graduation-cap" style="margin-right: 8px; color: #3498db;"></i>' + heading.innerHTML;
            }
            // Maintenance headings
            else if (text.includes('MAINTENANCE') || text.includes('INSPECTION')) {
                heading.innerHTML = '<i class="fas fa-tools" style="margin-right: 8px; color: #3498db;"></i>' + heading.innerHTML;
            }
            // Quick Reference headings (applying class for CSS)
            else if (text.includes('QUICK REFERENCE')) {
                heading.classList.add('quick-reference-heading');
            }
        });
    }

    function styleMnemonics() {
        // Find tables that look like mnemonics (DESCEND, IMSAFE, etc.)
        const tables = contentArea.querySelectorAll('table');
        const knownMnemonics = ['DESCEND', 'IMSAFE', 'DECIDE', 'OODA', 'PAVE', 'SAFETY'];

        tables.forEach((table) => {
            const rows = table.querySelectorAll('tr');
            let isMnemonic = true;
            let letters = '';

            // Check if first column contains single letters that spell something
            rows.forEach((row, idx) => {
                if (idx === 0) return; // Skip header
                const firstCell = row.querySelector('td:first-child');
                if (firstCell) {
                    const text = firstCell.textContent.trim();
                    // Check for letter or bold letter pattern
                    const letterMatch = text.match(/^\*?\*?([A-Z])\*?\*?$/);
                    if (letterMatch) {
                        letters += letterMatch[1];
                    } else if (text.length === 1 && /[A-Z]/.test(text)) {
                        letters += text;
                    } else if (text.length > 3) {
                        isMnemonic = false;
                    }
                }
            });

            if (knownMnemonics.includes(letters) || (letters.length >= 4 && letters.length <= 10 && isMnemonic)) {
                table.classList.add('mnemonic-table');

                // Style the letter cells
                rows.forEach((row, idx) => {
                    if (idx === 0) return;
                    const firstCell = row.querySelector('td:first-child');
                    if (firstCell) {
                        firstCell.style.background = 'rgba(231, 76, 60, 0.15)';
                        firstCell.style.color = '#e74c3c';
                        firstCell.style.fontWeight = '700';
                        firstCell.style.fontSize = '1.2rem';
                        firstCell.style.textAlign = 'center';
                        firstCell.style.width = '50px';
                    }
                });
            }
        });
    }

    function enhanceChecklists() {
        const cells = contentArea.querySelectorAll('td');
        const isAdminSection = currentSection === 'admin';
        let checkboxCounter = 0;

        cells.forEach((cell) => {
            const text = cell.textContent.trim();

            // Add checklist-cell class for styling
            if (text === '[ ]' || text === '[x]' || text === '[X]' || text === '[✓]') {
                cell.classList.add('checklist-cell');
            }

            // Replace [ ] with actual checkbox (interactive in admin section)
            if (text === '[ ]') {
                checkboxCounter++;
                const checkboxId = `checkbox-${checkboxCounter}`;
                if (isAdminSection) {
                    cell.innerHTML = `<input type="checkbox" id="${checkboxId}" class="compliance-checkbox" aria-label="Checklist item ${checkboxCounter}" onclick="this.parentElement.parentElement.classList.toggle('completed-row')">`;
                } else {
                    cell.innerHTML = `<input type="checkbox" id="${checkboxId}" disabled aria-label="Checklist item ${checkboxCounter}">`;
                }
                cell.style.textAlign = 'center';
            } else if (text === '[x]' || text === '[X]' || text === '[✓]') {
                checkboxCounter++;
                const checkboxId = `checkbox-${checkboxCounter}`;
                cell.innerHTML = `<input type="checkbox" id="${checkboxId}" checked disabled aria-label="Checklist item ${checkboxCounter} (completed)">`;
                cell.style.textAlign = 'center';
            }

            // Style cells that contain inline checkboxes
            if (cell.textContent.includes('[ ]')) {
                if (isAdminSection) {
                    cell.innerHTML = cell.innerHTML.replace(/\[ \]/g, () => {
                        checkboxCounter++;
                        return `<input type="checkbox" class="compliance-checkbox" aria-label="Inline checklist item ${checkboxCounter}" style="margin-right: 5px;">`;
                    });
                } else {
                    cell.innerHTML = cell.innerHTML.replace(/\[ \]/g, () => {
                        checkboxCounter++;
                        return `<input type="checkbox" disabled aria-label="Inline checklist item ${checkboxCounter}" style="margin-right: 5px;">`;
                    });
                }
            }
        });

        // Also handle list items with checkboxes (- [ ] format)
        const listItems = contentArea.querySelectorAll('li');
        listItems.forEach((li) => {
            const html = li.innerHTML;
            if (html.startsWith('[ ]')) {
                checkboxCounter++;
                const labelText = html.substring(4).replace(/<[^>]*>/g, '').trim().substring(0, 50);
                if (isAdminSection) {
                    li.innerHTML = `<input type="checkbox" class="compliance-checkbox" aria-label="${labelText}" style="margin-right: 8px;" onclick="this.parentElement.classList.toggle('completed-item')">` + html.substring(4);
                    li.style.cursor = 'pointer';
                    li.style.padding = '8px 0';
                } else {
                    li.innerHTML = `<input type="checkbox" disabled aria-label="${labelText}" style="margin-right: 8px;">` + html.substring(4);
                }
            } else if (html.startsWith('[x]') || html.startsWith('[X]')) {
                const labelText = html.substring(4).replace(/<[^>]*>/g, '').trim().substring(0, 50);
                li.innerHTML = `<input type="checkbox" checked disabled aria-label="${labelText} (completed)" style="margin-right: 8px;">` + html.substring(4);
            }
        });

        // Highlight current month in admin calendar
        if (isAdminSection) {
            highlightCurrentMonth();
        }
    }

    function highlightCurrentMonth() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
        const currentMonth = months[new Date().getMonth()];

        const cells = contentArea.querySelectorAll('td');
        cells.forEach((cell) => {
            if (cell.textContent.includes('**' + currentMonth + '**') ||
                cell.innerHTML.includes('<strong>' + currentMonth + '</strong>')) {
                cell.parentElement.classList.add('current-month');
            }

            // Also apply compliance period classes based on content
            const text = cell.textContent.trim().toUpperCase();
            if (text.includes('MONTHLY')) {
                cell.classList.add('compliance-monthly');
            } else if (text.includes('QUARTERLY')) {
                cell.classList.add('compliance-quarterly');
            } else if (text.includes('SEMI-ANNUAL')) {
                cell.classList.add('compliance-semi-annual');
            } else if (text.includes('ANNUAL')) {
                cell.classList.add('compliance-annual');
            }
        });
    }

    function addSectionIcons() {
        // Add icons to main section headers based on content
        const h2s = contentArea.querySelectorAll('h2');

        h2s.forEach((h2) => {
            // Skip if already has icon
            if (h2.innerHTML.includes('fa-')) { return; }

            const text = h2.textContent.toUpperCase();

            // Find matching icon
            for (const { patterns, icon } of SECTION_ICON_MAP) {
                if (patterns.some(pattern => text.includes(pattern))) {
                    h2.innerHTML = `<i class="fas ${icon}" style="margin-right: 10px; color: #3498db;"></i>` + h2.innerHTML;
                    return;
                }
            }
        });
    }

    // ========================================
    // EXISTING FUNCTIONALITY
    // ========================================

    function buildTOC() {
        const headings = contentArea.querySelectorAll('h2, h3');
        let tocHTML = '<ul>';

        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;

            const level = heading.tagName.toLowerCase();
            // Get text without icons
            const text = heading.textContent;

            tocHTML += `<li><a href="#${id}" class="toc-${level}">${text}</a></li>`;
        });

        tocHTML += '</ul>';
        tocContent.innerHTML = tocHTML;

        // Add click handlers
        tocContent.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const target = document.getElementById(targetId);
                if (target) {
                    // Calculate position accounting for fixed header
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update active state
                    tocContent.querySelectorAll('a').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
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
        if (!jumpConfig) { return; }

        // Check if this is a modal-type quick access
        if (jumpConfig.type === 'modal') {
            // Call the appropriate modal handler
            const handlers = {
                'showEmergencyProcedures': showEmergencyProcedures,
                'showFlyAwayScript': showFlyAwayScript,
                'showPreFlightChecklist': showPreFlightChecklist,
                'showIMSAFEChecklist': showIMSAFEChecklist,
                'showRegulationsReference': showRegulationsReference,
                'showTrainingCalendar': showTrainingCalendar,
                'showSAILAssessment': showSAILAssessment
            };
            if (handlers[jumpConfig.handler]) {
                handlers[jumpConfig.handler]();
            }
            return;
        }

        // Legacy jump behavior for weather minimums, etc.
        const navItem = document.querySelector(`[data-section="${jumpConfig.section}"]`);
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

        const results = [];

        // Search through all sections (use cache, fallback to static)
        const searchContent = contentLoaded ? contentCache : (typeof RPOC_CONTENT !== 'undefined' ? RPOC_CONTENT : {});
        Object.keys(searchContent).forEach((sectionKey) => {
            const section = searchContent[sectionKey];
            const content = section.content;

            // Split into paragraphs/sections
            const paragraphs = content.split('\n\n');
            let currentHeading = '';

            paragraphs.forEach((para) => {
                // Track headings
                const headingMatch = para.match(/^#{1,4}\s+(.+)$/m);
                if (headingMatch) {
                    currentHeading = headingMatch[1];
                }

                // Check for matches
                if (para.toLowerCase().includes(query)) {
                    results.push({
                        section: sectionKey,
                        sectionTitle: section.title,
                        heading: currentHeading || 'Overview',
                        text: para.replace(/[#*`|_\[\]]/g, '').substring(0, 300)
                    });
                }
            });
        });

        if (results.length === 0) {
            searchResults.innerHTML = '<p class="search-hint">No results found. Try different keywords.</p>';
            return;
        }

        let resultsHTML = '';
        results.slice(0, 15).forEach((result) => {
            const excerpt = highlightText(result.text, query);
            resultsHTML += `<div class="search-result-item" data-section="${result.section}" data-heading="${result.heading}">
                <div class="search-result-section"><i class="fas fa-book" style="margin-right: 5px;"></i>${result.sectionTitle}</div>
                <div class="search-result-title">${result.heading}</div>
                <div class="search-result-excerpt">${excerpt}</div>
            </div>`;
        });

        searchResults.innerHTML = resultsHTML;

        // Add click handlers to results
        searchResults.querySelectorAll('.search-result-item').forEach((item) => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                const heading = item.dataset.heading;
                closeSearchModal();
                navigateToResult(section, heading);
            });
        });
    }

    function highlightText(text, query) {
        const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        return text.replace(regex, '<mark>$1</mark>').substring(0, 200) + '...';
    }

    function navigateToResult(sectionKey, headingText) {
        // Switch to section
        const navItem = document.querySelector(`[data-section="${sectionKey}"]`);
        if (navItem) {
            setActiveNav(navItem);
            loadSection(sectionKey);

            // Scroll to heading
            setTimeout(() => {
                const headings = contentArea.querySelectorAll('h1, h2, h3, h4');
                for (const heading of headings) {
                    if (heading.textContent.includes(headingText)) {
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Highlight briefly
                        heading.style.backgroundColor = 'rgba(52, 152, 219, 0.3)';
                        heading.style.borderRadius = '4px';
                        heading.style.padding = '4px 8px';
                        heading.style.marginLeft = '-8px';
                        setTimeout(() => {
                            heading.style.backgroundColor = '';
                            heading.style.padding = '';
                            heading.style.marginLeft = '';
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

    // ========================================
    // EDIT FUNCTIONALITY
    // ========================================

    // ========================================
    // AUTHENTICATION FUNCTIONS
    // ========================================

    async function checkAuth() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        isAuthenticated = !!session;
        updateEditButtonVisibility();
        return isAuthenticated;
    }

    function updateEditButtonVisibility() {
        if (editBtn) {
            editBtn.style.display = isAuthenticated ? 'flex' : 'none';
        }
    }

    function openAdminLogin() {
        adminLoginOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        adminEmail.focus();
    }

    function closeAdminLogin() {
        adminLoginOverlay.classList.remove('active');
        document.body.style.overflow = '';
        adminEmail.value = '';
        adminPassword.value = '';
        adminLoginError.style.display = 'none';
    }

    async function handleAdminLogin() {
        const email = adminEmail.value.trim();
        const password = adminPassword.value;

        if (!email || !password) {
            showLoginError('Please enter both email and password');
            return;
        }

        adminLoginSubmit.disabled = true;
        adminLoginSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) throw error;

            isAuthenticated = true;
            updateEditButtonVisibility();
            closeAdminLogin();
            alert('Login successful! You can now edit content.');

        } catch (error) {
            showLoginError(error.message || 'Login failed. Please check your credentials.');
        } finally {
            adminLoginSubmit.disabled = false;
            adminLoginSubmit.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
        }
    }

    async function handleAdminLogout() {
        await supabaseClient.auth.signOut();
        isAuthenticated = false;
        updateEditButtonVisibility();
        closeAdminLogin();
        alert('Logged out successfully.');
    }

    function showLoginError(message) {
        adminLoginError.textContent = message;
        adminLoginError.style.display = 'block';
    }

    function openEditor() {
        // Check authentication first
        if (!isAuthenticated) {
            openAdminLogin();
            return;
        }

        const section = contentCache[currentSection];
        if (!section) {
            alert('No section loaded to edit.');
            return;
        }

        editTitle.textContent = `Edit: ${section.title}`;
        editContent.value = section.content;
        editOverlay.classList.add('active');
        isEditing = true;
        document.body.style.overflow = 'hidden';

        // Update preview
        updateEditPreview();
    }

    function closeEditor() {
        editOverlay.classList.remove('active');
        isEditing = false;
        document.body.style.overflow = '';
    }

    function toggleEditPreview() {
        if (editViewMode === 'edit') {
            editViewMode = 'split';
            editBody.classList.add('split-mode');
            editBody.classList.remove('preview-mode');
            editPreviewToggle.innerHTML = '<i class="fas fa-columns"></i> Split';
        } else if (editViewMode === 'split') {
            editViewMode = 'preview';
            editBody.classList.remove('split-mode');
            editBody.classList.add('preview-mode');
            editPreviewToggle.innerHTML = '<i class="fas fa-edit"></i> Edit';
        } else {
            editViewMode = 'edit';
            editBody.classList.remove('split-mode', 'preview-mode');
            editPreviewToggle.innerHTML = '<i class="fas fa-eye"></i> Preview';
        }
        updateEditPreview();
    }

    function updateEditPreview() {
        if (editViewMode !== 'edit') {
            marked.setOptions({ breaks: true, gfm: true });
            editPreview.innerHTML = marked.parse(editContent.value);
        }
    }

    // Update preview on content change
    if (editContent) {
        editContent.addEventListener('input', () => {
            if (editViewMode !== 'edit') {
                updateEditPreview();
            }
        });
    }

    async function saveContent() {
        const content = editContent.value;

        // Save current scroll position
        const savedScrollY = window.scrollY;

        // Show saving state
        editSave.innerHTML = '<i class="fas fa-spinner"></i> Saving...';
        editSave.disabled = true;

        try {
            const { data, error } = await supabaseClient
                .from('rpoc_content')
                .update({
                    content: content,
                    updated_at: new Date().toISOString(),
                    updated_by: 'web-editor'
                })
                .eq('section_key', currentSection)
                .select();

            if (error) throw error;

            // Update local cache
            contentCache[currentSection].content = content;

            // Reload the section to show changes
            loadSection(currentSection);

            // Close editor
            closeEditor();

            // Restore scroll position after content loads
            requestAnimationFrame(() => {
                setTimeout(() => {
                    window.scrollTo(0, savedScrollY);
                }, 50);
            });

            // Show success message
            showNotification('Content saved successfully!', 'success');

        } catch (err) {
            console.error('Save failed:', err);
            showNotification('Failed to save: ' + err.message, 'error');
        } finally {
            editSave.innerHTML = '<i class="fas fa-save"></i> Save';
            editSave.disabled = false;
        }
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10001;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function handleToolbarAction(action) {
        const textarea = editContent;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selectedText = text.substring(start, end);

        let insertion = '';
        let cursorOffset = 0;

        switch (action) {
            case 'bold':
                insertion = `**${selectedText || 'bold text'}**`;
                cursorOffset = selectedText ? insertion.length : 2;
                break;
            case 'italic':
                insertion = `*${selectedText || 'italic text'}*`;
                cursorOffset = selectedText ? insertion.length : 1;
                break;
            case 'h2':
                insertion = `## ${selectedText || 'Heading'}`;
                cursorOffset = insertion.length;
                break;
            case 'h3':
                insertion = `### ${selectedText || 'Heading'}`;
                cursorOffset = insertion.length;
                break;
            case 'ul':
                insertion = `- ${selectedText || 'List item'}`;
                cursorOffset = insertion.length;
                break;
            case 'ol':
                insertion = `1. ${selectedText || 'List item'}`;
                cursorOffset = insertion.length;
                break;
            case 'table':
                insertion = `\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell 1   | Cell 2   | Cell 3   |\n`;
                cursorOffset = insertion.length;
                break;
            case 'link':
                insertion = `[${selectedText || 'link text'}](url)`;
                cursorOffset = selectedText ? insertion.length - 1 : 1;
                break;
            case 'hr':
                insertion = `\n\n---\n\n`;
                cursorOffset = insertion.length;
                break;
        }

        const newText = text.substring(0, start) + insertion + text.substring(end);
        textarea.value = newText;
        textarea.focus();
        textarea.setSelectionRange(start + cursorOffset, start + cursorOffset);

        updateEditPreview();
    }
});

// Quick Access Configuration - now with modal support
var QUICK_ACCESS = {
    'emergency-procedures': { type: 'modal', handler: 'showEmergencyProcedures' },
    'fly-away': { type: 'modal', handler: 'showFlyAwayScript' },
    'pre-flight': { type: 'modal', handler: 'showPreFlightChecklist' },
    'imsafe': { type: 'modal', handler: 'showIMSAFEChecklist' },
    'regulations': { type: 'modal', handler: 'showRegulationsReference' },
    'calendar': { type: 'modal', handler: 'showTrainingCalendar' },
    'sail-assessment': { type: 'modal', handler: 'showSAILAssessment' }
};

// ========================================
// QUICK ACCESS MODAL SYSTEM
// ========================================

var qaOverlay = document.getElementById('quick-access-overlay');
var qaContent = document.getElementById('quick-access-content');
var qaTitleText = document.getElementById('quick-access-title-text');
var qaCloseBtn = document.getElementById('close-quick-access');
var qaBackBtn = document.getElementById('quick-access-back');
var qaCurrentView = 'main';

// Close button handler
if (qaCloseBtn) {
    qaCloseBtn.addEventListener('click', closeQuickAccess);
}

// Back button handler
if (qaBackBtn) {
    qaBackBtn.addEventListener('click', function() {
        showEmergencyProcedures();
    });
}

// Download button handler
var qaDownloadBtn = document.getElementById('qa-download-btn');
if (qaDownloadBtn) {
    qaDownloadBtn.addEventListener('click', downloadQuickAccessContent);
}

function downloadQuickAccessContent() {
    var title = qaTitleText.textContent || 'SSAR Document';
    var content = qaContent.innerHTML;

    // Create print window with professional styling
    var printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${title} - SSAR RPOC</title>
            <style>
                * { box-sizing: border-box; }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    padding: 40px;
                    max-width: 900px;
                    margin: 0 auto;
                    color: #1a1a2e;
                    line-height: 1.6;
                }
                .header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                    padding-bottom: 16px;
                    border-bottom: 2px solid #1e3a5f;
                }
                .header img { height: 50px; }
                .header-text h1 { margin: 0; font-size: 18px; color: #1e3a5f; }
                .header-text p { margin: 4px 0 0; font-size: 12px; color: #666; }
                h2, h3 { color: #1e3a5f; margin-top: 24px; }
                h3 { font-size: 14px; border-bottom: 1px solid #ddd; padding-bottom: 8px; }
                table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 12px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
                th { background: #f5f6fa; font-weight: 600; }
                ul { margin: 4px 0; padding-left: 20px; }
                li { margin-bottom: 2px; }
                .qa-procedure-header { margin-bottom: 24px; }
                .qa-procedure-title { font-size: 20px; font-weight: 700; color: #1e3a5f; }
                .qa-procedure-subtitle { font-size: 12px; color: #666; margin-top: 4px; }
                .qa-procedure-icon { display: none; }
                .sail-level, .sail-status {
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 3px;
                    font-size: 10px;
                    font-weight: 600;
                }
                .sail-status.met { background: #d5f5e3; color: #1e8449; }
                .sail-status.partial { background: #eee; color: #666; }
                .sail-level { background: #f5f6fa; color: #333; }
                .qa-info-box, .qa-warning-box {
                    padding: 12px;
                    margin: 16px 0;
                    border-left: 3px solid #1e3a5f;
                    background: #f8f9fa;
                }
                .qa-warning-box { border-color: #666; }
                .footer {
                    margin-top: 40px;
                    padding-top: 16px;
                    border-top: 1px solid #ddd;
                    font-size: 10px;
                    color: #666;
                    text-align: center;
                }
                @media print {
                    body { padding: 20px; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="header-text">
                    <h1>SSAR RPAS Operator Certificate</h1>
                    <p>${title}</p>
                </div>
            </div>
            ${content}
            <div class="footer">
                <p>Squamish Search and Rescue - RPAS Policy Manual | Generated: ${new Date().toLocaleDateString()}</p>
                <p>CONFIDENTIAL - This document is the property of Squamish Search and Rescue</p>
            </div>
            <script>
                window.onload = function() { window.print(); }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Close on overlay click
if (qaOverlay) {
    qaOverlay.addEventListener('click', function(e) {
        if (e.target === qaOverlay) closeQuickAccess();
    });
}

// Close on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !qaOverlay.classList.contains('hidden')) {
        closeQuickAccess();
    }
});

function openQuickAccess(title) {
    qaTitleText.textContent = title;
    qaOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeQuickAccess() {
    qaOverlay.classList.add('hidden');
    document.body.style.overflow = '';
    qaBackBtn.classList.add('hidden');
    qaCurrentView = 'main';
}

// ========================================
// RESIZABLE PANELS
// ========================================

(function initResizablePanels() {
    const sidebar = document.querySelector('.sidebar');
    const tocSidebar = document.querySelector('.toc-sidebar');
    const resizeSidebar = document.getElementById('resize-sidebar');
    const resizeToc = document.getElementById('resize-toc');
    const mainContent = document.querySelector('.main-content');

    let isResizing = false;
    let currentHandle = null;
    let startX = 0;
    let startWidth = 0;

    // Load saved widths from localStorage
    const savedSidebarWidth = localStorage.getItem('sidebarWidth');
    const savedTocWidth = localStorage.getItem('tocWidth');

    if (savedSidebarWidth && sidebar) {
        sidebar.style.width = savedSidebarWidth + 'px';
        document.documentElement.style.setProperty('--sidebar-width', savedSidebarWidth + 'px');
        if (resizeSidebar) resizeSidebar.style.left = savedSidebarWidth + 'px';
        if (mainContent) mainContent.style.marginLeft = savedSidebarWidth + 'px';
    }

    if (savedTocWidth && tocSidebar) {
        tocSidebar.style.width = savedTocWidth + 'px';
        document.documentElement.style.setProperty('--toc-width', savedTocWidth + 'px');
    }

    function startResize(e, handle, element, cssVar, minWidth, maxWidth) {
        isResizing = true;
        currentHandle = handle;
        startX = e.clientX;
        startWidth = element.offsetWidth;

        handle.classList.add('dragging');
        document.body.classList.add('resizing');

        document.addEventListener('mousemove', doResize);
        document.addEventListener('mouseup', stopResize);

        function doResize(e) {
            if (!isResizing) return;

            const diff = e.clientX - startX;
            let newWidth = startWidth + diff;

            // Clamp to min/max
            newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

            element.style.width = newWidth + 'px';
            document.documentElement.style.setProperty(cssVar, newWidth + 'px');

            // Update related elements
            if (element === sidebar) {
                if (resizeSidebar) resizeSidebar.style.left = newWidth + 'px';
                if (mainContent) mainContent.style.marginLeft = newWidth + 'px';
            }
        }

        function stopResize() {
            isResizing = false;
            handle.classList.remove('dragging');
            document.body.classList.remove('resizing');

            document.removeEventListener('mousemove', doResize);
            document.removeEventListener('mouseup', stopResize);

            // Save to localStorage
            if (element === sidebar) {
                localStorage.setItem('sidebarWidth', element.offsetWidth);
            } else if (element === tocSidebar) {
                localStorage.setItem('tocWidth', element.offsetWidth);
            }
        }
    }

    // Sidebar resize
    if (resizeSidebar && sidebar) {
        resizeSidebar.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startResize(e, resizeSidebar, sidebar, '--sidebar-width', 180, 400);
        });
    }

    // TOC resize
    if (resizeToc && tocSidebar) {
        resizeToc.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startResize(e, resizeToc, tocSidebar, '--toc-width', 150, 350);
        });
    }

    // Double-click to reset
    if (resizeSidebar) {
        resizeSidebar.addEventListener('dblclick', () => {
            const defaultWidth = 280;
            sidebar.style.width = defaultWidth + 'px';
            document.documentElement.style.setProperty('--sidebar-width', defaultWidth + 'px');
            resizeSidebar.style.left = defaultWidth + 'px';
            if (mainContent) mainContent.style.marginLeft = defaultWidth + 'px';
            localStorage.removeItem('sidebarWidth');
        });
    }

    if (resizeToc) {
        resizeToc.addEventListener('dblclick', () => {
            const defaultWidth = 220;
            tocSidebar.style.width = defaultWidth + 'px';
            document.documentElement.style.setProperty('--toc-width', defaultWidth + 'px');
            localStorage.removeItem('tocWidth');
        });
    }
})();

// ========================================
// EMERGENCY PROCEDURES - Card Selection
// ========================================

function showEmergencyProcedures() {
    openQuickAccess('Emergency Procedures');
    qaBackBtn.classList.add('hidden');
    qaCurrentView = 'emergency-list';

    qaContent.innerHTML = `
        <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 0.95rem;">
            <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
            Select an emergency procedure for detailed response steps. Procedures are organized by severity.
        </p>

        <h3 style="color: var(--danger-red); margin-bottom: 16px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
            <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>Critical Emergencies
        </h3>
        <div class="ep-card-grid">
            <div class="ep-card critical" onclick="showProcedure('flyaway')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-plane-departure"></i></div>
                <div class="ep-card-title">Fly-Away Response</div>
                <div class="ep-card-description">Aircraft not responding to commands. Immediate FIC notification required.</div>
            </div>

            <div class="ep-card critical" onclick="showProcedure('descend')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="ep-card-title">DESCEND Protocol</div>
                <div class="ep-card-description">Critical traffic threat. Immediate altitude reduction to avoid collision.</div>
            </div>

            <div class="ep-card critical" onclick="showProcedure('crash')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-bomb"></i></div>
                <div class="ep-card-title">Crash/Impact Response</div>
                <div class="ep-card-description">Aircraft crash or collision. Scene safety and TSB reporting.</div>
            </div>

            <div class="ep-card critical" onclick="showProcedure('flighttermination')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-power-off"></i></div>
                <div class="ep-card-title">Flight Termination</div>
                <div class="ep-card-description">Kill switch / motor stop. Use when crash is imminent.</div>
            </div>
        </div>

        <h3 style="color: var(--warning-orange); margin: 32px 0 16px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
            <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>System Failures
        </h3>
        <div class="ep-card-grid">
            <div class="ep-card warning" onclick="showProcedure('lostlink')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-wifi"></i></div>
                <div class="ep-card-title">Lost Link (C2 Failure)</div>
                <div class="ep-card-description">Loss of command and control link. Wait for failsafe RTH.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('gpsfailure')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-satellite"></i></div>
                <div class="ep-card-title">GPS Failure</div>
                <div class="ep-card-description">GPS degradation or loss. ATTI mode flying procedures.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('controlstation')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-tablet-alt"></i></div>
                <div class="ep-card-title">Control Station Failure</div>
                <div class="ep-card-description">Screen freeze, tablet failure, or controller signal lost.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('mechanical')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-cog"></i></div>
                <div class="ep-card-title">Mechanical Failure</div>
                <div class="ep-card-description">Motor noise, vibration, loss of lift. Land immediately.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('lowbattery')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-battery-quarter"></i></div>
                <div class="ep-card-title">Low Battery Emergency</div>
                <div class="ep-card-description">Critical battery level requiring immediate landing.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('commfailure')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-headset"></i></div>
                <div class="ep-card-title">Crew Comm Failure</div>
                <div class="ep-card-description">Radio failure between PIC and Visual Observer.</div>
            </div>
        </div>

        <h3 style="color: var(--warning-orange); margin: 32px 0 16px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
            <i class="fas fa-cloud" style="margin-right: 8px;"></i>Environmental Hazards
        </h3>
        <div class="ep-card-grid">
            <div class="ep-card warning" onclick="showProcedure('lostvlos')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-eye-slash"></i></div>
                <div class="ep-card-title">Loss of VLOS</div>
                <div class="ep-card-description">Fog, sun glare, or terrain obstruction. Visual lost.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('imcentry')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-cloud"></i></div>
                <div class="ep-card-title">Inadvertent IMC Entry</div>
                <div class="ep-card-description">Aircraft enters cloud, fog, or reduced visibility.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('icing')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-snowflake"></i></div>
                <div class="ep-card-title">Icing Conditions</div>
                <div class="ep-card-description">Ice accumulation affecting aircraft performance.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('cfit')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-mountain"></i></div>
                <div class="ep-card-title">CFIT Prevention</div>
                <div class="ep-card-description">Controlled flight into terrain. Mountain operations.</div>
            </div>
        </div>

        <h3 style="color: var(--info-blue); margin: 32px 0 16px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;">
            <i class="fas fa-procedures" style="margin-right: 8px;"></i>Personnel & Landing
        </h3>
        <div class="ep-card-grid">
            <div class="ep-card info" onclick="showProcedure('emergencylanding')">
                <div class="ep-card-icon"><i class="fas fa-plane-arrival"></i></div>
                <div class="ep-card-title">Emergency Landing</div>
                <div class="ep-card-description">Site selection and execution for immediate landing.</div>
            </div>

            <div class="ep-card info" onclick="showProcedure('injury')">
                <div class="ep-card-icon"><i class="fas fa-first-aid"></i></div>
                <div class="ep-card-title">Injury Response</div>
                <div class="ep-card-description">Crew or bystander injury during operations.</div>
            </div>

            <div class="ep-card info" onclick="showProcedure('fire')">
                <div class="ep-card-icon"><i class="fas fa-fire"></i></div>
                <div class="ep-card-title">Fire Emergency</div>
                <div class="ep-card-description">Battery fire or equipment fire response.</div>
            </div>

            <div class="ep-card info" onclick="showProcedure('traffic')">
                <div class="ep-card-icon"><i class="fas fa-plane"></i></div>
                <div class="ep-card-title">Traffic Alert Response</div>
                <div class="ep-card-description">ADS-B alert or visual traffic sighting.</div>
            </div>
        </div>
    `;
}

function showProcedure(procedureId) {
    qaBackBtn.classList.remove('hidden');
    qaCurrentView = 'procedure-detail';

    var procedures = {
        'flyaway': getFlyAwayProcedure(),
        'descend': getDescendProcedure(),
        'crash': getCrashProcedure(),
        'lostlink': getLostLinkProcedure(),
        'lowbattery': getLowBatteryProcedure(),
        'icing': getIcingProcedure(),
        'injury': getInjuryProcedure(),
        'fire': getFireProcedure(),
        'gpsfailure': getGPSFailureProcedure(),
        'controlstation': getControlStationProcedure(),
        'mechanical': getMechanicalProcedure(),
        'commfailure': getCommFailureProcedure(),
        'lostvlos': getLostVLOSProcedure(),
        'imcentry': getIMCEntryProcedure(),
        'cfit': getCFITProcedure(),
        'emergencylanding': getEmergencyLandingProcedure(),
        'traffic': getTrafficAlertProcedure(),
        'flighttermination': getFlightTerminationProcedure()
    };

    qaContent.innerHTML = procedures[procedureId] || '<p>Procedure not found.</p>';

    // Add checklist interactivity
    setupChecklistInteractivity();
}

function setupChecklistInteractivity() {
    var items = qaContent.querySelectorAll('.qa-checklist-item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('checked');
            var checkbox = item.querySelector('.qa-checklist-checkbox');
            if (item.classList.contains('checked')) {
                checkbox.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                checkbox.innerHTML = '';
            }
        });
    });
}

// ========================================
// INDIVIDUAL EMERGENCY PROCEDURES
// ========================================

function getFlyAwayProcedure() {
    qaTitleText.textContent = 'Fly-Away Response';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon"><i class="fas fa-plane-departure"></i></div>
                <div class="qa-procedure-title">FLY-AWAY RESPONSE</div>
                <div class="qa-procedure-subtitle">Complete loss of aircraft control - IMMEDIATE ACTION REQUIRED</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> IMMEDIATE ACTIONS</h4>
                <ul>
                    <li><strong>ANNOUNCE:</strong> "FLY-AWAY! FLY-AWAY!" - Alert all crew</li>
                    <li><strong>TOGGLE:</strong> Flight modes P → A → P rapidly</li>
                    <li><strong>TRIGGER:</strong> Press RTH button immediately</li>
                    <li><strong>VO TRACKS:</strong> Maintain visual, note heading and speed</li>
                </ul>
            </div>

            <div class="qa-emergency-call">
                <div class="qa-emergency-call-title">CALL FIC KAMLOOPS IMMEDIATELY</div>
                <div class="qa-emergency-call-number"><a href="tel:250-376-7045">250-376-7045</a></div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"FLY-AWAY! FLY-AWAY!" - Shout clearly to alert all crew members</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">TOGGLE FLIGHT MODES</div>
                        <div class="qa-mnemonic-action">Switch P → A → P rapidly (3 times minimum)</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">TRIGGER RTH</div>
                        <div class="qa-mnemonic-action">Press and hold RTH button for 3 seconds</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">VO TRACKS</div>
                        <div class="qa-mnemonic-action">Visual Observer maintains visual contact, reports heading, altitude, speed</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CALL FIC</div>
                        <div class="qa-mnemonic-action">250-376-7045 - Report: Aircraft type, last known position, heading, altitude</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">6</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Record time, location, conditions, all actions taken. Pull flight logs.</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>FIC Information to Provide</h4>
                    <p>Aircraft: DJI M30T or M4TD • Last position/heading • Altitude AGL • Flight time remaining • Your contact info</p>
                </div>
            </div>

            <table class="qa-reference-table">
                <tr><th>Contact</th><th>Number</th><th>When</th></tr>
                <tr><td>FIC Kamloops (Direct)</td><td><strong>250-376-7045</strong></td><td>IMMEDIATELY</td></tr>
                <tr><td>FIC Kamloops (Toll-Free)</td><td>1-866-541-4101</td><td>Backup</td></tr>
                <tr><td>TSB Hotline</td><td>1-800-387-3557</td><td>Within 24 hours</td></tr>
                <tr><td>Chief Pilot</td><td>As per contact list</td><td>ASAP</td></tr>
            </table>
        </div>
    `;
}

function getDescendProcedure() {
    qaTitleText.textContent = 'DESCEND Protocol';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="qa-procedure-title">DESCEND PROTOCOL</div>
                <div class="qa-procedure-subtitle">Critical Traffic Threat Response</div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">D</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DESCEND IMMEDIATELY</div>
                        <div class="qa-mnemonic-action">Announce "DESCEND, DESCEND, DESCEND" - Begin immediate altitude reduction</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">E</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">EVALUATE</div>
                        <div class="qa-mnemonic-action">Assess threat trajectory, closure rate, and altitude</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">S</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">SWITCH</div>
                        <div class="qa-mnemonic-action">Take manual control - disengage any automated modes</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">C</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CLEAR</div>
                        <div class="qa-mnemonic-action">Move laterally away from threat flight path</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">E</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">EXECUTE</div>
                        <div class="qa-mnemonic-action">Rapid descent to safe altitude (below 50' AGL if needed)</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">N</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">NOTIFY</div>
                        <div class="qa-mnemonic-action">Inform crew when clear: "CLEAR OF TRAFFIC"</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">D</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Record aircraft type, altitude, heading for incident report</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Key Principle</h4>
                    <p>Manned aircraft ALWAYS have right of way. Descend immediately - do not attempt to climb above traffic.</p>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>If Traffic Conflict Occurs</h4>
                    <p>Report near-miss or actual collision to NAV CANADA and TSB immediately. Document everything.</p>
                </div>
            </div>
        </div>
    `;
}

function getCrashProcedure() {
    qaTitleText.textContent = 'Crash/Impact Response';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon"><i class="fas fa-bomb"></i></div>
                <div class="qa-procedure-title">CRASH/IMPACT RESPONSE</div>
                <div class="qa-procedure-subtitle">Aircraft crash or collision procedure</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> PRIORITY ORDER</h4>
                <ul>
                    <li><strong>1. PEOPLE</strong> - Any injuries? Call 911 if needed</li>
                    <li><strong>2. PROPERTY</strong> - Damage to structures, vehicles, other property?</li>
                    <li><strong>3. AIRCRAFT</strong> - Secure and document</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">SECURE THE AREA</div>
                        <div class="qa-mnemonic-action">Clear bystanders, mark crash site, do not move aircraft</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ASSESS INJURIES</div>
                        <div class="qa-mnemonic-action">Check all personnel and bystanders. Call 911 if any injuries.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">BATTERY SAFETY</div>
                        <div class="qa-mnemonic-action">If battery damaged/swelling: DO NOT TOUCH. Keep 10m distance. Have fire extinguisher ready.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Photos from multiple angles. GPS coordinates. DO NOT move debris.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">NOTIFY</div>
                        <div class="qa-mnemonic-action">Chief Pilot immediately. TSB if reportable occurrence.</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>TSB Reportable?</h4>
                    <p>Report to TSB (1-800-387-3557) if: Serious injury to any person, significant property damage, or aircraft lost.</p>
                </div>
            </div>
        </div>
    `;
}

function getLostLinkProcedure() {
    qaTitleText.textContent = 'Lost Link Procedure';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-wifi"></i></div>
                <div class="qa-procedure-title">LOST LINK PROCEDURE</div>
                <div class="qa-procedure-subtitle">Loss of command and control link</div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Pre-Configured Failsafe Actions</h4>
                    <p>M30T/M4TD will automatically execute RTH after signal loss timeout (default 11 seconds)</p>
                </div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"LOST LINK" - Alert crew. Note time and last known position.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">VO TRACKS</div>
                        <div class="qa-mnemonic-action">Visual Observer maintains visual contact. Reports aircraft behavior.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">WAIT FOR RTH</div>
                        <div class="qa-mnemonic-action">Aircraft should initiate RTH within 11 seconds. Watch for climb to RTH altitude.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">REPOSITION</div>
                        <div class="qa-mnemonic-action">If no RTH, move controller to clear line of sight with aircraft.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">PREPARE FOR LANDING</div>
                        <div class="qa-mnemonic-action">Clear home point area. Be ready to take control when link restores.</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>If Aircraft Does Not RTH</h4>
                    <p>Treat as FLY-AWAY. Call FIC Kamloops: 250-376-7045</p>
                </div>
            </div>
        </div>
    `;
}

function getLowBatteryProcedure() {
    qaTitleText.textContent = 'Low Battery Emergency';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-battery-quarter"></i></div>
                <div class="qa-procedure-title">LOW BATTERY EMERGENCY</div>
                <div class="qa-procedure-subtitle">Critical battery level response</div>
            </div>

            <table class="qa-reference-table">
                <tr><th>Battery Level</th><th>Action Required</th><th>Behavior</th></tr>
                <tr style="background: rgba(243, 156, 18, 0.15)"><td><strong>30%</strong></td><td>Low Battery Warning</td><td>Return to home area</td></tr>
                <tr style="background: rgba(231, 76, 60, 0.15)"><td><strong>20%</strong></td><td>Critical Battery</td><td>Initiate RTH</td></tr>
                <tr style="background: rgba(231, 76, 60, 0.3)"><td><strong>10%</strong></td><td>Emergency Landing</td><td>Auto-land in place</td></tr>
            </table>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"LOW BATTERY - [percentage]%" - Alert crew to battery status</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">IDENTIFY LANDING ZONE</div>
                        <div class="qa-mnemonic-action">Nearest safe landing area. Consider: terrain, obstacles, wind</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DIRECT ROUTE</div>
                        <div class="qa-mnemonic-action">Fly direct to landing zone. Cancel any automated missions.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DESCEND</div>
                        <div class="qa-mnemonic-action">Reduce altitude to minimize flight time to ground</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">LAND</div>
                        <div class="qa-mnemonic-action">Controlled landing before forced auto-land</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Prevention</h4>
                    <p>Plan missions to land with 30% minimum. Account for headwinds, altitude, and temperature effects on battery.</p>
                </div>
            </div>
        </div>
    `;
}

function getIcingProcedure() {
    qaTitleText.textContent = 'Icing Conditions';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-snowflake"></i></div>
                <div class="qa-procedure-title">ICING CONDITIONS</div>
                <div class="qa-procedure-subtitle">Ice accumulation response procedure</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> ICING INDICATORS</h4>
                <ul>
                    <li>Visible ice on propellers or fuselage</li>
                    <li>Unusual vibration or motor noise</li>
                    <li>Decreased performance / higher power consumption</li>
                    <li>Erratic flight behavior</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"ICING SUSPECTED" or "ICING CONFIRMED" - Alert crew</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DESCEND</div>
                        <div class="qa-mnemonic-action">Move to warmer altitude if possible (inversion layer)</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">RETURN</div>
                        <div class="qa-mnemonic-action">Initiate immediate RTH or direct route to landing zone</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">INCREASE POWER MARGIN</div>
                        <div class="qa-mnemonic-action">Fly slower, maintain extra altitude margin for approach</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CONTROLLED LANDING</div>
                        <div class="qa-mnemonic-action">Land immediately at safe location</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>NO-GO Conditions</h4>
                    <p>Do not launch if: Active precipitation + temps below 5°C, visible moisture + temps below 0°C, or freezing fog present.</p>
                </div>
            </div>
        </div>
    `;
}

function getInjuryProcedure() {
    qaTitleText.textContent = 'Injury Response';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-first-aid"></i></div>
                <div class="qa-procedure-title">INJURY RESPONSE</div>
                <div class="qa-procedure-subtitle">Crew or bystander injury procedure</div>
            </div>

            <div class="qa-emergency-call">
                <div class="qa-emergency-call-title">LIFE-THREATENING INJURY?</div>
                <div class="qa-emergency-call-number"><a href="tel:911">CALL 911</a></div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CEASE OPERATIONS</div>
                        <div class="qa-mnemonic-action">Land aircraft immediately. All focus on injured person.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ASSESS</div>
                        <div class="qa-mnemonic-action">Determine severity. Is person conscious? Breathing? Bleeding?</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CALL FOR HELP</div>
                        <div class="qa-mnemonic-action">911 for serious injuries. SAR medical personnel if on-scene.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">FIRST AID</div>
                        <div class="qa-mnemonic-action">Provide first aid within your training level. Do not move spine injuries.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Record incident details. Report to Chief Pilot. TSB if serious.</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>TSB Reporting Requirement</h4>
                    <p>Serious injury (requiring hospitalization) must be reported to TSB within 24 hours: 1-800-387-3557</p>
                </div>
            </div>
        </div>
    `;
}

function getFireProcedure() {
    qaTitleText.textContent = 'Fire Emergency';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon"><i class="fas fa-fire"></i></div>
                <div class="qa-procedure-title">FIRE EMERGENCY</div>
                <div class="qa-procedure-subtitle">Battery fire or equipment fire response</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> LIPO BATTERY FIRE - CRITICAL</h4>
                <ul>
                    <li><strong>DO NOT</strong> use water on lithium battery fires</li>
                    <li><strong>EVACUATE</strong> all personnel to 10m minimum distance</li>
                    <li><strong>TOXIC FUMES</strong> - Move upwind, do not inhale smoke</li>
                    <li><strong>CALL 911</strong> if fire spreads or cannot be controlled</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">EVACUATE</div>
                        <div class="qa-mnemonic-action">"FIRE! FIRE!" - Clear all personnel to 10m minimum. Move upwind.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CALL 911</div>
                        <div class="qa-mnemonic-action">If fire cannot be immediately controlled or is spreading</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">EXTINGUISH (if safe)</div>
                        <div class="qa-mnemonic-action">Use Class D extinguisher, dry sand, or fire blanket. NO WATER on LiPo.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CONTAIN</div>
                        <div class="qa-mnemonic-action">If battery is swelling but not yet on fire: move to fireproof container or sand</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">MONITOR</div>
                        <div class="qa-mnemonic-action">LiPo fires can reignite. Monitor for 30+ minutes after fire out.</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Battery Fire Signs</h4>
                    <p>Swelling, hissing, smoking, unusual heat, sweet/chemical smell. If any signs: EVACUATE and prepare for fire.</p>
                </div>
            </div>
        </div>
    `;
}

function getGPSFailureProcedure() {
    qaTitleText.textContent = 'GPS Failure';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-satellite"></i></div>
                <div class="qa-procedure-title">GPS FAILURE</div>
                <div class="qa-procedure-subtitle">GPS degradation or complete loss - ATTI mode procedures</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> GPS FAILURE RECOGNITION</h4>
                <ul>
                    <li>Satellite count drops below 5</li>
                    <li>"Weak GPS Signal" warning displayed</li>
                    <li>Position accuracy warning</li>
                    <li>Aircraft switches to ATTI mode automatically</li>
                    <li>Erratic aircraft behavior</li>
                    <li>Compass/IMU warning messages</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"GPS FAILURE" - Alert crew to situation</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">MAINTAIN ALTITUDE</div>
                        <div class="qa-mnemonic-action">Do not climb or descend initially - stabilize the aircraft</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ASSUME MANUAL CONTROL</div>
                        <div class="qa-mnemonic-action">Switch to manual/ATTI mode. Be prepared for drift.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ORIENT</div>
                        <div class="qa-mnemonic-action">Identify aircraft position visually. VO assists with orientation.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">NAVIGATE</div>
                        <div class="qa-mnemonic-action">Use visual references and compass heading to navigate</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">6</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DESCEND</div>
                        <div class="qa-mnemonic-action">Reduce altitude to maintain clear VLOS</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">7</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">RETURN</div>
                        <div class="qa-mnemonic-action">Fly aircraft back toward operator position</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">8</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">LAND</div>
                        <div class="qa-mnemonic-action">Land as soon as safely possible</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">9</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Record incident details for reporting</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>ATTI Mode Flying Tips</h4>
                    <p>Aircraft will drift with wind - anticipate and compensate. Use small, smooth control inputs. Compass heading and altitude/barometer remain available.</p>
                </div>
            </div>
        </div>
    `;
}

function getControlStationProcedure() {
    qaTitleText.textContent = 'Control Station Failure';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-tablet-alt"></i></div>
                <div class="qa-procedure-title">CONTROL STATION FAILURE</div>
                <div class="qa-procedure-subtitle">Screen freeze, tablet failure, or controller signal lost</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> SYMPTOMS</h4>
                <ul>
                    <li>Screen freezes or goes black</li>
                    <li>Tablet battery dies</li>
                    <li>Controller signal lost indicator</li>
                    <li>App crashes or becomes unresponsive</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"Control Station Failure" - Alert crew</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DO NOT TOUCH STICKS</div>
                        <div class="qa-mnemonic-action">Prevent erratic inputs - keep hands off control sticks</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ASSESS STABILITY</div>
                        <div class="qa-mnemonic-action">Is aircraft hovering stable? VO confirms position.</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">IF STABLE - RESTART</div>
                        <div class="qa-mnemonic-action">Attempt to restart app or swap USB cable</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">IF DRIFTING - RTH</div>
                        <div class="qa-mnemonic-action">Trigger RTH button on hardware controller</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">6</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">WAIT / PREPARE</div>
                        <div class="qa-mnemonic-action">If no control within 30 sec, prepare for Lost Link Auto-RTH</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Key Point</h4>
                    <p>The hardware controller RTH button works independently of the screen/app. Use it if the app is unresponsive.</p>
                </div>
            </div>
        </div>
    `;
}

function getMechanicalProcedure() {
    qaTitleText.textContent = 'Mechanical Failure';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-cog"></i></div>
                <div class="qa-procedure-title">MECHANICAL FAILURE</div>
                <div class="qa-procedure-subtitle">Motor noise, vibration, or loss of lift - Land immediately</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> RECOGNITION SYMPTOMS</h4>
                <ul>
                    <li>Unusual motor noise or grinding</li>
                    <li>Excessive vibration</li>
                    <li>Loss of lift or erratic altitude</li>
                    <li>Battery voltage sag</li>
                    <li>Uncommanded yaw or roll</li>
                    <li>Propeller strike / damage indicators</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"Mechanical Failure. Landing Immediately."</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">IDENTIFY LANDING ZONE</div>
                        <div class="qa-mnemonic-action">Nearest safe area, away from people</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">FLY ATTI MODE</div>
                        <div class="qa-mnemonic-action">If control exists, use ATTI mode for landing</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">LAND IMMEDIATELY</div>
                        <div class="qa-mnemonic-action">Do NOT attempt RTH if far away - land at nearest safe point</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">LOCKOUT</div>
                        <div class="qa-mnemonic-action">Post-flight: Tag equipment LOCKOUT until inspected</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Critical Warning</h4>
                    <p>Do NOT attempt long-distance RTH with mechanical failure. Aircraft may lose control during extended flight. Land at nearest safe point.</p>
                </div>
            </div>
        </div>
    `;
}

function getCommFailureProcedure() {
    qaTitleText.textContent = 'Crew Communication Failure';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-headset"></i></div>
                <div class="qa-procedure-title">CREW COMM FAILURE</div>
                <div class="qa-procedure-subtitle">Radio failure between PIC and Visual Observer</div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">VO: VISUAL SIGNAL</div>
                        <div class="qa-mnemonic-action">Use pre-briefed hand signals: "Wave Off" (both arms) or "Land" (arms down)</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">PIC: HOVER</div>
                        <div class="qa-mnemonic-action">Immediately bring RPAS to hover and hold position</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ATTEMPT RESTORE</div>
                        <div class="qa-mnemonic-action">Check radio batteries, channel, connection</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">IF CANNOT RESTORE</div>
                        <div class="qa-mnemonic-action">Initiate RTH and land. Mission terminated.</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Pre-Brief Visual Signals</h4>
                    <p><strong>Wave Off:</strong> Both arms waving overhead = "Return immediately"<br>
                    <strong>Land:</strong> Both arms pointing down = "Land now"<br>
                    <strong>Hold:</strong> One arm raised = "Hold position"</p>
                </div>
            </div>
        </div>
    `;
}

function getLostVLOSProcedure() {
    qaTitleText.textContent = 'Loss of VLOS';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-eye-slash"></i></div>
                <div class="qa-procedure-title">LOSS OF VLOS</div>
                <div class="qa-procedure-subtitle">Unintentional loss of visual line of sight</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> CAUSES</h4>
                <ul>
                    <li>Fog bank or mist</li>
                    <li>Sun glare</li>
                    <li>Terrain obstruction</li>
                    <li>Clouds moving in</li>
                    <li>Distance/orientation loss</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"Visual Lost" - Alert crew immediately</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">STOP</div>
                        <div class="qa-mnemonic-action">PIC stops all inputs - aircraft enters hover</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ASSIST</div>
                        <div class="qa-mnemonic-action">VO attempts to talk pilot back to visual: "Climb 20 feet", "Yaw Left"</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">TELEMETRY</div>
                        <div class="qa-mnemonic-action">Use map display and camera feed to orient</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ABORT (15 sec)</div>
                        <div class="qa-mnemonic-action">If visual not regained in 15 seconds, initiate RTH</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>15-Second Rule</h4>
                    <p>Do not continue flight beyond 15 seconds without visual contact. CAR Part IX requires VLOS maintenance for standard operations.</p>
                </div>
            </div>
        </div>
    `;
}

function getIMCEntryProcedure() {
    qaTitleText.textContent = 'Inadvertent IMC Entry';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-cloud"></i></div>
                <div class="qa-procedure-title">INADVERTENT IMC ENTRY</div>
                <div class="qa-procedure-subtitle">Aircraft enters cloud, fog, or reduced visibility</div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">MAINTAIN HEADING</div>
                        <div class="qa-mnemonic-action">Do not turn - keep current heading to avoid disorientation</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">REVERSE</div>
                        <div class="qa-mnemonic-action">If safe, come immediately backwards out of cloud</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">CLIMB (if terrain clear)</div>
                        <div class="qa-mnemonic-action">If terrain permits, climb above cloud layer</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DESCEND (if below mins)</div>
                        <div class="qa-mnemonic-action">Controlled descent below cloud base if safe</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">USE INSTRUMENTS</div>
                        <div class="qa-mnemonic-action">Rely on telemetry only - attitude, altitude, heading</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">6</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ABORT</div>
                        <div class="qa-mnemonic-action">Use RTH function if unable to navigate visually</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">7</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">LAND</div>
                        <div class="qa-mnemonic-action">Land as soon as visual is regained</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Critical</h4>
                    <p>RPAS operations in IMC are prohibited under CAR Part IX. Exit IMC conditions immediately.</p>
                </div>
            </div>
        </div>
    `;
}

function getCFITProcedure() {
    qaTitleText.textContent = 'CFIT Prevention';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon warning"><i class="fas fa-mountain"></i></div>
                <div class="qa-procedure-title">CFIT PREVENTION</div>
                <div class="qa-procedure-subtitle">Controlled Flight Into Terrain - Mountain operations</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> CFIT RISK FACTORS</h4>
                <ul>
                    <li>Operating in mountainous terrain</li>
                    <li>Using AGL altitude in variable terrain</li>
                    <li>RTH altitude set below terrain</li>
                    <li>Poor visibility conditions</li>
                    <li>Reliance on inaccurate terrain maps</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">VERIFY TERRAIN</div>
                        <div class="qa-mnemonic-action">Always verify terrain elevation vs aircraft altitude before flight</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">RTH ALTITUDE</div>
                        <div class="qa-mnemonic-action">Set RTH altitude ABOVE highest terrain in operating area</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">MONITOR AGL vs MSL</div>
                        <div class="qa-mnemonic-action">Monitor both AGL and MSL altitudes carefully</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">TERRAIN FOLLOWING</div>
                        <div class="qa-mnemonic-action">If using terrain-following, set excessive safety margins</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter warning">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">IMMEDIATE CLIMB</div>
                        <div class="qa-mnemonic-action">If terrain closure detected, IMMEDIATE climb</div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Mountain Operations</h4>
                    <p>In SAR mountain operations, terrain can vary dramatically. Always maintain situational awareness of terrain elevation relative to aircraft altitude.</p>
                </div>
            </div>
        </div>
    `;
}

function getEmergencyLandingProcedure() {
    qaTitleText.textContent = 'Emergency Landing';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-plane-arrival"></i></div>
                <div class="qa-procedure-title">EMERGENCY LANDING</div>
                <div class="qa-procedure-subtitle">Site selection and immediate landing execution</div>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">SITE SELECTION</div>
                        <div class="qa-mnemonic-action">Quickly identify safe landing site free from people, structures, hazards</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"Emergency Landing" - Alert crew and team</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">COMMUNICATE</div>
                        <div class="qa-mnemonic-action">Inform local authorities if necessary (public area, near traffic)</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">EXECUTE</div>
                        <div class="qa-mnemonic-action">Execute emergency landing as practiced in training</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">SECURE</div>
                        <div class="qa-mnemonic-action">Secure RPAS after landing and inspect for damage</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">6</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Record incident details for reporting</div>
                    </div>
                </div>
            </div>

            <table class="qa-reference-table">
                <tr><th>Priority</th><th>Site Selection Criteria</th></tr>
                <tr><td>1</td><td>Clear of ALL persons</td></tr>
                <tr><td>2</td><td>Free from overhead obstructions (wires, branches)</td></tr>
                <tr><td>3</td><td>Level, solid surface if possible</td></tr>
                <tr><td>4</td><td>Away from roads, trails, waterways</td></tr>
                <tr><td>5</td><td>Accessible for recovery</td></tr>
            </table>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Water Landing</h4>
                    <p>In emergency conditions where no safe land option exists, water landing (where people are not present) is recognized as a safe scuttle option. Aircraft loss is acceptable to prevent injury.</p>
                </div>
            </div>
        </div>
    `;
}

function getTrafficAlertProcedure() {
    qaTitleText.textContent = 'Traffic Alert Response';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-plane"></i></div>
                <div class="qa-procedure-title">TRAFFIC ALERT RESPONSE</div>
                <div class="qa-procedure-subtitle">ADS-B alert or visual traffic sighting</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> KEY PRINCIPLE</h4>
                <ul>
                    <li><strong>Manned aircraft ALWAYS have right of way</strong></li>
                    <li>See and avoid is YOUR responsibility</li>
                    <li>When in doubt, DESCEND</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ANNOUNCE</div>
                        <div class="qa-mnemonic-action">"TRAFFIC" + direction (e.g., "TRAFFIC - 3 O'CLOCK")</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DESCEND IMMEDIATELY</div>
                        <div class="qa-mnemonic-action">Get below 400' AGL immediately</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">HOLD POSITION</div>
                        <div class="qa-mnemonic-action">Minimize horizontal movement - hover in place</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">YIELD</div>
                        <div class="qa-mnemonic-action">Manned aircraft ALWAYS has right of way</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter info">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">RESUME</div>
                        <div class="qa-mnemonic-action">Resume operations only when traffic is clear</div>
                    </div>
                </div>
            </div>

            <table class="qa-reference-table">
                <tr><th>Threat Level</th><th>Situation</th><th>Response</th></tr>
                <tr><td>Level 1</td><td>Planned Approach (expected)</td><td>Ground RPAS before arrival</td></tr>
                <tr><td>Level 2</td><td>Announced Entry (radio)</td><td>Restrict &lt;400' AGL, 1 km separation</td></tr>
                <tr><td>Level 3</td><td>Non-Threat (no risk)</td><td>Continue with increased vigilance</td></tr>
                <tr><td>Level 4</td><td>Potential Conflict</td><td>RTH or Hover at safe altitude</td></tr>
                <tr style="background: rgba(231, 76, 60, 0.15)"><td><strong>Level 5</strong></td><td><strong>Critical Threat</strong></td><td><strong>EXECUTE DESCEND PROTOCOL</strong></td></tr>
            </table>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>If Near-Miss Occurs</h4>
                    <p>Document encounter immediately. Report to NAV CANADA and Chief Pilot. TSB notification may be required.</p>
                </div>
            </div>
        </div>
    `;
}

function getFlightTerminationProcedure() {
    qaTitleText.textContent = 'Flight Termination';
    return `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon"><i class="fas fa-power-off"></i></div>
                <div class="qa-procedure-title">FLIGHT TERMINATION</div>
                <div class="qa-procedure-subtitle">Kill switch / motor stop - LAST RESORT</div>
            </div>

            <div class="qa-critical-box">
                <h4><i class="fas fa-exclamation-circle"></i> USE ONLY WHEN:</h4>
                <ul>
                    <li>Crash is imminent AND uncontrolled flight poses greater risk</li>
                    <li>Aircraft is heading toward people</li>
                    <li>Controlled landing is impossible</li>
                    <li>All other options exhausted</li>
                </ul>
            </div>

            <div class="qa-mnemonic">
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">1</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">ASSESS</div>
                        <div class="qa-mnemonic-action">Will crash landing injure someone? Is termination the safer option?</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">2</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">WARN</div>
                        <div class="qa-mnemonic-action">Shout "LOOK OUT!" or "HEADS UP!" to clear area</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">3</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">EXECUTE</div>
                        <div class="qa-mnemonic-action">Perform flight termination: CSC (sticks down-in) or Emergency Stop</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">4</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">SECURE SCENE</div>
                        <div class="qa-mnemonic-action">Clear area, assess for battery fire risk</div>
                    </div>
                </div>
                <div class="qa-mnemonic-step">
                    <div class="qa-mnemonic-letter">5</div>
                    <div class="qa-mnemonic-content">
                        <div class="qa-mnemonic-word">DOCUMENT</div>
                        <div class="qa-mnemonic-action">Full incident report required. Preserve evidence.</div>
                    </div>
                </div>
            </div>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>CSC Command (DJI)</h4>
                    <p>Both sticks DOWN and INWARD simultaneously. Motors will stop immediately. Aircraft will fall.</p>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Post-Termination</h4>
                    <p>Do NOT rush to crash site - assess fire risk first. If involving injury or manned aircraft, DO NOT move wreckage (preserve for TSB).</p>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// FLY-AWAY SCRIPT (Direct Access)
// ========================================

function showFlyAwayScript() {
    openQuickAccess('Fly-Away FIC Call Script');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon"><i class="fas fa-phone-volume"></i></div>
                <div class="qa-procedure-title">FLY-AWAY FIC CALL SCRIPT</div>
                <div class="qa-procedure-subtitle">Read this script when calling Flight Information Centre</div>
            </div>

            <div class="qa-emergency-call">
                <div class="qa-emergency-call-title">CALL FIC KAMLOOPS</div>
                <div class="qa-emergency-call-number"><a href="tel:250-376-7045">250-376-7045</a></div>
                <div style="margin-top: 8px; font-size: 0.9rem; opacity: 0.9;">Toll-Free: 1-866-541-4101</div>
            </div>

            <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 24px; margin: 24px 0;">
                <h4 style="margin: 0 0 16px; color: var(--text-primary); font-size: 1.1rem;">
                    <i class="fas fa-microphone" style="margin-right: 8px; color: var(--danger-red);"></i>
                    READ THIS SCRIPT:
                </h4>

                <div style="background: white; border-left: 4px solid var(--danger-red); padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 0; color: var(--text-primary);">
                        "Hello, my name is <strong style="color: var(--danger-red);">[YOUR NAME]</strong>.<br><br>
                        I am an RPAS operator experiencing a <strong>fly-away situation</strong>."
                    </p>
                </div>

                <div style="background: white; border-left: 4px solid var(--accent-blue); padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
                    <p style="font-size: 1.05rem; line-height: 1.8; margin: 0; color: var(--text-primary);">
                        "The RPAS is a <strong style="color: var(--accent-blue);">[COLOR]</strong>,
                        <strong style="color: var(--accent-blue);">[MAKE/MODEL]</strong>,
                        weighing <strong style="color: var(--accent-blue);">[WEIGHT]</strong> grams."
                    </p>
                </div>

                <div style="background: white; border-left: 4px solid var(--accent-blue); padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
                    <p style="font-size: 1.05rem; line-height: 1.8; margin: 0; color: var(--text-primary);">
                        "My current location is <strong style="color: var(--accent-blue);">[DISTANCE] NM</strong> from
                        <strong style="color: var(--accent-blue);">[AERODROME/LANDMARK]</strong>,
                        bearing <strong style="color: var(--accent-blue);">[BEARING]</strong>."
                    </p>
                </div>

                <div style="background: white; border-left: 4px solid var(--accent-blue); padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
                    <p style="font-size: 1.05rem; line-height: 1.8; margin: 0; color: var(--text-primary);">
                        "The RPAS is flying at <strong style="color: var(--accent-blue);">[ALTITUDE] feet ASL</strong>,
                        heading <strong style="color: var(--accent-blue);">[HEADING]</strong>
                        at <strong style="color: var(--accent-blue);">[SPEED] knots</strong>."
                    </p>
                </div>

                <div style="background: white; border-left: 4px solid var(--accent-blue); padding: 20px; border-radius: 0 8px 8px 0;">
                    <p style="font-size: 1.05rem; line-height: 1.8; margin: 0; color: var(--text-primary);">
                        "Maximum flight time is <strong style="color: var(--accent-blue);">[MAX TIME] minutes</strong>.<br>
                        Estimated remaining battery: <strong style="color: var(--accent-blue);">[BATTERY]%</strong>.<br>
                        Maximum remaining travel distance: <strong style="color: var(--accent-blue);">[DISTANCE] NM</strong>."
                    </p>
                </div>
            </div>

            <table class="qa-reference-table">
                <tr><th>Information</th><th>M30T</th><th>M4TD</th></tr>
                <tr><td>Color</td><td>Grey/Orange</td><td>Grey</td></tr>
                <tr><td>Make/Model</td><td>DJI Matrice 30T</td><td>DJI Matrice 4TD</td></tr>
                <tr><td>Weight</td><td>3,770 grams</td><td>2,300 grams</td></tr>
                <tr><td>Max Flight Time</td><td>41 minutes</td><td>45 minutes</td></tr>
                <tr><td>Max Speed</td><td>45 knots (82 km/h)</td><td>41 knots (76 km/h)</td></tr>
            </table>

            <div class="qa-warning-box">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Stay on the Line</h4>
                    <p>FIC may ask follow-up questions. Keep your phone ready and continue tracking the aircraft visually if possible.</p>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>After the Call</h4>
                    <p>Document all details for incident report. Preserve flight logs. Notify Chief Pilot immediately. TSB notification may be required.</p>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// PRE-FLIGHT CHECKLIST (Direct Access)
// ========================================

function showPreFlightChecklist() {
    openQuickAccess('Pre-Flight Checklist');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-clipboard-check"></i></div>
                <div class="qa-procedure-title">STANDARD PRE-FLIGHT CHECKLIST</div>
                <div class="qa-procedure-subtitle">Section 12.8.1 - VO reads callout, PIC responds</div>
            </div>

            <div class="qa-info-box" style="margin-bottom: 20px;">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Checklist Usage</h4>
                    <p>The Visual Observer (VO) reads the <strong>Callout</strong>, the Pilot in Command (PIC) performs the check and states the <strong>Response</strong>.</p>
                </div>
            </div>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table">
                    <thead>
                        <tr>
                            <th style="width: 50px; text-align: center;">#</th>
                            <th style="width: 200px;">VO Callout</th>
                            <th style="width: 250px;">PIC Response</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">1</td>
                            <td><strong>"Wind and Weather"</strong></td>
                            <td>"<strong>[Speed] m/s, Within Limits</strong>"</td>
                            <td>Verify against aircraft limits</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">2</td>
                            <td><strong>"Air Vehicle Batteries"</strong></td>
                            <td>"<strong>[N]%</strong>"</td>
                            <td>Must be &gt;90% for operational flight</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">3</td>
                            <td><strong>"Ground Control Batteries"</strong></td>
                            <td>"<strong>[N]%</strong>"</td>
                            <td>Must be &gt;50%</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">4</td>
                            <td><strong>"Ground Control Application"</strong></td>
                            <td>"<strong>Ready</strong>, <strong>[N] Satellites</strong>"</td>
                            <td>Minimum 10 satellites</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">5</td>
                            <td><strong>"Payload Check"</strong></td>
                            <td><em>Test gimbal movement</em> "<strong>Working</strong>"</td>
                            <td>Full range of motion</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">6</td>
                            <td><strong>"Failsafe Settings"</strong></td>
                            <td>"RTH at <strong>[N] meters</strong>"</td>
                            <td>Must clear highest terrain</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">7</td>
                            <td><strong>"SD Card Check"</strong></td>
                            <td><em>Check space/recording</em> "<strong>Recording</strong>"</td>
                            <td>Verify recording active</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">8</td>
                            <td><strong>"Area and Airspace"</strong></td>
                            <td><em>Conduct visual scan</em> "<strong>Clear</strong>"</td>
                            <td>360° scan for traffic</td>
                        </tr>
                        <tr>
                            <td style="text-align: center; font-weight: 700;">9</td>
                            <td><strong>"Cleared for Takeoff"</strong></td>
                            <td>"<strong>CLEAR</strong>"</td>
                            <td>Final confirmation</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="qa-info-box" style="margin-top: 20px;">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Abbreviated Pre-Flight Checklist (Rapid Launch)</h4>
                    <p>Use <strong>ONLY</strong> for urgent re-deployments (e.g., hot battery swaps) where site conditions have NOT changed:</p>
                    <ol style="margin: 8px 0 0 20px; padding: 0;">
                        <li>"Air Vehicle Batteries" → "[N]%"</li>
                        <li>"Ground Control Batteries" → "[N]%"</li>
                        <li>"Area and Airspace" → "Clear"</li>
                        <li>"Cleared for Takeoff" → "CLEAR"</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// IMSAFE CHECKLIST
// ========================================

function showIMSAFEChecklist() {
    openQuickAccess('IMSAFE Self-Assessment');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-user-check"></i></div>
                <div class="qa-procedure-title">IMSAFE SELF-ASSESSMENT</div>
                <div class="qa-procedure-subtitle">Complete before every flight - Required for all crew members</div>
            </div>

            <p style="color: var(--text-secondary); margin-bottom: 20px;">
                Before every operation, all crew members must complete the IMSAFE self-assessment:
            </p>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table">
                    <tr>
                        <th style="width: 80px;">Letter</th>
                        <th style="width: 120px;">Factor</th>
                        <th>Question</th>
                    </tr>
                    <tr>
                        <td style="font-weight: 700; font-size: 1.2rem; color: var(--primary-blue);">I</td>
                        <td><strong>Illness</strong></td>
                        <td>Am I suffering from any illness or symptom?</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 700; font-size: 1.2rem; color: var(--primary-blue);">M</td>
                        <td><strong>Medication</strong></td>
                        <td>Am I taking any medication that could impair my performance?</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 700; font-size: 1.2rem; color: var(--primary-blue);">S</td>
                        <td><strong>Stress</strong></td>
                        <td>Am I under psychological pressure (work, family, financial)?</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 700; font-size: 1.2rem; color: var(--primary-blue);">A</td>
                        <td><strong>Alcohol</strong></td>
                        <td>Have I consumed alcohol within the last 12 hours?</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 700; font-size: 1.2rem; color: var(--primary-blue);">F</td>
                        <td><strong>Fatigue</strong></td>
                        <td>Have I had adequate sleep and rest? Am I fatigued?</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 700; font-size: 1.2rem; color: var(--primary-blue);">E</td>
                        <td><strong>Eating</strong></td>
                        <td>Have I eaten and am I properly hydrated?</td>
                    </tr>
                </table>
            </div>

            <div class="qa-warning-box" style="margin-top: 24px;">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>NO-GO Criteria</h4>
                    <p>Any "YES" answer to illness, medication impairment, alcohol, or significant fatigue is a <strong>NO-GO</strong>.</p>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// REGULATIONS QUICK REFERENCE
// ========================================

function showRegulationsReference() {
    openQuickAccess('CAR Part IX Quick Reference');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-balance-scale"></i></div>
                <div class="qa-procedure-title">CAR PART IX QUICK REFERENCE</div>
                <div class="qa-procedure-subtitle">Common regulatory questions for RPAS pilots</div>
            </div>

            <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
                <span style="background: var(--success-green); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                    <i class="fas fa-certificate" style="margin-right: 6px;"></i>SSAR operates under RPOC
                </span>
                <span style="background: var(--accent-blue); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                    <i class="fas fa-route" style="margin-right: 6px;"></i>STSC-003 & STSC-004
                </span>
            </div>

            <h3 style="color: var(--primary-blue); margin: 24px 0 16px; font-size: 1.1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 8px;">
                <i class="fas fa-id-card" style="margin-right: 8px;"></i>
                Pilot Certificate Comparison
            </h3>

            <div style="overflow-x: auto;">
            <table class="qa-reference-table" style="min-width: 700px;">
                <tr>
                    <th style="width: 22%;">Capability</th>
                    <th style="width: 26%;">Basic Operations</th>
                    <th style="width: 26%;">Advanced Operations</th>
                    <th style="width: 26%;">Complex Level 1 (RPOC)</th>
                </tr>
                <tr>
                    <td><strong>Controlled Airspace</strong></td>
                    <td style="background: rgba(231, 76, 60, 0.15); color: var(--danger-red); font-weight: 600;">NOT PERMITTED</td>
                    <td style="background: rgba(243, 156, 18, 0.15);">With NAV CANADA auth</td>
                    <td style="background: rgba(39, 174, 96, 0.15); color: var(--success-green);">Per Standard Scenario</td>
                </tr>
                <tr>
                    <td><strong>Over Bystanders</strong></td>
                    <td style="background: rgba(231, 76, 60, 0.15); color: var(--danger-red); font-weight: 600;">NOT PERMITTED</td>
                    <td style="background: rgba(243, 156, 18, 0.15);">30m horizontal min</td>
                    <td style="background: rgba(39, 174, 96, 0.15);">Per SORA mitigations</td>
                </tr>
                <tr>
                    <td><strong>BVLOS Operations</strong></td>
                    <td style="background: rgba(231, 76, 60, 0.15); color: var(--danger-red); font-weight: 600;">NOT PERMITTED</td>
                    <td style="background: rgba(231, 76, 60, 0.15); color: var(--danger-red); font-weight: 600;">NOT PERMITTED</td>
                    <td style="background: rgba(39, 174, 96, 0.15); color: var(--success-green); font-weight: 600;">STSC-004 approved</td>
                </tr>
                <tr>
                    <td><strong>Max Altitude</strong></td>
                    <td>400 ft AGL</td>
                    <td>400 ft AGL</td>
                    <td style="background: rgba(39, 174, 96, 0.15);"><strong>1000 ft AGL</strong><br><small>(STSC-003)</small></td>
                </tr>
                <tr>
                    <td><strong>Distance from Airports</strong><br><small>(Uncontrolled)</small></td>
                    <td>3 NM (5.6 km)</td>
                    <td>3 NM (5.6 km)<br><small>Closer with auth</small></td>
                    <td>Per coordination<br><small>ATC notification</small></td>
                </tr>
                <tr>
                    <td><strong>Distance from Heliports</strong></td>
                    <td>2 NM (3.7 km)</td>
                    <td>2 NM (3.7 km)<br><small>Closer with auth</small></td>
                    <td>Per coordination</td>
                </tr>
                <tr>
                    <td><strong>Organizational Requirements</strong></td>
                    <td>None - Individual</td>
                    <td>None - Individual</td>
                    <td style="background: rgba(52, 152, 219, 0.15);">RPOC + SMS + MCM<br><small>Accountable Executive</small></td>
                </tr>
                <tr>
                    <td><strong>Pilot Requirements</strong></td>
                    <td>Basic Exam</td>
                    <td>Advanced Exam + Flight Review</td>
                    <td>Advanced + RPOC Endorsement<br><small>+ Scenario Training</small></td>
                </tr>
                <tr>
                    <td><strong>Operations Manual</strong></td>
                    <td style="background: rgba(231, 76, 60, 0.15);">Not required</td>
                    <td style="background: rgba(231, 76, 60, 0.15);">Not required</td>
                    <td style="background: rgba(39, 174, 96, 0.15); font-weight: 600;">REQUIRED</td>
                </tr>
                <tr>
                    <td><strong>Safety Management</strong></td>
                    <td style="background: rgba(231, 76, 60, 0.15);">Not required</td>
                    <td style="background: rgba(231, 76, 60, 0.15);">Not required</td>
                    <td style="background: rgba(39, 174, 96, 0.15); font-weight: 600;">SMS REQUIRED</td>
                </tr>
                <tr>
                    <td><strong>Maintenance Program</strong></td>
                    <td>Manufacturer guidelines</td>
                    <td>Manufacturer guidelines</td>
                    <td style="background: rgba(39, 174, 96, 0.15);">MCM required<br><small>PRM designated</small></td>
                </tr>
                <tr>
                    <td><strong>Use Case</strong></td>
                    <td><small>Recreational, basic commercial away from people</small></td>
                    <td><small>Commercial near people, controlled airspace</small></td>
                    <td><small>SAR, complex ops, BVLOS, high altitude</small></td>
                </tr>
            </table>
            </div>

            <div class="qa-info-box" style="margin-top: 16px;">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>What is Complex Level 1?</h4>
                    <p>Operations requiring an RPAS Operator Certificate (RPOC). Includes Standard Scenarios (STSC-003, STSC-004) that allow BVLOS and high-altitude ops. Requires organizational accountability: Accountable Executive, Operations Manual, SMS, MCM, and trained/endorsed pilots.</p>
                </div>
            </div>

            <h3 style="color: var(--primary-blue); margin: 32px 0 16px; font-size: 1.1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 8px;">
                <i class="fas fa-building" style="margin-right: 8px;"></i>
                RPOC Privileges (What SSAR Can Do)
            </h3>

            <table class="qa-reference-table">
                <tr>
                    <th>Parameter</th>
                    <th>STSC-003 (High Alt VLOS)</th>
                    <th>STSC-004 (BVLOS)</th>
                </tr>
                <tr>
                    <td><strong>Max Altitude</strong></td>
                    <td style="font-weight: 600;">1000 ft AGL</td>
                    <td style="font-weight: 600;">400 ft AGL</td>
                </tr>
                <tr>
                    <td><strong>Visual Requirements</strong></td>
                    <td>VLOS required</td>
                    <td style="background: rgba(39, 174, 96, 0.15); color: var(--success-green); font-weight: 600;">BVLOS permitted</td>
                </tr>
                <tr>
                    <td><strong>ATC Notification</strong></td>
                    <td style="background: rgba(231, 76, 60, 0.15); font-weight: 600;">Required (24 hrs)</td>
                    <td>Not required</td>
                </tr>
                <tr>
                    <td><strong>Population Density</strong></td>
                    <td>Any (per ATC)</td>
                    <td>&lt;25 people/km²</td>
                </tr>
                <tr>
                    <td><strong>Use Case</strong></td>
                    <td>High altitude reconnaissance</td>
                    <td>Extended range SAR, time-critical ops</td>
                </tr>
            </table>

            <h3 style="color: var(--primary-blue); margin: 32px 0 16px; font-size: 1.1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 8px;">
                <i class="fas fa-ruler" style="margin-right: 8px;"></i>
                Key Distance & Altitude Rules
            </h3>

            <div class="ep-card-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
                <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">400'</div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">Max altitude AGL<br>(standard ops)</div>
                </div>
                <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">3 NM</div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">Min distance from airports<br>(5.6 km)</div>
                </div>
                <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">2 NM</div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">Min distance from heliports<br>(3.7 km)</div>
                </div>
                <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-blue);">100'</div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">Min horizontal from people<br>(30m, Advanced only)</div>
                </div>
            </div>

            <h3 style="color: var(--primary-blue); margin: 32px 0 16px; font-size: 1.1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 8px;">
                <i class="fas fa-question-circle" style="margin-right: 8px;"></i>
                Common Questions
            </h3>

            <div style="margin-bottom: 16px;">
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: Can I fly near an airport?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Basic</span> Stay outside controlled airspace and 3 NM from airports.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Advanced</span> Can request authorization via NAV Drone to fly closer.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Complex L1</span> Per Standard Scenario + ATC coordination (24hr notice for STSC-003).
                    </p>
                </div>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: Can I fly over people?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Basic</span> No, never over bystanders.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Advanced</span> Yes, maintain 30m horizontal distance from uninvolved persons.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Complex L1</span> Controlled ground area required (M1 SORA mitigation).
                    </p>
                </div>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: Can I fly BVLOS (Beyond Visual Line of Sight)?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Basic</span> No, VLOS required at all times.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Advanced</span> No, VLOS required at all times.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Complex L1</span> <strong>YES with STSC-004</strong> - sparsely populated (&lt;25/km²), max 400' AGL.
                    </p>
                </div>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: Can I fly above 400 feet?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Basic</span> No, 400' AGL is the absolute limit.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Advanced</span> No, 400' AGL limit (unless SFOC obtained).<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Complex L1</span> <strong>YES with STSC-003</strong> - up to 1000' AGL with 24hr ATC notification.
                    </p>
                </div>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: What documentation do I need?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Basic</span> Pilot certificate, drone registration.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Advanced</span> Pilot certificate + flight review record, drone registration.<br>
                        <span style="display: inline-block; background: var(--text-secondary); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 4px;">Complex L1</span> RPOC, Operations Manual, SMS, MCM, pilot endorsements, SORA.
                    </p>
                </div>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: What's the visibility requirement?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <strong>All operations:</strong> VFR conditions required. No flight in cloud, fog, or IMC.<br>
                        <strong>VLOS ops:</strong> Must see the RPAS at all times unaided (except corrective lenses).<br>
                        <strong>BVLOS (STSC-004):</strong> Telemetry-based SA permitted, but VFR weather still required.
                    </p>
                </div>
                <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px 20px; margin-bottom: 12px;">
                    <strong style="color: var(--primary-blue);">Q: Alcohol/Cannabis restrictions?</strong>
                    <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 0.95rem;">
                        <strong>CAR 901.19-901.22 (All pilots):</strong><br>
                        • No alcohol within <strong>12 hours</strong> before flight<br>
                        • Blood alcohol must be <strong>0.02% or less</strong><br>
                        • No cannabis if it could cause impairment (recommend 28 days)<br>
                        • Zero tolerance for any impairment from any substance
                    </p>
                </div>
            </div>

            <h3 style="color: var(--primary-blue); margin: 32px 0 16px; font-size: 1.1rem; border-bottom: 2px solid var(--accent-blue); padding-bottom: 8px;">
                <i class="fas fa-gavel" style="margin-right: 8px;"></i>
                Key CAR Part IX References
            </h3>

            <table class="qa-reference-table" style="font-size: 0.9rem;">
                <tr><th>CAR Section</th><th>Subject</th></tr>
                <tr><td>901.01-901.03</td><td>Definitions, Registration, Marking</td></tr>
                <tr><td>901.17-901.18</td><td>Right of Way, Proximity to Aircraft</td></tr>
                <tr><td>901.19-901.22</td><td>Fitness for Duty, Alcohol, Cannabis</td></tr>
                <tr><td>901.24-901.27</td><td>Airspace, Distance from Aerodromes, Site Survey</td></tr>
                <tr><td>901.29</td><td>Pre-flight Requirements</td></tr>
                <tr><td>901.34-901.35</td><td>Weather Minimums, Icing Conditions</td></tr>
                <tr><td>901.49</td><td>Incident/Accident Reporting</td></tr>
                <tr><td>901.54-901.66</td><td>Pilot Certificate Requirements</td></tr>
                <tr><td>901.217-901.223</td><td>RPOC Requirements</td></tr>
            </table>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>SSAR Pilots</h4>
                    <p>As an RPOC operator, SSAR operates under organizational approvals (Standard Scenarios) rather than individual pilot certificates. All SSAR pilots must still hold a valid Advanced certificate and be endorsed for STSC-003/004 by the Chief Pilot.</p>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// TRAINING CALENDAR
// ========================================

function showTrainingCalendar() {
    openQuickAccess('Yearly Training Calendar');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon info"><i class="fas fa-calendar-alt"></i></div>
                <div class="qa-procedure-title">SSAR RPAS TEAM TRAINING CALENDAR</div>
                <div class="qa-procedure-subtitle">Yearly training schedule and competency development</div>
            </div>

            <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
                <span style="background: var(--danger-red); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                    <i class="fas fa-exclamation-circle" style="margin-right: 6px;"></i>Mandatory
                </span>
                <span style="background: var(--success-green); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                    <i class="fas fa-certificate" style="margin-right: 6px;"></i>Recurrency
                </span>
                <span style="background: var(--accent-blue); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                    <i class="fas fa-route" style="margin-right: 6px;"></i>Field Exercise
                </span>
            </div>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table training-calendar-table">
                    <thead>
                        <tr>
                            <th style="width: 90px;">Month</th>
                            <th style="width: 250px;">Training</th>
                            <th style="width: 200px;">Competencies</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="calendar-mandatory">
                            <td rowspan="2" style="font-weight: 700; background: rgba(52, 152, 219, 0.1);"><i class="fas fa-snowflake" style="margin-right: 6px; color: var(--accent-blue);"></i>January</td>
                            <td><strong>SOP & Manual Review</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">SORA refresher, Human Factors</span></td>
                            <td>Regulations, safety management</td>
                            <td><span class="cal-badge mandatory">Mandatory</span><br>Location: SAR Compound<br><em>Self-study option: 2hrs logged</em></td>
                        </tr>
                        <tr class="calendar-mandatory">
                            <td><strong>Annual Recurrency</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Ground training & Emergency Procedures</span></td>
                            <td>Knowledge test, practical flight</td>
                            <td><span class="cal-badge recurrency">Recurrency</span><br>Location: SAR Compound<br><em>Signed off by Drone Team Trainer</em></td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(52, 152, 219, 0.1);"><i class="fas fa-snowflake" style="margin-right: 6px; color: var(--accent-blue);"></i>February</td>
                            <td><strong>Indoor Complex Flying</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Obstacles, hide and seek</span></td>
                            <td>Precision flying, box hunting, overlap & handoff</td>
                            <td>Location: SAR Compound<br><em>Practice with SSAR drones</em></td>
                        </tr>
                        <tr class="calendar-mandatory">
                            <td><strong>Annual Recurrency</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Ground training & Emergency Procedures</span></td>
                            <td>Knowledge test, practical flight</td>
                            <td><span class="cal-badge recurrency">Recurrency</span><br>Location: SAR Compound</td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(39, 174, 96, 0.1);"><i class="fas fa-leaf" style="margin-right: 6px; color: var(--success-green);"></i>March</td>
                            <td><strong>Chief Face Flight</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Light assistance operations</span></td>
                            <td>Proximity flying, night ops, dual-sensor, BVLOS</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Murrin Parking Lot<br><em>Park authorization required</em></td>
                        </tr>
                        <tr>
                            <td><strong>Dense Canopy Search</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Hidden subjects, low-light & night</span></td>
                            <td>Thermal signatures, hidden subject detection</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Murrin Park<br><em>BVLOS, park authorization required</em></td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(39, 174, 96, 0.1);"><i class="fas fa-leaf" style="margin-right: 6px; color: var(--success-green);"></i>April</td>
                            <td><strong>Grid Patterns & Canopy Search</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Light/microphone integration</span></td>
                            <td>Motion-based search, lost person profiles, below-canopy</td>
                            <td>Location: Compound Forest<br><em>Possible GSAR integration</em></td>
                        </tr>
                        <tr>
                            <td><strong>Riverbank & Shoreline</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Water proximity operations</span></td>
                            <td>Water ops, current awareness</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Squamish River</td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(39, 174, 96, 0.1);"><i class="fas fa-sun" style="margin-right: 6px; color: #f39c12;"></i>May</td>
                            <td><strong>Canyon Search</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Aircraft: Neo</span></td>
                            <td>Confined space ops, signal management</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Squamish Canyon<br><em>After hours coordination</em></td>
                        </tr>
                        <tr>
                            <td><strong>Rope Rescue Integration</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">High angle scenario, plum lines</span></td>
                            <td>Multi-team coordination</td>
                            <td>Location: TBA</td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(241, 196, 15, 0.1);"><i class="fas fa-sun" style="margin-right: 6px; color: #f39c12;"></i>June</td>
                            <td><strong>Gondola Flight</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Extended range operations</span></td>
                            <td>BVLOS flight, 400ft AGL</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Sea to Sky Parking<br><em>Park authorization required</em></td>
                        </tr>
                        <tr>
                            <td><strong>Waterfall & Steep Terrain</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Challenging terrain ops</span></td>
                            <td>Proximity flying, reconnaissance</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Shannon Falls<br><em>Park authorization required</em></td>
                        </tr>
                        <tr style="background: rgba(200, 200, 200, 0.1);">
                            <td colspan="4" style="text-align: center; font-style: italic; color: var(--text-secondary); padding: 12px;">
                                <i class="fas fa-umbrella-beach" style="margin-right: 8px;"></i>July & August — Summer Break / Operational Standby
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(230, 126, 34, 0.1);"><i class="fas fa-leaf" style="margin-right: 6px; color: #e67e22;"></i>September</td>
                            <td><strong>Alpine Reconnaissance</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Cold weather prep, battery care</span></td>
                            <td>High altitude recon, weather assessment, BVLOS</td>
                            <td><span class="cal-badge field">Field</span><br>Location: Sky Pilot / Elfin / Tantalus<br><em>400ft AGL flight</em></td>
                        </tr>
                        <tr>
                            <td><strong>Mutual Aid - Whistler</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Large area search</span></td>
                            <td>Multi-drone ops, CalTopo mapping, grid search</td>
                            <td><span class="cal-badge field">Field</span><br><em>Flying with other teams</em></td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="font-weight: 700; background: rgba(230, 126, 34, 0.1);"><i class="fas fa-leaf" style="margin-right: 6px; color: #e67e22;"></i>October</td>
                            <td><strong>Advanced Night Operations</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">BVLOS at night</span></td>
                            <td>Night nav, infrastructural light navigation</td>
                            <td>Location: SAR Compound<br><em>Fly with Neo</em></td>
                        </tr>
                        <tr>
                            <td><strong>Year in Review</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Planning session</span></td>
                            <td>Lessons learned, next year planning</td>
                            <td>Location: SAR Compound</td>
                        </tr>
                        <tr class="calendar-mandatory">
                            <td rowspan="2" style="font-weight: 700; background: rgba(52, 152, 219, 0.1);"><i class="fas fa-snowflake" style="margin-right: 6px; color: var(--accent-blue);"></i>November</td>
                            <td><strong>Annual Recurrency</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Ground training & Emergency Procedures</span></td>
                            <td>Knowledge test, practical flight</td>
                            <td><span class="cal-badge recurrency">Recurrency</span><br>Location: SAR Compound<br><em>Signed off by Drone Team Trainer</em></td>
                        </tr>
                        <tr>
                            <td><strong>Integrated GSAR Exercise</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Live tasking</span></td>
                            <td>Comms, decision-making, live ops</td>
                            <td><span class="cal-badge field">Field</span><br>Location: SAR Compound</td>
                        </tr>
                        <tr style="background: rgba(200, 200, 200, 0.1);">
                            <td style="font-weight: 700;"><i class="fas fa-snowflake" style="margin-right: 6px; color: var(--accent-blue);"></i>December</td>
                            <td colspan="3" style="text-align: center; font-style: italic; color: var(--text-secondary); padding: 12px;">
                                <i class="fas fa-gifts" style="margin-right: 8px;"></i>Holiday Break / Operational Standby
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="qa-info-box" style="margin-top: 24px;">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Training Requirements</h4>
                    <p>Members unable to attend mandatory training can complete <strong>2 hours of self-study</strong> logged in the SSAR database. Annual recurrency must be signed off by a Drone Team Trainer.</p>
                </div>
            </div>

            <div class="qa-warning-box" style="margin-top: 16px;">
                <i class="fas fa-exclamation-triangle"></i>
                <div class="qa-info-box-content">
                    <h4>Park Authorization</h4>
                    <p>Field exercises at Murrin Park, Shannon Falls, and Sea to Sky areas require park authorization letters to be obtained in advance.</p>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// SAIL IV ASSESSMENT
// ========================================

function showSAILAssessment() {
    openQuickAccess('SAIL IV Compliance Assessment');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon success"><i class="fas fa-certificate"></i></div>
                <div class="qa-procedure-title">SORA SAIL IV OSO ASSESSMENT</div>
                <div class="qa-procedure-subtitle">Specific Assurance and Integrity Level IV - Operational Safety Objectives</div>
            </div>

            <div class="qa-info-box" style="margin-bottom: 24px;">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>SAIL IV Classification</h4>
                    <p>SSAR operations qualify for SAIL IV under SORA v2.5 due to operations above 400' AGL (up to 1000' AGL per STSC-003). This assessment documents compliance with all applicable Operational Safety Objectives (OSOs) with required robustness levels.</p>
                </div>
            </div>

            <div style="display: flex; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; font-size: 0.85rem; color: var(--text-secondary);">
                <span><i class="fas fa-check" style="margin-right: 6px; color: #1e8449;"></i><strong>MET</strong> - Compliant</span>
                <span><i class="fas fa-minus" style="margin-right: 6px; color: #666;"></i><strong>PARTIAL</strong> - Pending</span>
                <span><i class="fas fa-times" style="margin-right: 6px; color: #922b21;"></i><strong>GAP</strong> - Required</span>
            </div>

            <!-- THREAT BARRIERS (Ground Risk) -->
            <h3 style="margin: 24px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.95rem;">
                THREAT BARRIERS - Technical Issue with UAS
            </h3>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table sail-assessment-table">
                    <thead>
                        <tr>
                            <th style="width: 80px;">OSO#</th>
                            <th style="width: 220px;">Requirement</th>
                            <th style="width: 80px;">Level</th>
                            <th style="width: 260px;">SSAR Evidence</th>
                            <th style="width: 80px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">01</td>
                            <td><strong>Ensure operator competence</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Adequate procedures, checklists, and training</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Operations Manual - SOPs and Checklists</li>
                                    <li>Training Program - Competency Progression</li>
                                    <li>Personnel Manual - Qualifications</li>
                                    <li>Annual recurrency requirements</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">02</td>
                            <td><strong>UAS manufactured by competent entity</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Design organization with adequate processes</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>DJI manufacturer standards (ISO 9001)</li>
                                    <li>Fleet inventory with manufacturer specs</li>
                                    <li>CE/FCC compliance documentation</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">03</td>
                            <td><strong>UAS maintained by competent entity</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Maintenance organization with adequate processes</span></td>
                            <td style="text-align: center;"><span class="sail-level low">LOW</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Equipment Manual - Maintenance Procedures</li>
                                    <li>Airworthiness Standards</li>
                                    <li>Defect Classification System</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">04</td>
                            <td><strong>UAS developed to design standards</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Product development per industry standards</span></td>
                            <td style="text-align: center;"><span class="sail-level low">LOW</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>DJI Enterprise product development</li>
                                    <li>Manufacturer design assurance</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">05</td>
                            <td><strong>UAS designed for limited crash effects</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Frangibility, parachute, energy absorption</span></td>
                            <td style="text-align: center;"><span class="sail-level low">LOW</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Aircraft specifications: &lt;25kg MTOW</li>
                                    <li>Frangible design characteristics</li>
                                    <li>Max speed limitations documented</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">06</td>
                            <td><strong>C3 link performance for operation</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Adequate control link specifications</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Operations Manual - Communication Systems</li>
                                    <li>C3 Link Specification (Section 8.9)</li>
                                    <li>Lost Link Procedures documented</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">07</td>
                            <td><strong>Inspection of UAS</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Pre-flight and periodic inspections</span></td>
                            <td style="text-align: center;"><span class="sail-level low">LOW</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Pre-Flight Checklist procedures</li>
                                    <li>Equipment Manual - Inspection requirements</li>
                                    <li>Airworthiness verification</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">08</td>
                            <td><strong>Operational procedures for deterioration</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Procedures for off-nominal conditions</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Emergency Procedures Manual</li>
                                    <li>Contingency Response procedures</li>
                                    <li>Fly-Away Script</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">09</td>
                            <td><strong>Remote crew trained for emergencies</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Training for abnormal/emergency procedures</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Training Program - Emergency procedures</li>
                                    <li>Annual recurrency training</li>
                                    <li>Competency assessment requirements</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">10</td>
                            <td><strong>Safe recovery from technical issue</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Recovery systems and procedures</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Emergency Procedures - Recovery protocols</li>
                                    <li>RTH (Return to Home) procedures</li>
                                    <li>Lost link contingencies</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- THREAT BARRIERS (Human Error) -->
            <h3 style="margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.95rem;">
                THREAT BARRIERS - Human Error
            </h3>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table sail-assessment-table">
                    <thead>
                        <tr>
                            <th style="width: 80px;">OSO#</th>
                            <th style="width: 220px;">Requirement</th>
                            <th style="width: 80px;">Level</th>
                            <th style="width: 260px;">SSAR Evidence</th>
                            <th style="width: 80px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">12</td>
                            <td><strong>UAS designed to manage flight path</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Flight path control, autopilot functions</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>DJI flight controller capabilities</li>
                                    <li>GPS/GNSS positioning systems</li>
                                    <li>Autopilot mode documentation</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">13</td>
                            <td><strong>External services supporting safe ops</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Weather, NOTAMs, ATC coordination</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Weather assessment procedures</li>
                                    <li>NOTAM checking requirements</li>
                                    <li>NAV CANADA coordination</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">16</td>
                            <td><strong>Multi-crew coordination</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">CRM procedures for crew operations</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Personnel Manual - Role definitions</li>
                                    <li>Visual Observer procedures</li>
                                    <li>Crew communication protocols</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">17</td>
                            <td><strong>Human Factors considered</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">HMI design evaluation</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>IMSAFE Checklist</li>
                                    <li>Crew fatigue management</li>
                                    <li>HMI Evaluation (Section 2.9.1)</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">19</td>
                            <td><strong>Safe recovery from human error</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Ability to recover from crew mistakes</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Emergency Procedures - Recovery</li>
                                    <li>Crew resource management</li>
                                    <li>CRM training requirements</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">21</td>
                            <td><strong>Adequate situational awareness</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Information to crew for safe ops</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Site Survey & Planning requirements</li>
                                    <li>Visual Observer procedures</li>
                                    <li>Real-time telemetry monitoring</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- THREAT BARRIERS (Adverse Operating Conditions) -->
            <h3 style="margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.95rem;">
                THREAT BARRIERS - Adverse Operating Conditions
            </h3>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table sail-assessment-table">
                    <thead>
                        <tr>
                            <th style="width: 80px;">OSO#</th>
                            <th style="width: 220px;">Requirement</th>
                            <th style="width: 80px;">Level</th>
                            <th style="width: 260px;">SSAR Evidence</th>
                            <th style="width: 80px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">11</td>
                            <td><strong>Procedures to handle adverse conditions</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Weather, environment limitations</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Weather Assessment procedures</li>
                                    <li>GO/NO-GO criteria</li>
                                    <li>Adverse Conditions Test Protocol (Section 10.8)</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">14</td>
                            <td><strong>Operational volume definition</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Flight geography and containment</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Site Survey procedures</li>
                                    <li>Geofencing requirements</li>
                                    <li>Operational area definition</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">18</td>
                            <td><strong>Automatic flight envelope protection</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Geo-caging, altitude limits</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>DJI GEO system compliance</li>
                                    <li>Altitude limit configuration</li>
                                    <li>Geofencing procedures</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">20</td>
                            <td><strong>Adequate containment function</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Ground risk buffer implementation</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Site Survey - buffer zones</li>
                                    <li>Controlled ground area procedures</li>
                                    <li>VO positioning requirements</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- ASSURANCE & INTEGRITY -->
            <h3 style="margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.95rem;">
                ASSURANCE & INTEGRITY REQUIREMENTS
            </h3>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table sail-assessment-table">
                    <thead>
                        <tr>
                            <th style="width: 80px;">OSO#</th>
                            <th style="width: 220px;">Requirement</th>
                            <th style="width: 80px;">Level</th>
                            <th style="width: 260px;">SSAR Evidence</th>
                            <th style="width: 80px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">22</td>
                            <td><strong>Definition of controllable ground area</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Procedures for ground risk mitigation</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Site Survey procedures</li>
                                    <li>Flight planning requirements</li>
                                    <li>Ground personnel coordination</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">23</td>
                            <td><strong>Insurance/financial coverage</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Adequate liability coverage</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Insurance documentation</li>
                                    <li><em style="color: #f39c12;">Policy details to be documented</em></li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status partial"><i class="fas fa-exclamation"></i> PARTIAL</span></td>
                        </tr>
                        <tr>
                            <td style="font-weight: 700; text-align: center;">24</td>
                            <td><strong>Third-party audit</strong><br><span style="color: var(--text-secondary); font-size: 0.85rem;">Independent verification of operations</span></td>
                            <td style="text-align: center;"><span class="sail-level medium">MEDIUM</span></td>
                            <td>
                                <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem;">
                                    <li>Third-party auditor: Aeria Solutions Ltd</li>
                                    <li>Third-Party Audit Program (Section 7.9)</li>
                                    <li>Annual audit schedule established</li>
                                </ul>
                            </td>
                            <td style="text-align: center;"><span class="sail-status met"><i class="fas fa-check"></i> MET</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- SUMMARY -->
            <h3 style="margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); color: var(--text-primary); font-size: 0.95rem;">
                COMPLIANCE SUMMARY
            </h3>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--text-primary);">20</div>
                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase;">Compliant</div>
                </div>
                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--text-primary);">1</div>
                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase;">Pending</div>
                </div>
                <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--text-primary);">0</div>
                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase;">Gaps</div>
                </div>
            </div>

            <!-- ACTION ITEMS -->
            <div class="qa-info-box" style="margin-top: 24px;">
                <i class="fas fa-clipboard-list"></i>
                <div class="qa-info-box-content">
                    <h4>Pending Item</h4>
                    <p style="margin: 8px 0 0;"><strong>OSO#23 - Insurance:</strong> Document insurance policy details and coverage amounts in Section 8.3</p>
                </div>
            </div>

            <!-- COMPLETED ITEMS -->
            <div class="qa-info-box" style="margin-top: 12px;">
                <i class="fas fa-check"></i>
                <div class="qa-info-box-content">
                    <h4>Recently Documented</h4>
                    <ul style="margin: 8px 0 0 0; padding-left: 20px; font-size: 0.9rem;">
                        <li>OSO#06 - C3 Link Specification (Section 8.9)</li>
                        <li>OSO#11 - Adverse Conditions Test Protocol (Section 10.8)</li>
                        <li>OSO#17 - HMI Evaluation (Section 2.9.1)</li>
                        <li>OSO#24 - Third-Party Audit Program (Section 7.9)</li>
                    </ul>
                </div>
            </div>

            <div class="qa-info-box" style="margin-top: 16px;">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Reference Documents</h4>
                    <p><strong>SORA v2.5 Main Body</strong> - Table 14: SAIL to OSO Mapping<br>
                    <strong>SORA Annex E</strong> - OSO Integrity and Assurance Criteria<br>
                    <strong>STSC-003</strong> - High Altitude VLOS Operations (up to 1000' AGL)<br>
                    <strong>STSC-004</strong> - Low-Risk BVLOS Operations (up to 400' AGL)</p>
                </div>
            </div>
        </div>
    `;
}

// Console welcome message
console.log('%cSSAR RPOC Web Tool', 'font-size: 20px; font-weight: bold; color: #1e3a5f;');
console.log('%cSquamish Search and Rescue - RPAS Policy Manual', 'font-size: 12px; color: #666;');
console.log('%cCAR Part IX Compliant | STSC-003 | STSC-004', 'font-size: 10px; color: #3498db;');
console.log('%cVisual Enhancements Active', 'font-size: 10px; color: #27ae60;');
