#!/usr/bin/env python3
import io, re

# ================= OPS 2.2 + 2.5 rewrites =================
OPS_22 = """### 2.2 Certificate Register (Per Organization)

Each Organization maintains its own certificate register internally and references this documentation when applying. The register records, at minimum:

| Record | Detail |
|--------|--------|
| RPOC | Number, issue date, Accountable Executive named on application (CAR 901.214) |
| SFOC(s) | Number, validity period, authorized operations, pilots granted privileges (CAR 903.03/903.04) |
| Standard 922 Declarations | RPAS models and declarations relied upon (CAR 901.95, 901.194) |
| ATS Authorizations | Any standing authorizations for controlled airspace (CAR 901.71) |

The register is made available to Transport Canada on request (CAR 901.217(4), 901.221(2)) and reviewed at least annually.

"""

OPS_25 = """### 2.5 Pilot Certification Requirements

There is no standing roster in this shared documentation; each Organization records its authorized pilots internally (CAR 901.223). A person is a certified pilot under the Program, and may act as PIC, when all of the following are met:

| Requirement | Standard |
|-------------|----------|
| Pilot Certificate | Advanced Operations (CAR 901.64) or Level 1 Complex Operations (CAR 901.90) |
| Recency | Met within the preceding 24 months (CAR 901.65 / 901.91) |
| Program Training | Foundation and aircraft type training completed, competency assessment passed (Training Manual) |
| Authorization | Signed off by the Organization's Chief Pilot and recorded per CAR 901.223 |

Additional privileges:

- **Division VI BVLOS (under the Organization's RPOC):** requires the Level 1 Complex certificate (CAR 901.89) and a designated PIC for the operation (CAR 901.222)
- **STSC-003 / STSC-004 (under the Organization's valid SFOC):** requires the pilot to be granted privileges under that SFOC and to comply with its conditions
- **Visual Observers:** for EVLOS, the VO must hold a pilot certificate (CAR 901.75); for BVLOS, the VO must be trained per Standard 923 and Training Manual Section 6

"""

# ================= Awareness training (Training Manual new S12) =========
AWARENESS = """## 12. Program Awareness Training (All SAR Members)

### 12.1 Purpose and Audience

This module is for SAR members who are NOT part of the drone program. It creates awareness of what the Program does, how RPAS integrate into SAR tasks, and how every member can help keep operations safe and effective. It is not pilot or visual observer certification; those are covered in Sections 3 to 6.

### 12.2 Delivery

| Item | Standard |
|------|----------|
| Format | 30 to 45 minute briefing (team night, new member intake, or field demo) |
| Frequency | New member orientation, plus a refresher at least every 24 months |
| Instructor | Any Program pilot; content based on this section |
| Records | Attendance recorded per CAR 901.223 and the Organization's training records (Section 13) |

### 12.3 Module Content

#### 12.3.1 Why Drones in SAR

- Reconnaissance and situational awareness (zoom and thermal imaging)
- Rapid area search, terrain-following patterns, subject marking and overwatch
- Payload delivery where authorized (communications, warmth, first aid)
- Testing new technologies safely and setting a benchmark for SAR RPAS use

#### 12.3.2 The Rules in Plain Language

- Drones are aircraft; Transport Canada regulates them under CARs Part IX
- Pilot certificates set what a pilot may fly: Basic, Advanced, and Level 1 Complex (low-risk BVLOS under the Organization's RPAS Operator Certificate)
- Operations beyond certificate privileges need a Special Flight Operations Certificate (SFOC) held by the Organization
- **Core Operating Rule: pilots fly within the parameters their certificate allows, or under a valid SFOC when one is held and its conditions are met**
- Emergency security perimeters and advertised events have SAR carve-outs (CAR 900.08(2), 901.41(2)); the crew, not bystanders, makes those calls

#### 12.3.3 The Flight Team

- **Pilot in Command (PIC):** flies the aircraft and owns the go/no-go decision
- **Visual Observer (VO):** watches the airspace and ground, calls traffic and hazards
- **Communications:** handles radio traffic so the PIC and VO can focus
- **Sterile cockpit:** when the crew is heads-down, hold non-urgent questions

#### 12.3.4 How You Can Help

- Perimeter: help keep bystanders and vehicles out of the launch and recovery zone
- Eyes and ears: if you see or hear an aircraft, call it out with a clock bearing ("traffic, three o'clock, low")
- Radio discipline: keep the working channel clear during launch, landing, and emergencies
- DESCEND calls: if you hear "DESCEND, DESCEND, DESCEND," clear the area below the aircraft and stay clear
- Hazard reporting: wires, dogs, people entering the area, changing weather; tell the VO
- Ground team coordination: your presence in the search area supports the risk assessment (ground observation); follow crew direction on where to hold

#### 12.3.5 What Not To Do

- Do not fly personal drones on a task; only Program aircraft under Program authority
- Do not approach a launching, landing, or landed aircraft until props are stopped and the PIC clears you
- Do not stand under the flight path or in the recovery zone
- Do not handle Program kit or batteries unless asked
- Do not distract the crew during flight operations

#### 12.3.6 Rapid VO Tasking (Awareness Level)

A member may be asked to assist as an additional lookout under direct crew supervision. If tasked:

- [ ] Core duties reviewed: airspace watch, sterile cockpit, callout phrasing
- [ ] Site-specific risks and controls reviewed
- [ ] Urgent airspace risks highlighted: aircraft conflict and the emergency descend protocol
- [ ] Member confirms comfort with responsibilities

Full VO qualification requires Section 6 training; awareness-level tasking is supplemental eyes only and never replaces the qualified VO.

### 12.4 Awareness Quick Card

A one-page version of 12.3.4 and 12.3.5 is issued to all members and posted with team resources.

---

"""

