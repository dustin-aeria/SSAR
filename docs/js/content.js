// SSAR RPOC Content Data
// Full comprehensive content from all 5 consolidated manuals
// Generated: 2026-03-09

const RPOC_CONTENT = {
    operations: {
        title: "Operations Manual",
        icon: "fa-plane",
        docCount: 14,
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

## Table of Contents

1. [Introduction and Regulatory Framework](#1-introduction-and-regulatory-framework)
2. [RPAS Operator Certificate (RPOC)](#2-rpas-operator-certificate-rpoc)
3. [Concept of Operations (CONOPS)](#3-concept-of-operations-conops)
4. [Authorized Aircraft](#4-authorized-aircraft)
5. [Standard Scenario Operations](#5-standard-scenario-operations)
6. [Site Survey and Flight Planning](#6-site-survey-and-flight-planning)
7. [Search Operations](#7-search-operations)
8. [Communications](#8-communications)
9. [Environmental Operations](#9-environmental-operations)
10. [Weather Minimums](#10-weather-minimums)
11. [Advanced Procedures](#11-advanced-procedures)
12. [General Flight Procedures](#12-general-flight-procedures)
13. [Emergency Contacts](#13-emergency-contacts)
14. [Document Control](#14-document-control)

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

### 1.4 Related Documents

| Document Number | Document Title |
|-----------------|----------------|
| SMS-001 | Safety Management System Manual |
| MCM-001 | Maintenance Control Manual |
| ERP-001 | Emergency Response Procedures |
| QAP-001 | Quality Assurance Program |
| PCR-001 | Pilot Competency Records |
| SOA-001 | SORA Documentation Package |
| TRN-301 | Pilot Training Program |

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

1. **Has overall responsibility** for operations authorized under the RPOC, including compliance with Canadian Aviation Regulations, RPOC conditions, and organizational policies

2. **Is accountable to Transport Canada** for all RPAS operations conducted under the authority of this RPOC

3. **Ensures adequate resources** are available for safe operations, maintenance, training, and safety management

4. **Maintains authority** to suspend operations, ground aircraft, or restrict pilot privileges when safety concerns arise

5. **Is directly responsible** for the effectiveness of the Safety Management System and cannot delegate this accountability

### 2.4 Authorized Operations

SSAR is authorized to conduct the following operations under this RPOC:
- Visual Line of Sight (VLOS) operations
- High Altitude VLOS operations (STSC-003) - up to 1000' AGL
- Low-Risk Beyond Visual Line of Sight operations (STSC-004)

### 2.5 Authorized Pilots

The following pilots are authorized under this RPOC (all hold valid Advanced RPAS Pilot Certificates):

| Name | Certificate # | Role | Qualified Aircraft |
|------|---------------|------|-------------------|
| Dustin Wales | [Certificate #] | Chief Pilot/AE | M30T, M4TD |
| Pilot 2 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 3 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 4 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 5 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 6 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 7 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 8 | [Certificate #] | PIC | M30T, M4TD |
| Pilot 9 | [Certificate #] | PIC | M30T, M4TD |

### 2.6 Operating Area

- Sea to Sky Corridor, British Columbia
- Squamish Search and Rescue jurisdiction
- Provincial parks and wilderness areas in the region
- Operations may be conducted throughout British Columbia as required for SAR missions, subject to appropriate airspace authorizations

---

## 3. Concept of Operations (CONOPS)

### 3.1 Preamble

This Concept of Operations outlines RPAS operations conducted by Squamish Search and Rescue (SSAR), based out of Squamish, British Columbia. This document is integral to SSAR Special Flight Operation Certificate (SFOC) application for:

- **(STSC-003)** VLOS operation of a small RPA (>250g up to 25kg) in uncontrolled airspace above 400' AGL up to 1000' AGL
- **(STSC-004)** BVLOS operation of a small RPA (>250g up to 25kg) over low-risk ground areas using visual observer DAA

### 3.2 Public Good and Objective

Squamish Search and Rescue is a first responder non-profit providing 24/7 SAR services in and around Squamish, British Columbia. The primary objective is to conduct safe and effective BVLOS RPAS flights supporting SSAR operations.

| Objective | Performance Criteria |
|-----------|---------------------|
| Safe Operation | Zero incidents/near-misses; full adherence to checklists; successful emergency protocol execution |
| Effective Reconnaissance | Successful identification and location of subjects; real-time data; minimal latency |
| Situational Awareness | Flights launched to assess blind spots or unknown threats where insight was gained |
| Efficiency | Reduction in average mission time without compromising safety |

### 3.3 Standard Scenario Scope

#### STSC-003: Low-Risk High Altitude VLOS

| Parameter | Detail |
|-----------|--------|
| Type of Operation | Visual Line-of-Sight (VLOS) operations above 400 ft AGL |
| Operational Area | Anywhere within SSAR boundary; minimum distance per CAR Part 901 |
| Altitude | Limited by VLOS; RPA must descend below 400 ft AGL or enter Atypical Airspace within one minute |
| Airspace | Uncontrolled only; ≥2 NM horizontal and 500 ft vertical from controlled airspace |
| Risk Assessment | Assigned SORA SAIL II |

**Altitude Rationale:** Standard flight operations are conducted at 400' AGL using terrain-following profiles. The 1000' AGL maximum accommodates Return-to-Home (RTH) scenarios in mountainous terrain where the operator cannot maintain terrain-following and the RPAS must climb to safely clear obstacles.

#### STSC-004: Low-Risk BVLOS

| Parameter | Detail |
|-----------|--------|
| Type of Operation | BVLOS over low-risk ground areas; VO DAA as primary air-risk mitigation |
| Operational Area | ≥2 NM outside areas >25 people/km²; ≥1 km outside areas >5 people/km² |
| Altitude | Limited to 400 ft AGL maximum |
| Airspace | ≥5 NM from aerodromes; ≥2 NM horizontal and 1500 ft vertical from controlled airspace |
| Risk Assessment | Assigned SORA SAIL II |

### 3.4 Team Composition

#### Pilot In Command (PIC)
- Validate maintenance; comply with regulations and SFOC constraints
- Monitor RPAS; plan operations; conduct Rapid Site Survey briefings
- Communicate to authorities; prepare incident/accident reports

#### Visual Observer (VO)
- Monitor airspace for hazards; communicate to PIC; maintain sterile cockpit
- Assist in setup/teardown; double-check maintenance; prepare payloads

### 3.5 Pilot Staging Process

| Stage | Description | Allowed Operations | Progression Criteria |
|-------|-------------|-------------------|---------------------|
| 1 | Basic License & Onboarding | Sub-250g RPAS flights | 20 training flights; complete SSAR Manuals |
| 2 | Advanced License Training | VLOS <400 ft AGL | Advanced License; 20 additional flights |
| 3 | BVLOS Training & Operations | BVLOS under supervision | 20 BVLOS flights; supervisor sign-off |
| 4 | High-Altitude Training | High altitude under supervision | 20 high-altitude flights; supervisor sign-off |
| 6 | Full SFOC Operator Approval | All SFOC-permitted operations | All stages complete; final sign-off |

### 3.6 Operational Constraints (NO-GO)

Operations shall NOT proceed if ANY of the following conditions exist:

- Weather breaches RPAS limitations; high wind warnings on Ground Control
- Operator fatigue or anxiety; unmanaged launch/land site contamination
- Risk of conflict with any airspace user
- Battery less than 90% full
- Missing access to SSAR manuals (Ops Manual, CONOPS, Site Survey, SFOC)

> **WITHOUT THESE DOCUMENTS READILY AVAILABLE - DO NOT FLY.**

### 3.7 In-Field Rationale

- **BVLOS:** Permitted when mission requires increased awareness beyond VLOS, with radio link intact
- **High-Altitude (>400 ft AGL):** Authorized only when mission requires visibility essential to locating a subject

> **Under no circumstances is an operator permitted to fly BVLOS or at high altitudes unless deemed essential for the SAR operation.**

### 3.8 Hierarchy of Operational Safety

| Priority | Area | Description |
|----------|------|-------------|
| 1 | Bystander Safety | Safety to bystanders (uninformed persons and manned aircraft). Must not put at risk the larger environment. |
| 2 | Adherence to Regulations | CARs Part IX, SFOC requirements, SSAR Operational Procedures. |
| 3 | RPAS Preservation | Ensure safe return to maintain future operational availability. |
| 4 | Subject Finding | Identifying, locating and assisting persons in need - the ultimate measure of mission success. |

### 3.9 Phases of Flight Operations

#### 3.9.1 Post-Launch Systems Check (All Operations - MANDATORY)

> **Immediately following launch on EVERY flight, the PIC shall conduct an Attitude and Movements Check at a safe hover altitude (3-5 meters AGL) before proceeding:**
>
> - Verify stable hover with no drift or oscillation
> - Test pitch, roll, and yaw responses
> - Confirm altitude hold, camera/gimbal, telemetry, GPS lock and home point
>
> **CRITICAL: If ANY abnormality is detected, LAND IMMEDIATELY and troubleshoot.**

#### 3.9.2 Reconnaissance Flight

**Starting Point:** All flights begin at the Last Known Position (LKP) or reference markers identified by SAR Management. From the starting point, all search patterns work OUTWARD.

| Phase | Description |
|-------|-------------|
| Rapid Response Site Survey | Conduct onsite assessment |
| Site Preparation | Place pylons, warning signs, launch pad |
| Flight Planning | Determine subject location; establish VLOS; develop plan |
| Launch & Test | Gain altitude; conduct attitudes and movements check |
| Transition Flight | Fly to scanning area; transition to BVLOS if applicable; 45° camera |
| Scanning Flight | Grid-like pattern; monitor via ground control; 45°-nadir |
| Location Marking | Mark location using ground control or secondary device |
| Return Flight | Orient toward launch; assess return path via live feed |
| Land | Return at safe altitude; descend vertically to pad |

#### 3.9.3 Situational Awareness Flight

**Scene Observation:**
- Maintain visual overview of rescue site
- Monitor access routes
- Provide real-time aerial perspective
- Track subject movement

**Active Rescue Support:**
- Aerial lighting during low-light operations
- Continuous eyes-on-subject
- Illuminate approach routes
- Support helicopter operations

| Phase | Description |
|-------|-------------|
| Rapid Response Site Survey | Conduct onsite assessment |
| Flight Planning | Determine operational boundaries; design area capture flight |
| Launch | Gain altitude; orient toward planned travel |
| Loiter for Scanning | Transition to SA data gathering; may enter BVLOS |
| Scan | Fly transitionally to capture rescue team safety data |
| Slow Exit | Return RPA to VLOS slowly |
| Return & Land | Fly to launch; descend vertically to pad |

### 3.10 Operational Safety Objectives (OSO) Reference

| OSO # | Topic | SSAR Evidence |
|-------|-------|---------------|
| 1 | Operator Competency | Comprehensive Ops Manual; all pilots advanced certified |
| 3 | Maintenance | Strictly per SSAR Ops Manual; AirData secondary check |
| 7 | Pre-Flight Inspection | Detailed in Ops Manual; included in AirData portal |
| 8,11,14,21 | Operational Procedures | Ops Manual and CONOPS; regular review meetings |
| 9,15,22 | Crew Training | All operators trained on JARUS SORA and OSOs |
| 16 | Multi-crew Coordination | SSAR Ops Manual crew communication procedures |
| 17 | Crew Fitness | Ops Manual fitness requirements; Rapid Site Survey fit-for-duty |
| 23 | Environmental Limits | Manufacturer limitations per Ops Manual |

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
| Category | Small RPAS (>250g, <25kg) |
| Propulsion | 4-rotor electric |
| Sensors | Wide, Zoom, Thermal, Laser Rangefinder |
| Max Flight Time | 41 minutes |
| Operating Temperature | -20°C to 50°C |
| Wind Resistance | 15 m/s |
| Transmission Range | 15 km (O3 Enterprise) |
| Battery Type | TB30 (5880 mAh) |
| IP Rating | IP55 |
| GNSS | GPS + GLONASS + Galileo + BeiDou |
| RTK Support | Yes (with D-RTK 2 or Network RTK) |

### 4.3 DJI Matrice 4TD (M4TD) Specifications

| Specification | Value |
|---------------|-------|
| Manufacturer | DJI |
| Model | Matrice 4TD |
| MTOW | 2145g |
| Category | Small RPAS (>250g, <25kg) |
| Propulsion | 4-rotor electric |
| Sensors | Wide, Tele, Thermal |
| Max Flight Time | 45 minutes |
| Operating Temperature | -20°C to 45°C |
| Wind Resistance | 12 m/s |
| Transmission Range | 20 km (O4 Enterprise) |
| Battery Type | DJI Enterprise Series Battery |
| IP Rating | IP54 |
| GNSS | GPS + GLONASS + Galileo + BeiDou |
| RTK Support | Yes (Network RTK) |

### 4.4 RPAS Capability Requirements

All authorized RPAS must be capable of:
- Flying 8 NM
- Sustained winds 10-12 m/s
- Operating -10 to +35°C
- High resolution/zoom imaging
- Omnidirectional obstacle avoidance
- Reliable C2 links

---

## 5. Standard Scenario Operations

### 5.1 Standard Scenario Overview

| Parameter | STSC-003 | STSC-004 |
|-----------|----------|----------|
| Operation Type | High Altitude VLOS | Low-Risk BVLOS |
| Visibility | VLOS maintained | BVLOS permitted |
| Max Altitude | 1000' AGL | 400' AGL |
| Population | ATC coordinated area | <25 people/km² |
| Airspace | Class G only | Class G only |
| ATC Coordination | REQUIRED | Not required |
| Pilot Certificate | Advanced Pilot License | Level 1 Complex Pilot License |

### 5.2 STSC-003 High Altitude VLOS Procedures

STSC-003 operates within a maximum altitude of 1000' AGL. Standard operations are conducted at 400' AGL using terrain-following profiles. The 1000' AGL ceiling accommodates Return-to-Home (RTH) emergency scenarios in mountainous terrain where terrain-following cannot be maintained.

#### 5.2.1 STSC-003 Operational Limitations

- Maximum altitude: 1000' AGL
- Minimum weather: 3 SM visibility, clear of cloud
- Daylight operations only (unless night ops approved)
- VLOS maintained at all times
- ATC notification required before operations

#### 5.2.2 ATC Coordination Protocol

> **MANDATORY: All STSC-003 operations require ATC coordination per Standard 922.**

##### Coordination Timeline

| Timing | Action | Method |
|--------|--------|--------|
| 24+ hours prior | Initial notification to appropriate ATC unit | Phone or online portal |
| 12 hours prior | Confirm operation details | Phone/email confirmation |
| 1 hour prior | Activation notification | Phone to ATC |
| At completion | Termination notification | Phone to ATC |

> **IMPORTANT:** STSC-003 requires minimum 24-hour advance ATC notification. If SAR activation does not permit this, operations MUST be conducted under STSC-004 parameters (max 400' AGL, BVLOS permitted, no ATC required). See Section 5.5.

##### ATC Units

| Airspace | ATC Unit | Contact | Frequency |
|----------|----------|---------|-----------|
| Class G | Vancouver FIC | 1-866-WXBRIEF | 126.7 MHz |
| Class E (>700' AGL) | Vancouver Centre | (604) 775-8800 | 132.35 MHz |
| Within 5 NM CYSE | Squamish FSS | Coordinate via FIC | 122.2 MHz |
| Helicopter Ops | Local heli ops | Via SAR tasking | As assigned |

#### 5.2.3 Altitude Band Procedures

| Altitude Band | Requirements | Additional Procedures |
|---------------|--------------|----------------------|
| Surface - 400' AGL | Standard VLOS | Normal operations |
| 400' - 700' AGL | ATC coordination required | Enhanced VO positioning |
| 700' - 1000' AGL | ATC coordination mandatory | Active radio communication, monitoring 126.7 |

#### 5.2.4 Emergency Descent Procedure

1. **IMMEDIATELY** initiate descent
2. **DESCEND** at max safe rate
3. **TARGET** altitude below 400' AGL
4. **MAINTAIN** horizontal position or move away from traffic

### 5.3 STSC-004 Low-Risk BVLOS Procedures

#### 5.3.1 STSC-004 Operational Limitations

- Maximum altitude: 400' AGL
- Maximum distance: 2 km from PIC (or as authorized)
- Minimum weather: 3 SM visibility
- Sparsely populated areas only
- Visual observers deployed as required
- Lost link procedures must be pre-programmed

#### 5.3.2 Pre-Flight Requirements

- Verify operating area <25 people/km²
- Establish controlled ground area (M1)
- Confirm weather within limits
- Set RTH altitude and parameters
- Verify C2 link margin adequate

#### 5.3.3 Ground Risk Buffer

| Aircraft | Max Speed | Glide Ratio | Max Alt | Calc. GRB | Applied GRB |
|----------|-----------|-------------|---------|-----------|-------------|
| DJI M30T | 23 m/s | ~1:1 | 400' | ~37m | 50m |
| DJI M4TD | 21 m/s | ~1:1 | 400' | ~34m | 50m |

#### 5.3.4 Lost Link Behavior - DJI M30T

| Duration | Behavior | PIC Action |
|----------|----------|------------|
| 0-3 seconds | Warning displayed, continues flight | Attempt reconnection |
| 3-10 seconds | Hover in place | Move to better signal area |
| 10-30 seconds | Begin RTH if not restored | Monitor telemetry |
| >30 seconds | Auto-RTH at preset altitude | Prepare for landing |
| Link restored | PIC control resumed | Assess and continue/abort |

#### 5.3.5 Weather Minimums for BVLOS

| Parameter | Minimum | Maximum |
|-----------|---------|---------|
| Visibility | 3 SM | - |
| Ceiling | Clear of cloud | - |
| Wind | - | 12 m/s sustained, 15 m/s gusts |
| Temperature | -20°C | +45°C |
| Precipitation | None | - |

### 5.4 GPS Failure Procedures

> **CRITICAL: GPS failure requires immediate response.**

1. **DO NOT PANIC** - maintain attitude control
2. **SWITCH** between flight modes
3. **CHANGE** altitude to maintain visual contact
4. **NAVIGATE** using visual references and compass
5. **FLY** back to operator position
6. **LAND** as soon as practical

### 5.5 Time-Critical SAR Operations

#### 5.5.1 Understanding Time Constraints

When SAR activation does not permit 24-hour ATC notification (required for STSC-003 operations above 400' AGL), all operations shall be conducted under STSC-004 parameters. This ensures legal compliance while maintaining operational effectiveness.

| 24-Hour Notice Available | 24-Hour Notice NOT Available |
|--------------------------|------------------------------|
| STSC-003 or STSC-004 may be selected based on mission requirements | Operations MUST be conducted under STSC-004 only |
| High-altitude VLOS (400-1000' AGL) permitted with ATC coordination | Maximum altitude 400' AGL; BVLOS permitted |
| Standard scenario selection per OPS-001 | Terrain-following flight profiles; Class G only; no ATC notification required |

#### 5.5.2 Scenario Selection Process

When SSAR receives a SAR activation, the PIC must immediately assess notification timeline feasibility:

1. **Step 1:** Determine if 24-hour ATC notification can be completed before operations commence
2. **Step 2:** If YES - select appropriate scenario (STSC-003 or STSC-004) based on mission requirements
3. **Step 3:** If NO - operations are restricted to STSC-004 parameters only

#### 5.5.3 STSC-004 as Time-Critical Fallback

> STSC-004 provides a legally compliant operational capability for time-critical SAR missions:
> - Maximum altitude 400' AGL (terrain-following permitted)
> - BVLOS permitted
> - ATC notification not required (Class G, sub-400')
> - Population density must verify <25 people/km²

#### 5.5.4 Operational Effectiveness Under STSC-004

- Optimal thermal detection altitude (80-120m AGL) falls within STSC-004 limits
- Terrain-following search patterns are well-suited to mountainous SAR environments
- PIC must verify notification timeline during Rapid Site Survey

#### 5.5.5 Terrain-Following Operations

- Maintain consistent AGL following natural terrain contours
- Optimal thermal search: 80-120 meters (260-400 feet) AGL
- Use contour search patterns in mountainous terrain
- RTH altitude must be set above highest terrain in operating area

#### 5.5.6 Time-Critical Pre-Flight Checklist

- [ ] SAR activation timeline assessed
- [ ] 24-hour ATC notice feasibility determined
- [ ] If NO 24-hour notice: STSC-004 parameters confirmed
- [ ] Maximum altitude set to 400' AGL
- [ ] Terrain-following flight plan briefed
- [ ] Crew briefed on operational constraints

### 5.6 Crew Configuration

| Operation Type | Minimum Crew | Recommended |
|----------------|--------------|-------------|
| VLOS <400' AGL | PIC + 1 VO | PIC + 1 VO + 1 Assist |
| STSC-003 up to 1000' | PIC + 2 VO | PIC + 2 VOs + 1 Assist |
| STSC-004 BVLOS | PIC + 1 VO | PIC + 1 VO + 1 Assist |

---

## 6. Site Survey and Flight Planning

### 6.1 Purpose - CAR 901.27

To ensure that all SSAR RPAS operations are planned effectively to mitigate risk and ensure compliance with CARs 901.27 (Site Survey) and 901.24 (Pre-flight Information).

### 6.2 Site Survey Types

| Type | Use Case |
|------|----------|
| Comprehensive Site Survey | In-depth assessment of ground and air risks, serving as baseline |
| Rapid Site Survey | Completed immediately prior to any RPAS operations; real-time risk identification |

### 6.3 Site Survey Requirements - CAR 901.27

Prior to takeoff, the PIC must conduct a site survey assessing:

1. **Operational Boundaries:** Defining horizontal and vertical limits (Lat/Long and Altitude)
2. **Airspace Class:** Verifying classification (Class G, Controlled Zones) and checking NOTAMs
3. **Hazards:** Identifying physical obstacles (wires, towers, trees) and environmental factors

#### 6.3.1 Population Density Assessment

- **Standard Ops:** Ensuring separation from bystanders (30m for Basic/Advanced, or as per "Sheltered" rules)
- **Level 1 Complex (BVLOS):** Verifying population density <25 people/km² using Census data
- **Sheltered Status:** If conducting Sheltered Operations (<30m from people/buildings), identify the specific obstacle acting as "shield"

### 6.4 The Rapid Site Survey (Emergency Call-Outs)

For time-critical SAR missions where a desktop study is impossible, the PIC must complete the SSAR Rapid Site Survey on-site.

**Format:** Digital (EFB/Tablet) or laminated checklist in the Operations Kit

> **Minimum Standard:** Even in emergencies, the survey must confirm:
> - Airspace safety (conflict check via ForeFlight/NAV Drone)
> - No bystanders in the immediate Takeoff/Landing Zone
> - Weather suitability (wind/visibility)

> **Go/No-Go:** If the Rapid Survey reveals risks that cannot be mitigated (e.g., icing, non-cooperative bystanders), the operation is a No-Go.

#### 6.4.1 Scenario Selection for Time-Critical Operations

During the Rapid Site Survey, the PIC must determine scenario selection based on notification timeline:

**Step 1 - Assess Notification Timeline:** Can 24-hour ATC notification be completed before operations commence?

| If YES (24-hour notice available) | If NO (time-critical SAR activation) |
|-----------------------------------|--------------------------------------|
| STSC-003 (High Altitude VLOS 400-1000' AGL) may be selected | Operations MUST be conducted under STSC-004 parameters ONLY |
| STSC-004 (BVLOS under 400' AGL) remains available | Maximum altitude: 400' AGL; BVLOS: Permitted |
| Complete ATC coordination per Section 5.2.2 | ATC notification: Not required (Class G, sub-400') |
| | Terrain-following flight profiles required; brief crew on altitude constraints |

> **This scenario selection is a mandatory element of the Rapid Site Survey for all SAR callouts.**

### 6.5 Flight Authorization and Filing

- **Controlled Airspace:** Authorization via NAV Drone (or current NAV CANADA filing tool)
- **Advanced Operations:** Flight plan must include:
  - Date/time/duration
  - Maximum altitude
  - Boundary
  - Emergency contacts
  - Lost Link procedures

### 6.6 Record Keeping

- **Documentation:** The Site Survey (Standard or Rapid) is a legal document
- **Retention:** Records retained for 24 months per SSAR standards (exceeding CAR 901.27)
- **Review:** Post-mission, update survey with actual conditions to aid future operations

### 6.7 SSAR Rapid Site Survey Checklist

#### 1. Crew Fitness & Roles
- [ ] PIC and VO designated and fit for duty (IMSAFE)
- [ ] Roles briefed (Who is on Comms? Who is flying?)

#### 2. Ground Risk Assessment
- [ ] Launch Zone: Clear of non-essential personnel and vehicles?
- [ ] Obstacles: Wires, trees, and towers identified?
- [ ] Public: Are we >30m from bystanders? (If NO, are we "Shielded"?)
- [ ] Security: Cones/Signage deployed if in a public area

#### 3. Airspace & Environment
- [ ] Location: Check ForeFlight/NAV Drone. Class G?
- [ ] Traffic: Scan area. Monitoring local frequency (122.8 / 126.7)
- [ ] Weather: Wind < limit? Visibility > 3 SM (BVLOS) or 2 SM (VLOS)?
- [ ] Icing: Temp > 0°C? (If < 0°C, execute Cold Weather Protocol)

#### 4. Emergency Plan
- [ ] Fly-Away: If drone flies towards [Direction], call [ATC/Unit Name]
- [ ] Nearest Hospital: [Location]
- [ ] Lost Link: RTH Altitude set to [Height] (Clear of trees?)

#### 5. Scenario Selection (Time-Critical)
- [ ] 24-hour ATC notification feasible? (If NO, STSC-004 only)
- [ ] If STSC-004: Maximum altitude set to 400' AGL
- [ ] If STSC-004: Terrain-following profile briefed
- [ ] Crew briefed on operational constraints

**Decision:** [ ] GO    [ ] NO-GO

**PIC Signature:** ___________________    **Date:** ___________________

### 6.8 Comprehensive Site Survey - Operational Theatre

#### 6.8.1 Description of Broad Operating Area

The SSAR region primarily encompasses the Squamish River Watershed. This area begins at Clendinning Provincial Park, following Clendinning Creek to the Elaho Valley, continuing through the Squamish River, and ultimately reaching Howe Sound, extending to Anvil Island. The surrounding mountainous terrain is also included.

#### 6.8.2 Topography and Geography

The SSAR boundary is situated in the Sea-to-Sky Corridor of British Columbia, near the town of Squamish. The region is characterized by diverse and rugged natural landscape, positioned between the Coast Mountains to the east and Howe Sound to the west.

- **Mountainous Terrain:** Coast Mountains with steep, rocky slopes; elevations exceeding 2,000 metres
- **Valleys and River Systems:** Deep valleys following river systems like the Squamish River
- **Forested Areas:** Dense temperate rainforests with coniferous and deciduous trees
- **Water Bodies:** Howe Sound and various lakes and rivers

#### 6.8.3 Population Density

The SSAR region corresponds to the Squamish-Lillooet Regional District census district with a population density of 3.1 people/km² (including four municipalities: Squamish, Whistler, Pemberton, Lillooet). Municipalities are excluded from operational requirements, making the effective density even lower.

- **Gatherings of People:** Highly unlikely during SAR operations; if identified, planning includes 100' minimum mitigation
- **Security Measures:** Launch/land location secured with signage, high-visibility pylons, and VO acting as barrier
- **Minimum Separation:** 100' from all uninvolved persons at all times

### 6.9 Hazards Assessment

#### 6.9.1 Terrain Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Mountainous Terrain | Rapid elevation changes can disrupt GPS signals; risk of collisions with mountain slopes in low-visibility conditions | Use downloaded terrain model to identify elevation changes on planned path. Monitor RPAS location on ground control map and onboard camera live feed. |
| Valleys and Gorges | Signal loss due to surrounding topography; turbulent wind conditions may destabilize RPAS | Same as above |

#### 6.9.2 Vegetation Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Dense Forests | Tall trees can obstruct flight paths at low altitude; reduced visibility within forest areas | When flying within or under canopies, only use RPAS with omnidirectional radar or sonar obstacle detection. |
| Fallen Trees and Debris | Unexpected obstacles after storms | Same as above |

#### 6.9.3 Weather Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Rapid Weather Changes | Sudden shifts in wind speed/direction, unexpected rainfall, onset of fog | Check forecast before and during service. Pack anemometer for on-site wind monitoring. Remain vigilant of weather forming at or in the path of operation. |
| Wind Conditions | Unpredictable high winds in mountain passes and coastal areas | Same as above |
| Fog and Mist | Proximity to Howe Sound and rivers causes frequent low visibility | Same as above |

#### 6.9.4 Water Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Bodies of Water | Risk of RPAS falling into water due to mechanical failure or pilot error | Water, where people are not present, is recognized as a safe scuttle option in case of RPAS emergency. |
| River Currents | Strong currents could carry RPAS away if forced to land near rivers | Same as above |

#### 6.9.5 Human Activity Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Recreational Areas | Popular spots (Stawamus Chief, Shannon Falls) may have unexpected persons | SSAR maintains 100' minimum separation from uninvolved persons. |
| Aircraft Traffic | Low-flying helicopters/planes for tourism, firefighting, or rescue | ROC-A certified pilots maintain airspace awareness at all times. SAR helicopters have direct comms with RPAS team. |

#### 6.9.6 Wildlife Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Birds | Various species may pose collision risk at lower altitudes | Evasive maneuvers for predatory birds followed by RTH. |
| Wildlife Encounters | Bears, deer may pose hazards during launch and recovery operations | Standard wildlife practices: no food left out, operators making noise, bear spray on hand. |

#### 6.9.7 Technical & Operational Hazards

| Hazard | Risk | Mitigation |
|--------|------|------------|
| Signal Interference | Rugged terrain and dense vegetation can interfere with GPS and communication signals | Maintain awareness of signal through telemetry feed. |
| Battery Drain | Cold temperatures at higher altitudes reduce flight time | PIC trained for frequent battery level reads; flight time managed accordingly. |

---

## 7. Search Operations

### 7.1 Purpose and Scope

This section establishes standard operating procedures for RPAS search operations conducted by Squamish Search and Rescue, covering search pattern execution, coordination protocols, and integration with ground teams.

### 7.2 Search Starting Point (All Patterns)

All reconnaissance and search flights begin at the designated starting point identified by SAR Management:

- Last Known Position (LKP) of the subject
- Physical evidence location (e.g., subject's belongings, hat, pack)
- Witness sighting location; vehicle or point last seen (PLS)
- Other markers designated by SAR Manager

> **Search Direction:** From the designated starting point, ALL search patterns work OUTWARD. This methodology ensures:
> - Highest probability area is searched first
> - Systematic, methodical coverage expanding from datum
> - No gaps in search coverage
> - Efficient use of battery and flight time

**The PIC must confirm the starting point coordinates with SAR Management before commencing search operations.**

### 7.3 Search Pattern Diagrams

#### 7.3.1 Expanding Square Search

Used when search area is relatively small and subject location known within close limits.

| Leg | Distance/Direction |
|-----|-------------------|
| 1 | Track spacing x 1, Turn 90° right |
| 2 | Track spacing x 1, Turn 90° right |
| 3 | Track spacing x 2, Turn 90° right |
| 4 | Track spacing x 2, Turn 90° right |
| 5+ | Increase by track spacing each 2 legs |

#### 7.3.2 Parallel Track Search

| Parameter | Value |
|-----------|-------|
| Track Spacing (Visual) | 50-100m based on terrain/visibility |
| Track Spacing (Thermal) | 30-50m for optimal detection |
| Altitude (Visual) | 50-80m AGL |
| Altitude (Thermal) | 80-120m AGL |

#### 7.3.3 Sector Search

Used from a fixed reference point (last known position). Divide search area into 45-degree sectors radiating from datum.

#### 7.3.4 Contour/Terrain Following Search

| Terrain Type | Recommended Approach |
|--------------|---------------------|
| Ridgelines | Fly parallel to ridge, both sides |
| Valleys | Follow valley floor, check sidewalls |
| Cliffs/Steep terrain | Fly horizontal passes at varying heights |

### 7.4 Thermal Imaging Procedures

#### 7.4.1 DJI M30T Configuration

| Setting | Recommended Value |
|---------|------------------|
| Palette | White Hot (subject detection) |
| Gain | High gain for human detection |
| Isotherm | Enable for body temp range (35-40°C) |
| Zoom | 2x digital for verification |

#### 7.4.2 DJI Matrice 4TD Configuration

| Setting | Recommended Value |
|---------|------------------|
| Thermal Resolution | Full resolution mode |
| Palette | Ironbow for scene awareness |
| Spot Meter | Enable for temp verification |
| Picture-in-Picture | Thermal + Visual for context |

### 7.5 Ground Team Coordination

| Event | Radio Call | Action Required |
|-------|------------|-----------------|
| Possible sighting | STANDBY - Possible contact | Hold position, verify with zoom |
| Confirmed sighting | CONTACT - Grid [location] | Mark GPS, notify ground team |
| Medical visible | URGENT - Medical needed | Relay to SAR Manager immediately |
| Lost subject moving | MOBILE SUBJECT | Track and guide ground teams |

### 7.6 Search Documentation

Required documentation for all search operations:
- Pre-search briefing notes
- Search area coordinates (polygon or grid reference)
- Flight track logs (auto-recorded)
- Thermal/visual imagery of contacts
- Post-search debrief notes
- Battery usage and swap times

### 7.7 Situational Awareness Operations

#### Scene Monitoring
- Maintain aerial observation of rescue site
- Track subject location and condition
- Monitor terrain and access conditions
- Provide real-time perspective to SAR Management

#### Rescue Support
- Aerial lighting during low-light operations
- Continuous eyes-on-subject during technical rescue
- Illuminate approach routes for ground teams
- Coordination with helicopter operations

> **Maintain continuous contact with SAR Manager. Report any changes in subject condition, terrain hazards, or safety concerns immediately.**

### 7.8 Time-Critical Search Operations

#### 7.8.1 Search Pattern Optimization for Sub-400' AGL

When operating under STSC-004 time-critical constraints:

| Pattern | Adaptation |
|---------|-----------|
| Contour/Terrain-Following (Preferred) | Follow natural terrain at 80-120m AGL; systematic coverage within altitude limits |
| Modified Parallel Track | Altitude capped at 400' AGL; track spacing reduced to 25-40m; more passes required |
| Expanding Square | Effective at sub-400'; no modification required for time-critical operations |

#### 7.8.2 Thermal Imaging at Sub-400' AGL

> Thermal search remains highly effective under STSC-004 altitude constraints:
> - Optimal detection altitude (80-120m AGL) falls within 400' limit
> - Lower altitudes may improve detection under tree canopy
> - Slower flight speeds improve image quality and detection probability

#### 7.8.3 Time-Critical Search Briefing

Include in briefing:
- Scenario selection rationale (STSC-004 due to time constraints)
- Maximum altitude constraint (400' AGL)
- Terrain-following requirements
- Modified search pattern parameters
- RTH altitude above highest terrain

---

## 8. Communications

### 8.1 Purpose

To establish the communication protocols required to ensure the safety, coordination, and regulatory compliance of SSAR RPAS operations. This policy ensures effective Crew Resource Management (CRM) and reliable information flow during all phases of flight.

### 8.2 Communication Equipment

| System | Requirements |
|--------|-------------|
| Primary System | High-quality, reliable two-way radios suitable for the operational range. |
| Backup System | Starlink must be available on-site, particularly for remote area operations. |
| Functionality Check | All communication devices must be tested during pre-flight. If the primary PIC-VO link fails, revert to VLOS by PIC only, or land immediately. |

### 8.3 Pre-Flight Communication

#### 8.3.1 Crew Briefing

The PIC must conduct a comprehensive pre-flight briefing with all crew members. Topics must include:

- Operational objectives and roles
- Hazards and weather conditions
- Frequencies to be used
- Emergency Communication Plan (including "Lost Link" and "Lost Comms" procedures)

#### 8.3.2 External Coordination

Ensure communication channels with ground SAR teams or manned aircraft (if present) are established prior to launch.

### 8.4 In-Flight Communication Protocols

#### 8.4.1 Core Requirements

- **Continuous Contact:** Continuous, two-way communication must be maintained between the PIC and VOs at all times
- **Sterile Cockpit:** Non-essential conversation is prohibited during critical phases of flight (takeoff, landing, and emergency procedures)
- **Standard Phraseology:** Use clear, concise language and the NATO phonetic alphabet for critical data
- **Status Updates:** VOs are authorized and encouraged to request status updates (e.g., "Battery Check," "Link Status")

#### 8.4.2 Closed-Loop Communication

To eliminate misunderstandings, crew members must use "Read-back/Hear-back" protocols. Commands and critical information must be acknowledged and repeated.

**Example:**
> VO: "Pilot, traffic. Manned aircraft North of us, heading South."
>
> PIC: "Copy. Traffic North heading South. Descending and holding."

### 8.5 Visual and Silent Procedures

- **Visual Signals:** In the event of radio failure, or for close-proximity operations, pre-agreed visual signals (hand signals) may be used
- **Silent Operations:** For sensitive missions (e.g., wildlife monitoring), non-verbal signals may be used only if safety is not compromised
- **Safety Override:** If verbal communication is required to prevent a hazard to people, property, or the aircraft, silence protocols must be immediately abandoned

### 8.6 Frequency Management

- **Compliance:** All radio operations must comply with Innovation, Science and Economic Development Canada (ISED) regulations
- **Aeronautical Radios:** When using aeronautical bands (e.g., 126.7 MHz or designated SAR frequencies), the operator must hold a Restricted Operator Certificate - Aeronautical (ROC-A)

### 8.7 Communication Documentation

- **Flight Logs:** Significant communication events (e.g., interference, emergency declarations, or deviation from the flight plan) must be recorded in the flight log
- **Incident Reporting:** Any communication failure that results in a "fly-away" or airspace violation must be reported as per the Incident and Accident Reporting policy

### 8.8 Airspace Management

#### 8.8.1 Airspace Classification

All operations within the SSAR boundary are in Class G airspace. Overlapping controlled airspace:

| Location | Airspace Class | Altitude Range |
|----------|---------------|----------------|
| Furry Creek to southern border | Class C | 6501' to 8500' MSL |
| Furry Creek to northern Squamish boundary | Class C | 8501' to 9500' MSL |
| North of Squamish to Cloudburst/Garibaldi | Class E | 700' AGL to 9500' MSL |
| North of Garibaldi Lake to Daisy Lake | Class C | 9501' to 12,500' MSL |

**Known Routes:** V321 at 11,000' (N/S) and T606 at 10,500' (NE/SW) cross over the SSAR area.

#### 8.8.2 Air Traffic Awareness

Air traffic expected from:
- Squamish Municipal Airport
- Local heliports
- Vancouver Harbour

**Coordination is essential for helicopter operations.**

#### 8.8.3 Communication and Coordination

- Visual Observers remain vigilant and communicate sightings in real-time
- ROC-A radio actively monitored during all operations
- ADS-B In notifications monitored for situational awareness
- Pre-operation communication with flight schools and commercial operators when needed
- Two-way communication capabilities required (cellular, radio, or SSAR network); tested via signal check before ops

---

## 9. Environmental Operations

### 9.1 Purpose and Scope

This section establishes procedures for environmental considerations during RPAS operations, including wildlife protection, noise mitigation, and sensitive area protocols. These procedures ensure compliance with environmental regulations and minimize ecological impact.

### 9.2 Wildlife Mitigation Procedures

#### 9.2.1 Pre-Flight Wildlife Assessment

Before each flight, conduct a wildlife assessment:

- Survey launch area for nesting birds, dens, or wildlife trails
- Check seasonal wildlife activity calendars
- Consult BC Wildlife Branch notices for sensitive areas
- Identify migratory bird routes in the area
- Note any endangered species habitats nearby

#### 9.2.2 Wildlife Encounter Protocols

| Wildlife Type | Min. Distance | Action if Encountered |
|---------------|---------------|----------------------|
| Nesting birds | 100m horizontal | Immediately alter course, increase altitude |
| Eagles/Raptors | 200m minimum | Descend and move away, do not chase |
| Bears/Ungulates | 150m horizontal | Maintain altitude, avoid hovering |
| Marine mammals | 100m horizontal | Do not approach, observe from distance |
| Bird flocks | 150m minimum | Reduce speed, alter course |
| Unknown species | 100m default | Maintain distance, document and report |

#### 9.2.3 Seasonal Restrictions

| Season | Restriction | Affected Areas |
|--------|------------|----------------|
| March-July | Bird nesting season - extra caution | Forests, cliffs, wetlands |
| Sept-Nov | Salmon spawning - avoid waterways | Rivers and streams |
| May-June | Bear denning emergence | Alpine meadows |
| Year-round | Eagle nesting territories | Known nesting sites |

### 9.3 Noise Mitigation Procedures

#### 9.3.1 Aircraft Noise Characteristics

| Aircraft | Noise Level | Audible Range |
|----------|-------------|---------------|
| DJI M30T | ~75 dB at 1m | 200-400m depending on conditions |
| DJI Matrice 4TD | ~72 dB at 1m | 150-350m depending on conditions |

#### 9.3.2 Noise Reduction Techniques

To minimize noise impact:

- Maintain maximum practical altitude when over noise-sensitive areas
- Avoid prolonged hovering over residential or wildlife areas
- Use smooth, gradual maneuvers (reduces motor noise spikes)
- Plan routes to avoid repeated overflights of same area
- Schedule operations during less sensitive times when possible
- Brief team on quiet launch/recovery procedures

#### 9.3.3 Noise-Sensitive Area Procedures

| Area Type | Required Procedure |
|-----------|-------------------|
| Residential areas | Maintain 120m AGL minimum, avoid hovering |
| Schools/Hospitals | Maintain 150m AGL, transit quickly |
| Parks/Rec areas | Notify park management if possible |
| Wildlife reserves | Maximum altitude, direct transit only |

### 9.4 Sensitive Area Operations

#### 9.4.1 Protected Area Categories

The following areas require special operational consideration:

- Provincial Parks (BC Parks permit may be required)
- Wildlife Management Areas
- Ecological Reserves
- First Nations cultural sites
- Conservation lands
- Marine protected areas

#### 9.4.2 Permit and Notification Requirements

| Area | Requirement | Lead Time |
|------|-------------|-----------|
| Provincial Parks | BC Parks permit or SAR exemption | 24-48 hours |
| Wildlife Areas | BC Wildlife notification | 24 hours |
| First Nations lands | Band council notification | As practical |
| Private property | Landowner permission | Prior to operation |

### 9.5 Environmental Incident Reporting

Report the following environmental incidents:

- Any wildlife strike or near-miss
- Wildlife disturbance (animals fleeing, nesting disruption)
- Complaints from public regarding noise
- Operations in unauthorized sensitive areas
- Any environmental damage from operations

**Reporting Procedure:**

1. Complete Environmental Incident Form within 24 hours
2. Notify Operations Manager
3. Document with photos/video if available
4. Report to relevant authority if required (BC Wildlife, Parks)
5. Review and implement corrective actions

---

## 10. Weather Minimums

### 10.1 Purpose

To establish the minimum meteorological conditions required for safe RPAS operations. This policy ensures compliance with Canadian Aviation Regulations (CARs) Part IX (specifically 901.34 and 901.35) and defines the environmental limits for SSAR equipment.

### 10.2 General Operational Limits

Operations must strictly adhere to the most restrictive of the following limits:

- **Manufacturer Limitations:** As specified in the RPAS Flight Manual (e.g., max wind resistance, operating temperature, ingress protection rating)
- **Regulatory Minimums:** As defined in CARs Part IX or the applicable SFOC
- **ATC Restrictions:** Any additional weather minimums imposed by Air Traffic Control when operating in Controlled Airspace

### 10.3 Visibility and Cloud Clearance

| Operation Type | Minimum Visibility | Cloud Distance |
|----------------|-------------------|----------------|
| Standard VLOS | Sufficient to maintain visual contact with the RPAS at all times (approx. 2 SM) | Clear of Cloud/Fog |
| EVLOS (Daisy-chained) | Sufficient for the VO to maintain visual contact within their sector | Clear of Cloud/Fog |
| BVLOS / Level 1 Complex | 3 Statute Miles (4.8 km) Ground Visibility (CAR 901.34(3)) | Clear of Cloud |

### 10.4 Predominant Weather by Season

| Season | Temperature | Precipitation | Winds | Key Considerations |
|--------|-------------|---------------|-------|-------------------|
| Winter | 0°C to 7°C (low) -10°C to 0°C (high) | Heavy rain (low) Frequent snow (high) | 4-6 m/s (low) >10 m/s (high) | Strong gusts during storms; snow accumulation at elevation |
| Spring | 5°C to 15°C (low) -5°C to 5°C (high) | Rain decreasing by May Mix rain/snow (high) | 3-5 m/s (low) 5-8 m/s (high) | Variable winds; snow lingering at higher regions |
| Summer | 14°C to 25°C (low) 5°C to 15°C (high) | Dry, minimal rain Afternoon thunderstorms | 3-5 m/s (low) 4-7 m/s (high) | Best flying conditions; afternoon thermals possible |
| Fall | 10°C to 0°C (low) -5°C to 5°C (high) | Increasing rain Frequent snow Oct-Nov | 3-5 m/s (low) 6-10 m/s (high) | Rapid cooling; strong winds in exposed areas |

### 10.5 Icing Protocol - CAR 901.35

> **ZERO TOLERANCE: Flight into known or forecast icing conditions is prohibited.**

#### 10.5.1 Critical Surfaces

No pilot shall take off if frost, ice, or snow is adhering to the wings, propellers, or optical sensors.

#### 10.5.2 Cold Weather Assessment

When operating in temperatures near or below 0°C (32°F):

- **Pre-Flight:** Inspect propellers and airframe for ice accumulation while on the launch pad
- **In-Flight:** Monitor video feed and telemetry for signs of icing (e.g., increased motor current, vibration, loss of lift)
- **Abort:** If icing is suspected, land immediately

### 10.6 Cold Weather Operations (Sub-Zero)

To mitigate battery failure and plastic brittleness in cold environments:

- **Battery Pre-Heating:** Batteries must be kept warm (>15°C) prior to insertion. Use battery heaters or keep them in a heated vehicle/vest
- **Warm-Up Hover:** A low-altitude hover (approx. 1 min) must be conducted after takeoff to allow battery internal temperatures to stabilize
- **Flight Time De-Rating:** Pilots must plan for a 20-30% reduction in maximum flight time in temperatures below 0°C

### 10.7 Assessment and Monitoring

- **Pre-Flight Sources:** Pilots must utilize reliable aviation weather sources (e.g., Environment Canada Aviation Weather, NAV CANADA flight planning, or Windy.com with aviation overlays)
- **On-Site Monitoring:** For extended operations, on-site real-time monitoring (e.g., anemometer) is required
- **Decision Authority:** The Pilot in Command (PIC) has the final authority to cancel or suspend operations due to weather, regardless of mission urgency

---

## 11. Advanced Procedures

### 11.1 Purpose

To establish a standardized, sequential workflow for Complex and Extended Range SSAR RPAS operations. This policy ensures consistency in flight execution, reduces human error during high-stress missions, and ensures compliance with Canadian Aviation Regulations (CARs) 901.23 and the specific requirements for Level 1 Complex (Low-Risk BVLOS) and EVLOS.

### 11.2 Scope

This section applies to operations exceeding standard Visual Line of Sight (VLOS) limits, specifically:

- **EVLOS (Extended Visual Line of Sight):** Operations utilizing multiple Visual Observers to extend range
- **Level 1 Complex:** Low-Risk BVLOS operations conducted in sparse environments (<25 people/km²)
- **Sheltered Operations:** Operations conducted within 30m of non-participating persons/buildings using an obstacle as a shield

### 11.3 Core Priorities

In the execution of these procedures, decision-making shall be prioritized in the following strict order:

| Priority | Area | Description |
|----------|------|-------------|
| 1 | Safety of Persons | The safety of the public, the ground search team, and the flight crew is absolute |
| 2 | Safety of Airspace | Preventing conflict with manned aircraft (SAR helicopters, general aviation) |
| 3 | Preservation of Equipment | Safeguarding the RPAS assets to ensure future availability |
| 4 | Mission Success | Completing the search objective |

> **Mission urgency never justifies skipping checklist items or violating safety minimums.**

### 11.4 EVLOS Procedures (Daisy-Chaining)

Used to search riverbeds or long trails where one pilot cannot see the entire area.

#### 11.4.1 EVLOS Pre-Flight Setup

- **Crew Certs:** Confirm ALL Visual Observers (VOs) hold a valid Basic or Advanced Pilot Certificate
- **Sector Planning:** Divide the flight path into Sectors (e.g., Sector A = Pilot, Sector B = VO 1)
- **Visual Overlap:** Sector A and Sector B must overlap to ensure continuous sight during handover
- **Comms Check:** Verify reliable 2-way radio communication between Pilot and all VOs (Latency/Dropout = NO GO)

#### 11.4.2 The Visual Handover Protocol

> **Pilot:** "Approaching Sector B. VO 1, do you have visual tally?"
>
> **VO 1:** "Visual Tally. I have the aircraft."
>
> **Pilot:** "You have the airspace watch. Entering Sector B."
>
> **VO 1:** "I have the watch. Area clear."

#### 11.4.3 EVLOS Emergency Logic

- **Lost Comms:** If radio contact with a remote VO is lost, the Pilot must immediately return the aircraft to their own visual sector or land
- **Lost Visual:** If the VO loses sight during their watch, call "VISUAL LOST." Pilot immediately climbs and halts (Hover) until visual is regained or RTH is triggered

### 11.5 Level 1 Complex Procedures (Low-Risk BVLOS)

Used for long-range searches in the backcountry without an SFOC.

#### 11.5.1 Level 1 Pre-Flight Validation

- **Population Check:** Confirm via Site Survey that population density is <25 people/km²
- **Visibility Check:** Confirm Ground Visibility is >3 Statute Miles (4.8 km)
- **Airspace:** Confirm Class G Airspace (or SFOC held for Controlled)
- **Detect & Avoid:** Confirm ADS-B In (e.g., DJI AirSense) is active and audio is audible

#### 11.5.2 BVLOS Launch Flow

- **RTH Setting:** Set Return-to-Home altitude higher than the tallest terrain feature in the entire mission area + buffer
- **Loss of Link Logic:** Set to Return to Home (Not Hover)
- **Monitoring:** Pilot focus shifts primarily to Telemetry & Map for navigation. Pilot must scan battery levels every 60 seconds

#### 11.5.3 BVLOS Approach and Avoidance

- **Manned Aircraft Detected (ADS-B or Audio):** Immediate descent to <200ft AGL. Manned aircraft (even SAR helis) rarely fly below 200ft AGL in transit
- **Uncertainty:** If Pilot loses orientation or confidence in the map feed, execute Immediate RTH

### 11.6 Sheltered Operations Procedures

Used to fly close to cliffs, buildings, or trees to scan for subjects.

#### 11.6.1 "The Shield" Assessment

You may fly closer than 30m to a non-participating person/building IF an obstacle stands between the drone and the person.

1. Identify the Shield (e.g., tree line, building wall, cliff face)
2. Ensure the drone remains within the Shadow of the shield (Height of drone < Height of Shield)

#### 11.6.2 Sheltered Execution

- **Speed:** Reduce speed to <5 m/s (Cine Mode)
- **Sensors:** Keep Obstacle Avoidance ON (unless flying through tight foliage, then OFF with extreme caution)
- **Position:** Never fly over the person/building being shielded. Stay on the "safe" side of the obstacle

---

## 12. General Flight Procedures

### 12.1 Purpose

To establish a standardized, sequential workflow for all SSAR RPAS operations. This section ensures consistency in flight execution, reduces human error during high-stress missions, and ensures compliance with Canadian Aviation Regulations (CARs) 901.23 (Procedures for Normal Operations).

### 12.2 Scope

This section applies to every flight operation conducted by SSAR, including:
- **Operational Flights:** Active search and rescue tasks
- **Training Flights:** Proficiency checks and practice scenarios
- **Maintenance Flights:** Functional tests and system validations

It is binding on all flight crew members (Pilot in Command, Visual Observer, and Payload Operator) regardless of the RPAS make/model being utilized.

> **Note:** Mission urgency never justifies skipping checklist items or violating safety minimums.

### 12.3 Pre-Deployment & Kit Preparation

Before leaving for any operation, complete the following:

| Step | Action | Verification |
|------|--------|--------------|
| 1 | **Inventory Check:** Verify all necessary aircraft, batteries, tablets, and backup equipment are accounted for | [ ] Complete |
| 2 | **Airworthiness:** Confirm equipment meets "Pre-Operation" maintenance requirements (no visible damage, no open defects) | [ ] Complete |
| 3 | **Battery Status:** Ensure all flight batteries and controller batteries are fully charged (>90%) and properly stored | [ ] Complete |
| 4 | **Software Currency:** Verify flight control app, firmware, and navigation databases are current | [ ] Complete |
| 5 | **Documentation:** Pack all required documents - Certificates, SFOC copy, Emergency Procedures card, Site Survey forms | [ ] Complete |
| 6 | **Support Equipment:** Verify landing pad, pylons, signage, anemometer, and fire extinguisher are packed | [ ] Complete |

### 12.4 On-Site: Team Briefing & Rapid VO Training

Upon arrival at the operational site, conduct the following briefing:

#### 12.4.1 Team Briefing Agenda

| Topic | Content | Duration |
|-------|---------|----------|
| **Objectives** | Discuss operational goals, search areas, and expected outcomes | 2 min |
| **Roles** | Assign Pilot in Command (PIC) and Visual Observer (VO) | 1 min |
| **Safety** | Review emergency escape routes, nearest medical facility, and "Lost Link" procedures | 2 min |
| **Airspace** | Confirm airspace classification, NOTAMs, and any active restrictions | 1 min |
| **Weather** | Current conditions, forecast, and decision criteria | 1 min |
| **Communications** | Confirm radio channels, callsigns, and backup communication methods | 1 min |

#### 12.4.2 Rapid VO Training (Mandatory for All VOs)

Before any flight, ensure every Visual Observer has been briefed on:

| Item | Content | VO Confirms |
|------|---------|-------------|
| **Core Duties** | Airspace watch is PRIMARY. Maintain sterile cockpit. Monitor PIC battery calls. | [ ] Understood |
| **Site Risks** | Review site-specific risks identified in Rapid Site Survey and control measures in place | [ ] Understood |
| **Urgent Risks** | Manned aircraft conflict triggers IMMEDIATE "TRAFFIC" call. Emergency Descend Protocol execution. | [ ] Understood |
| **Hand Signals** | Review backup visual signals: Thumbs Up (clear), Wave Off (land), Point (traffic direction) | [ ] Understood |
| **Confirmation** | VO verbally confirms comfort with responsibilities | [ ] Confirmed |

### 12.5 On-Site: Site Setup & Rapid Site Survey

#### 12.5.1 Physical Site Setup

| Step | Action |
|------|--------|
| 1 | **Area Inspection:** Walk the Takeoff/Landing Zone (TO/ALZ). Identify trip hazards, wires, overhead obstacles, or debris |
| 2 | **Perimeter:** Establish a safety perimeter using cones/tape around the launch site (minimum 5m radius) |
| 3 | **Signage:** Deploy "DRONE OPERATIONS IN PROGRESS" signage if in public area |
| 4 | **Wind Assessment:** Deploy anemometer or assess wind using visual indicators |
| 5 | **Landing Pad:** Position landing pad on level ground, oriented into wind if possible |

#### 12.5.2 Rapid Site Survey Completion

Complete the Rapid Site Survey checklist (Section 6.7) addressing:

| Category | Items to Verify |
|----------|-----------------|
| **Flight Plan** | Review and discuss flight plan considering site realities and objectives |
| **Terrain** | Discuss terrain profile of flight path/surrounding area, concerns, and mitigation measures |
| **Air Risks** | Discuss known/potential air risks and controls (airspace management, traffic expectation) |
| **Ground Risks** | Discuss known/potential ground risks and controls (controlled ground area, bystanders) |
| **Weather** | Observe current weather and changing conditions. Adjust flight plans if necessary |
| **Scenario Selection** | Determine STSC-003 vs STSC-004 based on notification timeline availability |

### 12.6 RPAS Assembly & Setup

#### 12.6.1 Aircraft Preparation Sequence

| Step | Action | Verification |
|------|--------|--------------|
| 1 | **Unpack:** Remove RPAS from case, place on landing pad | [ ] |
| 2 | **Assembly:** Unfold arms. Ensure locking mechanisms are ENGAGED and SECURE (audible click) | [ ] |
| 3 | **Propellers:** Verify all propellers are secure, undamaged, and correctly installed (check rotation direction) | [ ] |
| 4 | **Payload:** Remove gimbal guard/cover. Verify camera/payload is secure and lens is unobstructed | [ ] |
| 5 | **Battery Inspection:** Inspect battery for swelling, damage, or corrosion. Do NOT use damaged batteries | [ ] |
| 6 | **Battery Install:** Insert fully charged battery until audible "click" confirms engagement | [ ] |
| 7 | **SD Card:** Verify SD card is installed and has sufficient space | [ ] |

#### 12.6.2 Ground Control Station Setup

| Step | Action | Verification |
|------|--------|--------------|
| 1 | **Power On Tablet/GCS:** Power on the ground control station FIRST | [ ] |
| 2 | **App Launch:** Launch flight control application (DJI Pilot 2 or FlightHub) | [ ] |
| 3 | **Pilot Credentials:** Confirm pilot credentials are logged in | [ ] |
| 4 | **AirData Sync:** Confirm AirData is synced with ground control software | [ ] |
| 5 | **Controller Battery:** Verify controller battery is >50% | [ ] |
| 6 | **Antenna Position:** Position controller antennas for optimal signal (pointed toward flight area) | [ ] |

### 12.7 System Power-Up & Pre-Flight

#### 12.7.1 Power-Up Sequence

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | **GCS Ready:** Ensure Ground Control Station is powered and app is running | App displaying "Ready to Connect" |
| 2 | **Energize Aircraft:** Announce loudly: **"RPAS ON!"** and power on aircraft | Startup chime, lights illuminate |
| 3 | **Link Check:** Confirm stable connection between GCS and aircraft | "Connected" status, HD video feed |
| 4 | **GPS Lock:** Wait for sufficient GPS satellites (minimum 10 recommended) | GPS icon green, coordinates displayed |
| 5 | **Compass Status:** Verify compass is calibrated. Calibrate if prompted or if moved >50km | No compass warnings |
| 6 | **Home Point:** Verify Home Point is set correctly at launch location | Home point icon at launch position |
| 7 | **Gimbal Check:** Test gimbal movement - tilt up/down, pan left/right | Smooth movement, no obstructions |
| 8 | **Camera Settings:** Verify camera settings (exposure, focus, recording mode) | Settings as required for mission |

### 12.8 Pre-Flight Checklists

#### 12.8.1 Standard Pre-Flight Checklist

The VO reads the **Callout**, the PIC performs the check and states the **Response**.

| # | VO Callout | PIC Response | Notes |
|---|------------|--------------|-------|
| 1 | "Wind and Weather" | "[Speed] m/s, **Within Limits**" | Verify against aircraft limits |
| 2 | "Air Vehicle Batteries" | "**[N]%**" | Must be >90% for operational flight |
| 3 | "Ground Control Batteries" | "**[N]%**" | Must be >50% |
| 4 | "Ground Control Application" | "**Ready**, **[N] Satellites**" | Minimum 10 satellites |
| 5 | "Payload Check" | *Test gimbal movement* "**Working**" | Full range of motion |
| 6 | "Failsafe Settings" | "RTH at **[N] meters**" | Must clear highest terrain |
| 7 | "SD Card Check" | *Check space/recording* "**Recording**" | Verify recording active |
| 8 | "Area and Airspace" | *Conduct visual scan* "**Clear**" | 360° scan for traffic |
| 9 | "Cleared for Takeoff" | "**CLEAR**" | Final confirmation |

#### 12.8.2 Abbreviated Pre-Flight Checklist (Rapid Launch)

Use **ONLY** for urgent re-deployments (e.g., hot battery swaps) where site conditions have NOT changed.

| # | VO Callout | PIC Response |
|---|------------|--------------|
| 1 | "Air Vehicle Batteries" | "**[N]%**" |
| 2 | "Ground Control Batteries" | "**[N]%**" |
| 3 | "Area and Airspace" | *Conduct visual scan* "**Clear**" |
| 4 | "Cleared for Takeoff" | "**CLEAR**" |

### 12.9 Launch Flow

#### 12.9.1 Launch Sequence

| Step | Action | Announcement |
|------|--------|--------------|
| 1 | **Arm Motors:** Initiate motor start command | "ARMING" |
| 2 | **Takeoff:** Execute takeoff to 2-3 meters AGL | "TAKING OFF" |
| 3 | **Hover Check:** Verify stable hover - no drift, no oscillation | "HOVER STABLE" |
| 4 | **Control Response:** Test pitch forward/back, roll left/right, yaw left/right | "CONTROLS RESPONSIVE" |
| 5 | **Telemetry Verify:** Confirm battery voltage is stable under load | "TELEMETRY NORMAL" |
| 6 | **Proceed:** Begin transition to mission | "PROCEEDING TO MISSION" |

#### 12.9.2 Post-Launch Systems Check (MANDATORY)

> **Immediately following launch on EVERY flight, the PIC shall conduct an Attitude and Movements Check at a safe hover altitude (3-5 meters AGL) before proceeding:**

| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Stable Hover | Hands-off hover for 5 seconds | No drift, no oscillation |
| Pitch Response | Push forward, pull back | Smooth, proportional response |
| Roll Response | Push left, push right | Smooth, proportional response |
| Yaw Response | Rotate left, rotate right | Smooth, proportional response |
| Altitude Hold | Release throttle | Maintains altitude ±1m |
| Camera/Gimbal | Tilt up/down via wheel | Smooth movement |
| Telemetry | Check GCS display | All values normal, GPS lock maintained |

> **CRITICAL: If ANY abnormality is detected, LAND IMMEDIATELY and troubleshoot before continuing.**

### 12.10 In-Flight Operations

#### 12.10.1 PIC Continuous Duties

| Duty | Frequency | Method |
|------|-----------|--------|
| Battery Monitoring | Every 60 seconds | Verbal callout: "Battery [N]%" |
| Link Quality | Continuous | Monitor signal bars on GCS |
| GPS Status | Continuous | Verify satellite count remains >8 |
| Telemetry Scan | Every 2 minutes | Check altitude, distance, speed |
| Airspace Scan | Continuous | Visual and ADS-B monitoring |
| Weather Awareness | Continuous | Monitor for changing conditions |

#### 12.10.2 VO Continuous Duties

| Duty | Method |
|------|--------|
| Visual Line of Sight | Maintain VLOS on aircraft at all times (where required) |
| Airspace Scan | Systematic 360° scanning using Block Method |
| Traffic Detection | Listen for engine/rotor noise; watch for movement |
| Communication | Maintain open radio link with PIC |
| Traffic Calls | Immediate callout: "TRAFFIC - [direction], [type], [heading]" |
| Status Requests | Authorized to request: "Battery Check", "Link Status" |

#### 12.10.3 Crew Communication Standards

| Type | Format | Example |
|------|--------|---------|
| Position Update | "Aircraft at [location/altitude]" | "Aircraft at north boundary, 80 meters" |
| Battery Update | "Battery [N]%" | "Battery 65%" |
| Traffic Alert | "TRAFFIC - [direction]" | "TRAFFIC - Northwest, helicopter, southbound" |
| Hazard Alert | "HAZARD - [description]" | "HAZARD - Wind increasing from west" |
| Emergency | "[Emergency Type]!" | "FLY-AWAY! FLY-AWAY!" |

### 12.11 Approach & Landing Flow

#### 12.11.1 Return & Landing Sequence

| Step | Action | Announcement |
|------|--------|--------------|
| 1 | **Battery Assessment:** Verify sufficient battery for return (minimum 30%) | "BATTERY SUFFICIENT FOR RETURN" |
| 2 | **Landing Zone Check:** Confirm landing zone is clear of obstructions and personnel | "LANDING ZONE CLEAR" |
| 3 | **Approach:** Begin return to launch point | "INBOUND FOR LANDING" |
| 4 | **Position:** Arrive over landing pad at 5-10m AGL | "OVER LANDING ZONE" |
| 5 | **Descent:** Descend slowly and vertically | "DESCENDING" |
| 6 | **Touchdown:** Touch down on landing pad | "TOUCHDOWN" |
| 7 | **Disarm:** Disarm motors | "MOTORS OFF" |
| 8 | **Secure:** Announce aircraft safe | "RPAS SAFE" |
| 9 | **Power Down:** Power off aircraft FIRST, then GCS | "POWERING DOWN" |

### 12.12 Battery Swap (Hot/Cold Turnaround)

For rapid re-deployment with a fresh battery:

| Step | Role | Action |
|------|------|--------|
| 1 | PIC | Confirm aircraft is disarmed and motors are stopped |
| 2 | VO | Approach disarmed RPAS on the landing pad |
| 3 | VO | Perform rapid visual inspection of props/arms for damage |
| 4 | VO | Remove depleted battery, place in cooling area |
| 5 | VO | Install fresh battery (>90% charge), confirm click |
| 6 | VO | Move to safe observation distance |
| 7 | VO | Announce: "READY FOR PRE-FLIGHT" |
| 8 | PIC | Return to Section 12.7 (Power-Up) or Section 12.8.2 (Abbreviated Checklist) |

**Battery Handling:**
- Mark depleted batteries immediately (use colored bands or labels)
- Do not stack hot batteries
- Allow batteries to cool before recharging
- Never swap batteries with motors running

### 12.13 Recovery & Post-Flight

#### 12.13.1 Post-Flight Inspection

| Inspection Item | Method | Action if Issue Found |
|-----------------|--------|----------------------|
| Propellers | Visual and tactile - check for cracks, chips, looseness | Replace immediately |
| Arms/Frame | Visual - check for stress cracks, loose screws | Tag LOCKOUT if structural |
| Motors | Listen/feel - check for heat, grinding, unusual noise | Tag LOCKOUT |
| Gimbal/Camera | Visual - check for damage, loose mounting | Tag LOCKOUT if damaged |
| Battery | Visual - check for swelling, heat, damage | Dispose safely if damaged |
| Landing Gear | Visual - check for cracks, proper attachment | Repair before next flight |

#### 12.13.2 Equipment Teardown

| Step | Action |
|------|--------|
| 1 | Remove battery, store in fire-safe bag |
| 2 | Remove propellers (if required for transport) |
| 3 | Install gimbal guard/cover |
| 4 | Fold arms, verify locks engaged |
| 5 | Place RPAS in protective case |
| 6 | Verify SD cards are secured or removed for data transfer |

#### 12.13.3 Site Cleanup

| Step | Action |
|------|--------|
| 1 | Remove all cones, tape, and signage |
| 2 | Collect all equipment, cables, and accessories |
| 3 | Conduct sweep for any dropped items |
| 4 | Leave site in original condition |

### 12.14 Debrief & Data Management

#### 12.14.1 Team Debrief

Conduct a brief team debrief before departing the site:

| Topic | Discussion Points |
|-------|-------------------|
| Objectives | Did we meet mission objectives? |
| Safety | Any safety issues, near-misses, or concerns? |
| Equipment | Any equipment issues or damage observed? |
| Procedures | Any procedural improvements identified? |
| Lessons | What can we do better next time? |

#### 12.14.2 Data Management

| Task | Method | Timeline |
|------|--------|----------|
| Flight Log Sync | Upload flight logs to AirData | Same day |
| Imagery Transfer | Offload photos/video to mission folder | Same day |
| Incident Documentation | Complete incident report if applicable | Within 24 hours |
| Equipment Status | Update equipment status in maintenance log | Same day |

#### 12.14.3 Equipment Status Marking

| Status | Marking | Meaning |
|--------|---------|---------|
| **CLEAR** | Green tag/label | Ready for operations |
| **CAUTION** | Yellow tag/label | Minor issue, usable with awareness |
| **LOCKOUT** | Red tag + "DO NOT FLY" | Grounded until repaired and tested |

---

## 13. Emergency Contacts

### 13.1 Aviation Stakeholders

| Organization | Type | Phone |
|--------------|------|-------|
| Glacier Air | Helicopter | 604-898-9016 |
| Sea To Sky Air | Fixed Wing | 604-898-1975 |
| Black Tusk Helicopter | Helicopter | 604-898-4800 |

### 13.2 Emergency Contacts

| Contact | When | Phone |
|---------|------|-------|
| FIC Kamloops | Emergency in uncontrolled airspace | **1-866-541-4101** |
| Vancouver Intl (CYVR) | Emergency in controlled airspace direction | 604-207-7022 |
| Emergency Services | Critical situation | 911 |
| Squamish General Hospital | Closest medical facility | 38140 Behrner Drive, Squamish |

### 13.3 Aerodromes in SSAR Area

| Name | Code | Type | Radio | Phone | Location |
|------|------|------|-------|-------|----------|
| Vancouver Intl | CYVR | International | 124.6 | 604-207-7022 | South/Above SSAR |
| Vancouver Harbour | CYHC | Seaplane Base | 126.8 | 604-328-4340 | South of SSAR |
| Squamish Municipal | CYSE | Airport | 122.8 | 604-892-5217 | Squamish Municipality |
| Green Lake Whistler | CAE5 | Seaplane Base | n/a | 604-932-6615 | Whistler |

### 13.4 Emergency Fly-Away Call Script

**Call FIC Kamloops: 1-866-541-4101**

| Item | Script |
|------|--------|
| Introduction | "Hello, my name is [name]. I am an RPAS operator experiencing a fly-away situation." |
| RPAS Description | "The RPAS is [colour], [make], [model], weighing [n] grams." |
| PIC Location | "My current location is [n] NM from [aerodrome/landmark], bearing [bearing]." |
| RPAS Heading | "The RPAS is flying at [n] feet ASL, heading [heading] at [n] knots." |
| RPAS Potential | "Max flight time: [n] minutes. Estimated remaining battery: [n]%." |
| Maximum Travel | "Estimated maximum remaining travel distance: [n] NM." |

---

## 14. Document Control

### 14.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

Signatures on file. Original signed document retained per QAP-001.

### 14.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Operations Manual | Dustin Wales |
| | | | |
| | | | |

### 14.3 Document Sources

This consolidated Operations Manual incorporates content from the following source documents:

| Document ID | Document Title |
|-------------|----------------|
| SFOC-001 | RPAS Concept of Operations |
| SFOC-001 | SFOC Application |
| SFOC-003 | Site Survey Template |
| OPS-001 | Standard Scenario Procedures |
| OPS-102 | SOM Search Operations |
| OPS-104 | Environmental Operations |
| POL-001 | RPAS Operating Policy |
| POL-005 | Communications |
| POL-007 | Weather Minimums |
| POL-011 | Site Survey Flight Planning |
| PRO-103 | Advanced Procedures |

---

**END OF OPERATIONS MANUAL**

*This document is part of the SSAR RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    // PLACEHOLDER - Will add safety, people, training, forms sections
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
| Review Date | March 2027 |
| Regulatory Reference | CAR 901.219, Standard 922, JARUS SORA v2.5, ICAO Annex 19 |

---

## Table of Contents

1. [Safety Management System](#1-safety-management-system)
2. [Emergency Procedures](#2-emergency-procedures)
3. [SORA Documentation](#3-sora-documentation)
4. [Hazard Identification and Risk Assessment](#4-hazard-identification-and-risk-assessment)
5. [Detect and Avoid](#5-detect-and-avoid)
6. [Incident and Accident Reporting](#6-incident-and-accident-reporting)
7. [Quality Assurance Program](#7-quality-assurance-program)
8. [Emergency Contacts](#8-emergency-contacts)
9. [Document Control](#9-document-control)

---

## 1. Safety Management System

### 1.1 SMS Overview

Squamish Search and Rescue (SSAR) maintains a Safety Management System (SMS) for RPAS operations in accordance with CAR Part IX requirements and aligned with the four-pillar SMS framework per ICAO Annex 19.

### 1.2 Pillar 1: Safety Policy

#### 1.2.1 Safety Policy Statement

> **Squamish Search and Rescue is committed to achieving the highest level of safety in all RPAS operations. We will identify hazards, manage risks to as low as reasonably practicable, comply with all regulations, and continuously improve our safety performance. Every member has the authority and responsibility to stop any operation they believe to be unsafe.**

#### 1.2.2 Accountable Executive Commitment

I, Dustin Wales, as Accountable Executive, am accountable for the safety of SSAR RPAS operations and commit to:

- Providing adequate resources for safety
- Ensuring all operations meet regulatory requirements
- Maintaining a just culture for safety reporting
- Reviewing safety performance regularly
- Taking action on identified safety issues

#### 1.2.3 Safety Objectives

| Objective | Target | Measurement |
|-----------|--------|-------------|
| Zero mid-air conflicts | 0 events | Occurrence reports |
| No third-party injuries | 0 injuries | Incident reports |
| High reporting rate | >80% of members report annually | Report count |
| Hazard closure | 100% within 30 days | Hazard register |
| Training currency | 100% pilots current | Training records |

#### 1.2.4 The Accountable Executive (AE)

The President / Chief (or designated executive) is the Accountable Executive.

- **Responsibility:** The AE carries strict personal and financial accountability for the safety of the RPAS program
- **Authority:** The AE has the final authority to ground the fleet, approve budgets for safety equipment, and authorize significant operational changes

#### 1.2.5 Safety Manager

The RPAS Operations Manager acts as the Safety Manager, responsible for:
- Maintaining the Hazard Registry
- Facilitating the internal audit process
- Reporting safety performance trends to the AE annually

### 1.3 Pillar 2: Safety Risk Management

#### 1.3.1 Risk Matrix

| Probability / Severity | Negligible (1) | Minor (2) | Major (3) | Hazardous (4) | Catastrophic (5) |
|------------------------|----------------|-----------|-----------|---------------|------------------|
| Frequent (5) | Medium | High | High | Extreme | Extreme |
| Probable (4) | Low | Medium | High | High | Extreme |
| Remote (3) | Low | Medium | Medium | High | High |
| Improbable (2) | Low | Low | Medium | Medium | High |
| Ext. Improbable (1) | Low | Low | Low | Medium | Medium |

#### 1.3.2 Risk Acceptance Authority

| Risk Level | Authority | Requirements |
|------------|-----------|--------------|
| Low | PIC | Accept with existing controls |
| Medium | Chief Pilot | Additional controls may be needed |
| High | Accountable Executive | Must reduce before operation |
| Extreme | Not Acceptable | Do not conduct operation |

#### 1.3.3 Change Management Process

1. **IDENTIFY** change (new equipment, procedure, location)
2. **ASSESS** impacts using risk matrix
3. **DEVELOP** mitigations for identified risks
4. **APPROVE** change per risk acceptance authority
5. **IMPLEMENT** with appropriate communication
6. **MONITOR** effectiveness of change

### 1.4 Pillar 3: Safety Assurance

#### 1.4.1 Safety Performance Indicators (SPIs)

| SPI | Metric | Target | Alert | Measurement |
|-----|--------|--------|-------|-------------|
| 01 | Airprox/conflicts | 0 per year | >0 | Occurrence reports |
| 02 | Third party injuries | 0 per year | >0 | Incident reports |
| 03 | Flyaway events | 0 per year | >0 | Flight logs |
| 04 | Loss of control | <2 per year | >2 | Occurrence reports |
| 05 | Airspace infringement | 0 per year | >0 | Occurrence reports |
| 06 | Maintenance overdue | 0% | >10% | Maintenance records |
| 07 | Training currency | 100% | <90% | Training records |
| 08 | Safety reports submitted | >1 per pilot/year | <0.5 | Report database |

#### 1.4.2 Safety Performance Review

| Review Type | Frequency | Participants | Output |
|-------------|-----------|--------------|--------|
| SPI Review | Monthly | Chief Pilot | Status report |
| Safety Meeting | Quarterly | All crew | Meeting minutes |
| Management Review | Semi-annual | AE, Chief Pilot | Improvement actions |
| Annual Review | Annual | Full team | Annual safety report |

#### 1.4.3 Internal Audit Program

| Audit Area | Frequency | Auditor |
|------------|-----------|---------|
| Operations compliance | Annual | Chief Pilot |
| Maintenance records | Annual | Designated auditor |
| Training records | Annual | Chief Instructor |
| Safety reporting | Semi-annual | Safety Officer |
| SORA compliance | Annual | External if possible |

### 1.5 Pillar 4: Safety Promotion

#### 1.5.1 Safety Communication

- Safety bulletins distributed via email
- Incident lessons learned shared at meetings
- Safety alerts posted immediately when critical
- Manufacturer safety notices distributed
- Regulatory changes communicated promptly

#### 1.5.2 Just Culture Principles

- Honest mistakes and errors are not punished
- Reporting is encouraged and protected
- Negligence and willful violations are addressed
- System improvements focus on fixing problems, not blame
- Confidential reporting option available

### 1.6 Non-Punitive Reporting Policy

> **No member of SSAR will be disciplined, suspended, or reprimanded for reporting a safety occurrence, hazard, or unintentional error involving themselves or others.**

**Example:** If a pilot accidentally crashes a drone because they misjudged the wind, and they report it immediately, no disciplinary action will be taken. The focus will be on retraining, not punishment.

#### 1.6.1 Exceptions (Gross Negligence)

This policy does NOT apply to:

| Exception | Description |
|-----------|-------------|
| Criminal Activity | Wilful violation of the law |
| Substance Abuse | Operating under the influence of drugs or alcohol |
| Wilful Misconduct | Deliberate violation of safety procedures (e.g., flying over a crowd for "fun" despite training) |

#### 1.6.2 Confidentiality

The identity of any person submitting a safety report will be kept confidential to the extent permitted by law, shared only with the Safety Manager and Accountable Executive for the purpose of investigation.

### 1.7 Safety Roles and Responsibilities

| Role | Person | Safety Responsibilities |
|------|--------|------------------------|
| Accountable Executive | Dustin Wales | Overall SMS accountability, resource allocation |
| Chief Pilot | Dustin Wales | Day-to-day safety management, risk acceptance |
| Safety Officer | [Designated] | Report management, hazard tracking, audits |
| All Crew | All members | Hazard reporting, SOP compliance, safety focus |

---

## 2. Emergency Procedures

### 2.1 Purpose

This section establishes emergency response procedures for all SSAR RPAS operations, fulfilling CAR 901.23 requirements. All crew members must be familiar with these procedures and have a printed copy available at the Control Station.

### 2.2 Core Priorities

In any emergency, follow this priority sequence:

| Priority | Action | Description |
|----------|--------|-------------|
| 1 | AVIATE | Maintain aircraft control (or stabilize the crash trajectory) |
| 2 | NAVIGATE | Steer away from people and manned aircraft |
| 3 | COMMUNICATE | Inform crew and external agencies (ATC) if necessary |

### 2.3 Emergency Categories

| Category | Examples | Response Level |
|----------|----------|----------------|
| Flight Emergency | Fly-away, lost link, collision | Immediate |
| System Emergency | Battery failure, motor failure | Immediate |
| Environmental | Weather, wildlife, visibility | Situational |
| Personnel | Injury, incapacitation | Immediate |
| Airspace | Traffic conflict, infringement | Immediate |

### 2.4 System Failure Procedures

#### 2.4.1 Control Station / Ground Equipment Failure

**Symptoms:** Screen freezes, tablet battery dies, or controller signal lost.

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "Control Station Failure" |
| 2 | Do not touch control sticks (prevent erratic inputs) |
| 3 | ASSESS: Is the aircraft hovering stable? |
|   | - YES: Attempt to restart app or swap cable |
|   | - NO (Drifting): Trigger RTH button on controller hardware |
| 4 | MITIGATE: If no control within 30 seconds, prepare for Lost Link (Auto-RTH) |

#### 2.4.2 RPAS Mechanical Failure (In-Flight)

**Symptoms:** Motor noise, vibration, loss of lift, battery voltage sag.

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "Mechanical Failure. Landing Immediately." |
| 2 | Determine nearest safe landing zone (away from people) |
| 3 | If control exists, fly using ATTI mode. Land immediately - do not attempt RTH if far away |
| 4 | POST-FLIGHT: Tag equipment LOCKOUT |

#### 2.4.3 Communication Failure (Crew)

**Symptoms:** Radio failure between PIC and VO.

| Step | Action |
|------|--------|
| 1 | VO: Use visual signal "Wave Off" or "Land" |
| 2 | PIC: Immediately bring RPAS to hover |
| 3 | If comms cannot be restored, Return to Home and land |

### 2.5 GPS Failure Procedures

> **CRITICAL: GPS failure requires immediate response.**

#### 2.5.1 GPS Degradation Recognition

| Symptom |
|---------|
| Satellite count drops below 5 |
| "Weak GPS Signal" warning displayed |
| Position accuracy warning |
| Aircraft behavior erratic |
| Aircraft switches to ATTI mode automatically |
| Compass/IMU warning messages |

#### 2.5.2 GPS Failure Immediate Actions

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "GPS FAILURE" to crew |
| 2 | MAINTAIN ALTITUDE - Do not climb or descend initially |
| 3 | ASSUME MANUAL CONTROL - Switch to manual/ATTI mode |
| 4 | ORIENT - Identify aircraft position visually |
| 5 | NAVIGATE - Use visual references and compass heading |
| 6 | DESCEND - Reduce altitude to maintain VLOS |
| 7 | RETURN - Fly aircraft back toward operator |
| 8 | LAND - Land as soon as safely possible |
| 9 | DOCUMENT - Record incident per POL-008 |

#### 2.5.3 ATTI Mode Flying Techniques

| Technique |
|-----------|
| Aircraft will drift with wind - anticipate and compensate |
| Use small, smooth control inputs |
| Use visual references for position |
| Compass heading remains available |
| Altitude/barometer remains available |

#### 2.5.4 GPS Failure During BVLOS

| Consideration | Action |
|---------------|--------|
| RTH Function | May not function correctly without GPS |
| Link Maintained | Aircraft may enter ATTI hover |
| Navigation | Use heading and distance data to navigate |
| Backup Positioning | Activate any backup positioning if available |
| Visual Recovery | Descend to establish visual contact if possible |
| Recovery Not Possible | Execute controlled descent to safe area |

### 2.6 Loss of Control Procedures

#### 2.6.1 C2 Link Failure (Lost Link)

**Symptoms:** "Signal Lost" warning, grey screen, no response to inputs.

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "Lost Link" |
| 2 | WAIT: Allow Failsafe Logic (Auto-RTH) to engage (3-15 seconds) |
| 3 | REPOSITION: Move to higher ground or clear area |
| 4 | ANTENNA: Point antenna toward aircraft |
| 5 | VISUAL TRACKING: VO must maintain strict visual on aircraft to confirm RTH altitude climb |
| 6 | RESTART: Power cycle controller if needed |
| 7 | MONITOR: Watch for RTH execution |
| 8 | PREPARE: Ready landing area for RTH |
| 9 | RECOVERY: Once link restored, announce "Link Restored" and take manual control to land |

#### 2.6.2 Unintentional Loss of VLOS

**Symptoms:** Fog bank, sun glare, or terrain obstruction.

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "Visual Lost" |
| 2 | STOP: PIC stops all inputs (Hover) |
| 3 | ASSIST: VO attempts to talk pilot back to visual ("Climb 20 feet," "Yaw Left") |
| 4 | TELEMETRY: Use map/camera to orient |
| 5 | ABORT: If visual is not regained in 15 seconds, initiate RTH |

### 2.7 Fly-Away (Critical Emergency)

A fly-away is when the aircraft does not respond to any control inputs and flies away from the intended position.

#### 2.7.1 Fly-Away Recognition

- Aircraft not responding to control inputs
- Aircraft flying away from intended position
- Un-commanded climb or heading change
- Aircraft hovering in place, not responding to commands

#### 2.7.2 Fly-Away Immediate Actions

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "FLY-AWAY! FLY-AWAY!" |
| 2 | SWITCHES: Toggle Flight Modes (P-A-P) to attempt to regain logic control |
| 3 | FAILSAFE: Trigger RTH button |
| 4 | TRACKING: VO tracks aircraft heading and estimated speed |
| 5 | REPORTING: IMMEDIATELY call Flight Information Centre (FIC) if entering controlled airspace |
| 6 | DOCUMENT: Record all details for investigation |

#### 2.7.3 Emergency Fly-Away Call Script

**Call FIC Kamloops: 1-866-541-4101**

| Item | Script |
|------|--------|
| Introduction | "Hello, my name is [name]. I am an RPAS operator experiencing a fly-away situation." |
| RPAS Description | "The RPAS is [colour], [make], [model], weighing [n] grams." |
| PIC Location | "My current location is [n] NM from [aerodrome/landmark], bearing [bearing]." |
| RPAS Heading | "The RPAS is flying at [n] feet ASL, heading [heading] at [n] knots." |
| RPAS Potential | "Max flight time: [n] minutes. Estimated remaining battery: [n]%." |
| Maximum Travel | "Estimated maximum remaining travel distance: [n] NM." |

### 2.8 Emergency Landing

An emergency landing is a procedure where the RPAS is brought down safely as quickly as possible due to an unforeseen issue or potential hazard.

#### 2.8.1 Emergency Landing Procedure

| Step | Action |
|------|--------|
| 1 | **SITE SELECTION:** Quickly identify safe landing site free from people, structures, and hazards |
| 2 | **ANNOUNCE:** "Emergency Landing" to crew and team |
| 3 | **COMMUNICATE:** Inform local authorities if necessary |
| 4 | **EXECUTE:** Execute emergency landing as practiced in training |
| 5 | **SECURE:** Secure RPAS after landing and inspect for damage |
| 6 | **DOCUMENT:** Record incident per Section 6 |

#### 2.8.2 Site Selection Criteria

| Priority | Criterion |
|----------|-----------|
| 1 | Clear of all persons |
| 2 | Free from overhead obstructions (wires, branches) |
| 3 | Level, solid surface if possible |
| 4 | Away from roads, trails, waterways |
| 5 | Accessible for recovery |

> **NOTE:** In emergency conditions, a water landing may be preferable to risking injury to persons. Water (where people are not present) is recognized as a safe scuttle option.

### 2.9 Battery Emergency

#### 2.9.1 Low Battery Response

| Battery Level | Action |
|---------------|--------|
| 35% | Begin return to the landing area |
| 30% | Plan immediate landing |
| 25% | Immediate RTH activated |
| 20% | Execute landing NOW |
| 10% | Find and land safely, immediately |
| Critical | Aircraft will auto-land - clear the area |

#### 2.9.2 Battery Thermal Event

**Symptoms:** Smoke, swelling, unusual heat, burning smell.

| Step | Action |
|------|--------|
| 1 | LAND IMMEDIATELY - Choose shortest safe option |
| 2 | DO NOT approach until motors stopped |
| 3 | If fire: Use fire extinguisher, sand or dirt - **DO NOT USE WATER** |
| 4 | Evacuate area - toxic fumes possible |
| 5 | Call emergency services if uncontrolled |

### 2.10 Airspace Conflict / Traffic Conflict

#### 2.10.1 Traffic Alert Response

Upon ADS-B alert or visual sighting:

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "TRAFFIC" + direction |
| 2 | DESCEND IMMEDIATELY below 400' AGL |
| 3 | HOLD POSITION - Minimize movement |
| 4 | YIELD - Manned aircraft ALWAYS has right of way |
| 5 | RESUME only when traffic is clear |

#### 2.10.2 The DESCEND Protocol (Critical Traffic Threat - Emergency Maneuver)

> **The DESCEND Protocol is a 7-step mnemonic for immediate response to critical traffic threats. This is the PRIMARY evasive maneuver for clearing airspace for manned aviation.**

**The DESCEND Mnemonic:**

| Letter | Action | Execution |
|--------|--------|-----------|
| **D** | **DESCEND IMMEDIATELY** | Announce: "DESCEND, DESCEND, DESCEND" - Begin immediate descent |
| **E** | **EVALUATE** | Assess threat trajectory - Where is the aircraft going? |
| **S** | **SWITCH** | Switch to Manual Control if in automated mode |
| **C** | **CLEAR** | Maneuver away from the aircraft's projected flight path |
| **E** | **EXECUTE** | Execute rapid descent to lowest safe altitude (<200' AGL) |
| **N** | **NOTIFY** | Inform crew: "Clear of traffic" when safe |
| **D** | **DOCUMENT** | Record encounter details for incident report |

**Execution Without Visual Observer (PIC Only):**

| Step | Action | Communication |
|------|--------|---------------|
| 1 | PIC identifies threat visually or via ADS-B | Internal awareness |
| 2 | PIC shouts: **"DESCEND, DESCEND, DESCEND"** | Alert to self/bystanders |
| 3 | PIC switches to Manual Control (if in P-mode) | Mode switch |
| 4 | PIC maneuvers RPAS in straight downward path | Stick input: full down |
| 5 | PIC descends to lowest safe altitude (terrain aware) | Monitor altitude |
| 6 | PIC holds position until threat clears | Hover and scan |
| 7 | PIC documents encounter when safe | Post-event |

**Execution With Visual Observer:**

| Step | Role | Action | Communication |
|------|------|--------|---------------|
| 1 | VO | Identifies threat | "TRAFFIC - [direction]!" |
| 2 | VO | Assesses as critical threat | "CRITICAL THREAT! DESCEND, DESCEND, DESCEND!" |
| 3 | PIC | Immediately executes descent | "DESCENDING" |
| 4 | PIC | Descends to lowest safe altitude | *No communication - focus on execution* |
| 5 | VO | Tracks threat until clear | "Traffic passing [direction]" |
| 6 | VO | Confirms area clear | "AREA CLEAR" |
| 7 | PIC | Acknowledges and resumes or RTH | "Resuming" or "Returning to home" |

**Target Altitude:** Descend to <200' AGL when possible. Manned aircraft (including SAR helicopters) rarely operate below 200' AGL in transit. This provides the maximum vertical separation.

#### 2.10.3 Safety Constraints

| Constraint | Description | Action |
|------------|-------------|--------|
| **Terrain Awareness** | Do not crash into terrain | Descend to the lowest SAFE altitude - not the lowest POSSIBLE |
| **Divergence** | If vertical descent is unsafe or insufficient | Maneuver the RPAS downward AND away from the aircraft's projected path |
| **Obstacles** | Be aware of trees, wires, towers | Use telemetry to verify safe altitude before descent |
| **Recovery** | After threat passes | Climb only when confirmed clear, resume mission or RTH |

#### 2.10.4 Threat Level Response Matrix

| Threat Level | Definition | Response Time | Action |
|--------------|------------|---------------|--------|
| **Level 1** - Planned Approach | Aircraft is known/expected, flight path communicated | Before arrival | Ground RPAS prior to aircraft arrival |
| **Level 2** - Announced Entry | Aircraft enters area with radio communication/notice | 60+ seconds | Restrict RPAS to <400' AGL, maintain 1 km horizontal separation |
| **Level 3** - Non-Threat | Unannounced aircraft detected; trajectory poses no risk | Continuous | Continue operation with increased vigilance |
| **Level 4** - Potential Conflict | Unannounced aircraft; trajectory may intersect | 30 seconds | RTH or Hover & Hold at safe/low altitude |
| **Level 5** - Critical Threat | Unannounced aircraft; immediate collision risk | **IMMEDIATE** | **EXECUTE DESCEND PROTOCOL** |

### 2.11 CFIT (Controlled Flight Into Terrain) Prevention

For mountain operations:

| Action |
|--------|
| ALWAYS verify terrain elevation vs aircraft altitude |
| Use terrain-following if available - set excessive margins if using base maps |
| Set RTH altitude ABOVE the highest terrain in operating area |
| Monitor AGL vs MSL carefully |
| Immediate climb if terrain closure detected |

### 2.12 Inadvertent IMC Entry

If aircraft enters cloud, fog, or reduced visibility conditions:

| Step | Action |
|------|--------|
| 1 | MAINTAIN HEADING - Do not turn |
| 2 | REVERSE - Come immediately backwards if safe |
| 3 | CLIMB - If terrain permits, climb above cloud |
| 4 | DESCEND - If below minimums, controlled descent |
| 5 | USE INSTRUMENTS - Rely on telemetry only |
| 6 | ABORT - Use RTH function |
| 7 | LAND - Land as soon as visual is regained |

### 2.13 Flight Termination and Crash

#### 2.13.1 Flight Termination (Kill Switch)

Use only when crash is imminent and uncontrolled flight poses greater risk.

| Step | Action |
|------|--------|
| 1 | ASSESS: Will the crash landing injure someone? |
| 2 | EXECUTE: Perform flight termination command (CSC or Stop Motors) |
| 3 | WARN: Shout "LOOK OUT!" or "HEADS UP!" |

#### 2.13.2 Crash Event / Post-Impact

| Step | Action |
|------|--------|
| 1 | SAFETY: Do not rush to the crash site. Assess for fire risk (LiPo battery puncture) |
| 2 | FIRE: Bring fire extinguisher if smoke/fire observed |
| 3 | MEDICAL: If a person is struck, render First Aid immediately and call 911 |
| 4 | PRESERVATION: If crash involved injury or manned aircraft, DO NOT MOVE wreckage (secure scene for TSB investigation) |
| 5 | REPORTING: Refer to Section 6 (Incident/Accident Reporting) |

### 2.14 Time-Critical SAR Operations

When SSAR receives an emergency SAR activation that does not permit standard 24-hour ATC notification:

| Condition | Action |
|-----------|--------|
| **ASSESS** | Can 24-hour ATC notification be completed? |
| **If NO (immediate deployment):** | |
| 1 | ANNOUNCE: "Time-critical operation. STSC-004 parameters apply." |
| 2 | RESTRICT: Maximum altitude 400' AGL - non-negotiable |
| 3 | BRIEF: Inform crew of terrain-following requirements |
| 4 | CONFIRM: All flight planning reflects altitude constraint |
| 5 | PROCEED: Operations may commence without ATC notification (Class G, sub-400') |
| **If YES (24-hour notice achievable):** | |
|   | PROCEED with standard scenario selection per OPS-001 |
|   | COORDINATE ATC notification if STSC-003 selected |

**Note:** Thermal search effectiveness is maintained at sub-400' altitudes. The 80-120 meter optimal detection altitude falls within STSC-004 limits.

### 2.15 Post-Emergency Actions

After any emergency or abnormal event:

| Step | Action |
|------|--------|
| 1 | Secure aircraft and scene |
| 2 | Attend to any injuries |
| 3 | Preserve evidence (flight logs, video, controller data) |
| 4 | Complete occurrence report within 24 hours |
| 5 | Notify Accountable Executive |
| 6 | TSB notification if required (injury, manned aircraft involvement, significant damage) |
| 7 | Equipment tagged LOCKOUT until investigation complete |

---

## 3. SORA Documentation

### 3.1 Introduction

This section provides the complete Specific Operations Risk Assessment (SORA) required for SSAR RPAS operations under Standard Scenarios STSC-003 (High Altitude VLOS) and STSC-004 (Low-Risk BVLOS) per JARUS SORA v2.5 framework and Transport Canada Standard 922.

### 3.2 Document Scope

- **STSC-003:** VLOS operations above 400' AGL up to 1000' AGL
- **STSC-004:** BVLOS operations in sparsely populated areas
- **Aircraft:** DJI M30T and DJI Matrice 4TD ONLY

**Altitude Rationale:** Normal flight operations are conducted at 400' AGL using terrain-following profiles. The 1000' AGL maximum is established to accommodate Return-to-Home (RTH) emergency scenarios in SSAR's mountainous operating environment, where terrain-following cannot be maintained and the RPAS must climb to safely clear obstacles during autonomous return.

### 3.3 SORA Process Overview

| Step | Description |
|------|-------------|
| 1 | ConOps Description |
| 2 | Intrinsic GRC Determination |
| 3 | GRC Mitigations (M1/M2) |
| 4 | Final GRC |
| 5 | Initial ARC Determination |
| 6 | Strategic Mitigations & TMPR |
| 7 | Adjacent Area/Airspace Assessment |
| 8 | Comprehensive Safety Portfolio |
| 9 | Final Risk Statement |
| 10 | Submission for Authorization |

### 3.4 Concept of Operations

#### 3.4.1 Operator Information

| Parameter | Value |
|-----------|-------|
| Operator Name | Squamish Search and Rescue (SSAR) |
| RPOC Number | [To be assigned] |
| Accountable Executive | Dustin Wales |
| Chief Pilot | Dustin Wales |
| Contact | rpas@squamishsar.ca |

#### 3.4.2 Operation Type

| Parameter | STSC-003 | STSC-004 |
|-----------|----------|----------|
| Operation Type | High Altitude VLOS | Low-Risk BVLOS |
| Visibility | VLOS maintained | BVLOS permitted |
| Max Altitude | 1000' AGL | 400' AGL |
| Population Density | Any (per ATC) | <25 people/km² |
| Purpose | SAR Support | SAR Support |

#### 3.4.3 Aircraft

| Parameter | DJI M30T | DJI Matrice 4TD |
|-----------|----------|-----------------|
| MTOM | 3.77 kg | 2.3 kg |
| Characteristic Dimension | 0.67 m (diagonal) | 0.62 m (diagonal) |
| Max Speed | 23 m/s (82 km/h) | 21 m/s (76 km/h) |
| Max Endurance | 41 minutes | 45 minutes |
| C2 Link Range | 15 km | 20 km |
| C2 Technology | OcuSync 3 Enterprise | O4 Enterprise |
| DAA Capability | ADS-B In (AirSense) | ADS-B In (AirSense) |

#### 3.4.4 Operating Area

| Parameter | Value |
|-----------|-------|
| Geographic Bounds | N 49°30' to N 50°00', W 122°45' to W 123°30' |
| Terrain | Mountainous, heavily forested, coastal inlets |
| Elevation Range | Sea level to 2,000m MSL |
| Population Density | 3.1 people/km² (census avg excl. municipalities) |
| Airspace | Class G (Uncontrolled) with Class E above 700' AGL in some areas |

#### 3.4.5 Operational Volume Definition

| Component | STSC-003 | STSC-004 |
|-----------|----------|----------|
| Flight Geography Lateral | Per mission plan | Per mission plan |
| Flight Geography Vertical | Up to 1000' AGL | Up to 400' AGL |
| Contingency Volume Lateral | 50m buffer | 50m buffer |
| Contingency Volume Vertical | 100' above/below | 50' above/below |
| Ground Risk Buffer | 30m (1:1 glide) | 50m |

### 3.5 Ground Risk Assessment

#### 3.5.1 Intrinsic GRC Determination

**STSC-004 (BVLOS):**

| Factor | Assessment | Value |
|--------|------------|-------|
| Max UA Dimension | <3m | Small category |
| Operating Scenario | BVLOS over sparsely populated | Row 3 |
| Population Density | <25 people/km² | Confirmed |
| Intrinsic GRC | Per SORA Table 3 | **GRC 3** |

**STSC-003 (High Altitude VLOS):**

| Factor | Assessment | Value |
|--------|------------|-------|
| Max UA Dimension | <3m | Small category |
| Operating Scenario | VLOS in controlled ground area | Row 2 |
| Intrinsic GRC | Per SORA Table 3 | **GRC 2** |

#### 3.5.2 M1 Mitigation - Controlled Ground Area

| Criterion | SORA Requirement | SSAR Implementation | Evidence |
|-----------|------------------|---------------------|----------|
| Control Method | People excluded from area | SAR perimeter established | SOP PRO-103 |
| Coordination | Ground team aware | Briefed at SAR task | Checklist POL-002 |
| Communication | Method to notify ground team | Radio comms required | POL-005 |
| Verification | Confirmed before flight | PIC verification | PRO-101 checklist |
| Abort Criteria | Clear NO-GO conditions | Any unauthorized entry = abort | ERP-001 |

> **M1 Robustness Level: MEDIUM - M1 Reduction Applied: -1 to GRC**

#### 3.5.3 M2 Mitigation - Effects of Ground Impact

M2 is NOT APPLIED for the following documented reasons:
- Aircraft not equipped with parachute recovery systems
- Standard construction does not meet frangibility requirements
- Final GRC of 2 (after M1) already achieves SAIL II target
- Operating area has verified <25 people/km² reducing exposure

> **M2 Reduction Applied: 0**

#### 3.5.4 Final GRC Determination

| Scenario | Intrinsic GRC | M1 | M2 | Final GRC |
|----------|---------------|----|----|-----------|
| STSC-003 (High Alt VLOS) | 2 | -1 | 0 | **GRC 1** |
| STSC-004 (BVLOS) | 3 | -1 | 0 | **GRC 2** |

### 3.6 Air Risk Assessment

#### 3.6.1 Initial ARC Determination

**STSC-004 (BVLOS):**

| Factor | Assessment |
|--------|------------|
| Airspace Classification | Class G (Uncontrolled) |
| Altitude | Below 400' AGL |
| Proximity to Airports | >5 NM from aerodromes |
| Traffic Density | Very Low (wilderness area) |
| **Initial ARC** | **ARC-b** |

**STSC-003 (High Altitude):**

| Factor | Assessment |
|--------|------------|
| Airspace Classification | Class G transitioning to E above 700' AGL |
| Altitude | Up to 1000' AGL |
| Proximity to Airports | Requires ATC coordination |
| Traffic Density | Low-Moderate (potential VFR traffic) |
| **Initial ARC** | **ARC-c** |

#### 3.6.2 Strategic Mitigations & TMPR

| Mitigation | Description | Implementation |
|------------|-------------|----------------|
| Airspace Avoidance | Stay >2 NM from controlled airspace boundaries | NAV Drone planning tool |
| Altitude Restriction | STSC-004: Max 400' AGL | Controller limit set |
| Time Restriction | Avoid peak VFR traffic (10:00-16:00 clear days) | Mission planning |
| ATC Coordination | STSC-003: 24hr prior notification | OPS-001 procedure |
| Electronic Conspicuity | ADS-B In awareness | AirSense enabled |

#### 3.6.3 SAIL Determination

| Scenario | Final GRC | Final ARC | SAIL |
|----------|-----------|-----------|------|
| STSC-003 (High Alt) | GRC 1 | ARC-c | **SAIL II** |
| STSC-004 (BVLOS) | GRC 2 | ARC-b | **SAIL II** |

### 3.7 Adjacent Area/Airspace Assessment

#### 3.7.1 Adjacent Airspace

| Adjacent Area | Distance | Mitigation |
|---------------|----------|------------|
| CYSE (Squamish) | ~3 NM | Coordinate if within 5 NM, avoid traffic pattern |
| CYVR (Vancouver) | ~35 NM | Class C boundary well clear |
| Helicopter Routes | Variable | Monitor 126.7, yield to all manned aircraft |
| Float Plane Areas | Various inlets | Visual scan, avoid approach paths |

#### 3.7.2 Adjacent Ground Areas

| Area | Classification | Risk | Buffer |
|------|----------------|------|--------|
| Squamish Municipality | Populated | Higher | No operations over urban |
| Highway 99 | Linear infrastructure | Moderate | 100m minimum lateral |
| BC Rail Corridor | Linear infrastructure | Low | 50m minimum lateral |
| Wilderness Areas | Sparsely populated | Low | Standard GRB applies |

### 3.8 OSO Compliance Summary

| Category | OSOs Required | OSOs Achieved | Status |
|----------|---------------|---------------|--------|
| UAS Technical | 5 (01-05) | 5 | COMPLIANT |
| External Systems | 7 (06-08, 10-13) | 7 | COMPLIANT |
| Human Error | 4 (09, 14, 19, 21) | 3 + 1 pending | PENDING TC |
| Adverse Conditions | 2 (23, 24) | 2 | COMPLIANT |
| **TOTAL** | 18 | 17 + 1 pending | READY FOR SUBMISSION |

### 3.9 Final Risk Statement

#### 3.9.1 Residual Risk Assessment

| Risk Category | Initial | After Mitigation | Residual |
|---------------|---------|------------------|----------|
| Ground Collision - Third Party | Moderate | Low (M1 controlled area) | Acceptable |
| Ground Collision - Property | Low | Very Low | Acceptable |
| Mid-Air Collision | Low | Very Low (DAA + procedures) | Acceptable |
| Airspace Infringement | Moderate | Low (ATC coordination) | Acceptable |

#### 3.9.2 Risk Acceptance Statement

> Based on the comprehensive SORA analysis documented herein, the Accountable Executive accepts that the residual risk of SSAR RPAS operations under STSC-003 and STSC-004 is **AS LOW AS REASONABLY PRACTICABLE (ALARP)** and **ACCEPTABLE** within the risk tolerance for Search and Rescue support operations.

#### 3.9.3 Conditions for Risk Acceptance

- Strict adherence to operational procedures in OPS-001
- All flights conducted within Standard Scenario conditions
- Only approved aircraft (M30T, M4TD) used
- Maintenance conducted per MCM-001
- All crew qualified per TRN-301
- SMS actively monitored per SMS-001

### 3.10 STSC-003 Specific Assessment

| Parameter | STSC-003 Requirement | SSAR Compliance |
|-----------|---------------------|-----------------|
| Altitude | Above 400' AGL up to 1000' AGL | Controller limited |
| Visibility | VLOS maintained | Enhanced VOs for altitude |
| ATC Coordination | Required per Standard 922 | OPS-001 Section 3 |
| Airspace | May include controlled | Coordination procedure |
| DAA | See and avoid maintained | VHF + ADS-B In + visual |

**Additional Mitigations for High Altitude:**
- Enhanced Visual Observers positioned for altitude coverage
- VHF radio monitoring of appropriate frequencies
- Prior coordination with ATC (Vancouver Centre or Kamloops FIC)
- Real-time altitude monitoring via telemetry
- Immediate descent capability on traffic alert

---

## 4. Hazard Identification and Risk Assessment

### 4.1 Purpose

This section establishes the hazard identification and risk assessment procedures for SSAR RPAS operations, aligned with SMS-001 Pillar 2 and JARUS SORA methodology.

### 4.2 Risk Assessment Methodology

#### 4.2.1 SORA Framework Integration

SSAR uses the JARUS SORA framework for systematic risk assessment:
- **Ground Risk Class (GRC):** Assessment of risk to persons on ground
- **Air Risk Class (ARC):** Assessment of mid-air collision risk
- **SAIL:** Combined Specific Assurance and Integrity Level

#### 4.2.2 Probability Definitions

| Level | Descriptor | Definition | Frequency |
|-------|------------|------------|-----------|
| 5 | Frequent | Likely to occur many times | >1 per 100 flights |
| 4 | Probable | Likely to occur sometimes | 1 per 100-1000 flights |
| 3 | Remote | Unlikely but possible | 1 per 1000-10,000 flights |
| 2 | Improbable | Very unlikely | 1 per 10,000-100,000 flights |
| 1 | Extremely Improbable | Almost inconceivable | <1 per 100,000 flights |

#### 4.2.3 Severity Definitions

| Level | Descriptor | People | Equipment | Operations |
|-------|------------|--------|-----------|------------|
| 5 | Catastrophic | Multiple fatalities | Aircraft destroyed | Ops terminated |
| 4 | Hazardous | Serious injury/fatality | Major damage | Major disruption |
| 3 | Major | Injury requiring medical | Substantial damage | Significant impact |
| 2 | Minor | Minor injury | Minor damage | Some impact |
| 1 | Negligible | No injury | Negligible damage | Little impact |

### 4.3 SSAR RPAS Hazard Register

#### 4.3.1 Technical Hazards

| ID | Hazard | Controls | P | S | Initial | Resid. | Notes |
|----|--------|----------|---|---|---------|--------|-------|
| T01 | Fly-away | RTH failsafe, geofence, pilot intervention | 2 | 4 | Medium | Low | GPS/IMU or C2 loss |
| T02 | Battery failure | Pre-flight checks, battery management, fire bag | 2 | 4 | Medium | Low | Cell damage, thermal event |
| T03 | Propulsion failure | Redundant motors, pre-flight inspection | 2 | 3 | Medium | Low | Motor/ESC failure |
| T04 | GPS failure | ATTI mode training, RTH procedure | 3 | 3 | Medium | Low | Signal loss, interference |
| T05 | C2 link loss | Link loss procedure, RTH activation | 3 | 3 | Medium | Low | Range exceeded |
| T06 | Sensor failure | Pre-flight checks, mission abort if critical | 3 | 2 | Medium | Low | Camera/gimbal malfunction |
| T07 | Firmware error | Firmware currency, manufacturer updates | 1 | 4 | Medium | Low | Software bug |

#### 4.3.2 Operational Hazards

| ID | Hazard | Controls | P | S | Initial | Resid. | Notes |
|----|--------|----------|---|---|---------|--------|-------|
| O01 | Mid-air collision | ADS-B In, VOs, see-and-avoid, ATC coord | 2 | 5 | High | Medium | Traffic conflict |
| O02 | CFIT | Terrain awareness, altitude verification | 2 | 3 | Medium | Low | Poor SA |
| O03 | Lost link at range | Range planning, link monitoring | 3 | 2 | Medium | Low | C2 exceeded |
| O04 | Airspace infringement | Geofencing, altitude limits, training | 2 | 3 | Medium | Low | Planning error |
| O05 | Third party injury | M1 controlled area, population avoidance | 2 | 5 | High | Medium | Ground impact |
| O06 | Property damage | Site survey, controlled area | 2 | 2 | Low | Low | Crash/collision |

#### 4.3.3 Environmental Hazards

| ID | Hazard | Controls | P | S | Initial | Resid. | Notes |
|----|--------|----------|---|---|---------|--------|-------|
| E01 | Wind exceedance | Weather monitoring, wind limits | 3 | 3 | Medium | Low | Weather change |
| E02 | Precipitation | IP rating limits, weather briefing | 3 | 2 | Medium | Low | Rain/snow |
| E03 | Icing | Temperature limits, icing avoidance | 2 | 3 | Medium | Low | Cold/moisture |
| E04 | Visibility loss | Visibility minimums, abort criteria | 3 | 3 | Medium | Low | Fog, smoke, dust |
| E05 | Wildlife strike | Wildlife awareness, evasive action | 2 | 3 | Medium | Low | Birds, eagles |
| E06 | EMI interference | Site survey, EMI avoidance | 2 | 3 | Medium | Low | Power lines, transmitters |

#### 4.3.4 Human Factors Hazards

| ID | Hazard | Controls | P | S | Initial | Resid. | Notes |
|----|--------|----------|---|---|---------|--------|-------|
| H01 | Pilot incapacitation | Fitness for duty, crew pairing | 1 | 4 | Medium | Low | Medical event |
| H02 | Fatigue | Duty limits, rest requirements | 3 | 2 | Medium | Low | Extended ops |
| H03 | Distraction | CRM, task focus | 3 | 3 | Medium | Low | SAR scene, comms |
| H04 | Inadequate training | Training program, recurrency | 2 | 3 | Medium | Low | Skills gap |
| H05 | Complacency | SOP compliance, verification | 3 | 2 | Medium | Low | Routine ops |

### 4.4 Risk Treatment

#### 4.4.1 Risk Treatment Options

| Risk Level | Treatment | Authority |
|------------|-----------|-----------|
| Extreme | Eliminate or avoid - operation not permitted | Accountable Executive |
| High | Reduce to Medium or lower before operation | Chief Pilot |
| Medium | Implement additional controls, monitor | PIC |
| Low | Accept, maintain existing controls | PIC |

#### 4.4.2 Hierarchy of Controls

1. **Elimination:** Remove the hazard entirely
2. **Substitution:** Replace with less hazardous alternative
3. **Engineering:** Physical safeguards (geofencing, failsafes)
4. **Administrative:** Procedures, training, SOPs
5. **PPE:** Personal protective measures (last resort)

### 4.5 Population Density Analysis

| Area | Population | Area (km²) | Density | Classification |
|------|------------|------------|---------|----------------|
| Squamish Municipality | 23,000 | 104 | 221/km² | Populated - Excluded |
| Whistler Municipality | 13,000 | 161 | 81/km² | Populated - Excluded |
| Squamish River Watershed | <500 | 1,200 | <0.5/km² | Sparsely Populated - Approved |
| Sea-to-Sky Backcountry | <200 | 800 | <0.25/km² | Sparsely Populated - Approved |
| Coastal Inlets | <100 | 400 | <0.25/km² | Sparsely Populated - Approved |

*Data source: Statistics Canada Census 2021, BC Stats, local knowledge.*

### 4.6 Reactive Risk Management (Incident-Based)

All incidents reported via Section 6 (Incident Reporting) are analyzed to determine root cause and implement corrective actions.

#### 4.6.1 Root Cause Analysis Process

| Step | Action | Responsible | Timeline |
|------|--------|-------------|----------|
| 1 | **RECEIVE** incident report via Section 6 procedures | Safety Manager | Upon receipt |
| 2 | **CLASSIFY** incident severity using Section 4.2.3 definitions | Safety Manager | Within 24 hours |
| 3 | **INVESTIGATE** using 5-Why methodology or Fishbone analysis | Safety Manager + PIC | Within 7 days |
| 4 | **DETERMINE** root cause category (see below) | Safety Manager | Within 7 days |
| 5 | **ASSIGN** corrective action with timeline and owner | Safety Manager | Within 7 days |
| 6 | **IMPLEMENT** corrective action | Action Owner | Per assigned timeline |
| 7 | **VERIFY** effectiveness of corrective action | Safety Manager | 30 days post-implementation |
| 8 | **CLOSE** incident with documented resolution | Accountable Executive | Upon verification |

#### 4.6.2 Root Cause Categories

| Category | Examples | Typical Corrective Actions |
|----------|----------|---------------------------|
| Lack of Training | Pilot unfamiliar with procedure, skill gap | Additional training, curriculum update |
| Equipment Failure | Mechanical defect, battery failure, sensor malfunction | Maintenance procedure update, equipment replacement |
| Procedural Gap | SOP unclear, procedure missing, checklist incomplete | SOP revision, new procedure development |
| Human Factors | Fatigue, distraction, complacency, communication failure | CRM training, duty limit enforcement, briefing improvements |
| Environmental | Weather exceeded limits, unexpected conditions | Weather assessment procedure update, limit revision |
| Design Deficiency | Aircraft limitation, software bug | Manufacturer notification, operational limitation |

### 4.7 Proactive Risk Management (The Hazard Registry)

SSAR maintains a Master Hazard Registry to proactively identify and manage hazards before they cause incidents.

#### 4.7.1 Hazard Registry Structure

The Master Hazard Registry (maintained in Excel/Database) contains:

| Field | Description | Example |
|-------|-------------|---------|
| Hazard ID | Unique identifier | T01, O03, E05 |
| Identified Hazard | Clear description of the hazard | "Cold Weather Battery Failure" |
| Source | How hazard was identified | Incident, inspection, training, manufacturer notice |
| Date Identified | When hazard was entered | 2026-03-01 |
| Category | Technical, Operational, Environmental, Human Factors | Technical |
| Likelihood | Probability rating (1-5) | 3 |
| Severity | Severity rating (1-5) | 4 |
| Initial Risk | Pre-mitigation risk level | High |
| Mitigation | Control measures implemented | "Battery warmers required <5°C, pre-flight temp check" |
| Residual Risk | Post-mitigation risk level | Medium |
| Status | Open, In Progress, Closed, Monitoring | Monitoring |
| Owner | Person responsible for hazard management | Chief Pilot |
| Review Date | Next scheduled review | 2027-03-01 |

#### 4.7.2 Hazard Identification Sources

Hazards are identified through multiple channels:

| Source | Mechanism | Frequency |
|--------|-----------|-----------|
| Incident Reports | Reactive - post-event | Continuous |
| Safety Observations | Crew safety reports | Continuous |
| Training Events | Observed during training | Per session |
| Inspections | Pre/post-flight, maintenance | Per flight/interval |
| Manufacturer Notices | DJI safety bulletins, firmware notes | As issued |
| Regulatory Updates | Transport Canada, JARUS | As published |
| Industry Events | Other operators, BCSARA network | As learned |
| Operational Changes | New equipment, procedures, areas | Per change |

#### 4.7.3 Hazard Registry Workflow

**IDENTIFY → ASSESS → MITIGATE → DOCUMENT → MONITOR → REVIEW**

**Step 1 - IDENTIFY:** Any crew member may submit a hazard identification via the Safety Report form or direct communication to Safety Manager.

**Step 2 - ASSESS:** Safety Manager assesses likelihood and severity using Section 4.2.2 and 4.2.3 definitions, calculates initial risk level using Section 1.3.1 Risk Matrix.

**Step 3 - MITIGATE:** Develop control measures using Hierarchy of Controls (Section 4.4.2). For High/Extreme risks, obtain AE approval before proceeding.

**Step 4 - DOCUMENT:** Enter hazard into Master Registry with all required fields. Update relevant SOPs, checklists, or training materials.

**Step 5 - MONITOR:** Track effectiveness of controls through SPIs (Section 1.4.1), incident reports, and crew feedback.

**Step 6 - REVIEW:** Annual review of all hazards, or immediate review following any related incident.

### 4.8 Change Management Process

Before any significant change to RPAS operations, a Change Risk Assessment must be conducted to identify and mitigate new risks introduced by the change.

#### 4.8.1 Change Triggers

Change management is mandatory when:

| Trigger Category | Examples |
|------------------|----------|
| **New Equipment** | New aircraft type, new payload, new controller, new software |
| **New Operations** | BVLOS expansion, night operations, new geographic area |
| **New Regulations** | Transport Canada updates, SFOC changes, airspace changes |
| **New Personnel** | New role responsibilities, organizational changes |
| **Modified Procedures** | SOP revisions, checklist changes, training updates |
| **Infrastructure Changes** | New charging equipment, storage facilities, transport vehicles |

#### 4.8.2 Change Risk Assessment Process

| Step | Action | Responsible | Documentation |
|------|--------|-------------|---------------|
| 1 | **IDENTIFY** the change and its scope | Initiator | Change Request Form |
| 2 | **ASSESS** potential impacts on current operations | Operations Manager | Impact Assessment |
| 3 | **IDENTIFY** new hazards introduced by the change | Safety Manager | Hazard Identification |
| 4 | **EVALUATE** risk using Section 4.2 methodology | Safety Manager | Risk Assessment |
| 5 | **DEVELOP** mitigations for identified risks | Operations Manager | Mitigation Plan |
| 6 | **APPROVE** change per risk acceptance authority (Section 1.3.2) | Per risk level | Approval Record |
| 7 | **IMPLEMENT** change with appropriate training/communication | Operations Manager | Implementation Record |
| 8 | **MONITOR** effectiveness post-implementation | Safety Manager | Monitoring Report |
| 9 | **UPDATE** Hazard Registry with any new hazards | Safety Manager | Registry Update |

#### 4.8.3 Change Approval Authority

| Risk Level Introduced | Approval Authority | Additional Requirements |
|----------------------|-------------------|------------------------|
| Low | Chief Pilot | Document decision |
| Medium | Chief Pilot + Safety Manager | Risk assessment documented |
| High | Accountable Executive | Full change package, board notification if required |
| Extreme | Not Approved | Change not permitted without significant redesign |

### 4.9 Hazard Register Maintenance

- **Review frequency:** Annual or after any incident
- **Update triggers:** New operations, equipment changes, incidents
- **Responsible:** Chief Pilot with SMS Manager oversight
- **Approval:** Accountable Executive for new High/Extreme risks
- **Retention:** Hazard Registry records retained for minimum 5 years
- **Audit:** Internal audit of Hazard Registry annually per Section 1.4.3

---

## 5. Detect and Avoid

### 5.1 Purpose

To establish the procedures for collision avoidance and separation planning. This policy ensures compliance with Canadian Aviation Regulations (CARs) 901.17 and 901.18, ensuring that SSAR RPAS operations do not create a collision hazard with manned aircraft, other RPAS, or ground obstacles.

### 5.2 Right of Way and General Separation

- **Yielding:** In accordance with CAR 901.17, the RPAS pilot shall give way to all power-driven heavier-than-air aircraft, airships, gliders, and balloons
- **Proximity:** No pilot shall operate an RPAS at a distance that creates a risk of collision with another aircraft (CAR 901.18)
- **Operational Priority:** If a manned aircraft is detected entering the operational volume, the RPAS operation is secondary - the RPAS must yield immediately

### 5.3 Detection Methods

Crew members must employ a multi-layered approach to detecting hazards:

| Method | Description |
|--------|-------------|
| Visual Scanning | Continuous scanning of the airspace from takeoff to landing. Use the "Block Method" (systematic sector scanning) to identify threats. |
| Audible Scanning | Remain alert to auditory cues (engine noise/rotor slap) which often precede visual contact. |
| Radio Monitoring | A crew member holding a valid ROC-A shall monitor the appropriate local frequency (e.g., 126.7 MHz) to build a mental picture of local traffic. |
| Electronic Aids | Utilize ADS-B In to assist in detection. Electronic aids are supplemental and do not replace visual vigilance. |

### 5.4 Traffic Conflict Management

SSAR categorizes airspace conflicts into tiers. Crew members must execute the following actions based on the threat level:

| Level | Definition | Mandatory Action |
|-------|------------|------------------|
| 1 | Planned Approach - Aircraft is known/expected and flight path is communicated | Ground the RPAS prior to arrival |
| 2 | Announced Entry - Aircraft enters area with radio communication/notice | Restrict RPAS to <400' AGL and maintain 1 km horizontal separation |
| 3 | Non-Threat - Unannounced aircraft detected; trajectory poses no risk | Continue operation; increase vigilance |
| 4 | Potential Conflict - Unannounced aircraft; trajectory may intersect | Return to Home (RTH) or Hover & Hold at safe altitude |
| 5 | Critical Threat - Unannounced aircraft; immediate collision risk | **EXECUTE DESCEND PROTOCOL IMMEDIATELY** |

### 5.5 Simultaneous Operations (SIMOPS)

When multiple SSAR RPAS are operating in the same airspace:

- **Briefing:** Pilots must coordinate prior to takeoff
- **Altitude Stratification:** e.g., Drone A at 40m, Drone B at 80m
- **Geographic Separation:** e.g., Drone A works North of the river, Drone B works South
- **Communication:** Pilots must maintain constant verbal communication regarding position and battery status
- **Staggered Logistics:** Takeoffs and landings should be staggered; emergency landings (low battery) take priority

### 5.6 Ground and Obstacle Avoidance

- **Site Survey:** A physical site survey must be conducted to identify wires, trees, and towers
- **Clearance:** Takeoff and Landing Zones (TO/ALZ) must be kept clear of non-essential personnel and vehicles
- **Geofencing:** Where possible, geofences should be set to prevent the RPAS from entering restricted airspace or high-risk ground areas

---

## 6. Incident and Accident Reporting

### 6.1 Purpose

To establish the protocols for documenting, investigating, and reporting RPAS occurrences. This policy ensures SSAR complies with Canadian Aviation Regulations (CARs) 901.49 and Transportation Safety Board (TSB) requirements, while fostering a "Just Culture" focused on safety improvement rather than blame.

### 6.2 Immediate Cessation of Operations

In accordance with CAR 901.49(1), the Pilot in Command (PIC) must immediately cease all operations if any of the following occur:

| Trigger | Description |
|---------|-------------|
| Injury | Any injury to a person requiring medical attention |
| Contact | Unintended contact between the RPAS and any person |
| Damage | Unanticipated damage to the airframe, control station, payload, or C2 links that adversely affects flight characteristics |
| Excursion | The RPAS breaches its horizontal or vertical safety boundaries (geofence breach) |
| Collision | Any collision with, or risk of collision with, another aircraft |
| Fly-Away | The RPAS becomes uncontrollable or goes missing |
| Police/CADORS | Any incident requiring a police report or resulting in a CADORS entry |

### 6.3 Reporting Requirements

#### 6.3.1 Mandatory Reporting (Immediate)

> **The following incidents MUST be reported to Transport Canada:**

- Any injury to persons
- Any damage to property
- Collision or near-collision with manned aircraft
- Flyaway or loss of control
- Operations in prohibited airspace

#### 6.3.2 Internal Reporting (Within 24 Hours)

Report to Operations Manager:
- Equipment malfunctions
- Near-miss incidents
- Abnormal occurrences
- Airspace conflicts
- Any safety concerns

### 6.4 Reporting Matrix (External Agencies)

| Occurrence Type | Agency to Notify | Timeline | Contact |
|-----------------|------------------|----------|---------|
| Collision with Manned Aircraft | TSB & Transport Canada | Immediate | TSB: 1-819-994-3741 |
| Serious Injury (Person) | TSB | Immediate | TSB: 1-819-994-3741 |
| Accident Involving RPAS >25kg | TSB | Immediate | TSB: 1-819-994-3741 |
| Fly-Away into Controlled Airspace | NAV CANADA (ATC) | Immediate | Local ATC / FIR Shift Manager |
| SFOC Violation / Incident | Transport Canada | As per SFOC | Via Drone Management Portal or SFOC form |
| Minor Damage / Internal Error | SSAR Internal Only | Within 24 hours | Internal Log |

### 6.5 Incident Report Form

#### SSAR RPAS INCIDENT REPORT

**Section 1 - Basic Information**

| Field | Information |
|-------|-------------|
| Report Date: | |
| Incident Date/Time: | |
| Location: | |
| Aircraft: | |
| Pilot in Command: | |
| Other Crew: | |
| Operation Type: | [ ] Training  [ ] SAR  [ ] Exercise  [ ] Other |
| Weather Conditions: | |
| Standard Scenario: | [ ] STSC-003  [ ] STSC-004  [ ] N/A |
| Incident Category: | [ ] Accident  [ ] Serious Incident  [ ] Occurrence |
| Injuries: | [ ] Yes  [ ] No  If yes, describe: |
| Property Damage: | [ ] Yes  [ ] No  If yes, describe: |

**Section 2 - Incident Description**

(Describe what happened, actions taken, outcome)

**Section 3 - Contributing Factors**

[ ] Human factors  [ ] Equipment  [ ] Environmental  [ ] Procedural  [ ] Other

**Section 4 - Immediate Actions Taken**

| Field | Information |
|-------|-------------|
| Reported By: | |
| Signature: | |
| Date: | |

### 6.6 Reporting Workflow

| Step | Action |
|------|--------|
| Step 1 | **Immediate Response:** Ensure safety of all personnel, secure scene and equipment, provide first aid if required, contact emergency services if needed |
| Step 2 | **Initial Notification (Within 1 hour):** Notify Operations Manager by phone. If serious, notify Accountable Executive |
| Step 3 | **Documentation (Within 24 hours):** Complete Incident Report Form, gather photos/video/logs, identify witnesses |
| Step 4 | **Submission:** Submit form to Operations Manager. Transport Canada submission if required |
| Step 5 | **Follow-up:** Participate in investigation, implement corrective actions |

### 6.7 Internal Investigation and Analysis

- **Requirement:** Before resuming operations with the involved equipment or crew, the PIC must conduct an analysis to determine the root cause (CAR 901.49(1)(b))
- **Corrective Action:** Specific measures must be implemented to prevent recurrence
- **Log Entry:** The incident must be logged in the SSAR records (AirData or Physical Log)

### 6.8 Record Keeping

- **Duration:** In compliance with CAR 901.49(2), records of the incident analysis and corrective actions must be retained for a minimum of 12 months from the date of creation
- **Availability:** These records must be made available to the Minister of Transport upon request

---

## 7. Quality Assurance Program

### 7.1 Introduction

This Quality Assurance Program (QAP) establishes a systematic approach to ensuring consistent quality in SSAR RPAS operations per CAR 901.217(1)(c).

### 7.2 Quality Policy

SSAR is committed to excellence in all RPAS operations. We will:
- Meet standards
- Ensure consistency
- Verify compliance
- Correct deficiencies
- Continuously improve

### 7.3 Document Control

#### 7.3.1 Controlled Documents

| Document Type | Review Cycle |
|---------------|--------------|
| SMS Manual | Annual |
| Operations Manual | Annual |
| MCM | Annual |
| Training Manual | Annual |
| Checklists/Forms | 2 years |

#### 7.3.2 Document Control Elements

Each controlled document includes:
- Document number
- Version number
- Effective date
- Review date
- Approval signature
- Revision history

### 7.4 Records Retention

| Record Type | Retention Period |
|-------------|------------------|
| RPOC Certificate | Permanent |
| Safety/Audit reports | 5 years |
| Flight logs | 2 years |
| Training records | Employment + 2 years |
| Maintenance records | Aircraft life + 2 years |

### 7.5 Internal Audit Program

#### 7.5.1 Audit Schedule

| Audit Area | Frequency | Auditor | Scope |
|------------|-----------|---------|-------|
| Operations Compliance | Quarterly | Chief Pilot | Flight ops, site surveys, airspace |
| Maintenance Program | Quarterly | Designated Auditor | Aircraft, batteries, equipment |
| Training Program | Semi-annual | Chief Instructor | Records, currency, competency |
| Safety Reporting | Semi-annual | Safety Manager | Reports, hazards, incidents |
| SORA Compliance | Annual | External (if possible) | SORA documentation, OSOs |
| Full SMS Audit | Annual | AE + External | Complete system review |

#### 7.5.2 Internal Audit Process

| Step | Action | Responsible | Timeline |
|------|--------|-------------|----------|
| 1 | **PLAN** - Develop audit plan with scope and criteria | Auditor | 2 weeks before |
| 2 | **NOTIFY** - Inform auditees of audit schedule | Auditor | 1 week before |
| 3 | **PREPARE** - Gather checklists, previous findings, records | Auditor | Before audit |
| 4 | **CONDUCT** - Execute audit using checklist, interview personnel | Auditor | Per schedule |
| 5 | **DOCUMENT** - Record findings with objective evidence | Auditor | During audit |
| 6 | **REPORT** - Prepare audit report with findings classification | Auditor | Within 7 days |
| 7 | **REVIEW** - Present findings to management | Auditor | Within 14 days |
| 8 | **FOLLOW-UP** - Verify corrective actions completed | Auditor | Per timeline |

#### 7.5.3 Operations Compliance Audit Checklist

| Ref | Audit Item | CAR Reference | Compliant | Finding |
|-----|------------|---------------|-----------|---------|
| OPS-01 | Site survey completed for each flight | 901.27 | [ ] | |
| OPS-02 | Weather assessment documented | 901.34-35 | [ ] | |
| OPS-03 | Crew fitness verified (IMSAFE) | 901.19 | [ ] | |
| OPS-04 | Flight authorization obtained | OPS-001 | [ ] | |
| OPS-05 | Airspace requirements met | 901.20-26 | [ ] | |
| OPS-06 | VLOS/BVLOS parameters maintained | STSC-003/004 | [ ] | |
| OPS-07 | Pre-flight inspection completed | 901.29 | [ ] | |
| OPS-08 | Post-flight inspection completed | MCM-001 | [ ] | |
| OPS-09 | Flight logs accurate and complete | 901.222 | [ ] | |
| OPS-10 | Emergency procedures available | 901.217 | [ ] | |

#### 7.5.4 Audit Findings Classification

| Classification | Definition | Action Required | Timeline |
|----------------|------------|-----------------|----------|
| **Critical** | Immediate safety risk or regulatory violation | Stop operations, immediate corrective action | Immediate |
| **Major** | Significant non-compliance affecting safety | Corrective action plan required | Within 30 days |
| **Minor** | Minor non-compliance, low safety impact | Corrective action at next opportunity | Within 90 days |
| **Observation** | Improvement opportunity, not non-compliance | Consider at next review | At discretion |

### 7.6 Corrective Action Process

**Process:** IDENTIFY -> DOCUMENT -> CONTAIN -> INVESTIGATE -> CORRECT -> VERIFY -> CLOSE

#### 7.6.1 Corrective Action Timelines

| Finding Level | Containment | Corrective Action |
|---------------|-------------|-------------------|
| Critical | Immediate | 7 days |
| Major | 24 hours | 30 days |
| Minor | As needed | 90 days |

### 7.7 Continuous Improvement

SSAR commits to continuous improvement through:
- Systematic identification of opportunities
- Data-driven decisions
- Learning from experience
- Stakeholder feedback

### 7.8 Management Review

| Review Type | Frequency | Participants |
|-------------|-----------|--------------|
| Full Management Review | Annual | AE, Chief Pilot |
| Quarterly Status | Quarterly | Chief Pilot |
| As-needed | As required | As appropriate |

---

## 8. Emergency Contacts

### 8.1 Aviation Emergency Contacts

| Contact | Phone | When to Call |
|---------|-------|--------------|
| FIC Kamloops (Uncontrolled Airspace Emergency) | **1-866-541-4101** | Fly-away, airspace emergency |
| Vancouver FIC | 1-866-WXBRIEF | Airspace emergency, traffic conflict |
| Vancouver Centre | (604) 775-8800 | Controlled airspace issues |
| JRCC Victoria (SAR Coordination) | 1-800-567-5111 | SAR coordination |

### 8.2 Regulatory Contacts

| Contact | Phone | When to Call |
|---------|-------|--------------|
| Transport Canada RPAS | 1-800-305-2059 | Regulatory questions |
| TSB Hotline | 1-800-387-3557 | Reportable occurrence per CAR 901.49 |
| TSB Direct | 1-819-994-3741 | Serious incidents |

### 8.3 SSAR Contacts

| Contact | Phone | When to Call |
|---------|-------|--------------|
| SSAR Chief Pilot (Dustin Wales) | 604-849-2345 | All flight emergencies |
| SSAR Operations | [SAR phone] | All incidents during SAR tasking |
| Accountable Executive | [Contact on file] | Serious incidents |

### 8.4 General Emergency

| Contact | Phone |
|---------|-------|
| Emergency Services | **911** |
| Squamish General Hospital | 38140 Behrner Drive, Squamish |

---

## 9. Document Control

### 9.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

Signatures on file. Original signed document retained per QAP-001.

### 9.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Safety & Emergency Manual | Dustin Wales |
| | | | |
| | | | |

### 9.3 Document Sources

This consolidated Safety & Emergency Manual incorporates content from the following source documents:

| Document ID | Document Title |
|-------------|----------------|
| PRO-102 | Emergency Procedures |
| ERP-001 | Emergency Response Procedures |
| SMS-001 | Safety Management System |
| SOA-001 | SORA Documentation |
| SAF-201 | Safety Policy & Objectives |
| SAF-201 | Incident Reporting |
| SAF-202 | Non-Punitive Reporting |
| SAF-203 | Hazard ID & Risk Assessment |
| SAF-204 | QA & Internal Audit |
| POL-006 | Detect and Avoid |
| POL-008 | Incident/Accident |
| QAP-001 | Quality Assurance Program |

---

**END OF SAFETY & EMERGENCY MANUAL**

*This document is part of the SSAR RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    people: {
        title: "People & Equipment Manual",
        icon: "fa-users",
        docCount: 9,
        content: `# SSAR People & Equipment Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | PEQ-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Review Date | March 2027 |
| Regulatory Reference | CAR 901.217-901.220, Standard 922 |

---

## Table of Contents

1. [Organizational Structure](#1-organizational-structure)
2. [Pilot Training Program](#2-pilot-training-program)
3. [Competency Assessment](#3-competency-assessment)
4. [Pilot Competency Records](#4-pilot-competency-records)
5. [Chief Pilot and Flight Reviewer](#5-chief-pilot-and-flight-reviewer)
6. [Personal Protective Equipment](#6-personal-protective-equipment)
7. [Equipment Testing and Airworthiness](#7-equipment-testing-and-airworthiness)
8. [Insurance and Liability](#8-insurance-and-liability)
9. [Document Control](#9-document-control)

---

## 1. Organizational Structure

### 1.1 Purpose

To define the specific duties, authority, and accountability of all personnel within the Squamish Search and Rescue (SSAR) RPAS program. This policy ensures clear chains of command and compliance with Canadian Aviation Regulations (CARs) Part IX and applicable Special Flight Operations Certificates (SFOC).

### 1.2 Governance Context

> **Note:** While the organizational structure below reflects the internal chain of command specific to the SSAR RPAS program, Squamish Search and Rescue operates within a broader Search and Rescue governance framework. SSAR is overseen by a Board and operates under incident command, call-out management, and leadership structures that may vary depending on the operational context, phase of decision-making, and incident command system (ICS) activation.
>
> The hierarchy presented in this section applies solely to roles, responsibilities, and authority within the RPAS program itself, and is intended to clarify accountability, regulatory compliance, and operational control for RPAS activities. It does not supersede, replace, or redefine SSAR's overall organizational governance or incident command authorities.

### 1.3 Organizational Hierarchy

| Level | Role | Reports To | Primary Accountability |
|-------|------|------------|------------------------|
| 1 | Accountable Executive (AE) | — | Ultimate financial, legal, and regulatory responsibility for the SSAR RPAS Program |
| 2 | Operations Manager | Accountable Executive | Day-to-day coordination and safety of RPAS operations |
| 2 | Maintenance Manager | Accountable Executive | Airworthiness, maintenance control, and RPAS equipment readiness |
| 3 | Pilot in Command (PIC) | Operations Manager | Safe conduct of flight operations and regulatory compliance during missions |
| 4 | Visual Observer (VO) | Pilot in Command | Situational awareness, hazard identification, and support of flight safety |

### 1.4 Role Definitions

#### 1.4.1 Accountable Executive (AE)

Bears ultimate financial and legal responsibility for the RPAS program.

| Area | Responsibility |
|------|----------------|
| Legal Compliance | Ensuring all activities comply with regulatory requirements, internal standards, and Canadian Aviation Regulations |
| Operational Oversight | Enforcing adherence to operational plans and technical documentation |
| Personnel | Verifying that all personnel are properly licensed, certified, and fulfill their operational responsibilities |
| Equipment Oversight | Overseeing the execution of maintenance, storage, inventory, and tracking of equipment |
| Regulatory Liaison | Submitting or overseeing flight requests for Advanced and Special operations; maintaining SFOC compliance; serving as primary point of contact for Transport Canada |
| Risk & Assurance | Confirming the accuracy of site surveys and ensuring insurance policies are current and appropriate |

#### 1.4.2 Operations Manager

Responsible for the day-to-day coordination and safety of flight operations.

| Area | Responsibility |
|------|----------------|
| Coordination | Planning operations, managing flight schedules, and overseeing the deployment of RPAS and personnel |
| Client Liaison | Liaising with incident commanders or external agencies to meet operational objectives |
| Compliance | Validating adherence to maintenance requirements and operational planning documents |
| Briefings | Briefing the Pilot in Command (PIC) and team members on operational parameters |
| Safety Management | Conducting incident/accident investigations and proposing amendments to procedures to enhance safety |

#### 1.4.3 Maintenance Manager

Ensures the airworthiness of the RPAS fleet.

| Area | Responsibility |
|------|----------------|
| Maintenance Schedule | Scheduling regular maintenance and ensuring repairs are performed according to manufacturer standards |
| Record Keeping | Maintaining detailed logs of all maintenance activities |
| Airworthiness | Verifying that all RPAS equipment complies with the latest technical/safety standards and hardware/software requirements before deployment |
| Registration | Managing RPAS registration and ensuring proper marking/labeling on all aircraft |
| Lockout Authority | Locking out equipment that is damaged or unserviceable and coordinating repairs or replacements |

#### 1.4.4 Pilot in Command (PIC)

Has final authority over the safe operation of the aircraft during flight.

| Area | Responsibility |
|------|----------------|
| Pre-Flight | Validating adherence to maintenance requirements and complying with the Operations Manual/planning documents |
| Certification | Holding a valid Advanced RPAS Operator Certificate, a ROC-A radio license, and maintaining all recency requirements |
| Operation | Monitoring the RPAS at all times; maintaining constant communication with the crew; staying informed on regulations and amendments |
| Fitness | Meeting all physical fitness and rest requirements |

#### 1.4.5 Visual Observer (VO)

Assists the PIC in maintaining safety and situational awareness.

| Area | Responsibility |
|------|----------------|
| Visual Line of Sight | Maintaining a clear visual line of sight with the RPAS during operations |
| Hazard Identification | Actively monitoring the airspace for potential hazards (aircraft, obstacles, weather) and communicating conflicts to the PIC |
| Sterile Cockpit | Maintaining a "sterile cockpit" environment (free of distractions) for the PIC |
| Safety Review | Participating in incident/accident investigation reviews |

---

## 2. Pilot Training Program

### 2.1 Purpose

This section establishes the pilot training program for SSAR RPAS operations, including Standard Scenario qualifications per CAR 901.220 and SORA competency requirements.

### 2.2 Training Program Structure

| Level | Operations | Requirements |
|-------|------------|--------------|
| Basic | VLOS <400' AGL | TC Basic exam + SSAR Foundation |
| Advanced | VLOS + controlled airspace | TC Advanced exam + SSAR Advanced |
| Level 1 Complex | STSC-003 / STSC-004 | TC L1C exam + SSAR Standard Scenario |

### 2.3 Foundation Training

#### 2.3.1 Purpose

To establish the Foundation Training program for SSAR RPAS operators. This training builds core competencies in aircraft handling, site surveys, team dynamics, and procedural execution, preparing pilots for operational deployments under the SSAR Special Flight Operations Certificate (SFOC).

#### 2.3.2 Foundation Training Objectives

Upon completion of Foundation Training, trainees will be able to:

- Conduct thorough site surveys to identify operational hazards and risks
- Apply general and emergency procedures from the RPAS Operations Manual with precision
- Demonstrate proficiency in essential flight maneuvers under various conditions
- Perform any team role (PIC, Visual Observer, Communications, or Team Lead) with competence
- Communicate effectively and professionally within RPAS teams

#### 2.3.3 Foundation Training Requirements

**Attendance:** Actively participate in all four Foundation Training classes (Class 1-4).

**Knowledge:** Demonstrate understanding of team roles, safety protocols, and operational procedures from the RPAS Operations Manual.

**Practical Skills:** Complete all practical exercises using training drones:
- Rapid Site Surveys
- Basic flight maneuvers (manual takeoff, hover, landing, circuit flight)
- Checklist execution and sterile cockpit discipline

**Flight Review:** Pass a supervised flight review conducted by a certified trainer, demonstrating:
- Risk/hazard identification and effective control strategies
- Flight proficiency with safe execution of basic maneuvers

#### 2.3.4 Foundation Training Modules

| Module | Title | Content |
|--------|-------|---------|
| Class 1 | Introduction & Foundations | RPAS systems overview, team roles, and basic flight skills |
| Class 2 | Practical Application & Complexity | Site survey deep dive and simplified flight planning |
| Class 3 | Procedures & Role Play | Procedural execution and emergency response drills |
| Class 4 | Preflight & Operational Readiness | AirData integration, Nav Canada flight planning, realistic scenario execution |

#### 2.3.5 Flight Review Evaluation

| Competency | Requirement |
|------------|-------------|
| Risk/Hazard Identification | Ability to identify environmental, airspace, and equipment hazards |
| Mitigation & Control | Ability to develop and implement risk controls |
| Flight Proficiency | Safe and smooth execution of manual takeoff, hover, landing, and circuit flight |

#### 2.3.6 Foundation Progression Outcome

> Upon successful completion of Foundation Training and flight review, pilots are authorized to operate the training aircraft they were trained on under the SSAR SFOC. Pilots may then progress to Advanced Training for operational equipment authorization.

### 2.4 Advanced Training

#### 2.4.1 Purpose

To establish the Advanced Training program for SSAR RPAS operators. This training develops expertise with operational aircraft and prepares pilots for complex missions, including simulated special operations, night flying, terrain-based searching, and Extended/Beyond Visual Line of Sight (EVLOS/BVLOS) operations.

#### 2.4.2 Advanced Training Objectives

Upon completion of Advanced Training, pilots will be able to:

- Operate assigned operational RPAS types with full mission proficiency
- Execute complex SAR missions in challenging environments (night, rain, terrain, altitude)
- Manage dynamic risk injects and unexpected operational changes
- Conduct Extended Visual Line of Sight (EVLOS) operations using daisy-chained Visual Observers
- Perform Beyond Visual Line of Sight (BVLOS) operations in low-risk environments
- Maintain situational awareness and make real-time decisions under high-stress conditions

#### 2.4.3 Prerequisite Requirements

- Successful completion of Foundation Training and flight review
- Current authorization to operate training drones under SSAR SFOC
- Fitness for duty (medical, mental, and fatigue management requirements met)

#### 2.4.4 Advanced Training Requirements

**Aircraft-Specific Training:** Complete type-specific training on the assigned operational RPAS (e.g., DJI M30T, DJI Matrice 4TD).

**Flight Hours:** Log a minimum of 5 hours of flight time per RPAS type. Hours may include:
- Supervised flights with a certified trainer
- AirData-logged unsupervised flights conducted under VLOS, below 400 feet, in safe and legal conditions
- Unsupervised flights must be clearly identifiable as training and reviewed by a certified trainer via AirData

**Scenario-Based Training:** Complete scenario-based training including:
- Simulated emergencies (equipment failure, loss of link, airspace conflicts)
- Dynamic risk injects (weather changes, unauthorized aircraft, objective shifts)
- Complex environments (night ops, rain, terrain, high altitude)

**Trainer Sign-Off:** Obtain formal sign-off from a certified trainer confirming operational readiness through a practical evaluation.

#### 2.4.5 Practical Evaluation

| Assessment Area | Criteria |
|-----------------|----------|
| Mission Execution | Ability to execute mission objectives efficiently and safely |
| Risk Management | Proactive identification and mitigation of operational hazards |
| Team Coordination | Effective communication and resource management with flight crew |
| Emergency Response | Appropriate reaction to simulated emergencies and dynamic changes |

#### 2.4.6 Advanced Progression Outcome

> Upon successful completion of Advanced Training and trainer sign-off, pilots are cleared to operate the specific RPAS type in live operational missions under the SSAR SFOC. Additional RPAS types require separate Advanced Training and sign-off.

### 2.5 SORA Competency Training

#### 2.5.1 Learning Objectives

| Objective | Description | Assessment |
|-----------|-------------|------------|
| SORA-01 | Explain the 10-step SORA process | Written exam Q1-5 |
| SORA-02 | Determine Ground Risk Class for given scenario | Written exam Q6-10 |
| SORA-03 | Identify applicable M1/M2 mitigations | Written exam Q11-15 |
| SORA-04 | Determine Air Risk Class for operational area | Written exam Q16-20 |
| SORA-05 | Calculate SAIL from GRC and ARC | Written exam Q21-25 |
| SORA-06 | Identify applicable OSOs for SAIL level | Written exam Q26-30 |
| SORA-07 | Apply SORA to operational planning | Practical scenario |
| SORA-08 | Document SORA compliance | Practical documentation |

#### 2.5.2 SORA Assessment Criteria

| Assessment | Method | Pass Mark | Retest Policy |
|------------|--------|-----------|---------------|
| Written Exam | 30 multiple choice | 80% (24/30) | After 48 hours |
| Practical Scenario | SORA analysis of ConOps | All objectives met | After remedial training |
| Documentation | Complete SORA package | Acceptable to reviewer | Corrections permitted |

### 2.6 STSC-003 High Altitude Training

| Topic | Duration | Competency |
|-------|----------|------------|
| ATC Coordination Procedures | 3 hours | ATC-01: Proper coordination execution |
| High Altitude Weather | 2 hours | WX-01: Altitude weather assessment |
| Airspace and Traffic | 2 hours | AS-01: Traffic identification |
| Emergency Procedures | 2 hours | EM-01: Emergency descent execution |
| SORA for High Altitude | 3 hours | SORA module completion |

### 2.7 STSC-004 BVLOS Training

| Topic | Duration | Competency |
|-------|----------|------------|
| SORA for BVLOS | 4 hours | Complete SORA module |
| Lost Link Procedures | 2 hours | LL-01: Lost link response |
| Navigation Without VLOS | 3 hours | NAV-01: Telemetry navigation |
| Emergency Procedures BVLOS | 3 hours | EM-02: BVLOS emergencies |
| Population Density Assessment | 2 hours | PD-01: Area assessment |
| Controlled Ground Area | 2 hours | CGA-01: M1 implementation |

### 2.8 Time-Critical SAR Operations Training (2 hours)

All pilots qualified for SAR operations must complete training on time-critical scenario selection.

#### 2.8.1 Learning Objectives

- Understand 24-hour ATC notification requirements for STSC-003
- Recognize when time-critical SAR activation requires STSC-004 fallback
- Apply scenario selection decision matrix during Rapid Site Survey
- Plan and execute effective search under 400' AGL constraint

#### 2.8.2 Training Content

| Module (30 min each) | Content |
|----------------------|---------|
| Regulatory Framework | STSC-003 ATC timeline requirements; STSC-004 parameters; legal implications |
| Scenario Selection | Assessing notification feasibility; decision matrix; Rapid Site Survey integration |
| Terrain-Following Operations | Contour search patterns; consistent AGL in variable terrain; RTH planning; obstacle awareness |
| Sub-400' Search Effectiveness | Thermal detection at 80-120m AGL; modified track spacing; search pattern adaptation |

#### 2.8.3 Assessment

- **Scenario-based evaluation:** Given SAR activation details, correctly identify appropriate scenario
- **Practical demonstration:** Execute terrain-following search under 400' AGL
- **Crew briefing:** Deliver time-critical operations brief to simulated crew

### 2.9 Human Factors Training (4 hours)

- IMSAFE checklist
- Stress recognition
- Decision-making models (DECIDE, OODA)
- Situational awareness
- CRM principles
- Fatigue recognition

### 2.10 Competency-Based Assessment

#### 2.10.1 Competency Units

| Unit | Title | Standard |
|------|-------|----------|
| CU-01 | Pre-flight Planning | Complete and accurate planning documentation |
| CU-02 | Aircraft Handling | Safe, smooth, controlled flight operations |
| CU-03 | Navigation | Accurate navigation to/from designated points |
| CU-04 | Emergency Response | Correct, timely emergency procedure execution |
| CU-05 | Crew Resource Management | Effective communication and coordination |
| CU-06 | Risk Assessment | Proper SORA application and risk management |
| CU-07 | Regulatory Compliance | Operations within all regulatory limits |

#### 2.10.2 Rating Scale

| Rating | Description | Criteria |
|--------|-------------|----------|
| 4 - Exemplary | Exceeds standard | Could instruct others |
| 3 - Competent | Meets standard | Safe, effective performance |
| 2 - Developing | Below standard | Requires additional practice |
| 1 - Unsatisfactory | Well below standard | Safety concerns present |

### 2.11 Training Progression Pathway

| Foundation Training | Foundation Flight Review | Advanced Training | Operational Authorization |
|---------------------|-------------------------|-------------------|--------------------------|

#### 2.11.1 Foundation Training Progression

**Criteria for Advancement:**
- **Attendance:** 100% attendance in all four Foundation Classes (no more than one excused absence per class)
- **Engagement:** Active participation in classroom discussions, practical exercises, and scenario-based drills
- **Knowledge:** Demonstrated understanding of RPAS Operations Manual procedures and SSAR protocols
- **Practical Competency:** Safe and controlled execution of required flight maneuvers

| Outcome | Action |
|---------|--------|
| Successful | Authorization to operate training aircraft |
| Unsuccessful | Additional practice + reassessment within 14 days |

#### 2.11.2 Advanced Training Progression

| Outcome | Action |
|---------|--------|
| Successful | Written sign-off for aircraft type; cleared for live ops |
| Unsuccessful | Written feedback; scheduled remediation |

#### 2.11.3 Hold Points and Conditional Progression

| Hold Point | Details |
|------------|---------|
| Foundation Hold | Trainee does not meet Flight Review standards. Feedback provided; additional practice (min 1 week); reassessment within 14 days. |
| Advanced Hold | Pilot does not meet trainer sign-off standards. Written feedback; additional scenarios or flight hours (min 2 hours); re-evaluation scheduled. |
| Recurring Hold | If trainee fails reassessment twice, Operations Manager meets with trainee to assess program suitability. |

#### 2.11.4 Timeline

> **Expected timeline:** Foundation Training 4-6 weeks (one class per week + 1-2 weeks for flight review prep) -> Advanced Training 4-8 weeks per aircraft type -> Total Time to Operational: 8-14 weeks for a single aircraft type.

### 2.12 Recurrency Training

| Requirement | Frequency | Content |
|-------------|-----------|---------|
| Currency flights | 90 days | 3 flights including 1 each VLOS/BVLOS |
| Ground recurrency | Annual | 4 hours covering updates, incidents, refresher |
| Practical recurrency | Annual | 2 hours emergency procedures |
| SORA refresher | Annual | 2 hours SORA updates and review |
| Human Factors | Annual | 1 hour HF refresher |

### 2.13 Ongoing Development

> Pilots must participate in recurrent advanced training sessions and log at least 1 hour of flight time per month on each RPAS type to maintain operational currency. Failure to maintain currency will result in withdrawal of operational authorization until proficiency is re-established through additional training.

### 2.14 Training Records

Per CAR 901.222, maintain records of:
- All training completed with dates and durations
- Assessment results
- Instructor/examiner details
- Qualifications achieved with expiry dates
- Recurrency training completion

---

## 3. Competency Assessment

### 3.1 Purpose and Scope

This section establishes competency assessment standards for RPAS pilots operating under STSC-003 (High Altitude VLOS) and STSC-004 (Low-Risk BVLOS) standard scenarios. It defines knowledge, skills, and performance criteria for initial and recurrent assessments.

### 3.2 Assessment Categories

Pilots must demonstrate competency in:
- Ground School Knowledge
- Flight Skills (VLOS)
- Extended VLOS Operations (STSC-003)
- BVLOS Operations (STSC-004)
- Emergency Procedures
- Search and Rescue Operations

### 3.3 Knowledge Assessment

#### 3.3.1 Ground School Topics

| Topic | Min. Score | Assessment Method |
|-------|------------|-------------------|
| Canadian Aviation Regulations Part IX | 80% | Written exam |
| Standard 922 requirements | 80% | Written exam |
| STSC-003 & STSC-004 requirements | 85% | Written exam |
| JARUS SORA methodology | 80% | Written exam |
| Airspace classification and procedures | 85% | Written exam |
| Weather interpretation | 80% | Written + practical |
| Aircraft systems (M30T, M4TD) | 85% | Written + practical |
| Emergency procedures | 90% | Written + practical |
| Risk assessment | 80% | Scenario-based |
| SMS principles | 80% | Written exam |

### 3.4 Flight Skills Assessment - VLOS

#### 3.4.1 Basic Flight Maneuvers

| Maneuver | Standard | Tolerance |
|----------|----------|-----------|
| Takeoff and hover | Stable hover at 2m AGL | +/- 0.5m |
| Precision landing | Land within marked area | +/- 0.5m |
| Rectangular pattern | Maintain consistent spacing | +/- 2m |
| Figure-8 pattern | Smooth coordinated turns | Continuous motion |
| Altitude control | Maintain assigned altitude | +/- 2m |
| Position hold | Maintain position in wind | +/- 1m |
| Obstacle avoidance | Safe navigation around obstacles | Min 3m clearance |
| Return to home | Accurate RTH execution | +/- 2m landing |

### 3.5 STSC-003 High Altitude Assessment

Pilots must demonstrate competency in operations above 400' AGL including STSC-003 requirements, ATC coordination, airspace assessment, traffic avoidance, lost visual reference procedures, and emergency descent.

| Competency | Performance Standard | Assessment |
|------------|---------------------|------------|
| ATC coordination | Complete notification per procedure | Practical scenario |
| Altitude management | Maintain assigned altitude | +/- 3m (10 ft) at altitude |
| Traffic awareness | Identify and report traffic | Scenario response |
| Weather assessment | Identify limiting conditions | Scenario questions |
| Emergency descent | Execute safe rapid descent | Practical demonstration |

### 3.6 STSC-004 BVLOS Assessment

#### 3.6.1 BVLOS-Specific Competencies

| BVLOS Competency | Performance Standard | Assessment Method |
|------------------|---------------------|-------------------|
| BVLOS regulations | 100% knowledge of STSC-004 | Written exam 90% |
| Flight planning | Complete BVLOS flight plan | Document review |
| Route navigation | Follow planned route accurately | +/- 5m lateral |
| Telemetry monitoring | Continuous parameter monitoring | Practical observation |
| Lost link procedures | Execute contingency correctly | Practical scenario |
| GPS failure response | Execute backup navigation | Practical scenario |
| Obstacle awareness | Use sensors/data for avoidance | Scenario-based |
| Communication protocols | Maintain VO coordination | Practical assessment |
| Return navigation | Navigate to recovery point | Practical demonstration |

#### 3.6.2 BVLOS Scenario Assessment

Pilots must successfully complete the following scenarios:

| Scenario | Requirements |
|----------|--------------|
| 1: Standard BVLOS Transit | Plan and execute BVLOS flight to designated waypoint; maintain telemetry monitoring; execute accurate return |
| 2: Lost Link Response | Recognize lost link condition; execute appropriate contingency procedure; resume control after link restoration |
| 3: GPS Degradation | Recognize GPS accuracy degradation; transition to backup navigation; execute safe return using available data |
| 4: Airspace Incursion Alert | Respond to traffic alert; execute immediate avoidance maneuver; resume or terminate as appropriate |

### 3.7 Aircraft-Specific Assessment

#### 3.7.1 DJI M30T Competencies

| System | Required Competencies |
|--------|----------------------|
| Flight Controller | Mode selection, parameter adjustment, failsafe config |
| Camera System | Zoom, thermal, laser rangefinder operation |
| O3 Transmission | Link quality monitoring, failsafe understanding |
| BS30 Charging | Battery swap, storage management |
| RTK System | RTK initialization, accuracy verification |

#### 3.7.2 DJI Matrice 4TD Competencies

| System | Required Competencies |
|--------|----------------------|
| Flight Controller | M4TD-specific modes and parameters |
| Camera System | Wide, tele, thermal sensor operation |
| O4 Transmission | Extended range management, failsafe config |
| Battery System | M4TD battery procedures and management |
| Network RTK | RTK configuration and accuracy monitoring |

### 3.8 Emergency Procedures Assessment

| Emergency | Required Response | Assessment |
|-----------|-------------------|------------|
| Flyaway | Execute RTH or manual intervention | Scenario drill |
| Lost link | Monitor for auto-recovery/RTH | Scenario drill |
| Low battery | Execute immediate recovery | Scenario drill |
| Motor failure | Controlled descent to safe area | Discussion + drill |
| GPS failure | Switch to ATTI mode, manual return | Scenario drill |
| Airspace incursion | Immediate land or avoid | Scenario drill |
| Weather deterioration | Execute recovery | Decision assessment |

---

## 4. Pilot Competency Records

### 4.1 Introduction

This section establishes the pilot competency records system for SSAR RPAS operations per CAR 901.220.

### 4.2 Qualification Structure

| Stage | Title | Requirements |
|-------|-------|--------------|
| Trainee | Pilot Under Training | In training program |
| Stage 1 | Pilot (Basic) | Advanced cert, orientation, type training |
| Stage 2 | Standard Scenario | Stage 1 + SS training + endorsement |
| Stage 3 | Senior Pilot | All endorsements + 50 hours |
| Stage 4 | Flight Reviewer | Stage 3 + instructor training + designation |

### 4.3 Currency Requirements

| Requirement | Period | Criteria |
|-------------|--------|----------|
| General Flight | 90 days | 3 flights |
| Aircraft Type | 90 days | 1 flight per type |
| STSC-003 | 6 months | 1 high altitude operation |
| STSC-004 | 6 months | 2 BVLOS operations (2NM) |
| Annual Proficiency | 12 months | Flight Reviewer check |
| Recurrent Training | 12 months | Training completion |

### 4.4 Records Maintained

#### 4.4.1 Individual Pilot Record

- Personal information
- Transport Canada credentials
- SSAR qualification status
- Aircraft authorizations
- Standard Scenario endorsements
- Currency status

#### 4.4.2 Flight Time Summary

- Total hours/flights
- By aircraft type
- By operation type
- Rolling periods (90 days, 12 months)

### 4.5 Pilot Training Record Template

#### Pilot Information

| Field | Information |
|-------|-------------|
| Name: | |
| TC Pilot Certificate #: | |
| Certificate Expiry: | |
| Organization Join Date: | |
| Aircraft Qualifications: | M30T [ ]    M4TD [ ] |
| Scenario Qualifications: | STSC-003 [ ]    STSC-004 [ ] |

#### Training History

| Training Item | Date Completed | Instructor | Next Due |
|---------------|----------------|------------|----------|
| Initial ground school | | | |
| M30T type training | | | |
| M4TD type training | | | |
| STSC-003 training | | | |
| STSC-004 BVLOS training | | | |
| Emergency procedures | | | |
| SAR operations training | | | |

### 4.6 Currency Tracking Summary

| Aircraft | Last Flight | Flights (90 days) | Hours (90 days) | Status |
|----------|-------------|-------------------|-----------------|--------|
| DJI M30T | | | | |
| DJI M4TD | | | | |
| Total | | | | |

**Status Legend:**

| GREEN | YELLOW | RED |
|-------|--------|-----|
| Current | Due within 30 days | Expired |

### 4.7 Proficiency Check Records

Annual proficiency checks include:
- **Ground evaluation:** Regulatory, airspace, weather, emergency, SMS knowledge
- **Practical evaluation:** Pre-flight, normal operations, emergency procedures

#### Scoring

| Score | Description |
|-------|-------------|
| 4 | Exceeds standards |
| 3 | Meets standards |
| 2 | Below standards - minor remediation |
| 1 | Unsatisfactory - significant remediation |

### 4.8 Standard Scenario Endorsements

#### 4.8.1 STSC-003 Endorsement Requirements

- Advanced Pilot License
- Minimum 10 flight hours
- Ground training completed
- Practical assessment passed

#### 4.8.2 STSC-004 Endorsement Requirements

- Level 1 Complex Pilot License
- Minimum 15 flight hours
- SORA training completed
- Ground training completed
- Practical assessment passed

### 4.9 Record Management

| Record Type | Retention |
|-------------|-----------|
| Individual Pilot Records | Employment + 2 years |
| Flight Time Records | 5 years |
| Proficiency Checks | 5 years |
| Training Records | 5 years |
| Endorsement Records | Duration + 2 years |

---

## 5. Chief Pilot and Flight Reviewer

### 5.1 Chief Pilot Designation

**Chief Pilot: Dustin Wales**
**Designation Date:** March 2026
**Reports To:** Accountable Executive
**Alternate:** [Designated Deputy Chief Pilot when appointed]

### 5.2 Chief Pilot Qualifications

The Chief Pilot must meet and maintain the following minimum qualifications:

| Requirement | Standard | Evidence |
|-------------|----------|----------|
| RPAS Certificate | Valid Transport Canada Advanced RPAS Operator Certificate | TC Certificate |
| Flight Hours | Minimum 100 hours total RPAS flight time | AirData logs |
| Operational Experience | Minimum 2 years as operational SSAR RPAS pilot | Personnel records |
| Scenario Endorsements | All Standard Scenario endorsements (STSC-003, STSC-004) | Endorsement records |
| Trainer Status | Certified SSAR RPAS Trainer | Designation letter |
| SMS Knowledge | Completed SMS training, demonstrated competency | Training records |
| Regulatory Knowledge | Expert knowledge of CARs Part IX, Standard 922 | Assessment |
| Leadership | Demonstrated leadership capability | AE assessment |

### 5.3 Chief Pilot Responsibilities

The Chief Pilot is responsible for the day-to-day management of RPAS operations, ensuring safety, regulatory compliance, and operational effectiveness.

#### 5.3.1 Operations Management

| Responsibility | Description | Frequency |
|----------------|-------------|-----------|
| Flight Authorization | Approve/deny operational flight requests based on risk assessment | Per request |
| Mission Oversight | Monitor operational missions, available for consultation | Continuous |
| Resource Allocation | Assign pilots and equipment to missions | Per mission |
| Operational Decisions | Make time-critical decisions on operations | As required |
| Weather Assessment | Final authority on weather-related GO/NO-GO decisions | Per operation |
| Incident Response | Lead response to operational incidents | As required |

#### 5.3.2 Pilot Management

| Responsibility | Description | Frequency |
|----------------|-------------|-----------|
| Qualification Verification | Verify pilot qualifications before operational authorization | Per pilot |
| Currency Monitoring | Track and enforce pilot currency requirements | Monthly |
| Fitness Assessment | Ensure pilots meet fitness-for-duty requirements | Continuous |
| Performance Review | Review pilot performance, address deficiencies | Ongoing |
| Discipline | Address violations of SOPs or safety standards | As required |
| Mentorship | Mentor developing pilots, provide guidance | Ongoing |

#### 5.3.3 Regulatory Compliance

| Responsibility | Description | Frequency |
|----------------|-------------|-----------|
| RPOC Compliance | Ensure all operations comply with RPOC conditions | Continuous |
| CARs Adherence | Verify compliance with Canadian Aviation Regulations Part IX | Continuous |
| SFOC Management | Manage any Special Flight Operations Certificates | As required |
| Regulatory Liaison | Coordinate with Transport Canada on compliance matters | As required |
| Documentation | Ensure all required documentation is current and accessible | Ongoing |
| Audit Preparation | Prepare for and support regulatory audits | As required |

#### 5.3.4 Safety Responsibilities

| Responsibility | Description | Frequency |
|----------------|-------------|-----------|
| Risk Acceptance | Accept Medium-level risks per Risk Acceptance Authority (Safety Manual 1.3.2) | Per operation |
| Hazard Management | Participate in hazard identification and risk assessment | Ongoing |
| Safety Reporting Review | Review all safety reports, ensure follow-up | Within 7 days |
| Incident Investigation | Lead or participate in incident investigations | As required |
| SPI Monitoring | Monitor Safety Performance Indicators, report trends | Monthly |
| Safety Culture | Promote and enforce safety-first culture | Continuous |

#### 5.3.5 Training Oversight

| Responsibility | Description | Frequency |
|----------------|-------------|-----------|
| Training Program | Oversee training program delivery and effectiveness | Ongoing |
| Trainer Supervision | Supervise and evaluate trainers | Ongoing |
| Curriculum Review | Review and approve training curriculum changes | Annual / as needed |
| Training Records | Ensure training records are complete and accurate | Quarterly audit |
| Recurrency Enforcement | Ensure all pilots complete recurrency requirements | Ongoing |
| Standards Calibration | Ensure consistent assessment standards across trainers | Semi-annual |

#### 5.3.6 Equipment Oversight

| Responsibility | Description | Frequency |
|----------------|-------------|-----------|
| Fleet Readiness | Ensure aircraft are maintained and mission-ready | Continuous |
| Maintenance Oversight | Oversee maintenance program execution | Ongoing |
| Equipment Authorization | Authorize equipment for operational use | Per equipment |
| Lockout Authority | Ground equipment for safety concerns | As required |
| Procurement Input | Provide input on equipment acquisition decisions | As required |
| Configuration Control | Approve firmware and configuration changes | Per change |

### 5.4 Chief Pilot Authority

The Chief Pilot has authority to:

| Authority | Description |
|-----------|-------------|
| **Operational Authority** | |
| Approve Operations | Authorize operational flights based on risk assessment |
| Deny Operations | Refuse to authorize flights that exceed acceptable risk |
| Abort Operations | Order immediate termination of any flight for safety reasons |
| Modify Plans | Adjust mission plans based on conditions |
| **Personnel Authority** | |
| Ground Pilots | Suspend pilot operational authorization for cause |
| Restore Currency | Authorize currency restoration training |
| Assign Pilots | Assign specific pilots to specific missions |
| Designate Acting | Designate acting Chief Pilot during absence |
| **Equipment Authority** | |
| Ground Aircraft | Remove aircraft from service for safety or maintenance |
| Return to Service | Authorize aircraft return to service after maintenance |
| Approve Modifications | Approve minor modifications or configurations |

### 5.5 Chief Pilot Decision-Making

#### 5.5.1 GO/NO-GO Authority

The Chief Pilot has final GO/NO-GO authority for all operations. This authority may be delegated to the PIC for routine operations within established parameters, but the Chief Pilot retains override authority.

| Factor | Chief Pilot Action |
|--------|-------------------|
| Weather Marginal | Assess risk, authorize with conditions or deny |
| Pilot Currency Concern | Review records, require demonstration or deny |
| Equipment Status | Review maintenance records, authorize or ground |
| Airspace Complexity | Assess pilot capability, authorize or assign alternative |
| Time Pressure | Resist pressure to approve unsafe operations |

#### 5.5.2 Risk Acceptance Decisions

Per Safety Manual Section 1.3.2, the Chief Pilot is the Risk Acceptance Authority for Medium-level risks.

**Medium Risk Authorization Process:**
1. Review risk assessment documentation
2. Evaluate proposed mitigations
3. Consider pilot experience and conditions
4. Determine if risk is acceptable with mitigations
5. Document decision with rationale
6. Communicate conditions to PIC

#### 5.5.3 Escalation

The Chief Pilot must escalate to the Accountable Executive when:
- Risk level is High or Extreme
- Regulatory interpretation required
- Significant resource decisions needed
- Personnel discipline beyond Chief Pilot authority
- Media or public relations implications
- Potential legal or liability issues

### 5.6 Chief Pilot Reporting

| Report | Frequency | Recipient | Content |
|--------|-----------|-----------|---------|
| Operations Summary | Monthly | AE | Flight hours, missions, issues |
| Pilot Currency Status | Monthly | AE | Currency status of all pilots |
| Safety Summary | Monthly | AE | SPIs, incidents, hazards |
| Training Progress | Quarterly | AE | Training pipeline, completions |
| Equipment Status | Quarterly | AE | Fleet readiness, maintenance |
| Regulatory Compliance | Semi-annual | AE | Compliance status, issues |
| Annual Report | Annual | AE | Full program review |

### 5.7 Pilot Qualification Levels

| Level | Title | Requirements |
|-------|-------|--------------|
| 1 | Pilot (Basic Operations) | Advanced RPAS Certificate, SSAR orientation, type training |
| 2 | Pilot (Standard Scenario) | Stage 1 + SS training + endorsement |
| 3 | Senior Pilot | All SS endorsements + 50 hours |
| 4 | Flight Reviewer | Stage 3 + instructor training + AE designation |

### 5.8 Flight Reviewer

#### 5.8.1 Current Designation

| Item | Details |
|------|---------|
| Flight Reviewer | Dustin Wales |
| Designation Number | SSAR-FR-2026-001 |
| Authorization Scope | All assessments, all endorsements |

#### 5.8.2 Flight Reviewer Responsibilities

- Conduct initial qualification assessments
- Conduct annual proficiency checks
- Issue Standard Scenario endorsements (STSC-003, STSC-004)
- Conduct currency restoration assessments
- Issue aircraft type authorizations

### 5.9 Chief Instructor Role

**Chief Instructor: Dustin Wales**

Responsible for:
- Training program management
- Curriculum approval
- Instructor oversight
- Regulatory compliance of training

### 5.10 Currency Requirements - CAR 901.220

| Requirement | Period | Criteria |
|-------------|--------|----------|
| Flight Currency | 90 days | Minimum 3 flights |
| Aircraft Type Currency | 90 days | 1 flight per type |
| Annual Proficiency Check | 12 months | Pass check with Flight Reviewer |
| Recurrent Training | 12 months | Complete required training |
| STSC-003 Currency | 6 months | 1 high altitude operation |
| STSC-004 Currency | 6 months | 1 BVLOS operation |

#### Currency Verification

Before any flight, the PIC shall verify:
- Personal currency
- Aircraft type currency
- Standard Scenario currency (if applicable)
- Annual proficiency check current
- Recurrent training current

> **Pilots shall not conduct operations if any required currency has lapsed.**

### 5.11 Annual Proficiency Check

| Element | Method | Duration |
|---------|--------|----------|
| Regulatory knowledge | Oral | 30 min |
| SMS knowledge | Oral | 15 min |
| Emergency procedures | Oral + demonstration | 30 min |
| Pre-flight inspection | Demonstration | 15 min |
| Normal operations | Flight | 30 min |
| Emergency response | Simulated | 15 min |

### 5.12 Examiner Standards

#### 5.12.1 STSC-003 Assessment

**Knowledge:**
- STSC-003 requirements and limitations
- Airspace regulations
- ATC coordination procedures
- Weather minimums

**Practical:**
- ATC coordination demonstration
- VO positioning
- High altitude operations
- Traffic avoidance
- Emergency descent

#### 5.12.2 STSC-004 Assessment

**Knowledge:**
- STSC-004 requirements
- SORA methodology (GRC/ARC/SAIL/OSO)
- Lost link procedures
- RTH configuration

**Practical:**
- SORA pre-flight verification
- Ground area establishment
- BVLOS navigation
- Simulated lost link response
- RTH execution

### 5.13 Pass Criteria

- All elements minimum score of 2
- Overall average 3.0 or higher
- No critical failures

### 5.14 Failed Assessment

> Upon failed assessment: privileges suspended immediately, deficiencies documented, remedial training required, re-check minimum 7 days later.

---

## 6. Personal Protective Equipment

### 6.1 Purpose

To ensure the physical safety, visibility, and professional identification of SSAR RPAS crew members during operations. This policy mandates the minimum protective gear required to mitigate environmental hazards and manage public interaction.

### 6.2 Basic PPE Requirements

All crew members must be equipped with the following minimum PPE for every operation:

| PPE Item | Requirements |
|----------|--------------|
| SSAR Attire | Crew members must wear approved SSAR uniform/attire to ensure easy identification by other agencies and the public. |
| High-Visibility Vest | A designated "Drone Team" or "RPAS Crew" or "SSAR Garment" vest must be worn to distinguish the flight crew from the general public. |
| Eye Protection | Tinted lenses for bright conditions. |
| Hand Protection | Work gloves are mandatory during site clearing, equipment assembly, and teardown. Optional for pilot during flight unless required for thermal protection. Must allow tactile dexterity if worn during flight. |

### 6.3 Task-Specific PPE

Additional PPE may be required based on the specific environment or mission profile:

| PPE Item | Required When | Notes |
|----------|---------------|-------|
| Helmets | Operating near cliffs, rockfall zones, or helicopter landing zones | Must meet CSA or equivalent standard |
| PFDs (Lifejackets) | Operating from boats or near swift water and/or tidal water | Required for all crew members in the area |
| Cold Weather Gear | Sub-zero operations | Prevents cold stress and maintains cognitive function |

---

## 7. Equipment Testing and Airworthiness

### 7.1 Purpose - Equipment Testing

To ensure the operational reliability and airworthiness of all SSAR RPAS equipment. This policy mandates a systematic testing regimen to verify that all systems function within manufacturer specifications and regulatory requirements (CAR 901.29) prior to operational deployment.

### 7.2 Testing Triggers

Equipment testing is mandatory under the following conditions:

| Trigger | Description |
|---------|-------------|
| New Equipment | Upon acquisition, prior to entering service (acceptance testing) |
| Post-Maintenance | After any hardware repair or component replacement (e.g., replacing a motor arm) |
| Post-Firmware Update | After any software/firmware update to the aircraft, controller, or batteries. Note: Firmware updates frequently reset safety parameters like RTH Altitude |
| Annual Recurrence | A comprehensive system audit conducted once every 12 months |

### 7.3 Standard Functional Flight Test (FFT)

All testing must follow a "Crawl, Walk, Run" progression:

#### Phase 1: Ground Checks

- **Startup:** Verify error-free initialization (IMU, Compass, GPS)
- **Control Station:** Verify stick mode, transmission quality, and screen brightness
- **Payload:** Verify gimbal stability and camera feed clarity

#### Phase 2: Hover & Basic Handling (Low Altitude)

- **Launch:** Execute an auto-takeoff to 2m - verify stability (no toilet-bowling)
- **Control Response:** Test Pitch, Roll, and Yaw responsiveness
- **Hover:** Hands-off hover for 30 seconds to verify position hold (GPS/RTK)

#### Phase 3: Systems & Sensors

- **Obstacle Avoidance:** Carefully test proximity sensors against a soft target (person or cone)
- **Mode Switching:** Toggle between P-Mode (Position) and S-Mode (Sport/Attitude) to verify response
- **Payload:** Test zoom, thermal palette switching, and laser rangefinder (if equipped)

#### Phase 4: Emergency Logic

- **RTH Test:** Move drone >20m away and trigger Return-to-Home - confirm it ascends to set altitude and lands accurately

### 7.4 Status Tags

| Status | Meaning |
|--------|---------|
| CLEAR | Equipment passed all tests and is ready for operations. |
| LOCKOUT | Equipment failed a test. Must be physically tagged "DO NOT FLY" and removed from the operational kit until repaired. |

### 7.5 RPAS Functional Test Log

| Field | Information |
|-------|-------------|
| Date: | |
| Technician: | |
| RPAS ID: | |
| Trigger: | [ ] New   [ ] Repair   [ ] Firmware Update   [ ] Annual |
| Ground Checks: | [ ] Airframe Inspect   [ ] FW Version Verified   [ ] Compass/IMU Normal |
| Control Link: | [ ] Stick Inputs Correct   [ ] C2 Link Strength 100% |
| Flight Checks: | [ ] Stable Hover   [ ] Obstacle Sensors Active   [ ] RTH Function Confirmed |
| Payload: | [ ] SD Card Formatting   [ ] Thermal/Zoom Operational |
| Status: | [ ] CLEAR (Return to Service)   [ ] LOCKOUT |

### 7.6 Airworthiness Standards

**Safety Assurance Declaration:** SSAR operates only RPAS for which the manufacturer has provided a safety assurance declaration to the Minister of Transport (CAR 901.76) for the intended operational environment (e.g., Controlled Airspace, Near People)

**Operational Suitability:** Only RPAS suitable for the specific mission profile are permitted. For Advanced Operations or flights under an SFOC, pilots must verify the aircraft is listed as eligible on the Transport Canada list

### 7.7 Registration and Markings

- **Registration:** All SSAR RPAS must be registered with Transport Canada (CAR 901.02)
- **Marking Placement:** The unique registration number must be affixed to a permanent part of the RPAS's external structure - clearly visible, legible, and contrasted with the background (CAR 901.03)
- **Maintenance of Markings:** Registration markings must be inspected regularly. If a marking becomes faded, damaged, or obscured, it must be restored to compliant standards immediately

### 7.8 Maintenance Regimen

Maintenance shall be performed in accordance with the manufacturer's maintenance program.

| Area | Requirement |
|------|-------------|
| Tracking System | SSAR utilizes AirData to track flight hours and maintenance cycles |
| Firmware/Software | Updates applied per manufacturer recommendations. Updates must be verified for stability before deploying the RPAS into an active search mission |
| Mandatory Actions | SSAR will monitor for and immediately comply with any mandatory manufacturer safety notices or airworthiness directives |

### 7.9 Operational Inspections

| Inspection | Description |
|------------|-------------|
| Pre-Operation (Base) | Before deployment, equipment undergoes a thorough inspection for structural integrity and battery health, following the manufacturer's manual |
| Pre-Flight (On-Site) | The PIC must conduct a visual and tactile inspection prior to each flight to ensure the system is fit for purpose and safe for flight (CAR 901.29) |
| Post-Flight | A comprehensive inspection is performed after each flight to identify any damage sustained during operation |

### 7.10 Technical Records and Retention

- **Data Logging:** All maintenance activities, including firmware updates, hardware repairs, and scheduled service, must be logged in AirData
- **Defect Reporting:** Any technical defects or malfunctions discovered during inspection or flight must be recorded
- **Retention Period:** In compliance with CAR 901.48, technical records (including time of each flight, maintenance performed, and modifications) must be retained for a minimum of 24 months

---

## 8. Insurance and Liability

### 8.1 Purpose

This policy establishes insurance requirements and liability management procedures for SSAR RPAS operations to ensure adequate coverage for all authorized operations including Standard Scenarios, and to protect SSAR, its members, and third parties.

### 8.2 Insurance Requirements - CAR 901.06

Per Canadian Aviation Regulations, operators must maintain liability insurance:

| MTOW Category | Minimum Coverage | SSAR Recommended |
|---------------|------------------|------------------|
| Up to 1 kg | $100,000 | $1,000,000 |
| 1 kg to 5 kg | $100,000 | $2,000,000 |
| 5 kg to 25 kg | $500,000 | $2,000,000 |
| Over 25 kg | $1,000,000 | $5,000,000 |

> **Note:** SSAR maintains coverage significantly exceeding minimum regulatory requirements due to SAR operational complexity and public safety responsibility.

### 8.3 SSAR Aircraft Coverage

| Aircraft | MTOM | Category | Minimum Required | SSAR Actual |
|----------|------|----------|------------------|-------------|
| DJI M30T | 3.77 kg | 1-5 kg | $100,000 | [Policy Amount] |
| DJI Matrice 4TD | 2.3 kg | 1-5 kg | $100,000 | [Policy Amount] |

### 8.4 Policy Scope Requirements

#### 8.4.1 Aircraft Covered

The insurance policy must cover:
- All RPAS owned by the SSAR RPAS Program
- All RPAS operated under SSAR authority
- Attached payloads and accessories
- Ground control stations and support equipment

#### 8.4.2 Operations Covered

The insurance policy must explicitly cover (not exclude):

| Operation Type | Coverage Requirement | Verification |
|----------------|---------------------|--------------|
| VLOS Operations | Standard coverage | Policy review |
| **BVLOS Operations** | Explicit coverage required | Written confirmation |
| **High Altitude (>400' AGL)** | Explicit coverage required | Written confirmation |
| Standard Scenario STSC-003 | Covered as high altitude | Written confirmation |
| Standard Scenario STSC-004 | Covered as BVLOS | Written confirmation |
| Search and Rescue Support | Explicit coverage | Written confirmation |
| Sparsely Populated Areas | No exclusion | Policy review |
| Night Operations | No exclusion | Policy review |
| Emergency Response | Explicit coverage | Written confirmation |

#### 8.4.3 Geographic Coverage

| Area | Coverage Requirement |
|------|---------------------|
| Canada | Primary coverage |
| British Columbia | Primary operating area |
| SSAR Operational Boundary | Explicit coverage confirmation |
| Adjacent areas (mutual aid) | Coverage verified |

### 8.5 Coverage Types

| Coverage Type | Description | Minimum |
|---------------|-------------|---------|
| **Third-Party Bodily Injury** | Injury to persons other than crew | Per policy limit |
| **Third-Party Property Damage** | Damage to property of others | Per policy limit |
| **Hull Coverage** | Physical damage to RPAS | Replacement value (if applicable) |
| **Personal Injury** | Privacy claims, trespass | Per policy limit |
| **Non-Owned Aviation** | Borrowed/rented equipment | If applicable |
| **Premises Liability** | Launch/landing sites | Per policy limit |

### 8.6 Exclusions Review

The following common exclusions must be reviewed and addressed:

| Common Exclusion | SSAR Status | Mitigation |
|------------------|-------------|------------|
| BVLOS operations | Covered by endorsement | Obtain written confirmation |
| Operations above 400' AGL | Covered by endorsement | Obtain written confirmation |
| Commercial operations | SSAR is non-profit SAR | Confirm SAR support covered |
| War/terrorism | Standard exclusion | Accept (standard) |
| Nuclear | Standard exclusion | Accept (standard) |
| Intentional acts | Standard exclusion | Accept (standard) |
| Criminal acts | Standard exclusion | Accept (standard) |
| Night operations | Must not be excluded | Verify coverage |
| Unregistered aircraft | Must comply with CAR 901.02 | Maintain registration |
| Uncertified pilots | Must comply with training | Maintain pilot records |

### 8.7 Documentation Requirements

#### 8.7.1 Required Documents

| Document | Purpose | Retention |
|----------|---------|-----------|
| Certificate of Insurance | Proof of current coverage | Current + 2 years |
| Full Policy Document | Complete terms and conditions | Current + 2 years |
| BVLOS Endorsement | Confirmation of BVLOS coverage | Current + 2 years |
| High Altitude Endorsement | Confirmation of >400' coverage | Current + 2 years |
| SAR Operations Letter | Confirmation of SAR coverage | Current + 2 years |
| Declarations Page | Coverage limits and effective dates | Current + 2 years |

#### 8.7.2 Document Accessibility

| Situation | Document Required | Location |
|-----------|-------------------|----------|
| All operations | Certificate of Insurance (copy) | Operations kit |
| Transport Canada inquiry | Full policy + certificate | Within 24 hours |
| Incident response | Full policy | Immediate access |
| Annual audit | All insurance documents | Records file |

### 8.8 Liability Management

#### 8.8.1 Pre-Flight Liability Considerations

Before each operation, the PIC must verify:

| Item | Verification |
|------|--------------|
| Insurance Current | Certificate expiry date not exceeded |
| Coverage Adequate | Operation type covered by policy |
| Geographic Coverage | Operating location covered |
| Aircraft Registered | Registration current per CAR 901.02 |
| Pilot Qualified | Meets policy requirements |

#### 8.8.2 Operational Liability Mitigation

| Mitigation | Implementation |
|------------|----------------|
| Site Survey | Identify and document hazards |
| Controlled Ground Area | Establish M1 mitigations |
| Public Notice | Use signs, pylons where appropriate |
| Documentation | Record all operations thoroughly |
| Compliance | Follow all SOPs and regulations |

### 8.9 Incident Response - Insurance Protocol

#### 8.9.1 Immediate Actions (At Scene)

| Priority | Action | Responsible |
|----------|--------|-------------|
| 1 | **SAFETY FIRST** - Secure scene, attend to injuries | PIC |
| 2 | **DO NOT ADMIT FAULT** - Avoid statements of liability | All crew |
| 3 | **DOCUMENT** - Photos, video, witness information | All crew |
| 4 | **NOTIFY** - Chief Pilot immediately | PIC |
| 5 | **PRESERVE** - Evidence, flight logs, aircraft | PIC |
| 6 | **COOPERATE** - With emergency services | PIC |

#### 8.9.2 Post-Incident Actions (Within 24 Hours)

| Action | Timeline | Responsible |
|--------|----------|-------------|
| Notify insurer | Within 24 hours | Accountable Executive |
| Complete incident report | Within 24 hours | PIC |
| Preserve all evidence | Immediately | Chief Pilot |
| Transport Canada notification (if required) | Per Section 6 reporting | Chief Pilot |
| Document witness statements | Within 48 hours | Chief Pilot |
| Secure aircraft (if applicable) | Immediately | PIC |

#### 8.9.3 Claims Process

| Step | Action | Timeline |
|------|--------|----------|
| 1 | Report to insurer via claims hotline | Within 24 hours |
| 2 | Provide initial incident report | Within 24 hours |
| 3 | Submit supporting documentation | Within 7 days |
| 4 | Cooperate with adjuster investigation | As required |
| 5 | Do not dispose of damaged equipment until authorized | Until claim closed |
| 6 | Maintain communication log with insurer | Throughout process |

#### 8.9.4 Statement Guidelines

**DO:**
- State only verified facts
- Provide factual description of events
- Cooperate with authorized investigators
- Refer legal questions to legal counsel

**DO NOT:**
- Admit fault or liability
- Speculate about causes
- Discuss fault with media or public
- Sign any documents without review
- Make statements beyond factual observations

### 8.10 Annual Insurance Review

| Review Item | Frequency | Responsible |
|-------------|-----------|-------------|
| Policy renewal | 30 days before expiry | Accountable Executive |
| Coverage adequacy | Annual | Chief Pilot |
| Fleet changes | Upon acquisition/disposal | Chief Pilot |
| Operations changes | Upon new operation type | Chief Pilot |
| Claims history review | Annual | Accountable Executive |
| Broker/carrier review | Annual | Accountable Executive |

### 8.11 Insurance Verification Checklist

Complete annually or upon policy change:

| Item | Verification | Verified By | Date |
|------|--------------|-------------|------|
| Policy in force | Certificate current | | |
| BVLOS covered | Written confirmation obtained | | |
| High altitude covered | Written confirmation obtained | | |
| SAR operations covered | Written confirmation obtained | | |
| All aircraft listed | Declarations page reviewed | | |
| Coverage limits adequate | Per Section 8.2 | | |
| No excluded operations | Exclusions reviewed | | |
| Documents filed | All docs accessible | | |

---

## 9. Document Control

### 9.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

Signatures on file. Original signed document retained per QAP-001.

### 9.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated People & Equipment Manual | Dustin Wales |
| | | | |
| | | | |

### 9.3 Document Sources

This consolidated People & Equipment Manual incorporates content from the following source documents:

| Document ID | Document Title |
|-------------|----------------|
| TRN-301 | Pilot Training Program |
| TRN-302 | Training Foundation |
| TRN-302 | Competency Assessment |
| TRN-303 | Advanced Training |
| TRN-303 | Training Records |
| TRN-304 | Training Progression |
| TRN-305 | Pilot Examiner Standards |
| PCR-001 | Pilot Competency Records |
| POL-002 | Roles & Responsibilities |
| POL-003 | Chief Pilot Policy |
| POL-004 | PPE |
| POL-009 | Insurance & Liability |
| POL-010 | Equipment Testing |
| POL-012 | Airworthiness & Mandatory Events |

---

**END OF PEOPLE & EQUIPMENT MANUAL**

*This document is part of the SSAR RPAS Operator Certificate (RPOC) documentation package.*`
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
| Review Date | March 2027 |
| Regulatory Reference | CAR 901.220, 901.56, 901.65, 901.66, Standard 922 |

---

## Table of Contents

1. [Training Program Overview](#1-training-program-overview)
2. [Crew Competency Standards](#2-crew-competency-standards)
3. [Foundation Training Program](#3-foundation-training-program)
4. [Advanced Training Program](#4-advanced-training-program)
5. [Standard Scenario Training](#5-standard-scenario-training)
6. [Visual Observer Training](#6-visual-observer-training)
7. [Trainer Qualifications](#7-trainer-qualifications)
8. [Training Progression Pathway](#8-training-progression-pathway)
9. [Competency Assessment](#9-competency-assessment)
10. [Recurrency Training](#10-recurrency-training)
11. [Operational Training Program](#11-operational-training-program)
12. [Training Records](#12-training-records)
13. [Document Control](#13-document-control)

---

## 1. Training Program Overview

### 1.1 Purpose

This Training Program Manual establishes the comprehensive training requirements, pathways, and assessment standards for all SSAR RPAS operations personnel. This manual ensures compliance with CAR 901.220 (Training Program Requirements) and provides a structured progression from initial training through operational deployment and ongoing proficiency.

### 1.2 Training Philosophy

SSAR's training philosophy is built on three principles:

1. **Safety First:** No operational pressure justifies compromising training standards
2. **Competency-Based Progression:** Advancement is based on demonstrated skill, not time served
3. **Continuous Improvement:** Training evolves with lessons learned and regulatory changes

### 1.3 Training Program Structure

| Level | Title | Operations Authorized | Requirements |
|-------|-------|----------------------|--------------|
| Trainee | Pilot Under Training | Training aircraft only (supervised) | Enrolled in Foundation Training |
| Stage 1 | Pilot (Basic) | VLOS <400' AGL | TC Basic + SSAR Foundation |
| Stage 2 | Pilot (Advanced) | VLOS + controlled airspace | TC Advanced + SSAR Advanced |
| Stage 3 | Standard Scenario | STSC-003 / STSC-004 | TC L1C + SS endorsement |
| Stage 4 | Senior Pilot | All authorized operations | All endorsements + 50 hours |
| Stage 5 | Flight Reviewer | Conduct assessments | Stage 4 + Trainer certification |

### 1.4 Regulatory Compliance

All training complies with:
- **CAR 901.220** - Training Program Requirements
- **CAR 901.56/901.65** - Recency Requirements
- **CAR 901.66** - Certificate Access Requirements
- **Standard 922** - RPAS Safety Assurance

---

## 2. Crew Competency Standards

### 2.1 General Crew Requirements

| Requirement | Standard |
|-------------|----------|
| Age | Minimum 18 years |
| Compliance | Strict adherence to SSAR RPAS Manual and CARs |
| Fitness for Duty | Physically and mentally fit to perform designated role |
| Medical Condition | Must not operate if any illness, injury, or stress impairs ability |

### 2.2 Fatigue Management - CAR 901.29

SSAR enforces the following duty limitations (exceeding CAR 901.29 minimums):

| Requirement | Standard |
|-------------|----------|
| **Minimum Rest** | 10 hours of rest prior to reporting for duty |
| **Maximum Duty** | No more than 10 consecutive hours without 10-hour rest break |
| **Operational Breaks** | No more than 2 hours continuous ops without 15-minute break |

### 2.3 Substance Use - Zero Tolerance (CAR 901.19)

| Substance | Requirement |
|-----------|-------------|
| **Alcohol** | 12-hour "bottle-to-throttle" rule; must not operate if consumed within 12 hours or still under influence |
| **Drugs** | Must not use any drug (prescription, OTC, or illicit) that impairs faculties or jeopardizes safety |

### 2.4 IMSAFE Self-Assessment

Before every operation, all crew members must complete the IMSAFE self-assessment:

| Letter | Factor | Question |
|--------|--------|----------|
| **I** | Illness | Am I suffering from any illness or symptom? |
| **M** | Medication | Am I taking any medication that could impair my performance? |
| **S** | Stress | Am I under psychological pressure (work, family, financial)? |
| **A** | Alcohol | Have I consumed alcohol within the last 12 hours? |
| **F** | Fatigue | Have I had adequate sleep and rest? Am I fatigued? |
| **E** | Eating | Have I eaten and am I properly hydrated? |

> **Any "YES" answer to illness, medication impairment, alcohol, or significant fatigue is a NO-GO.**

### 2.5 Certification Requirements

#### 2.5.1 Pilot in Command (PIC)

| Certification | Requirement |
|---------------|-------------|
| Basic Operations | Required for all pilots (including Micro-RPAS <250g per SSAR standards) |
| Advanced Operations | Required for controlled airspace, near people, or SFOC operations |
| Recency | Maintain per CAR 901.56/901.65 |
| Certificate Access | Physical or digital access during all operations (CAR 901.66) |
| Radio | Valid ROC-A required for aeronautical radio use |

#### 2.5.2 Visual Observer (VO)

| Operation Type | Certification Requirement |
|----------------|--------------------------|
| Standard VLOS | SSAR Field VO Training module (minimum) |
| EVLOS Operations | Valid RPAS Pilot Certificate (Basic or Advanced) |

#### 2.5.3 Emergency Medical

> **At least one crew member present at the launch site must hold current Emergency First Aid & CPR certification.**

---

## 3. Foundation Training Program

### 3.1 Purpose

Foundation Training builds core competencies in aircraft handling, site surveys, team dynamics, and procedural execution, preparing pilots for operational deployments under the SSAR RPOC.

### 3.2 Prerequisites

- Minimum 18 years of age
- SSAR member in good standing
- Completed SSAR orientation
- Transport Canada Basic or Advanced RPAS Certificate (or enrolled)

### 3.3 Learning Objectives

Upon completion of Foundation Training, trainees will be able to:

- Conduct thorough site surveys to identify operational hazards and risks
- Apply general and emergency procedures from the Operations Manual
- Demonstrate proficiency in essential flight maneuvers
- Perform any team role (PIC, VO, Communications, Team Lead) competently
- Communicate effectively within RPAS teams
- Execute sterile cockpit discipline

### 3.4 Foundation Training Modules

| Module | Title | Duration | Content |
|--------|-------|----------|---------|
| **Class 1** | Introduction & Foundations | 3 hours | RPAS systems overview, team roles, regulations, basic flight skills introduction |
| **Class 2** | Practical Application | 3 hours | Site survey deep dive, simplified flight planning, hands-on flying |
| **Class 3** | Procedures & Role Play | 3 hours | Procedural execution, emergency response drills, crew resource management |
| **Class 4** | Operational Readiness | 3 hours | AirData integration, NAV CANADA flight planning, realistic scenario execution |

### 3.5 Class 1: Introduction & Foundations

**Duration:** 3 hours (1.5 hours ground, 1.5 hours practical)

#### Ground School Topics
- SSAR RPAS program overview and mission
- Canadian Aviation Regulations Part IX overview
- RPAS components and systems
- Team roles and responsibilities
- Safety culture and reporting

#### Practical Exercises
- Aircraft familiarization
- Controller setup and pairing
- Basic hover exercises
- Introduction to pre-flight checks

#### Assessment
- Verbal quiz on regulations and team roles
- Demonstrate safe aircraft handling

---

### 3.6 Class 2: Practical Application

**Duration:** 3 hours (1 hour ground, 2 hours practical)

#### Ground School Topics
- Site survey methodology (CAR 901.27)
- Hazard identification and risk assessment
- Airspace classification and requirements
- Weather assessment basics

#### Practical Exercises
- Conduct a mock Rapid Site Survey
- Flight planning exercise
- Controlled flight patterns (box, figure-8)
- Position hold and altitude control

#### Assessment
- Complete site survey form correctly
- Execute controlled flight patterns

---

### 3.7 Class 3: Procedures & Role Play

**Duration:** 3 hours (1 hour ground, 2 hours practical)

#### Ground School Topics
- Emergency procedures overview
- Crew Resource Management (CRM)
- Communication protocols
- Sterile cockpit discipline

#### Practical Exercises
- Emergency response drills:
  - Simulated lost link
  - Simulated GPS degradation
  - Simulated low battery
- Role rotation: PIC, VO, Communications
- Closed-loop communication practice

#### Assessment
- Correct emergency procedure execution
- Effective crew communication

---

### 3.8 Class 4: Operational Readiness

**Duration:** 3 hours (1 hour ground, 2 hours practical)

#### Ground School Topics
- AirData flight logging and review
- NAV CANADA notification requirements
- Mission planning for SAR operations
- Pre-flight briefing delivery

#### Practical Exercises
- Complete flight log in AirData
- Deliver a pre-flight briefing
- Execute a realistic SAR scenario (simulated search)
- Complete debrief

#### Assessment
- Accurate AirData logging
- Professional briefing delivery
- Successful scenario completion

---

### 3.9 Foundation Flight Maneuvers (Detailed)

All flights at this stage are conducted under manual control within a designated operational area (column of airspace under 400' AGL, VLOS maintained).

#### 3.9.1 Manual Take-off, Hover, and Landing

| Step | Description |
|------|-------------|
| 1 | Position RPAS on launch site so that pitching forward moves directly away from PIC |
| 2 | Arm the RPAS |
| 3 | Gradually increase throttle until lift-off |
| 4 | Increase altitude to 5 meters (starting location for subsequent maneuvers) |
| 5 | Hover the RPAS for minimum 30 seconds |
| 6 | Descend and land safely |

#### 3.9.2 Attitude and Movement Control

Use short manual inputs (<2 seconds) for pitch, roll, throttle, and yaw:

| Input | Direction 1 | Direction 2 |
|-------|-------------|-------------|
| Pitch | Forward | Backward |
| Roll | Left | Right |
| Throttle | Up | Down |
| Yaw | Left | Right |

Perform inputs individually and sequentially to develop muscle memory and control precision.

#### 3.9.3 Vertical, Lateral, and Longitudinal Flight

| Requirement | Standard |
|-------------|----------|
| Orientation | Pitching forward moves RPAS directly away from PIC |
| Control Type | Longer manual inputs |
| Minimum Horizontal Distance | 50 meters each direction |
| Minimum Vertical Distance | 30 meters altitude increase |
| Progressive Increase | Add 50m increments up to 200m as confidence grows |

Inputs should be sequential and individual, moving in both directions.

#### 3.9.4 Translating Flight

Combine pitch and roll inputs to fly the RPAS along a diagonal path:

- Fly out and back to distance of at least 50 meters
- Perform in both roll directions (left diagonal and right diagonal)
- Develop coordinated control inputs

#### 3.9.5 RPAS Orientation

| Step | Description |
|------|-------------|
| 1 | At home location, yaw RPAS 90 degrees |
| 2 | Perform Lateral and Longitudinal Flight maneuvers |
| 3 | Repeat with two additional 90-degree yaw rotations |
| 4 | Enhances situational awareness from different orientations |

#### 3.9.6 Point of Interest (POI)

| Step | Description |
|------|-------------|
| 1 | Establish a target on test site (e.g., brightly colored traffic cone) |
| 2 | Fly a path around target, maintaining constant distance |
| 3 | Keep camera pointed at target by combining roll and yaw inputs |
| 4 | PIC relies on VO communication while monitoring ground control screen |

This maneuver simulates deviation during flight plan to avoid obstacles or monitor locations from multiple angles.

#### 3.9.7 Circuit Flight Path

| Parameter | Standard |
|-----------|----------|
| Circuit Shape | Rectangular - 50m narrow side, 100m long side |
| Markers | Pylons or markers at all four corners |
| Takeoff Position | Middle of one long side |
| Circuit Direction | Left or right-handed (establish before flight) |
| Pattern Altitude | 30 meters AGL |

**Execution:**
1. Takeoff to 5m hover
2. Climb at ≤45° angle to first corner, level at 30m
3. Complete circuit with coordinated turns at each corner
4. On final leg, descend at ≤45° angle back to hover above launch
5. Land

RPAS orientation changes with each leg, giving practice with varying perspectives.

#### 3.9.8 Return to Home Test and Recovery

| Step | Description |
|------|-------------|
| 1 | Fly RPAS 200 meters from launch location |
| 2 | Initiate RTH function |
| 3 | Allow RPAS to return under automated control |
| 4 | When 50-100m from launch, cancel RTH and take manual control |
| 5 | Repeat, allowing RPAS to complete full RTH and auto-land |

#### 3.9.9 Emergency Procedure Training

Four emergency scenarios are conducted during Foundation Training:

| Scenario | Type | Description |
|----------|------|-------------|
| 1 | Random Selection | Trainer selects from emergency procedures list |
| 2 | Random Selection | Different scenario from procedures list |
| 3 | **MANDATORY** | Fly-away scenario with FIC call simulation |
| 4 | **MANDATORY** | DESCEND Protocol execution |

Refer to Safety & Emergency Manual Section 2 for detailed emergency procedures.

---

### 3.10 Foundation Flight Review

The Flight Review is the culminating assessment for Foundation Training.

#### Evaluation Areas

| Area | Criteria | Standard |
|------|----------|----------|
| Risk/Hazard Identification | Identify environmental, airspace, and equipment hazards | Identifies all major hazards |
| Mitigation & Control | Develop and implement risk controls | Appropriate controls selected |
| Flight Proficiency | Manual takeoff, hover, landing, circuit flight | Safe and smooth execution |
| Emergency Response | Response to simulated emergency | Correct procedure, timely response |
| Communication | Closed-loop, professional communication | Clear and effective |

#### Grading Scale

| Score | Rating | Description |
|-------|--------|-------------|
| 4 | Exemplary | Exceeds standard; could instruct others |
| 3 | Competent | Meets standard; safe, effective performance |
| 2 | Developing | Below standard; requires additional practice |
| 1 | Unsatisfactory | Well below standard; safety concerns |

> **Pass Requirement:** Minimum score of 3 in all areas.

#### Reassessment

If a trainee does not meet the required standard:
1. Trainer provides specific feedback
2. Additional practice scheduled (minimum 1 week)
3. Reassessment within 14 days
4. Trainee may revisit any Foundation class at trainer's discretion

---

### 3.11 Foundation Progression Outcome

> Upon successful completion of Foundation Training and flight review, pilots are authorized to operate the training aircraft they were trained on under the SSAR RPOC. Pilots may then progress to Advanced Training for operational equipment authorization.

---

## 4. Advanced Training Program

### 4.1 Purpose

Advanced Training develops expertise with operational aircraft (DJI M30T, DJI Matrice 4TD) and prepares pilots for complex SAR missions including night operations, adverse weather, terrain-based searching, and EVLOS/BVLOS operations.

### 4.2 Prerequisites

- Successful completion of Foundation Training and Flight Review
- Current authorization to operate training aircraft under SSAR RPOC
- Transport Canada Advanced RPAS Certificate
- Fitness for duty (medical, mental, fatigue management requirements met)

### 4.3 Learning Objectives

Upon completion of Advanced Training, pilots will be able to:

- Operate assigned operational RPAS types with full mission proficiency
- Execute complex SAR missions in challenging environments
- Manage dynamic risk injects and unexpected operational changes
- Conduct EVLOS operations using daisy-chained Visual Observers
- Perform BVLOS operations in low-risk environments
- Maintain situational awareness under high-stress conditions

### 4.4 Aircraft-Specific Training

Pilots must complete type-specific training for each operational aircraft:

| Aircraft | Required Training |
|----------|-------------------|
| **DJI M30T** | M30T systems, TB30 battery management, thermal/zoom operation, BS30 charging station |
| **DJI Matrice 4TD** | M4TD systems, battery management, thermal/tele operation, O4 transmission |

### 4.5 Flight Hour Requirements

| Requirement | Standard |
|-------------|----------|
| **Minimum Hours** | 5 hours flight time per RPAS type |
| **Supervised Flights** | Include flights with certified trainer |
| **Unsupervised Flights** | AirData-logged, clearly identified as training, reviewed by trainer |
| **Proficiency** | Must maintain throughout accumulation (trainer may require additional practice) |

### 4.6 Scenario-Based Training

Pilots must complete scenario training including:

#### Emergency Scenarios
- Equipment failure (motor, sensor, gimbal)
- Loss of link
- GPS degradation/failure
- Battery emergency
- Airspace conflict

#### Dynamic Risk Injects
- Weather changes during operation
- Unauthorized aircraft entry
- Objective/mission changes
- Communication failures

#### Complex Environments
- Night operations (if authorized)
- Rain/adverse weather
- Mountainous terrain
- High altitude operations

### 4.7 Practical Evaluation

The trainer will assess the pilot on:

| Assessment Area | Criteria |
|-----------------|----------|
| Mission Execution | Execute mission objectives efficiently and safely |
| Risk Management | Proactive identification and mitigation of hazards |
| Team Coordination | Effective communication and resource management |
| Emergency Response | Appropriate reaction to simulated emergencies |

The trainer will review flight logs (AirData) to verify:
1. Completion of minimum 5 flight hours
2. Consistency of flight performance across sessions
3. Appropriate progression through training scenarios

### 4.8 Advanced Progression Outcome

> Upon successful completion of Advanced Training and trainer sign-off, pilots are cleared to operate the specific RPAS type in live operational missions under the SSAR RPOC. Additional RPAS types require separate Advanced Training and sign-off.

---

## 5. Standard Scenario Training

### 5.1 STSC-003 High Altitude VLOS Training

**Duration:** 12 hours total

| Topic | Duration | Competency Code |
|-------|----------|-----------------|
| ATC Coordination Procedures | 3 hours | ATC-01 |
| High Altitude Weather | 2 hours | WX-01 |
| Airspace and Traffic | 2 hours | AS-01 |
| Emergency Procedures | 2 hours | EM-01 |
| SORA for High Altitude | 3 hours | SORA-01 |

#### Learning Objectives
- Execute proper ATC coordination per Standard 922
- Assess altitude-specific weather hazards
- Identify and avoid traffic at altitude
- Execute emergency descent procedure
- Apply SORA methodology to high-altitude operations

### 5.2 STSC-004 BVLOS Training

**Duration:** 16 hours total

| Topic | Duration | Competency Code |
|-------|----------|-----------------|
| SORA for BVLOS | 4 hours | SORA-02 |
| Lost Link Procedures | 2 hours | LL-01 |
| Navigation Without VLOS | 3 hours | NAV-01 |
| Emergency Procedures BVLOS | 3 hours | EM-02 |
| Population Density Assessment | 2 hours | PD-01 |
| Controlled Ground Area | 2 hours | CGA-01 |

#### Learning Objectives
- Apply SORA methodology to BVLOS operations
- Execute lost link response procedures
- Navigate using telemetry without visual reference
- Respond to emergencies during BVLOS
- Verify population density requirements (<25 people/km²)
- Establish and maintain controlled ground area (M1)

### 5.3 Time-Critical SAR Operations Training

**Duration:** 2 hours

All pilots qualified for SAR operations must complete training on time-critical scenario selection.

#### Learning Objectives
- Understand 24-hour ATC notification requirements for STSC-003
- Recognize when time-critical SAR activation requires STSC-004 fallback
- Apply scenario selection decision matrix during Rapid Site Survey
- Plan and execute effective search under 400' AGL constraint

#### Module Content

| Module | Duration | Content |
|--------|----------|---------|
| Regulatory Framework | 30 min | STSC-003 ATC timeline requirements; STSC-004 parameters; legal implications |
| Scenario Selection | 30 min | Assessing notification feasibility; decision matrix; Rapid Site Survey integration |
| Terrain-Following Operations | 30 min | Contour search patterns; consistent AGL in variable terrain; RTH planning |
| Sub-400' Search Effectiveness | 30 min | Thermal detection at 80-120m AGL; modified track spacing; pattern adaptation |

#### Assessment
- Scenario-based evaluation: Correctly identify appropriate scenario given SAR activation details
- Practical demonstration: Execute terrain-following search under 400' AGL
- Crew briefing: Deliver time-critical operations brief to simulated crew

---

## 6. Visual Observer Training

### 6.1 Field VO Training Module

**Duration:** 2 hours

Required for all Visual Observers conducting VLOS operations.

#### Content
- VO role and responsibilities
- Visual scanning techniques
- Communication protocols
- Threat identification and callouts
- Sterile cockpit discipline
- Emergency procedures awareness

### 6.2 Rapid VO Training (On-Site)

For non-RPAS SSAR members acting as VO during operations:

| Item | Training Point |
|------|----------------|
| Your Role | "Your job is to watch the sky, not the drone. Tell me if you see or hear any aircraft." |
| Scanning | "Look in all directions, including behind us. Listen for engine noise." |
| Communication | "If you see anything, say 'TRAFFIC' and point. I'll handle the rest." |
| Emergency | "If I say 'DESCEND,' step back immediately. The drone is coming down fast." |

### 6.3 EVLOS Visual Observer Qualification

VOs participating in Extended Visual Line of Sight operations must:
- Hold valid RPAS Pilot Certificate (Basic or Advanced)
- Complete EVLOS-specific training
- Demonstrate visual handover protocol proficiency
- Pass practical assessment

---

## 7. Trainer Qualifications

### 7.1 Certified Trainer Requirements

Only personnel meeting the following criteria may serve as certified SSAR RPAS trainers:

| Requirement | Standard | Verification |
|-------------|----------|--------------|
| Flight Hours | Minimum 50 hours logged flight time on SSAR operational equipment | AirData logs |
| Operational Experience | Minimum 1 year as operational SSAR RPAS pilot | Personnel records |
| Certification | Valid Advanced RPAS Operator Certificate | TC certificate |
| Scenario Endorsements | All Standard Scenario endorsements (STSC-003, STSC-004) | Endorsement records |
| Risk Proficiency | Demonstrated proficiency in risk/hazard identification and control | Practical assessment |
| Training | Complete SSAR Train-the-Trainer module | Training record |
| Currency | Maintain trainer recurrency requirements | Currency tracking |
| Character | Good standing within SSAR, no serious safety violations | AE review |

### 7.2 Train-the-Trainer Module

**Duration:** 8 hours (minimum)
**Prerequisites:** Meet all Section 7.1 requirements except this module
**Delivery:** Operations Manager or designated senior trainer
**Assessment:** Practical teaching demonstration with evaluation

#### 7.2.1 Module 1: Adult Learning Principles (2 hours)

**Learning Objectives:**
- Understand how adults learn differently from children
- Apply adult learning theory to RPAS training
- Recognize individual learning styles and adapt instruction

**Content:**

| Topic | Duration | Key Points |
|-------|----------|------------|
| Andragogy vs Pedagogy | 30 min | Self-direction, experience-based, problem-centered, immediate application |
| Learning Styles | 30 min | Visual, auditory, kinesthetic learners; adapting delivery |
| Motivation Factors | 30 min | Intrinsic vs extrinsic motivation, relevance, competence, autonomy |
| Barriers to Learning | 30 min | Prior experience (positive/negative), anxiety, time pressure, physical factors |

**Practical Exercise:** Identify learning style preferences of current SSAR pilots; design approach for each type.

#### 7.2.2 Module 2: Instructional Techniques (2 hours)

**Learning Objectives:**
- Structure effective training sessions
- Demonstrate skills progressively
- Manage the training environment

**Content:**

| Topic | Duration | Key Points |
|-------|----------|------------|
| Tell-Show-Do-Review | 30 min | Four-step instructional method for skill training |
| Briefing Structure | 30 min | Objectives, content, assessment criteria, questions |
| Demonstration Techniques | 30 min | Positioning, narration, pace, common errors to highlight |
| Training Environment | 30 min | Distraction management, safety, equipment readiness |

**Tell-Show-Do-Review Method:**

| Step | Trainer Action | Trainee Action |
|------|----------------|----------------|
| **TELL** | Explain the skill, procedure, or concept | Listen, ask clarifying questions |
| **SHOW** | Demonstrate while narrating actions | Observe, take notes if needed |
| **DO** | Observe and coach | Perform the skill with guidance |
| **REVIEW** | Provide feedback, identify areas for improvement | Self-assess, ask questions |

#### 7.2.3 Module 3: Assessment Techniques (2 hours)

**Learning Objectives:**
- Design fair, consistent assessments
- Evaluate performance objectively
- Document assessment results properly

**Content:**

| Topic | Duration | Key Points |
|-------|----------|------------|
| Assessment Types | 30 min | Formative (during training), summative (end of training), practical, oral, written |
| Competency Standards | 30 min | Using rating scales (1-4), defining "meets standard," calibrating assessors |
| Observation Skills | 30 min | What to watch for, common errors, safety indicators |
| Documentation | 30 min | Recording results, providing evidence, maintaining objectivity |

**Assessment Best Practices:**

| Practice | Description |
|----------|-------------|
| Pre-brief criteria | Always explain what will be assessed before the exercise |
| Observe silently | Minimize intervention during assessment (unless safety concern) |
| Take notes | Document specific observations, not just pass/fail |
| Be consistent | Apply same standard to all trainees |
| Assess against standard | Compare to published standard, not to other trainees |

#### 7.2.4 Module 4: Feedback Delivery (1 hour)

**Learning Objectives:**
- Deliver constructive feedback effectively
- Handle difficult conversations professionally
- Motivate trainees for continued improvement

**Content:**

| Topic | Duration | Key Points |
|-------|----------|------------|
| Feedback Principles | 20 min | Timely, specific, balanced, actionable |
| The Feedback Model | 20 min | Situation-Behavior-Impact (SBI) model |
| Difficult Conversations | 20 min | Underperformance, attitude issues, failure notification |

**SBI Feedback Model:**

| Component | Description | Example |
|-----------|-------------|---------|
| **Situation** | Describe the specific situation | "During the emergency landing drill today..." |
| **Behavior** | Describe the observed behavior | "...you forgot to announce 'Emergency Landing' to the crew before descending." |
| **Impact** | Explain the impact of the behavior | "This meant the VO wasn't prepared and couldn't clear the landing zone." |
| **Forward** | Suggest improvement | "Next time, ensure the announcement is the first action before any control inputs." |

#### 7.2.5 Module 5: Documentation Requirements (1 hour)

**Learning Objectives:**
- Complete all required training documentation
- Maintain accurate, auditable records
- Understand retention requirements

**Content:**

| Document | When Completed | Retention |
|----------|----------------|-----------|
| Training Session Log | After each session | 5 years |
| Competency Assessment Form | After each assessment | 5 years |
| Flight Review Record | After flight review | 5 years |
| Endorsement Record | Upon endorsement | Duration + 2 years |
| Remediation Plan | When trainee needs additional work | 5 years |
| Sign-Off Authorization | Upon progression | 5 years |

**Documentation Standards:**
- All entries dated and signed by trainer
- Specific observations recorded, not just checkmarks
- Any deficiencies clearly described with remediation plan
- Electronic records backed up; paper records secured

#### 7.2.6 Module 6: Practical Teaching Exercise (2 hours)

**Learning Objectives:**
- Demonstrate instructional competence
- Receive feedback on teaching effectiveness
- Identify personal development areas

**Exercise Structure:**

| Phase | Duration | Activity |
|-------|----------|----------|
| Preparation | 30 min | Candidate prepares a 15-minute training segment on assigned topic |
| Delivery | 20 min | Candidate delivers training to volunteer trainee(s) |
| Assessment | 10 min | Assessor observes and documents performance |
| Feedback | 20 min | Assessor provides detailed feedback using SBI model |
| Discussion | 20 min | Review of overall readiness, areas for development |
| Decision | 20 min | Pass/fail determination, certification issuance |

**Practical Assessment Criteria:**

| Area | Criteria | Standard |
|------|----------|----------|
| Preparation | Material organized, objectives clear | All materials ready, objectives stated |
| Delivery | Clear communication, appropriate pace | Trainee understands, no confusion |
| Demonstration | Proper technique, good positioning | Trainee can observe all key elements |
| Engagement | Questions encouraged, trainee involved | Active participation achieved |
| Assessment | Observes trainee attempt, provides feedback | Correct errors identified, feedback constructive |
| Safety | Maintains safety throughout | No safety concerns during training |

### 7.3 Trainer Designation Process

| Step | Action | Responsible | Documentation |
|------|--------|-------------|---------------|
| 1 | Candidate meets all prerequisites (Section 7.1) | Candidate | Self-assessment |
| 2 | Candidate requests trainer designation | Candidate | Written request |
| 3 | Operations Manager verifies prerequisites | Operations Manager | Verification checklist |
| 4 | Candidate completes Train-the-Trainer module | Candidate | Training record |
| 5 | Candidate passes practical teaching exercise | Assessor | Assessment form |
| 6 | Accountable Executive approves designation | AE | Designation letter |
| 7 | Trainer added to authorized trainer list | Operations Manager | Trainer registry |

### 7.4 Trainer Recurrency

| Requirement | Standard | Verification |
|-------------|----------|--------------|
| Flight Currency | Minimum 2 hours per month | AirData logs |
| Training Activity | Conduct training at least quarterly | Training records |
| Pilot Recurrency | Maintain all pilot recurrency requirements (Section 10) | Currency tracking |
| Evaluation | Operations Manager evaluation every 24 months | Evaluation record |
| Development | Attend at least one professional development activity annually | Training record |

#### 7.4.1 Trainer Evaluation (24-Month)

Every 24 months, the Operations Manager evaluates each trainer on:

| Area | Assessment Method |
|------|-------------------|
| Training Effectiveness | Review of trainee outcomes, feedback from trainees |
| Documentation Quality | Audit of training records for completeness and accuracy |
| Currency Maintenance | Verification of flight hours and recurrency requirements |
| Safety Record | Review of any safety incidents during training |
| Professional Development | Evidence of continued learning and development |
| Trainee Feedback | Anonymous feedback from trainees (if available) |

### 7.5 Trainer Authority and Responsibilities

#### 7.5.1 Authority

Trainers have authority to:
- Evaluate and sign off pilots for progression through training stages
- Place pilots on training hold for proficiency concerns
- Require additional training, scenarios, or flight hours
- Ground pilots pending remediation for safety concerns
- Recommend pilots for Flight Reviewer designation
- Adapt training delivery to individual trainee needs
- Determine readiness for assessment

#### 7.5.2 Responsibilities

Trainers are responsible for:
- Maintaining personal proficiency at the highest level
- Preparing thoroughly for each training session
- Creating a supportive learning environment
- Providing honest, constructive feedback
- Documenting all training accurately and completely
- Reporting any safety concerns to Operations Manager
- Mentoring developing pilots beyond formal training
- Contributing to training program improvement

#### 7.5.3 Limitations

Trainers may NOT:
- Assess or sign off family members or close personal relationships (conflict of interest)
- Conduct training while fatigued, ill, or otherwise unfit
- Lower standards to pass a struggling trainee
- Provide endorsements without required documentation
- Conduct training outside their own currency/endorsement scope

### 7.6 Flight Reviewer Designation

Flight Reviewers are senior trainers authorized to conduct formal proficiency assessments and issue endorsements. Flight Reviewer designation requires:

| Requirement | Standard |
|-------------|----------|
| Trainer Status | Current certified trainer for minimum 12 months |
| Training Conducted | Successfully trained minimum 5 pilots to operational status |
| Total Flight Hours | Minimum 100 hours |
| All Endorsements | Current STSC-003 and STSC-004 endorsements |
| Additional Training | Complete Flight Reviewer standardization |
| AE Designation | Written designation from Accountable Executive |

---

## 8. Training Progression Pathway

### 8.1 Pathway Overview

\`\`\`
Foundation Training (4-6 weeks)
        ↓
Foundation Flight Review
        ↓
Advanced Training (4-8 weeks per aircraft type)
        ↓
Trainer Sign-Off
        ↓
Operational Authorization
        ↓
Standard Scenario Training (optional progression)
        ↓
Senior Pilot / Flight Reviewer (experience-based)
\`\`\`

### 8.2 Foundation Training Progression

**Criteria for Advancement:**

| Criterion | Requirement |
|-----------|-------------|
| Attendance | 100% attendance in all four Foundation Classes |
| Engagement | Active participation in classroom and exercises |
| Knowledge | Demonstrated understanding of Operations Manual |
| Practical Competency | Safe execution of required flight maneuvers |

**Outcome:**

| Result | Action |
|--------|--------|
| Successful | Authorization to operate training aircraft |
| Unsuccessful | Additional practice + reassessment within 14 days |

### 8.3 Advanced Training Progression

| Outcome | Action |
|---------|--------|
| Successful | Written sign-off for aircraft type; cleared for live ops |
| Unsuccessful | Written feedback; scheduled remediation (min 2 hours) |

### 8.4 Hold Points

| Hold Point | Trigger | Resolution |
|------------|---------|------------|
| Foundation Hold | Does not meet Flight Review standards | Feedback, additional practice (min 1 week), reassessment within 14 days |
| Advanced Hold | Does not meet trainer sign-off standards | Written feedback, additional scenarios/hours (min 2 hours), re-evaluation |
| Recurring Hold | Fails reassessment twice | Operations Manager meeting to assess program suitability |

### 8.5 Expected Timeline

| Phase | Duration |
|-------|----------|
| Foundation Training | 4-6 weeks (one class per week + flight review prep) |
| Advanced Training | 4-8 weeks per aircraft type |
| **Total Time to Operational** | **8-14 weeks** for a single aircraft type |

---

## 9. Competency Assessment

### 9.1 Assessment Categories

Pilots must demonstrate competency in:
- Ground School Knowledge
- Flight Skills (VLOS)
- STSC-003 Operations (if applicable)
- STSC-004 Operations (if applicable)
- Emergency Procedures
- SAR Operations

### 9.2 Knowledge Assessment

| Topic | Minimum Score | Assessment Method |
|-------|---------------|-------------------|
| Canadian Aviation Regulations Part IX | 80% | Written exam |
| Standard 922 requirements | 80% | Written exam |
| STSC-003 & STSC-004 requirements | 85% | Written exam |
| JARUS SORA methodology | 80% | Written exam |
| Airspace classification | 85% | Written exam |
| Weather interpretation | 80% | Written + practical |
| Aircraft systems (M30T, M4TD) | 85% | Written + practical |
| Emergency procedures | 90% | Written + practical |

### 9.3 Flight Skills Assessment

| Maneuver | Standard | Tolerance |
|----------|----------|-----------|
| Takeoff and hover | Stable hover at 2m AGL | ±0.5m |
| Precision landing | Land within marked area | ±0.5m |
| Rectangular pattern | Maintain consistent spacing | ±2m |
| Figure-8 pattern | Smooth coordinated turns | Continuous motion |
| Altitude control | Maintain assigned altitude | ±2m |
| Position hold | Maintain position in wind | ±1m |
| Obstacle avoidance | Safe navigation | Min 3m clearance |
| Return to home | Accurate RTH execution | ±2m landing |

### 9.4 Emergency Procedures Assessment

| Emergency | Required Response | Assessment Method |
|-----------|-------------------|-------------------|
| Flyaway | Execute RTH or manual intervention | Scenario drill |
| Lost link | Monitor for auto-recovery/RTH | Scenario drill |
| Low battery | Execute immediate recovery | Scenario drill |
| Motor failure | Controlled descent to safe area | Discussion + drill |
| GPS failure | Switch to ATTI mode, manual return | Scenario drill |
| Airspace incursion | Immediate land or avoid | Scenario drill |

---

## 10. Recurrency Training

### 10.1 Currency Requirements

| Requirement | Period | Standard |
|-------------|--------|----------|
| General Flight Currency | 90 days | Minimum 3 flights |
| Aircraft Type Currency | 90 days | 1 flight per type |
| **Monthly Flight Hours** | 30 days | **1 hour per aircraft type** |
| STSC-003 Currency | 6 months | 1 high altitude operation |
| STSC-004 Currency | 6 months | 1 BVLOS operation (min 2 NM) |
| Annual Proficiency Check | 12 months | Flight Reviewer assessment |
| Recurrent Ground Training | 12 months | 4 hours covering updates, incidents, refresher |

### 10.2 Quarterly Scenario Training

Every quarter, pilots must complete:
- Minimum 1 emergency scenario drill
- Review of any incidents/lessons learned from the quarter
- Refresher on any procedural changes

### 10.3 Annual Proficiency Check

| Element | Method | Duration |
|---------|--------|----------|
| Regulatory knowledge | Oral | 30 min |
| SMS knowledge | Oral | 15 min |
| Emergency procedures | Oral + demonstration | 30 min |
| Pre-flight inspection | Demonstration | 15 min |
| Normal operations | Flight | 30 min |
| Emergency response | Simulated | 15 min |

### 10.4 Loss of Currency

| Lapse Period | Reinstatement Requirement |
|--------------|---------------------------|
| 90 days - 6 months | 2 supervised flights with certified trainer |
| **6 months+** | **Complete full Advanced Training program for aircraft type** |

### 10.5 Proficiency Concerns

> If a trainer identifies significant performance issues during recurrent training (e.g., poor risk assessment, erratic control inputs), the pilot may be grounded pending additional training or medical/fitness evaluation.

---

## 11. Operational Training Program

### 11.1 Purpose

Once pilots complete Foundation and Advanced Training and are operationally certified, they enter the Operational Training Program. This ongoing training maintains proficiency, develops specialized SAR skills, and ensures readiness for the full range of SSAR RPAS mission profiles.

### 11.2 Training Cadence

| Requirement | Standard |
|-------------|----------|
| Training Frequency | Every 2 weeks |
| Session Duration | 2-3 hours |
| Annual Flight Hours | Minimum 20 hours |
| Summit Events | 2 per year (Spring and Fall) |

### 11.3 Scenario Training Categories

Operational training covers the following scenario categories:

#### 11.3.1 Search Pattern Training

| Scenario Type | Description | Skills Developed |
|---------------|-------------|------------------|
| Grid Searches | Systematic grid patterns with light/microphone | Equipment gathering, checklist execution |
| Expanding Square | Progressive outward search from datum point | Pattern discipline, coverage verification |
| Linear Trail Searches | Following trails, roads, shorelines | Overlap, continuity, handoff procedures |
| Terrain-Following | Contour searches in mountainous terrain | AGL maintenance, obstacle awareness |

#### 11.3.2 Environment-Specific Training

| Environment | Training Focus | Equipment |
|-------------|----------------|-----------|
| Open Terrain | Basic patterns, altitude management | M30T, M4TD |
| Light Canopy | Below-canopy searching, obstacle avoidance | M30T, M4TD |
| Dense Canopy | Hidden subject detection, thermal signatures | M30T (thermal) |
| Urban Areas | Motion-based searching, lost person profiles | M30T, M4TD |
| Riverbank/Shoreline | Water proximity ops, current awareness | M30T, M4TD |
| Canyon | Confined space operations, signal management | M30T, M4TD |
| Alpine | High altitude reconnaissance, weather assessment | M30T, M4TD |
| Steep Terrain/Cliffs | Proximity flying, face reconnaissance | M30T, M4TD |

#### 11.3.3 Night Operations Training

| Scenario | Description | Skills Developed |
|----------|-------------|------------------|
| Low-Light Ops | Transition from daylight to darkness | Adaptation, thermal reliance |
| Night Visual + Thermal | Dual-sensor searching | Sensor switching, confirmation techniques |
| Urban Night Ops | Lost person scenarios in developed areas | Light management, motion detection |
| Difficult Terrain Night | Night ops in challenging terrain | Spatial awareness, thermal interpretation |

#### 11.3.4 Integration Training

| Integration Type | Description | Coordination Required |
|------------------|-------------|----------------------|
| Ground SAR Coordination | Joint ops with ground searchers | Radio comms, tasking |
| Rope Rescue Integration | High angle scenarios, plum lines | Safety protocols, positioning |
| Live Tasking Exercises | Real-time decision making | Comms, ICS integration |

#### 11.3.5 Specialized Scenarios

| Scenario | Description | Application |
|----------|-------------|-------------|
| Paragliding Incidents | Face reconnaissance, subject location | Chief area, cliffs |
| Waterfall/Falls Ops | Steep terrain near water features | Shannon Falls, Crooked Falls |
| Frequent Call-Area Refreshers | Familiarization with common response areas | Murrin, Shannon Falls, etc. |

### 11.4 Seasonal Training Focus

| Season | Focus Areas |
|--------|-------------|
| **Winter (Jan-Feb)** | SOPs review, team goals, certifications, scenario integration with GSAR |
| **Spring (Mar-May)** | Location familiarization, dense canopy, riverbank, canyon, rope rescue integration |
| **Summer (Jun-Aug)** | Trail searches, steep terrain, proximity flying, alpine reconnaissance |
| **Fall (Sep-Nov)** | Advanced night ops, integrated exercises, cold weather prep |

### 11.5 Annual Summit Events

#### Spring Drone Summit (May)

Full-day training event covering:
1. Advanced SAR scenarios
2. BCSARA-aligned tasking
3. Inter-team knowledge sharing
4. Multi-agency coordination exercises

#### Fall Drone Summit (September)

Full-day training event covering:
1. Complex SAR scenarios
2. Night + terrain integration
3. Standardization across operators
4. Lessons learned review

### 11.6 Cold Weather Training

Annual cold weather refresher (November) covering:
- Battery care in cold conditions
- Aircraft operational limits
- Operator readiness and PPE
- Pre-heating procedures
- Flight time de-rating

### 11.7 Training Attendance Requirements

| Requirement | Standard |
|-------------|----------|
| Minimum Attendance | 75% of scheduled sessions |
| Summit Attendance | At least 1 summit per year |
| Make-up Training | Arrange with trainer within 30 days |

### 11.8 Training Documentation

Each training session is documented with:
- Date and location
- Scenario type completed
- Participants and roles
- Flight hours logged
- Skills demonstrated
- Areas for improvement
- Trainer sign-off

---

## 12. Training Records

### 12.1 Required Records

Per CAR 901.222, maintain records of:
- All training completed with dates and durations
- Assessment results and scores
- Instructor/examiner details
- Qualifications achieved with expiry dates
- Recurrency training completion
- Progression decisions and hold points

### 12.2 Pilot Training Record Template

#### Pilot Information

| Field | Value |
|-------|-------|
| Name | |
| TC Pilot Certificate # | |
| Certificate Expiry | |
| Organization Join Date | |
| Aircraft Qualifications | M30T [ ] M4TD [ ] |
| Scenario Qualifications | STSC-003 [ ] STSC-004 [ ] |

#### Training History

| Training Item | Date Completed | Instructor | Next Due |
|---------------|----------------|------------|----------|
| Foundation Training | | | |
| Foundation Flight Review | | | |
| M30T Type Training | | | |
| M4TD Type Training | | | |
| STSC-003 Training | | | |
| STSC-004 BVLOS Training | | | |
| Emergency Procedures | | | |
| SAR Operations Training | | | |
| Annual Proficiency Check | | | |

### 12.3 Records Retention

| Record Type | Retention Period |
|-------------|------------------|
| Individual Pilot Records | Employment + 2 years |
| Training Records | 5 years |
| Assessment Results | 5 years |
| Progression Decisions | 24 months minimum |
| Endorsement Records | Duration + 2 years |

---

## 13. Document Control

### 13.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

Signatures on file. Original signed document retained per QAP-001.

### 13.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial Training Program Manual | Dustin Wales |
| | | | |

### 13.3 Document Sources

This Training Program Manual incorporates content from the following source documents:

| Document ID | Document Title |
|-------------|----------------|
| TRN-301 | Pilot Training Program |
| TRN-302 | Training Foundation |
| TRN-302 | Competency Assessment |
| TRN-303 | Advanced Training |
| TRN-303 | Training Records |
| TRN-304 | Training Progression |
| TRN-305 | Pilot Examiner Standards |
| 301_RPASTraining | Training Policy (2025) |
| 302_RPASTraining | Training Foundation (2025) |
| 303_RPASTraining | Advanced Training (2025) |
| 304_RPASTraining | Progression (2025) |
| 305_RPASTraining | Recurrency (2025) |

---

**END OF TRAINING PROGRAM MANUAL**

*This document is part of the SSAR RPAS Operator Certificate (RPOC) documentation package.*`
    },

    forms: {
        title: "Forms & Maintenance Manual",
        icon: "fa-clipboard-list",
        docCount: 10,
        content: `# SSAR Forms & Maintenance Manual

## Squamish Search and Rescue - RPAS Operations Program

---

| Document | MNT-MANUAL |
|----------|------------|
| Version | 1.0 |
| Effective | March 2026 |
| Review Date | March 2027 |
| Regulatory Reference | CAR 901.221, Standard 922 |

---

## Table of Contents

1. [Maintenance Control Manual](#1-maintenance-control-manual)
2. [Aircraft Specifications](#2-aircraft-specifications)
3. [Pre-Flight and Post-Flight Procedures](#3-pre-flight-and-post-flight-procedures)
4. [Mission Checklists](#4-mission-checklists)
5. [Battery Management](#5-battery-management)
6. [Firmware Management](#6-firmware-management)
7. [Equipment Testing Program](#7-equipment-testing-program)
8. [Maintenance Records](#8-maintenance-records)
9. [Document Control](#9-document-control)
10. [Quick Reference Cards](#10-quick-reference-cards)

---

## 1. Maintenance Control Manual

### 1.1 Introduction

This Maintenance Control Manual (MCM) establishes the maintenance requirements, procedures, and standards for all RPAS operated under SSAR's RPOC. This manual ensures compliance with CAR 901.221.

### 1.2 Approved Aircraft

| Aircraft | MTOM | Max Flight | Op. Temp | IP Rating |
|----------|------|------------|----------|-----------|
| DJI M30T | 3.77 kg | 41 minutes | -20°C to 50°C | IP55 |
| DJI Matrice 4TD | 2.3 kg | 42 minutes | -20°C to 45°C | IP54 |

### 1.3 Maintenance Organization

| Accountable Executive | Chief Pilot | RPAS Pilots | DJI Authorized Service |
|----------------------|-------------|-------------|------------------------|
| Dustin Wales | Dustin Wales | Pre/Post Flight | Complex Repairs |

### 1.4 Scheduled Maintenance

| Interval | Activity |
|----------|----------|
| Every Flight | Pre-flight/Post-flight inspection |
| 50 Hours | Detailed inspection, propeller evaluation |
| 100 Hours | Component review, sensor calibration |
| 200 Hours | Comprehensive inspection, motor assessment |
| Annual | Full system review, firmware audit |

### 1.5 Defect Recording

| Category | Description | Action |
|----------|-------------|--------|
| A - Grounding | No flight permitted | Ground aircraft immediately |
| B - Limitation | Operational limitation | Document, fly with restrictions |
| C - Monitor | Monitor and report | Document, monitor |

### 1.6 Maintenance Personnel

| Level | Authorization | Tasks |
|-------|---------------|-------|
| Level 1 | All SSAR pilots | Pre/post-flight, propellers, batteries |
| Level 2 | Chief Pilot authorized | Firmware, calibration, return to service |

### 1.7 Records Retention

| Record Type | Retention Period |
|-------------|------------------|
| Aircraft Technical Log | Life of aircraft + 2 years |
| Battery Records | Life of battery + 2 years |
| Maintenance Actions | 2 years minimum |
| Defect Reports | 5 years |

---

## 2. Aircraft Specifications

### 2.1 DJI Matrice 30T (M30T)

| Specification | Value |
|---------------|-------|
| Maximum Takeoff Weight | 3770g |
| Maximum Flight Time | 41 minutes |
| Maximum Speed | 23 m/s (S mode) |
| Operating Temperature | -20°C to 50°C |
| Wind Resistance | 15 m/s |
| Transmission Range | 15 km (O3 Enterprise) |
| Battery Type | TB30 (5880 mAh) |
| Payload Cameras | Wide, Zoom, Thermal, Laser |
| IP Rating | IP55 |
| GNSS | GPS + GLONASS + Galileo + BeiDou |
| RTK Support | Yes (with D-RTK 2 or Network RTK) |

### 2.2 DJI Matrice 4TD (M4TD)

| Specification | Value |
|---------------|-------|
| Maximum Takeoff Weight | 2145g |
| Maximum Flight Time | 45 minutes |
| Maximum Speed | 21 m/s (S mode) |
| Operating Temperature | -20°C to 45°C |
| Wind Resistance | 12 m/s |
| Transmission Range | 20 km (O4 Enterprise) |
| Battery Type | DJI Enterprise Series Battery |
| Payload Cameras | Wide, Tele, Thermal |
| IP Rating | IP54 |
| GNSS | GPS + GLONASS + Galileo + BeiDou |
| RTK Support | Yes (Network RTK) |

---

## 3. Pre-Flight and Post-Flight Procedures

### 3.1 Purpose

This section establishes pre-flight and post-flight inspection requirements for SSAR RPAS operations in compliance with MCM-001.

### 3.2 DJI M30T Pre-Flight Inspection

#### 3.2.1 Environmental Assessment

- Temperature: -20°C to 50°C
- Wind: <15 m/s sustained
- Visibility adequate for operation

#### 3.2.2 Aircraft Inspection

- Airframe free of damage
- All four arms locked in flight position
- Propellers secure and undamaged
- Camera gimbal moves freely
- All sensor lenses clean

#### 3.2.3 Battery Verification

| Parameter | Requirement |
|-----------|-------------|
| Charge | >95% for SAR operations |
| Cycle Count | <200 cycles |
| Physical Condition | No damage or swelling |
| Temperature | 15-40°C (preheat if <15°C) |

### 3.3 DJI Matrice 4TD Pre-Flight Inspection

#### 3.3.1 Environmental Assessment

- Temperature: -20°C to 45°C
- Wind: <12 m/s sustained

#### 3.3.2 Aircraft Inspection

- All arms unfolded and locked
- Propellers installed correctly
- 3-axis gimbal moves freely
- All camera lenses clean

### 3.4 RTK/Positioning Verification

When RTK required:
- RTK module enabled
- RTK status: FIXED
- Position accuracy <10cm

### 3.5 System Verification

| Item | Check |
|------|-------|
| Power on complete | [ ] |
| Controller paired | [ ] |
| GPS lock (min 10 satellites) | [ ] |
| Home point set | [ ] |
| Failsafe settings verified | [ ] |
| Firmware current | [ ] |

### 3.6 Post-Launch Systems Check (MANDATORY)

> **Immediately following launch on EVERY flight, conduct an Attitude and Movements Check at a safe hover altitude (3-5 meters AGL) before proceeding:**

| Item | Check |
|------|-------|
| Stable hover - no drift or oscillation | [ ] |
| Pitch response - forward/backward tilt responds correctly | [ ] |
| Roll response - left/right tilt responds correctly | [ ] |
| Yaw response - rotation left/right responds correctly | [ ] |
| Altitude hold - maintains position without input | [ ] |
| Camera/gimbal - tilts and pans correctly | [ ] |
| Telemetry - altitude, distance, battery displaying correctly | [ ] |
| GPS lock confirmed - home point set | [ ] |

> **CRITICAL: If ANY abnormality is detected during this check, LAND IMMEDIATELY and troubleshoot before attempting further flight.**

### 3.7 Post-Flight Inspection

- Aircraft powered down properly
- Battery removed to fireproof container
- Visual inspection for new damage
- Flight logs downloaded
- Discrepancies documented

### 3.8 GO/NO-GO Criteria

> **Any of the following conditions require a NO-GO decision:**

- Any structural damage
- Propeller damage
- Battery swelling or damage
- GPS/IMU failure
- Outstanding Category A defect

---

## 4. Mission Checklists

### 4.1 Pre-Mission Checklist (All Operations)

| Item | Check | Initial |
|------|-------|---------|
| NOTAM check completed | [ ] | |
| Weather briefing obtained | [ ] | |
| Airspace authorization confirmed (if required) | [ ] | |
| Site survey completed or reviewed | [ ] | |
| Risk assessment completed | [ ] | |
| Flight crew briefed | [ ] | |
| Emergency procedures reviewed | [ ] | |
| Communication equipment tested | [ ] | |
| Aircraft inspection completed | [ ] | |
| Batteries charged and checked | [ ] | |
| Controller charged and configured | [ ] | |
| Firmware versions verified | [ ] | |
| Storage media available | [ ] | |
| Flight logs prepared | [ ] | |
| PPE available | [ ] | |

### 4.2 Time-Critical SAR Scenario Selection

| Item | Check | Initial |
|------|-------|---------|
| SAR activation timeline assessed | [ ] | |
| 24-hour ATC notification feasibility determined | [ ] | |
| **If YES - ATC notification possible:** | | |
| Proceed to STSC-003 or STSC-004 checklist as appropriate | [ ] | |
| **If NO - Time-critical operation:** | | |
| Maximum altitude confirmed: 400' AGL | [ ] | |
| Terrain-following flight plan prepared | [ ] | |
| RTH altitude set above highest terrain | [ ] | |
| Crew briefed: "Time-critical operation. STSC-004 parameters apply. Max altitude 400 feet AGL." | [ ] | |
| Thermal search altitude planned: 80-120 meters AGL | [ ] | |
| Proceed to STSC-004 BVLOS Checklist | [ ] | |

### 4.3 STSC-003 High Altitude Checklist

| Item | Check | Initial |
|------|-------|---------|
| STSC-003 declaration verified current | [ ] | |
| ATC notification completed (1-800-NAVCAN) | [ ] | |
| Flight notification number recorded | [ ] | |
| Airspace chart reviewed for traffic | [ ] | |
| Ceiling/visibility meets STSC-003 requirements | [ ] | |
| Maximum altitude determined and briefed | [ ] | |
| Visual reference altitude limit identified | [ ] | |
| Traffic scan procedures briefed | [ ] | |
| Emergency descent procedure reviewed | [ ] | |
| Visual observer positioned (if used) | [ ] | |
| ATC contact info readily available | [ ] | |

### 4.4 STSC-004 BVLOS Checklist

| Item | Check | Initial |
|------|-------|---------|
| STSC-004 declaration verified current | [ ] | |
| BVLOS route planned and loaded | [ ] | |
| Waypoints verified | [ ] | |
| Geofence configured | [ ] | |
| Lost link procedure programmed | [ ] | |
| RTH altitude appropriate for terrain | [ ] | |
| Visual observers positioned and briefed | [ ] | |
| VO communication check completed | [ ] | |
| Telemetry link tested | [ ] | |
| GPS accuracy verified (PDOP acceptable) | [ ] | |
| Alternate landing sites identified | [ ] | |
| Emergency termination procedure briefed | [ ] | |
| Flight boundaries briefed to all crew | [ ] | |
| Contingency procedures reviewed | [ ] | |
| Recovery plan confirmed | [ ] | |

### 4.5 DJI M30T Pre-Flight Checklist

| Item | Check | Initial |
|------|-------|---------|
| Airframe visual inspection - no damage | [ ] | |
| Propellers secure and undamaged | [ ] | |
| Arms locked in flight position | [ ] | |
| Battery inserted and secured | [ ] | |
| Battery level > 90% | [ ] | |
| Camera/gimbal moves freely | [ ] | |
| Lens covers removed | [ ] | |
| Landing gear secure | [ ] | |
| SD card inserted | [ ] | |
| Controller linked and charged | [ ] | |
| Compass calibration (if required) | [ ] | |
| GPS lock obtained (>10 satellites) | [ ] | |
| Motor start test completed | [ ] | |

### 4.6 DJI Matrice 4TD Pre-Flight Checklist

| Item | Check | Initial |
|------|-------|---------|
| Airframe visual inspection - no damage | [ ] | |
| Propellers secure and undamaged | [ ] | |
| Arms unfolded and locked | [ ] | |
| Battery inserted and secured | [ ] | |
| Battery level > 90% | [ ] | |
| Camera/gimbal moves freely | [ ] | |
| All three sensors operational | [ ] | |
| Obstacle avoidance sensors clean | [ ] | |
| SD card inserted | [ ] | |
| Controller linked and charged | [ ] | |
| Compass calibration (if required) | [ ] | |
| GPS/GNSS lock obtained | [ ] | |
| Motor start test completed | [ ] | |

### 4.7 Battery Swap Procedures (Hot/Cold Turnaround)

#### 4.7.1 Hot Turnaround (Immediate Re-launch)

For time-critical SAR operations requiring minimum downtime between flights:

| Step | Action | Check |
|------|--------|-------|
| 1 | Call "BATTERY SWAP" to crew | [ ] |
| 2 | Land aircraft in designated area | [ ] |
| 3 | Keep aircraft powered ON | [ ] |
| 4 | VO maintains airspace watch | [ ] |
| 5 | Remove depleted battery (note: may be hot) | [ ] |
| 6 | Visual inspect aircraft for damage | [ ] |
| 7 | Insert fresh battery (>95% charge) | [ ] |
| 8 | Verify battery lock engaged | [ ] |
| 9 | Confirm telemetry: battery level, GPS, link | [ ] |
| 10 | Conduct abbreviated pre-flight (4.8) | [ ] |
| 11 | Resume mission | [ ] |

**Target Time:** 2-3 minutes

> **CRITICAL:** Hot batteries may exceed 50°C. Handle with gloves. Place in fireproof container immediately.

#### 4.7.2 Cold Turnaround (Standard Battery Swap)

For non-urgent operations or when full inspection is warranted:

| Step | Action | Check |
|------|--------|-------|
| 1 | Land and power down aircraft | [ ] |
| 2 | Remove battery to fireproof container | [ ] |
| 3 | Complete full post-flight inspection | [ ] |
| 4 | Document any anomalies | [ ] |
| 5 | Allow aircraft to cool if needed | [ ] |
| 6 | Insert fresh battery | [ ] |
| 7 | Power on and complete full pre-flight | [ ] |
| 8 | Resume mission | [ ] |

**Target Time:** 5-10 minutes

#### 4.7.3 Multi-Battery Operations Planning

| Battery Set | Status | Notes |
|-------------|--------|-------|
| Battery A | In Use | Currently flying |
| Battery B | Charged (>95%) | Ready for swap |
| Battery C | Charging | Next available |
| Battery D | Cooling | Recently used |

> **Best Practice:** For extended SAR operations, bring minimum 4 batteries per aircraft to maintain continuous operations with proper cooling cycles.

---

### 4.8 Abbreviated Pre-Flight Checklist

For use during Hot Turnaround battery swaps when full pre-flight was completed earlier in the mission:

| Item | Check |
|------|-------|
| **Visual Quick Scan** | |
| Airframe intact - no new damage | [ ] |
| Propellers secure - no visible damage | [ ] |
| Camera/gimbal moves freely | [ ] |
| **Battery Verification** | |
| Battery seated and locked | [ ] |
| Battery level >90% | [ ] |
| Battery temperature in range | [ ] |
| **System Quick Check** | |
| GPS lock confirmed | [ ] |
| Home point set | [ ] |
| Telemetry link strong | [ ] |
| No error messages | [ ] |
| **Crew Confirmation** | |
| VO positioned | [ ] |
| Airspace clear | [ ] |
| "READY FOR LAUNCH" called | [ ] |

> **NOTE:** This abbreviated checklist is ONLY valid when:
> - Full pre-flight was completed within the last 60 minutes
> - Aircraft has not been transported
> - No incidents or anomalies occurred on previous flight
> - Same crew is conducting operations

---

### 4.9 In-Flight Monitoring Checklist

| Parameter | Monitor For |
|-----------|-------------|
| Battery level | Below 30% - initiate return |
| Signal strength | Below 2 bars - consider return |
| GPS satellites | Below 8 - caution for BVLOS |
| Wind speed | Approaching aircraft limits |
| Altitude | Within authorized limits |
| Distance | Within VLOS/BVLOS limits |
| Temperature | Battery/motor warnings |
| Obstacle proximity | Sensor warnings |
| Airspace | Traffic or incursion alerts |

### 4.10 Post-Flight Checklist

| Item | Check | Initial |
|------|-------|---------|
| Aircraft powered down properly | [ ] | |
| Battery removed | [ ] | |
| Visual inspection for damage | [ ] | |
| Propellers checked for wear | [ ] | |
| Motor temperature normal | [ ] | |
| Flight data downloaded | [ ] | |
| Flight log completed | [ ] | |
| Any anomalies documented | [ ] | |
| Equipment secured | [ ] | |
| Site cleared | [ ] | |
| Post-flight brief conducted | [ ] | |

### 4.11 Emergency Quick Reference

| Emergency | Immediate Action |
|-----------|------------------|
| MOTOR FAILURE | 1. Descend immediately  2. Move to safe landing area  3. Controlled crash if needed |
| LOST LINK | 1. Wait 10 sec  2. Move to clear area  3. Aircraft will auto-RTH |
| LOW BATTERY | 1. Immediate RTH  2. Identify closest landing site  3. Land ASAP |
| GPS FAILURE | 1. Switch mode  2. Maintain visual  3. Manual fly to landing |
| FLYAWAY | 1. Attempt to regain control  2. Contact ATC/Tower/FIC/NavCanada immediately |

---

## 5. Battery Management

### 5.1 TB30 Battery Specifications (M30T)

| Specification | Value |
|---------------|-------|
| Capacity | 5880 mAh |
| Voltage | 26.1V |
| Battery Type | LiPo 6S |
| Energy | 131.6 Wh |
| Weight | 680g |
| Charging Time | 30-40 minutes (BS30) |
| Cycle Life | 400 cycles to 70% capacity |
| Operating Temp | -20°C to 50°C |

### 5.2 M4TD Battery Specifications

| Specification | Value |
|---------------|-------|
| Capacity | 6000 mAh (estimated) |
| Voltage | 25.2V |
| Battery Type | LiPo |
| Energy | ~150 Wh |
| Weight | ~550g |
| Charging Time | 35-45 minutes |
| Cycle Life | 400+ cycles to 70% capacity |
| Operating Temp | -20°C to 45°C |

### 5.3 TB30 Care Procedures

#### Storage

- Store at 40-60% charge for periods longer than 10 days
- Storage temperature: 22-28°C ideal, never exceed 45°C
- Store in fireproof container or LiPo-safe bag
- Auto-discharge enabled (DJI default)

#### Charging

- Use only BS30 charging station or DJI-approved charger
- Charge at room temperature (15-40°C)
- Do not charge immediately after flight (allow 15 min cooling)
- Monitor charging - do not leave unattended

#### Usage

- Pre-warm batteries in cold conditions (<10°C)
- Do not discharge below 20% in normal operations
- Land immediately if battery warning appears
- Inspect for swelling, damage, or unusual heat

### 5.4 M4TD Battery Care Procedures

#### Storage

- Same principles as TB30 batteries
- Store at storage charge level (40-60%)
- Use fireproof storage container

#### Charging

- Use M4TD compatible DJI charger
- Follow same charging safety procedures as TB30

#### Usage

- Follow same operational guidelines as TB30
- Note slightly lower wind resistance (12 m/s vs 15 m/s)

### 5.5 Battery Health Tracking

| Battery ID | Aircraft | Cycles | Health % | Last Used | Status | Notes |
|------------|----------|--------|----------|-----------|--------|-------|
| | | | | | | |
| | | | | | | |
| | | | | | | |

### 5.6 Battery Retirement Criteria

Retire batteries when:
- Cycle count exceeds 400
- Capacity drops below 70% of original
- Any physical damage (swelling, dents, punctures)
- Unusual discharge behavior
- Cell imbalance cannot be corrected
- Error codes or warnings persist

### 5.7 Battery Disposal

- Discharge to below 20% before disposal
- Take to authorized battery recycling facility
- Do not dispose in regular waste
- Document disposal in battery log

---

## 6. Firmware Management

### 6.1 Firmware Update Policy

| Policy Element | Requirement |
|----------------|-------------|
| Version Standard | All aircraft firmware must be maintained at current stable versions |
| Beta Restriction | Beta/experimental firmware is NOT authorized for SAR operations |
| Testing | Firmware updates must be tested before operational deployment |
| Documentation | Update logs must be maintained for each aircraft |
| Notification | All pilots must be briefed on operational changes from updates |
| Approval | Chief Pilot approval required before fleet-wide deployment |

### 6.2 Firmware Components

Each RPAS system includes multiple firmware components that must be tracked:

#### 6.2.1 DJI M30T Firmware Components

| Component | Current Version | Update Source |
|-----------|-----------------|---------------|
| Aircraft Firmware | [Version] | DJI Pilot 2 / Assistant |
| Remote Controller | [Version] | DJI Pilot 2 |
| TB30 Battery | [Version] | DJI Pilot 2 |
| BS30 Charging Station | [Version] | DJI Assistant |
| DJI Pilot 2 App | [Version] | App Store / DJI |

#### 6.2.2 DJI Matrice 4TD Firmware Components

| Component | Current Version | Update Source |
|-----------|-----------------|---------------|
| Aircraft Firmware | [Version] | DJI Pilot 2 / Assistant |
| Remote Controller | [Version] | DJI Pilot 2 |
| Battery | [Version] | DJI Pilot 2 |
| DJI Pilot 2 App | [Version] | App Store / DJI |

### 6.3 Firmware Version Tracking Log

| Aircraft ID | Serial # | Component | Current FW | Previous FW | Update Date | Updated By | Test Flight |
|-------------|----------|-----------|------------|-------------|-------------|------------|-------------|
| M30T-001 | [Serial] | Aircraft | [Version] | [Version] | [Date] | [Name] | [ ] Yes [ ] No |
| M30T-001 | [Serial] | RC | [Version] | [Version] | [Date] | [Name] | N/A |
| M30T-001 | [Serial] | Battery | [Version] | [Version] | [Date] | [Name] | N/A |
| M30T-002 | [Serial] | Aircraft | [Version] | [Version] | [Date] | [Name] | [ ] Yes [ ] No |
| M4TD-001 | [Serial] | Aircraft | [Version] | [Version] | [Date] | [Name] | [ ] Yes [ ] No |
| M4TD-002 | [Serial] | Aircraft | [Version] | [Version] | [Date] | [Name] | [ ] Yes [ ] No |

### 6.4 Firmware Update Procedure

#### 6.4.1 Pre-Update Assessment

| Step | Action | Check |
|------|--------|-------|
| 1 | **CHECK** DJI release notes for new firmware version | [ ] |
| 2 | **REVIEW** changelog for safety-related items | [ ] |
| 3 | **RESEARCH** community feedback on new version stability | [ ] |
| 4 | **ASSESS** operational impact of changes | [ ] |
| 5 | **DECIDE** if update is required (safety critical) or optional (feature) | [ ] |
| 6 | **OBTAIN** Chief Pilot approval for fleet update | [ ] |

#### 6.4.2 Update Execution

| Step | Action | Check |
|------|--------|-------|
| 1 | **BACKUP** current settings and waypoints | [ ] |
| 2 | **CHARGE** aircraft and controller to >50% | [ ] |
| 3 | **DOWNLOAD** firmware to DJI Pilot 2 or controller | [ ] |
| 4 | **UPDATE** in controlled environment (indoor or calm conditions) | [ ] |
| 5 | **VERIFY** update completed successfully (no errors) | [ ] |
| 6 | **CHECK** all firmware components match expected versions | [ ] |

#### 6.4.3 Post-Update Verification

| Step | Action | Check |
|------|--------|-------|
| 1 | **VERIFY** RTH altitude setting (often reset by updates) | [ ] |
| 2 | **VERIFY** geofence settings | [ ] |
| 3 | **VERIFY** failsafe settings (lost link behavior) | [ ] |
| 4 | **VERIFY** maximum altitude settings | [ ] |
| 5 | **VERIFY** obstacle avoidance settings | [ ] |
| 6 | **VERIFY** camera/gimbal settings | [ ] |
| 7 | **CALIBRATE** compass and IMU if prompted | [ ] |
| 8 | **TEST** all sensors and controls on ground | [ ] |

> **CRITICAL:** Firmware updates frequently reset safety parameters like RTH Altitude. ALWAYS verify settings after any update.

#### 6.4.4 Test Flight Requirements

A test flight is REQUIRED after any firmware update that includes:
- Flight controller changes
- GPS/navigation changes
- Motor/ESC changes
- Failsafe logic changes
- Obstacle avoidance changes

| Test Flight Element | Check |
|---------------------|-------|
| Stable hover (30 seconds) | [ ] |
| Control response (pitch, roll, yaw) | [ ] |
| GPS position hold | [ ] |
| RTH function test | [ ] |
| Camera/gimbal operation | [ ] |
| Obstacle avoidance (if applicable) | [ ] |
| No abnormal warnings or behavior | [ ] |

#### 6.4.5 Documentation and Communication

| Step | Action | Check |
|------|--------|-------|
| 1 | **RECORD** update in firmware log (Section 6.3) | [ ] |
| 2 | **DOCUMENT** any setting resets or anomalies | [ ] |
| 3 | **BRIEF** all pilots on operational changes | [ ] |
| 4 | **UPDATE** relevant checklists if procedures changed | [ ] |
| 5 | **FILE** DJI release notes for reference | [ ] |

### 6.5 Firmware Rollback Procedure

If a firmware update causes operational issues:

| Step | Action |
|------|--------|
| 1 | **GROUND** affected aircraft immediately |
| 2 | **DOCUMENT** issues observed |
| 3 | **CONTACT** DJI support if safety-related |
| 4 | **ROLLBACK** to previous version using DJI Assistant (if available) |
| 5 | **TEST** aircraft after rollback |
| 6 | **REPORT** issues to DJI and Chief Pilot |
| 7 | **DELAY** fleet-wide update until issues resolved |

### 6.6 Firmware Update Decision Matrix

| Update Type | Risk Level | Testing Required | Approval Required |
|-------------|------------|------------------|-------------------|
| Security/safety critical | High | Full test flight | Chief Pilot |
| Flight controller changes | High | Full test flight | Chief Pilot |
| Feature additions | Medium | Ground test minimum | Chief Pilot |
| App updates only | Low | Verify settings | PIC |
| Battery firmware | Medium | Charge cycle test | Chief Pilot |

### 6.7 Manufacturer Notice Monitoring

| Source | Monitoring Frequency | Responsible |
|--------|---------------------|-------------|
| DJI Enterprise Support Portal | Weekly | Chief Pilot |
| DJI Pilot 2 App Notifications | Each startup | PIC |
| DJI Email Notifications | As received | Chief Pilot |
| Transport Canada Airworthiness | Monthly | Chief Pilot |
| Industry Forums/Groups | Weekly | Chief Pilot |

> **Mandatory Action:** Any mandatory safety notice from DJI or Transport Canada must be complied with before next flight.

---

## 7. Equipment Testing Program

### 7.1 Purpose

To ensure the operational reliability and airworthiness of all SSAR RPAS equipment. This section mandates a systematic testing regimen to verify that all systems function within manufacturer specifications and regulatory requirements (CAR 901.29) prior to operational deployment.

### 7.2 Testing Philosophy - "Crawl, Walk, Run"

All equipment testing follows a progressive "Crawl, Walk, Run" approach:

| Phase | Name | Description | Risk Level |
|-------|------|-------------|------------|
| **Phase 1** | CRAWL | Ground checks - systems verification without flight | Minimal |
| **Phase 2** | WALK | Hover & basic handling - low altitude, close proximity | Low |
| **Phase 3** | WALK | Systems & sensors - full capability verification | Low |
| **Phase 4** | RUN | Emergency logic - failsafe and emergency system test | Controlled |

> **Never skip phases. Each phase confirms systems are ready for the next level of testing.**

### 7.3 Testing Triggers

Equipment testing is **MANDATORY** under the following conditions:

| Trigger | Testing Level | Authorization to Return |
|---------|---------------|------------------------|
| **New Equipment (Acceptance)** | Full Phase 1-4 | Chief Pilot sign-off required |
| **Post-Maintenance/Repair** | Phase 1-4 for affected systems | Chief Pilot sign-off required |
| **Post-Firmware Update** | Full Phase 1-4 | Chief Pilot sign-off required |
| **Annual Recurrence** | Full Phase 1-4 | Chief Pilot sign-off required |
| **Extended Storage (>30 days)** | Phase 1-2 minimum | PIC verification |
| **Post-Incident (No Damage)** | Full Phase 1-4 | Chief Pilot sign-off required |

> **IMPORTANT:** Firmware updates frequently reset safety parameters like RTH altitude. Full testing is required after every firmware update.

### 7.4 Phase 1: Ground Checks

**Location:** Safe, controlled environment
**Duration:** 10-15 minutes
**Personnel:** PIC minimum

#### 7.4.1 Pre-Power Inspection

| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Airframe Visual | Visual inspection, all surfaces | No cracks, dents, loose components |
| Arms/Hinges | Unfold, check locks | All arms lock securely with audible click |
| Propellers | Visual and tactile | No chips, cracks, or looseness |
| Motors | Spin by hand | Free rotation, no grinding or resistance |
| Gimbal | Visual | Camera secure, gimbal moves freely |
| Battery Bay | Visual | Clean contacts, no debris, no corrosion |
| Sensors | Visual | All sensor windows clean and undamaged |

#### 7.4.2 Power-Up Verification

| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Startup | Power on, observe | Chime plays, lights activate, no error messages |
| IMU Status | App/GCS display | IMU initialized, no calibration required |
| Compass Status | App/GCS display | Compass OK, no calibration warning |
| GPS Lock | App/GCS display | Satellite count >10, coordinates displayed |
| Controller Link | App/GCS display | Strong signal, HD video displayed |
| Firmware Version | App/GCS display | Verified against records, current |

#### 7.4.3 Control Station Verification

| Check | Method | Pass Criteria |
|-------|--------|---------------|
| Stick Mode | Test inputs | Correct mode (Mode 2 standard) |
| Transmission Quality | Signal display | 100% signal strength at <10m |
| Screen Brightness | Visual | Adequate for conditions |
| App Functions | Navigate menus | All functions accessible |
| Button Functions | Press each button | Each button responds correctly |

### 7.5 Phase 2: Hover & Basic Handling

**Location:** Open area, controlled ground, clear sky
**Duration:** 5-10 minutes
**Personnel:** PIC + VO recommended

#### 7.5.1 Launch and Hover Test

| Step | Action | Pass Criteria |
|------|--------|---------------|
| 1 | Execute auto-takeoff to 2m | Smooth lift, no drift |
| 2 | Hover hands-off for 30 seconds | Position hold ±1m, no oscillation |
| 3 | Check for "toilet-bowling" | No circular drift pattern |
| 4 | Listen to motors | Even sound, no grinding or irregular noise |
| 5 | Observe lights | All position lights functional |

#### 7.5.2 Control Response Test

| Input | Test Method | Pass Criteria |
|-------|-------------|---------------|
| Pitch Forward | Short stick input | Smooth response, returns to neutral |
| Pitch Back | Short stick input | Smooth response, returns to neutral |
| Roll Left | Short stick input | Smooth response, returns to neutral |
| Roll Right | Short stick input | Smooth response, returns to neutral |
| Yaw Left | Short stick input | Smooth rotation, no drift |
| Yaw Right | Short stick input | Smooth rotation, no drift |
| Throttle Up | Short stick input | Responsive climb |
| Throttle Down | Short stick input | Responsive descent |

### 7.6 Phase 3: Systems & Sensors

**Location:** Open area with soft obstacles (cones, people at safe distance)
**Duration:** 10-15 minutes
**Personnel:** PIC + VO + soft target person

#### 7.6.1 Obstacle Avoidance Test

| Direction | Test Method | Pass Criteria |
|-----------|-------------|---------------|
| Forward | Fly slowly toward person/cone | Stops at warning distance, displays alert |
| Backward | Back toward obstacle | Stops or alerts (if rear sensors equipped) |
| Lateral | Side-fly toward obstacle | Stops or alerts (if side sensors equipped) |
| Downward | Descend toward ground slowly | Landing protection activates |

> **CAUTION:** Test with soft targets only. Person should be prepared to move.

#### 7.6.2 Flight Mode Test

| Mode | Test Method | Pass Criteria |
|------|-------------|---------------|
| P-Mode (Position) | Normal flight, hands-off | Holds position precisely |
| S-Mode (Sport) | Toggle mode, brief flight | Increased responsiveness, no GPS features |
| ATTI Mode (if available) | Simulate GPS loss | Aircraft responds, drifts with wind but controllable |

#### 7.6.3 Payload Test

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Gimbal Range | Tilt full up/down via wheel | Full smooth range of motion |
| Camera Zoom | Zoom in/out | Smooth zoom, clear image |
| Thermal Switching | Switch to thermal view | Thermal image displays, palette functional |
| Photo Capture | Take photo | Photo captured, saved to SD |
| Video Record | Start/stop recording | Recording indicator, file saved |
| Laser Rangefinder (M30T) | Point at known distance | Accurate reading (±2%) |

### 7.7 Phase 4: Emergency Logic

**Location:** Open area, minimum 200m x 200m clear
**Duration:** 10-15 minutes
**Personnel:** PIC + VO

#### 7.7.1 Return-to-Home Test

| Step | Action | Pass Criteria |
|------|--------|---------------|
| 1 | Fly aircraft >50m from home point | Aircraft at distance, home point confirmed on map |
| 2 | Press RTH button | RTH initiates, climbs to set altitude |
| 3 | Monitor return path | Direct line back to home point |
| 4 | At 50m from home, cancel RTH | Responds to cancel, PIC takes control |
| 5 | Repeat, allow full RTH | Aircraft returns, hovers over home, descends, lands |
| 6 | Verify landing accuracy | Lands within 1m of marked home point |

#### 7.7.2 Low Battery Response Test

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Warning Level | Observe at 30% battery | Warning displayed, no auto-action |
| RTH Level | Observe at 20% battery | RTH warning, countdown begins |
| Critical Level | Observe at 10% battery | Auto-landing initiates |

> **Note:** Battery depletion test may be simulated by observing behavior during normal operations rather than intentionally depleting batteries.

#### 7.7.3 Failsafe Settings Verification

| Setting | Verification Method | Required Setting |
|---------|---------------------|------------------|
| RTH Altitude | Check in app settings | Higher than tallest obstacle in area |
| Loss of Link Action | Check in app settings | Return to Home (NOT Hover) |
| Low Battery Action | Check in app settings | RTH or Land |
| Max Altitude | Check in app settings | Per operational requirements |
| Max Distance | Check in app settings | Per operational requirements |

### 7.8 Test Documentation

#### 7.8.1 RPAS Functional Flight Test (FFT) Log

| Field | Information |
|-------|-------------|
| **Date:** | |
| **Aircraft:** | [ ] M30T  [ ] M4TD |
| **Serial Number:** | |
| **Firmware Version:** | |
| **Test Technician:** | |
| **Test Trigger:** | [ ] New  [ ] Repair  [ ] Firmware  [ ] Annual  [ ] Storage |

**Phase 1 - Ground Checks:**

| Item | Pass | Fail | Notes |
|------|------|------|-------|
| Airframe inspection | [ ] | [ ] | |
| Propeller condition | [ ] | [ ] | |
| Motor check | [ ] | [ ] | |
| Power-up clean | [ ] | [ ] | |
| GPS lock | [ ] | [ ] | |
| Controller link | [ ] | [ ] | |
| Firmware verified | [ ] | [ ] | |

**Phase 2 - Hover & Handling:**

| Item | Pass | Fail | Notes |
|------|------|------|-------|
| Stable hover | [ ] | [ ] | |
| Control response | [ ] | [ ] | |
| No toilet-bowling | [ ] | [ ] | |
| Motor sound normal | [ ] | [ ] | |

**Phase 3 - Systems & Sensors:**

| Item | Pass | Fail | Notes |
|------|------|------|-------|
| Obstacle avoidance | [ ] | [ ] | |
| Mode switching | [ ] | [ ] | |
| Gimbal function | [ ] | [ ] | |
| Camera/thermal | [ ] | [ ] | |
| Recording function | [ ] | [ ] | |

**Phase 4 - Emergency Logic:**

| Item | Pass | Fail | Notes |
|------|------|------|-------|
| RTH function | [ ] | [ ] | |
| Landing accuracy | [ ] | [ ] | |
| Failsafe settings | [ ] | [ ] | |

**Test Result:**

| Status | Action |
|--------|--------|
| [ ] **CLEAR** | Equipment returned to service |
| [ ] **LOCKOUT** | Equipment grounded - describe issue: |

**Signatures:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Technician | | | |
| Chief Pilot Approval | | | |

---

## 8. Maintenance Records

### 8.1 Maintenance Schedule

#### 8.1.1 Pre-Flight Inspection (Every Flight)

- Visual inspection of airframe for damage
- Propeller condition check (no chips, cracks, wear)
- Battery charge level and health indicator
- Camera/gimbal function test
- Control surface response check
- Compass calibration if required
- Firmware version verification

#### 8.1.2 Post-Flight Inspection (Every Flight)

- Visual inspection for flight damage
- Motor temperature check (should not be excessively hot)
- Battery condition and charge remaining
- Log flight data (time, location, anomalies)
- Clean sensors and lenses if needed

#### 8.1.3 Weekly Maintenance

- Detailed airframe inspection
- Propeller replacement assessment
- Battery storage charge verification
- Remote controller condition check
- Firmware update check
- Flight log backup

#### 8.1.4 Monthly Maintenance

- Complete system diagnostic
- Motor and ESC inspection
- Landing gear inspection
- Full sensor calibration
- Battery cycle count review
- Accessory inspection (charging station, cases)

#### 8.1.5 Annual Maintenance

- Comprehensive airframe inspection
- Full propulsion system inspection
- Battery retirement assessment (>70% degradation)
- Replace worn components
- Manufacturer service if available
- Documentation review and update

### 8.2 Defect Recording and Tracking

#### 8.2.1 Defect Categories

| Category | Code | Description | Operational Impact | Resolution Timeline |
|----------|------|-------------|-------------------|---------------------|
| **A - Grounding** | DEF-A | Defect prevents safe flight | Aircraft GROUNDED immediately | Must resolve before flight |
| **B - Limitation** | DEF-B | Defect limits operations | Operational restriction applies | Resolve within 7 days |
| **C - Monitor** | DEF-C | Defect requires monitoring | Normal operations, enhanced monitoring | Resolve within 30 days |
| **D - Cosmetic** | DEF-D | Cosmetic issue only | No operational impact | Resolve at next scheduled maintenance |

#### 8.2.2 Category A (Grounding) Defects

The following defects require immediate grounding - NO FLIGHT PERMITTED:

| Defect | Examples | Action |
|--------|----------|--------|
| Structural damage | Cracked arm, bent motor mount, damaged landing gear | Ground, tag LOCKOUT, assess repair |
| Propulsion failure | Motor not spinning, ESC failure, excessive motor heat | Ground, tag LOCKOUT, replace component |
| Flight control failure | IMU error, compass failure, GPS failure (persistent) | Ground, calibrate or repair |
| Battery critical | Swelling, physical damage, cell failure, fire risk | Remove from service, dispose properly |
| C2 link failure | No connection, intermittent link, range severely degraded | Ground, troubleshoot, repair |
| Safety system failure | RTH not functioning, geofence disabled, failsafe not responding | Ground, reset and verify |

#### 8.2.3 Category B (Limitation) Defects

| Defect | Examples | Operational Limitation |
|--------|----------|----------------------|
| Sensor degradation | Obstacle avoidance intermittent, one sensor offline | Fly VLOS only, increased crew vigilance |
| Camera/gimbal issue | Gimbal drift, image quality degraded | Non-SAR flights only |
| Minor battery issue | Reduced capacity (70-80%), one cell low | Reduced flight time, close monitoring |
| Transmission degraded | Range reduced but functional | Reduced operational range |
| Minor structural | Cosmetic crack, loose non-critical component | Reduced maneuvering, avoid heavy loads |

#### 8.2.4 Defect Reporting Procedure

| Step | Action | Responsibility | Timeline |
|------|--------|----------------|----------|
| 1 | **IDENTIFY** defect during pre-flight, post-flight, or operation | PIC / Crew | Immediately |
| 2 | **ASSESS** defect category using 7.2.1 criteria | PIC | Immediately |
| 3 | **DOCUMENT** defect on Defect Report Form (7.2.6) | PIC | Before leaving site |
| 4 | **TAG** aircraft with appropriate status tag | PIC | Immediately |
| 5 | **NOTIFY** Chief Pilot/Maintenance Manager | PIC | Within 2 hours |
| 6 | **LOG** defect in Aircraft Technical Log | Chief Pilot | Within 24 hours |
| 7 | **PLAN** repair/resolution | Maintenance Manager | Per category timeline |
| 8 | **REPAIR** execute repair or send for service | Authorized personnel | Per category timeline |
| 9 | **TEST** conduct functional test after repair | Maintenance Manager | After repair |
| 10 | **RELEASE** document return to service | Chief Pilot | After successful test |

#### 8.2.5 Equipment Status Tags

| Tag Color | Status | Meaning | Action Required |
|-----------|--------|---------|-----------------|
| **GREEN** | SERVICEABLE | Equipment operational, no defects | Normal operations permitted |
| **YELLOW** | LIMITED | Category B/C defect, operational with limitations | Fly with documented restrictions |
| **RED** | GROUNDED / LOCKOUT | Category A defect, DO NOT FLY | No flight until repair and release |
| **WHITE** | MAINTENANCE | In scheduled maintenance | Not available until maintenance complete |

#### 8.2.6 Defect Report Form

| SSAR RPAS DEFECT REPORT | |
|-------------------------|---|
| **Defect ID:** | DEF-[YEAR]-[NUMBER] |
| **Date Discovered:** | |
| **Discovered By:** | |
| **Aircraft ID:** | |
| **Aircraft Serial #:** | |
| **Current Flight Hours:** | |
| **Defect Category:** | [ ] A-Grounding  [ ] B-Limitation  [ ] C-Monitor  [ ] D-Cosmetic |
| **Description of Defect:** | |
| **How Discovered:** | [ ] Pre-flight  [ ] In-flight  [ ] Post-flight  [ ] Maintenance  [ ] Other |
| **Immediate Action Taken:** | |
| **Status Tag Applied:** | [ ] GREEN  [ ] YELLOW  [ ] RED  [ ] WHITE |
| **Chief Pilot Notified:** | [ ] Yes  Date/Time: ___________ |
| **Reporter Signature:** | _________________________ Date: _________ |

---

| DEFECT RESOLUTION | |
|-------------------|---|
| **Resolution Plan:** | |
| **Parts Required:** | |
| **Repair Performed By:** | |
| **Repair Date:** | |
| **Description of Repair:** | |
| **Test Flight Required:** | [ ] Yes  [ ] No |
| **Test Flight Date:** | |
| **Test Flight Result:** | [ ] Pass  [ ] Fail |
| **Return to Service Authorized By:** | |
| **Return to Service Date:** | |
| **Authorizing Signature:** | _________________________ Date: _________ |

#### 8.2.7 Defect Tracking Register

| Defect ID | Date | Aircraft | Category | Description | Status | Resolution Date |
|-----------|------|----------|----------|-------------|--------|-----------------|
| DEF-2026-001 | | | | | | |
| DEF-2026-002 | | | | | | |
| DEF-2026-003 | | | | | | |

**Status Options:** Open, In Progress, Resolved, Deferred, Closed

#### 8.2.8 Recurring Defect Analysis

If the same or similar defect occurs three or more times:

1. **IDENTIFY** the recurring pattern
2. **INVESTIGATE** root cause using Safety Manual Section 4.6 procedures
3. **ASSESS** whether the defect indicates:
   - Design deficiency (notify manufacturer)
   - Maintenance gap (revise maintenance procedures)
   - Operational issue (revise operational procedures)
   - Training need (enhance training)
4. **IMPLEMENT** corrective action
5. **MONITOR** for recurrence
6. **REPORT** to Accountable Executive if safety-significant

### 8.3 Maintenance Log Template

| Date | Aircraft | Type | Description | Technician | Sign-off |
|------|----------|------|-------------|------------|----------|
| 2026-03-03 | M30T-001 | Pre-flight | Standard inspection - all OK | D. Wales | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### 8.4 Aircraft Technical Log

Each aircraft maintains a Technical Log containing:

| Section | Contents | Update Frequency |
|---------|----------|------------------|
| Aircraft Data | Serial number, registration, specifications | Upon acquisition |
| Flight Hours | Total hours, hours since maintenance | After each flight |
| Maintenance History | All scheduled and unscheduled maintenance | After each action |
| Defect History | All defects recorded and resolved | As they occur |
| Component Tracking | Propeller hours, motor hours, battery cycles | After each flight |
| Modification Record | Any modifications or configuration changes | As performed |
| Inspection Record | Results of all inspections | After each inspection |
| Return to Service | All RTS authorizations | After each RTS |

### 8.5 Records Retention

| Record Type | Retention Period | Storage Method |
|-------------|------------------|----------------|
| Aircraft Technical Log | Life of aircraft + 2 years | Secure digital + backup |
| Pre/Post Flight Records | 2 years minimum | Digital (AirData) |
| Defect Reports | 5 years | Secure digital + backup |
| Battery Records | Life of battery + 2 years | Digital spreadsheet |
| Maintenance Actions | 2 years minimum | Digital + paper backup |
| Return to Service Records | Life of aircraft | With Technical Log |
| Firmware Update Records | Life of aircraft | Digital log |

### 8.6 Maintenance Signatory Authority

| Maintenance Level | Authorization | Return to Service Authority |
|-------------------|---------------|-----------------------------|
| Level 1 | All SSAR pilots | Pre/post-flight, propellers, batteries - PIC may RTS |
| Level 2 | Chief Pilot authorized | Firmware, calibration, minor repairs - Chief Pilot RTS |
| Level 3 | DJI Authorized Service | Major repairs, warranty work - Service Center RTS |

---

## 9. Document Control

### 9.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

Signatures on file. Original signed document retained per QAP-001.

### 9.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Forms & Maintenance Manual | Dustin Wales |
| | | | |
| | | | |

### 9.3 Document Sources

This consolidated Forms & Maintenance Manual incorporates content from the following source documents:

| Document ID | Document Title |
|-------------|----------------|
| CHK-001 | Mission Checklists |
| PRO-101 | Pre-Flight & Post-Flight Procedures |
| MCM-001 | Maintenance Control Manual |
| MAINT-001 | Maintenance Records |
| MNT-002 | Firmware Updates & Battery Care |

---

## 10. Quick Reference Cards

### 10.1 Emergency Fly-Away Script

> **CRITICAL CONTACT: FIC Kamloops Direct Line: 250-376-7045**

When experiencing a fly-away or lost link emergency requiring ATC notification:

#### 10.1.1 Fly-Away Communication Script

**Step 1 - Initial Contact:**
> "FIC Kamloops, this is [PILOT NAME] with Squamish Search and Rescue RPAS Operations. We are experiencing a fly-away emergency."

**Step 2 - Provide Details:**
> - "Aircraft type: DJI [M30T/M4TD]"
> - "Last known position: [LAT/LONG or description]"
> - "Last known altitude: [XXX] feet AGL"
> - "Last known heading: [direction]"
> - "Time of lost contact: [time]"

**Step 3 - Provide Aircraft Description:**
> - "Aircraft is a small quadcopter, approximately [30cm/50cm] diameter"
> - "Color: [grey/dark grey]"
> - "Maximum endurance remaining: approximately [XX] minutes"

**Step 4 - Request:**
> "Request you advise aircraft in the area. Our contact number is [PHONE NUMBER]."

**Step 5 - Document:**
> - Record name of FIC controller
> - Record time of notification
> - Record any instructions provided

#### 10.1.2 DESCEND Protocol (Fly-Away)

| Step | Letter | Action |
|------|--------|--------|
| 1 | **D** | DISCONNECT - Note time of lost link |
| 2 | **E** | EVALUATE - Check last telemetry: altitude, heading, speed |
| 3 | **S** | SCAN - Visual scan of last known direction |
| 4 | **C** | CALL - Contact FIC Kamloops: 250-376-7045 |
| 5 | **E** | EVACUATE - Clear expected flight path area |
| 6 | **N** | NOTIFY - Alert all crew members |
| 7 | **D** | DOCUMENT - Record all details for incident report |

> **IMPORTANT:** Aircraft programmed for auto-land at 0% battery. Expected flight time on full battery is approximately 40 minutes.

---

### 10.2 Traffic De-Conflict Quick Reference

#### 10.2.1 De-Conflict Scenarios Matrix

| Scenario | Situation | Action | Priority |
|----------|-----------|--------|----------|
| **1** | Manned aircraft approaching operating area | LAND IMMEDIATELY or descend below 50' AGL | Manned aircraft ALWAYS has right-of-way |
| **2** | Helicopter operating in same area | Coordinate via radio; maintain minimum 500' horizontal separation | Coordinate before launch |
| **3** | Fixed-wing traffic transiting area | Descend and hold position until traffic clear | Monitor and yield |
| **4** | Multiple RPAS in same airspace | Stagger altitudes by minimum 100'; establish communication | Coordination required |
| **5** | Emergency aircraft (MEDEVAC, etc.) | IMMEDIATE LAND - no exceptions | Land and disable immediately |

#### 10.2.2 Traffic Communication

**When traffic spotted:**
> "TRAFFIC! [Position - clock direction], [altitude estimate], [aircraft type if known], [direction of travel]"

**Example:**
> "TRAFFIC! 2 o'clock, low, helicopter, moving north to south"

**Response protocol:**
1. PIC acknowledges traffic
2. PIC announces intended action: "DESCENDING" or "LANDING" or "HOLDING"
3. VO confirms traffic clear before resuming

#### 10.2.3 Altitude Quick Reference

| Airspace | Max RPAS Altitude | Notes |
|----------|-------------------|-------|
| Time-Critical SAR (no ATC) | 400' AGL | STSC-004 parameters |
| STSC-003 (with 24hr ATC notice) | Up to 1000' AGL | ATC notification required |
| STSC-004 BVLOS | 400' AGL | Low-risk corridor operations |
| Near airports (controlled) | 0' without authorization | Requires specific authorization |
| Near heliports | 0' without coordination | Direct coordination required |

---

### 10.3 Rapid Site Survey Checklist

**5-Point Field Assessment for Time-Critical Operations**

Complete within 2-3 minutes for urgent SAR deployment:

| # | Check | Details |
|---|-------|---------|
| **1** | **AIRSPACE** | Check for controlled airspace, NOTAMs, nearby airports/heliports |
| **2** | **HAZARDS** | Identify power lines, towers, tall structures, moving equipment |
| **3** | **TERRAIN** | Assess slopes, obstacles, landing zone clearance (min 3m radius) |
| **4** | **PEOPLE** | Identify bystanders, establish safety perimeter (30m minimum) |
| **5** | **WEATHER** | Wind speed/direction, visibility, precipitation, temperature |

#### 10.3.1 Rapid Survey Decision Matrix

| Condition | Action |
|-----------|--------|
| All 5 checks PASS | Proceed to pre-flight |
| 1-2 checks MARGINAL | Proceed with documented mitigations |
| Any check FAIL | DO NOT FLY - relocate or stand down |

#### 10.3.2 Quick Weather Assessment

| Parameter | GO | CAUTION | NO-GO |
|-----------|-----|---------|-------|
| Wind (sustained) | <10 m/s | 10-15 m/s | >15 m/s |
| Gusts | <12 m/s | 12-18 m/s | >18 m/s |
| Visibility | >5 km | 3-5 km | <3 km |
| Ceiling | >500' AGL | 200-500' AGL | <200' AGL |
| Precipitation | None | Light | Moderate/Heavy |

---

### 10.4 Emergency Contacts Quick Reference

| Contact | Number | When to Use |
|---------|--------|-------------|
| **FIC Kamloops (Direct)** | 250-376-7045 | Fly-away, airspace emergency |
| **NAV CANADA** | 1-866-WXBRIEF | NOTAM, weather briefing |
| **Squamish SAR Base** | [Insert Number] | SAR coordination |
| **RCMP Squamish** | [Insert Number] | Ground emergency |
| **BC Ambulance** | 911 | Medical emergency |

---

### 10.5 Battery Status Quick Reference

| Indicator | Status | Action |
|-----------|--------|--------|
| 100-60% | GREEN | Normal operations |
| 59-40% | YELLOW | Plan return, monitor |
| 39-25% | ORANGE | RTH immediately |
| 24-15% | RED | Land ASAP, auto-RTH active |
| <15% | CRITICAL | Auto-land imminent |

> **SAR MINIMUM:** Start all SAR flights with >95% battery charge.

---

**END OF FORMS & MAINTENANCE MANUAL**

*This document is part of the SSAR RPAS Operator Certificate (RPOC) documentation package.*`
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RPOC_CONTENT;
}
