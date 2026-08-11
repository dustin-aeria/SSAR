#!/usr/bin/env python3
import io, re

OPS_641_OLD_START = "#### 6.4.1 Scenario Selection for Time-Critical Operations"
OPS_641_END = "### 6.5 Flight Authorization and Filing"
OPS_641_NEW = """#### 6.4.1 Operating Authority Selection for Time-Critical Operations

During the Rapid Site Survey, the PIC identifies the operating authority available and flies within it (Core Operating Rule, Section 1.3.1):

| Authority | Availability Check | Capability |
|-----------|--------------------|------------|
| Pilot certificate (Division IV/V) | Always available to certified, current pilots | VLOS / EVLOS / sheltered, max 400' AGL |
| Organization RPOC (Division VI) | Pilot holds Level 1 Complex certificate; Division VI conditions met (Section 5.3.1) | BVLOS, max 400' AGL, uncontrolled airspace, no ATS coordination required |
| Organization SFOC | SFOC valid, pilot granted privileges, all SFOC conditions (including ATS coordination) can be met before launch | STSC-003 high altitude VLOS to 1000' AGL; STSC-004 BVLOS for Advanced pilots |

> **This authority selection is a mandatory element of the Rapid Site Survey for all SAR callouts.**

"""

OPS_CHK5_OLD = """#### 5. Scenario Selection (Time-Critical)
- [ ] 24-hour ATC notification feasible? (If NO, STSC-004 only)
- [ ] If STSC-004: Maximum altitude set to 400' AGL
- [ ] If STSC-004: Terrain-following profile briefed
- [ ] Crew briefed on operational constraints"""
OPS_CHK5_NEW = """#### 5. Operating Authority (Time-Critical)
- [ ] Authority identified: certificate privileges / RPOC Division VI (L1C pilot) / valid SFOC
- [ ] If SFOC privileges used: pilot granted, all SFOC conditions (incl. ATS coordination) met
- [ ] Maximum altitude set per authority selected (400' AGL unless SFOC permits higher)
- [ ] Terrain-following profile briefed
- [ ] Crew briefed on operational constraints"""

SAFETY_214_START = "### 2.14 Time-Critical SAR Operations"
SAFETY_214_END = "### 2.15 Post-Emergency Actions"
SAFETY_214_NEW = """### 2.14 Time-Critical SAR Operations

When the Program receives an emergency SAR activation, the PIC applies the Core Operating Rule: fly within the parameters your pilot certificate allows, or under a valid SFOC if one is held and its conditions can be met before launch.

| Step | Action |
|------|--------|
| 1 | IDENTIFY authority available: certificate privileges / Organization RPOC (Division VI, L1C pilot) / valid SFOC with conditions met |
| 2 | ANNOUNCE: "Time-critical operation. Operating under [certificate / RPOC / SFOC] limits." |
| 3 | RESTRICT: Maximum altitude 400' AGL unless a valid SFOC permits higher and its ATS coordination is complete |
| 4 | BRIEF: Inform crew of terrain-following requirements and applicable limits |
| 5 | CONFIRM: All flight planning reflects the selected authority's constraints |
| 6 | PROCEED: Division VI BVLOS and sub-400' operations in uncontrolled airspace require no ATS coordination |

**Note:** Thermal search effectiveness is maintained at sub-400' altitudes. The 80-120 meter optimal detection altitude falls within the 400' AGL limit available under certificate and RPOC privileges.

"""

def span_replace(text, start_anchor, end_anchor, new_block, label):
    s = text.find(start_anchor)
    if s < 0:
        print(f"  !! start anchor not found: {label}"); return text, False
    e = text.find(end_anchor, s + len(start_anchor))
    if e < 0:
        print(f"  !! end anchor not found: {label}"); return text, False
    print(f"  ok: {label}")
    return text[:s] + new_block + text[e:], True

