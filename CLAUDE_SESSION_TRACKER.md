# SSAR RPOC Web Tool - Claude Code Session Tracker

**Last Updated:** 2026-03-20
**Project Status:** ACTIVE - Production Ready
**Live URL:** https://ssarrpas.ca

---

## Quick Resume Prompt

Copy and paste this prompt to continue working on this project:

```
I'm continuing work on the SSAR RPOC Web Tool located at:
C:\Users\Dusti\OneDrive\Desktop\SSAR Web Tool

This is a web-based RPAS Policy & Operations Manual for Squamish Search and Rescue.

Key details:
- Live at: https://ssarrpas.ca
- Hosted on: Vercel (project: ssarrpas)
- Content stored in: Supabase (dynamic, editable)
- GitHub: https://github.com/dustin-aeria/SSAR.git

Tech stack:
- Static site with vanilla JS
- Supabase for content management (table: rpoc_content)
- Marked.js for markdown rendering
- Vercel for hosting

Supabase credentials:
- URL: https://falrucbgwtpnzvodmytu.supabase.co
- Anon key is in docs/js/app.js

Please read CLAUDE_SESSION_TRACKER.md for full context, then help me with: [YOUR REQUEST HERE]
```

---

## Project Overview

### What This Is
A comprehensive web-based RPAS (drone) policy and operations manual for Squamish Search and Rescue (SSAR). It contains all documentation required for their RPAS Operator Certificate (RPOC) issued by Transport Canada.

### RPOC Certificate Details
- **Certificate Number:** OC2607502737
- **Issued:** March 16, 2026
- **Operator:** Squamish Search and Rescue Society
- **Accountable Executive:** Dustin Wales
- **Email:** dustin.wales@squamishsar.org
- **Phone:** 604-849-2345

---

## Architecture

### File Structure
```
SSAR Web Tool/
├── docs/                    # Web app (served by Vercel)
│   ├── index.html          # Main HTML
│   ├── css/style.css       # All styles
│   ├── js/
│   │   ├── app.js          # Main application logic
│   │   └── content.js      # Static content fallback
│   ├── sw.js               # Service worker (cache: ssar-rpoc-v11)
│   └── manifest.json       # PWA manifest
├── licenses/               # Pilot certificates (PDFs)
├── Regulations/            # TC regulations (PDFs)
├── vercel.json            # Vercel config (serves from docs/)
├── .eslintrc.json         # ESLint config
├── .prettierrc            # Prettier config
└── CLAUDE_SESSION_TRACKER.md  # This file
```

### Content Management
- **Primary:** Supabase `rpoc_content` table
- **Fallback:** Static `content.js` file
- **Sections:** operations, safety, people, training, forms, admin

### Supabase Table Schema
```sql
rpoc_content (
    id UUID PRIMARY KEY,
    section_key TEXT UNIQUE,  -- 'operations', 'safety', etc.
    title TEXT,
    icon TEXT,
    doc_count INTEGER,
    content TEXT,             -- Markdown content
    version INTEGER,
    status TEXT,              -- 'active'
    updated_at TIMESTAMPTZ,
    updated_by TEXT
)
```

### Key Integrations
1. **Supabase** - Content storage and editing
2. **Vercel** - Hosting and deployment
3. **GitHub** - Source control (dustin-aeria/SSAR)
4. **Marked.js** - Markdown rendering

---

## Features Implemented

### Core Features
- [x] Six content sections (Operations, Safety, People, Training, Forms, Admin)
- [x] Dynamic content loading from Supabase
- [x] Inline content editor (click Edit button in header)
- [x] Markdown toolbar (bold, italic, headings, lists, tables, links)
- [x] Split/preview editing modes
- [x] Search across all sections (Ctrl+K)
- [x] Table of Contents with smooth scroll navigation
- [x] Dark/light theme toggle
- [x] Print functionality
- [x] PWA support (installable, offline capable)
- [x] Mobile responsive design

