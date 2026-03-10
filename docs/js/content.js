// SSAR RPOC Content Data
// All markdown content from the 4 consolidated manuals

const RPOC_CONTENT = {
    operations: {
        title: "Operations Manual",
        icon: "fa-plane",
        docCount: 11,
        content: `# SSAR RPAS Operations Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | OPS-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Review Date | March 2027 |
| Regulatory Reference | CAR 901.217-901.223, Standard 922, STSC-003, STSC-004 |

---

## 1. Introduction and Regulatory Framework

### 1.1 Purpose

This Operations Manual establishes the operating standards, procedures, and requirements for all Remotely Piloted Aircraft Systems (RPAS) operations conducted by Squamish Search and Rescue (SSAR). This manual serves as the primary operational reference document for the SSAR RPAS Operator Certificate (RPOC).

### 1.2 Scope

This manual applies to all RPAS operations conducted under SSAR authority, including:
- Visual Line of Sight (VLOS) operations
- High Altitude VLOS operations (STSC-003) - up to 1000' AGL
- Low-Risk Beyond Visual Line of Sight operations (STSC-004) - up to 400' AGL
- Extended Visual Line of Sight (EVLOS) operations

### 1.3 Regulatory Compliance

All SSAR RPAS operations shall comply with:
- **Canadian Aviation Regulations Part IX** (CAR 901.217-901.223)
- **Standard 922** - RPAS Safety Assurance
- **STSC-003** - High Altitude VLOS Standard Scenario
- **STSC-004** - Low-Risk BVLOS Standard Scenario
- All applicable Special Flight Operations Certificate (SFOC) conditions

---

## 2. RPAS Operator Certificate (RPOC)

### 2.1 Certificate Information

| Specification | Value |
|---------------|-------|
| RPOC Number | [To be assigned upon approval] |
| Effective Date | [To be determined] |
| Issued To | Squamish Search and Rescue |

### 2.2 Applicant Information

| Field | Information |
|-------|-------------|
| Organization Name | Squamish Search and Rescue |
| City/Province | Squamish, British Columbia |
| Accountable Executive | Dustin Wales |
| Emergency Contact | Dustin Wales |

### 2.3 Accountable Executive Accountability - CAR 901.217

**Accountable Executive: Dustin Wales**

In accordance with CAR 901.217, the Accountable Executive:

1. **Has overall responsibility** for operations authorized under the RPOC
2. **Is accountable to Transport Canada** for all RPAS operations
3. **Ensures adequate resources** are available for safe operations
4. **Maintains authority** to suspend operations when safety concerns arise
5. **Is directly responsible** for SMS effectiveness

### 2.4 Authorized Operations

SSAR is authorized to conduct:
- Visual Line of Sight (VLOS) operations
- High Altitude VLOS operations (STSC-003) - up to 1000' AGL
- Low-Risk Beyond Visual Line of Sight operations (STSC-004)

### 2.5 Operating Area

- Sea to Sky Corridor, British Columbia
- Squamish Search and Rescue jurisdiction
- Provincial parks and wilderness areas in the region

---

## 3. Concept of Operations (CONOPS)

### 3.1 Preamble

This Concept of Operations outlines RPAS operations for:
- **(STSC-003)** VLOS operation above 400' AGL up to 1000' AGL
- **(STSC-004)** BVLOS operation over low-risk ground areas

### 3.2 Public Good and Objective

Squamish Search and Rescue is a first responder non-profit providing 24/7 SAR services.

| Objective | Performance Criteria |
|-----------|---------------------|
| Safe Operation | Zero incidents; full adherence to checklists |
| Effective Reconnaissance | Successful identification of subjects |
| Situational Awareness | Flights to assess blind spots |
| Efficiency | Reduction in mission time |

### 3.3 Standard Scenario Scope

#### STSC-003: Low-Risk High Altitude VLOS

| Parameter | Detail |
|-----------|--------|
| Type of Operation | Visual Line-of-Sight above 400 ft AGL |
| Max Altitude | 1000' AGL |
| Airspace | Uncontrolled only |
| Risk Assessment | SORA SAIL II |

#### STSC-004: Low-Risk BVLOS

| Parameter | Detail |
|-----------|--------|
| Type of Operation | BVLOS over low-risk ground areas |
| Max Altitude | 400 ft AGL |
| Airspace | Class G |
| Risk Assessment | SORA SAIL II |

### 3.4 Hierarchy of Operational Safety

| Priority | Area | Description |
|----------|------|-------------|
| 1 | Bystander Safety | Safety to bystanders and manned aircraft |
| 2 | Adherence to Regulations | CARs Part IX, SFOC requirements |
| 3 | RPAS Preservation | Ensure safe return |
| 4 | Subject Finding | The ultimate measure of mission success |

---

## 4. Authorized Aircraft

### 4.1 Approved Aircraft

> **AUTHORIZED AIRCRAFT - DJI M30T and DJI Matrice 4TD ONLY**

| Aircraft | MTOM | Authorization |
|----------|------|---------------|
| DJI M30T | 3.77 kg | All operations |
| DJI Matrice 4TD | 2.3 kg | All operations |

### 4.2 DJI Matrice 30T (M30T) Specifications

| Specification | Value |
|---------------|-------|
| Manufacturer | DJI |
| Model | Matrice 30T |
| MTOW | 3770g |
| Max Flight Time | 41 minutes |
| Operating Temperature | -20°C to 50°C |
| Wind Resistance | 15 m/s |
| IP Rating | IP55 |

### 4.3 DJI Matrice 4TD (M4TD) Specifications

| Specification | Value |
|---------------|-------|
| Manufacturer | DJI |
| Model | Matrice 4TD |
| MTOW | 2145g |
| Max Flight Time | 45 minutes |
| Operating Temperature | -20°C to 45°C |
| Wind Resistance | 12 m/s |
| IP Rating | IP54 |

---

## 5. Standard Scenario Operations

### 5.1 Standard Scenario Overview

| Parameter | STSC-003 | STSC-004 |
|-----------|----------|----------|
| Operation Type | High Altitude VLOS | Low-Risk BVLOS |
| Max Altitude | 1000' AGL | 400' AGL |
| ATC Coordination | REQUIRED | Not required |

### 5.2 STSC-003 ATC Coordination Protocol

> **MANDATORY: All STSC-003 operations require ATC coordination.**

| Timing | Action |
|--------|--------|
| 24+ hours prior | Initial notification |
| 12 hours prior | Confirm operation details |
| 1 hour prior | Activation notification |
| At completion | Termination notification |

> **IMPORTANT:** STSC-003 requires 24-hour advance ATC notification. If SAR activation does not permit this, use STSC-004 (max 400' AGL).

### 5.3 Time-Critical SAR Operations

When 24-hour ATC notification is NOT possible:

| 24-Hour Notice Available | 24-Hour Notice NOT Available |
|--------------------------|------------------------------|
| STSC-003 or STSC-004 | STSC-004 only |
| High-altitude permitted | Maximum altitude 400' AGL |
| Standard scenario selection | Terrain-following, no ATC required |

### 5.4 GPS Failure Procedures

> **CRITICAL: GPS failure requires immediate response.**

1. **DO NOT PANIC** - maintain attitude control
2. **SWITCH** between flight modes
3. **NAVIGATE** using visual references
4. **LAND** as soon as practical

---

## 6. Site Survey and Flight Planning

### 6.1 Site Survey Requirements - CAR 901.27

Prior to takeoff, the PIC must assess:
1. **Operational Boundaries**
2. **Airspace Class**
3. **Hazards**

### 6.2 Rapid Site Survey (Emergency Call-Outs)

**Minimum Standard:** Even in emergencies, confirm:
- Airspace safety
- No bystanders in the Launch Zone
- Weather suitability

### 6.3 Scenario Selection for Time-Critical Operations

**Step 1:** Can 24-hour ATC notification be completed?

| If YES | If NO |
|--------|-------|
| STSC-003 or STSC-004 | STSC-004 parameters ONLY |
| Complete ATC coordination | Max 400' AGL, BVLOS permitted |

---

## 7. Search Operations

### 7.1 Search Starting Point

All searches begin at the designated starting point:
- Last Known Position (LKP)
- Physical evidence location
- Witness sighting location

> **Search Direction:** From starting point, ALL patterns work OUTWARD.

### 7.2 Search Patterns

#### Expanding Square
Used when search area is small and subject location known.

#### Parallel Track
Track Spacing: 50-100m (Visual), 30-50m (Thermal)

#### Terrain Following
Follow natural terrain at 80-120m AGL.

### 7.3 Thermal Imaging

| Setting | M30T | M4TD |
|---------|------|------|
| Palette | White Hot | Ironbow |
| Optimal Altitude | 80-120m AGL | 80-120m AGL |

---

## 8. Communications

### 8.1 Communication Equipment

| System | Requirements |
|--------|-------------|
| Primary | Two-way radios |
| Backup | Starlink for remote areas |

### 8.2 Closed-Loop Communication

> **VO:** "Pilot, traffic. Manned aircraft North, heading South."
>
> **PIC:** "Copy. Traffic North heading South. Descending and holding."

### 8.3 Emergency Contacts

| Contact | Phone |
|---------|-------|
| FIC Kamloops | **1-866-541-4101** |
| Vancouver Intl | 604-207-7022 |
| Emergency | 911 |

---

## 9. Environmental Operations

### 9.1 Wildlife Encounter Protocols

| Wildlife | Min. Distance | Action |
|----------|---------------|--------|
| Nesting birds | 100m | Alter course |
| Eagles/Raptors | 200m | Descend, move away |
| Bears/Ungulates | 150m | Maintain altitude |

---

## 10. Weather Minimums

### 10.1 General Operational Limits

| Operation Type | Minimum Visibility | Cloud Distance |
|----------------|-------------------|----------------|
| Standard VLOS | 2 SM approx | Clear of Cloud |
| BVLOS | 3 SM | Clear of Cloud |

### 10.2 Icing Protocol - CAR 901.35

> **ZERO TOLERANCE: Flight into icing conditions is prohibited.**

---

## 11. Advanced Procedures

### 11.1 EVLOS Procedures (Daisy-Chaining)

#### Visual Handover Protocol

> **Pilot:** "Approaching Sector B. VO 1, do you have visual tally?"
>
> **VO 1:** "Visual Tally. I have the aircraft."

### 11.2 Level 1 Complex Procedures (BVLOS)

- Population Check: <25 people/km²
- Visibility Check: >3 SM
- Airspace: Class G

---

## 12. Emergency Contacts

### 12.1 Emergency Fly-Away Call Script

**Call FIC Kamloops: 1-866-541-4101**

| Item | Script |
|------|--------|
| Introduction | "I am an RPAS operator experiencing a fly-away situation." |
| RPAS Description | "[colour], [make], [model], [weight]" |
| Location | "[distance] NM from [landmark], bearing [bearing]" |
| Heading | "[altitude] feet ASL, heading [heading]" |
| Battery | "[remaining]%, max [time] minutes" |

---

## 13. Document Control

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

**END OF OPERATIONS MANUAL**
`
    },

    safety: {
        title: "Safety & Emergency Manual",
        icon: "fa-shield-alt",
        docCount: 12,
        content: `# SSAR Safety & Emergency Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | SAF-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Regulatory Reference | CAR 901.219, Standard 922, JARUS SORA v2.5 |

---

## 1. Safety Management System

### 1.1 SMS Overview

SSAR maintains a Safety Management System (SMS) aligned with ICAO Annex 19 four-pillar framework.

### 1.2 Safety Policy Statement

> **Squamish Search and Rescue is committed to achieving the highest level of safety in all RPAS operations. Every member has the authority and responsibility to stop any operation they believe to be unsafe.**

### 1.3 Accountable Executive Commitment

**Accountable Executive: Dustin Wales**

Committed to:
- Providing adequate resources for safety
- Maintaining a just culture for safety reporting
- Taking action on identified safety issues

### 1.4 Safety Objectives

| Objective | Target |
|-----------|--------|
| Zero mid-air conflicts | 0 events |
| No third-party injuries | 0 injuries |
| High reporting rate | >80% |
| Training currency | 100% pilots current |

### 1.5 Risk Matrix

| Probability / Severity | Negligible | Minor | Major | Hazardous | Catastrophic |
|------------------------|------------|-------|-------|-----------|--------------|
| Frequent | Medium | High | High | Extreme | Extreme |
| Probable | Low | Medium | High | High | Extreme |
| Remote | Low | Medium | Medium | High | High |
| Improbable | Low | Low | Medium | Medium | High |

### 1.6 Non-Punitive Reporting Policy

> **No member will be disciplined for reporting a safety occurrence, hazard, or unintentional error.**

---

## 2. Emergency Procedures

### 2.1 Core Priorities

| Priority | Action |
|----------|--------|
| 1 | AVIATE - Maintain aircraft control |
| 2 | NAVIGATE - Steer away from people |
| 3 | COMMUNICATE - Inform crew and ATC |

### 2.2 GPS Failure Immediate Actions

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "GPS FAILURE" |
| 2 | MAINTAIN ALTITUDE |
| 3 | SWITCH to manual/ATTI mode |
| 4 | ORIENT visually |
| 5 | NAVIGATE using visual references |
| 6 | DESCEND to maintain VLOS |
| 7 | RETURN to operator |
| 8 | LAND as soon as possible |

### 2.3 Fly-Away Procedure

#### Recognition
- Aircraft not responding to control inputs
- Aircraft flying away from intended position
- Un-commanded climb or heading change

#### Immediate Actions

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "FLY-AWAY! FLY-AWAY!" |
| 2 | Toggle Flight Modes (P-A-P) |
| 3 | Trigger RTH button |
| 4 | Track heading and speed |
| 5 | **CALL FIC: 1-866-541-4101** |

### 2.4 Emergency Fly-Away Call Script

**Call FIC Kamloops: 1-866-541-4101**

| Item | Script |
|------|--------|
| Introduction | "I am an RPAS operator experiencing a fly-away situation." |
| RPAS Description | "[colour], [make], [model], weighing [n] grams." |
| PIC Location | "[n] NM from [aerodrome/landmark], bearing [bearing]." |
| RPAS Heading | "[n] feet ASL, heading [heading] at [n] knots." |
| Battery | "Max flight time: [n] min. Remaining: [n]%." |

### 2.5 The Descend Protocol

Emergency maneuver to clear airspace for manned aviation:

| Step | Action |
|------|--------|
| 1 | **IDENTIFY** threat |
| 2 | **CALL** "DESCEND, DESCEND, DESCEND" |
| 3 | **SWITCH** to Manual Control |
| 4 | **MANEUVER** downward to safe altitude |

### 2.6 Battery Emergency

| Battery Level | Action |
|---------------|--------|
| 35% | Begin return |
| 30% | Plan immediate landing |
| 25% | Immediate RTH |
| 20% | Land NOW |
| Critical | Auto-land - clear area |

### 2.7 Traffic Alert Response

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "TRAFFIC" + direction |
| 2 | DESCEND below 400' AGL |
| 3 | HOLD POSITION |
| 4 | YIELD - manned aircraft has right of way |

### 2.8 Time-Critical SAR Operations

When 24-hour ATC notification is not possible:

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "Time-critical operation. STSC-004 parameters apply." |
| 2 | RESTRICT: Maximum altitude 400' AGL |
| 3 | BRIEF: Terrain-following requirements |
| 4 | PROCEED: No ATC notification required |

---

## 3. SORA Documentation

### 3.1 SORA Process Overview

| Step | Description |
|------|-------------|
| 1 | ConOps Description |
| 2 | Intrinsic GRC Determination |
| 3 | GRC Mitigations (M1/M2) |
| 4 | Final GRC |
| 5 | Initial ARC Determination |
| 6 | SAIL Determination |

### 3.2 Final SAIL Determination

| Scenario | Final GRC | Final ARC | SAIL |
|----------|-----------|-----------|------|
| STSC-003 (High Alt) | GRC 1 | ARC-c | **SAIL II** |
| STSC-004 (BVLOS) | GRC 2 | ARC-b | **SAIL II** |

### 3.3 Risk Acceptance Statement

> Based on SORA analysis, the residual risk is **AS LOW AS REASONABLY PRACTICABLE (ALARP)** and **ACCEPTABLE**.

---

## 4. Hazard Identification and Risk Assessment

### 4.1 Risk Treatment Options

| Risk Level | Treatment | Authority |
|------------|-----------|-----------|
| Extreme | Do not conduct | Accountable Executive |
| High | Must reduce | Chief Pilot |
| Medium | Add controls | PIC |
| Low | Accept | PIC |

### 4.2 Technical Hazards

| ID | Hazard | Initial Risk | Residual |
|----|--------|--------------|----------|
| T01 | Fly-away | Medium | Low |
| T02 | Battery failure | Medium | Low |
| T04 | GPS failure | Medium | Low |
| T05 | C2 link loss | Medium | Low |

### 4.3 Operational Hazards

| ID | Hazard | Initial Risk | Residual |
|----|--------|--------------|----------|
| O01 | Mid-air collision | High | Medium |
| O02 | CFIT | Medium | Low |
| O05 | Third party injury | High | Medium |

---

## 5. Detect and Avoid

### 5.1 Right of Way

The RPAS shall give way to all manned aircraft.

### 5.2 Traffic Conflict Levels

| Level | Definition | Action |
|-------|------------|--------|
| 1 | Planned Approach | Ground RPAS |
| 2 | Announced Entry | Restrict to <400' |
| 3 | Non-Threat | Continue, increase vigilance |
| 4 | Potential Conflict | RTH or Hover |
| 5 | Critical Threat | **DESCEND PROTOCOL** |

---

## 6. Incident and Accident Reporting

### 6.1 Mandatory Reporting (Immediate)

- Any injury to persons
- Collision with manned aircraft
- Flyaway or loss of control

### 6.2 Reporting Matrix

| Occurrence | Agency | Timeline |
|------------|--------|----------|
| Collision with Manned Aircraft | TSB | Immediate |
| Serious Injury | TSB | Immediate |
| Fly-Away into Controlled | NAV CANADA | Immediate |

### 6.3 TSB Contact

**TSB Hotline: 1-819-994-3741**

---

## 7. Quality Assurance Program

### 7.1 Internal Audit Schedule

| Audit Area | Frequency |
|------------|-----------|
| Operations Compliance | Quarterly |
| Maintenance Program | Quarterly |
| Training Program | Semi-annual |
| Full SMS Audit | Annual |

### 7.2 Corrective Action Timelines

| Finding Level | Corrective Action |
|---------------|-------------------|
| Critical | 7 days |
| Major | 30 days |
| Minor | 90 days |

---

## 8. Emergency Contacts

| Contact | Phone | When to Call |
|---------|-------|--------------|
| FIC Kamloops | **1-866-541-4101** | Fly-away, airspace emergency |
| TSB Hotline | 1-819-994-3741 | Reportable occurrence |
| Emergency | **911** | Critical situation |

---

## 9. Document Control

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

**END OF SAFETY & EMERGENCY MANUAL**
`
    },

    people: {
        title: "People & Equipment Manual",
        icon: "fa-users",
        docCount: 14,
        content: `# SSAR People & Equipment Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | PEQ-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Regulatory Reference | CAR 901.217-901.220, Standard 922 |

---

## 1. Organizational Structure

### 1.1 Organizational Hierarchy

| Level | Role | Primary Accountability |
|-------|------|------------------------|
| 1 | Accountable Executive (AE) | Ultimate responsibility for RPAS Program |
| 2 | Operations Manager | Day-to-day coordination |
| 2 | Maintenance Manager | Airworthiness and equipment |
| 3 | Pilot in Command (PIC) | Safe conduct of flight |
| 4 | Visual Observer (VO) | Situational awareness |

### 1.2 Accountable Executive (AE)

**Dustin Wales** bears ultimate financial and legal responsibility for the RPAS program.

### 1.3 Pilot in Command (PIC)

Has final authority over safe operation of the aircraft during flight.

| Area | Responsibility |
|------|----------------|
| Pre-Flight | Validate maintenance, comply with Operations Manual |
| Certification | Hold valid Advanced RPAS Certificate, ROC-A |
| Operation | Monitor RPAS at all times |

---

## 2. Pilot Training Program

### 2.1 Training Structure

| Level | Operations | Requirements |
|-------|------------|--------------|
| Basic | VLOS <400' AGL | TC Basic exam + SSAR Foundation |
| Advanced | VLOS + controlled airspace | TC Advanced exam + SSAR Advanced |
| Level 1 Complex | STSC-003 / STSC-004 | TC L1C exam + SSAR Standard Scenario |

### 2.2 Foundation Training Modules

| Module | Title |
|--------|-------|
| Class 1 | Introduction & Foundations |
| Class 2 | Practical Application |
| Class 3 | Procedures & Role Play |
| Class 4 | Preflight & Operational Readiness |

### 2.3 Advanced Training Requirements

- Aircraft-Specific Training on M30T or M4TD
- Minimum 5 hours flight time per type
- Scenario-Based Training including emergencies
- Trainer Sign-Off

### 2.4 Time-Critical SAR Training (2 hours)

#### Learning Objectives
- Understand 24-hour ATC notification requirements
- Recognize when STSC-004 fallback is required
- Apply scenario selection during Rapid Site Survey
- Execute search under 400' AGL constraint

### 2.5 Recurrency Requirements

| Requirement | Frequency |
|-------------|-----------|
| Currency flights | 90 days (3 flights) |
| Ground recurrency | Annual (4 hours) |
| Practical recurrency | Annual (2 hours) |
| SORA refresher | Annual |

---

## 3. Competency Assessment

### 3.1 Knowledge Assessment

| Topic | Min. Score |
|-------|------------|
| CARs Part IX | 80% |
| STSC-003 & STSC-004 | 85% |
| Emergency procedures | 90% |

### 3.2 Flight Skills Assessment

| Maneuver | Tolerance |
|----------|-----------|
| Takeoff and hover | +/- 0.5m |
| Precision landing | +/- 0.5m |
| Altitude control | +/- 2m |

### 3.3 Emergency Procedures Assessment

| Emergency | Assessment |
|-----------|------------|
| Flyaway | Scenario drill |
| Lost link | Scenario drill |
| GPS failure | Scenario drill |

---

## 4. Pilot Competency Records

### 4.1 Qualification Structure

| Stage | Title | Requirements |
|-------|-------|--------------|
| Trainee | Pilot Under Training | In training program |
| Stage 1 | Pilot (Basic) | Advanced cert, orientation |
| Stage 2 | Standard Scenario | Stage 1 + SS training |
| Stage 3 | Senior Pilot | All endorsements + 50 hours |
| Stage 4 | Flight Reviewer | Stage 3 + instructor training |

### 4.2 Currency Requirements

| Requirement | Period |
|-------------|--------|
| General Flight | 90 days (3 flights) |
| Aircraft Type | 90 days |
| STSC-003 | 6 months |
| STSC-004 | 6 months |
| Annual Proficiency | 12 months |

---

## 5. Chief Pilot and Flight Reviewer

### 5.1 Chief Pilot Designation

**Chief Pilot: Dustin Wales**

Responsibilities:
- Day-to-day RPAS operations management
- Flight authorization
- Pilot qualification verification
- Currency monitoring

### 5.2 Flight Reviewer

| Item | Details |
|------|---------|
| Flight Reviewer | Dustin Wales |
| Designation Number | SSAR-FR-2026-001 |
| Authorization Scope | All assessments, all endorsements |

---

## 6. Personal Protective Equipment

### 6.1 Basic PPE Requirements

| PPE Item | Requirements |
|----------|--------------|
| SSAR Attire | Approved uniform for identification |
| High-Visibility Vest | "Drone Team" or "SSAR" vest |
| Eye Protection | Tinted lenses for bright conditions |
| Hand Protection | Work gloves during equipment handling |

### 6.2 Task-Specific PPE

| Item | Required When |
|------|---------------|
| Helmets | Cliffs, rockfall zones, helicopter zones |
| PFDs | Near water operations |
| Cold Weather Gear | Sub-zero operations |

---

## 7. Equipment Testing and Airworthiness

### 7.1 Testing Triggers

| Trigger | Description |
|---------|-------------|
| New Equipment | Prior to entering service |
| Post-Maintenance | After any repair |
| Post-Firmware Update | After any update |
| Annual | Comprehensive audit |

### 7.2 Functional Flight Test (FFT)

**Phase 1: Ground Checks**
- Startup verification
- Control Station check
- Payload verification

**Phase 2: Hover & Handling**
- Auto-takeoff to 2m
- Control response test
- 30-second hover

**Phase 3: Systems & Sensors**
- Obstacle avoidance test
- Mode switching
- Payload test

**Phase 4: Emergency Logic**
- RTH test (>20m away)

### 7.3 Status Tags

| Status | Meaning |
|--------|---------|
| CLEAR | Ready for operations |
| LOCKOUT | "DO NOT FLY" - needs repair |

---

## 8. Insurance and Liability

### 8.1 Insurance Requirements - CAR 901.06

| MTOW Category | Minimum Coverage |
|---------------|------------------|
| Up to 1 kg | $100,000 |
| 1 kg to 5 kg | $100,000 |
| 5 kg to 25 kg | $500,000 |

### 8.2 SSAR Aircraft Coverage

| Aircraft | MTOM | Minimum Required |
|----------|------|------------------|
| DJI M30T | 3.77 kg | $100,000 |
| DJI Matrice 4TD | 2.3 kg | $100,000 |

### 8.3 Incident Response

- Do NOT admit fault
- Document all facts
- Notify insurer within 24 hours
- Report to Chief Pilot immediately

---

## 9. Document Control

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

**END OF PEOPLE & EQUIPMENT MANUAL**
`
    },

    training: {
        title: "Training Program Manual",
        icon: "fa-graduation-cap",
        docCount: 13,
        content: `# SSAR RPAS Training Program Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | TRN-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Regulatory Reference | CAR 901.220, 901.56, 901.65, 901.66, Standard 922 |

---

## 1. Training Program Overview

### 1.1 Purpose

This Training Program Manual establishes the comprehensive training requirements, pathways, and assessment standards for all SSAR RPAS operations personnel.

### 1.2 Training Philosophy

1. **Safety First:** No operational pressure justifies compromising training standards
2. **Competency-Based Progression:** Advancement is based on demonstrated skill, not time served
3. **Continuous Improvement:** Training evolves with lessons learned

### 1.3 Training Program Structure

| Level | Title | Operations Authorized |
|-------|-------|----------------------|
| Trainee | Pilot Under Training | Training aircraft only (supervised) |
| Stage 1 | Pilot (Basic) | VLOS <400' AGL |
| Stage 2 | Pilot (Advanced) | VLOS + controlled airspace |
| Stage 3 | Standard Scenario | STSC-003 / STSC-004 |
| Stage 4 | Senior Pilot | All authorized operations |
| Stage 5 | Flight Reviewer | Conduct assessments |

---

## 2. Crew Competency Standards

### 2.1 General Requirements

| Requirement | Standard |
|-------------|----------|
| Age | Minimum 18 years |
| Compliance | Strict adherence to SSAR RPAS Manual and CARs |
| Fitness for Duty | Physically and mentally fit |

### 2.2 Fatigue Management - CAR 901.29

| Requirement | Standard |
|-------------|----------|
| **Minimum Rest** | 10 hours of rest prior to reporting for duty |
| **Maximum Duty** | No more than 10 consecutive hours without rest |
| **Operational Breaks** | No more than 2 hours continuous ops without 15-minute break |

### 2.3 Substance Use - Zero Tolerance (CAR 901.19)

| Substance | Requirement |
|-----------|-------------|
| **Alcohol** | 12-hour "bottle-to-throttle" rule |
| **Drugs** | Must not use any drug that impairs faculties |

### 2.4 IMSAFE Self-Assessment

Before every operation, all crew members complete:

| Letter | Factor | Question |
|--------|--------|----------|
| **I** | Illness | Am I suffering from any illness? |
| **M** | Medication | Am I taking impairing medication? |
| **S** | Stress | Am I under psychological pressure? |
| **A** | Alcohol | Have I consumed alcohol in 12 hours? |
| **F** | Fatigue | Have I had adequate sleep and rest? |
| **E** | Eating | Have I eaten and am I hydrated? |

> **Any "YES" to illness, medication impairment, alcohol, or fatigue is a NO-GO.**

### 2.5 Emergency Medical

> **At least one crew member must hold current Emergency First Aid & CPR certification.**

---

## 3. Foundation Training Program

### 3.1 Purpose

Foundation Training builds core competencies in aircraft handling, site surveys, team dynamics, and procedural execution.

### 3.2 Foundation Training Modules

| Module | Title | Duration |
|--------|-------|----------|
| Class 1 | Introduction & Foundations | 3 hours |
| Class 2 | Practical Application | 3 hours |
| Class 3 | Procedures & Role Play | 3 hours |
| Class 4 | Operational Readiness | 3 hours |

---

## 4. Advanced Training Program

### 4.1 Flight Hour Requirements

| Requirement | Standard |
|-------------|----------|
| **Minimum Hours** | 5 hours per RPAS type |
| **Supervised Flights** | Include flights with certified trainer |
| **Proficiency** | Must maintain throughout training |

---

## 5. Standard Scenario Training

### 5.1 STSC-003 High Altitude VLOS Training (12 hours)

| Topic | Duration |
|-------|----------|
| ATC Coordination Procedures | 3 hours |
| High Altitude Weather | 2 hours |
| Airspace and Traffic | 2 hours |
| Emergency Procedures | 2 hours |
| SORA for High Altitude | 3 hours |

### 5.2 STSC-004 BVLOS Training (16 hours)

| Topic | Duration |
|-------|----------|
| SORA for BVLOS | 4 hours |
| Lost Link Procedures | 2 hours |
| Navigation Without VLOS | 3 hours |
| Emergency Procedures BVLOS | 3 hours |
| Population Density Assessment | 2 hours |
| Controlled Ground Area | 2 hours |

---

## 6. Visual Observer Training

### 6.1 Rapid VO Training (On-Site)

| Item | Training Point |
|------|----------------|
| Your Role | "Watch the sky, not the drone." |
| Scanning | "Look in all directions, including behind." |
| Communication | "If you see anything, say 'TRAFFIC' and point." |
| Emergency | "If I say 'DESCEND,' step back immediately." |

---

## 7. Trainer Qualifications

### 7.1 Certified Trainer Requirements

| Requirement | Standard |
|-------------|----------|
| Flight Hours | Minimum 50 hours logged |
| Operational Experience | Minimum 1 year as SSAR pilot |
| Certification | All Standard Scenario endorsements |
| Training | Complete SSAR Train-the-Trainer module |

---

## 8. Training Progression Pathway

### 8.1 Pathway Overview

Foundation Training (4-6 weeks) -> Foundation Flight Review -> Advanced Training (4-8 weeks per type) -> Trainer Sign-Off -> Operational Authorization -> Standard Scenario Training

---

## 9. Competency Assessment

### 9.1 Knowledge Assessment

| Topic | Minimum Score |
|-------|---------------|
| CARs Part IX | 80% |
| STSC-003 & STSC-004 | 85% |
| Emergency procedures | 90% |

---

## 10. Recurrency Training

### 10.1 Currency Requirements

| Requirement | Period |
|-------------|--------|
| General Flight Currency | 90 days (3 flights) |
| Aircraft Type Currency | 90 days (1 flight per type) |
| Monthly Flight Hours | 1 hour per aircraft type |
| Annual Proficiency Check | 12 months |

---

## 11. Operational Training Program

### 11.1 Training Cadence

| Requirement | Standard |
|-------------|----------|
| Training Frequency | Every 2 weeks |
| Session Duration | 2-3 hours |
| Annual Flight Hours | Minimum 20 hours |
| Summit Events | 2 per year (Spring and Fall) |

### 11.2 Seasonal Focus

| Season | Focus Areas |
|--------|-------------|
| Winter | SOPs review, certifications, scenario integration |
| Spring | Location familiarization, dense canopy, rope rescue |
| Summer | Trail searches, steep terrain, alpine reconnaissance |
| Fall | Night ops, integrated exercises, cold weather prep |

---

## 12. Training Records

### 12.1 Records Retention (CAR 901.222)

| Record Type | Retention Period |
|-------------|------------------|
| Individual Pilot Records | Employment + 2 years |
| Training Records | 5 years |
| Assessment Results | 5 years |
| Endorsement Records | Duration + 2 years |

---

## 13. Document Control

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

**END OF TRAINING PROGRAM MANUAL**
\`
    },

    forms: {
        title: "Forms & Maintenance Manual",
        icon: "fa-clipboard-list",
        docCount: 5,
        content: \`# SSAR Forms & Maintenance Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | MNT-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Regulatory Reference | CAR 901.221, Standard 922 |

---

## 1. Maintenance Control Manual

### 1.1 Approved Aircraft

| Aircraft | MTOM | Max Flight | Op. Temp | IP Rating |
|----------|------|------------|----------|-----------|
| DJI M30T | 3.77 kg | 41 minutes | -20°C to 50°C | IP55 |
| DJI Matrice 4TD | 2.3 kg | 42 minutes | -20°C to 45°C | IP54 |

### 1.2 Scheduled Maintenance

| Interval | Activity |
|----------|----------|
| Every Flight | Pre-flight/Post-flight inspection |
| 50 Hours | Detailed inspection, propeller evaluation |
| 100 Hours | Component review, sensor calibration |
| 200 Hours | Comprehensive inspection, motor assessment |
| Annual | Full system review, firmware audit |

### 1.3 Defect Categories

| Category | Description | Action |
|----------|-------------|--------|
| A - Grounding | No flight permitted | Ground immediately |
| B - Limitation | Operational limitation | Fly with restrictions |
| C - Monitor | Monitor and report | Document, monitor |

---

## 2. Aircraft Specifications

### 2.1 DJI Matrice 30T (M30T)

| Specification | Value |
|---------------|-------|
| Maximum Takeoff Weight | 3770g |
| Maximum Flight Time | 41 minutes |
| Maximum Speed | 23 m/s |
| Operating Temperature | -20°C to 50°C |
| Wind Resistance | 15 m/s |
| Transmission Range | 15 km |
| IP Rating | IP55 |

### 2.2 DJI Matrice 4TD (M4TD)

| Specification | Value |
|---------------|-------|
| Maximum Takeoff Weight | 2145g |
| Maximum Flight Time | 45 minutes |
| Maximum Speed | 21 m/s |
| Operating Temperature | -20°C to 45°C |
| Wind Resistance | 12 m/s |
| Transmission Range | 20 km |
| IP Rating | IP54 |

---

## 3. Pre-Flight and Post-Flight Procedures

### 3.1 M30T Pre-Flight Inspection

#### Environmental Assessment
- Temperature: -20°C to 50°C
- Wind: <15 m/s sustained
- Visibility adequate

#### Battery Verification

| Parameter | Requirement |
|-----------|-------------|
| Charge | >95% for SAR operations |
| Cycle Count | <200 cycles |
| Physical Condition | No damage or swelling |
| Temperature | 15-40°C (preheat if <15°C) |

### 3.2 Post-Launch Systems Check (MANDATORY)

> **Immediately following launch on EVERY flight:**

| Item | Check |
|------|-------|
| Stable hover - no drift | [ ] |
| Pitch response correct | [ ] |
| Roll response correct | [ ] |
| Yaw response correct | [ ] |
| Altitude hold working | [ ] |
| Camera/gimbal working | [ ] |
| Telemetry displaying | [ ] |
| GPS lock confirmed | [ ] |

> **CRITICAL: If ANY abnormality is detected, LAND IMMEDIATELY.**

### 3.3 GO/NO-GO Criteria

> **NO-GO if any of these conditions exist:**

- Any structural damage
- Propeller damage
- Battery swelling or damage
- GPS/IMU failure
- Outstanding Category A defect

---

## 4. Mission Checklists

### 4.1 Time-Critical SAR Scenario Selection

| Item | Check |
|------|-------|
| SAR activation timeline assessed | [ ] |
| 24-hour ATC notification feasibility determined | [ ] |
| **If YES - ATC notification possible:** | |
| Proceed to STSC-003 or STSC-004 checklist | [ ] |
| **If NO - Time-critical operation:** | |
| Maximum altitude confirmed: 400' AGL | [ ] |
| Terrain-following flight plan prepared | [ ] |
| RTH altitude set above highest terrain | [ ] |
| Crew briefed: "STSC-004 parameters. Max 400 feet." | [ ] |
| Thermal search altitude: 80-120 meters AGL | [ ] |

### 4.2 STSC-003 High Altitude Checklist

| Item | Check |
|------|-------|
| STSC-003 declaration verified | [ ] |
| ATC notification completed (1-800-NAVCAN) | [ ] |
| Flight notification number recorded | [ ] |
| Airspace chart reviewed | [ ] |
| Weather meets requirements | [ ] |
| Maximum altitude determined | [ ] |
| Emergency descent procedure reviewed | [ ] |

### 4.3 STSC-004 BVLOS Checklist

| Item | Check |
|------|-------|
| STSC-004 declaration verified | [ ] |
| BVLOS route planned and loaded | [ ] |
| Waypoints verified | [ ] |
| Geofence configured | [ ] |
| Lost link procedure programmed | [ ] |
| RTH altitude appropriate | [ ] |
| Visual observers positioned | [ ] |

### 4.4 Emergency Quick Reference

| Emergency | Immediate Action |
|-----------|------------------|
| MOTOR FAILURE | Descend immediately; controlled crash if needed |
| LOST LINK | Wait 10 sec; aircraft will auto-RTH |
| LOW BATTERY | Immediate RTH; land ASAP |
| GPS FAILURE | Switch mode; maintain visual; manual fly |
| FLYAWAY | **Call FIC: 1-866-541-4101** |

---

## 5. Battery Management

### 5.1 TB30 Battery (M30T)

| Specification | Value |
|---------------|-------|
| Capacity | 5880 mAh |
| Voltage | 26.1V |
| Energy | 131.6 Wh |
| Cycle Life | 400 cycles |
| Operating Temp | -20°C to 50°C |

### 5.2 Battery Care

#### Storage
- Store at 40-60% charge
- Temperature: 22-28°C ideal
- Use fireproof container

#### Charging
- Use only approved charger
- Allow 15 min cooling after flight
- Do not leave unattended

#### Retirement Criteria
- Cycle count >400
- Capacity <70% of original
- Any physical damage
- Unusual discharge behavior

---

## 6. Firmware Management

### 6.1 Firmware Update Policy

- Maintain current stable versions
- No beta/experimental firmware for SAR
- Test before operational deployment
- Maintain update logs

### 6.2 Firmware Update Procedure

1. Check DJI release notes
2. Review changes for safety items
3. Download firmware
4. Update in controlled environment
5. Verify successful update
6. Conduct test flight if needed
7. Record in firmware log
8. Brief pilots on changes

---

## 7. Maintenance Records

### 7.1 Maintenance Schedule

| Interval | Activity |
|----------|----------|
| Pre-Flight | Visual inspection, propeller check |
| Post-Flight | Damage inspection, log flight data |
| Weekly | Detailed inspection, firmware check |
| Monthly | Complete diagnostic, sensor calibration |
| Annual | Comprehensive inspection, service |

### 7.2 Records Retention

| Record Type | Retention Period |
|-------------|------------------|
| Aircraft Technical Log | Life of aircraft + 2 years |
| Battery Records | Life of battery + 2 years |
| Maintenance Actions | 2 years minimum |
| Defect Reports | 5 years |

---

## 8. Document Control

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

**END OF FORMS & MAINTENANCE MANUAL**
`
    }
};

