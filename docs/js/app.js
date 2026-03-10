// SSAR RPOC Web Application
// Main application logic with enhanced visual styling

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
        navItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var section = item.dataset.section;
                setActiveNav(item);
                loadSection(section);
            });
        });

        // Quick links
        quickLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                var jumpId = link.dataset.jump;
                handleQuickJump(jumpId);
            });
        });

        // Search
        searchInput.addEventListener('click', openSearch);
        searchInput.addEventListener('focus', openSearch);
        closeSearch.addEventListener('click', closeSearchModal);
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) closeSearchModal();
        });
        searchModalInput.addEventListener('input', handleSearch);

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
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
        printBtn.addEventListener('click', function() { window.print(); });

        // Back to top
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.remove('hidden');
            } else {
                backToTop.classList.add('hidden');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // TOC scroll spy
        var mainContent = document.querySelector('.main-content');
        mainContent.addEventListener('scroll', updateTocHighlight);
    }

    function setActiveNav(activeItem) {
        navItems.forEach(function(item) { item.classList.remove('active'); });
        activeItem.classList.add('active');
    }

    function loadSection(sectionKey) {
        currentSection = sectionKey;
        var section = RPOC_CONTENT[sectionKey];

        if (!section) {
            contentArea.innerHTML = '<p>Section not found.</p>';
            return;
        }

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
        var tables = contentArea.querySelectorAll('table');

        tables.forEach(function(table) {
            var cells = table.querySelectorAll('td');

            cells.forEach(function(cell) {
                var text = cell.textContent.trim().toUpperCase();

                // Risk Level Coloring
                if (text === 'EXTREME' || text.includes('EXTREME')) {
                    cell.classList.add('risk-extreme');
                } else if (text === 'HIGH' || text.includes('HIGH RISK') || text === 'HIGH PRIORITY') {
                    cell.classList.add('risk-high');
                } else if (text === 'MEDIUM' || text.includes('MEDIUM RISK') || text === 'MODERATE') {
                    cell.classList.add('risk-medium');
                } else if (text === 'LOW' || text.includes('LOW RISK') || text === 'LOW PRIORITY') {
                    cell.classList.add('risk-low');
                }

                // Status Color Indicators
                if (text === 'GREEN' || text === 'SERVICEABLE' || text === 'CURRENT' || text === 'PASS' || text === 'CLEAR') {
                    cell.classList.add('status-green');
                } else if (text === 'YELLOW' || text === 'LIMITED' || text === 'CAUTION' || text === 'DUE WITHIN 30 DAYS') {
                    cell.classList.add('status-yellow');
                } else if (text === 'ORANGE' || text === 'WARNING') {
                    cell.classList.add('status-orange');
                } else if (text === 'RED' || text === 'GROUNDED' || text === 'LOCKOUT' || text === 'EXPIRED' || text === 'FAIL' || text === 'NO-GO') {
                    cell.classList.add('status-red');
                }

                // GO/NO-GO Indicators
                if (text === 'GO') {
                    cell.classList.add('go-indicator');
                } else if (text === 'NO-GO' || text === 'NOGO') {
                    cell.classList.add('nogo-indicator');
                }

                // Category Indicators (A, B, C, D for defects)
                if (text === 'A' || text === 'A - GROUNDING' || text.includes('CATEGORY A') || text === 'DEF-A') {
                    cell.classList.add('category-a');
                } else if (text === 'B' || text === 'B - LIMITATION' || text.includes('CATEGORY B') || text === 'DEF-B') {
                    cell.classList.add('category-b');
                } else if (text === 'C' || text === 'C - MONITOR' || text.includes('CATEGORY C') || text === 'DEF-C') {
                    cell.classList.add('category-c');
                } else if (text === 'D' || text === 'D - COSMETIC' || text.includes('CATEGORY D') || text === 'DEF-D') {
                    cell.classList.add('category-d');
                }

                // Rating Scale (1-4)
                if (text === '4' || text === '4 - EXEMPLARY' || text.includes('EXEMPLARY')) {
                    cell.classList.add('rating-4');
                } else if (text === '3' || text === '3 - COMPETENT' || text.includes('MEETS STANDARD')) {
                    cell.classList.add('rating-3');
                } else if (text === '2' || text === '2 - DEVELOPING' || text.includes('BELOW STANDARD')) {
                    cell.classList.add('rating-2');
                } else if (text === '1' || text === '1 - UNSATISFACTORY' || text.includes('UNSATISFACTORY')) {
                    cell.classList.add('rating-1');
                }

                // SAIL Levels
                if (text === 'SAIL I' || text === 'SAIL 1') cell.classList.add('sail-1');
                else if (text === 'SAIL II' || text === 'SAIL 2') cell.classList.add('sail-2');
                else if (text === 'SAIL III' || text === 'SAIL 3') cell.classList.add('sail-3');
                else if (text === 'SAIL IV' || text === 'SAIL 4') cell.classList.add('sail-4');
                else if (text === 'SAIL V' || text === 'SAIL 5') cell.classList.add('sail-5');
                else if (text === 'SAIL VI' || text === 'SAIL 6') cell.classList.add('sail-6');

                // Weather Conditions
                if (text.includes('<10 M/S') || text.includes('NONE') || text.includes('>5 KM') || text.includes('>500')) {
                    // Could be a GO condition in weather table
                }
            });

            // Check for weather tables and apply row styling
            var headerCells = table.querySelectorAll('th');
            var isWeatherTable = false;
            headerCells.forEach(function(th) {
                if (th.textContent.includes('GO') || th.textContent.includes('CAUTION') || th.textContent.includes('NO-GO')) {
                    isWeatherTable = true;
                }
            });

            if (isWeatherTable) {
                var rows = table.querySelectorAll('tr');
                rows.forEach(function(row) {
                    var cells = row.querySelectorAll('td');
                    cells.forEach(function(cell, idx) {
                        var headerRow = table.querySelector('tr');
                        var headers = headerRow.querySelectorAll('th');
                        if (headers[idx]) {
                            var headerText = headers[idx].textContent.toUpperCase();
                            if (headerText === 'GO') {
                                cell.classList.add('weather-go');
                            } else if (headerText === 'CAUTION') {
                                cell.classList.add('weather-caution');
                            } else if (headerText === 'NO-GO') {
                                cell.classList.add('weather-nogo');
                            }
                        }
                    });
                });
            }

            // Color code tag rows in Equipment Status Tags table
            var rows = table.querySelectorAll('tr');
            rows.forEach(function(row) {
                var firstCell = row.querySelector('td:first-child');
                if (firstCell) {
                    var text = firstCell.textContent.trim().toUpperCase();
                    if (text.includes('GREEN')) {
                        row.style.background = 'rgba(39, 174, 96, 0.1)';
                    } else if (text.includes('YELLOW')) {
                        row.style.background = 'rgba(241, 196, 15, 0.1)';
                    } else if (text.includes('RED')) {
                        row.style.background = 'rgba(231, 76, 60, 0.1)';
                    } else if (text.includes('WHITE')) {
                        row.style.background = 'rgba(200, 200, 200, 0.2)';
                    }
                }
            });
        });
    }

    function enhanceBlockquotes() {
        var blockquotes = contentArea.querySelectorAll('blockquote');

        blockquotes.forEach(function(bq) {
            var text = bq.textContent.toUpperCase();

            // Critical/Important callouts
            if (text.includes('CRITICAL') || text.includes('IMPORTANT') || text.includes('MANDATORY')) {
                bq.classList.add('critical');
                bq.style.borderLeftColor = '#e74c3c';
                bq.style.background = 'linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(231, 76, 60, 0.03) 100%)';
            }
            // Warning callouts
            else if (text.includes('WARNING') || text.includes('CAUTION')) {
                bq.classList.add('warning');
                bq.style.borderLeftColor = '#f39c12';
                bq.style.background = 'linear-gradient(135deg, rgba(243, 156, 18, 0.1) 0%, rgba(243, 156, 18, 0.03) 100%)';
            }
            // Note callouts
            else if (text.includes('NOTE:') || text.startsWith('NOTE')) {
                bq.classList.add('note');
            }
            // Any "NO-GO" mentions
            else if (text.includes('NO-GO') || text.includes('DO NOT FLY')) {
                bq.classList.add('critical');
                bq.style.borderLeftColor = '#e74c3c';
                bq.style.background = 'linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(231, 76, 60, 0.03) 100%)';
            }
        });
    }

    function styleEmergencySections() {
        var headings = contentArea.querySelectorAll('h2, h3, h4');

        headings.forEach(function(heading) {
            var text = heading.textContent.toUpperCase();

            // Emergency-related headings
            if (text.includes('EMERGENCY') || text.includes('FLY-AWAY') || text.includes('FLYAWAY') ||
                text.includes('CRASH') || text.includes('INCIDENT') || text.includes('ACCIDENT')) {
                heading.classList.add('emergency-heading');
                heading.style.color = '#e74c3c';

                // Add icon if not already present
                if (!heading.innerHTML.includes('fa-')) {
                    heading.innerHTML = '<i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>' + heading.innerHTML;
                }
            }

            // Checklist/Procedure headings
            if (text.includes('CHECKLIST') || text.includes('PROCEDURE') || text.includes('PROTOCOL')) {
                if (!heading.innerHTML.includes('fa-')) {
                    heading.innerHTML = '<i class="fas fa-clipboard-check" style="margin-right: 8px; color: #3498db;"></i>' + heading.innerHTML;
                }
            }

            // Training headings
            if (text.includes('TRAINING') || text.includes('ASSESSMENT') || text.includes('COMPETENCY')) {
                if (!heading.innerHTML.includes('fa-')) {
                    heading.innerHTML = '<i class="fas fa-graduation-cap" style="margin-right: 8px; color: #27ae60;"></i>' + heading.innerHTML;
                }
            }

            // Maintenance headings
            if (text.includes('MAINTENANCE') || text.includes('INSPECTION')) {
                if (!heading.innerHTML.includes('fa-')) {
                    heading.innerHTML = '<i class="fas fa-tools" style="margin-right: 8px; color: #f39c12;"></i>' + heading.innerHTML;
                }
            }
        });
    }

    function styleMnemonics() {
        // Find tables that look like mnemonics (DESCEND, IMSAFE, etc.)
        var tables = contentArea.querySelectorAll('table');

        tables.forEach(function(table) {
            var rows = table.querySelectorAll('tr');
            var isMnemonic = true;
            var letters = '';

            // Check if first column contains single letters that spell something
            rows.forEach(function(row, idx) {
                if (idx === 0) return; // Skip header
                var firstCell = row.querySelector('td:first-child');
                if (firstCell) {
                    var text = firstCell.textContent.trim();
                    // Check for letter or bold letter pattern
                    var letterMatch = text.match(/^\*?\*?([A-Z])\*?\*?$/);
                    if (letterMatch) {
                        letters += letterMatch[1];
                    } else if (text.length === 1 && /[A-Z]/.test(text)) {
                        letters += text;
                    } else if (text.length > 3) {
                        isMnemonic = false;
                    }
                }
            });

            // Known mnemonics
            var knownMnemonics = ['DESCEND', 'IMSAFE', 'DECIDE', 'OODA', 'PAVE', 'SAFETY'];
            if (knownMnemonics.includes(letters) || (letters.length >= 4 && letters.length <= 10 && isMnemonic)) {
                table.classList.add('mnemonic-table');

                // Style the letter cells
                rows.forEach(function(row, idx) {
                    if (idx === 0) return;
                    var firstCell = row.querySelector('td:first-child');
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
        var cells = contentArea.querySelectorAll('td');

        cells.forEach(function(cell) {
            var text = cell.textContent.trim();

            // Replace [ ] with actual checkbox
            if (text === '[ ]') {
                cell.innerHTML = '<input type="checkbox" disabled>';
                cell.style.textAlign = 'center';
            } else if (text === '[x]' || text === '[X]' || text === '[✓]') {
                cell.innerHTML = '<input type="checkbox" checked disabled>';
                cell.style.textAlign = 'center';
            }

            // Style cells that contain checkboxes
            if (cell.textContent.includes('[ ]')) {
                cell.innerHTML = cell.innerHTML.replace(/\[ \]/g, '<input type="checkbox" disabled style="margin-right: 5px;">');
            }
        });
    }

    function addSectionIcons() {
        // Add icons to main section headers based on content
        var h2s = contentArea.querySelectorAll('h2');

        h2s.forEach(function(h2) {
            var text = h2.textContent.toUpperCase();
            var icon = '';

            if (text.includes('INTRODUCTION') || text.includes('PURPOSE') || text.includes('OVERVIEW')) {
                icon = 'fa-info-circle';
            } else if (text.includes('REGULATORY') || text.includes('COMPLIANCE') || text.includes('CAR ')) {
                icon = 'fa-balance-scale';
            } else if (text.includes('AIRCRAFT') || text.includes('FLEET') || text.includes('EQUIPMENT')) {
                icon = 'fa-plane';
            } else if (text.includes('WEATHER') || text.includes('ENVIRONMENTAL')) {
                icon = 'fa-cloud-sun';
            } else if (text.includes('COMMUNICATION')) {
                icon = 'fa-comments';
            } else if (text.includes('SAFETY') || text.includes('SMS') || text.includes('HAZARD')) {
                icon = 'fa-shield-alt';
            } else if (text.includes('BATTERY')) {
                icon = 'fa-battery-full';
            } else if (text.includes('FIRMWARE') || text.includes('SOFTWARE')) {
                icon = 'fa-microchip';
            } else if (text.includes('INSURANCE') || text.includes('LIABILITY')) {
                icon = 'fa-file-contract';
            } else if (text.includes('RECORD') || text.includes('DOCUMENTATION') || text.includes('DOCUMENT CONTROL')) {
                icon = 'fa-folder-open';
            } else if (text.includes('QUICK REFERENCE') || text.includes('REFERENCE CARD')) {
                icon = 'fa-bolt';
            } else if (text.includes('CONTACT')) {
                icon = 'fa-phone';
            } else if (text.includes('SCENARIO') || text.includes('STSC') || text.includes('STANDARD SCENARIO')) {
                icon = 'fa-route';
            } else if (text.includes('SITE SURVEY') || text.includes('FLIGHT PLANNING')) {
                icon = 'fa-map-marked-alt';
            } else if (text.includes('SEARCH') || text.includes('SAR')) {
                icon = 'fa-search-location';
            } else if (text.includes('PERSONNEL') || text.includes('ORGANIZATION') || text.includes('PEOPLE')) {
                icon = 'fa-users';
            } else if (text.includes('CHIEF PILOT') || text.includes('FLIGHT REVIEWER')) {
                icon = 'fa-user-tie';
            } else if (text.includes('PPE') || text.includes('PROTECTIVE')) {
                icon = 'fa-hard-hat';
            } else if (text.includes('TESTING') || text.includes('AIRWORTHINESS')) {
                icon = 'fa-check-double';
            } else if (text.includes('DEFECT')) {
                icon = 'fa-exclamation-circle';
            } else if (text.includes('VISUAL OBSERVER') || text.includes(' VO ')) {
                icon = 'fa-eye';
            } else if (text.includes('TRAINER') || text.includes('INSTRUCTOR')) {
                icon = 'fa-chalkboard-teacher';
            } else if (text.includes('CURRICULUM') || text.includes('PROGRESSION')) {
                icon = 'fa-sitemap';
            } else if (text.includes('RECURRENCY') || text.includes('CURRENCY')) {
                icon = 'fa-redo';
            }

            if (icon && !h2.innerHTML.includes('fa-')) {
                h2.innerHTML = '<i class="fas ' + icon + '" style="margin-right: 10px; color: #3498db;"></i>' + h2.innerHTML;
            }
        });
    }

    // ========================================
    // EXISTING FUNCTIONALITY
    // ========================================

    function buildTOC() {
        var headings = contentArea.querySelectorAll('h2, h3');
        var tocHTML = '<ul>';

        headings.forEach(function(heading, index) {
            var id = 'heading-' + index;
            heading.id = id;

            var level = heading.tagName.toLowerCase();
            // Get text without icons
            var text = heading.textContent;

            tocHTML += '<li><a href="#' + id + '" class="toc-' + level + '">' + text + '</a></li>';
        });

        tocHTML += '</ul>';
        tocContent.innerHTML = tocHTML;

        // Add click handlers
        tocContent.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = link.getAttribute('href').slice(1);
                var target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    function updateTocHighlight() {
        var headings = contentArea.querySelectorAll('h2, h3');
        var tocLinks = tocContent.querySelectorAll('a');
        var scrollTop = window.scrollY;

        var activeIndex = 0;
        headings.forEach(function(heading, index) {
            if (heading.offsetTop <= scrollTop + 100) {
                activeIndex = index;
            }
        });

        tocLinks.forEach(function(link, index) {
            link.classList.toggle('active', index === activeIndex);
        });
    }

    function handleQuickJump(jumpId) {
        var jumpConfig = QUICK_ACCESS[jumpId];
        if (!jumpConfig) return;

        // Check if this is a modal-type quick access
        if (jumpConfig.type === 'modal') {
            // Call the appropriate modal handler
            if (jumpConfig.handler === 'showEmergencyProcedures') {
                showEmergencyProcedures();
            } else if (jumpConfig.handler === 'showFlyAwayScript') {
                showFlyAwayScript();
            } else if (jumpConfig.handler === 'showPreFlightChecklist') {
                showPreFlightChecklist();
            }
            return;
        }

        // Legacy jump behavior for weather minimums, etc.
        var navItem = document.querySelector('[data-section="' + jumpConfig.section + '"]');
        if (navItem) {
            setActiveNav(navItem);
            loadSection(jumpConfig.section);

            // Wait for render then scroll to relevant content
            setTimeout(function() {
                var headings = contentArea.querySelectorAll('h2, h3, h4');
                for (var i = 0; i < headings.length; i++) {
                    var heading = headings[i];
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
        var query = searchModalInput.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters to search...</p>';
            return;
        }

        var results = [];

        // Search through all sections
        Object.keys(RPOC_CONTENT).forEach(function(sectionKey) {
            var section = RPOC_CONTENT[sectionKey];
            var content = section.content;

            // Split into paragraphs/sections
            var paragraphs = content.split('\n\n');
            var currentHeading = '';

            paragraphs.forEach(function(para) {
                // Track headings
                var headingMatch = para.match(/^#{1,4}\s+(.+)$/m);
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

        var resultsHTML = '';
        results.slice(0, 15).forEach(function(result) {
            var excerpt = highlightText(result.text, query);
            resultsHTML += '<div class="search-result-item" data-section="' + result.section + '" data-heading="' + result.heading + '">' +
                '<div class="search-result-section"><i class="fas fa-book" style="margin-right: 5px;"></i>' + result.sectionTitle + '</div>' +
                '<div class="search-result-title">' + result.heading + '</div>' +
                '<div class="search-result-excerpt">' + excerpt + '</div>' +
                '</div>';
        });

        searchResults.innerHTML = resultsHTML;

        // Add click handlers to results
        searchResults.querySelectorAll('.search-result-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var section = item.dataset.section;
                var heading = item.dataset.heading;
                closeSearchModal();
                navigateToResult(section, heading);
            });
        });
    }

    function highlightText(text, query) {
        var regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        return text.replace(regex, '<mark>$1</mark>').substring(0, 200) + '...';
    }

    function navigateToResult(sectionKey, headingText) {
        // Switch to section
        var navItem = document.querySelector('[data-section="' + sectionKey + '"]');
        if (navItem) {
            setActiveNav(navItem);
            loadSection(sectionKey);

            // Scroll to heading
            setTimeout(function() {
                var headings = contentArea.querySelectorAll('h1, h2, h3, h4');
                for (var i = 0; i < headings.length; i++) {
                    var heading = headings[i];
                    if (heading.textContent.includes(headingText)) {
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Highlight briefly
                        heading.style.backgroundColor = 'rgba(52, 152, 219, 0.3)';
                        heading.style.borderRadius = '4px';
                        heading.style.padding = '4px 8px';
                        heading.style.marginLeft = '-8px';
                        setTimeout(function() {
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
});

// Quick Access Configuration - now with modal support
var QUICK_ACCESS = {
    'emergency-procedures': { type: 'modal', handler: 'showEmergencyProcedures' },
    'fly-away': { type: 'modal', handler: 'showFlyAwayScript' },
    'pre-flight': { type: 'modal', handler: 'showPreFlightChecklist' },
    'weather-minimums': { type: 'jump', section: 'operations', search: 'Weather Minimum' }
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
// EMERGENCY PROCEDURES - Card Selection
// ========================================

function showEmergencyProcedures() {
    openQuickAccess('Emergency Procedures');
    qaBackBtn.classList.add('hidden');
    qaCurrentView = 'emergency-list';

    qaContent.innerHTML = `
        <div class="ep-card-grid">
            <div class="ep-card critical" onclick="showProcedure('flyaway')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-plane-departure"></i></div>
                <div class="ep-card-title">Fly-Away Response</div>
                <div class="ep-card-description">Complete loss of aircraft control. Immediate FIC notification required.</div>
            </div>

            <div class="ep-card critical" onclick="showProcedure('descend')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="ep-card-title">DESCEND Protocol</div>
                <div class="ep-card-description">Critical traffic threat response. Immediate altitude reduction.</div>
            </div>

            <div class="ep-card critical" onclick="showProcedure('crash')">
                <span class="ep-card-badge">Critical</span>
                <div class="ep-card-icon"><i class="fas fa-bomb"></i></div>
                <div class="ep-card-title">Crash/Impact Response</div>
                <div class="ep-card-description">Aircraft crash or collision with object, person, or structure.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('lostlink')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-wifi"></i></div>
                <div class="ep-card-title">Lost Link Procedure</div>
                <div class="ep-card-description">Loss of command and control link with aircraft.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('lowbattery')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-battery-quarter"></i></div>
                <div class="ep-card-title">Low Battery Emergency</div>
                <div class="ep-card-description">Critical battery level requiring immediate landing.</div>
            </div>

            <div class="ep-card warning" onclick="showProcedure('icing')">
                <span class="ep-card-badge">Warning</span>
                <div class="ep-card-icon"><i class="fas fa-snowflake"></i></div>
                <div class="ep-card-title">Icing Conditions</div>
                <div class="ep-card-description">Ice accumulation affecting aircraft performance.</div>
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
        'fire': getFireProcedure()
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

// ========================================
// FLY-AWAY SCRIPT (Direct Access)
// ========================================

function showFlyAwayScript() {
    openQuickAccess('Fly-Away Emergency Script');
    qaBackBtn.classList.add('hidden');
    qaContent.innerHTML = getFlyAwayProcedure();
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
                <div class="qa-procedure-title">PRE-FLIGHT CHECKLIST</div>
                <div class="qa-procedure-subtitle">Complete before every flight - Click items to check off</div>
            </div>

            <div class="qa-checklist">
                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-file-alt"></i> Documentation</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Pilot certificate and ID available</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">RPOC documentation accessible</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Site survey completed</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">NOTAM check completed</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Airspace authorization confirmed (if required)</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-user-check"></i> Crew Fitness (IMSAFE)</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>I</strong>llness - No illness affecting performance</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>M</strong>edication - No impairing medications</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>S</strong>tress - Stress levels manageable</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>A</strong>lcohol - No alcohol in past 12 hours, BAC 0.00</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>F</strong>atigue - Adequately rested</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>E</strong>motion - Emotionally fit for duty</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-cloud-sun"></i> Weather</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Current weather checked and within limits</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Wind speed: ≤15 m/s (M30T) / ≤12 m/s (M4TD)</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Visibility: ≥3 km (VLOS minimum)</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Temperature: -20°C to +45°C</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">No precipitation / icing conditions</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Forecast checked for mission duration</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-drone"></i> Aircraft Inspection</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Frame and arms: No cracks, damage, or loose components</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Propellers: No chips, cracks, or damage; securely mounted</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Motors: Spin freely, no debris or obstructions</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Gimbal: Moves freely, camera lens clean</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Sensors: Clean and unobstructed (all directions)</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Antennas: Properly positioned and undamaged</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Landing gear: Stable, no damage</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-battery-full"></i> Batteries</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Aircraft battery: Fully charged, no swelling/damage</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Aircraft battery: Within cycle limit</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Controller battery: Fully charged</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Spare batteries available and charged</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-gamepad"></i> Controller & App</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Controller powered on and linked</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Control sticks functional (full range of motion)</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">App connected, video feed confirmed</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Firmware: Aircraft and controller up to date</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">GPS: Strong signal (≥12 satellites)</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Home point: Set correctly</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">RTH altitude: Set appropriately for terrain</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Failsafe settings: Verified</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-map-marker-alt"></i> Site/Area</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Launch/landing area clear of obstacles</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Bystanders briefed or cleared from area</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Hazards identified and marked</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Emergency procedures reviewed with crew</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Communications check completed</div>
                    </div>
                </div>

                <div class="qa-checklist-section">
                    <div class="qa-checklist-title"><i class="fas fa-check-double"></i> Final Checks</div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Compass calibration: Completed (if required)</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Flight mode: Correct for operation</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">SD card: Inserted, sufficient space</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text">Mission parameters reviewed</div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>CREW BRIEFING COMPLETE</strong></div>
                    </div>
                    <div class="qa-checklist-item">
                        <div class="qa-checklist-checkbox"></div>
                        <div class="qa-checklist-text"><strong>CLEARED FOR TAKEOFF</strong></div>
                    </div>
                </div>
            </div>

            <div class="qa-info-box">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>Checklist Usage</h4>
                    <p>Click each item to mark as complete. All items must be checked before takeoff. Any NO-GO item requires resolution before flight.</p>
                </div>
            </div>
        </div>
    `;

    setupChecklistInteractivity();
}

// Console welcome message
console.log('%cSSAR RPOC Web Tool', 'font-size: 20px; font-weight: bold; color: #1e3a5f;');
console.log('%cSquamish Search and Rescue - RPAS Policy Manual', 'font-size: 12px; color: #666;');
console.log('%cCAR Part IX Compliant | STSC-003 | STSC-004', 'font-size: 10px; color: #3498db;');
console.log('%cVisual Enhancements Active', 'font-size: 10px; color: #27ae60;');
