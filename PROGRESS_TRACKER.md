# SSAR RPOC Reorganization Progress Tracker

**Last Updated:** 2026-03-11
**Status:** COMPLETE

## Project Overview
Reorganizing 42 SSAR RPAS policy documents from 9 categories into 4 consolidated, world-class sections while preserving ALL content and enhancing with regulatory references.

## Source Documents Status

### Raw Extraction Complete
- [x] 1_OPERATIONS_RAW.txt (11 docs, ~67K chars)
- [x] 2_SAFETY_EMERGENCY_RAW.txt (12 docs)
- [x] 3_PEOPLE_EQUIPMENT_RAW.txt (14 docs)
- [x] 4_FORMS_MAINTENANCE_RAW.txt (5 docs)

### Documents Included in Each Section

**Section 1 - Operations (11 docs):**
1. SFOC-001_RPAS_CONOPS.docx
2. SFOC-001_SFOC_Application.docx
3. SFOC-003_Site_Survey_Template.docx
4. OPS-001_Standard_Scenario_Procedures.docx
5. OPS-102_SOM_Search_Operations.docx
6. OPS-104_Environmental_Operations.docx
7. POL-001_RPAS_Operating_Policy.docx
8. POL-005_Communications.docx
9. POL-007_Weather_Minimums.docx
10. POL-011_Site_Survey_Flight_Planning.docx
11. PRO-103_Advanced_Procedures.docx

**Section 2 - Safety & Emergency (12 docs):**
1. PRO-102_Emergency_Procedures.docx
2. ERP-001_Emergency_Response_Procedures.docx
3. SMS-001_Safety_Management_System.docx
4. SOA-001_SORA_Documentation.docx
5. SAF-201_Safety_Policy_Objectives.docx
6. SAF-201_Incident_Reporting.docx
7. SAF-202_Non_Punitive_Reporting.docx
8. SAF-203_Hazard_ID_Risk_Assessment.docx
9. SAF-204_QA_Internal_Audit.docx
10. POL-006_Detect_and_Avoid.docx
11. POL-008_Incident_Accident.docx
12. QAP-001_Quality_Assurance_Program.docx

**Section 3 - People & Equipment (14 docs):**
1. TRN-301_Pilot_Training_Program.docx
2. TRN-302_Training_Foundation.docx
3. TRN-302_Competency_Assessment.docx
4. TRN-303_Advanced_Training.docx
5. TRN-303_Training_Records.docx
6. TRN-304_Training_Progression.docx
7. TRN-305_Pilot_Examiner_Standards.docx
8. PCR-001_Pilot_Competency_Records.docx
9. POL-002_Roles_Responsibilities.docx
10. POL-003_Chief_Pilot_Policy.docx
11. POL-004_PPE.docx
12. POL-009_Insurance_Liability.docx
13. POL-010_Equipment_Testing.docx
14. POL-012_Airworthiness_Mandatory_Events.docx

**Section 4 - Forms & Maintenance (5 docs):**
1. CHK-001_Mission_Checklists.docx
2. PRO-101_Pre_Flight_Post_Flight.docx
3. MCM-001_Maintenance_Control_Manual.docx
4. MAINT-001_Maintenance_Records.docx
5. MNT-002_Firmware_Updates.docx

## Consolidated Document Creation Status

### Target Output Files
- [x] 1_OPERATIONS_MANUAL.md - COMPLETE (~2500 lines)
- [x] 2_SAFETY_EMERGENCY_MANUAL.md - COMPLETE (~2400 lines)
- [x] 3_PEOPLE_EQUIPMENT_MANUAL.md - COMPLETE (~1800 lines)
- [x] 4_FORMS_MAINTENANCE_MANUAL.md - COMPLETE (~900 lines)

## Key Content to Preserve