// Quick access jump points (section IDs to jump to)
const QUICK_ACCESS = {
    'emergency-procedures': { section: 'safety', search: 'Emergency Procedures' },
    'fly-away': { section: 'safety', search: 'Fly-Away' },
    'pre-flight': { section: 'forms', search: 'Pre-Flight' },
    'weather-minimums': { section: 'operations', search: 'Weather Minimums' }
};

// Search index will be built from content
let searchIndex = [];

// Build search index from content
function buildSearchIndex() {
    searchIndex = [];

    Object.keys(RPOC_CONTENT).forEach(sectionKey => {
        const section = RPOC_CONTENT[sectionKey];
        const content = section.content;

        // Split content into lines and index each heading/paragraph
        const lines = content.split('\n');
        let currentHeading = '';
        let currentText = [];

        lines.forEach((line, index) => {
            if (line.startsWith('#')) {
                // Save previous block
                if (currentHeading && currentText.length > 0) {
                    searchIndex.push({
                        section: sectionKey,
                        sectionTitle: section.title,
                        heading: currentHeading,
                        text: currentText.join(' ').substring(0, 300),
                        lineNumber: index
                    });
                }
                currentHeading = line.replace(/^#+\s*/, '');
                currentText = [];
            } else if (line.trim()) {
                currentText.push(line.replace(/[|*>-]/g, '').trim());
            }
        });

        // Save last block
        if (currentHeading && currentText.length > 0) {
            searchIndex.push({
                section: sectionKey,
                sectionTitle: section.title,
                heading: currentHeading,
                text: currentText.join(' ').substring(0, 300),
                lineNumber: lines.length
            });
        }
    });
}

// Initialize search index on load
buildSearchIndex();