def patch(path, ops=False, safety=False, both=False):
    print(f"\n== {path}")
    with io.open(path, encoding="utf-8") as f:
        t = f.read()
    if ops or both:
        t, _ = span_replace(t, OPS_641_OLD_START, OPS_641_END, OPS_641_NEW, "ops 6.4.1")
        t = t.replace(OPS_CHK5_OLD, OPS_CHK5_NEW)
        t = t.replace("### 6.7 the Program Rapid Site Survey Checklist",
                      "### 6.7 Program Rapid Site Survey Checklist")
        t = t.replace("### 6.7 The Program Rapid Site Survey Checklist",
                      "### 6.7 Program Rapid Site Survey Checklist")
    if safety or both:
        t, _ = span_replace(t, SAFETY_214_START, SAFETY_214_END, SAFETY_214_NEW, "safety 2.14")
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(t)

patch("1_OPERATIONS_MANUAL.md", ops=True)
patch("2_SAFETY_EMERGENCY_MANUAL.md", safety=True)
patch("docs/js/content.js", both=True)

# ---------------- README rewrite (targeted) ----------------
with io.open("README.md", encoding="utf-8") as f:
    r = f.read()

r = r.replace("# SSAR RPAS Operator Certificate (RPOC)",
              "# Sea to Sky SAR RPAS Program (RPOC)")
r = r.replace("**Squamish Search and Rescue - RPAS Operations Program**",
              "**Sea to Sky SAR RPAS Program - Squamish | Whistler | Pemberton Search and Rescue**")
r = r.replace(
"This repository contains the official RPAS Operator Certificate (RPOC) documentation for Squamish Search and Rescue, compliant with Canadian Aviation Regulations Part IX, Transport Canada Standard 922, and JARUS SORA v2.5.",
"This repository contains the shared RPAS program documentation for the Sea to Sky SAR RPAS Program (Squamish, Whistler, and Pemberton Search and Rescue). It serves as common program policy and supports each participating organization's RPAS Operator Certificate (RPOC) and SFOC applications. The Canadian Aviation Regulations Part IX are the governing authority; Transport Canada Standards 921/922/923 and JARUS SORA v2.5 are applied on top of the CARs, which prevail where they differ.\n\n**Core Operating Rule: Fly within the parameters your pilot certificate allows. Operations beyond those parameters require a valid SFOC held by your organization, and only pilots granted privileges under that SFOC may conduct them, in accordance with its conditions.**")

r = r.replace("| **CAR 901.29** | Fatigue Management | Training Manual Section 2.2 |",
              "| **CAR 901.19** | Fitness of Crew Members (incl. fatigue) | Training Manual Sections 2.2-2.4 |\n| **CAR 901.29** | RPAS Serviceability | Forms Manual Section 3; pre-flight checklists |")
r = r.replace("| **CAR 901.19** | Fitness for Duty | Training Manual Section 2.3-2.4 |", "")
r = r.replace("| **CAR 901.222** | Records Retention | All manuals include retention requirements |",
              "| **CAR 901.222** | Designation of Pilot-in-Command (Division VI) | Operations Manual Sections 2.3, 5.3 |\n| **CAR 901.223** | Records Retention | All manuals include retention requirements |")
r = r.replace("| **STSC-003** | High Altitude VLOS | Operations Manual Section 5.2 |",
              "| **CAR 901.87-901.96** | Level 1 Complex BVLOS (under RPOC) | Operations Manual Section 5.3 |\n| **STSC-003** (SFOC) | High Altitude VLOS | Operations Manual Section 5.4 |")
r = r.replace("| **STSC-004** | Low-Risk BVLOS | Operations Manual Section 5.3 |",
              "| **STSC-004** (SFOC) | Low-Risk BVLOS, Advanced pilots | Operations Manual Section 5.5 |")

