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

        // Switch to the section
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

// Quick Access Configuration
var QUICK_ACCESS = {
    'emergency-procedures': { section: 'safety', search: 'Emergency Procedures' },
    'fly-away': { section: 'safety', search: 'Fly-Away' },
    'pre-flight': { section: 'forms', search: 'Pre-Flight' },
    'weather-minimums': { section: 'operations', search: 'Weather Minimum' }
};

// Console welcome message
console.log('%cSSAR RPOC Web Tool', 'font-size: 20px; font-weight: bold; color: #1e3a5f;');
console.log('%cSquamish Search and Rescue - RPAS Policy Manual', 'font-size: 12px; color: #666;');
console.log('%cCAR Part IX Compliant | STSC-003 | STSC-004', 'font-size: 10px; color: #3498db;');
console.log('%cVisual Enhancements Active', 'font-size: 10px; color: #27ae60;');