# ================= Site survey master (new section) =====================
SITESURVEY = """# S2S SAR Drone Program - Master Site Survey (Sea to Sky Region)

> **STATUS: PLACEHOLDER.** The updated region-wide site survey covering the full Sea to Sky operational area is in preparation and will replace this placeholder. Until it is published here, crews use the Rapid Site Survey (Operations Manual Section 6.4) together with any survey material held by their Organization.

---

| Document | SITE-SURVEY-MASTER |
|----------|--------------------|
| Version | 0.1 (Placeholder) |
| Effective | August 2026 |
| Regulatory Reference | CAR 901.27; CAR 900.01 (operational volume); AC 903-001 Appendix G |
| Author | Dustin Wales |
| Questions, updates, inquiries | Dustin Wales, 604-849-2345 |

---

## 1. Purpose

This master site survey pre-identifies air and ground risk across the entire Sea to Sky operational theatre so that crews responding to dynamic SAR taskings arrive with the regional assessment already done. It satisfies the site survey factors of CAR 901.27, supports determination that the operational volume (flight geography, contingency volume, and 1:1 ground risk buffer per CAR 900.01) is suitable, and complements, never replaces, the on-scene Rapid Site Survey.

## 2. Operational Flight Information (Template)

| Field | Entry |
|-------|-------|
| Plan Name | S2S SAR Drone Program Operations |
| Operator | The participating Organization conducting the tasking |
| Pilots | Certified pilots per Operations Manual 2.5; recorded per Organization (CAR 901.223) |
| Dates of Operation | Year-round |
| Time of Operation | Day and night, per certificate and equipment capability |
| RPAS Models | Program fleet per Forms & Maintenance Manual Section 2, plus Organization-held types recorded in their register |
| Flight Profiles | VLOS, EVLOS, and BVLOS reconnaissance and search; payload delivery where authorized; profiles per Operations Manual Sections 5 and 7 |
| Purpose | Life-saving search and rescue in support of a public authority |

## 3. Site Details (To Be Completed in Updated Survey)

- **Operational Boundaries:** [Attach region-wide boundary map covering all participating Organizations' SAR areas; note municipal exclusions where applicable]
- **Access:** Ground vehicle primary; air or water insertion as tasked; launch site selected on scene per Rapid Site Survey
- **Topography:** Coast Mountains terrain to 2,000+ m, deep river valleys, dense temperate rainforest, glaciated alpine, major water bodies including Howe Sound and regional lakes and rivers
- **Hazard Assessment Categories:** terrain (GPS shadowing, slope collision, elevation change), vegetation (canopy obstruction, deadfall), weather (rapid change, valley and ridge winds, fog), water (loss and recovery, currents, safe scuttle policy), human activity (recreation corridors, climbing areas, trails), wildlife, and infrastructure (wires, lifts, towers)
- **Mitigations:** terrain model review, obstacle-sensing aircraft under canopy, on-site anemometer, water scuttle policy, bystander perimeter procedures

## 4. Airspace Assessment (To Be Completed in Updated Survey)

- [ ] Aerodromes and heliports across the region identified with BVLOS 5 NM standoffs mapped (CAR 901.47(3))
- [ ] Controlled airspace boundaries and floors mapped; authorization pathways noted (CAR 901.71)
- [ ] ATS units, frequencies, and coordination contacts tabulated
- [ ] Known low-level traffic patterns (heli-ski, sightseeing, floatplane, medevac) documented by area and season

## 5. Population and Ground Environment (To Be Completed in Updated Survey)

- [ ] Population density mapped per AC 903-001 Appendix G, identifying populated (more than 5 people/km²) and sparsely populated (more than 5, up to 25 people/km²) zones relevant to Division VI BVLOS
- [ ] Recreation hotspots and seasonal assembly areas flagged
- [ ] Controlled ground area and ground observation practices referenced (Safety Manual 3.5.2)

## 6. Emergency Resources

- [ ] Hospitals, ambulance stations, and helipads by area
- [ ] Fly-away reporting contacts (FIC) and regional ATS numbers (Operations Manual Section 13)

## 7. Appendices (To Be Attached)

- A: Region-wide boundary map, per-Organization overlays
- B: Terrain and elevation reference models
- C: Airspace chart extracts and frequency card
- D: Population density map extracts

---

*Interim direction: until the updated survey is published, the Rapid Site Survey (Operations Manual 6.4) is the minimum standard for every launch, and any Organization-held site survey remains in effect for its area.*
"""