### Critical Procedures (DO NOT LOSE)
- Fly-Away Script with FIC number: 1-866-541-4101
- Descend Protocol: IDENTIFY -> CALL "DESCEND x3" -> SWITCH Manual -> MANEUVER
- GPS Failure Procedures
- Time-Critical SAR Operations (STSC-004 when 24hr notice not possible)
- Emergency descent procedures

### Regulatory References
- CAR 901.217-901.223 (Part IX RPAS Regulations)
- Standard 922 - RPAS Safety Assurance
- JARUS SORA v2.5 (GRC, ARC, SAIL, OSOs)
- STSC-003 (High Altitude VLOS up to 1000' AGL)
- STSC-004 (Low-Risk BVLOS up to 400' AGL)

### Aircraft Types
- DJI M30T (3.77 kg, 41 min flight, -20 to 50C, IP55)
- DJI Matrice 4TD (2.3 kg, 42 min flight, -20 to 45C, IP54)

### Key Personnel
- Accountable Executive: Dustin Wales
- Chief Pilot: Dustin Wales
- Flight Reviewer: Dustin Wales (SSAR-FR-2026-001)

## User Requirements
- "dig real deep. make these world class"
- "the material within them is made by me and must be maintained"
- "they can be supported and clarified and make awesome by you"
- "just dont lose anything of fucking change important stuff"
- This IS the official RPOC system

## Next Steps
1. Create Section 1 consolidated document
2. Create Section 2 consolidated document
3. Create Section 3 consolidated document
4. Create Section 4 consolidated document
5. Build GitHub Pages web tool

## Notes
- All raw content has been successfully extracted
- Preserving ALL tables, procedures, and regulatory references
- Improving organization and adding cross-references
- Adding regulatory citations where missing

---

## Web Tool Technical Improvements

**Last Updated:** 2026-03-11
**Status:** IN PROGRESS

### Phase 1 - Quick Wins (Critical Fixes) - COMPLETE
- [x] Fix PWA manifest paths for GitHub Pages (A5)
- [x] Fix service worker registration path (Q8)
- [x] Pin Marked.js CDN version to 9.1.6 (DEP2)
- [x] Add Marked security documentation (C1)
- [x] Add aria-label to back-to-top button (X7)
- [x] Add aria-expanded to menu toggle (X1)
- [x] Add visually-hidden search label (X2)
- [x] Add defer to script tags (P4/P5)

### Phase 2 - Medium Effort (Code Quality) - COMPLETE
- [x] Modernize to ES6 syntax (Q1) - var->const/let, arrow functions
- [x] Add keyboard navigation & focus styles (X3/X4)
- [x] Remove invalid CSS selectors :has/:contains (Q6) - replaced with JS classes
- [x] Optimize colorCodeTables function (P6) - lookup table approach
- [x] Fix checkbox accessibility (X6) - added aria-labels
- [x] Add ESLint/Prettier configuration (D2)

### Phase 3 - Large Refactors (Architecture) - PLANNED
- [ ] Implement lazy loading for content (P1)
- [ ] Split app.js into modules (A1)
- [ ] Extract HTML templates (Q2/P2)
- [ ] Add build system - Vite (D1)
- [ ] Separate content from code (A2)
- [ ] Add test coverage (D3)

### Files Modified
| File | Changes |
|------|---------|
| `docs/manifest.json` | Fixed start_url and scope for GitHub Pages |
| `docs/index.html` | SW path, accessibility attrs, pinned marked.js, defer |
| `docs/js/app.js` | ES6 modernization, keyboard nav, optimized functions |
| `docs/css/style.css` | Focus styles, removed invalid selectors, visually-hidden |
| `.eslintrc.json` | NEW - ESLint configuration |
| `.prettierrc` | NEW - Prettier configuration |

### Verification Checklist
- [ ] PWA installs correctly on GitHub Pages
- [ ] Service worker registers without errors
- [ ] Console shows no errors
- [ ] Screen reader announces controls properly
- [ ] Keyboard navigation works throughout
- [ ] No invalid CSS warnings in browser