### Visual Enhancements
- [x] Color-coded risk levels (Extreme, High, Medium, Low)
- [x] Status indicators (Green, Yellow, Red)
- [x] SAIL level styling
- [x] Category badges (A, B, C, D)
- [x] Emergency procedure highlighting
- [x] Section icons

### Recent Fixes (March 2026)
- [x] Fixed temporal dead zone errors (lookup tables moved before init)
- [x] Fixed TOC navigation (scrollIntoView with scroll-margin)
- [x] Fixed responsive layout (content fills available width)
- [x] Cleaned up duplicate Vercel projects
- [x] Added RPOC certificate details (OC2607502737)
- [x] Updated email to dustin.wales@squamishsar.org

---

## Authorized Pilots

| Name | Certification | Certificate # | Role |
|------|---------------|---------------|------|
| Dustin Wales | Level 1 Complex + Flight Reviewer | PC1903576891 | Chief Pilot/AE |
| Michael Adams | Advanced Operations | PC2513272613 | PIC |
| Angela Wagner | Advanced Operations | PC2513172525 | PIC |
| David Thanh | Advanced Operations | PC2205100242 | PIC |
| Jacob Lagercrantz | Advanced Operations | PC2203399477 | PIC |
| Philip Bonham | Advanced Operations | PC2329738112 | PIC |
| Michael Rafferty | Advanced Operations | PC2515374690 | PIC |
| Jeffrey Fielding | Advanced Operations | PC2406844456 | PIC |
| Michelle Bech | Advanced Operations | PC2307121179 | PIC |

---

## Deployment Process

### Quick Deploy
```bash
cd "C:\Users\Dusti\OneDrive\Desktop\SSAR Web Tool"
git add .
git commit -m "Your message"
git push origin main
vercel --prod --yes --force
```

### Service Worker Cache
When making changes, bump the cache version in `docs/sw.js`:
```javascript
const CACHE_NAME = 'ssar-rpoc-v11';  // Increment this
```

### Vercel CLI
- Already logged in as: dustin-aeria
- Project linked: ssarrpas
- Scope: dustin-aerias-projects

---

## Supabase Access

### Credentials
- **URL:** https://falrucbgwtpnzvodmytu.supabase.co
- **Dashboard:** https://supabase.com/dashboard
- **Anon Key:** In `docs/js/app.js` (line 5-6)

### RLS Policies
- Allow public read (SELECT)
- Allow insert (for migrations)
- Allow update (for web editor)

### Update Content via Script
```bash
cd "C:\Users\Dusti\OneDrive\Desktop\SSAR Web Tool"
node update-supabase.js
```

---

## Common Tasks

### Edit Content
1. Go to https://ssarrpas.ca
2. Navigate to desired section
3. Click green Edit button (pencil icon) in header
4. Edit markdown content
5. Click Save

### Add New Pilot
1. Edit Operations section
2. Find "2.5 Authorized Pilots" table
3. Add row with pilot details
4. Save

### Update Styles
1. Edit `docs/css/style.css`
2. Bump cache version in `docs/sw.js`
3. Deploy with `vercel --prod --yes --force`

### Debug Issues
1. Open browser DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed requests
4. Clear site data if caching issues: Application > Storage > Clear site data

---

## Known Issues / Future Improvements

### Potential Enhancements
- [ ] Rich text editor (instead of raw markdown)
- [ ] Version history for content changes
- [ ] User authentication for editing
- [ ] PDF export functionality
- [ ] Offline editing with sync

### Technical Debt
- [ ] Split app.js into modules (Phase 3 from original plan)
- [ ] Add build system (Vite)
- [ ] Add test coverage

---

## Contact

**Project Owner:** Dustin Wales
**Email:** dustin.wales@squamishsar.org
**Organization:** Squamish Search and Rescue

---

*This tracker was created to enable seamless continuation of Claude Code sessions.*