# ================= app.js SAIL II panel =================================
OSOS = [
 ("01","Operator competent and/or proven","L","RPOC held; S2S manual suite","MET"),
 ("02","UAS manufactured by competent entity","NR","DJI; Standard 922 declarations","N/R"),
 ("03","UAS maintained by competent entity","L","Maintenance Control Manual","MET"),
 ("04","Designed to airworthiness design standards","NR","Not required at SAIL II","N/R"),
 ("05","Designed for system safety and reliability","NR","Not required at SAIL II","N/R"),
 ("06","C3 link characteristics appropriate","L","OcuSync; C2 link margin checks","MET"),
 ("07","Conformity check of UAS configuration","L","Pre-flight inspection; firmware management","MET"),
 ("08","Operational procedures defined, validated, adhered to","M","Operations Manual; checklists; QA audits","MET"),
 ("09","Remote crew trained and current","L","Training Manual; recency per CAR 901.91","MET"),
 ("13","External services adequate","L","NAV Drone; FIC; weather services","MET"),
 ("16","Multi crew coordination","L","Crew briefings; POL-005 communications","MET"),
 ("17","Remote crew fit to operate","L","CAR 901.19; fitness policy (Training Manual 2)","MET"),
 ("18","Automatic flight envelope protection","NR","Not required at SAIL II","N/R"),
 ("19","Safe recovery from human error","NR","Not required at SAIL II","N/R"),
 ("20","HMI evaluation performed","L","DJI Pilot 2 familiarization training","MET"),
 ("23","Environmental conditions defined and adhered to","L","Weather minimums (Operations Manual 10)","MET"),
 ("24","Designed for adverse environmental conditions","NR","IP54/IP55 aircraft (exceeds requirement)","N/R"),
]

rows = ""
for oid, name, lvl, ev, st in OSOS:
    lvlcls = {"L":"low","M":"medium"}.get(lvl)
    lvlhtml = f'<span class="sail-level {lvlcls}">{ {"L":"LOW","M":"MEDIUM"}[lvl] }</span>' if lvlcls else '<span style="color: var(--text-secondary);">NR</span>'
    sthtml = '<strong style="color: #1e8449;">MET</strong>' if st == "MET" else '<span style="color: var(--text-secondary);">N/R</span>'
    rows += f"""                        <tr>
                            <td style="font-weight: 700; text-align: center;">{oid}</td>
                            <td><strong>{name}</strong></td>
                            <td style="text-align: center;">{lvlhtml}</td>
                            <td style="font-size: 0.9rem;">{ev}</td>
                            <td style="text-align: center;">{sthtml}</td>
                        </tr>
"""

