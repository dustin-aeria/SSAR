# S2S SAR Drone Program

**Sea to Sky Corridor Search and Rescue - Regional Drone Program**

This repository contains the shared RPAS program documentation for the S2S SAR Drone Program (the participating Sea to Sky corridor search and rescue organizations). It serves as common program policy and supports each participating organization's RPAS Operator Certificate (RPOC) and SFOC applications. The Canadian Aviation Regulations Part IX are the governing authority; Transport Canada Standards 921/922/923 and JARUS SORA v2.5 are applied on top of the CARs, which prevail where they differ.

**These manuals are the documentation itself, not a summary of documents held elsewhere.** Earlier standalone policies, procedures, and forms have been consolidated into this suite and are superseded. Cross-references point to sections within these manuals.

**Core Operating Rule: Fly within the parameters your pilot certificate allows. Operations beyond those parameters require a valid SFOC held by your organization, and only pilots granted privileges under that SFOC may conduct them, in accordance with its conditions.**

## Live Web Tool

**[View the RPOC Web Tool](https://ssarrpas.ca)**

The interactive web tool provides searchable access to all policy manuals with quick reference to emergency procedures and critical contacts.

---

## Documentation Structure

### Consolidated Manuals

| # | Manual | Sections | Primary Content |
|---|--------|----------|-----------------|
| 1 | [Operations Manual](1_OPERATIONS_MANUAL.md) | 13 | CONOPS, Standard Scenarios (STSC-003/004), Site Survey, Search Patterns, Communications, Weather |
| 2 | [Safety & Emergency Manual](2_SAFETY_EMERGENCY_MANUAL.md) | 9 | SMS (4 Pillars), Emergency Procedures, SORA Documentation, Hazard Registry, Incident Reporting, QA Program |
| 3 | [People & Equipment Manual](3_PEOPLE_EQUIPMENT_MANUAL.md) | 9 | Organizational Structure, Pilot Competency, Chief Pilot, PPE, Equipment Testing, Insurance/Liability |
| 4 | [Forms & Maintenance Manual](4_FORMS_MAINTENANCE_MANUAL.md) | 9 | MCM, Aircraft Specs, Checklists, Battery Management, Firmware Management, Defect Tracking |
| 5 | [Training Program Manual](5_TRAINING_MANUAL.md) | 13 | Foundation/Advanced Training, STSC Training, VO Training, Trainer Qualifications, Recurrency |

---

## Regulatory Compliance Matrix

| Regulation | Requirement | Manual Coverage |
|------------|-------------|-----------------|
| **CAR 901.217** | Operations Manual | Operations Manual (complete) |
| **CAR 901.218** | Safety Processes | Safety Manual - SMS, Hazard Registry, Change Management |
| **CAR 901.219** | Training Program | Training Manual (complete) |
| **CAR 901.220** | Person Responsible for Maintenance | People Manual - Chief Pilot |
| **CAR 901.221** | Maintenance Control Manual | Forms Manual (complete) |
| **CAR 901.222** | Designation of Pilot-in-Command (Division VI) | Operations Manual Sections 2.3, 5.3 |
| **CAR 901.223** | Records Retention | All manuals include retention requirements |
| **CAR 901.27** | Site Survey | Operations Manual Section 6 |
| **CAR 901.19** | Fitness of Crew Members (incl. fatigue) | Training Manual Sections 2.2-2.4 |
| **CAR 901.29** | RPAS Serviceability | Forms Manual Section 3; pre-flight checklists |

| **CAR 901.35** | Weather/Icing | Operations Manual Section 10 |
| **Standard 922** | RPAS Safety Assurance | Safety Manual Section 3 (SORA) |
| **CAR 901.87-901.96** | Level 1 Complex BVLOS (under RPOC) | Operations Manual Section 5.3 |
| **STSC-003** (SFOC) | High Altitude VLOS | Operations Manual Section 5.4 |
| **STSC-004** (SFOC) | Low-Risk BVLOS, Advanced pilots | Operations Manual Section 5.5 |

---

## Aircraft

Any RPAS may be operated under this documentation provided it meets the eligibility criteria in Operations Manual Section 4.1 (registered and marked, declared under Standard 922 where the operation requires it, within the mass and speed class assumed by the SORA assessment, serviceable under the MCM, correctly equipped, flown by a type-qualified pilot, and signed off by the Chief Pilot). The following are the current reference types, the models most widely used by SAR organizations at present and the ones documented in detail throughout this suite.

| Aircraft | MTOM | Flight Time | Operating Temp | Wind Resistance | IP Rating |
|----------|------|-------------|----------------|-----------------|-----------|
| DJI M30T | 3.77 kg | 41 min | -20°C to 50°C | 15 m/s | IP55 |
| DJI Matrice 4TD | 2.3 kg | 45 min | -20°C to 45°C | 12 m/s | IP54 |

---

## Key Personnel

Each participating organization appoints its own Accountable Executive and Person Responsible for RPAS Maintenance for its RPOC. Program roles are defined by required credentials, not named individuals:

| Role | Required Credentials | Responsibilities |
|------|------|------------------|
| Accountable Executive | Appointed per organization (CAR 106.02, 901.218(2)) | Overall RPAS program accountability |
| Chief Pilot | Level 1 Complex certificate; Flight Reviewer rating recommended | Day-to-day operations, pilot management |
| Flight Reviewer | Pilot certificate endorsed per CAR 901.176; declared provider affiliation (CAR 901.175) | Assessments, endorsements |
| Safety Manager | Appointed per organization | Hazard registry, audits, safety reporting |

---

## Document Author and Contact

**Author:** Dustin Wales. For any questions, updates, or inquiries about this documentation: **Dustin Wales, 604-849-2345**.

## Emergency Contacts

| Contact | Phone | When to Use |
|---------|-------|-------------|
| **FIC Kamloops (Direct)** | **250-376-7045** | Fly-away, airspace emergency |
| **FIC Kamloops (Toll-Free)** | **1-866-541-4101** | Fly-away, airspace emergency |
| NAV CANADA | 1-866-WXBRIEF | NOTAM, weather briefing |
| TSB Hotline | 1-800-387-3557 | Reportable occurrences |
| TSB Direct | 1-819-994-3741 | Serious incidents |
| Emergency Services | 911 | Life-threatening situations |

---

## Operating Authority Quick Reference

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

## Key Procedures Quick Reference

### DESCEND Protocol (Critical Traffic Threat)

```
D - DESCEND IMMEDIATELY - Announce "DESCEND, DESCEND, DESCEND"
E - EVALUATE - Assess threat trajectory
S - SWITCH - Manual control
C - CLEAR - Move away from threat path
E - EXECUTE - Rapid descent to safe altitude
N - NOTIFY - Inform crew when clear
D - DOCUMENT - Record for incident report
```

### Fly-Away Response

```
1. ANNOUNCE: "FLY-AWAY! FLY-AWAY!"
2. TOGGLE flight modes (P-A-P)
3. TRIGGER RTH button
4. VO TRACKS heading and speed
5. CALL FIC Kamloops: 250-376-7045
6. DOCUMENT all details
```

---

## Document Features

### Detailed Procedural Content
Each manual includes:
- Step-by-step procedures with accountability
- Forms and templates ready for use
- Decision matrices for complex situations
- Checklists for operational use
- Quick reference cards for field operations

### Key Enhanced Sections
- **Hazard Registry & Change Management** (Safety Manual 4.6-4.8)
- **Train-the-Trainer Module** (Training Manual 7.2)
- **Chief Pilot Responsibilities** (People Manual 5.3)
- **Defect Tracking System** (Forms Manual 7.2)
- **Internal Audit Checklists** (Safety Manual 7.5)
- **Insurance & Liability Management** (People Manual 8)
- **Firmware Management** (Forms Manual 6)

---

## Version Information

| Item | Value |
|------|-------|
| Version | 2.0 |
| Effective Date | August 2026 |
| Review Date | August 2027 |
| Last Updated | 2026-08-11 |
| Consolidation | Supersedes 42 earlier standalone policies, which are no longer maintained separately |

---

## Audit Readiness

This documentation package is designed for Transport Canada RPOC audit and includes:
- Complete regulatory cross-references
- Detailed audit checklists (Safety Manual 7.5.3-7.5.6)
- Records retention requirements throughout
- Document control with revision history
- Accountable Executive sign-off on all manuals

---

*This documentation is part of the S2S SAR Drone Program RPOC package for Transport Canada approval.*

*Prepared with assistance from Claude AI (Anthropic) under human direction and review.*