OLD_STSC_BLOCK_START = "## Standard Scenario Quick Reference"
OLD_STSC_BLOCK_END = "## Key Procedures Quick Reference"
NEW_STSC_BLOCK = """## Operating Authority Quick Reference

### Level 1 Complex BVLOS (under Organization RPOC)
| Parameter | Value |
|-----------|-------|
| Max Altitude | 400' AGL |
| Visual | BVLOS permitted |
| Airspace | Uncontrolled only |
| Ground | Sparsely populated (5 to 25 people/km²) or 1+ km from populated areas |
| Weather | 3 SM visibility, clear of cloud (CAR 901.34(3)) |
| Extras | Anti-collision lights on (CAR 901.38.1); 5+ NM from listed aerodromes (CAR 901.47(3)); PIC designated (CAR 901.222) |
| Pilot | Level 1 Complex certificate |
| ATS Coordination | Not required |

### STSC-003 - High Altitude VLOS (requires valid SFOC)
| Parameter | Value |
|-----------|-------|
| Max Altitude | 1000' AGL |
| ATS Coordination | **Required per SFOC conditions** |
| Visual | VLOS maintained |
| Pilot | Advanced or higher, granted under the SFOC |
| Use Case | High altitude reconnaissance |

### STSC-004 - Low-Risk BVLOS (requires valid SFOC)
| Parameter | Value |
|-----------|-------|
| Max Altitude | 400' AGL |
| ATS Coordination | Not required |
| Visual | BVLOS permitted |
| Pilot | Advanced, granted under the SFOC |
| Use Case | Extended range search by Advanced pilots |

### Time-Critical SAR Operations

> **Fly within the parameters your pilot certificate allows, or under a valid SFOC if one is held and its conditions can be met before launch.**

- Level 1 Complex pilots: BVLOS to 400' AGL under the RPOC, immediate launch, no ATS coordination in uncontrolled airspace
- Advanced pilots: certificate privileges, plus STSC envelopes only where the organization's SFOC is valid, the pilot is granted, and its conditions are met
- Thermal search effectiveness maintained at 80-120m AGL, within the 400' limit

"""
s = r.find(OLD_STSC_BLOCK_START); e = r.find(OLD_STSC_BLOCK_END)
if s >= 0 and e > s:
    r = r[:s] + NEW_STSC_BLOCK + r[e:]
    print("README STSC block replaced")

r = r.replace("| Role | Name | Responsibilities |",
              "Each participating organization appoints its own Accountable Executive and Person Responsible for RPAS Maintenance for its RPOC. Program-level roles:\n\n| Role | Name | Responsibilities |")
r = r.replace("| Accountable Executive | Dustin Wales | Overall RPAS program accountability |",
              "| Program Lead / AE (Squamish) | Dustin Wales | Overall RPAS program accountability |")
r = r.replace("| Version | 1.0 |", "| Version | 2.0 |")
r = r.replace("| Effective Date | March 2026 |", "| Effective Date | August 2026 |")
r = r.replace("| Review Date | March 2027 |", "| Review Date | August 2027 |")
r = r.replace("| Last Updated | 2026-03-09 |", "| Last Updated | 2026-08-11 |")
r = r.replace("| Source Documents | 42 original policies consolidated |",
              "| Source Documents | 42 original policies consolidated; v2.0 regulatory update (CARs Jan 2026 consolidation, SORA v2.5, multi-organization) |")

with io.open("README.md", "w", encoding="utf-8") as f:
    f.write(r)
print("README updated")

# ---------------- sw.js cache bump + app shell strings ----------------
for path, pairs in [
    ("docs/sw.js", [("ssar-rpoc-v11", "ssar-rpoc-v12")]),
    ("docs/index.html", [("SSAR RPOC", "Sea to Sky SAR RPOC"),
                          ("SSAR RPAS", "Sea to Sky SAR RPAS"),
                          ("Squamish Search and Rescue", "Sea to Sky SAR RPAS Program")]),
    ("docs/manifest.json", [("SSAR RPOC", "Sea to Sky SAR RPOC"),
                             ("SSAR RPAS", "Sea to Sky SAR RPAS"),
                             ("Squamish Search and Rescue", "Sea to Sky SAR RPAS Program")]),
]:
    with io.open(path, encoding="utf-8") as f:
        t = f.read()
    n = 0
    for old, new in pairs:
        c = t.count(old); t = t.replace(old, new); n += c
    with io.open(path, "w", encoding="utf-8") as f:
        f.write(t)
    print(f"{path}: {n} replacements")

print("\npatch2 done")