SAIL_FN = f"""// ========================================
// SAIL II ASSESSMENT
// ========================================

function showSAILAssessment() {{
    openQuickAccess('SAIL II Compliance Assessment');
    qaBackBtn.classList.add('hidden');

    qaContent.innerHTML = `
        <div class="qa-procedure">
            <div class="qa-procedure-header">
                <div class="qa-procedure-icon success"><i class="fas fa-certificate"></i></div>
                <div class="qa-procedure-title">SORA SAIL II OSO ASSESSMENT</div>
                <div class="qa-procedure-subtitle">Specific Assurance and Integrity Level II - Operational Safety Objectives (JARUS SORA v2.5, Table 14)</div>
            </div>

            <div class="qa-info-box" style="margin-bottom: 24px;">
                <i class="fas fa-info-circle"></i>
                <div class="qa-info-box-content">
                    <h4>SAIL II Classification</h4>
                    <p>S2S operations are assessed at SAIL II under JARUS SORA v2.5: final GRC 1 to 2 with residual ARC-b (VLOS strategic mitigation applied for high-altitude operations). Operations above 400' AGL are conducted only under a valid SFOC per its conditions. Authoritative assessment: Safety & Emergency Manual, Section 3.</p>
                </div>
            </div>

            <div style="overflow-x: auto;">
                <table class="qa-reference-table sail-assessment-table">
                    <thead>
                        <tr>
                            <th style="width: 70px;">OSO#</th>
                            <th>Objective</th>
                            <th style="width: 90px;">SAIL II Level</th>
                            <th style="width: 260px;">S2S Evidence</th>
                            <th style="width: 80px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
{rows}                    </tbody>
                </table>
            </div>

            <div class="qa-info-box" style="margin-top: 24px;">
                <i class="fas fa-book"></i>
                <div class="qa-info-box-content">
                    <p style="margin: 0;">NR = not required to be shown to the authority at SAIL II. Full compliance narrative and the Comprehensive Safety Portfolio mapping are maintained in the Safety & Emergency Manual, Sections 3.8 to 3.10.</p>
                </div>
            </div>
        </div>
    `;
}}
"""

# ================= replacement pair sets ================================
NAME_FIXES = [
 ("| Accountable Executive | Dustin Wales | 2026-03-09 |",
  "| Accountable Executive | Appointed per Organization | Per Organization |"),
 ("| Chief Pilot | Dustin Wales | 2026-03-09 |",
  "| Chief Pilot | Appointed per Organization | Per Organization |"),
 ("| Accountable Executive | Dustin Wales | Overall SMS accountability, resource allocation |",
  "| Accountable Executive | Appointed per Organization (CAR 106.02, 901.218(2)) | Overall SMS accountability, resource allocation |"),
 ("| Chief Pilot | Dustin Wales | Day-to-day safety management, risk acceptance |",
  "| Chief Pilot | Appointed per Organization (Level 1 Complex certificate; Flight Reviewer rating recommended) | Day-to-day safety management, risk acceptance |"),
 ("| Accountable Executive | Dustin Wales |",
  "| Accountable Executive | Appointed per Organization |"),
 ("| Chief Pilot | Dustin Wales |",
  "| Chief Pilot | Appointed per Organization |"),
 ("I, Dustin Wales, as Accountable Executive, am accountable for the safety of Program RPAS operations and commit to:",
  "The Accountable Executive appointed by each participating Organization is accountable for the safety of that Organization's Program RPAS operations and commits to:"),
 ("| the Program Chief Pilot (Dustin Wales) | 604-849-2345 | All flight emergencies |",
  "| Program Lead: Dustin Wales | 604-849-2345 | All flight emergencies; program questions, updates, and inquiries |"),
 ("**Chief Pilot: Dustin Wales**",
  "**Chief Pilot: appointed per Organization. Required credentials: Level 1 Complex pilot certificate (CAR 901.90); Flight Reviewer rating (CAR 901.176) recommended.**"),
 ("**Chief Instructor: Dustin Wales**",
  "**Chief Instructor: appointed per Organization. Required credentials: Flight Reviewer rating (CAR 901.176); for Level 1 Complex ground school delivery, meets chief ground instructor requirements (CAR 901.183).**"),
 ("| Flight Reviewer | Dustin Wales |\n| Designation Number | SSAR-FR-2026-001 |",
  "| Flight Reviewer | Per Organization; pilot certificate endorsed with Flight Reviewer rating (CAR 901.176) |\n| Affiliation | Declared training provider per CAR 901.175 and Standard 921 |"),
 ("| Dustin Wales | Dustin Wales | Pre/Post Flight | Complex Repairs |",
  "| Appointed per Organization | Person Responsible for RPAS Maintenance (CAR 901.220) | Pre/Post Flight | Complex Repairs |"),
]

