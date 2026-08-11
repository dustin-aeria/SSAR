# Sea to Sky SAR RPAS Program - v2.0 Update Notes (2026-08-11)

## Scope
Regulatory update against the CARs Part IX consolidation (current to 2026-03-17, last amended 2026-01-05), JARUS SORA v2.5 alignment, and generalization from a Squamish-only program to the Sea to Sky SAR RPAS Program (Squamish, Whistler, Pemberton SAR).

## 1. Operating authority framework (new)
- Core Operating Rule adopted throughout: fly within the parameters your pilot certificate allows; operations beyond them require a valid SFOC held by your Organization, with the pilot granted privileges under it.
- Level 1 Complex BVLOS (CARs Division VI, CAR 901.87 to 901.96) documented as the RPOC pathway for L1C pilots: max 400' AGL, uncontrolled airspace, sparsely populated (more than 5, up to 25 people/km²) or 1+ km from populated areas, 3 SM visibility clear of cloud (901.34(3)), anti-collision lights (901.38.1), 5+ NM from listed aerodromes (901.47(3)), PIC designated (901.222), Standard 922 declaration with VO DAA per Standard 923 satisfying 901.95(2).
- STSC-003 (high altitude VLOS to 1000' AGL) and STSC-004 (low-risk BVLOS for Advanced pilots) retained as SFOC pathways per AC 903-001 Appendix D; available only where the Organization holds a valid SFOC and the pilot is granted privileges under it.
- The 24-hour ATC notification decision tree removed everywhere (Ops 5.x, 6.4.1, 6.7 checklist, Safety 2.14, Forms checklists, People/Training objectives) and replaced with authority selection per the Core Operating Rule. ATS coordination retained as an SFOC condition for STSC-003.

## 2. Citation corrections
- Fatigue: CAR 901.29 references corrected to CAR 901.19 (901.29 is RPAS Serviceability; serviceability citations retained where correct).
- Records: CAR 901.222 corrected to CAR 901.223; CAR 901.222 (PIC designation for Division VI) added where required.
- Registration/marking: CAR 901.02 / 901.03 corrected to CAR 900.13 / 900.14 (SOR/2025-70 renumbering).
- Safety assurance declaration: CAR 901.76 corrected to CAR 901.194 and Standard 922.
- Insurance: CAR 901.06 reference removed; section reframed as Program Policy.
- Population terms aligned to CAR 900.01 definitions (populated: more than 5 people/km²; sparsely populated: more than 5, up to 25 people/km²).

## 3. SORA alignment (CARs first, JARUS v2.5 on top)
- Stated hierarchy: CARs govern; JARUS SORA v2.5 applied as supporting methodology; where they differ the CARs prevail. Operational volume includes flight geography, contingency volume, and 1:1 ground risk buffer per CAR 900.01 and AC 903-001.
- Process table updated to the SORA v2.5 ten steps (through Containment and the Comprehensive Safety Portfolio).
- iGRC basis corrected to SORA v2.5 Table 2 (1 m / 25 m/s column): BVLOS iGRC 3 (under 50 people/km² band), STSC-003 iGRC 2 (under 5 band). Final GRC values unchanged (2 and 1).
- Mitigation renamed from "M1 Controlled Ground Area" to M1(C) Ground Observation, low robustness, -1 (SORA v2.5 Table 5), with M1(B) noted as an alternative. M2 not-applied rationale retained.
- STSC-003 air risk corrected: initial ARC-c reduced to residual ARC-b via the VLOS strategic mitigation (SORA v2.5 4.5.4), yielding SAIL II per Table 7 (previous table implied GRC1 + ARC-c = SAIL II, which Table 7 does not support). BVLOS remains GRC 2 + ARC-b = SAIL II. TMPR Low, satisfied by VO DAA per Standard 923.
- Containment (Step 8) added: adjacent area 5 km (3 min at max speed, 5 km minimum), LOW robustness for 1 m UA at SAIL II with documented operational limits.
- OSO summary rebuilt to the SORA v2.5 seventeen-OSO set at SAIL II robustness levels.

## 4. Generalization (three-party program)
- Program renamed to Sea to Sky SAR RPAS Program (Squamish, Whistler, Pemberton SAR). "The Program" = shared program; "the Organization" = the participating SAR group conducting the operation.
- Certificates restructured: each Organization holds its own RPOC and any SFOCs; Squamish RPOC OC2607502737 (2026-03-16) recorded; Whistler and Pemberton rows provided. SFOCs held internally by each Organization and referenced against this documentation when applying.
- Each Organization appoints its own Accountable Executive (901.218(2)) and Person Responsible for RPAS Maintenance (901.220); pilot rosters maintained per Organization (901.223).
- Web tool strings (index.html, manifest.json, content.js header) updated; service worker cache bumped to ssar-rpoc-v12.


## 5. v2.0 second pass (same date): S2S rebrand and structure additions
- Program rebranded throughout to the S2S SAR Drone Program (Sea to Sky Corridor Search and Rescue - Regional Drone Program). No standalone Squamish/SSAR branding remains in the manuals, README, web tool strings, or app shell; legacy repo URL unchanged.
- Authorized pilot roster removed. Operations Manual 2.5 now defines Pilot Certification Requirements (certificate held, recency, Program training complete, Chief Pilot sign-off, recorded per CAR 901.223); rosters live in each Organization's internal records. Operations Manual 2.2 is now a per-Organization certificate register template (no certificate numbers in shared policy).
- All personal names replaced with required credentials or per-Organization appointments. Exceptions kept by design: Document Author (Dustin Wales) and the contact line for questions, updates, and inquiries (Dustin Wales, 604-849-2345), now present in every manual's Document Control, the README, and the Safety Manual emergency contact table.
- Training Manual: new Section 12, Program Awareness Training (All SAR Members), for non-program members: why drones, plain-language rules under the current framework, flight team roles, how to help (perimeter, traffic callouts, DESCEND response), what not to do, and awareness-level rapid VO tasking. Former Sections 12 and 13 renumbered to 13 and 14; TOC updated.
- New standalone Site Survey section: 6_SITE_SURVEY_MASTER.md in the repo and a "Site Survey" section in the web tool (nav item + content key "sitesurvey"). Currently a structured placeholder mirroring the master survey format (operational flight information, site details, airspace, population, emergency resources, appendices) pending the region-wide survey; interim direction points crews to the Rapid Site Survey.
- Web tool: hardcoded SAIL IV quick-access panel in app.js replaced with a SAIL II panel matching the Safety Manual (SORA v2.5 Table 14, seventeen OSOs at SAIL II levels); nav label updated; service worker cache bumped to s2s-rpoc-v13.

## 6. Web tool fixes (same date)
- In-document Table of Contents links fixed. Root cause: marked v9 no longer generates heading ids, and buildTOC() was overwriting any ids with generic heading-N values, so every #anchor in the manual TOCs pointed at nothing. app.js now assigns GitHub-style slug ids to all headings after render, buildTOC() preserves them, a delegated click handler smooth-scrolls with the 80px header offset, and style.css adds scroll-margin-top as a safety net for native hash navigation. Sidebar TOC and search behavior unchanged.
- Service worker cache bumped to s2s-rpoc-v14 (app.js and style.css changed).

## Deployment addition
- Supabase: the new "sitesurvey" section needs a NEW row in rpoc_content (section_key "sitesurvey") in addition to syncing updated content for all existing sections. If update-supabase.js only updates existing rows, insert the row first (copy the pattern of an existing row), then sync.

## Deployment
1. Review the diff, then: git add . ; git commit -m "v2.0 regulatory update: CARs Jan 2026, SORA 2.5, Sea to Sky program" ; git push origin main ; vercel --prod --yes --force
2. Sync Supabase: if the live Supabase content has edits newer than content.js, export those first; otherwise run node update-supabase.js (or paste each section via the site's Edit button) so rpoc_content matches content.js.
3. Confirm the PWA picks up cache v12 (hard refresh or clear site data once).

## Follow-ups (not blocking)
- Whistler and Pemberton: obtain RPOCs (application per CAR 901.214 referencing this suite) and any SFOCs they require; fill their rows in Ops Manual 2.2.
- Verify each Organization's current SFOC numbers, validity dates, and named pilots in internal certificate records.
- Drive housekeeping: replace the TOC-only AC 903-001 PDF with the full AC (Appendix D contains the STSC conditions); move PP Renewal.pdf out of the regulations library.
- Legacy internal IDs (e.g. SSAR-FR-2026-001) intentionally retained.