REVISION_ADDS = [
 ("| 2026-03-09 | 1.0 | Initial consolidated Operations Manual | Dustin Wales |",
  "| 2026-03-09 | 1.0 | Initial consolidated Operations Manual | Dustin Wales |\n| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |\n\n**Document Author:** Dustin Wales\n\n**Questions, updates, inquiries:** Dustin Wales, 604-849-2345"),
 ("| 2026-03-09 | 1.0 | Initial consolidated Safety & Emergency Manual | Dustin Wales |",
  "| 2026-03-09 | 1.0 | Initial consolidated Safety & Emergency Manual | Dustin Wales |\n| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |\n\n**Document Author:** Dustin Wales\n\n**Questions, updates, inquiries:** Dustin Wales, 604-849-2345"),
 ("| 2026-03-09 | 1.0 | Initial consolidated People & Equipment Manual | Dustin Wales |",
  "| 2026-03-09 | 1.0 | Initial consolidated People & Equipment Manual | Dustin Wales |\n| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |\n\n**Document Author:** Dustin Wales\n\n**Questions, updates, inquiries:** Dustin Wales, 604-849-2345"),
 ("| 2026-03-09 | 1.0 | Initial consolidated Forms & Maintenance Manual | Dustin Wales |",
  "| 2026-03-09 | 1.0 | Initial consolidated Forms & Maintenance Manual | Dustin Wales |\n| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |\n\n**Document Author:** Dustin Wales\n\n**Questions, updates, inquiries:** Dustin Wales, 604-849-2345"),
 ("| 2026-03-09 | 1.0 | Initial Training Program Manual | Dustin Wales |",
  "| 2026-03-09 | 1.0 | Initial Training Program Manual | Dustin Wales |\n| 2026-08-11 | 2.0 | Regulatory update; S2S rebrand; Program Awareness Training added | Dustin Wales |\n\n**Document Author:** Dustin Wales\n\n**Questions, updates, inquiries:** Dustin Wales, 604-849-2345"),
]

PARTICIPANT_FIX = [
 ("by its participating organizations: the Sea to Sky SAR RPAS Program, Whistler Search and Rescue, and Pemberton District Search and Rescue.",
  "by its participating Sea to Sky corridor search and rescue organizations."),
 ("by its participating organizations (Squamish, Whistler, and Pemberton SAR), operating",
  "by its participating Sea to Sky corridor search and rescue organizations, operating"),
 ("(Squamish, Whistler, Pemberton and surrounding terrain)",
  "(the full corridor and surrounding terrain)"),
]

REBRAND = [
 ("# Sea to Sky SAR RPAS Operations Manual", "# S2S SAR Drone Program - Operations Manual"),
 ("# Sea to Sky SAR Safety & Emergency Manual", "# S2S SAR Drone Program - Safety & Emergency Manual"),
 ("# Sea to Sky SAR People & Equipment Manual", "# S2S SAR Drone Program - People & Equipment Manual"),
 ("# Sea to Sky SAR Forms & Maintenance Manual", "# S2S SAR Drone Program - Forms & Maintenance Manual"),
 ("# Sea to Sky SAR RPAS Training Program Manual", "# S2S SAR Drone Program - Training Manual"),
 ("## Sea to Sky SAR RPAS Program - Squamish | Whistler | Pemberton", "## Sea to Sky Corridor Search and Rescue - Regional Drone Program"),
 ("the Sea to Sky SAR RPAS Program", "the S2S SAR Drone Program"),
 ("Sea to Sky SAR RPAS Program", "S2S SAR Drone Program"),
 ("Sea to Sky SAR RPOC", "S2S SAR Drone Program RPOC"),
 ("Sea to Sky SAR RPAS", "S2S SAR Drone Program"),
]

def apply_pairs(t, pairs, label):
    n = 0
    for old, new in pairs:
        c = t.count(old)
        if c: t = t.replace(old, new); n += c
    print(f"  {label}: {n}")
    return t

def span_replace(t, a, b, new, label):
    s = t.find(a)
    if s < 0: print(f"  !! start missing: {label}"); return t
    e = t.find(b, s + len(a))
    if e < 0: print(f"  !! end missing: {label}"); return t
    print(f"  ok: {label}")
    return t[:s] + new + t[e:]

def process(path, ops=False, training=False, contentjs=False):
    print(f"\n== {path}")
    t = io.open(path, encoding="utf-8").read()
    if ops or contentjs:
        t = span_replace(t, "### 2.2 ", "### 2.3 ", OPS_22, "ops 2.2")
        t = span_replace(t, "### 2.5 ", "### 2.6 Operating Area", OPS_25, "ops 2.5")
    if training or contentjs:
        t = t.replace("## 13. Document Control", "## 14. Document Control")
        t = t.replace("## 12. Training Records", "## 13. Training Records")
        t = t.replace("## 13. Training Records", AWARENESS + "## 13. Training Records", 1) if training else t.replace("## 13. Training Records", AWARENESS + "## 13. Training Records", 1)
        t = t.replace("12. [Training Records](#12-training-records)\n13. [Document Control](#13-document-control)",
                      "12. [Program Awareness Training](#12-program-awareness-training-all-sar-members)\n13. [Training Records](#13-training-records)\n14. [Document Control](#14-document-control)")
    t = apply_pairs(t, PARTICIPANT_FIX, "participants")
    t = apply_pairs(t, NAME_FIXES, "names to credentials")
    t = apply_pairs(t, REVISION_ADDS, "revision + contact")
    t = apply_pairs(t, REBRAND, "rebrand")
    io.open(path, "w", encoding="utf-8").write(t)

process("1_OPERATIONS_MANUAL.md", ops=True)
process("2_SAFETY_EMERGENCY_MANUAL.md")
process("3_PEOPLE_EQUIPMENT_MANUAL.md")
process("4_FORMS_MAINTENANCE_MANUAL.md")
process("5_TRAINING_MANUAL.md", training=True)
process("docs/js/content.js", contentjs=True)

# ---- site survey: standalone file + content.js key ----
io.open("6_SITE_SURVEY_MASTER.md", "w", encoding="utf-8").write(SITESURVEY)
print("\n6_SITE_SURVEY_MASTER.md written")

cj = io.open("docs/js/content.js", encoding="utf-8").read()
idx = cj.rfind("\n};")
assert idx > 0, "content.js terminator not found"
ss_js = ',\n    sitesurvey: {\n        title: "Site Survey",\n        icon: "fa-map-marked-alt",\n        docCount: 1,\n        content: `' + SITESURVEY.replace("`", "'").replace("${", "$ {") + '`\n    }\n'
# insert before final };  (after the closing brace of the last section)
cj = cj[:idx] + ss_js + cj[idx:]
io.open("docs/js/content.js", "w", encoding="utf-8").write(cj)
print("content.js: sitesurvey section added")

# ---- index.html: nav item + SAIL label + rebrand ----
ih = io.open("docs/index.html", encoding="utf-8").read()
NAV_ADMIN = '''<li class="nav-item" data-section="admin">'''
NAV_NEW = '''<li class="nav-item" data-section="sitesurvey">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>Site Survey</span>
                        <span class="doc-count">Master</span>
                    </li>
                    <li class="nav-item" data-section="admin">'''
c = ih.count(NAV_ADMIN); ih = ih.replace(NAV_ADMIN, NAV_NEW, 1)
ih = ih.replace("<span>SAIL IV Assessment</span>", "<span>SAIL II Assessment</span>")
ih = apply_pairs(ih, REBRAND, "index rebrand")
io.open("docs/index.html", "w", encoding="utf-8").write(ih)
print(f"index.html: nav inserted ({c}), SAIL label fixed")

# ---- app.js: replace SAIL function, rebrand SSAR -> S2S ----
aj = io.open("docs/js/app.js", encoding="utf-8").read()
start = aj.find("// ========================================\n// SAIL IV ASSESSMENT")
assert start > 0, "SAIL banner not found"
fn_start = aj.find("function showSAILAssessment()", start)
end = aj.find("\n}\n", fn_start)
assert end > fn_start, "SAIL function end not found"
aj = aj[:start] + SAIL_FN + aj[end+3:]
aj = aj.replace("SSAR", "S2S")
io.open("docs/js/app.js", "w", encoding="utf-8").write(aj)
print("app.js: SAIL II panel installed, rebranded")

# ---- manifest + sw ----
mf = io.open("docs/manifest.json", encoding="utf-8").read()
mf = apply_pairs(mf, REBRAND + [("Sea to Sky SAR", "S2S SAR")], "manifest")
io.open("docs/manifest.json", "w", encoding="utf-8").write(mf)
sw = io.open("docs/sw.js", encoding="utf-8").read().replace("ssar-rpoc-v12", "s2s-rpoc-v13")
io.open("docs/sw.js", "w", encoding="utf-8").write(sw)
print("manifest + sw updated (cache s2s-rpoc-v13)")

# ---- README ----
r = io.open("README.md", encoding="utf-8").read()
r = apply_pairs(r, PARTICIPANT_FIX, "readme participants")
r = r.replace("# Sea to Sky SAR RPAS Program (RPOC)", "# S2S SAR Drone Program")
r = r.replace("**Sea to Sky SAR RPAS Program - Squamish | Whistler | Pemberton Search and Rescue**",
              "**Sea to Sky Corridor Search and Rescue - Regional Drone Program**")
r = r.replace("Sea to Sky SAR RPAS Program (Squamish, Whistler, and Pemberton Search and Rescue)",
              "S2S SAR Drone Program (the participating Sea to Sky corridor search and rescue organizations)")
r = apply_pairs(r, REBRAND, "readme rebrand")
r = r.replace("""Each participating organization appoints its own Accountable Executive and Person Responsible for RPAS Maintenance for its RPOC. Program-level roles:

| Role | Name | Responsibilities |""",
"""Each participating organization appoints its own Accountable Executive and Person Responsible for RPAS Maintenance for its RPOC. Program roles are defined by required credentials, not named individuals:

| Role | Required Credentials | Responsibilities |""")
r = r.replace("| Program Lead / AE (Squamish) | Dustin Wales | Overall RPAS program accountability |",
              "| Accountable Executive | Appointed per organization (CAR 106.02, 901.218(2)) | Overall RPAS program accountability |")
r = r.replace("| Chief Pilot | Dustin Wales | Day-to-day operations, pilot management |",
              "| Chief Pilot | Level 1 Complex certificate; Flight Reviewer rating recommended | Day-to-day operations, pilot management |")
r = r.replace("| Flight Reviewer | Dustin Wales (SSAR-FR-2026-001) | Assessments, endorsements |",
              "| Flight Reviewer | Pilot certificate endorsed per CAR 901.176; declared provider affiliation (CAR 901.175) | Assessments, endorsements |")
r = r.replace("| Safety Manager | Dustin Wales | Hazard registry, audits, safety reporting |",
              "| Safety Manager | Appointed per organization | Hazard registry, audits, safety reporting |")
if "Questions, updates, inquiries" not in r:
    r = r.replace("## Emergency Contacts",
                  "## Document Author and Contact\n\n**Author:** Dustin Wales. For any questions, updates, or inquiries about this documentation: **Dustin Wales, 604-849-2345**.\n\n## Emergency Contacts")
io.open("README.md", "w", encoding="utf-8").write(r)
print("README updated")
print("\npatch3 done")
