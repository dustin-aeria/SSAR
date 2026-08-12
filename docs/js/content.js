// the Program RPOC Content Data
// Full comprehensive content from all 5 consolidated manuals
// Generated: 2026-03-09 | Updated: 2026-08-11 (v2.0 regulatory update)

const RPOC_CONTENT = {
    operations: {
        title: "Operations Manual",
        icon: "fa-plane",
        docCount: 14,
        content: `# S2S SAR Drone Program - Operations Manual

## Sea to Sky Corridor Search and Rescue - Regional Drone Program

---

| Document | OPS-MANUAL |
|----------|------------|
| Version | 2.0 |
| Effective | August 2026 |
| Review Date | August 2027 |
| Regulatory Reference | CAR 901.217-901.223, Standard 922, STSC-003, STSC-004 |

---

## Table of Contents

1. [Introduction and Regulatory Framework](#1-introduction-and-regulatory-framework)
2. [RPAS Operator Certificate (RPOC)](#2-rpas-operator-certificate-rpoc)
3. [Concept of Operations (CONOPS)](#3-concept-of-operations-conops)
4. [Aircraft](#4-aircraft)
5. [Operating Authority and Standard Scenario Operations](#5-operating-authority-and-standard-scenario-operations)
6. [Site Survey and Flight Planning](#6-site-survey-and-flight-planning)
7. [Search Operations](#7-search-operations)
8. [Communications](#8-communications)
9. [Environmental Operations](#9-environmental-operations)
10. [Weather Minimums](#10-weather-minimums)
11. [Advanced Procedures](#11-advanced-procedures)
12. [General Flight Procedures](#12-general-flight-procedures)
13. [Payload Delivery Operations](#13-payload-delivery-operations)
14. [Emergency Contacts](#14-emergency-contacts)
15. [Document Control](#15-document-control)

---

## 1. Introduction and Regulatory Framework

### 1.1 Purpose

This Operations Manual establishes the operating standards, procedures, and requirements for all Remotely Piloted Aircraft Systems (RPAS) operations conducted by the S2S SAR Drone Program. This manual serves as the primary operational reference document for the Program RPAS Operator Certificate (RPOC).

### 1.2 Scope

This manual applies to all RPAS operations conducted under the S2S SAR Drone Program by its participating Sea to Sky corridor search and rescue organizations. In this manual, "the Program" means the shared S2S SAR Drone Program, and "the Organization" means the participating search and rescue organization conducting the operation. Operations covered include:

- Visual Line of Sight (VLOS) operations, including Extended VLOS and sheltered operations (CARs Part IX, Division V)
- Level 1 Complex Operations: low-risk BVLOS under an RPAS Operator Certificate (CARs Part IX, Division VI)
- High Altitude VLOS operations above 400' AGL up to 1000' AGL (STSC-003), where the Organization holds a valid SFOC
- Low-Risk BVLOS by Advanced pilots (STSC-004), where the Organization holds a valid SFOC

### 1.3 Regulatory Compliance

The Canadian Aviation Regulations are the governing authority for all Program operations. JARUS SORA methodology is applied on top of, and never in place of, the CARs; where the two differ, the CARs prevail. All Program RPAS operations shall comply with:

- **Canadian Aviation Regulations Part IX**, including the General Operating and Flight Rules (CAR 901.11 to 901.51), Advanced Operations (Division V), Level 1 Complex Operations (Division VI, CAR 901.87 to 901.96), the RPAS Operator Certificate requirements (Division XII, CAR 901.213 to 901.223), and Special Flight Operations (Subpart 3, CAR 903.01 to 903.04)
- **Standard 921** (Pilot Certification), **Standard 922** (RPAS Safety Assurance), and **Standard 923** (Vision-Based Detect and Avoid)
- **AC 903-001** (RPAS Operational Risk Assessment and Standard Scenarios STSC-001 to STSC-005) and **AC 901-002** (RPOC Manual Development)
- **JARUS SORA v2.5** methodology, applied as supporting risk assessment practice under the CARs
- The conditions of the RPAS Operator Certificate held by the Organization
- The conditions of any valid SFOC held by the Organization

#### 1.3.1 Core Operating Rule

> **Fly within the parameters your pilot certificate allows. Operations beyond those parameters require a valid SFOC held by your Organization, and only pilots granted privileges under that SFOC may conduct them, in accordance with its conditions.**

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

## 2. Operating Certificates and Authority

### 2.1 Certificate Structure

Each participating organization holds its own certificates. This shared documentation supports each Organization's RPOC and SFOC applications and serves as common program policy; certificates themselves are issued to, and held by, each Organization individually.

| Certificate | Held By | Purpose |
|-------------|---------|---------|
| RPAS Operator Certificate (RPOC), CAR 901.214 | Each Organization | Required for Level 1 Complex (Division VI) BVLOS operations |
| SFOC-RPAS, CAR 903.03 | Each Organization (as required) | Operations beyond certificate privileges (e.g. STSC-003, STSC-004 for Advanced pilots) |
| Pilot Certificates, CAR 901.55 / 901.64 / 901.90 | Individual pilots | Basic, Advanced, or Level 1 Complex privileges |

### 2.2 Certificate Register (Per Organization)

Each Organization maintains its own certificate register internally and references this documentation when applying. The register records, at minimum:

| Record | Detail |
|--------|--------|
| RPOC | Number, issue date, Accountable Executive named on application (CAR 901.214) |
| SFOC(s) | Number, validity period, authorized operations, pilots granted privileges (CAR 903.03/903.04) |
| Standard 922 Declarations | RPAS models and declarations relied upon (CAR 901.95, 901.194) |
| ATS Authorizations | Any standing authorizations for controlled airspace (CAR 901.71) |

The register is made available to Transport Canada on request (CAR 901.217(4), 901.221(2)) and reviewed at least annually.

### 2.3 Accountable Executive Accountability - CAR 901.217 and 901.218

Each Organization appoints an Accountable Executive (CAR 106.02, CAR 901.218(2)) who:

1. **Has overall responsibility** for operations authorized under the Organization's RPOC, including compliance with the Canadian Aviation Regulations, RPOC conditions, and Program policies
2. **Is accountable to Transport Canada** for all RPAS operations conducted under the authority of that RPOC
3. **Ensures adequate resources** are available for safe operations, maintenance, training, and safety management
4. **Maintains authority** to suspend operations, ground aircraft, or restrict pilot privileges when safety concerns arise
5. **Controls the safety processes** required by CAR 901.218 and cannot delegate this accountability

Each Organization also appoints a Person Responsible for RPAS Maintenance (CAR 901.220) and designates a Pilot-in-Command for every Level 1 Complex (Division VI) operation (CAR 901.222).

### 2.4 Authorized Operations

Operations available to Program pilots depend on the pilot certificate held and the certificates held by their Organization:

| Pilot Certificate | Under Organization RPOC | Under Organization SFOC (if held and granted) |
|-------------------|-------------------------|-----------------------------------------------|
| Advanced (CAR 901.64) | VLOS / EVLOS / sheltered operations per Division V, max 400' AGL | STSC-003 High Altitude VLOS to 1000' AGL; STSC-004 Low-Risk BVLOS per SFOC conditions |
| Level 1 Complex (CAR 901.90) | All Advanced privileges, plus Division VI BVLOS: uncontrolled airspace, max 400' AGL, over sparsely populated areas or at least 1 km from populated areas | STSC-003 High Altitude VLOS to 1000' AGL per SFOC conditions |

### 2.5 Pilot Certification Requirements

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
- **Visual Observers:** A visual observer is a crew member trained to assist the pilot in ensuring the safe conduct of a flight (CAR 900.01). Under the Organization's RPOC, the qualification required is simply that the person has been trained under the Program training program (CAR 901.219). A trained VO may be used on any operation where a VO is required or where an extra set of eyes is useful. Two regulatory exceptions apply: for **extended VLOS** operations the VO must additionally hold a pilot certificate (CAR 901.75), and for **BVLOS** operations where visual observer detect and avoid is relied upon, the VO must be trained in accordance with Standard 923 (CAR 901.95(2))

### 2.6 Operating Area

- Sea to Sky Corridor, British Columbia (the full corridor and surrounding terrain)
- Each Organization's search and rescue jurisdiction
- Provincial parks and wilderness areas in the region
- Operations may be conducted throughout British Columbia as required for SAR missions, subject to appropriate airspace authorizations

---

## 3. Concept of Operations (CONOPS)

### 3.1 Preamble

This Concept of Operations outlines RPAS operations conducted under the S2S SAR Drone Program by its participating Sea to Sky corridor search and rescue organizations, operating throughout the Sea to Sky Corridor of British Columbia. This document supports each Organization's RPOC and, where applicable, SFOC applications, covering:

- **Level 1 Complex Operations (CAR 901.87):** BVLOS operation of a small RPA in uncontrolled airspace, max 400' AGL, over sparsely populated areas, conducted under the Organization's RPOC by Level 1 Complex pilots
- **(STSC-003)** VLOS operation of a small RPA (>250g up to 25kg) in uncontrolled airspace above 400' AGL up to 1000' AGL, under the Organization's valid SFOC
- **(STSC-004)** BVLOS operation of a small RPA (>250g up to 25kg) over low-risk ground areas using visual observer DAA, by Advanced pilots under the Organization's valid SFOC

### 3.2 Public Good and Objective

The S2S SAR Drone Program provides RPAS capability to the volunteer search and rescue organizations of the Sea to Sky corridor of British Columbia, each a first responder non-profit providing 24/7 SAR services in its own jurisdiction. The primary objective is to conduct safe and effective BVLOS RPAS flights supporting the Program operations.

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
| Operational Area | Anywhere within the Program boundary; minimum distance per CAR Part 901 |
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
- Validate maintenance; comply with regulations, certificate privileges, and the conditions of any applicable SFOC
- Monitor RPAS; plan operations; conduct Rapid Site Survey briefings
- Communicate to authorities; prepare incident/accident reports

#### Visual Observer (VO)
- Monitor airspace for hazards; communicate to PIC; maintain sterile cockpit
- Assist in setup/teardown; double-check maintenance; prepare payloads

### 3.5 Pilot Staging Process

| Stage | Description | Allowed Operations | Progression Criteria |
|-------|-------------|-------------------|---------------------|
| 1 | Basic License & Onboarding | Sub-250g RPAS flights | 20 training flights; complete the Program Manuals |
| 2 | Advanced License Training | VLOS <400 ft AGL | Advanced License; 20 additional flights |
| 3 | BVLOS Training & Operations | BVLOS under supervision | 20 BVLOS flights; supervisor sign-off |
| 4 | High-Altitude Training | High altitude under supervision | 20 high-altitude flights; supervisor sign-off |
| 6 | Full Operator Privileges | All operations permitted by certificates held and any valid SFOC | All stages complete; final sign-off |

### 3.6 Operational Constraints (NO-GO)

Operations shall NOT proceed if ANY of the following conditions exist:

- Weather breaches RPAS limitations; high wind warnings on Ground Control
- Operator fatigue or anxiety; unmanaged launch/land site contamination
- Risk of conflict with any airspace user
- Battery less than 90% full
- Missing access to the Program manuals (Ops Manual, CONOPS, Site Survey, and any applicable SFOC)

> **WITHOUT THESE DOCUMENTS READILY AVAILABLE - DO NOT FLY.**

### 3.7 In-Field Rationale

- **BVLOS:** Permitted when mission requires increased awareness beyond VLOS, with radio link intact
- **High-Altitude (>400 ft AGL):** Authorized only when mission requires visibility essential to locating a subject

> **Under no circumstances is an operator permitted to fly BVLOS or at high altitudes unless deemed essential for the SAR operation.**

### 3.8 Hierarchy of Operational Safety

| Priority | Area | Description |
|----------|------|-------------|
| 1 | Bystander Safety | Safety to bystanders (uninformed persons and manned aircraft). Must not put at risk the larger environment. |
| 2 | Adherence to Regulations | CARs Part IX, certificate privileges and SFOC conditions, and Program Operational Procedures. |
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

| OSO # | Topic | the Program Evidence |
|-------|-------|---------------|
| 1 | Operator Competency | Comprehensive Ops Manual; all pilots advanced certified |
| 3 | Maintenance | Strictly per the Program Ops Manual; AirData secondary check |
| 7 | Pre-Flight Inspection | Detailed in Ops Manual; included in AirData portal |
| 8,11,14,21 | Operational Procedures | Ops Manual and CONOPS; regular review meetings |
| 9,15,22 | Crew Training | All operators trained on JARUS SORA and OSOs |
| 16 | Multi-crew Coordination | the Program Ops Manual crew communication procedures |
| 17 | Crew Fitness | Ops Manual fitness requirements; Rapid Site Survey fit-for-duty |
| 23 | Environmental Limits | Manufacturer limitations per Ops Manual |

---

## 4. Aircraft

### 4.1 Aircraft Eligibility

The Program does not restrict operations to a fixed list of models. Any RPAS may be operated under this documentation provided it meets the eligibility criteria below and is entered in the Organization's aircraft register before use.

| Criterion | Requirement |
|-----------|-------------|
| Registration | Registered with Transport Canada and marked with its registration number (CAR 900.13, 900.14) |
| Safety assurance | For operations requiring it, covered by a manufacturer declaration under Standard 922 appropriate to the intended operation (CAR 901.194); for Division VI BVLOS, the declaration required by CAR 901.95 |
| Mass and class | Within the mass and dimension limits assumed by the Program's risk assessment (small RPA up to 25 kg; the SORA assessment in the Safety Manual assumes a 1 m, 25 m/s class aircraft). Aircraft outside these assumptions require a revised risk assessment before use |
| Serviceability | Maintained under the Organization's Maintenance Control Manual, serviceable and airworthy for the intended flight (CAR 901.29) |
| Configuration | Equipped for the intended operation, including anti-collision lighting for BVLOS (CAR 901.38.1) and any equipment required by an applicable SFOC |
| Crew qualification | Pilots hold current type-specific training and competency sign-off for that model (Training Manual Section 4) |
| Suitability | Assessed by the Chief Pilot as suitable and safe for the intended operating environment |

Aircraft that do not meet a criterion above are not flown on Program operations. Where an Organization introduces a new type, the Chief Pilot records the eligibility assessment, adds the type to the aircraft register and maintenance program, and establishes type training before the aircraft is tasked.

### 4.2 Current Reference Fleet

The following aircraft are the models most widely used by SAR organizations at present and are documented in detail throughout this suite as the reference types. They are examples of eligible aircraft, not the limit of what may be flown.

| Aircraft | MTOM | Notes |
|----------|------|-------|
| DJI M30T | 3.77 kg | Reference type; specifications and procedures documented below |
| DJI Matrice 4TD | 2.3 kg | Reference type; specifications and procedures documented below |

Where this documentation gives model-specific procedures, checklists, or figures for these types, the equivalent information for any other eligible aircraft is drawn from that aircraft's flight manual and recorded in the Organization's aircraft register.

### 4.3 DJI Matrice 30T (M30T) Specifications

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

### 4.4 DJI Matrice 4TD (M4TD) Specifications

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

## 5. Operating Authority and Standard Scenario Operations

### 5.1 Operating Authority Framework

> **Core Operating Rule: Fly within the parameters your pilot certificate allows. Operations beyond those parameters require a valid SFOC held by your Organization, and only pilots granted privileges under that SFOC may conduct them, in accordance with its conditions.**

| Operation | Authority | Pilot Requirement |
|-----------|-----------|-------------------|
| VLOS / EVLOS / sheltered, max 400' AGL | Pilot certificate (Divisions IV / V) | Advanced or Level 1 Complex |
| Low-Risk BVLOS, max 400' AGL, uncontrolled airspace | Organization RPOC (Division VI) | Level 1 Complex |
| Low-Risk BVLOS by Advanced pilots (STSC-004) | Organization's valid SFOC | Advanced, named or granted under the SFOC |
| High Altitude VLOS above 400' to 1000' AGL (STSC-003) | Organization's valid SFOC | Advanced or Level 1 Complex, granted under the SFOC |

STSC-003 and STSC-004 are Transport Canada standard scenarios (AC 903-001, Appendix D) used by participating organizations to apply for and operate under SFOCs. Where no valid SFOC is held, those envelopes are not available and operations are limited to certificate privileges.

### 5.2 Scenario Parameters

| Parameter | Level 1 Complex BVLOS (RPOC) | STSC-003 (SFOC) | STSC-004 (SFOC) |
|-----------|------------------------------|-----------------|-----------------|
| Operation Type | Low-Risk BVLOS | High Altitude VLOS | Low-Risk BVLOS |
| Visibility | BVLOS permitted | VLOS maintained | BVLOS permitted |
| Max Altitude | 400' AGL | 1000' AGL | 400' AGL |
| Ground Environment | Sparsely populated (more than 5, up to 25 people/km²) or at least 1 km from a populated area (CAR 901.87) | Per SFOC conditions | Sparsely populated per SFOC conditions |
| Airspace | Uncontrolled only | Uncontrolled (Class G) | Uncontrolled (Class G) |
| Aerodrome Standoff | At least 5 NM from listed aerodromes (CAR 901.47(3)) | Per SFOC conditions | At least 5 NM from listed aerodromes |
| ATS Coordination | Not required | Required per SFOC conditions | Not required |
| Pilot Certificate | Level 1 Complex | Advanced or higher, granted under SFOC | Advanced or higher, granted under SFOC |

### 5.3 Level 1 Complex BVLOS Operations (Division VI, under RPOC)

#### 5.3.1 Regulatory Conditions

- Pilot holds a Level 1 Complex pilot certificate (CAR 901.89, 901.90) and meets recency (CAR 901.91)
- Operation conducted by, or on behalf of, an RPAS operator holding a valid RPOC (CAR 901.88)
- A Pilot-in-Command is designated for the operation (CAR 901.222)
- Maximum altitude 400' AGL (CAR 901.25); uncontrolled airspace only
- Ground environment: over a sparsely populated area (more than 5, up to 25 people/km²) or at a distance of at least 1 km from a populated area (more than 5 people/km²) for small RPA; medium RPA require at least 1 km from any populated area (CAR 901.87)
- Weather: ground visibility at least 3 SM and clear of cloud (CAR 901.34(3))
- Anti-collision lights on: white, flashing 40 to 100 cycles per minute, visible 1 mile in all directions (CAR 901.38.1)
- At least 5 NM from any aerodrome listed in the CFS or Water Aerodrome Supplement (CAR 901.47(3))
- Standard 922 declaration in place for the RPAS model (CAR 901.95); the Program uses visual observer detect and avoid in accordance with Standard 923, which satisfies CAR 901.95(2) in lieu of a 922.10 DAA declaration
- The Organization's RPAS Operations Manual immediately available to crew (CAR 901.30(2))

#### 5.3.2 Program Operating Limits

- Maximum distance: 2 km from PIC, or as authorized in the mission plan
- Visual observers deployed in accordance with Standard 923 detection volume requirements
- Lost link procedures pre-programmed and briefed

### 5.4 STSC-003 High Altitude VLOS Procedures (SFOC Required)

STSC-003 operations may only be conducted where the Organization holds a valid SFOC authorizing them, by pilots granted privileges under that SFOC. STSC-003 operates within a maximum altitude of 1000' AGL. Standard operations are conducted at 400' AGL using terrain-following profiles. The 1000' AGL ceiling accommodates Return-to-Home (RTH) emergency scenarios in mountainous terrain where terrain-following cannot be maintained.

#### 5.4.1 STSC-003 Operational Limitations

- Maximum altitude: 1000' AGL
- Minimum weather: 3 SM visibility, clear of cloud
- Daylight operations only (unless night ops approved)
- VLOS maintained at all times
- ATS coordination completed in accordance with the SFOC conditions before operations

#### 5.4.2 ATS Coordination Protocol

> **MANDATORY: All STSC-003 operations require ATS coordination as a condition of the SFOC.**

##### Coordination Timeline (per SFOC conditions)

| Timing | Action | Method |
|--------|--------|--------|
| Advance notice per SFOC | Initial notification to appropriate ATS unit | Phone or online portal |
| 12 hours prior | Confirm operation details | Phone/email confirmation |
| 1 hour prior | Activation notification | Phone to ATS unit |
| At completion | Termination notification | Phone to ATS unit |

> If the coordination required by the SFOC cannot be completed, STSC-003 privileges are not available for that mission. Operate within certificate privileges instead (Section 5.1).

##### ATS Units

| Airspace | ATS Unit | Contact | Frequency |
|----------|----------|---------|-----------|
| Class G | Vancouver FIC | 1-866-WXBRIEF | 126.7 MHz |
| Class E (>700' AGL) | Vancouver Centre | (604) 775-8800 | 132.35 MHz |
| Within 5 NM CYSE | Squamish FSS | Coordinate via FIC | 122.2 MHz |
| Helicopter Ops | Local heli ops | Via SAR tasking | As assigned |

#### 5.4.3 Altitude Band Procedures

| Altitude Band | Requirements | Additional Procedures |
|---------------|--------------|----------------------|
| Surface - 400' AGL | Standard VLOS | Normal operations |
| 400' - 700' AGL | ATS coordination required | Enhanced VO positioning |
| 700' - 1000' AGL | ATS coordination mandatory | Active radio communication, monitoring 126.7 |

#### 5.4.4 Emergency Descent Procedure

1. **IMMEDIATELY** initiate descent
2. **DESCEND** at max safe rate
3. **TARGET** altitude below 400' AGL
4. **MAINTAIN** horizontal position or move away from traffic

### 5.5 STSC-004 Low-Risk BVLOS Procedures (SFOC, Advanced Pilots)

STSC-004 provides the SFOC pathway for Advanced pilots to conduct low-risk BVLOS where the Organization holds a valid SFOC authorizing it. Level 1 Complex pilots conduct the equivalent envelope under the Organization's RPOC (Section 5.3) and do not require the SFOC.

#### 5.5.1 STSC-004 Operational Limitations

- Maximum altitude: 400' AGL
- Maximum distance: 2 km from PIC (or as authorized)
- Minimum weather: 3 SM visibility, clear of cloud
- Sparsely populated areas only (more than 5, up to 25 people/km²), verified by site survey
- Visual observers deployed per SFOC and Standard 923
- Anti-collision lights on (CAR 901.38.1)
- At least 5 NM from listed aerodromes (CAR 901.47(3))
- Lost link procedures must be pre-programmed

#### 5.5.2 Pre-Flight Requirements

- Verify ground environment meets the sparsely populated definition (more than 5, up to 25 people/km²)
- Establish ground observation of the area (SORA mitigation M1(C))
- Confirm weather within limits
- Set RTH altitude and parameters
- Verify C2 link margin adequate

#### 5.5.3 Ground Risk Buffer

Per CAR 900.01 the operational volume comprises the flight geography, the contingency volume, and the ground risk buffer; the buffer must be at least equal to the planned maximum altitude (1:1).

| Aircraft | Max Speed | Glide Ratio | Max Alt | Calc. GRB | Applied GRB |
|----------|-----------|-------------|---------|-----------|-------------|
| DJI M30T | 23 m/s | ~1:1 | 400' | ~37m | 50m |
| DJI M4TD | 21 m/s | ~1:1 | 400' | ~34m | 50m |

#### 5.5.4 Lost Link Behavior - DJI M30T

| Behavior | PIC Action |
|----------|------------|
| Warning displayed, continues flight | Attempt reconnection |
| Hover in place | Move to better signal area |
| Begin RTH if not restored | Monitor telemetry |
| Auto-RTH at preset altitude | Prepare for landing |
| PIC control resumed | Assess and continue/abort |

#### 5.5.5 Weather Minimums for BVLOS (CAR 901.34(3))

| Parameter | Minimum | Maximum |
|-----------|---------|---------|
| Visibility | 3 SM | - |
| Ceiling | Clear of cloud | - |
| Wind | - | 12 m/s sustained, 15 m/s gusts |
| Temperature | -20°C | +45°C |
| Precipitation | None | - |

### 5.6 GPS Failure Procedures

> **CRITICAL: GPS failure requires immediate response.**

1. **DO NOT PANIC** - maintain attitude control
2. **SWITCH** between flight modes
3. **CHANGE** altitude to maintain visual contact
4. **NAVIGATE** using visual references and compass
5. **FLY** back to operator position
6. **LAND** as soon as practical

### 5.7 Time-Critical SAR Operations

#### 5.7.1 Selecting Authority Under Time Pressure

When a SAR activation arrives, the PIC identifies the operating authority available now and flies within it. There is no notification decision tree: fly within the parameters your certificate allows, or under a valid SFOC if one is held and its conditions (including any ATS coordination) can be met before launch.

| Authority Available | Capability |
|---------------------|------------|
| Pilot certificate only | VLOS / EVLOS / sheltered per Division V; L1C pilots may also fly Division VI BVLOS under the Organization's RPOC, max 400' AGL |
| Valid SFOC, conditions met | Add STSC-003 high altitude VLOS (to 1000' AGL) and/or STSC-004 BVLOS for Advanced pilots, per the SFOC |

#### 5.7.2 Operational Effectiveness at 400' AGL

- Optimal thermal detection altitude (80-120m AGL) falls within the 400' AGL limit
- Terrain-following search patterns are well-suited to mountainous SAR environments
- Level 1 Complex BVLOS under the RPOC requires no ATS coordination in uncontrolled airspace, supporting immediate launch

#### 5.7.3 Terrain-Following Operations

- Maintain consistent AGL following natural terrain contours
- Optimal thermal search: 80-120 meters (260-400 feet) AGL
- Use contour search patterns in mountainous terrain
- RTH altitude must be set above highest terrain in operating area

#### 5.7.4 Time-Critical Pre-Flight Checklist

- [ ] Operating authority identified (certificate privileges / RPOC Division VI / valid SFOC)
- [ ] If SFOC privileges used: SFOC valid, pilot granted, conditions (including ATS coordination) met
- [ ] Maximum altitude set per authority selected
- [ ] Terrain-following flight plan briefed
- [ ] Crew briefed on operational constraints

### 5.8 Crew Configuration

| Operation Type | Minimum Crew | Recommended |
|----------------|--------------|-------------|
| VLOS <400' AGL | PIC + 1 VO | PIC + 1 VO + 1 Assist |
| STSC-003 up to 1000' | PIC + 2 VO | PIC + 2 VOs + 1 Assist |
| BVLOS (Division VI or STSC-004) | PIC + 1 VO | PIC + 1 VO + 1 Assist |

---

## 6. Site Survey and Flight Planning

### 6.1 Purpose - CAR 901.27

To ensure that all Program RPAS operations are planned effectively to mitigate risk and ensure compliance with CARs 901.27 (Site Survey) and 901.24 (Pre-flight Information).

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

For time-critical SAR missions where a desktop study is impossible, the PIC must complete the Program Rapid Site Survey on-site.

**Format:** Digital (EFB/Tablet) or laminated checklist in the Operations Kit

> **Minimum Standard:** Even in emergencies, the survey must confirm:
> - Airspace safety (conflict check via ForeFlight/NAV Drone)
> - No bystanders in the immediate Takeoff/Landing Zone
> - Weather suitability (wind/visibility)

> **Go/No-Go:** If the Rapid Survey reveals risks that cannot be mitigated (e.g., icing, non-cooperative bystanders), the operation is a No-Go.

#### 6.4.1 Operating Authority Selection for Time-Critical Operations

During the Rapid Site Survey, the PIC identifies the operating authority available and flies within it (Core Operating Rule, Section 1.3.1):

| Authority | Availability Check | Capability |
|-----------|--------------------|------------|
| Pilot certificate (Division IV/V) | Always available to certified, current pilots | VLOS / EVLOS / sheltered, max 400' AGL |
| Organization RPOC (Division VI) | Pilot holds Level 1 Complex certificate; Division VI conditions met (Section 5.3.1) | BVLOS, max 400' AGL, uncontrolled airspace, no ATS coordination required |
| Organization SFOC | SFOC valid, pilot granted privileges, all SFOC conditions (including ATS coordination) can be met before launch | STSC-003 high altitude VLOS to 1000' AGL; STSC-004 BVLOS for Advanced pilots |

> **This authority selection is a mandatory element of the Rapid Site Survey for all SAR callouts.**

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
- **Retention:** Records retained for 24 months per the Program standards (exceeding CAR 901.27)
- **Review:** Post-mission, update survey with actual conditions to aid future operations

### 6.7 Program Rapid Site Survey Checklist

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

#### 5. Operating Authority (Time-Critical)
- [ ] Authority identified: certificate privileges / RPOC Division VI (L1C pilot) / valid SFOC
- [ ] If SFOC privileges used: pilot granted, all SFOC conditions (incl. ATS coordination) met
- [ ] Maximum altitude set per authority selected (400' AGL unless SFOC permits higher)
- [ ] Terrain-following profile briefed
- [ ] Crew briefed on operational constraints

**Decision:** [ ] GO    [ ] NO-GO

**PIC Signature:** ___________________    **Date:** ___________________

### 6.8 Comprehensive Site Survey - Operational Theatre

#### 6.8.1 Description of Broad Operating Area

The Program region spans the Sea to Sky corridor, comprising the combined search and rescue jurisdictions of the participating organizations. It extends from Howe Sound and its islands in the south, north through the Squamish River and Elaho watersheds to Clendinning Provincial Park, and continues through the Whistler and Pemberton valleys to the surrounding alpine and interior boundaries of the region. Each Organization's specific boundary is recorded in its own tasking area documentation; the surrounding mountainous terrain is included throughout.

#### 6.8.2 Topography and Geography

The Program boundary is situated in the Sea to Sky corridor of British Columbia. The region is characterized by diverse and rugged natural landscape, positioned between the Coast Mountains to the east and Howe Sound to the west, and extending north through the Whistler and Pemberton valleys.

- **Mountainous Terrain:** Coast Mountains with steep, rocky slopes; elevations exceeding 2,000 metres
- **Valleys and River Systems:** Deep valleys following river systems including the Squamish, Cheakamus, Green, and Lillooet rivers
- **Forested Areas:** Dense temperate rainforests with coniferous and deciduous trees
- **Water Bodies:** Howe Sound and various lakes and rivers

#### 6.8.3 Population Density

The Program region corresponds to the Squamish-Lillooet Regional District census district, with a population density of 3.1 people/km² across its four municipalities (Squamish, Whistler, Pemberton, and Lillooet). Municipal areas are excluded from operations, making the effective density in the operating area lower still.

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
| Recreational Areas | Popular spots (Stawamus Chief, Shannon Falls) may have unexpected persons | the Program maintains 100' minimum separation from uninvolved persons. |
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

This section establishes standard operating procedures for RPAS search operations conducted by the S2S SAR Drone Program, covering search pattern execution, coordination protocols, and integration with ground teams.

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

To establish the communication protocols required to ensure the safety, coordination, and regulatory compliance of Program RPAS operations. This policy ensures effective Crew Resource Management (CRM) and reliable information flow during all phases of flight.

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

All operations within the Program boundary are in Class G airspace. Overlapping controlled airspace:

| Location | Airspace Class | Altitude Range |
|----------|---------------|----------------|
| Furry Creek to southern border | Class C | 6501' to 8500' MSL |
| Furry Creek to northern Squamish boundary | Class C | 8501' to 9500' MSL |
| North of Squamish to Cloudburst/Garibaldi | Class E | 700' AGL to 9500' MSL |
| North of Garibaldi Lake to Daisy Lake | Class C | 9501' to 12,500' MSL |

**Known Routes:** V321 at 11,000' (N/S) and T606 at 10,500' (NE/SW) cross over the Program area.

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
- Two-way communication capabilities required (cellular, radio, or the Program network); tested via signal check before ops

---

### 8.9 C3 Link Specification (OSO#06)

#### 8.9.1 Purpose

This section documents the Command, Control, and Communication (C3) link specifications for all Program RPAS to meet SAIL IV OSO#06 requirements for adequate C3 link performance.

#### 8.9.2 C3 Link Components

| Component | Function | Requirement |
|-----------|----------|-------------|
| Command Link | Control inputs to aircraft | Bi-directional, low latency |
| Control Link | Flight commands and modes | Reliable, redundant |
| Telemetry Link | Aircraft status to GCS | Real-time, continuous |
| Payload Link | Camera/sensor data | High bandwidth (video) |

#### 8.9.3 Aircraft C3 Specifications

**DJI Matrice 30T**

| Parameter | Specification | Operational Limit |
|-----------|---------------|-------------------|
| Control System | O3 Enterprise | - |
| Operating Frequency | 2.4 GHz / 5.8 GHz (auto-switching) | Per ISED regulations |
| Max Transmission Range | 15 km (unobstructed) | Operational: per VLOS/BVLOS limits |
| Video Transmission | 1080p @ 30fps | Minimum for SAR ops |
| Latency | <200ms (typical 120ms) | Max acceptable: 500ms |
| Redundancy | Dual antenna, frequency hopping | Required |
| Lost Link Action | Configurable (RTH, Hover, Land) | Set to RTH |
| Signal Strength Warning | <30% signal | Initiate return |

**DJI Matrice 4TD**

| Parameter | Specification | Operational Limit |
|-----------|---------------|-------------------|
| Control System | O4 Enterprise | - |
| Operating Frequency | 2.4 GHz / 5.8 GHz (auto-switching) | Per ISED regulations |
| Max Transmission Range | 20 km (unobstructed) | Operational: per VLOS/BVLOS limits |
| Video Transmission | 1080p @ 60fps / 4K | Minimum 1080p for SAR |
| Latency | <130ms (typical) | Max acceptable: 500ms |
| Redundancy | Quad antenna, frequency hopping | Required |
| Lost Link Action | Configurable (RTH, Hover, Land) | Set to RTH |
| Signal Strength Warning | <30% signal | Initiate return |

#### 8.9.4 Link Performance Requirements

| Condition | Minimum Requirement | Action if Not Met |
|-----------|---------------------|-------------------|
| Signal strength | >30% at all times | Return to higher signal area |
| Video latency | <500ms | Reduce range, return |
| Control response | <1 second | Land immediately |
| Link quality | Stable (no dropouts >2 sec) | Return and troubleshoot |

#### 8.9.5 Terrain and Environmental Factors

| Factor | Impact on C3 Link | Mitigation |
|--------|-------------------|------------|
| Mountains/ridges | Signal blocking | Maintain line of sight to GCS |
| Dense forest | Signal attenuation | Increase altitude, reposition GCS |
| Urban areas | RF interference | Monitor signal quality, frequency hop |
| Weather (rain/snow) | Minor attenuation | Account for reduced range |
| Distance | Signal degradation | Stay within tested limits |

#### 8.9.6 Lost Link Procedures

| Condition | Aircraft Response | Crew Action |
|-----------|-------------------|-------------|
| Signal loss <10 sec | Hover in place | Attempt to regain signal |
| Signal loss 10-30 sec | Begin RTH | Move to recovery position |
| Signal loss >30 sec | Continue RTH | Prepare for autonomous landing |
| Battery critical during RTH | Auto-land | Monitor via backup means |

#### 8.9.7 C3 Link Verification

**Pre-Flight Check:**
- [ ] Signal strength >80% at GCS location
- [ ] Video feed clear and stable
- [ ] Control inputs responsive
- [ ] RTH altitude and location set
- [ ] Lost link actions configured

**In-Flight Monitoring:**
- Monitor signal strength continuously
- Note any signal degradation areas
- Record link issues in flight log

---

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

To establish the minimum meteorological conditions required for safe RPAS operations. This policy ensures compliance with Canadian Aviation Regulations (CARs) Part IX (specifically 901.34 and 901.35) and defines the environmental limits for the Program equipment.

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

### 10.8 Adverse Conditions Test Protocol (OSO#23 and OSO#24)

#### 10.8.1 Purpose

This section establishes the testing protocol to verify aircraft and crew capability to operate in adverse conditions as required by SAIL IV OSO#23/#24. The protocol ensures that procedures for handling deteriorating conditions are validated through controlled testing.

#### 10.8.2 Adverse Conditions Categories

| Category | Conditions | Aircraft Impact |
|----------|------------|-----------------|
| **Wind** | Sustained >8 m/s, Gusts >12 m/s | Control degradation, position hold affected |
| **Temperature** | <0°C or >35°C | Battery performance, electronics |
| **Precipitation** | Light rain, Snow | Sensor obstruction, ingress |
| **Visibility** | Reduced (haze, smoke) | Visual tracking, sensor range |
| **Combined** | Multiple factors | Cumulative degradation |

#### 10.8.3 Test Protocol - Wind Conditions

| Test | Condition | Aircraft Response | Pass Criteria |
|------|-----------|-------------------|---------------|
| W-01 | Sustained 8 m/s | Position hold | Maintains position ±5m |
| W-02 | Sustained 10 m/s | RTH execution | Successful return |
| W-03 | Gust 12 m/s | Emergency land | Controlled descent |
| W-04 | Cross-wind hover | Stability | Level attitude maintained |

**Test Procedure:**
1. Monitor wind speed with calibrated anemometer
2. Conduct test at safe altitude (>30m AGL)
3. Verify position hold accuracy via GPS telemetry
4. Document aircraft behavior and any anomalies
5. Test RTH function under wind load

#### 10.8.4 Test Protocol - Cold Weather Conditions

| Test | Condition | Aircraft Response | Pass Criteria |
|------|-----------|-------------------|---------------|
| C-01 | 0°C ambient | Normal operations | All functions nominal |
| C-02 | Battery pre-heated | Launch and climb | Normal power output |
| C-03 | Extended hover (5 min) | Battery monitoring | Voltage stable |
| C-04 | -10°C ambient | Cold-start procedure | Successful startup |

**Test Procedure:**
1. Pre-heat batteries per SOP
2. Conduct warm-up hover (1 min)
3. Monitor battery temperature and voltage
4. Document flight time vs. standard conditions
5. Inspect for ice accumulation post-flight

#### 10.8.5 Test Protocol - Reduced Visibility

| Test | Condition | Aircraft Response | Pass Criteria |
|------|-----------|-------------------|---------------|
| V-01 | Dawn/Dusk | Visual tracking | Strobes visible at 500m |
| V-02 | Light haze | Position awareness | GPS/telemetry reliable |
| V-03 | Sensor performance | Camera/thermal | Adequate image quality |

**Test Procedure:**
1. Establish baseline visibility with reference target
2. Confirm anti-collision lighting visible
3. Verify sensor performance at expected range
4. Document any degradation

#### 10.8.6 Test Protocol - System Degradation

| Test | Simulated Condition | Expected Response | Pass Criteria |
|------|---------------------|-------------------|---------------|
| D-01 | Signal degradation | RTH warning | Automatic alert at 30% |
| D-02 | GPS degradation | ATTI mode entry | Controlled flight maintained |
| D-03 | Battery critical | Forced landing | Safe descent executed |

**Test Procedure:**
1. Fly to edge of signal range
2. Monitor telemetry warnings
3. Verify automatic safety responses
4. Document system behavior

#### 10.8.7 Test Documentation

| Element | Requirement |
|---------|-------------|
| Test date and location | Recorded |
| Aircraft serial number | Recorded |
| Ambient conditions | Measured and recorded |
| Test pilot | Named and signed |
| Results | Pass/Fail with notes |
| Anomalies | Detailed description |

#### 10.8.8 Annual Verification Schedule

| Test Category | Frequency | Season |
|---------------|-----------|--------|
| Wind tolerance | Annual | Fall (Oct-Nov) |
| Cold weather | Annual | Winter (Dec-Jan) |
| Visibility/lighting | Annual | Winter (Dec) |
| System degradation | Annual | Any season |

#### 10.8.9 Test Records Retention

All adverse conditions test records shall be retained for 5 years and made available for third-party audit review per Section 7.9.

---

---

## 11. Advanced Procedures

### 11.1 Purpose

To establish a standardized, sequential workflow for Complex and Extended Range Program RPAS operations. This policy ensures consistency in flight execution, reduces human error during high-stress missions, and ensures compliance with Canadian Aviation Regulations (CARs) 901.23 and the specific requirements for Level 1 Complex (Low-Risk BVLOS) and EVLOS.

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

- **Crew Certs:** Confirm all Visual Observers are trained under the Program training program. For EVLOS only, confirm each VO also holds a pilot certificate (CAR 901.75)
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

Conducted under the Organization's RPOC by Level 1 Complex certified pilots (CARs Division VI); no SFOC is required within Division VI limits. Advanced pilots may conduct the equivalent envelope only under a valid SFOC (STSC-004).

#### 11.5.1 Level 1 Pre-Flight Validation

- **Population Check:** Confirm via Site Survey that the area is sparsely populated (more than 5, up to 25 people/km²) or the route remains at least 1 km from any populated area (CAR 901.87)
- **Visibility Check:** Confirm Ground Visibility is at least 3 Statute Miles and operation remains clear of cloud (CAR 901.34(3))
- **Airspace:** Confirm uncontrolled airspace (BVLOS in controlled airspace requires an SFOC)
- **Aerodrome Standoff:** Confirm at least 5 NM from any aerodrome listed in the CFS or Water Aerodrome Supplement (CAR 901.47(3))
- **Anti-Collision Lights:** Confirm installed and ON (white, 40-100 flashes/min, visible 1 mile, CAR 901.38.1)
- **PIC Designation:** Confirm a Pilot-in-Command is designated for the operation (CAR 901.222)
- **Detect & Avoid:** Visual observer DAA per Standard 923; confirm ADS-B In (e.g., DJI AirSense) is active and audio is audible

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

To establish a standardized, sequential workflow for all Program RPAS operations. This section ensures consistency in flight execution, reduces human error during high-stress missions, and ensures compliance with Canadian Aviation Regulations (CARs) 901.23 (Procedures for Normal Operations).

### 12.2 Scope

This section applies to every flight operation conducted by the Program, including:
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
| 5 | **Documentation:** Pack all required documents - Certificates, any applicable SFOC copy, Emergency Procedures card, Site Survey forms | [ ] Complete |
| 6 | **Support Equipment:** Verify landing pad, pylons, signage, anemometer, and fire extinguisher are packed | [ ] Complete |

### 12.4 On-Site: Team Briefing & Rapid VO Training

Upon arrival at the operational site, conduct the following briefing:

#### 12.4.1 Team Briefing Agenda

| Topic | Content |
|-------|---------|
| **Objectives** | Discuss operational goals, search areas, and expected outcomes |
| **Roles** | Assign Pilot in Command (PIC) and Visual Observer (VO) |
| **Safety** | Review emergency escape routes, nearest medical facility, and "Lost Link" procedures |
| **Airspace** | Confirm airspace classification, NOTAMs, and any active restrictions |
| **Weather** | Current conditions, forecast, and decision criteria |
| **Communications** | Confirm radio channels, callsigns, and backup communication methods |

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

## 13. Payload Delivery Operations

> **STATUS: PROVISIONAL.** This capability is documented but not yet authorized for operational use. Before any payload delivery operation is conducted, the Chief Pilot must confirm that a current Standard 922 declaration exists for the aircraft model and the intended operation (13.4), and the validation program of the implementation plan must be complete. Until both are satisfied, this Section is reference material only.

### 13.1 Purpose and Scope

Payload delivery is the carriage and release of equipment or supplies to a subject or team by RPAS. Typical Program applications are resupply to a stranded but stable subject (shelter, warmth, water, food, radio, medical kit), equipment ferry to a technical rescue site, and repeat delivery runs where helicopter support is unavailable or grounded by weather or darkness.

This Section applies to any delivery conducted with a **medium remotely piloted aircraft**, defined by CAR 900.01 as an aircraft with an operating weight of more than 25 kg and not more than 150 kg. Delivery using a small RPA (250 g to 25 kg) with a manufacturer-declared release mechanism is conducted under the general provisions of Sections 5 and 7 and does not require this Section, though 13.6 to 13.9 remain sound practice.

### 13.2 Operating Weight and the 150 kg Ceiling

**Operating weight** is the weight of the aircraft at any point during the flight, **including any payload and any safety equipment** carried or connected (CAR 900.01). Class is therefore determined by the loaded aircraft, not the empty aircraft.

> **Program rule: operations are planned and flown so that operating weight never exceeds 150 kg.** An aircraft configured or loaded above 150 kg falls outside CARs Part IX Subpart 1 entirely, requires a Special Flight Operations Certificate under CAR 903.01(a), and is not authorized by this documentation.

Reference types:

| Aircraft | Empty weight | Maximum takeoff weight | Class |
|----------|--------------|------------------------|-------|
| DJI FlyCart 30 | Approximately 65 kg with two batteries | 95 kg | Medium RPA |
| DJI FlyCart 100 | 55.2 kg with lifting system; 60.2 kg with winch, excluding batteries | 149.9 kg configuration. A 170 kg performance specification exists and **must not be used**, as it exceeds the Part IX ceiling | Medium RPA at or below 150 kg |

Payload capacity is reduced by altitude and temperature. Load planning uses the manufacturer's derating tables for the conditions on the day, not the sea-level maximum.

### 13.3 Operating Authority

The Core Operating Rule applies unchanged: fly within the parameters your pilot certificate allows, or under a valid SFOC held by your Organization.

| Operation | Division | Authority | Pilot certificate | Reference |
|-----------|----------|-----------|-------------------|-----------|
| VLOS, uncontrolled airspace, 500 ft or more from uninvolved persons | V | Pilot certificate, plus declaration per 13.4 | Advanced or Level 1 Complex | CAR 901.62(d) |
| VLOS, uncontrolled airspace, less than 500 ft but at least 100 ft from uninvolved persons | V | Pilot certificate, plus declaration per 13.4 | Advanced or Level 1 Complex | CAR 901.62(e) |
| VLOS, less than 100 ft from uninvolved persons | V | Pilot certificate, plus declaration per 13.4 | Advanced or Level 1 Complex | CAR 901.62(f) |
| VLOS in controlled airspace | V | Pilot certificate, plus ATS authorization and declaration | Advanced or Level 1 Complex | CAR 901.62(g), 901.71 |
| BVLOS, uncontrolled airspace, at least 1 km from any populated area | VI | Organization RPOC | Level 1 Complex | CAR 901.87(a) |
| BVLOS over a sparsely populated area, or less than 1 km from a populated area | Not available to medium RPA | Small aircraft only | n/a | CAR 901.87(b) |

Two points differ from small-aircraft operations and are easy to get wrong:

1. **Medium RPA BVLOS is more restricted, not less.** The sparsely populated allowance in 901.87(b) is available to small aircraft only. A medium aircraft flying BVLOS must remain at least 1 km from any populated area (more than 5 people per km²) for the whole flight, including the ground risk buffer.
2. **No new pilot certificate is required.** The Advanced certificate covers aircraft up to 150 kg; TP 15263, referenced by CAR 901.64, applies to aircraft from 250 g up to and including 150 kg. Program type training and competency sign-off remain mandatory regardless (Section 2.5).

### 13.4 Declaration Requirement

No Division V medium RPA operation listed in 13.3 may be conducted unless a declaration has been made to the Minister under CAR 901.194 in respect of that model and each applicable technical requirement of Standard 922 (CAR 901.69(e) to (h)). Division VI BVLOS carries the equivalent requirement under CAR 901.95.

For the closest-proximity operations, CAR 901.69(f) and (g), the declaration is valid only if an acceptance letter was issued for that model under CAR 901.196 within the preceding two years (CAR 901.194(3)).

> **Before any delivery operation, the Chief Pilot confirms that a current declaration exists covering the specific aircraft model and the specific operation intended.** Where no applicable declaration exists, the operation requires an SFOC. Declaration status for each registered aircraft is recorded in the Organization's certificate register (Section 2.2).

### 13.5 Additional Regulatory Limits for Medium RPA

| Limit | Requirement | Reference |
|-------|-------------|-----------|
| Separation from uninvolved persons | VLOS operations remain at least 500 ft (152.4 m) horizontally, at any altitude, from any person not involved, unless conducted under Division V with the applicable declaration | CAR 901.26(b) |
| Reduced visibility | Where ground visibility is 4 statute miles or less, a medium RPA VLOS operation is limited to a distance of no more than **half the ground visibility** | CAR 901.34(2) |
| BVLOS weather | Ground visibility at least 3 SM and clear of cloud | CAR 901.34(3) |
| Maximum altitude | 400 ft AGL unless a valid SFOC or an ATS authorization under 901.71(2) permits higher | CAR 901.25 |
| Line-attached payload | A payload attached by a line is prohibited **unless** the operation is conducted in accordance with the operating manuals applicable to the system | CAR 901.43(1)(d) |
| Hazardous payload | No payload that could create a hazard to aviation safety or cause injury to persons | CAR 901.43(1)(c) |
| Dropping objects | No creating a hazard to persons or property on the surface by dropping an object from an aircraft in flight | CAR 901.50 |
| PIC designation | A PIC is designated for each Division VI operation | CAR 901.222 |

The visibility rule at 901.34(2) deserves emphasis because it has no small-aircraft equivalent and will frequently be the binding constraint in corridor conditions. At 4 SM visibility the aircraft may not be operated beyond 2 SM. In valley fog or falling snow it may reduce the usable envelope to a few hundred metres.

### 13.6 Delivery Methods

| Method | Description | Regulatory treatment | Program status |
|--------|-------------|----------------------|----------------|
| Cargo box, land and release | Aircraft lands, ground party or subject unloads, aircraft departs | Standard payload carriage | **Preferred where a landing site exists** |
| Winch | Cargo lowered on a cable, releasing automatically on touchdown | Permitted only when conducted per the operating manuals (CAR 901.43(1)(d)) | Permitted, procedure at 13.8.6 |
| Free drop | Payload released in flight to fall to the ground | Engages CAR 901.50; the Program cannot assure that a dropped object will not create a hazard | **Not authorized** without a documented justification and Chief Pilot approval for the specific mission |

### 13.7 Crew Configuration

Delivery operations require a larger crew than search operations. Minimum crew:

| Role | Responsibility |
|------|----------------|
| Pilot in Command | Flies the aircraft; go/no-go; final release authority |
| Visual Observer | Airspace and ground watch; maintains VLOS where required |
| Loadmaster | Payload weight, securing, and centre of gravity; confirms load figures to the PIC; supervises loading area |
| Ground party (at delivery site) | Confirms the delivery site is clear, receives the load, confirms release, keeps persons clear |

Where the delivery site cannot be attended by a ground party, the delivery is treated as a release into an unattended area and the site must be confirmed clear by the crew before release.

### 13.8 Normal Procedures

#### 13.8.1 Mission Planning

- [ ] Confirm the mission is within the documented mission set (13.1); if not, Chief Pilot approval required
- [ ] Confirm operating authority available (13.3) and current declaration (13.4)
- [ ] Calculate operating weight including payload, batteries, and safety equipment; confirm at or below 150 kg and within the manufacturer's limit for altitude and temperature
- [ ] Confirm route maintains at least 1 km from any populated area if BVLOS
- [ ] Confirm forecast visibility against CAR 901.34(2) and (3)
- [ ] Identify launch site, delivery site, and at least one alternate landing site
- [ ] Confirm ground party communications

#### 13.8.2 Launch Site

- [ ] Area adequate for the aircraft's footprint with propellers unfolded, plus the manufacturer's propeller safe distance (3.5 m for the FlyCart 30)
- [ ] Surface firm and level; loose debris cleared
- [ ] Approach and departure paths clear of wires, canopy, and terrain
- [ ] Cordon established at the separation required by 13.5; uninvolved persons excluded
- [ ] Signage and visual observer positioned to prevent approach

#### 13.8.3 Loading

- [ ] Payload contents recorded and checked against the prohibited categories (CAR 901.43(1))
- [ ] Payload secured so it cannot shift in flight
- [ ] Weight confirmed by the loadmaster and stated to the PIC
- [ ] Centre of gravity within limits; weight and centre-of-gravity detection confirms a balanced load where the system provides it
- [ ] Cargo box latched, or winch hook engaged and load stable

#### 13.8.4 Flight

- [ ] Hover check at low altitude before departure; confirm handling with the load
- [ ] Climb and cruise per the profile planned; avoid abrupt manoeuvres with a slung load
- [ ] Monitor for load swing; where the system provides swing control, confirm it is active
- [ ] Monitor battery margin against the return requirement, remembering that a delivered load changes the aircraft's performance for the return leg

#### 13.8.5 Delivery

- [ ] Confirm delivery site clear of persons not involved, and that the ground party is in position and ready
- [ ] Confirm the area below the aircraft is clear before descent or release
- [ ] Ground party confirms readiness by the agreed call
- [ ] Release or land per the method selected
- [ ] Confirm release complete and the aircraft is clear of the load before departing
- [ ] Ground party confirms receipt

#### 13.8.6 Winch Operations

Winch operations are conducted **strictly in accordance with the manufacturer's operating manual**, which is the condition on which CAR 901.43(1)(d) permits them at all. In particular:

- Cable descent and retraction speeds per the manual
- Swing control engaged where provided
- Cable length appropriate to the terrain and the hover height; never exceeding the manual's maximum
- The cut-cable function is used only where the load is entangled or the aircraft is otherwise endangered. Cutting is a last resort; the falling load must be considered before the cut is made
- After any use of cut-cable protection, the aircraft is grounded pending manufacturer-specified inspection or service

### 13.9 Abort Criteria

The delivery is aborted, and the load returned or the flight terminated at a safe location, if any of the following occurs:

- Uninvolved persons enter the launch, flight, or delivery area and cannot be cleared
- Load swing that cannot be controlled
- Weather deteriorates below the limits of 13.5, including the CAR 901.34(2) visibility relationship
- Ground party loses communications or cannot confirm the site is clear
- Battery margin falls below that required for return plus reserve
- Any aircraft warning affecting propulsion, positioning, or the payload system

---

## 14. Emergency Contacts

### 13.1 Aviation Stakeholders

| Organization | Type | Phone |
|--------------|------|-------|
| Glacier Air | Helicopter | 604-898-9016 |
| Sea To Sky Air | Fixed Wing | 604-898-1975 |
| Black Tusk Helicopter | Helicopter | 604-898-4800 |

### 14.2 Emergency Contacts

| Contact | When | Phone |
|---------|------|-------|
| FIC Kamloops | Emergency in uncontrolled airspace | **1-866-541-4101** |
| Vancouver Intl (CYVR) | Emergency in controlled airspace direction | 604-207-7022 |
| Emergency Services | Critical situation | 911 |
| Squamish General Hospital | Medical facility, southern corridor | 38140 Behrner Drive, Squamish |
| Whistler Health Care Centre | Medical facility, central corridor | 4380 Lorimer Road, Whistler |
| Pemberton Health Centre | Medical facility, northern corridor | 1403 Portage Road, Pemberton |

### 14.3 Aerodromes in the Program Area

| Name | Code | Type | Radio | Phone | Location |
|------|------|------|-------|-------|----------|
| Vancouver Intl | CYVR | International | 124.6 | 604-207-7022 | South/Above the Program |
| Vancouver Harbour | CYHC | Seaplane Base | 126.8 | 604-328-4340 | South of the Program |
| Squamish Municipal | CYSE | Airport | 122.8 | 604-892-5217 | Squamish |
| Green Lake Whistler | CAE5 | Seaplane Base | n/a | 604-932-6615 | Whistler |
| Pemberton Regional | CYPS | Airport | [Verify in CFS] | [Verify] | Pemberton |

### 14.4 Emergency Fly-Away Call Script

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

## 15. Document Control

### 14.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Appointed per Organization | Per Organization |
| Chief Pilot | Appointed per Organization | Per Organization |

Signatures on file. Original signed document retained per QAP-001.

### 14.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Operations Manual | Dustin Wales |
| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |

**Document Author:** Dustin Wales

**Questions, updates, inquiries:** Dustin Wales, 604-849-2345
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

*This document is part of the Program RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    // PLACEHOLDER - Will add safety, people, training, forms sections
    safety: {
        title: "Safety & Emergency Manual",
        icon: "fa-shield-alt",
        docCount: 12,
        content: `# S2S SAR Drone Program - Safety & Emergency Manual

## Sea to Sky Corridor Search and Rescue - Regional Drone Program

---

| Document | SAF-MANUAL |
|----------|------------|
| Version | 2.0 |
| Effective | August 2026 |
| Review Date | August 2027 |
| Regulatory Reference | CAR 901.219, Standard 922, JARUS SORA v2.5, ICAO Annex 19 |

---

## Table of Contents

1. [Safety Management System](#1-safety-management-system)
2. [Emergency Procedures](#2-emergency-procedures)
   - 2.4 System Failure Procedures
   - 2.5 GPS Failure Procedures
   - 2.6 Loss of Control Procedures
   - 2.7 Fly-Away (Critical Emergency)
   - 2.8 Emergency Landing
   - 2.9 Battery Emergency
   - 2.9A Icing Conditions
   - 2.9B Fire Emergency
   - 2.9C Injury Response
   - 2.10 Traffic Conflict / DESCEND Protocol
   - 2.11 CFIT Prevention
   - 2.12 Inadvertent IMC Entry
   - 2.13 Flight Termination and Crash
   - 2.14 Time-Critical SAR Operations
   - 2.15 Post-Emergency Actions
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

the S2S SAR Drone Program maintains a Safety Management System (SMS) for RPAS operations in accordance with CAR Part IX requirements and aligned with the four-pillar SMS framework per ICAO Annex 19.

### 1.2 Pillar 1: Safety Policy

#### 1.2.1 Safety Policy Statement

> **the S2S SAR Drone Program is committed to achieving the highest level of safety in all RPAS operations. We will identify hazards, manage risks to as low as reasonably practicable, comply with all regulations, and continuously improve our safety performance. Every member has the authority and responsibility to stop any operation they believe to be unsafe.**

#### 1.2.2 Accountable Executive Commitment

The Accountable Executive appointed by each participating Organization is accountable for the safety of that Organization's Program RPAS operations and commits to:

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

> **No member of the Program will be disciplined, suspended, or reprimanded for reporting a safety occurrence, hazard, or unintentional error involving themselves or others.**

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
| Accountable Executive | Appointed per Organization (CAR 106.02, 901.218(2)) | Overall SMS accountability, resource allocation |
| Chief Pilot | Appointed per Organization (Level 1 Complex certificate; Flight Reviewer rating recommended) | Day-to-day safety management, risk acceptance |
| Safety Officer | [Designated] | Report management, hazard tracking, audits |
| All Crew | All members | Hazard reporting, SOP compliance, safety focus |

---

## 2. Emergency Procedures

### 2.1 Purpose

This section establishes emergency response procedures for all Program RPAS operations, fulfilling CAR 901.23 requirements. All crew members must be familiar with these procedures and have a printed copy available at the Control Station.

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

An emergency landing is a procedure where the RPAS is brought down safely as quickly as possible due to an unforeseen issue or potential hazard. This is done to prevent accidents or further complications.

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

---

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

### 2.9A Icing Conditions

> **CRITICAL: the Program maintains ZERO TOLERANCE for known or forecast icing conditions per CAR 901.35.**

#### 2.9A.1 Icing Recognition Indicators

| Indicator |
|-----------|
| Visible ice on propellers or fuselage |
| Unusual vibration or motor noise |
| Decreased performance / higher power consumption |
| Erratic flight behavior |
| Ice buildup visible on camera feed |

#### 2.9A.2 Icing Conditions Immediate Actions

| Step | Action |
|------|--------|
| 1 | ANNOUNCE: "ICING SUSPECTED" or "ICING CONFIRMED" - Alert crew |
| 2 | DESCEND: Move to warmer altitude if possible (temperature inversion) |
| 3 | RETURN: Initiate immediate RTH or direct route to landing zone |
| 4 | INCREASE POWER MARGIN: Fly slower, maintain extra altitude for approach |
| 5 | CONTROLLED LANDING: Land immediately at safe location |

#### 2.9A.3 Icing NO-GO Conditions

Operations shall NOT commence or shall be immediately terminated when:

| Condition | Requirement |
|-----------|-------------|
| Active precipitation + temps below 5°C | NO-GO |
| Visible moisture + temps below 0°C | NO-GO |
| Freezing fog present | NO-GO |
| Ice observed on aircraft surfaces | LAND IMMEDIATELY |

### 2.9B Fire Emergency

#### 2.9B.1 LiPo Battery Fire Response

> **CRITICAL: LiPo battery fires produce toxic fumes and can reignite. DO NOT use water.**

| Step | Action |
|------|--------|
| 1 | **EVACUATE:** Shout "FIRE! FIRE!" - Clear all personnel to 10m minimum. Move upwind. |
| 2 | **CALL 911:** If fire cannot be immediately controlled or is spreading |
| 3 | **EXTINGUISH (if safe):** Use Class D extinguisher, dry sand, or fire blanket. **NO WATER on LiPo.** |
| 4 | **CONTAIN:** If battery swelling but not yet on fire - move to fireproof container or sand |
| 5 | **MONITOR:** LiPo fires can reignite. Monitor for 30+ minutes after fire out. |

#### 2.9B.2 Battery Fire Warning Signs

| Warning Sign | Action |
|--------------|--------|
| Swelling | Remove from aircraft, place in fire-safe container |
| Hissing | EVACUATE immediately, prepare for fire |
| Smoking | EVACUATE immediately, extinguisher ready |
| Unusual heat | Remove from aircraft if safe, monitor |
| Sweet/chemical smell | Investigate source, prepare for thermal event |

### 2.9C Injury Response (Personnel Emergency)

#### 2.9C.1 Injury Response Procedure

| Step | Action |
|------|--------|
| 1 | **CEASE OPERATIONS:** Land aircraft immediately. All focus on injured person. |
| 2 | **ASSESS:** Determine severity. Is person conscious? Breathing? Bleeding? |
| 3 | **CALL FOR HELP:** 911 for serious injuries. SAR medical personnel if on-scene. |
| 4 | **FIRST AID:** Provide first aid within your training level. Do not move suspected spine injuries. |
| 5 | **DOCUMENT:** Record incident details. Report to Chief Pilot. TSB if serious. |

#### 2.9C.2 TSB Reporting Requirement

> **Serious injury (requiring hospitalization) involving RPAS operations must be reported to TSB within 24 hours: 1-800-387-3557**

#### 2.9C.3 Injury Classification

| Severity | Definition | Reporting |
|----------|------------|-----------|
| Minor | First aid only, no medical treatment required | Internal report within 24 hours |
| Moderate | Medical treatment required, no hospitalization | Internal report + Transport Canada notification |
| Serious | Hospitalization required | Internal + Transport Canada + TSB notification |
| Fatal | Death resulting from RPAS operation | Immediate TSB notification, scene preservation |

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

This section provides the complete Specific Operations Risk Assessment (SORA) required for Program RPAS operations under Standard Scenarios STSC-003 (High Altitude VLOS) and STSC-004 (Low-Risk BVLOS) per JARUS SORA v2.5 framework and Transport Canada Standard 922.

### 3.2 Document Scope

- **Level 1 Complex BVLOS (Division VI, under RPOC):** BVLOS up to 400' AGL over sparsely populated areas
- **STSC-003 (under valid SFOC):** VLOS operations above 400' AGL up to 1000' AGL
- **STSC-004 (under valid SFOC):** BVLOS operations in sparsely populated areas by Advanced pilots
- **Aircraft:** Any RPAS meeting the eligibility criteria of Operations Manual Section 4.1, within the mass and speed class assumed by this assessment. DJI M30T and DJI Matrice 4TD are the current reference types

**Altitude Rationale:** Normal flight operations are conducted at 400' AGL using terrain-following profiles. The 1000' AGL maximum is established to accommodate Return-to-Home (RTH) emergency scenarios in the Program's mountainous operating environment, where terrain-following cannot be maintained and the RPAS must climb to safely clear obstacles during autonomous return.

### 3.3 SORA Process Overview

The Program applies the JARUS SORA v2.5 ten-step process, executed under the CARs and TC AC 903-001. Where JARUS and the CARs differ, the CARs prevail; in particular, the operational volume includes the flight geography, the contingency volume, and the ground risk buffer (CAR 900.01 and AC 903-001).

| Step | Description |
|------|-------------|
| 1 | Documentation of the proposed operation(s) (ConOps) |
| 2 | Intrinsic Ground Risk Class (iGRC) determination |
| 3 | Final GRC determination (mitigations M1(A), M1(B), M1(C), M2) |
| 4 | Initial Air Risk Class (ARC) determination |
| 5 | Strategic mitigations to determine residual ARC |
| 6 | Tactical Mitigation Performance Requirement (TMPR) and robustness |
| 7 | SAIL determination |
| 8 | Containment requirements (adjacent area and airspace) |
| 9 | Operational Safety Objectives (OSO) identification |
| 10 | Comprehensive Safety Portfolio (this manual suite) |

### 3.4 Concept of Operations

#### 3.4.1 Operator Information

| Parameter | Value |
|-----------|-------|
| Operator Name | the S2S SAR Drone Program |
| RPOC Number | [To be assigned] |
| Accountable Executive | Appointed per Organization |
| Chief Pilot | Appointed per Organization |
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

#### 3.5.1 Intrinsic GRC Determination (SORA v2.5, Table 2)

Both Program aircraft fall in the 1 m maximum characteristic dimension, 25 m/s maximum speed column of the SORA v2.5 iGRC table.

**Low-Risk BVLOS (Division VI / STSC-004):**

| Factor | Assessment | Value |
|--------|------------|-------|
| Max UA Dimension / Speed | 1 m class, max speed 23 m/s | 1 m / 25 m/s column |
| Operating Environment | BVLOS over sparsely populated area (more than 5, up to 25 people/km²) | Under 50 people/km² band |
| Intrinsic GRC | Per SORA v2.5 Table 2 | **iGRC 3** |

**STSC-003 (High Altitude VLOS):**

| Factor | Assessment | Value |
|--------|------------|-------|
| Max UA Dimension / Speed | 1 m class, max speed 23 m/s | 1 m / 25 m/s column |
| Operating Environment | VLOS over remote terrain, fewer than 5 people/km² | Under 5 people/km² band |
| Intrinsic GRC | Per SORA v2.5 Table 2 | **iGRC 2** |

#### 3.5.2 M1(C) Mitigation - Ground Observation (Tactical)

Per SORA v2.5 Table 5, tactical ground observation at low robustness provides a -1 GRC reduction. The Program's SAR ground presence provides this observation:

| Criterion | SORA Requirement | Program Implementation | Evidence |
|-----------|------------------|------------------------|----------|
| Observation Method | Ground area observed for uninvolved persons | SAR perimeter and ground teams in operating area | SOP PRO-103 |
| Coordination | Ground team aware | Briefed at SAR task | Checklist POL-002 |
| Communication | Method to notify crew | Radio comms required | POL-005 |
| Verification | Confirmed before flight | PIC verification | PRO-101 checklist |
| Abort Criteria | Clear NO-GO conditions | Any unauthorized entry = abort | ERP-001 |

> **M1(C) Robustness Level: LOW - Reduction Applied: -1 to GRC**
>
> Where ground observation cannot be maintained, M1(B) operational restrictions (medium robustness, -1) may be substantiated instead per SORA v2.5 Annex B.

#### 3.5.3 M2 Mitigation - Effects of UA Impact Dynamics

M2 (medium -1, high -2 per SORA v2.5 Table 5) is NOT APPLIED for the following documented reasons:
- Aircraft not equipped with parachute recovery systems
- Standard construction does not meet the impact dynamics criteria of Annex B
- Final GRC after M1(C) already achieves the SAIL II target
- Operating areas verified sparsely populated or remote, reducing exposure

> **M2 Reduction Applied: 0**

#### 3.5.4 Final GRC Determination

| Scenario | Intrinsic GRC | M1(C) | M2 | Final GRC |
|----------|---------------|-------|----|-----------|
| STSC-003 (High Alt VLOS) | 2 | -1 | 0 | **GRC 1** |
| Low-Risk BVLOS (Division VI / STSC-004) | 3 | -1 | 0 | **GRC 2** |

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
| ATS Coordination | STSC-003: coordination per SFOC conditions | OPS-001 procedure |
| Electronic Conspicuity | ADS-B In awareness | AirSense enabled |


**ARC Reduction for VLOS Operations (SORA v2.5, Step 5):** For STSC-003, the operation is VLOS with the pilot and visual observers assessing airspace activity before and during flight. Per SORA v2.5 Section 4.5.4 this strategic mitigation reduces the initial ARC by one class: initial ARC-c becomes **residual ARC-b**. For BVLOS operations the initial ARC-b is retained as the residual ARC.

#### 3.6.3 TMPR and SAIL Determination

| Scenario | Final GRC | Residual ARC | TMPR (SORA v2.5 Table 6) | SAIL (Table 7) |
|----------|-----------|--------------|--------------------------|----------------|
| STSC-003 (High Alt) | GRC 1 | ARC-b (reduced from ARC-c, VLOS) | Low | **SAIL II** |
| Low-Risk BVLOS (Division VI / STSC-004) | GRC 2 | ARC-b | Low | **SAIL II** |

The Low TMPR for BVLOS is satisfied by visual observer detect and avoid conducted in accordance with Standard 923 and AC 903-001 Appendix B, which also satisfies CAR 901.95(2) in lieu of a Standard 922.10 DAA declaration.

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
| Corridor municipalities (Squamish, Whistler, Pemberton) | Populated | Higher | No operations over urban areas |
| Highway 99 | Linear infrastructure | Moderate | 100m minimum lateral |
| BC Rail Corridor | Linear infrastructure | Low | 50m minimum lateral |
| Wilderness Areas | Sparsely populated | Low | Standard GRB applies |


#### 3.7.3 Containment Requirements (SORA v2.5, Step 8)

The adjacent area lateral limit is the distance flown in 3 minutes at maximum speed, with a 5 km minimum: at 23 m/s this is approximately 4.1 km, so **5 km** is applied. For a 1 m class UA at SAIL II (SORA v2.5 Table 8), containment robustness is **LOW** provided the following operational limits are respected:

| Operational Limit | Program Assessment |
|-------------------|--------------------|
| Adjacent area average population density under 50,000 people/km² | Sea to Sky adjacent areas are far below this limit |
| No outdoor assemblies over 40,000 people within 1 km of the operational volume | Verified during site survey for each mission |

Low robustness containment is met by the operational volume definition (flight geography, contingency volume, and 1:1 ground risk buffer per CAR 900.01), pre-programmed lost link and RTH behavior, and the emergency procedures of Section 2.

### 3.8 OSO Compliance Summary (SORA v2.5, SAIL II)

Per SORA v2.5 Table 14, the following robustness levels apply at SAIL II. L = low, M = medium, NR = not required to be shown to the authority.

| OSO | Objective | SAIL II Level | Program Compliance |
|-----|-----------|---------------|--------------------|
| OSO#01 | Operator is competent and/or proven | L | RPOC held; this manual suite |
| OSO#02 | UAS manufactured by competent entity | NR | DJI; Standard 922 declarations |
| OSO#03 | UAS maintained by competent entity | L | Maintenance Control Manual (Forms Manual) |
| OSO#04 | UAS designed to airworthiness design standards | NR | - |
| OSO#05 | UAS designed considering system safety and reliability | NR | - |
| OSO#06 | C3 link characteristics appropriate | L | OcuSync; C2 link margin checks |
| OSO#07 | Conformity check of the UAS configuration | L | Pre-flight inspection, firmware management |
| OSO#08 | Operational procedures defined, validated and adhered to | M | Operations Manual, checklists, QA audits |
| OSO#09 | Remote crew trained and current | L | Training Manual; recency per CAR 901.91 |
| OSO#13 | External services supporting UAS operations adequate | L | NAV Drone, weather services, FIC |
| OSO#16 | Multi crew coordination | L | Crew briefing procedures, POL-005 |
| OSO#17 | Remote crew fit to operate | L | CAR 901.19; fitness policy (Training Manual 2) |
| OSO#18 | Automatic protection of the flight envelope | NR | - |
| OSO#19 | Safe recovery from human error | NR | - |
| OSO#20 | Human machine interface evaluation | L | DJI Pilot 2 familiarization training |
| OSO#23 | Environmental conditions defined, measurable, adhered to | L | Weather minimums (Operations Manual 10) |
| OSO#24 | UAS designed for adverse environmental conditions | NR | IP54/IP55 rated aircraft (exceeds NR) |

**Status: COMPLIANT at SAIL II.** Compliance evidence is maintained across this manual suite, which together with this section constitutes the Comprehensive Safety Portfolio (SORA v2.5, Step 10).

### 3.9 Final Risk Statement

#### 3.9.1 Residual Risk Assessment

| Risk Category | Initial | After Mitigation | Residual |
|---------------|---------|------------------|----------|
| Ground Collision - Third Party | Moderate | Low (M1 controlled area) | Acceptable |
| Ground Collision - Property | Low | Very Low | Acceptable |
| Mid-Air Collision | Low | Very Low (DAA + procedures) | Acceptable |
| Airspace Infringement | Moderate | Low (ATC coordination) | Acceptable |

#### 3.9.2 Risk Acceptance Statement

> Based on the comprehensive SORA analysis documented herein, the Accountable Executive accepts that the residual risk of Program RPAS operations under STSC-003 and STSC-004 is **AS LOW AS REASONABLY PRACTICABLE (ALARP)** and **ACCEPTABLE** within the risk tolerance for Search and Rescue support operations.

#### 3.9.3 Conditions for Risk Acceptance

- Strict adherence to operational procedures in OPS-001
- All flights conducted within Standard Scenario conditions
- Only eligible aircraft used, per Operations Manual Section 4.1 (registered, declared where required, serviceable, within the assessed mass and speed class, and crew type-qualified)
- Maintenance conducted per MCM-001
- All crew qualified per TRN-301
- SMS actively monitored per SMS-001

### 3.10 STSC-003 Specific Assessment

> STSC-003 operations are available only where the Organization holds a valid SFOC authorizing them (see Operations Manual Section 5).

| Parameter | STSC-003 Requirement | the Program Compliance |
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

### 3.11 Risk Assessment: Payload Delivery with Medium RPA

> **STATUS: PROVISIONAL.** Payload delivery is documented but not yet authorized for operational use. See Operations Manual Section 13.

#### 3.11.1 Scope and Relationship to Section 3

Sections 3.1 to 3.10 assess Program operations conducted with small RPA in the 1 m, 25 m/s class. **Those assessments do not extend to medium RPA.** A FlyCart-class aircraft differs in characteristic dimension and mass by enough to change the intrinsic ground risk, the containment requirement, and potentially the SAIL. This Section is a separate SORA 2.5 assessment for payload delivery and is read alongside, not in place of, Section 3.

#### 3.11.2 Step 1: Operational Description

| Element | Description |
|---------|-------------|
| Operation | Carriage and release of supplies or equipment to a subject or team during a SAR tasking |
| Aircraft | Medium RPA, reference types DJI FlyCart 30 and FlyCart 100 (Operations Manual 13.2) |
| Environment | Sea to Sky corridor backcountry and alpine; remote to lightly populated terrain; municipalities excluded |
| Altitude | 400 ft AGL maximum |
| Visual | VLOS under Division V, or BVLOS under Division VI at least 1 km from any populated area |
| Airspace | Uncontrolled (Class G) |
| Operational volume | Flight geography plus contingency volume plus ground risk buffer per CAR 900.01, buffer at least 1:1 with planned maximum altitude |

#### 3.11.3 Step 2: Intrinsic Ground Risk Class

SORA 2.5 Table 2 is entered on maximum characteristic dimension (for a multi-rotor, the maximum distance between blade tips) and maximum speed, taking the leftmost column matching both.

| Aircraft | Max dimension | Max speed | Column |
|----------|---------------|-----------|--------|
| DJI FlyCart 30 | Approximately 2.8 m unfolded | 20 m/s | **3 m / 35 m/s** |
| DJI FlyCart 100 | Approximately 3.9 m tip to tip | 20 m/s | **8 m / 75 m/s** by the default method (see 3.11.9) |

Intrinsic GRC from Table 2, 3 m column:

| Population density in the iGRC footprint | iGRC (3 m column) |
|------------------------------------------|-------------------|
| Controlled ground area | 1 |
| Fewer than 5 people/km² (remote) | **3** |
| Fewer than 50 people/km² (lightly populated) | **4** |
| Fewer than 500 people/km² | 5 |

Program planning cases: remote alpine and backcountry delivery, the expected majority of taskings, gives **iGRC 3**; lightly populated valley terrain outside municipalities gives **iGRC 4**.

#### 3.11.4 Step 3: Final GRC

Mitigations are applied in the numerical sequence of SORA 2.5 Table 5.

**M1(A) sheltering: NOT APPLIED.** The credit requires that the aircraft would not be expected to penetrate a standard dwelling. A 95 kg to 150 kg aircraft would.

**M1(B) operational restrictions: NOT APPLIED** as a primary claim, though the restriction to SAR taskings in remote terrain would support it if substantiated to medium robustness under Annex B.

**M1(C) ground observation, low robustness, minus 1: APPLIED.** As in 3.5.2, SAR ground presence provides observation with radio communication to the crew and clear abort criteria. For delivery the case is stronger than for search, because the delivery site is attended by a ground party who confirms it is clear before release.

**M2 effects of impact dynamics reduced, medium robustness, minus 1: APPLIED, subject to evidence.** Both reference types carry an integrated parachute designed to deploy at low altitude at maximum takeoff weight. Claiming it at medium robustness requires the evidence set out in SORA Annex B: manufacturer data on deployment envelope and descent rate, evidence the system is installed and serviceable, and parachute inspection and repack in the maintenance program. **If that evidence is not assembled, M2 is not claimed and the final GRC is one higher throughout.**

Where a mitigation changes descent behaviour, the ground risk buffer is re-evaluated. A parachute descent has a different, wind-dependent footprint; the buffer is sized on the manufacturer's descent rate and the wind limit for the day, and never smaller than the 1:1 minimum required by CAR 900.01.

| Scenario | iGRC | M1(C) | M2 | Final GRC |
|----------|------|-------|----|-----------|
| Remote terrain, fewer than 5 people/km², parachute evidence in place | 3 | -1 | -1 | **1** |
| Remote terrain, fewer than 5 people/km², no M2 claim | 3 | -1 | 0 | **2** |
| Lightly populated, fewer than 50 people/km², parachute evidence in place | 4 | -1 | -1 | **2** |
| Lightly populated, fewer than 50 people/km², no M2 claim | 4 | -1 | 0 | **3** |

#### 3.11.5 Steps 4 and 5: Air Risk

Uncontrolled, non-airport, rural, below 400 ft AGL gives an **initial ARC-b** as in 3.6. For VLOS delivery the strategic mitigation of SORA 2.5 Section 4.5.4 would reduce the ARC by one class, but cannot reduce it to ARC-a. The **residual ARC is ARC-b** for both VLOS and BVLOS delivery.

#### 3.11.6 Step 6: TMPR

From SORA 2.5 Table 6, residual ARC-b gives a **Low TMPR at low robustness**. For VLOS delivery this is satisfied by the see-and-avoid deconfliction scheme with visual observers, noting the Annex D caveat that an observer is not assumed to detect traffic beyond 2 NM. For BVLOS delivery it is satisfied by visual observer detect and avoid per Standard 923, which also satisfies CAR 901.95(2) in lieu of a Standard 922.10 declaration.

#### 3.11.7 Step 7: SAIL

From SORA 2.5 Table 7, final GRC against residual ARC-b:

| Scenario | Final GRC | Residual ARC | **SAIL** |
|----------|-----------|--------------|----------|
| Remote terrain, M2 claimed | 1 | b | **II** |
| Remote terrain, no M2 | 2 | b | **II** |
| Lightly populated, M2 claimed | 2 | b | **II** |
| Lightly populated, no M2 | 3 | b | **II** |

All four cases reach **SAIL II**, so the OSO set of Section 3.8 carries across unchanged. The margin should not be taken for granted: terrain in the fewer than 5,000 people/km² band, which describes the edges of the corridor communities, would give a final GRC of 4 and **SAIL III**. The SAIL II result depends on operating in genuinely remote terrain.

#### 3.11.8 Step 8: Containment

Adjacent area lateral limit: distance flown in 3 minutes at maximum speed. At 20 m/s this is 3.6 km, less than the 5 km minimum, so **5 km applies**.

Sheltering is not assumed applicable for the adjacent area, for the same reason M1(A) is not claimed. SORA 2.5 Table 10 (3 m UA without shelter assumption) applies:

| Adjacent area average population density | Assemblies within 1 km | Containment at SAIL II |
|------------------------------------------|------------------------|------------------------|
| No upper limit | More than 400k | Out of scope |
| Fewer than 50,000 people/km² | 40k to 400k | High |
| Fewer than 5,000 people/km² | Fewer than 40k | Medium |
| Fewer than 500 people/km² | Fewer than 40k | **Low** |

Sea to Sky adjacent areas relevant to backcountry delivery are far below 500 people/km² on average, and outdoor assemblies of 40,000 people do not occur within 1 km of the areas contemplated. **Containment robustness: LOW**, subject to these operational limits being verified during the site survey for each mission:

| Operational limit | Basis |
|-------------------|-------|
| Adjacent area average population density below 500 people/km² | Table 10 column selected |
| No outdoor assembly exceeding 40,000 people within 1 km of the operational volume | Table 10 column selected |

Low robustness containment is met by the operational volume definition, pre-programmed lost link and return behaviour, the parachute where fitted, and the emergency procedures of Section 2 as extended by 3.11.10.

#### 3.11.9 The FlyCart 100 Exception

By the default method the FlyCart 100, at approximately 3.9 m between blade tips, does not fit the 3 m column and falls into the **8 m column**, which raises the intrinsic GRC by one across every density band and changes containment to Table 11, where SAIL II containment is Low only below 50 people/km², Medium below 500, and High below 5,000.

This is conservative in a way SORA anticipates. The 8 m column assumes a maximum speed of 75 m/s; the FlyCart 100 flies at 20 m/s, so the impact energy driving the column assignment is substantially overstated. SORA 2.5 Section 4.2.4 provides for this under "Non-typical cases", allowing the iGRC to be calculated using the model in Annex F Section 1.8 and the column matching actual risk to be selected.

**Recommendation:** if the FlyCart 100 is adopted, run the Annex F Section 1.8 calculation rather than accepting the 8 m column, and present the result to Transport Canada. Until that calculation is done, plan FlyCart 100 operations on the conservative 8 m column figures.

#### 3.11.10 Emergency Procedures Specific to Payload Operations

| Situation | Immediate actions |
|-----------|-------------------|
| Load swing developing | Reduce speed; avoid control inputs that amplify the oscillation; confirm swing control active; if divergent, descend and land or set the load down at the nearest safe point |
| Winch cable entangled | Attempt controlled release per the manual; if the aircraft is endangered, use cut-cable protection, having first confirmed the area below is clear; ground the aircraft afterward pending inspection |
| Loss of link with a load aboard | Aircraft executes pre-programmed lost link behaviour; ground party and all crew clear the return path and the area beneath it; treat the load as a falling hazard until the aircraft is recovered |
| Parachute deployment | Announce; clear all persons from the descent footprint, which is wind-dependent and can be substantially displaced from the aircraft's position at deployment; treat aircraft and load as a single hazard until secured |
| Forced landing with cargo | Select the landing point for the combined mass; expect the aircraft not to be recoverable by hand; secure a cordon commensurate with a 95 kg to 150 kg aircraft |
| Any incident involving the aircraft | Cordon substantially larger than for small aircraft; batteries of this size present a significant thermal hazard if damaged; do not approach a damaged battery pack |

An occurrence involving a medium RPA meets the reporting criteria of CAR 901.49 on the same terms as any other aircraft, and operations cease until analysis and corrective action are complete.

---

## 4. Hazard Identification and Risk Assessment

### 4.1 Purpose

This section establishes the hazard identification and risk assessment procedures for Program RPAS operations, aligned with SMS-001 Pillar 2 and JARUS SORA methodology.

### 4.2 Risk Assessment Methodology

#### 4.2.1 SORA Framework Integration

The Program uses the JARUS SORA framework for systematic risk assessment:
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

### 4.3 Program RPAS Hazard Register

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
| Village of Pemberton and environs | 3,400 | 49 | 69/km² | Populated - Excluded |
| Squamish, Cheakamus and Lillooet watersheds | <500 | 1,200 | <0.5/km² | Sparsely Populated - Approved |
| Sea to Sky backcountry and alpine | <200 | 800 | <0.25/km² | Sparsely Populated - Approved |
| Coastal Inlets | <100 | 400 | <0.25/km² | Sparsely Populated - Approved |

*Data source: Statistics Canada Census 2021, BC Stats, local knowledge.*

### 4.6 Reactive Risk Management (Incident-Based)

All incidents reported via Section 6 (Incident Reporting) are analyzed to determine root cause and implement corrective actions. This reactive process ensures learning from events that have already occurred.

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

#### 4.6.3 Investigation Documentation

All investigations must document:
- Incident description and timeline
- Environmental conditions at time of occurrence
- Equipment involved (serial numbers, firmware versions)
- Personnel involved
- Evidence collected (flight logs, video, witness statements)
- Root cause determination with supporting rationale
- Corrective actions with owners and deadlines
- Safety Manager and AE sign-off

### 4.7 Proactive Risk Management (The Hazard Registry)

The Program maintains a Master Hazard Registry to proactively identify and manage hazards before they cause incidents. This aligns with SMS Pillar 2 (Safety Risk Management) and COR Element 2 (Hazard Identification).

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

'''
IDENTIFY → ASSESS → MITIGATE → DOCUMENT → MONITOR → REVIEW
'''

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

#### 4.8.3 Change Assessment Questions

The Change Risk Assessment must address:

1. **What is changing?** Clear description of the proposed change
2. **Why is the change needed?** Operational, regulatory, or safety driver
3. **What could go wrong?** Identification of potential failure modes
4. **How likely is failure?** Probability assessment
5. **What are the consequences?** Severity assessment
6. **Are current SOPs sufficient?** Gap analysis
7. **What additional controls are needed?** Mitigation development
8. **Who needs to know?** Communication plan
9. **Who needs training?** Training requirements
10. **How will effectiveness be verified?** Monitoring plan

#### 4.8.4 Change Approval Authority

| Risk Level Introduced | Approval Authority | Additional Requirements |
|----------------------|-------------------|------------------------|
| Low | Chief Pilot | Document decision |
| Medium | Chief Pilot + Safety Manager | Risk assessment documented |
| High | Accountable Executive | Full change package, board notification if required |
| Extreme | Not Approved | Change not permitted without significant redesign |

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

#### 4.9.1 Hazard Status Definitions

| Status | Definition | Action Required |
|--------|------------|-----------------|
| **Open** | Newly identified, awaiting assessment | Complete assessment within 7 days |
| **In Progress** | Mitigations being developed/implemented | Complete implementation per timeline |
| **Closed** | Risk reduced to acceptable level, controls verified | Annual review only |
| **Monitoring** | Controls in place, ongoing monitoring required | Track SPIs, review quarterly |
| **Archived** | No longer applicable (equipment retired, procedure eliminated) | Retain record, no active management |

---

## 5. Detect and Avoid

### 5.1 Purpose

To establish the procedures for collision avoidance and separation planning. This policy ensures compliance with Canadian Aviation Regulations (CARs) 901.17 and 901.18, ensuring that Program RPAS operations do not create a collision hazard with manned aircraft, other RPAS, or ground obstacles.

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

The Program categorizes airspace conflicts into tiers. Crew members must execute the following actions based on the threat level:

| Level | Definition | Mandatory Action |
|-------|------------|------------------|
| 1 | Planned Approach - Aircraft is known/expected and flight path is communicated | Ground the RPAS prior to arrival |
| 2 | Announced Entry - Aircraft enters area with radio communication/notice | Restrict RPAS to <400' AGL and maintain 1 km horizontal separation |
| 3 | Non-Threat - Unannounced aircraft detected; trajectory poses no risk | Continue operation; increase vigilance |
| 4 | Potential Conflict - Unannounced aircraft; trajectory may intersect | Return to Home (RTH) or Hover & Hold at safe altitude |
| 5 | Critical Threat - Unannounced aircraft; immediate collision risk | **EXECUTE DESCEND PROTOCOL IMMEDIATELY** |

### 5.5 Simultaneous Operations (SIMOPS)

When multiple Program RPAS are operating in the same airspace:

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

To establish the protocols for documenting, investigating, and reporting RPAS occurrences. This policy ensures the Program complies with Canadian Aviation Regulations (CARs) 901.49 and Transportation Safety Board (TSB) requirements, while fostering a "Just Culture" focused on safety improvement rather than blame.

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
| Minor Damage / Internal Error | the Program Internal Only | Within 24 hours | Internal Log |

### 6.5 Incident Report Form

#### Program RPAS INCIDENT REPORT

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
- **Log Entry:** The incident must be logged in the Program records (AirData or Physical Log)

### 6.8 Investigation Form

#### RPAS Incident/Accident Investigation Form

**Section 1 - RPAS Information**

| Field | Information |
|-------|-------------|
| Type/Model: | |
| Registration #: | |
| Weight Category: | [ ] <250g  [ ] 250g-25kg  [ ] >25kg |

**Section 2 - Occurrence Details**

| Field | Information |
|-------|-------------|
| Date/Time: | |
| Location (Lat/Long): | |
| Pilot in Command: | |
| Visual Observer: | |
| SFOC Number (if applicable): | |

**Section 3 - Impact Assessment**

| Question | Response |
|----------|----------|
| Injuries? | [ ] No  [ ] Yes (Describe & Contact TSB) |
| Collision with Manned Aircraft? | [ ] No  [ ] Yes (Contact TSB) |
| Property Damage? | [ ] No  [ ] Yes (Describe below) |
| RPAS Damage? | [ ] Minor  [ ] Major/Destroyed |

**Section 4 - Narrative Description**

(Describe the sequence of events, weather conditions, and control inputs leading to the event)

**Section 5 - Root Cause Analysis**

(Why did this happen? e.g., Mechanical failure, Pilot error, Signal interference)

**Section 6 - Corrective Actions**

(What will be done to prevent recurrence?)

### 6.9 Record Keeping

- **Duration:** In compliance with CAR 901.49(2), records of the incident analysis and corrective actions must be retained for a minimum of 12 months from the date of creation
- **Availability:** These records must be made available to the Minister of Transport upon request

---

### 6.8 Record Keeping

- **Duration:** In compliance with CAR 901.49(2), records of the incident analysis and corrective actions must be retained for a minimum of 12 months from the date of creation
- **Availability:** These records must be made available to the Minister of Transport upon request

---

## 7. Quality Assurance Program

### 7.1 Introduction

This Quality Assurance Program (QAP) establishes a systematic approach to ensuring consistent quality in Program RPAS operations per CAR 901.217(1)(c).

### 7.2 Quality Policy

The Program is committed to excellence in all RPAS operations. We will:
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
| OPS-09 | Flight logs accurate and complete | 901.223 | [ ] | |
| OPS-10 | Emergency procedures available | 901.217 | [ ] | |

#### 7.5.4 Training Program Audit Checklist

| Ref | Audit Item | CAR Reference | Compliant | Finding |
|-----|------------|---------------|-----------|---------|
| TRN-01 | Training program documented | 901.219 | [ ] | |
| TRN-02 | All pilots have valid TC certificates | 901.54-66 | [ ] | |
| TRN-03 | Flight currency maintained (90-day) | 901.56 | [ ] | |
| TRN-04 | Annual proficiency check completed | TRN-301 | [ ] | |
| TRN-05 | Standard Scenario endorsements current | 901.220 | [ ] | |
| TRN-06 | Training records complete and accessible | 901.223 | [ ] | |
| TRN-07 | Trainers meet qualification requirements | TRN-301 | [ ] | |
| TRN-08 | Recurrency training completed on time | 901.219 | [ ] | |
| TRN-09 | Competency assessments documented | 901.219 | [ ] | |
| TRN-10 | Human factors training current | 901.219 | [ ] | |

#### 7.5.5 Maintenance Program Audit Checklist

| Ref | Audit Item | CAR Reference | Compliant | Finding |
|-----|------------|---------------|-----------|---------|
| MNT-01 | MCM current and accessible | 901.221 | [ ] | |
| MNT-02 | PRM designated and qualified | 901.220 | [ ] | |
| MNT-03 | Pre-flight inspections completed | 901.29 | [ ] | |
| MNT-04 | Maintenance schedule followed | MCM-001 | [ ] | |
| MNT-05 | Defects recorded and tracked | MCM-001 | [ ] | |
| MNT-06 | Aircraft registration current | 900.13 | [ ] | |
| MNT-07 | Markings visible and compliant | 900.14 | [ ] | |
| MNT-08 | Firmware versions documented | MCM-001 | [ ] | |
| MNT-09 | Battery records maintained | MCM-001 | [ ] | |
| MNT-10 | Maintenance records retained (24 months) | 901.48 | [ ] | |

#### 7.5.6 Safety Management Audit Checklist

| Ref | Audit Item | CAR Reference | Compliant | Finding |
|-----|------------|---------------|-----------|---------|
| SMS-01 | Safety policy current and communicated | 901.218 | [ ] | |
| SMS-02 | Hazard registry maintained | 901.218 | [ ] | |
| SMS-03 | Risk assessments completed | 901.218 | [ ] | |
| SMS-04 | Safety reports investigated | 901.218 | [ ] | |
| SMS-05 | Corrective actions tracked to closure | 901.218 | [ ] | |
| SMS-06 | SPIs monitored and reported | SMS-001 | [ ] | |
| SMS-07 | Safety meetings conducted | SMS-001 | [ ] | |
| SMS-08 | Non-punitive reporting protected | 901.218 | [ ] | |
| SMS-09 | Change management applied | SMS-001 | [ ] | |
| SMS-10 | Management review conducted | 901.218 | [ ] | |

#### 7.5.7 Annual System Audit

Once per year, the Safety Manager (or an external auditor/peer from another SAR group) shall conduct a Full System Audit covering all program areas.

**Audit Scope - Sample Review:**
- Flight Logs (AirData) vs. Site Surveys (Did we do a survey for every flight?)
- Training Records (Are certifications current?)
- Maintenance Logs (Was the firmware update tested?)
- Hazard Registry (Are hazards actively managed?)
- Incident Reports (Were corrective actions completed?)

**Sample Size:** Minimum 10% of flights in the audit period, or 10 flights, whichever is greater.

> **COR Alignment:** This audit also serves as the annual maintenance audit for the COR Safety Program.

#### 7.5.8 Audit Findings Classification

| Classification | Definition | Action Required | Timeline |
|----------------|------------|-----------------|----------|
| **Critical** | Immediate safety risk or regulatory violation | Stop operations, immediate corrective action | Immediate |
| **Major** | Significant non-compliance affecting safety | Corrective action plan required | Within 30 days |
| **Minor** | Minor non-compliance, low safety impact | Corrective action at next opportunity | Within 90 days |
| **Observation** | Improvement opportunity, not non-compliance | Consider at next review | At discretion |

#### 7.5.9 Audit Report Template

| Program RPAS INTERNAL AUDIT REPORT | |
|---------------------------------|---|
| **Audit Number:** | AUD-[YEAR]-[NUMBER] |
| **Audit Type:** | [ ] Operations  [ ] Training  [ ] Maintenance  [ ] SMS  [ ] Full System |
| **Audit Date(s):** | |
| **Auditor(s):** | |
| **Audit Scope:** | |
| **Documents Reviewed:** | |
| **Personnel Interviewed:** | |
| **Previous Audit Findings Status:** | |

| Finding # | Classification | Description | Evidence | CAP Required |
|-----------|----------------|-------------|----------|--------------|
| | | | | |
| | | | | |

| **Audit Summary:** | |
| **Total Findings:** | Critical: ___  Major: ___  Minor: ___  Observations: ___ |
| **Overall Compliance:** | [ ] Satisfactory  [ ] Needs Improvement  [ ] Unsatisfactory |
| **Auditor Signature:** | _________________________ Date: _________ |
| **AE Review:** | _________________________ Date: _________ |

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

#### 7.6.2 Findings and Corrective Actions

| Step | Description |
|------|-------------|
| Non-Compliance | Any gap found (e.g., "Pilot A is missing their ROC-A copy") is logged as a "Finding" |
| Corrective Action Plan | A specific plan with a due date is created to fix the finding (e.g., "Pilot A will upload ROC-A by Friday") |
| Closure | The Accountable Executive signs off on the audit once all CAPs are closed |

### 7.7 Continuous Improvement

The Program commits to continuous improvement through:
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

### 7.9 Third-Party Audit Program

#### 7.9.1 Purpose

Per SAIL IV OSO#24 requirements, the Program maintains a third-party audit program to provide independent verification of operations, safety management, and regulatory compliance. Third-party audits supplement internal quality assurance to ensure objectivity.

#### 7.9.2 Designated Third-Party Auditor

| Organization | Aeria Solutions Ltd |
|--------------|---------------------|
| Type | Licensed RPOC Operator |
| Location | Sea to Sky corridor, BC (local) |
| Qualifications | Transport Canada RPOC holder, industry experience |
| Contact | Via the Program Accountable Executive |

#### 7.9.3 Audit Scope

| Audit Area | Scope | OSO Reference |
|------------|-------|---------------|
| Operations Manual | Procedures, checklists, compliance | OSO#01 |
| Safety Management | SMS effectiveness, reporting culture | OSO#01, OSO#08 |
| Training Program | Records, competency assessment, currency | OSO#09 |
| Maintenance Program | Records, airworthiness, defect tracking | OSO#03, OSO#07 |
| SORA Compliance | OSO evidence, risk assessment validity | All OSOs |
| Equipment Standards | C3 link, HMI, flight envelope protection | OSO#06, OSO#17, OSO#18 |

#### 7.9.4 Audit Schedule

| Audit Type | Frequency | Deliverable |
|------------|-----------|-------------|
| Full RPOC Audit | Annual | Formal audit report |
| SORA/OSO Review | Annual (with full audit) | OSO compliance matrix |
| Follow-up Audit | As required | Finding closure verification |

#### 7.9.5 Audit Process

| Step | Action | Responsible | Timeline |
|------|--------|-------------|----------|
| 1 | Schedule audit with Aeria Solutions Ltd | Accountable Executive | 30 days prior |
| 2 | Provide documentation package to auditor | Chief Pilot | 14 days prior |
| 3 | Conduct entrance meeting | AE + Auditor | Day of audit |
| 4 | Execute audit per agreed scope | Auditor | Per schedule |
| 5 | Conduct exit meeting with preliminary findings | Auditor | End of audit |
| 6 | Receive formal audit report | Auditor | Within 14 days |
| 7 | Develop corrective action plan | Chief Pilot | Within 14 days |
| 8 | Submit corrective actions to auditor | Chief Pilot | Per timeline |
| 9 | Verification of closure | Auditor | Per timeline |

#### 7.9.6 Documentation Requirements

| Document | Purpose | Retention |
|----------|---------|-----------|
| Audit Agreement | Terms and scope | Duration of relationship |
| Audit Reports | Findings and observations | 5 years |
| Corrective Action Records | Response to findings | 5 years |
| Closure Evidence | Verification of corrections | 5 years |

#### 7.9.7 Auditor Independence

The third-party auditor must:
- Not have been involved in creating the procedures being audited
- Have no financial interest in the Program operations beyond audit fees
- Maintain confidentiality of the Program proprietary information
- Provide objective, evidence-based findings

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

### 8.3 the Program Contacts

| Contact | Phone | When to Call |
|---------|-------|--------------|
| Program Lead: Dustin Wales | 604-849-2345 | All flight emergencies; program questions, updates, and inquiries |
| the Program Operations | [SAR phone] | All incidents during SAR tasking |
| Accountable Executive | [Contact on file] | Serious incidents |

### 8.4 General Emergency

| Contact | Phone |
|---------|-------|
| Emergency Services | **911** |
| Squamish General Hospital | 38140 Behrner Drive, Squamish |
| Whistler Health Care Centre | 4380 Lorimer Road, Whistler |
| Pemberton Health Centre | 1403 Portage Road, Pemberton |

---

## 9. Document Control

### 9.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Appointed per Organization | Per Organization |
| Chief Pilot | Appointed per Organization | Per Organization |

Signatures on file. Original signed document retained per QAP-001.

### 9.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Safety & Emergency Manual | Dustin Wales |
| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |

**Document Author:** Dustin Wales

**Questions, updates, inquiries:** Dustin Wales, 604-849-2345
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

*This document is part of the Program RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    people: {
        title: "People & Equipment Manual",
        icon: "fa-users",
        docCount: 9,
        content: `# S2S SAR Drone Program - People & Equipment Manual

## Sea to Sky Corridor Search and Rescue - Regional Drone Program

---

| Document | PEQ-MANUAL |
|----------|------------|
| Version | 2.0 |
| Effective | August 2026 |
| Review Date | August 2027 |
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

To define the specific duties, authority, and accountability of all personnel within the S2S SAR Drone Program. This policy ensures clear chains of command and compliance with Canadian Aviation Regulations (CARs) Part IX and applicable Special Flight Operations Certificates (SFOC).

### 1.2 Governance Context

> **Note:** While the organizational structure below reflects the internal chain of command specific to the Program RPAS program, the S2S SAR Drone Program operates within a broader Search and Rescue governance framework. the Program is overseen by a Board and operates under incident command, call-out management, and leadership structures that may vary depending on the operational context, phase of decision-making, and incident command system (ICS) activation.
>
> The hierarchy presented in this section applies solely to roles, responsibilities, and authority within the RPAS program itself, and is intended to clarify accountability, regulatory compliance, and operational control for RPAS activities. It does not supersede, replace, or redefine the Program's overall organizational governance or incident command authorities.

### 1.3 Organizational Hierarchy

| Level | Role | Reports To | Primary Accountability |
|-------|------|------------|------------------------|
| 1 | Accountable Executive (AE) | Per Organization | Ultimate financial, legal, and regulatory responsibility for the Program RPAS Program |
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

**Qualification.** A visual observer is a crew member trained to assist the pilot in ensuring the safe conduct of a flight (CAR 900.01). Under the Organization's RPOC, the qualification is simply that the person has been trained under the Program training program (CAR 901.219). No pilot certificate is required to act as a VO on an ordinary operation. A trained VO may be used on any operation where a VO is required, and equally where an extra set of eyes is simply useful.

Two exceptions come from the regulations rather than from Program policy:

| Operation | Additional requirement |
|-----------|------------------------|
| Extended VLOS (Division V) | The VO must also hold a pilot certificate (Basic, Advanced, or L1C) and remain within 2 NM of the aircraft (CAR 901.75) |
| BVLOS relying on visual observer detect and avoid | The VO must be trained in accordance with Standard 923 (CAR 901.95(2)) |

| Area | Responsibility |
|------|----------------|
| Visual Line of Sight | Maintaining a clear visual line of sight with the RPAS during operations |
| Hazard Identification | Actively monitoring the airspace for potential hazards (aircraft, obstacles, weather) and communicating conflicts to the PIC |
| Sterile Cockpit | Maintaining a "sterile cockpit" environment (free of distractions) for the PIC |
| Safety Review | Participating in incident/accident investigation reviews |

---

### 1.6 Loadmaster

> **STATUS: PROVISIONAL.** This role supports payload delivery operations, which are documented but not yet authorized for operational use. See Operations Manual Section 13.

The Loadmaster is responsible for everything about the payload: what it is, what it weighs, how it is secured, and whether the aircraft is safe to fly with it.

**Required credentials**

| Requirement | Standard |
|-------------|----------|
| Program standing | Trained Program member; Visual Observer qualification recommended |
| Training | Medium RPA ground school modules on weight and balance, delivery systems, and site and crew (Training Manual 4.9.2) |
| Assessment | Practical assessment on load preparation, weight verification, and securing, signed off by the Chief Pilot |
| Currency | Participation in at least one delivery operation or drill every 12 months |

**Responsibilities**

1. Confirms the payload contents are permitted under CAR 901.43(1) and Program policy
2. Determines payload weight by measurement, not estimate, and states it to the PIC
3. Confirms total operating weight is within the aircraft limit for the conditions and at or below 150 kg
4. Secures the load so it cannot shift, and confirms centre of gravity within limits
5. Controls the loading area and keeps persons clear of the rotor arc during loading
6. Confirms the load is released and the aircraft clear before the aircraft departs the delivery point where the loadmaster is present
7. Records the payload details for the delivery log

The Loadmaster has the authority to stop a loading operation and to refuse a load that cannot be verified or safely secured.

---

## 2. Pilot Training Program

### 2.1 Purpose

This section establishes the pilot training program for Program RPAS operations, including Standard Scenario qualifications per CAR 901.220 and SORA competency requirements.

### 2.2 Training Program Structure

| Level | Operations | Requirements |
|-------|------------|--------------|
| Trainee | Training flights under direct supervision only | Enrolled in the Program training stream |
| Basic | Whatever the TC Basic certificate allows; Program SAR basic training applies | TC Basic exam plus Program basic training |
| Advanced | Whatever the TC Advanced certificate allows; Program SAR advanced permissions apply | TC Advanced exam plus Program advanced training |
| SFOC | Standard scenarios and standing SFOCs; SFOC limits apply | Advanced level plus Program SFOC training plus granted privileges under the SFOC |
| L1C | Whatever the TC Level 1 Complex certificate allows (Division VI BVLOS under the RPOC) | TC L1C exam plus Program BVLOS training |
| Flight Reviewer | Internal Program flight reviews and sign-offs (not a TC Flight Reviewer rating) | Advanced or L1C level plus Program instructor training plus Chief Pilot appointment |

### 2.3 Foundation Training

#### 2.3.1 Purpose

To establish the Foundation Training program for Program RPAS operators. This training builds core competencies in aircraft handling, site surveys, team dynamics, and procedural execution, preparing pilots for operational deployments under the Program Special Flight Operations Certificate (SFOC).

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

> Upon successful completion of Foundation Training and flight review, pilots are authorized to operate the training aircraft they were trained on under the Program SFOC. Pilots may then progress to Advanced Training for operational equipment authorization.

### 2.4 Advanced Training

#### 2.4.1 Purpose

To establish the Advanced Training program for Program RPAS operators. This training develops expertise with operational aircraft and prepares pilots for complex missions, including simulated special operations, night flying, terrain-based searching, and Extended/Beyond Visual Line of Sight (EVLOS/BVLOS) operations.

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
- Current authorization to operate training drones under the Program SFOC
- Fitness for duty (medical, mental, and fatigue management requirements met)

#### 2.4.4 Advanced Training Requirements

**Aircraft-Specific Training:** Complete type-specific training on each RPAS type the pilot will operate. Type training is required for every aircraft in the Organization's register, whether or not it is one of the reference types documented in this suite (currently the DJI M30T and DJI Matrice 4TD).

**Flight Hours:** Log a sufficient flight time on each RPAS type for the Chief Pilot to be satisfied with the pilot's competence. Hours may include:
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

> Upon successful completion of Advanced Training and trainer sign-off, pilots are cleared to operate the specific RPAS type in live operational missions under the Program SFOC. Additional RPAS types require separate Advanced Training and sign-off.

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

| Topic | Competency |
|-------|------------|
| ATC Coordination Procedures | ATC-01: Proper coordination execution |
| High Altitude Weather | WX-01: Altitude weather assessment |
| Airspace and Traffic | AS-01: Traffic identification |
| Emergency Procedures | EM-01: Emergency descent execution |
| SORA for High Altitude | SORA module completion |

### 2.7 STSC-004 BVLOS Training

| Topic | Competency |
|-------|------------|
| SORA for BVLOS | Complete SORA module |
| Lost Link Procedures | LL-01: Lost link response |
| Navigation Without VLOS | NAV-01: Telemetry navigation |
| Emergency Procedures BVLOS | EM-02: BVLOS emergencies |
| Population Density Assessment | PD-01: Area assessment |
| Controlled Ground Area | CGA-01: M1 implementation |

### 2.8 Time-Critical SAR Operations Training
All pilots qualified for SAR operations must complete training on time-critical scenario selection.

#### 2.8.1 Learning Objectives

- Understand SFOC conditions for STSC-003, including required ATS coordination
- Recognize when time-critical SAR activation requires STSC-004 fallback
- Apply scenario selection decision matrix during Rapid Site Survey
- Plan and execute effective search under 400' AGL constraint

#### 2.8.2 Training Content

| Module (30 min each) | Content |
|----------------------|---------|
| Regulatory Framework | Operating authority selection (certificate / RPOC Division VI / SFOC); STSC SFOC conditions; legal implications |
| Scenario Selection | Assessing notification feasibility; decision matrix; Rapid Site Survey integration |
| Terrain-Following Operations | Contour search patterns; consistent AGL in variable terrain; RTH planning; obstacle awareness |
| Sub-400' Search Effectiveness | Thermal detection at 80-120m AGL; modified track spacing; search pattern adaptation |

#### 2.8.3 Assessment

- **Scenario-based evaluation:** Given SAR activation details, correctly identify appropriate scenario
- **Practical demonstration:** Execute terrain-following search under 400' AGL
- **Crew briefing:** Deliver time-critical operations brief to simulated crew

### 2.9 Human Factors Training
- IMSAFE checklist
- Stress recognition
- Decision-making models (DECIDE, OODA)
- Situational awareness
- CRM principles
- Fatigue recognition

### 2.9.1 Human-Machine Interface (HMI) Evaluation (OSO#20)

#### Purpose

This section documents the Human-Machine Interface evaluation for Program RPAS operations per SORA v2.5 OSO#20 (human machine interface evaluation), required at low robustness for SAIL II operations. The evaluation ensures that the aircraft systems and ground control interface are designed to support safe crew operations and minimize human error.

#### HMI Evaluation Criteria

| Criteria | Requirement | the Program Assessment |
|----------|-------------|-----------------|
| **Display Readability** | Clear, unambiguous display of critical flight data | Met - DJI RC Plus/Pro controllers have high-visibility screens |
| **Warning Systems** | Audible and visual alerts for critical conditions | Met - Multi-modal warnings (visual, audible, haptic) |
| **Control Layout** | Intuitive, accessible controls for normal and emergency ops | Met - Standard RC layout, emergency functions accessible |
| **Information Priority** | Critical information prominently displayed | Met - Battery, altitude, signal strength always visible |
| **Workload Management** | Interface does not overload operator during high-tempo ops | Met - Automation reduces workload; key data summarized |

#### DJI RC Plus Controller HMI Assessment

| Interface Element | Function | Usability Rating |
|-------------------|----------|------------------|
| Main display | Flight telemetry, video feed | High - 7" high-bright screen |
| Physical sticks | Primary flight control | High - Standard RC Pro layout |
| Function buttons | Mode changes, camera control | Medium - Requires familiarity |
| Emergency stop | Immediate motor stop | High - Clearly marked, accessible |
| RTH button | Return to home activation | High - Dedicated, prominent |
| Audio alerts | Warning annunciation | High - Clear, distinguishable tones |
| Haptic feedback | Control confirmation | Medium - Present but subtle |

#### Pilot App Interface (DJI Pilot 2)

| Feature | Function | Evaluation |
|---------|----------|------------|
| Map overlay | Airspace, geofences, flight path | Clear, intuitive |
| Telemetry display | Aircraft status, sensors | Comprehensive, readable |
| Warning messages | Alerts and notifications | Prominent, actionable |
| Camera controls | Gimbal, zoom, recording | Accessible, logical layout |
| Settings access | Configuration menus | Adequate for pre-flight |

#### HMI Risk Mitigations

| Risk | Mitigation |
|------|------------|
| Display glare | Anti-glare hood provided; operate from shaded position |
| Cold weather touch | Gloves compatible; physical buttons available |
| Information overload | Pre-flight setup reduces in-flight configuration |
| Unfamiliar interface | Standardized aircraft types; regular training |

#### Periodic HMI Review

| Review Element | Frequency | Responsible |
|----------------|-----------|-------------|
| Controller firmware | After each update | Chief Pilot |
| New aircraft integration | Before operational use | Chief Pilot |
| Incident-based review | After HMI-related event | Safety Manager |
| Annual assessment | Yearly | Chief Pilot |

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
- **Knowledge:** Demonstrated understanding of RPAS Operations Manual procedures and the Program protocols
- **Practical Competency:** Safe and controlled execution of required flight maneuvers

| Outcome | Action |
|---------|--------|
| Successful | Authorization to operate training aircraft |
| Unsuccessful | Additional practice + reassessment when the trainee and trainer agree readiness is met |

#### 2.11.2 Advanced Training Progression

| Outcome | Action |
|---------|--------|
| Successful | Written sign-off for aircraft type; cleared for live ops |
| Unsuccessful | Written feedback; scheduled remediation |

#### 2.11.3 Hold Points and Conditional Progression

| Hold Point | Details |
|------------|---------|
| Foundation Hold | Trainee does not meet Flight Review standards. Feedback provided; additional practice; reassessment when the trainee and trainer agree readiness is met. |
| Advanced Hold | Pilot does not meet trainer sign-off standards. Written feedback; additional scenarios or flight practice; re-evaluation scheduled. |
| Recurring Hold | If trainee fails reassessment twice, Operations Manager meets with trainee to assess program suitability. |

#### 2.11.4 Timeline

> **Expected timeline:** Foundation Training 4-6 weeks (one class per week + 1-2 weeks for flight review prep) -> Advanced Training 4-8 weeks per aircraft type -> Total Time to Operational: 8-14 weeks for a single aircraft type.

### 2.12 Program Participation Requirements

The Program sets four participation requirements, detailed in Training Manual Section 10.1:

| # | Requirement |
|---|-------------|
| 1 | Onboarding training completed before participating in Program operations (new members) |
| 2 | Recurrent ground training, 2 hours per year |
| 3 | 20 hours per year of drone team activity, counting training, activations, flight time, exercises, maintenance, and meetings |
| 4 | 3 drone tasks per year, meaning participation in a tasking or realistic exercise in any crew role |

These are separate from, and do not replace, the pilot certificate recency requirements of CAR 901.56, 901.65, and 901.91.

### 2.13 Ongoing Development

> Pilots fly each RPAS type regularly enough to remain comfortable and competent on it. Where a pilot is rusty on a type, or the Chief Pilot judges them to be, they fly with a trainer before taking an operational tasking on that type. This is a competence judgment rather than a fixed interval.

### 2.14 Training Records

Per CAR 901.223, maintain records of:
- All training completed, with dates
- Assessment results
- Instructor/examiner details
- Qualifications achieved, and certificate recency dates where regulatory
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
| Aircraft systems (each type flown) | 85% | Written + practical |
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

This section establishes the pilot competency records system for Program RPAS operations per CAR 901.220.

### 4.2 Qualification Structure

| Level | Title | Requirements |
|-------|-------|--------------|
| Trainee | Pilot Under Training | Enrolled in the Program training stream; flies only under direct supervision |
| Basic | Basic Pilot | TC Basic certificate; Program basic training and orientation complete |
| Advanced | Advanced Pilot | TC Advanced certificate; Program advanced training complete; type training on aircraft flown |
| SFOC | SFOC Pilot | Advanced level; trained on the standard scenarios and standing SFOCs the Organization holds; granted privileges under that SFOC |
| L1C | Level 1 Complex Pilot | TC Level 1 Complex certificate; Program BVLOS training complete |
| Flight Reviewer | Program Flight Reviewer (internal) | Advanced or L1C level; Program instructor training; Chief Pilot appointment. Not a Transport Canada Flight Reviewer rating |

### 4.3 Participation and Currency

| Item | Standard |
|------|----------|
| Program participation | The four requirements of Training Manual 10.1: onboarding (new members), 2 hours annual recurrent ground training, 20 hours annual drone team activity, 3 drone tasks per year |
| Certificate recency | Per CAR 901.56, 901.65, or 901.91 as applicable to the certificate held, within the preceding 24 months |
| Type competence | Pilot is comfortable and competent on each type flown, in the Chief Pilot's judgment. Where not, a flight with a trainer is required before operational tasking on that type |
| Specialised operations | Same standard applies to BVLOS, high altitude, and payload delivery: demonstrated comfort with the operation rather than a fixed interval |

### 4.4 Records Maintained

#### 4.4.1 Individual Pilot Record

- Personal information
- Transport Canada credentials
- the Program qualification status
- Aircraft authorizations
- Standard Scenario endorsements
- Currency status

#### 4.4.2 Flight Time Summary

- Flights and hours by aircraft type, recorded for the Program activity total (Training Manual 10.1, requirement 3)
- Taskings participated in, for requirement 4
- By operation type

### 4.5 Pilot Training Record Template

#### Pilot Information

| Field | Information |
|-------|-------------|
| Name: | |
| TC Pilot Certificate #: | |
| Certificate Expiry: | |
| Organization Join Date: | |
| Aircraft Qualifications: | M30T [ ]    M4TD [ ]    Other (specify): ____________ |
| Scenario Qualifications: | STSC-003 [ ]    STSC-004 [ ] |

#### Training History

| Training Item | Date Completed | Instructor | Next Due |
|---------------|----------------|------------|----------|
| Initial ground school | | | |
| M30T type training | | | |
| M4TD type training | | | |
| Other type training (specify) | | | |
| Medium RPA type training (specify type) | | | |
| Payload delivery, cargo method | | | |
| Payload delivery, winch method | | | |
| Loadmaster | | | |
| STSC-003 training | | | |
| STSC-004 BVLOS training | | | |
| Emergency procedures | | | |
| SAR operations training | | | |

### 4.6 Annual Participation Summary

| Member | Onboarding complete | Recurrent ground training (2 hrs) | Drone team activity (20 hrs) | Drone tasks (3) | Certificate recency current |
|--------|---------------------|-----------------------------------|------------------------------|-----------------|------------------------------|
| | | | | | |

**Status legend**

| GREEN | YELLOW | RED |
|-------|--------|-----|
| All four Program requirements met and certificate recency current | Shortfall in one Program requirement; participation continues at Chief Pilot's discretion | Certificate recency lapsed, or Chief Pilot has stood the member down pending training |

### 4.7 Proficiency Check Records

Proficiency checks are conducted when the Chief Pilot considers one useful, when a member returns after a period away, and after any performance concern. They include:
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

- Advanced Pilot Certificate (CAR 901.64)
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

**Chief Pilot: appointed per Organization. Required credentials: Level 1 Complex pilot certificate (CAR 901.90); Flight Reviewer rating (CAR 901.176) recommended.**
**Designation Date:** March 2026
**Reports To:** Accountable Executive
**Alternate:** [Designated Deputy Chief Pilot when appointed]

### 5.2 Chief Pilot Qualifications

The Chief Pilot must meet and maintain the following minimum qualifications:

| Requirement | Standard | Evidence |
|-------------|----------|----------|
| RPAS Certificate | Valid Transport Canada Advanced RPAS Operator Certificate | TC Certificate |
| Experience | Substantial operational RPAS experience across the Program's aircraft types and operation types | Program activity records |
| Operational Experience | Sustained service as an operational Program RPAS pilot, sufficient for the Accountable Executive to have confidence in the appointment | Personnel records |
| Scenario Endorsements | All Standard Scenario endorsements (STSC-003, STSC-004) | Endorsement records |
| Trainer Status | Certified Program RPAS Trainer | Designation letter |
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
| Training Records | Ensure training records are complete and accurate | Reviewed at least annually |
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
| Training Progress | At least annually | AE | Training pipeline, completions |
| Equipment Status | At least annually | AE | Fleet readiness, maintenance |
| Regulatory Compliance | Semi-annual | AE | Compliance status, issues |
| Annual Report | Annual | AE | Full program review |

### 5.7 Pilot Qualification Levels

| Level | Title | Requirements |
|-------|-------|--------------|
| Trainee | Pilot Under Training | Enrolled in the Program training stream; flies only under direct supervision |
| Basic | Basic Pilot | TC Basic certificate; Program basic training and orientation complete |
| Advanced | Advanced Pilot | TC Advanced certificate; Program advanced training complete; type training on aircraft flown |
| SFOC | SFOC Pilot | Advanced level; trained on the standard scenarios and standing SFOCs the Organization holds; granted privileges under that SFOC |
| L1C | Level 1 Complex Pilot | TC Level 1 Complex certificate; Program BVLOS training complete |
| Flight Reviewer | Program Flight Reviewer (internal) | Advanced or L1C level; Program instructor training; Chief Pilot appointment. Not a Transport Canada Flight Reviewer rating |

### 5.4 Flight Reviewer

#### 5.4.1 Current Designation

| Item | Details |
|------|---------|
| Flight Reviewer | Per Organization; pilot certificate endorsed with Flight Reviewer rating (CAR 901.176) |
| Affiliation | Declared training provider per CAR 901.175 and Standard 921 |
| Authorization Scope | All assessments, all endorsements |

#### 5.4.2 Flight Reviewer Responsibilities

- Conduct initial qualification assessments
- Conduct annual proficiency checks
- Issue Standard Scenario endorsements (STSC-003, STSC-004)
- Conduct currency restoration assessments
- Issue aircraft type authorizations

### 5.5 Chief Instructor Role

**Chief Instructor: appointed per Organization. Required credentials: Flight Reviewer rating (CAR 901.176); for Level 1 Complex ground school delivery, meets chief ground instructor requirements (CAR 901.183).**

Responsible for:
- Training program management
- Curriculum approval
- Instructor oversight
- Regulatory compliance of training

### 5.6 Currency and Participation

| Requirement | Standard |
|-------------|----------|
| Certificate recency | Per CAR 901.56, 901.65, or 901.91 as applicable, within the preceding 24 months. This is regulatory and not discretionary |
| Program participation | The four requirements of Training Manual 10.1 |
| Type competence | Comfortable and competent on each type flown, in the Chief Pilot's judgment |
| Specialised operations | Comfortable and competent with the specific operation (BVLOS, high altitude, payload delivery) before conducting it operationally |

#### Pre-Flight Verification

Before any flight, the PIC confirms:

- Certificate held is appropriate to the operation, and recency is current per the CARs
- They are comfortable and competent on the aircraft type and the operation intended
- Any Organization authorization or SFOC privilege required for the operation is held

> **A pilot who is not confident on the type or the operation does not fly it operationally until they have flown it with a trainer. Regulatory recency, once lapsed, is an absolute bar until restored.**

### 5.7 Proficiency Check

Conducted when the Chief Pilot considers one useful, when a member returns after time away, and after any performance concern.

| Element | Method |
|---------|--------|
| Regulatory knowledge | Oral |
| SMS knowledge | Oral |
| Emergency procedures | Oral + demonstration |
| Pre-flight inspection | Demonstration |
| Normal operations | Flight |
| Emergency response | Simulated |

### 5.8 Examiner Standards

#### 5.8.1 STSC-003 Assessment

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

#### 5.8.2 STSC-004 Assessment

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

### 5.9 Pass Criteria

- All elements minimum score of 2
- Overall average 3.0 or higher
- No critical failures

### 5.10 Failed Assessment

> Upon failed assessment: privileges suspended immediately, deficiencies documented, remedial training required, re-check minimum 7 days later.

---

## 6. Personal Protective Equipment

### 6.1 Purpose

To ensure the physical safety, visibility, and professional identification of Program RPAS crew members during operations. This policy mandates the minimum protective gear required to mitigate environmental hazards and manage public interaction.

### 6.2 Basic PPE Requirements

All crew members must be equipped with the following minimum PPE for every operation:

| PPE Item | Requirements |
|----------|--------------|
| the Program Attire | Crew members must wear approved the Program uniform/attire to ensure easy identification by other agencies and the public. |
| High-Visibility Vest | A designated "Drone Team" or "RPAS Crew" or "the Program Garment" vest must be worn to distinguish the flight crew from the general public. |
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

To ensure the operational reliability and airworthiness of all Program RPAS equipment. This policy mandates a systematic testing regimen to verify that all systems function within manufacturer specifications and regulatory requirements (CAR 901.29) prior to operational deployment.

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

**Safety Assurance Declaration:** the Program operates only RPAS for which the manufacturer has provided a safety assurance declaration to the Minister of Transport (CAR 901.194 and Standard 922) for the intended operational environment (e.g., Controlled Airspace, Near People)

**Operational Suitability:** Only RPAS suitable for the specific mission profile are permitted. For Advanced Operations or flights under an SFOC, pilots must verify the aircraft is listed as eligible on the Transport Canada list

### 7.7 Registration and Markings

- **Registration:** All Program RPAS must be registered with Transport Canada (CAR 900.13)
- **Marking Placement:** The unique registration number must be affixed to a permanent part of the RPAS's external structure - clearly visible, legible, and contrasted with the background (CAR 900.14)
- **Maintenance of Markings:** Registration markings must be inspected regularly. If a marking becomes faded, damaged, or obscured, it must be restored to compliant standards immediately

### 7.8 Maintenance Regimen

Maintenance shall be performed in accordance with the manufacturer's maintenance program.

| Area | Requirement |
|------|-------------|
| Tracking System | the Program utilizes AirData to track flight hours and maintenance cycles |
| Firmware/Software | Updates applied per manufacturer recommendations. Updates must be verified for stability before deploying the RPAS into an active search mission |
| Mandatory Actions | the Program will monitor for and immediately comply with any mandatory manufacturer safety notices or airworthiness directives |

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

This policy establishes insurance requirements and liability management procedures for Program RPAS operations to ensure adequate coverage for all authorized operations including Standard Scenarios, and to protect the Program, its members, and third parties.

### 8.2 Insurance Requirements (Program Policy)

Per Canadian Aviation Regulations, operators must maintain liability insurance:

| MTOW Category | Minimum Coverage | the Program Recommended |
|---------------|------------------|------------------|
| Up to 1 kg | $100,000 | $1,000,000 |
| 1 kg to 5 kg | $100,000 | $2,000,000 |
| 5 kg to 25 kg | $500,000 | $2,000,000 |
| Over 25 kg | $1,000,000 | $5,000,000 |

> **Note:** the Program maintains coverage significantly exceeding minimum regulatory requirements due to SAR operational complexity and public safety responsibility.

### 8.3 Aircraft Coverage

Every aircraft in the Organization's register must be covered before it is operated. Coverage is confirmed when a new type is added.

| Aircraft | MTOM | Category | Minimum Required | Policy Actual |
|----------|------|----------|------------------|---------------|
| DJI M30T | 3.77 kg | 1-5 kg | $100,000 | [Policy Amount] |
| DJI Matrice 4TD | 2.3 kg | 1-5 kg | $100,000 | [Policy Amount] |
| [Other registered aircraft] | [MTOM] | [Category] | [Per category] | [Policy Amount] |

### 8.4 Policy Scope Requirements

#### 8.4.1 Aircraft Covered

The insurance policy must cover:
- All RPAS owned by the Program RPAS Program
- All RPAS operated under the Program authority
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
| the Program Operational Boundary | Explicit coverage confirmation |
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

| Common Exclusion | the Program Status | Mitigation |
|------------------|-------------|------------|
| BVLOS operations | Covered by endorsement | Obtain written confirmation |
| Operations above 400' AGL | Covered by endorsement | Obtain written confirmation |
| Commercial operations | the Program is non-profit SAR | Confirm SAR support covered |
| War/terrorism | Standard exclusion | Accept (standard) |
| Nuclear | Standard exclusion | Accept (standard) |
| Intentional acts | Standard exclusion | Accept (standard) |
| Criminal acts | Standard exclusion | Accept (standard) |
| Night operations | Must not be excluded | Verify coverage |
| Unregistered aircraft | Must comply with CAR 900.13 | Maintain registration |
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
| Aircraft Registered | Registration current per CAR 900.13 |
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
| Accountable Executive | Appointed per Organization | Per Organization |
| Chief Pilot | Appointed per Organization | Per Organization |

Signatures on file. Original signed document retained per QAP-001.

### 9.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated People & Equipment Manual | Dustin Wales |
| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |

**Document Author:** Dustin Wales

**Questions, updates, inquiries:** Dustin Wales, 604-849-2345
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

*This document is part of the Program RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    training: {
        title: "Training Program Manual",
        icon: "fa-graduation-cap",
        docCount: 13,
        content: `# S2S SAR Drone Program - Training Manual

## Sea to Sky Corridor Search and Rescue - Regional Drone Program

---

| Document | TRN-MANUAL |
|----------|------------|
| Version | 2.0 |
| Effective | August 2026 |
| Review Date | August 2027 |
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
10. [Program Participation and Currency](#10-program-participation-and-currency)
11. [Operational Training Program](#11-operational-training-program)
12. [Program Awareness Training](#12-program-awareness-training-all-sar-members)
13. [Training Records](#13-training-records)
14. [Document Control](#14-document-control)

---

## 1. Training Program Overview

### 1.1 Purpose

This Training Program Manual establishes the comprehensive training requirements, pathways, and assessment standards for all Program RPAS operations personnel. This manual ensures compliance with CAR 901.220 (Training Program Requirements) and provides a structured progression from initial training through operational deployment and ongoing proficiency.

### 1.2 Training Philosophy

The Program's training philosophy is built on three principles:

1. **Safety First:** No operational pressure justifies compromising training standards
2. **Competency-Based Progression:** Advancement is based on demonstrated skill, not time served
3. **Continuous Improvement:** Training evolves with lessons learned and regulatory changes

### 1.3 Training Program Structure

| Level | Title | Operations Authorized | Requirements |
|-------|-------|----------------------|--------------|
| Trainee | Pilot Under Training | Training flights only, under the direct supervision of a certified Program pilot (CAR 901.54(2), 901.63(2), 901.89(2)) | Enrolled in the Program training stream |
| Basic | Basic Pilot | Whatever a TC Basic certificate allows: VLOS, uncontrolled airspace, at least 100 ft from uninvolved persons (CAR 901.53). Program SAR basic training applies | TC Basic certificate (CAR 901.55) plus Program basic training complete |
| Advanced | Advanced Pilot | Whatever a TC Advanced certificate allows: VLOS in controlled airspace, closer to uninvolved persons, EVLOS and sheltered operations, and medium RPA VLOS per Division V (CAR 901.62). Program SAR advanced permissions apply | TC Advanced certificate (CAR 901.64) plus Program advanced training complete |
| SFOC | SFOC Pilot | Standard scenario and standing SFOC operations. The limits are those written into the SFOC itself | Advanced level complete, plus Program training for the standard scenarios and standing SFOCs held, plus granted privileges under that SFOC |
| L1C | Level 1 Complex Pilot | Whatever a TC Level 1 Complex certificate allows: BVLOS under the Organization RPOC per Division VI (CAR 901.87) | TC Level 1 Complex certificate (CAR 901.90) plus Program training for BVLOS operations |
| Flight Reviewer | Program Flight Reviewer | Conducts internal Program flight reviews and competency sign-offs. **This is an internal Program role, not a Transport Canada Flight Reviewer rating.** A TC flight review for certificate issue (CAR 901.64(c), 901.90(e)) must be conducted by a person holding the TC flight reviewer rating under CAR 901.176 and affiliated with a declared training provider (CAR 901.175) | Advanced or L1C level, plus Program instructor training, plus Chief Pilot appointment |

Progression is sequential: a member moves up when the previous level is complete and both the member and the trainer are satisfied they are ready. The Program levels describe what a member has been trained and signed off to do. They never extend what a pilot certificate or SFOC allows; the Core Operating Rule governs (Operations Manual 1.3.1).

> **How progression works.** A member moves to the next stage when they have completed the previous stage and both they and the trainer are satisfied they are ready. There are no hour minimums or elapsed-time gates between stages, because readiness varies by person and by aircraft and cannot be tracked usefully by the clock. Where this manual lists modules, drills, or flights, they are things to be trained on and demonstrated, repeated as many times as competence requires, not a quota to be counted off.

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
| Compliance | Strict adherence to Program RPAS Manual and CARs |
| Fitness for Duty | Physically and mentally fit to perform designated role |
| Medical Condition | Must not operate if any illness, injury, or stress impairs ability |

### 2.2 Fatigue Management - CAR 901.19

The Program enforces the following duty limitations (in support of CAR 901.19(1)(a), fitness of crew members):

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
| Basic Operations | Required for all pilots (including Micro-RPAS <250g per the Program standards) |
| Advanced Operations | Required for controlled airspace, near people, or SFOC operations |
| Recency | Maintain per CAR 901.56/901.65 |
| Certificate Access | Physical or digital access during all operations (CAR 901.66) |
| Radio | Valid ROC-A required for aeronautical radio use |

#### 2.5.2 Visual Observer (VO)

| Operation Type | Certification Requirement |
|----------------|--------------------------|
| Standard VLOS | the Program Field VO Training module (minimum) |
| EVLOS Operations | Valid RPAS Pilot Certificate (Basic or Advanced) |

#### 2.5.3 Emergency Medical

> **At least one crew member present at the launch site must hold current Emergency First Aid & CPR certification.**

---

## 3. Foundation Training Program

### 3.1 Purpose

Foundation Training builds core competencies in aircraft handling, site surveys, team dynamics, and procedural execution, preparing pilots for operational deployments under the Program RPOC.

### 3.2 Prerequisites

- Minimum 18 years of age
- the Program member in good standing
- Completed the Program orientation
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

| Module | Title | Content |
|--------|-------|---------|
| **Class 1** | Introduction & Foundations | RPAS systems overview, team roles, regulations, basic flight skills introduction |
| **Class 2** | Practical Application | Site survey deep dive, simplified flight planning, hands-on flying |
| **Class 3** | Procedures & Role Play | Procedural execution, emergency response drills, crew resource management |
| **Class 4** | Operational Readiness | AirData integration, NAV CANADA flight planning, realistic scenario execution |

### 3.5 Class 1: Introduction & Foundations


#### Ground School Topics
- Program RPAS program overview and mission
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
3. reassessment when the trainee and trainer agree readiness is met
4. Trainee may revisit any Foundation class at trainer's discretion

---

### 3.11 Foundation Progression Outcome

> Upon successful completion of Foundation Training and flight review, pilots are authorized to operate the training aircraft they were trained on under the Program RPOC. Pilots may then progress to Advanced Training for operational equipment authorization.

---

## 4. Advanced Training Program

### 4.1 Purpose

Advanced Training develops expertise with the Organization's operational aircraft (the reference types documented in this suite are the DJI M30T and DJI Matrice 4TD; type training is required for whichever aircraft the pilot will fly) and prepares pilots for complex SAR missions including night operations, adverse weather, terrain-based searching, and EVLOS/BVLOS operations.

### 4.2 Prerequisites

- Successful completion of Foundation Training and Flight Review
- Current authorization to operate training aircraft under the Program RPOC
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
1. Chief Pilot satisfied with demonstrated handling competence
2. Consistency of flight performance across sessions
3. Appropriate progression through training scenarios

### 4.8 Advanced Progression Outcome

> Upon successful completion of Advanced Training and trainer sign-off, pilots are cleared to operate the specific RPAS type in live operational missions under the Program RPOC. Additional RPAS types require separate Advanced Training and sign-off.

---

### 4.9 Medium RPA and Payload Delivery Training

> **STATUS: PROVISIONAL.** Payload delivery is documented but not yet authorized for operational use. See Operations Manual Section 13.

#### 4.9.1 Prerequisites

| Requirement | Standard |
|-------------|----------|
| Certificate | Advanced (CAR 901.64), or Level 1 Complex (CAR 901.90) where BVLOS delivery is intended |
| Program standing | Foundation and Advanced Training complete; current on at least one Program aircraft |
| Flight hours | Chief Pilot satisfied that the pilot is competent and comfortable on current Program aircraft|
| Endorsement | Chief Pilot endorsement to enter the medium RPA stream |

#### 4.9.2 Ground School
| Module | Content |
|--------|---------|
| Regulatory framework | Medium RPA definition and the 150 kg ceiling; operating weight including payload; Division V and VI authority; the declaration requirement; CAR 901.26(b) separation; CAR 901.34(2) visibility relationship; payload rules at 901.43 and 901.50 |
| Aircraft systems | Airframe, propulsion, battery system and charging, positioning and RTK, obstacle sensing, parachute system, FPV and camera, alternate landing sites |
| Weight, balance and performance | Operating weight calculation; centre of gravity; altitude and temperature derating; endurance and range with and without load; the changed performance of the return leg after release |
| Delivery systems | Cargo mode loading and securing; winch operation per the manufacturer's manual; swing control; cut-cable protection and when it is justified |
| Risk and emergencies | The payload SORA assessment in outline (Safety Manual 3.11); load swing; entanglement; parachute deployment and footprint; forced landing with cargo; battery thermal hazard; cordon sizing |
| Site and crew | Launch and delivery site standards; crew roles including loadmaster; ground party coordination and release calls; abort criteria |

#### 4.9.3 Flight Training Progression

Each stage is completed to the Chief Pilot's satisfaction before the next begins. Stages 1 to 4 are conducted in benign terrain before any mountain operation.

| Stage | Content | Minimum |
|-------|---------|---------|
| 1. Handling, unloaded | Takeoff, hover, basic manoeuvring, landing, RTH, alternate landing site use | Repeated until competent |
| 2. Handling, light load | As stage 1 at approximately one third of maximum payload; hover check discipline | Repeated until competent |
| 3. Handling, full load | As stage 1 at maximum planned payload for the conditions; performance and endurance observed against calculation | Repeated until competent |
| 4. Delivery, method-specific | Cargo land-and-release and, where used, winch delivery to a marked site with a ground party | Repeated until competent in each method used |
| 5. Emergency drills | Simulated load swing recovery, simulated entanglement decision, lost link with load, forced landing site selection | Each drill demonstrated |
| 6. Mountain and operational | Delivery in representative terrain with a full crew, from tasking through to load receipt | 3 complete missions |

#### 4.9.4 Competency Standard

The candidate demonstrates:

- Correct calculation of operating weight, including payload and safety equipment, with an independent check by the loadmaster
- Correct determination of authority and confirmation of the declaration before flight
- Correct application of the separation and visibility limits, including the CAR 901.34(2) relationship
- Stable handling with a load, with no divergent swing
- Correct and timely abort decisions when criteria are met
- Clear communication with the ground party through the delivery sequence
- Sound emergency decision making, particularly the cut-cable judgment

Assessment is by a Flight Reviewer or the Chief Pilot, recorded per CAR 901.223.

#### 4.9.5 Staying Current on Medium RPA

Currency on a medium RPA is a matter of demonstrated comfort and competence, assessed by the Chief Pilot, not a fixed interval. A pilot who has not flown the type recently, or who is not confident on it, flies with a trainer before taking an operational delivery tasking. The emergency drill set is repeated whenever the Chief Pilot judges it useful, and always after any change to the aircraft or the delivery system.

A pilot current on the M30T or M4TD is **not** thereby current on a medium RPA. Currency is per type and per delivery method.

---

## 5. Standard Scenario Training

### 5.1 STSC-003 High Altitude VLOS Training


| Topic | Competency Code |
|-------|-----------------|
| ATC Coordination Procedures | ATC-01 |
| High Altitude Weather | WX-01 |
| Airspace and Traffic | AS-01 |
| Emergency Procedures | EM-01 |
| SORA for High Altitude | SORA-01 |

#### Learning Objectives
- Execute proper ATC coordination per Standard 922
- Assess altitude-specific weather hazards
- Identify and avoid traffic at altitude
- Execute emergency descent procedure
- Apply SORA methodology to high-altitude operations

### 5.2 STSC-004 BVLOS Training


| Topic | Competency Code |
|-------|-----------------|
| SORA for BVLOS | SORA-02 |
| Lost Link Procedures | LL-01 |
| Navigation Without VLOS | NAV-01 |
| Emergency Procedures BVLOS | EM-02 |
| Population Density Assessment | PD-01 |
| Controlled Ground Area | CGA-01 |

#### Learning Objectives
- Apply SORA methodology to BVLOS operations
- Execute lost link response procedures
- Navigate using telemetry without visual reference
- Respond to emergencies during BVLOS
- Verify population density requirements (<25 people/km²)
- Establish and maintain controlled ground area (M1)

### 5.3 Time-Critical SAR Operations Training


All pilots qualified for SAR operations must complete training on time-critical scenario selection.

#### Learning Objectives
- Understand SFOC conditions for STSC-003, including required ATS coordination
- Recognize when time-critical SAR activation requires STSC-004 fallback
- Apply scenario selection decision matrix during Rapid Site Survey
- Plan and execute effective search under 400' AGL constraint

#### Module Content

| Module | Content |
|--------|---------|
| Regulatory Framework | Operating authority selection (certificate / RPOC Division VI / SFOC); STSC SFOC conditions; legal implications |
| Scenario Selection | Assessing notification feasibility; decision matrix; Rapid Site Survey integration |
| Terrain-Following Operations | Contour search patterns; consistent AGL in variable terrain; RTH planning |
| Sub-400' Search Effectiveness | Thermal detection at 80-120m AGL; modified track spacing; pattern adaptation |

#### Assessment
- Scenario-based evaluation: Correctly identify appropriate scenario given SAR activation details
- Practical demonstration: Execute terrain-following search under 400' AGL
- Crew briefing: Deliver time-critical operations brief to simulated crew

---

## 6. Visual Observer Training

### 6.1 Field VO Training Module


Required for all Visual Observers conducting VLOS operations.

#### Content
- VO role and responsibilities
- Visual scanning techniques
- Communication protocols
- Threat identification and callouts
- Sterile cockpit discipline
- Emergency procedures awareness

### 6.2 Rapid VO Training (On-Site)

For non-RPAS the Program members acting as VO during operations:

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

Only personnel meeting the following criteria may serve as certified Program RPAS trainers:

| Requirement | Standard | Verification |
|-------------|----------|--------------|
| Flight Hours | demonstrated competence on the Program operational equipment| AirData logs |
| Operational Experience | Minimum 1 year as operational Program RPAS pilot | Personnel records |
| Certification | Valid Advanced RPAS Operator Certificate | TC certificate |
| Scenario Endorsements | All Standard Scenario endorsements (STSC-003, STSC-004) | Endorsement records |
| Risk Proficiency | Demonstrated proficiency in risk/hazard identification and control | Practical assessment |
| Training | Complete the Program Train-the-Trainer module | Training record |
| Currency | Maintain trainer recurrency requirements | Currency tracking |
| Character | Good standing within the Program, no serious safety violations | AE review |

### 7.2 Train-the-Trainer Module

**Prerequisites:** Meet all Section 7.1 requirements except this module
**Delivery:** Operations Manager or designated senior trainer
**Assessment:** Practical teaching demonstration with evaluation

#### 7.2.1 Module 1: Adult Learning Principles
**Learning Objectives:**
- Understand how adults learn differently from children
- Apply adult learning theory to RPAS training
- Recognize individual learning styles and adapt instruction

**Content:**

| Topic | Key Points |
|-------|------------|
| Andragogy vs Pedagogy | Self-direction, experience-based, problem-centered, immediate application |
| Learning Styles | Visual, auditory, kinesthetic learners; adapting delivery |
| Motivation Factors | Intrinsic vs extrinsic motivation, relevance, competence, autonomy |
| Barriers to Learning | Prior experience (positive/negative), anxiety, time pressure, physical factors |

**Practical Exercise:** Identify learning style preferences of current the Program pilots; design approach for each type.

#### 7.2.2 Module 2: Instructional Techniques
**Learning Objectives:**
- Structure effective training sessions
- Demonstrate skills progressively
- Manage the training environment

**Content:**

| Topic | Key Points |
|-------|------------|
| Tell-Show-Do-Review | Four-step instructional method for skill training |
| Briefing Structure | Objectives, content, assessment criteria, questions |
| Demonstration Techniques | Positioning, narration, pace, common errors to highlight |
| Training Environment | Distraction management, safety, equipment readiness |

**Tell-Show-Do-Review Method:**

| Step | Trainer Action | Trainee Action |
|------|----------------|----------------|
| **TELL** | Explain the skill, procedure, or concept | Listen, ask clarifying questions |
| **SHOW** | Demonstrate while narrating actions | Observe, take notes if needed |
| **DO** | Observe and coach | Perform the skill with guidance |
| **REVIEW** | Provide feedback, identify areas for improvement | Self-assess, ask questions |

#### 7.2.3 Module 3: Assessment Techniques
**Learning Objectives:**
- Design fair, consistent assessments
- Evaluate performance objectively
- Document assessment results properly

**Content:**

| Topic | Key Points |
|-------|------------|
| Assessment Types | Formative (during training), summative (end of training), practical, oral, written |
| Competency Standards | Using rating scales (1-4), defining "meets standard," calibrating assessors |
| Observation Skills | What to watch for, common errors, safety indicators |
| Documentation | Recording results, providing evidence, maintaining objectivity |

**Assessment Best Practices:**

| Practice | Description |
|----------|-------------|
| Pre-brief criteria | Always explain what will be assessed before the exercise |
| Observe silently | Minimize intervention during assessment (unless safety concern) |
| Take notes | Document specific observations, not just pass/fail |
| Be consistent | Apply same standard to all trainees |
| Assess against standard | Compare to published standard, not to other trainees |

#### 7.2.4 Module 4: Feedback Delivery
**Learning Objectives:**
- Deliver constructive feedback effectively
- Handle difficult conversations professionally
- Motivate trainees for continued improvement

**Content:**

| Topic | Key Points |
|-------|------------|
| Feedback Principles | Timely, specific, balanced, actionable |
| The Feedback Model | Situation-Behavior-Impact (SBI) model |
| Difficult Conversations | Underperformance, attitude issues, failure notification |

**SBI Feedback Model:**

| Component | Description | Example |
|-----------|-------------|---------|
| **Situation** | Describe the specific situation | "During the emergency landing drill today..." |
| **Behavior** | Describe the observed behavior | "...you forgot to announce 'Emergency Landing' to the crew before descending." |
| **Impact** | Explain the impact of the behavior | "This meant the VO wasn't prepared and couldn't clear the landing zone." |
| **Forward** | Suggest improvement | "Next time, ensure the announcement is the first action before any control inputs." |

#### 7.2.5 Module 5: Documentation Requirements
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

#### 7.2.6 Module 6: Practical Teaching Exercise
**Learning Objectives:**
- Demonstrate instructional competence
- Receive feedback on teaching effectiveness
- Identify personal development areas

**Exercise Structure:**

| Phase | Activity |
|-------|----------|
| Preparation | Candidate prepares a 15-minute training segment on assigned topic |
| Delivery | Candidate delivers training to volunteer trainee(s) |
| Assessment | Assessor observes and documents performance |
| Feedback | Assessor provides detailed feedback using SBI model |
| Discussion | Review of overall readiness, areas for development |
| Decision | Pass/fail determination, certification issuance |

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
| Flight Currency | Flies regularly enough to remain competent, in the Chief Pilot's judgment | Program activity records |
| Training Activity | Delivers training regularly enough to stay effective | Training records |
| Program requirements | Meets the four Program participation requirements (Section 10.1) | Currency tracking |
| Evaluation | Operations Manager evaluation every 24 months | Evaluation record |
| Development | Attend at least one professional development activity annually | Training record |

#### 7.4.1 Trainer Evaluation (24-Month)

Every 24 months, the Operations Manager evaluates each trainer on:

| Area | Assessment Method |
|------|-------------------|
| Training Effectiveness | Review of trainee outcomes, feedback from trainees |
| Documentation Quality | Audit of training records for completeness and accuracy |
| Currency Maintenance | Verification of Program participation requirements and demonstrated competence |
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
| Trainer Status | Established as a certified trainer, with a track record the Chief Pilot considers sufficient |
| Training Conducted | Has trained pilots through to operational status |
| Experience | Substantial operational flight experience across Program aircraft and operation types |
| All Endorsements | Current STSC-003 and STSC-004 endorsements |
| Additional Training | Complete Flight Reviewer standardization |
| AE Designation | Written designation from Accountable Executive |

---

## 8. Training Progression Pathway

### 8.1 Pathway Overview

'''
Foundation Training
        ↓
Foundation Flight Review
        ↓
Advanced Training (per aircraft type)
        ↓
Trainer Sign-Off
        ↓
Operational Authorization
        ↓
SFOC Training (standard scenarios and standing SFOCs held)
        ↓
L1C Training (BVLOS under the Organization RPOC)
        ↓
Program Flight Reviewer (internal appointment)
'''

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
| Unsuccessful | Additional practice + reassessment when the trainee and trainer agree readiness is met |

### 8.3 Advanced Training Progression

| Outcome | Action |
|---------|--------|
| Successful | Written sign-off for aircraft type; cleared for live ops |
| Unsuccessful | Written feedback; remediation scheduled with the trainer |

### 8.4 Hold Points

| Hold Point | Trigger | Resolution |
|------------|---------|------------|
| Foundation Hold | Does not meet Flight Review standards | Feedback, additional practice, reassessment when the trainee and trainer agree readiness is met |
| Advanced Hold | Does not meet trainer sign-off standards | Written feedback, additional scenarios or practice, re-evaluation when ready |
| Recurring Hold | Fails reassessment twice | Operations Manager meeting to assess program suitability |

### 8.5 Expected Timeline

| Phase | Completion |
|-------|------------|
| Foundation Training | Classes complete and Foundation Flight Review passed |
| Advanced Training | Type training complete and trainer sign-off obtained, per aircraft type |
| **Operational** | When both phases are complete for at least one aircraft type and the Chief Pilot authorizes the member |

Time to operational varies by member and by how often the Program trains. There is no fixed schedule; readiness is the standard.

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
| Aircraft systems (each type flown) | 85% | Written + practical |
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

## 10. Program Participation and Currency

### 10.1 The Four Program Requirements

The Program sets four participation requirements. Everything else in this manual is a list of things a member is trained on and demonstrates competence in, not a schedule to be tracked by the clock.

| # | Requirement | Applies to |
|---|-------------|------------|
| 1 | **Onboarding training** completed before participating in Program operations | New members |
| 2 | **Recurrent ground training**, 2 hours per year | All Program members |
| 3 | **20 hours per year of drone team activity**, counting training, activations, flight time, exercises, maintenance sessions, and meetings | All Program members |
| 4 | **3 drone tasks per year**, meaning participation in a tasking or a realistic exercise in any crew role | All Program members |

Members who do not meet these participate on a case-by-case basis at the Chief Pilot's discretion, which may include additional supervised activity before returning to operational tasking.

### 10.2 Regulatory Recency (separate and mandatory)

The Program requirements above do not replace the recency requirements of the Canadian Aviation Regulations, which are set by Transport Canada and are not discretionary:

| Requirement | Standard |
|-------------|----------|
| Pilot certificate recency | Within the 24 months preceding a flight, the pilot has been issued a certificate, or completed an examination, flight review, or recurrent training activity per Standard 921 (CAR 901.56, 901.65, 901.91) |
| Proof carried | Certificate and recency documentation easily accessible during operations (CAR 901.57, 901.66, 901.92) |
| Records | Recency activity recorded and kept for at least 24 months |

### 10.3 Staying Comfortable and Competent

Beyond the four requirements, currency is a judgment, not a count. Pilots fly each aircraft type often enough to remain comfortable and competent on it. A pilot who feels rusty on a type, or whom the Chief Pilot judges to be rusty, flies with a trainer before taking an operational tasking on that type. This applies equally to specialised operations such as BVLOS, high altitude, or payload delivery: the standard is demonstrated comfort with the operation, not a date on a calendar.

### 10.4 Recurrent Ground Training Content

The 2 hours of annual recurrent ground training covers, as relevant in the year:

- Regulatory changes and their effect on Program operations
- Incidents, lessons learned, and any corrective actions taken
- Procedural changes to this manual suite
- Emergency procedure refresh
- Human factors refresh
- SORA and risk assessment refresh

### 10.5 Proficiency Concerns

> If a trainer identifies significant performance issues during any training or operation (for example poor risk assessment or erratic control inputs), the pilot may be stood down from operational tasking pending additional training or a fitness evaluation. This is a competence judgment and does not depend on hours flown or time elapsed.

---

## 11. Operational Training Program

### 11.1 Purpose and Status

Once pilots complete Foundation and Advanced Training and are operationally certified, they enter the Operational Training Program. This ongoing training maintains proficiency, develops specialised SAR skills, and keeps the fundamentals sharp through repetition.

> **This program is a suggested structure for search and rescue drone teams across the Sea to Sky corridor.** Each participating Organization adapts it to its own terrain, aircraft, and membership. Sessions do not need a drill attached to be worthwhile, and drills may be added, swapped, or dropped to suit the team.
>
> Each Organization follows its own approvals and the applicable regulations. Some activities, such as BVLOS or night operations, may require specific regulatory authorization before being run in training. Training does not create authority that the pilot or the Organization does not otherwise hold (Operations Manual 1.3.1).

### 11.2 Core Skills Check (every session)

A short run through these fundamentals at the start or finish of each session. Directions for each are in Section 11.6.

**Stick skills and airmanship**

- Manual orbit with the camera locked on
- Figure eights at one height
- Fixed heading flight
- Nose-in approach and landing
- No-stopping course
- Slow and fast, both clean
- The blended climb (the river drill)

**Landing**

- Alternate landing site practice
- Landing under canopy
- No-camera landing by eye, at changing distances from the pilot

**Systems**

- Failsafe and controller off

### 11.3 Periodic Benchmark: NIST Open Lane

The NIST Open Lane proficiency test is run on a regular schedule, for example at the start and end of each season or once a quarter. It is a standard, scored flight test built for public safety drone teams, so it produces real numbers to track each pilot's progress over time. Setup and directions are in 11.6.

### 11.4 Session Themes

Each theme pairs a mission focus with one hands-on drill. Environment notes are suggestions; use whatever terrain the Organization has access to.

| # | Theme | Focus | Suggested drill | Environment |
|---|-------|-------|-----------------|-------------|
| 1 | High alpine flying | High-altitude reconnaissance, weather assessment, BVLOS, operations at higher altitudes AGL | Moving waypoint photo hunt | High alpine terrain, such as a local peak or alpine lake area |
| 2 | Mutual aid with a neighbouring team | Flying alongside another team, coordinating several aircraft airborne at once, mapping multiple search areas in CalTopo, grid searching | Box hunt | A shared search area, ideally hosted with a neighbouring program |
| 3 | Night operations | Flying at night, navigating by infrastructure lighting, reading thermal and infrared imagery; spatial awareness and thermal interpretation | Core skills check only | A site with some infrastructure lighting |
| 4 | Joint operation with ground SAR | Working with a ground search team, live tasking, radio communications, decision making; systematic grid patterns using light and sound signals; searching light forest canopy | Core skills check only | Compound or training ground, alongside ground SAR members |
| 5 | Recurrency and emergency procedures | Yearly review of mandatory items, emergency procedures and response, pre-flight inspection, normal operations; short verbal knowledge check plus a practical flight | Wall stop, using an old aircraft with sensors on | Compound or base |
| 6 | Season review and planning | Review the season's tasks and lessons, plan next year's training, welcome new members, review equipment needs | RC truck chase, or a lighter team drill such as timed gate slalom, drone limbo, or relay race | Compound, or an informal spot suited to a social session |

Themes 3 and 4 focus on the mission and the core skills check without a separate drill. Some teams also run a weekend daytime flight day around the season review.

### 11.5 Environment and Aircraft Capability

Aircraft are selected by capability, not by model. Any registered aircraft meeting the capability noted below may be used; the reference types are shown as current examples.

| Environment | Training Focus | Required Aircraft Capability | Reference Types |
|-------------|----------------|------------------------------|-----------------|
| Open Terrain | Basic patterns, altitude management | Standard capability | M30T, M4TD |
| Light Canopy | Below-canopy searching, obstacle avoidance | Obstacle sensing | M30T, M4TD |
| Dense Canopy | Hidden subject detection, thermal signatures | Thermal payload and obstacle sensing | M30T, M4TD |
| Urban Areas | Motion-based searching, lost person profiles | Zoom payload | M30T, M4TD |
| Riverbank/Shoreline | Water proximity ops, current awareness | Weather sealing (IP rating) suited to spray and precipitation | M30T, M4TD |
| Canyon | Confined space operations, signal management | Obstacle sensing; adequate C2 link margin | M30T, M4TD |
| Alpine | High altitude reconnaissance, weather assessment | Wind and cold tolerance for the expected conditions | M30T, M4TD |
| Steep Terrain/Cliffs | Proximity flying, face reconnaissance | Obstacle sensing; precise position hold | M30T, M4TD |

### 11.6 Drill Directions

These drills build flying skill: smooth hands, smooth changes in the air, and real confidence in what the pilot and the aircraft can do. They assume pilots already know the Program's rules and procedures.

**The main idea is blending.** A skilled pilot moves more than one control at once, smoothly, so the aircraft flies curves and diagonals instead of a staircase of separate moves. Most pilots do one thing at a time: up, stop, across, stop, camera, stop. This happens for two reasons: they think in single steps, and GPS hold lets them get away with it, because the aircraft just parks in the air while they fiddle. That habit of hovering to think is the exact habit these drills break. Most of them work by taking the crutch away and keeping the pilot moving.

#### 11.6.1 Coordination: moving more than one control at once

**Manual orbit, camera locked on.** Builds smooth, coordinated turning while keeping the camera on one spot. It is also a real search move, looking at a point of interest from every side.

*How to run it:* Place an object on the ground, such as a cone, a pack, or a person. The pilot flies a full circle around it, keeping the nose and camera pointed at it the whole way. Start wide and slow. When that looks clean, make it tighter and faster. Fly it by hand, not with auto-orbit, so the skill stays sharp.

**Figure eights at one height.** Builds coordinated turns in both directions, plus holding a steady height while turning.

*How to run it:* Pick two points and fly a smooth figure eight around them, keeping the same height throughout so the pilot works the height control while turning. There is no way to break this into stop-start moves, which is the point.

#### 11.6.2 Orientation: flying when the nose is not pointed away from you

**Fixed heading flight.** Builds comfort flying sideways and backward, so the pilot is not confused when the aircraft faces a different way.

*How to run it:* Fly a square or a straight line while keeping the nose pointed in one fixed direction the whole time. The aircraft moves sideways and backward relative to the way it faces. It feels awkward at first, and that awkward feeling is the skill gap being closed.

**Nose-in approach and landing.** Builds control when the aircraft is pointed back at the pilot and the left and right inputs feel reversed.

*How to run it:* Fly the aircraft toward yourself and land it while it faces you. The controls will feel backward. Practise until it feels normal. Once a pilot can do this, flying in open space feels easy.

#### 11.6.3 Smoothness: the on-rails feel

**No-stopping course.** Builds the habit of always keeping the aircraft moving instead of parking it in the air.

*How to run it:* Set a course the pilot must fly without ever stopping or hovering. If they need a moment to think, they slow into a gentle circle and keep moving. This breaks the stop-start habit directly.

**Slow and fast, both clean.** Builds smooth control at every speed, not just one comfortable pace.

*How to run it:* Fly the same course twice, once fast but smooth, once as slow and controlled as possible. A simple test for smoothness: fly as if a full cup of coffee is sitting on top of the aircraft and you do not want to spill it.

**The blended climb (the river drill).** Targets a skill many pilots struggle with: climbing, crossing, and adjusting the camera all at the same time, in one smooth motion.

*How to run it:* Pick a low start point on one river bank (Point A) and a high finish across the river on the mountainside (Point B). The pilot flies one smooth diagonal line that climbs and crosses at the same time, and makes a camera adjustment somewhere in the middle without stopping. Going up first and then across, or stopping to move the camera, is a fail. Run it until the smooth version feels normal.

#### 11.6.4 Proficiency test: NIST Open Lane

**NIST bucket test.** A standard, scored flight test made for search and rescue and other public safety drone teams. Use it as the team's report card, run the same way every time so progress can be tracked across the year.

*What you need:* A set of open-top buckets on stands, a 50 foot tape measure, and a stopwatch. It is cheap to build, works indoors or outdoors, and can be made harder as the team improves.

*How to run it:* The pilot flies a set of ten short tests. Five are basic moves, such as landing, climbing straight up, and flying level. Five are function tests, such as circles and spirals. Each bucket has a letter inside it, and the pilot reads that letter through the camera while holding the aircraft steady over the bucket. Photograph each one so it can be scored fairly afterward. The score is based on how well the aircraft lines up with the target in each bucket. Reading the letter forces the pilot to fly, aim the camera, and hold position all at once, and the fixed scoring gives real numbers to compare. To build the lane, look up "NIST sUAS Standard Test Methods" or "NIST Open Lane."

#### 11.6.5 Scenario and systems drills

**Box hunt.** Builds creative flying and problem solving, instead of always defaulting to a straight grid.

*How to run it:* Seal an object inside a box that has some openings. The pilot works out what is inside using only the aircraft and its camera. To see in, they have to fly into odd angles and positions they would not normally use.

**Failsafe and controller off.** Builds real trust in what the aircraft does on its own when something goes wrong.

*How to run it:* Set the failsafe to either return-to-home or hover. Fly out a safe distance. Turn the controller off, watch what the aircraft does, then turn the controller back on and reconnect. The pilot learns firsthand how the safety features behave.

**Wall stop, old aircraft with sensors on.** Builds a real feel for where the obstacle sensors kick in and where their limits are.

*How to run it:* Using an older aircraft with obstacle sensors turned on, fly straight at a wall at full speed and let the sensors stop it. The pilot needs to feel this to trust it and learn its limits. Use an aircraft you are willing to risk.

**RC truck chase.** Builds smooth flying while tracking a moving target and dodging obstacles at the same time.

*How to run it:* Drive an RC truck along forest trails. Pilots follow it with small aircraft, keeping it in view while flying around trees and staying on the path. To make it harder, add a second job while they fly, such as calling out what they see or switching between the normal and thermal camera. The flying is not allowed to pause while they do the second job.

**Drone chases drone (tag).** Builds fast, smooth reactions to a target that moves in every direction, which is harder than a target on the ground.

*How to run it:* One pilot flies an unpredictable path. The others stay in formation behind it, or tag it from behind. Because the target moves up, down, and sideways, the chasing pilots make constant small corrections and can never settle into a set pattern.

**Moving waypoint photo hunt.** Builds fast decisions and smooth flying under time pressure, while managing the camera and the battery. One of the strongest drills.

*How to run it:* Using EagleEye linked to CalTopo, drop a waypoint that shows up on every pilot's aircraft. Each pilot flies to it and takes a clear, obvious photo. How they frame the shot is up to them, but they have to get reasonably close.

*The rules:*

- When a new waypoint drops, they must leave the current one right away and go to the new one
- The score is the number of clean photos they get
- Add pressure with a limit: a set time, or land at 30 percent battery, or the round ends when the last waypoint is done
- Run it as a competition between pilots

**Precision payload drop.** Builds the skill behind dropping a rescue line, radio, or supplies to someone the pilot cannot reach on foot.

*How to run it:* The pilot flies over a target and drops a beanbag or a dummy radio, trying to land it on the bullseye. Score by how close it lands. The drop happens while the aircraft is moving forward, not from a hover. It is harder than it sounds, because the drop is affected by height, wind, and the way the aircraft jumps up when the weight leaves it. Start with a target that stays still, then drop onto the moving RC truck, which is the same challenge as dropping supplies onto a moving boat.

> Training drops use inert practice items only. Operational payload delivery is governed by Operations Manual Section 13, including the prohibition on free-drop release without Chief Pilot approval (13.6) and the payload rules of CAR 901.43 and 901.50.

#### 11.6.6 Gamified and competitive drills

**Timed gate slalom.** Builds speed and precision together, plus a smooth line through tight spaces.

*How to run it:* Set up a course of hoops, gates, and cones. Pilots fly it against the clock, racing their own best time or head to head. To keep it clean, the run with the fewest gates missed beats the fastest sloppy run. Hang some gates up high so pilots also have to control their height.

**Drone limbo.** Builds fine control of height and throttle, in a fun knockout format.

*How to run it:* Set a bar for the aircraft to fly under. Everyone who clears it stays in. Lower the bar and go again until one pilot is left.

**Relay race with hand-off.** Builds smooth flying under pressure while teammates watch, plus team energy.

*How to run it:* Split into teams. Each pilot flies one leg of a course. Reaching your waypoint is the signal for the next pilot to launch and fly their leg. Good for a lighter or social training night.

#### 11.6.7 Landing drills

**Alternate landing site practice.** Builds thinking ahead about where to land in an emergency, and setting the aircraft up correctly to come home afterward.

*How to run it:* The pilot picks emergency landing spots ahead of time. Trigger a pretend problem and have them land at one. Before taking off again, they set the home point correctly, to the controller and not the old launch pad, so the aircraft returns to the right place. This is the step most pilots forget.

**Landing under canopy.** Builds smooth landing control when the aircraft is fighting the pilot.

*How to run it:* Land at the edge of the forest, under branches, where the aircraft's own braking and sensors react in odd ways and work against the pilot. The pilot has to stay smooth and manage those reactions.

**No-camera landing by eye.** Builds judging distance and height with your own eyes instead of the camera.

*How to run it:* Turn the camera off and land on a target using only line of sight. Start with the target close, then move it farther away to make it harder. The goal is one clean approach with very little jerking or last-second correcting. This keeps manual landing sharp for times the pilot should not rely on automatic return-to-home.

### 11.7 Training Documentation

Each training session is documented with:

- Date and location
- Theme and drills completed
- Participants and crew roles filled
- Aircraft flown
- Hours contributing to each member's annual Program activity (Section 10.1)
- Lessons learned or issues raised

Records are retained per CAR 901.223.

---

## 12. Program Awareness Training (All SAR Members)

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


#### 12.3.7 Payload Delivery Aircraft

The Program may operate delivery aircraft weighing 95 kg to 150 kg fully loaded, far larger than the search drones most members have seen. They are louder, their rotor wash is strong enough to move loose gear and disturb casualty care, and the cordon around them is much larger.

**How to help.**

- Stay outside the cordon at all times unless the crew tasks you to assist
- Secure loose gear, tarps, and tent flies before launch or landing near your position
- If a load is being lowered on a line, never stand under it and never reach for it until the crew calls it clear
- Only handle a delivered load when the crew or ground party tells you to
- If you hear a call for parachute deployment, move away from the area beneath the aircraft immediately and keep clear; the aircraft may land well away from where it started descending

**What not to do.**

- Do not approach a landed delivery aircraft until the props are stopped and the PIC clears you
- Do not attempt to steady, guide, or catch a suspended load
- Do not handle the battery packs
- If the aircraft is damaged in any way, keep clear and keep others clear; the batteries present a fire hazard and are not to be approached

### 12.4 Awareness Quick Card

A one-page version of 12.3.4 and 12.3.5 is issued to all members and posted with team resources.

---

## 13. Training Records

### 12.1 Required Records

Per CAR 901.223, maintain records of:
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
| Aircraft Qualifications | M30T [ ] M4TD [ ] Other (specify): ____________ |
| Scenario Qualifications | STSC-003 [ ] STSC-004 [ ] |

#### Training History

| Training Item | Date Completed | Instructor | Next Due |
|---------------|----------------|------------|----------|
| Foundation Training | | | |
| Foundation Flight Review | | | |
| M30T Type Training | | | |
| M4TD Type Training | | | |
| Other Type Training (specify) | | | |
| STSC-003 Training | | | |
| STSC-004 BVLOS Training | | | |
| Emergency Procedures | | | |
| SAR Operations Training | | | |
| Proficiency check (as required) | | | |

### 12.3 Records Retention

| Record Type | Retention Period |
|-------------|------------------|
| Individual Pilot Records | Employment + 2 years |
| Training Records | 5 years |
| Assessment Results | 5 years |
| Progression Decisions | 24 months minimum |
| Endorsement Records | Duration + 2 years |

---

## 14. Document Control

### 13.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Appointed per Organization | Per Organization |
| Chief Pilot | Appointed per Organization | Per Organization |

Signatures on file. Original signed document retained per QAP-001.

### 13.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial Training Program Manual | Dustin Wales |
| 2026-08-11 | 2.0 | Regulatory update; S2S rebrand; Program Awareness Training added | Dustin Wales |

**Document Author:** Dustin Wales

**Questions, updates, inquiries:** Dustin Wales, 604-849-2345
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

*This document is part of the Program RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    forms: {
        title: "Forms & Maintenance Manual",
        icon: "fa-clipboard-list",
        docCount: 10,
        content: `# S2S SAR Drone Program - Forms & Maintenance Manual

## Sea to Sky Corridor Search and Rescue - Regional Drone Program

---

| Document | MNT-MANUAL |
|----------|------------|
| Version | 2.0 |
| Effective | August 2026 |
| Review Date | August 2027 |
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

This Maintenance Control Manual (MCM) establishes the maintenance requirements, procedures, and standards for all RPAS operated under the Program's RPOC. This manual ensures compliance with CAR 901.221.

### 1.2 Aircraft Covered by This Manual

This manual applies to every aircraft entered in the Organization's aircraft register, not to a fixed list of models. Eligibility criteria for adding an aircraft are set out in Operations Manual Section 4.1. When a new type is registered, the Person Responsible for RPAS Maintenance establishes its maintenance schedule, inspection criteria, and component life limits from the manufacturer's documentation before the aircraft is tasked, and records them here alongside the reference types.

The following are the current reference types, documented in detail in this manual because they are the models most widely used by SAR organizations at present. They are examples, not the limit of what may be operated.

| Aircraft | MTOM | Max Flight | Op. Temp | IP Rating |
|----------|------|------------|----------|-----------|
| DJI M30T | 3.77 kg | 41 minutes | -20°C to 50°C | IP55 |
| DJI Matrice 4TD | 2.3 kg | 42 minutes | -20°C to 45°C | IP54 |

For any other registered aircraft, the equivalent specifications, pre-flight inspection, checklist, battery care, and firmware procedures are taken from that aircraft's flight manual and filed in the Organization's aircraft register in the same format used below.

### 1.3 Maintenance Organization

| Accountable Executive | Chief Pilot | RPAS Pilots | DJI Authorized Service |
|----------------------|-------------|-------------|------------------------|
| Appointed per Organization | Person Responsible for RPAS Maintenance (CAR 901.220) | Pre/Post Flight | Complex Repairs |

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
| Level 1 | All the Program pilots | Pre/post-flight, propellers, batteries |
| Level 2 | Chief Pilot authorized | Firmware, calibration, return to service |

### 1.7 Records Retention

| Record Type | Retention Period |
|-------------|------------------|
| Aircraft Technical Log | Life of aircraft + 2 years |
| Battery Records | Life of battery + 2 years |
| Maintenance Actions | 2 years minimum |
| Defect Reports | 5 years |

---


### 1.6 Medium RPA in the Maintenance Program

> **STATUS: PROVISIONAL.** Payload delivery is documented but not yet authorized for operational use. See Operations Manual Section 13.

Medium RPA are entered in the Organization's aircraft register and maintained under this Maintenance Control Manual on the same basis as any other registered aircraft (CAR 901.221). Before a medium RPA is tasked, the Person Responsible for RPAS Maintenance establishes and records:

| Item | Source |
|------|--------|
| Inspection schedule and intervals | Manufacturer's maintenance program provided under CAR 901.200(a) |
| Component life limits, including propellers, motors, and batteries | Manufacturer's documentation |
| Delivery system maintenance: cargo latches, winch mechanism, cable, hook | Manufacturer's documentation |
| Cable inspection criteria and retirement standard | Manufacturer's documentation; cable inspected before and after every winch operation |
| Parachute inspection and repack interval | Manufacturer's documentation. **Where the parachute is claimed as an M2 mitigation in Safety Manual 3.11.4, this maintenance is mandatory, because the risk assessment depends on the system being serviceable** |
| Battery handling, charging, storage, and retirement | Manufacturer's documentation, adapted from the small-fleet procedures of Section 5 |
| Mandatory actions | Manufacturer notifications under CAR 901.200(b) |

#### 1.6.1 Medium RPA Pre-Flight Inspection (additional items)

- [ ] Arms fully unfolded and locked; arm-lock warning clear in the control application
- [ ] Propellers unfolded, undamaged, and secure; no delamination at the blade roots
- [ ] Landing gear secure and undamaged; no cracking at attachment points
- [ ] Battery packs seated and latched; voltage and capacity difference between packs within the manufacturer's tolerance
- [ ] Cargo box latches functional, or winch mechanism free and cable spooled correctly
- [ ] Winch cable inspected full length for kinks, birdcaging, broken strands, and heat damage
- [ ] Hook and any counterweight secure and undamaged
- [ ] Parachute installed, within its repack interval, pin and bridle correct, deployment path unobstructed
- [ ] Obstacle sensing and positioning systems report serviceable
- [ ] Registration number clearly visible (CAR 900.14)

#### 1.6.2 Payload Delivery Load Card

Completed by the Loadmaster before every delivery.

| Field | Entry |
|-------|-------|
| Aircraft | |
| Payload description | |
| Payload weight (measured) | |
| Aircraft empty weight including batteries | |
| **Total operating weight** | |
| Manufacturer limit for altitude and temperature today | |
| Within 150 kg Part IX ceiling | [ ] Yes |
| Prohibited categories checked (CAR 901.43(1)) | [ ] Yes |
| Load secured, centre of gravity confirmed | [ ] Yes |
| Delivery method | [ ] Cargo land-and-release  [ ] Winch  [ ] Other (Chief Pilot approval attached) |
| Loadmaster signature | |
| PIC acknowledgement of stated weight | |

#### 1.6.3 Delivery Sequence Callouts

| Call | By | Response |
|------|----|----------|
| "Load secure, weight [X] kilograms" | Loadmaster | PIC: "Weight [X], within limits" |
| "Delivery site clear" | Ground party | PIC: "Copy, commencing approach" |
| "Below clear" | Ground party or VO | PIC: "Copy, descending" |
| "Load down" | Ground party | PIC: "Copy, releasing" |
| "Clear of load" | PIC | Ground party: "Copy, load received" |
| "DESCEND, DESCEND, DESCEND" | Any crew member | PIC executes emergency descent |
| "ABORT" | Any crew member | PIC discontinues the delivery |

#### 1.6.4 Delivery Log

Retained 12 months per CAR 901.223(1)(a); associated maintenance records 24 months per 901.223(1)(e).

| Field |
|-------|
| Date and task number |
| Aircraft registration and type |
| PIC, VO, Loadmaster, ground party lead |
| Operating authority relied upon (certificate, RPOC Division VI, SFOC number) |
| Payload description and weight |
| Delivery method |
| Delivery location (coordinates) |
| Flight time |
| Outcome and any anomalies |
| Cut-cable protection used (yes/no; if yes, aircraft grounded pending inspection) |
| Parachute deployed (yes/no; if yes, incident procedures per CAR 901.49) |

---

## 2. Aircraft Specifications

Specifications for the reference types follow. Specifications for any other registered aircraft are recorded in the Organization's aircraft register in this same format, drawn from the manufacturer's flight manual.

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

This section establishes pre-flight and post-flight inspection requirements for Program RPAS operations in compliance with MCM-001.

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
| Operating authority identified (certificate / RPOC Division VI / valid SFOC) | [ ] | |
| **If YES - ATC notification possible:** | | |
| Proceed to STSC-003 or STSC-004 checklist as appropriate | [ ] | |
| **If NO - Time-critical operation:** | | |
| Maximum altitude confirmed: 400' AGL | [ ] | |
| Terrain-following flight plan prepared | [ ] | |
| RTH altitude set above highest terrain | [ ] | |
| Crew briefed: "Time-critical operation. Operating under [certificate / RPOC / SFOC] limits. Max altitude 400 feet AGL unless a valid SFOC permits higher." | [ ] | |
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

To ensure the operational reliability and airworthiness of all Program RPAS equipment. This section mandates a systematic testing regimen to verify that all systems function within manufacturer specifications and regulatory requirements (CAR 901.29) prior to operational deployment.

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
| **Aircraft:** | [ ] M30T  [ ] M4TD  [ ] Other (specify): ____________ |
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

| Program RPAS DEFECT REPORT | |
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
| Level 1 | All the Program pilots | Pre/post-flight, propellers, batteries - PIC may RTS |
| Level 2 | Chief Pilot authorized | Firmware, calibration, minor repairs - Chief Pilot RTS |
| Level 3 | DJI Authorized Service | Major repairs, warranty work - Service Center RTS |

---

## 9. Document Control

### 9.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Appointed per Organization | Per Organization |
| Chief Pilot | Appointed per Organization | Per Organization |

Signatures on file. Original signed document retained per QAP-001.

### 9.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Forms & Maintenance Manual | Dustin Wales |
| 2026-08-11 | 2.0 | Regulatory update (CARs Jan 2026, SORA v2.5); S2S rebrand; multi-organization generalization | Dustin Wales |

**Document Author:** Dustin Wales

**Questions, updates, inquiries:** Dustin Wales, 604-849-2345
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
> "FIC Kamloops, this is [PILOT NAME] with the S2S SAR Drone Program RPAS Operations. We are experiencing a fly-away emergency."

**Step 2 - Provide Details:**
> - "Aircraft type: [make and model]"
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
| Time-Critical SAR (certificate / RPOC) | 400' AGL | No ATS coordination required in uncontrolled airspace |
| STSC-003 (valid SFOC) | Up to 1000' AGL | ATS coordination per SFOC conditions |
| STSC-004 BVLOS | 400' AGL | Low-risk corridor operations |
| Near airports (controlled) | 0' without authorization | Requires specific authorization |
| Near heliports | 0' without coordination | Direct coordination required |

---

### 10.3 Rapid Site Survey Checklist

**5-Point Field Assessment for Time-Critical Operations**

Complete within 2-3 minutes for urgent SAR deployment:

| # | Check | Details | ✓ |
|---|-------|---------|---|
| **1** | **AIRSPACE** | Check for controlled airspace, NOTAMs, nearby airports/heliports | [ ] |
| **2** | **HAZARDS** | Identify power lines, towers, tall structures, moving equipment | [ ] |
| **3** | **TERRAIN** | Assess slopes, obstacles, landing zone clearance (min 3m radius) | [ ] |
| **4** | **PEOPLE** | Identify bystanders, establish safety perimeter (30m minimum) | [ ] |
| **5** | **WEATHER** | Wind speed/direction, visibility, precipitation, temperature | [ ] |

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
| **Organization SAR Base** | [Insert Number] | SAR coordination |
| **Local RCMP Detachment** | [Insert Number] | Ground emergency |
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

*This document is part of the Program RPAS Operator Certificate (RPOC) documentation package.*
`
    },

    admin: {
        title: "Admin & Compliance",
        icon: "fa-calendar-check",
        docCount: "Tracker",
        content: `# RPOC Compliance Tracker

## Administrative Compliance Management

---

| Document | ADMIN-TRACKER |
|----------|---------------|
| Version | 2.0 |
| Effective | August 2026 |
| Review Date | August 2027 |
| Reference | CAR Part IX, Standard 922, RPOC Conditions |

---

## Table of Contents

1. [Compliance Calendar Overview](#1-compliance-calendar-overview)
2. [Monthly Obligations](#2-monthly-obligations)
3. [Quarterly Obligations](#3-quarterly-obligations)
4. [Semi-Annual Obligations](#4-semi-annual-obligations)
5. [Annual Obligations](#5-annual-obligations)
6. [Pilot Currency Requirements](#6-pilot-currency-requirements)
7. [Document Review Schedule](#7-document-review-schedule)
8. [Audit Schedule](#8-audit-schedule)
9. [Training Recurrency](#9-training-recurrency)
10. [Equipment Maintenance Schedule](#10-equipment-maintenance-schedule)
11. [Reporting Requirements](#11-reporting-requirements)
12. [Record Retention](#12-record-retention)

---

## 1. Compliance Calendar Overview

### 1.1 Purpose

This section provides a comprehensive tracking system for all RPOC compliance obligations required under CAR Part IX, Transport Canada Standard 922, and the Program internal policies.

> **IMPORTANT**: Missing compliance deadlines may result in loss of operating privileges, pilot currency lapses, or regulatory non-compliance.

### 1.2 Compliance Categories

| Category | Color Code | Frequency |
|----------|------------|-----------|
| Per-Flight | Blue | Every operation |
| Monthly | Green | Every 30 days |
| Quarterly | Yellow | Every 3 months |
| Semi-Annual | Orange | Every 6 months |
| Annual | Red | Every 12 months |

### 1.3 Key Compliance Dates (the Program Cycle)

| Month | Key Activities |
|-------|----------------|
| **January** | Q1 Safety Meeting, Q4 Audit Review |
| **February** | Training Currency Check |
| **March** | ANNUAL: Document Reviews, Proficiency Checks, Insurance Renewal |
| **April** | Q2 Safety Meeting |
| **May** | Spring Drone Summit |
| **June** | Semi-Annual Management Review |
| **July** | Q3 Safety Meeting, Mid-Year Audit |
| **August** | Training Currency Check |
| **September** | Fall Drone Summit |
| **October** | Q4 Safety Meeting |
| **November** | Cold Weather Training, Insurance Review |
| **December** | Annual Safety Review, Semi-Annual Management Review |

---

## 2. Monthly Obligations

### 2.1 Safety Performance Indicators (SPI) Review

| Indicator | Target | Responsible |
|-----------|--------|-------------|
| Airprox Incidents | 0 | Chief Pilot |
| Injuries | 0 | Chief Pilot |
| Fly-Away Events | 0 | Chief Pilot |
| Loss of Control Events | 0 | Chief Pilot |
| Airspace Infractions | 0 | Chief Pilot |
| Maintenance Overdue | 0 | Maintenance Manager |
| Training Currency Lapses | 0 | Chief Instructor |
| Safety Reports Submitted | Track monthly | Safety Officer |

> **Due:** Last working day of each month
> **Output:** SPI Status Report to AE

### 2.2 Flight Hour Minimums

| Requirement | Standard | Evidence |
|-------------|----------|----------|
| Flight hours per aircraft type | 1 hour minimum | AirData logs |
| Active trainer flight hours | 2 hours minimum | Training records |

### 2.3 Monthly Checklist

- [ ] SPI Review completed
- [ ] Flight hour minimums verified (all active pilots)
- [ ] Equipment status verified (CLEAR/LOCKOUT tags current)
- [ ] Battery health checks completed
- [ ] Firmware update monitoring documented

---

## 3. Quarterly Obligations

### 3.1 Q1 (January-March)

| Obligation | Due | Responsible | Status |
|------------|-----|-------------|--------|
| Safety Meeting | January | Chief Pilot | [ ] |
| Operations Compliance Audit | March | Chief Pilot | [ ] |
| Maintenance Records Audit | March | Designated Auditor | [ ] |
| Scenario Training (1 drill minimum) | Q1 End | Chief Instructor | [ ] |
| Trainer Activity Verification | Q1 End | Operations Manager | [ ] |

### 3.2 Q2 (April-June)

| Obligation | Due | Responsible | Status |
|------------|-----|-------------|--------|
| Safety Meeting | April | Chief Pilot | [ ] |
| Operations Compliance Audit | June | Chief Pilot | [ ] |
| Maintenance Records Audit | June | Designated Auditor | [ ] |
| Semi-Annual Management Review | June | AE + Chief Pilot | [ ] |
| Training Program Audit | June | Chief Instructor | [ ] |
| Safety Reporting Audit | June | Safety Officer | [ ] |
| Scenario Training (1 drill minimum) | Q2 End | Chief Instructor | [ ] |

### 3.3 Q3 (July-September)

| Obligation | Due | Responsible | Status |
|------------|-----|-------------|--------|
| Safety Meeting | July | Chief Pilot | [ ] |
| Operations Compliance Audit | September | Chief Pilot | [ ] |
| Maintenance Records Audit | September | Designated Auditor | [ ] |
| Scenario Training (1 drill minimum) | Q3 End | Chief Instructor | [ ] |
| Fall Drone Summit | September | All Pilots | [ ] |

### 3.4 Q4 (October-December)

| Obligation | Due | Responsible | Status |
|------------|-----|-------------|--------|
| Safety Meeting | October | Chief Pilot | [ ] |
| Operations Compliance Audit | December | Chief Pilot | [ ] |
| Maintenance Records Audit | December | Designated Auditor | [ ] |
| Semi-Annual Management Review | December | AE + Chief Pilot | [ ] |
| Training Program Audit | December | Chief Instructor | [ ] |
| Safety Reporting Audit | December | Safety Officer | [ ] |
| Scenario Training (1 drill minimum) | Q4 End | Chief Instructor | [ ] |
| Cold Weather Training | November | Chief Instructor | [ ] |
| Annual Safety Review | December | Full Team | [ ] |

---

## 4. Semi-Annual Obligations

### 4.1 Management Review (June & December)

| Review Element | Required Content |
|----------------|------------------|
| SPI Trends | 6-month trend analysis |
| Incident Summary | All incidents, root causes, corrective actions |
| Audit Findings | Status of all open findings |
| Training Status | All pilot currency, proficiency checks |
| Resource Review | Equipment, personnel, budget |
| Improvement Actions | Documented with deadlines |

> **Output:** Management Review Report signed by AE

### 4.2 Training & Safety Audits (June & December)

| Audit Type | Scope | Auditor |
|------------|-------|---------|
| Training Program | Records, currency, competency verification | Chief Instructor |
| Safety Reporting | Reports processing, trend analysis | Safety Officer |

### 4.3 STSC Currency Requirements (Every 6 Months)

| Scenario | Currency Requirement | Deadline |
|----------|----------------------|----------|
| STSC-003 (High Altitude) | 1 operation above 400' AGL | 6 months from last op |
| STSC-004 (BVLOS) | 1 BVLOS operation (min 2 NM) | 6 months from last op |

> **WARNING:** Loss of STSC currency requires re-endorsement by Chief Pilot

---

## 5. Annual Obligations

### 5.1 March Annual Cycle (Primary)

| Obligation | Deadline | Responsible |
|------------|----------|-------------|
| **Operations Manual Review** | March 31 | Chief Pilot |
| **Safety Manual Review** | March 31 | Chief Pilot |
| **People & Equipment Manual Review** | March 31 | Chief Pilot |
| **Training Manual Review** | March 31 | Chief Instructor |
| **Forms & Maintenance Manual Review** | March 31 | Maintenance Manager |
| **RPOC Renewal/Review** | Per TC validity | AE |
| **Insurance Renewal** | 30 days before expiry | AE |
| **Full SMS Audit** | March | External/Safety Manager |
| **SORA Compliance Review** | March | External if possible |

### 5.2 Pilot Annual Requirements

| Requirement | Content | Duration |
|-------------|---------|----------|
| Annual Proficiency Check | Knowledge test, practical flight, emergency scenarios | ~2 hours |
| Recurrent Ground Training | Updates, incidents, refresher | 4 hours |
| SORA Refresher | SORA updates and review | 2 hours |
| Human Factors Refresher | HF training review | 1 hour |
| Emergency Procedures Practical | Hands-on emergency training | 2 hours |

### 5.3 Equipment Annual Requirements

| Requirement | Aircraft | Responsible |
|-------------|----------|-------------|
| Annual Maintenance Review | All aircraft | Maintenance Manager |
| Firmware Audit | All aircraft, controllers, batteries | Chief Pilot |
| Battery Retirement Assessment | All batteries | Maintenance Manager |
| Full Functional Flight Test | All aircraft | Maintenance Manager |

### 5.4 Annual Checklist

- [ ] All manual reviews completed and signed
- [ ] All pilot proficiency checks completed
- [ ] Annual ground training delivered (4 hours)
- [ ] SORA refresher completed (2 hours)
- [ ] Human factors refresher completed (1 hour)
- [ ] Emergency procedures practical completed (2 hours)
- [ ] Full SMS audit completed
- [ ] SORA compliance review completed
- [ ] Insurance renewed
- [ ] All equipment annual maintenance completed
- [ ] Hazard registry annual review completed
- [ ] Annual safety report published

---

## 6. Pilot Currency Requirements

### 6.1 General Currency (All Pilots)

| Requirement | Period | Standard | Consequence of Lapse |
|-------------|--------|----------|----------------------|
| Flight Currency | 90 days | 3 flights | Supervised flights required |
| Aircraft Type Currency | 90 days | 1 flight per type | Cannot fly that type |
| Monthly Hours | 30 days | 1 hour per type | Currency at risk |

### 6.2 STSC Endorsement Currency

| Endorsement | Period | Standard | Consequence of Lapse |
|-------------|--------|----------|----------------------|
| STSC-003 | 6 months | 1 high-altitude op | Re-endorsement required |
| STSC-004 | 6 months | 1 BVLOS op (2+ NM) | Re-endorsement required |

### 6.3 Loss of Currency Reinstatement

| Lapse Duration | Reinstatement Requirement |
|----------------|---------------------------|
| 90 days - 6 months | 2 supervised flights with certified trainer |
| Over 6 months | Complete full Advanced Training program |

### 6.4 Trainer Currency

| Requirement | Period | Standard |
|-------------|--------|----------|
| Flight Hours | Monthly | 2 hours minimum |
| Training Activity | Quarterly | Conduct training at least once |
| All Pilot Recurrency | Annual | Maintain all requirements |
| Trainer Evaluation | 24 months | Operations Manager evaluation |

---

## 7. Document Review Schedule

### 7.1 Annual Document Reviews (March Cycle)

| Document | Owner | Reviewer | Approver |
|----------|-------|----------|----------|
| Operations Manual | Chief Pilot | AE | AE + Chief Pilot |
| Safety & Emergency Manual | Chief Pilot | AE | AE + Chief Pilot |
| People & Equipment Manual | Chief Pilot | AE | AE + Chief Pilot |
| Training Manual | Chief Instructor | Chief Pilot | AE |
| Forms & Maintenance Manual | Maintenance Manager | Chief Pilot | AE |

### 7.2 Biennial Reviews (Every 2 Years)

| Document | Next Review |
|----------|-------------|
| Checklists | March 2028 |
| Forms | March 2028 |
| Site Survey Templates | March 2028 |

### 7.3 As-Required Reviews

| Trigger | Documents Affected |
|---------|-------------------|
| Regulatory Change | All affected manuals |
| Incident/Accident | Relevant procedures |
| New Equipment | Operations Manual, MCM |
| New Scenarios | Operations Manual, Training Manual |

---

## 8. Audit Schedule

### 8.1 Internal Audit Program

| Audit Type | Frequency | Q1 | Q2 | Q3 | Q4 |
|------------|-----------|----|----|----|----|
| Operations Compliance | Quarterly | Mar | Jun | Sep | Dec |
| Maintenance Records | Quarterly | Mar | Jun | Sep | Dec |
| Training Program | Semi-Annual | - | Jun | - | Dec |
| Safety Reporting | Semi-Annual | - | Jun | - | Dec |
| Full SMS Audit | Annual | Mar | - | - | - |
| SORA Compliance | Annual | Mar | - | - | - |

### 8.2 Audit Finding Resolution Timelines

| Category | Description | Resolution Timeline |
|----------|-------------|---------------------|
| Critical | Immediate safety risk | Immediate containment, 7 days resolution |
| Major | Significant non-compliance | 30 days |
| Minor | Minor deviation | 90 days |
| Observation | Improvement opportunity | Next review cycle |

### 8.3 Audit Records

| Record | Retention |
|--------|-----------|
| Audit Reports | 5 years |
| Finding Closure Evidence | 5 years |
| Corrective Action Plans | 5 years |

---

## 9. Training Recurrency

### 9.1 Annual Training Calendar

| Month | Training Activity | Audience | Hours |
|-------|------------------|----------|-------|
| January | Q4 Scenario Debrief | All pilots | 2 |
| February | Currency Flight Sessions | As needed | Varies |
| March | Annual Proficiency Checks | All pilots | 2 each |
| March | Recurrent Ground Training | All pilots | 4 |
| April | SORA Refresher | All pilots | 2 |
| May | Spring Drone Summit | All pilots | 8 |
| June | Emergency Procedures Practical | All pilots | 2 |
| July | Mid-Year Currency Check | All pilots | 1 |
| August | Human Factors Refresher | All pilots | 1 |
| September | Fall Drone Summit | All pilots | 8 |
| October | Scenario Training | All pilots | 2-3 |
| November | Cold Weather Training | All pilots | 2 |
| December | Year-End Review | All pilots | 2 |

### 9.2 Training Hour Requirements Summary

| Training Type | Annual Hours | Notes |
|---------------|--------------|-------|
| Recurrent Ground | 4 | Mandatory |
| SORA Refresher | 2 | Mandatory |
| Human Factors | 1 | Mandatory |
| Emergency Practical | 2 | Mandatory |
| Drone Summits | 16 | 2 x 8-hour events |
| Scenario Training | 8-12 | Quarterly |
| Currency Flights | As needed | Per pilot status |
| **TOTAL MINIMUM** | **33+ hours** | Per pilot annually |

---

## 10. Equipment Maintenance Schedule

### 10.1 Time-Based Maintenance

| Interval | Inspection Type | Aircraft |
|----------|-----------------|----------|
| Weekly | Detailed inspection | All active |
| Monthly | Full system diagnostic | All |
| 50 Hours | Detailed inspection, propeller evaluation | Per aircraft |
| 100 Hours | Component review, sensor calibration | Per aircraft |
| 200 Hours | Comprehensive inspection, motor assessment | Per aircraft |
| Annual | Full system review, firmware audit | All |

### 10.2 Event-Based Maintenance

| Event | Required Action |
|-------|-----------------|
| Hard Landing | Full inspection before next flight |
| Firmware Update | Functional Flight Test required |
| Component Replacement | Return to Service authorization |
| Any Anomaly | Defect report + assessment |

### 10.3 Battery Maintenance

| Check | Frequency | Action |
|-------|-----------|--------|
| Cycle Count | Per charge | Track in spreadsheet |
| Capacity Check | Monthly | Record percentage |
| Physical Inspection | Weekly | Check for swelling, damage |
| Retirement Assessment | When >400 cycles or <70% capacity | Document and dispose properly |

---

## 11. Reporting Requirements

### 11.1 Immediate Reporting (Within Hours)

| Event | Report To | Contact |
|-------|-----------|---------|
| Injury requiring medical attention | TSB | 1-800-387-3557 |
| Collision/near-collision with manned aircraft | TSB + TC | 1-800-387-3557 |
| Fly-away into controlled airspace | FIC Kamloops | 1-866-541-4101 |
| Property damage >$25,000 | TSB | 1-800-387-3557 |

### 11.2 24-Hour Reporting

| Event | Report To | Method |
|-------|-----------|--------|
| Internal incident (any) | Operations Manager | Incident Report Form |
| Equipment malfunction | Chief Pilot | Defect Report |
| Insurance claim | Insurer | Per policy |

### 11.3 7-Day Reporting

| Event | Report To | Output |
|-------|-----------|--------|
| Root cause analysis | AE | Investigation Report |
| Corrective actions | Safety Manager | Action Plan |

### 11.4 Regulatory Reporting Reference

| Regulation | Requirement |
|------------|-------------|
| CAR 901.49 | Incident/accident analysis retention (12 months min) |
| CAR 901.48 | Flight log retention (2 years) |
| CAR 901.222 | Training record retention (employment + 2 years) |

---

## 12. Record Retention

### 12.1 Retention Periods

| Record Type | Retention Period | Storage |
|-------------|------------------|---------|
| RPOC Certificate | Permanent | Secure digital + backup |
| Flight Logs | 2 years minimum | AirData + backup |
| Maintenance Records | Aircraft life + 2 years | Digital + paper |
| Training Records | Employment + 2 years | Secure file |
| Proficiency Check Records | 5 years | Secure file |
| Incident/Accident Reports | 12 months minimum | Digital |
| Defect Reports | 5 years | Digital |
| Safety/Audit Reports | 5 years | Digital |
| Battery Records | Battery life + 2 years | Spreadsheet |
| Site Survey Records | 24 months | Digital |
| Endorsement Records | Duration + 2 years | With pilot record |
| Hazard Registry | 5 years minimum | Digital |
| Insurance Documentation | Policy term + 3 years | Digital + paper |

### 12.2 Record Storage Locations

| Record Type | Primary Location | Backup Location |
|-------------|------------------|-----------------|
| Flight Logs | AirData Cloud | Local backup |
| Training Records | the Program Secure Drive | Encrypted backup |
| Maintenance Logs | the Program Secure Drive | Paper copies |
| Incident Reports | the Program Secure Drive | Encrypted backup |
| Certificates | the Program Secure Drive | Physical copies |

---

## Quick Reference: Compliance Due Dates

### Per-Flight Requirements
- Pre-flight inspection
- Post-launch systems check (MANDATORY)
- Post-flight inspection
- IMSAFE self-assessment
- Flight briefing/debrief

### Every 30 Days
- [ ] SPI Review (last day of month)
- [ ] Flight hour minimums verified
- [ ] Battery health checks

### Every 90 Days
- [ ] Flight currency (3 flights)
- [ ] Aircraft type currency (1 flight per type)
- [ ] Audits (Operations, Maintenance)

### Every 6 Months
- [ ] STSC-003 currency (1 high-alt op)
- [ ] STSC-004 currency (1 BVLOS op)
- [ ] Management Review (June, December)
- [ ] Training & Safety Audits

### Every 12 Months
- [ ] Document reviews (all manuals)
- [ ] Proficiency checks (all pilots)
- [ ] Ground training (4 hours)
- [ ] Full SMS audit
- [ ] SORA compliance review
- [ ] Insurance renewal
- [ ] Annual maintenance (all equipment)

---

> **Note:** This compliance tracker should be reviewed and updated at each Management Review. The Chief Pilot is responsible for maintaining overall compliance status.

---

**END OF ADMIN & COMPLIANCE TRACKER**

*This document is part of the Program RPAS Operator Certificate (RPOC) documentation package.*`
    },
    sitesurvey: {
        title: "Site Survey",
        icon: "fa-map-marked-alt",
        docCount: 1,
        content: `# S2S SAR Drone Program - Master Site Survey (Sea to Sky Region)

| Document | SITE-SURVEY-MASTER |
|----------|--------------------|
| Version | 1.0 |
| Effective | August 2026 |
| Review | August 2027, or on change to airspace, boundaries, or participating organizations |
| Regulatory Reference | CAR 901.27 (site survey); CAR 900.01 (operational volume); AC 903-001 Appendix G |
| Author | Dustin Wales |
| Questions, updates, inquiries | Dustin Wales, 604-849-2345 |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Operational Flight Information](#2-operational-flight-information)
3. [Site Details](#3-site-details)
4. [Hazard Assessment](#4-hazard-assessment)
5. [Population and Ground Environment](#5-population-and-ground-environment)
6. [Predominant Weather](#6-predominant-weather)
7. [Airspace Awareness and Management](#7-airspace-awareness-and-management)
8. [Emergency Preparedness](#8-emergency-preparedness)
9. [Verification Register](#9-verification-register)

---

## 1. Introduction

This Site Survey has been developed for the exclusive use of the participating search and rescue organizations of the S2S SAR Drone Program to conduct SAR activities using remotely piloted aircraft systems (RPAS) within the Sea to Sky region. It complements the Program's Operations Manual, Safety and Emergency Manual, and Training Manual to ensure informed and safe operations.

Given the dynamic nature of SAR operations, no single launch location can be predetermined. This survey therefore pre-identifies relevant air and ground risk for the entire operational theatre so that crews responding to a dynamic tasking arrive with the regional assessment already complete. It satisfies the site survey factors of CAR 901.27 and supports the determination that the operational volume (flight geography, contingency volume, and ground risk buffer per CAR 900.01) is suitable for the intended operation.

**This document does not replace the Rapid Site Survey.** The Rapid Site Survey (Operations Manual Section 6.4) remains mandatory at every launch and addresses the conditions of the specific site on the day.

The region is described in three sub-regions reflecting the response areas of the participating organizations. Terrain, airspace, and hazard characteristics differ materially between them:

| Sub-Region | Approximate Extent |
|------------|--------------------|
| Southern corridor | Porteau Cove and Deeks Lake north to Daisy Lake, including Howe Sound and its islands, the Squamish and Elaho watersheds to Clendinning Provincial Park, the Tantalus Range, Sky Pilot, and Cheakamus Canyon |
| Central corridor | Daisy Lake north through the Whistler valley to the Green River, including Garibaldi Provincial Park, the Spearhead and Musical Bumps, Cheakamus Lake, Wedgemount, and the Callaghan valley |
| Northern corridor | Pemberton and Mount Currie north and east through the Lillooet, Birkenhead, and Hurley drainages, the Duffey Lake corridor, and the ranges extending toward the Chilcotin and Lillooet |

---

## 2. Operational Flight Information

| Field | Entry |
|-------|-------|
| Plan Name | S2S SAR Drone Program RPAS Operations |
| Operator | The participating Organization conducting the tasking |
| Pilots | Certified pilots meeting Operations Manual Section 2.5 requirements; rosters maintained per Organization (CAR 901.223) |
| RPAS Models | Program fleet per Forms and Maintenance Manual Section 2, plus Organization-held types recorded in the Organization's certificate register |
| Date of Operation | Year-round |
| Time of Operation | Any time, day and night, subject to certificate privileges and aircraft capability |
| Purpose | Life-saving search and rescue in support of a public authority |
| Signing Authority | The Accountable Executive of the Organization conducting the operation |

### 2.1 Description of Flight Profiles

**Reconnaissance:** VLOS and BVLOS reconnaissance flights launch from a safe site near the presumed location of the subject. The RPA is navigated in a search pattern tailored to the geography of the subject's environment, such as following a drainage where a subject is lost in riverine terrain, or contouring a slope in mountainous terrain. On locating the subject the RPA marks the location and maintains visual contact until further instructions are received and approval is given to return to the launch site.

**Payload delivery:** Carriage and release of supplies or equipment to a subject or team, conducted with a medium RPA under Operations Manual Section 13, or with a small RPA equipped with a manufacturer-declared release mechanism under Sections 5 and 7. The flight launches from a prepared site and proceeds to the delivery location, where the load is set down by landing or lowered by winch. Free-drop release is not authorized without specific Chief Pilot approval. Medium RPA operations are limited to an operating weight of 150 kg including payload, require a current Standard 922 declaration for the model and operation, and maintain the separations and visibility limits of Operations Manual 13.5.

**Authority:** Flight profiles are conducted within the parameters the pilot's certificate allows, or under a valid SFOC held by the Organization where one applies (Operations Manual Section 5).

---

## 3. Site Details

### 3.1 Operational Boundaries

The Program region comprises the combined SAR jurisdictions of the participating organizations, **with the exception of areas within municipalities**, which are excluded from operations. Each Organization's boundary map is maintained by that Organization and attached at Appendix A.

| Sub-Region | Boundary Notes |
|------------|----------------|
| Southern corridor | Extends from Porteau Cove and Deeks Lake in the south to the Daisy Lake area in the north; includes Howe Sound to Anvil Island, the Squamish River watershed from Clendinning Provincial Park through Clendinning Creek and the Elaho Valley, the Tantalus Range, Sky Pilot Mountain, and Cheakamus Canyon |
| Central corridor | Whistler valley and surrounding alpine, including Garibaldi Provincial Park, Cheakamus Lake, Singing Pass, Flute and the Musical Bumps, the Spearhead Range, Wedgemount and Mount Weart, and the Callaghan valley |
| Northern corridor | One of the largest SAR jurisdictions in the province at approximately 25,000 km², extending from the Coast Mountains toward the Chilcotin and eastward toward Lillooet, including Pemberton Meadows, Mount Currie, the Birkenhead and Hurley drainages, Nairn Falls, Joffre Lakes, the Duffey Lake corridor, and Semaphore Lakes |

### 3.2 Neighbouring Properties and Permissions

For search and rescue activities, each Organization has the authority to operate within the boundaries of its own SAR area. Operations on or over the territories of the Squamish Nation (Sḵwx̱wú7mesh Úxwumixw) and Líl̓wat Nation follow the tasking authority's direction and any protocols established by the Organization.

### 3.3 Site Access

Crews arrive primarily by ground vehicle, and at times by air or water transport. The site is contingent on the emergency call-out and cannot be pre-identified. Once the general location is known and the mode of transport is identified, the RPAS team selects a nearby safe site to base operations, assessed at that time using the Rapid Site Survey.

### 3.4 Topography and Geography

The region is situated in the Sea to Sky corridor of British Columbia, positioned between the Coast Mountains to the east and Howe Sound to the west, and extending north through the Whistler and Pemberton valleys toward the Interior transition.

- **Mountainous terrain:** Coast Mountains with steep rocky slopes and elevations exceeding 2,000 metres; extensive glaciated and alpine terrain in the central and northern corridors, including icefields, crevasse fields, and hanging glaciers
- **Valleys and river systems:** Deep valleys following the Squamish, Elaho, Cheakamus, Green, Birkenhead, and Lillooet river systems; steep-walled canyons including Cheakamus Canyon and Marble Canyon
- **Forested areas:** Dense temperate rainforest in the south and central corridors with coniferous and deciduous cover, transitioning to drier interior forest types in the northern and eastern portions of the northern corridor
- **Water bodies:** Howe Sound, Daisy Lake, Green Lake, Alta Lake, Cheakamus Lake, Lillooet Lake, Birkenhead Lake, Duffey and Joffre lakes, and numerous rivers and creeks
- **Agricultural land:** Pemberton Meadows and the Lillooet valley bottom contain active agricultural operations, including seasonal aerial application activity

---


### 3.5 Launch and Delivery Site Requirements (Medium RPA)

Medium RPA used for payload delivery (Operations Manual Section 13) impose site requirements the small fleet does not. The Rapid Site Survey confirms these on scene.

| Requirement | Standard |
|-------------|----------|
| Launch area | Clear area accommodating the aircraft with arms and propellers unfolded, plus the manufacturer's propeller safe distance (3.5 m for the FlyCart 30), plus room for the loading party to work clear of the rotor arc |
| Surface | Firm and level, capable of supporting the loaded aircraft; loose snow, deep duff, and unconsolidated scree are unsuitable; loose debris cleared to prevent rotor wash projectiles |
| Rotor wash | Significantly greater than the small fleet. Assess for loose gear, tarps, tents, and casualty care in progress within the wash radius |
| Approach and departure | Clear paths in at least two directions where terrain allows, accounting for the reduced climb performance of a loaded aircraft |
| Cordon | Sized to the separation required by Operations Manual 13.5 |
| Delivery site | Clear of overhead obstruction for the descent; ground party positioned outside the descent footprint; for winch operations, clear of canopy and wires that could entangle the cable |
| Alternate landing sites | At least one identified before launch, per the aircraft's alternate landing site function where provided |

Suitable launch areas for an aircraft of this size are far less common in Sea to Sky terrain than for the small fleet. Candidate sites near likely tasking areas are recorded in Appendix A as the survey matures.

---

## 4. Hazard Assessment

The following hazards are present within the region. Controls listed are minimum standards; the Rapid Site Survey identifies site-specific additions.

### 4.1 Terrain Hazards

- **Mountainous terrain:** Steep rugged mountains create significant challenges. Rapid elevation changes can disrupt GNSS reception, making navigation difficult, and there is risk of collision with slopes, particularly in low visibility.
- **Valleys and gorges:** Flying within deep valleys can cause signal loss due to surrounding topography. The enclosed nature of these areas can produce turbulent wind conditions that may destabilize the RPA.
- **Glaciated terrain (central and northern corridors):** Crevasse fields, seracs, and icefalls present both a subject-location environment and a hazard to low flight. Featureless snow and glacier surfaces degrade visual altitude reference and can defeat downward vision positioning systems.
- **Control:** On site, use the downloaded terrain model to identify terrain on the planned flight path, noting significant elevation changes, valleys, and gorges. Monitor the RPA position on the ground control map and the live camera feed throughout. Set RTH altitude above the highest terrain in the operating area.

### 4.2 Vegetation Hazards

- **Dense forests:** Thick temperate rainforest presents a significant obstacle to low-altitude flight. Tall trees obstruct flight paths and increase collision risk, particularly below canopy, and reduce the ability to maintain visual line of sight.
- **Fallen trees and debris:** Forested areas are prone to falling trees, particularly after storms, creating unexpected obstacles on the ground and in the air.
- **Control:** When flying within or under canopy, use only RPAS with omnidirectional obstacle detection. Refer to the fleet capability list in the Forms and Maintenance Manual when selecting the appropriate system.

### 4.3 Weather Hazards

- **Rapid weather changes:** The region is known for rapidly changing conditions. Sudden shifts in wind speed and direction, unexpected precipitation, and the onset of fog impair flight stability and visibility.
- **Wind conditions:** High winds in exposed mountain passes, on ridges, and near the coast can be unpredictable and strong enough to affect RPA performance. Gusts can occur without warning, especially at altitude.
- **Fog and mist:** Proximity to Howe Sound and the river systems produces frequent fog and mist. Valley fog in the Pemberton and Lillooet valleys can persist and has delayed helicopter response in past incidents, which may increase reliance on RPAS.
- **Inversions and valley cloud:** Temperature inversions commonly trap cloud in the valley bottoms while alpine terrain remains clear, creating a ceiling between the launch site and the search area.
- **Control:** Check the forecast for the area before and during the task. Carry an anemometer for on-site wind monitoring and remain vigilant for weather forming at or in the path of the operation.

### 4.4 Water Hazards

- **Bodies of water:** Rivers, lakes, and Howe Sound introduce risk of the RPA entering water through mechanical failure or pilot error. This necessitates planning for recovery and protecting payloads against moisture.
- **River currents:** If an RPA lands on or near a river, strong currents can carry it away, making recovery difficult. Swiftwater incidents are a recurring tasking type in the northern corridor, including the Nairn Falls area.
- **Control:** Water, where people are not present, is recognized as a safe scuttle option in an RPAS emergency. Best attempts to recover will be made so long as risk to the operator or others is not present.

### 4.5 Human Activity Hazards

- **Recreational areas:** The region is heavily used for hiking, climbing, skiing, snowmobiling, mountain biking, and water sports. High-use areas include the Stawamus Chief, Shannon Falls, and the Sea to Sky Gondola in the south; Garibaldi Park, Singing Pass, the Spearhead, Wedgemount, and the ski area boundaries in the centre; and Joffre Lakes, Nairn Falls, Semaphore Lakes, and the Duffey Lake corridor in the north.
- **Ski area infrastructure (central corridor):** Lift cables, gondola spans, towers, snowmaking infrastructure, and avalanche control installations present wire-strike and collision hazards. Avalanche control work, including explosive control, may be active in and adjacent to ski area terrain.
- **Industrial activity:** Active logging with slung-load helicopter operations, pipeline and utility construction, and agricultural aerial application in the Pemberton and Lillooet valleys.
- **Control:** RPAS operations are strictly conducted for search and rescue purposes, so it is unlikely that uninvolved people will be present who do not expect the RPA. Where they are present, maintain 100 feet separation unless the subject requiring help is within that boundary. Confirm with the tasking authority whether avalanche control or industrial air operations are active in the area before launch.

### 4.6 Aircraft Traffic Hazards

- Low-flying helicopters and small aircraft operate throughout the region, including tourism, heli-skiing, firefighting, medevac, and rescue flights. Helicopter activity in the central and northern corridors is substantially higher than in the south, and heli-ski operations occur across a wide area of alpine terrain in winter.
- **Control:** Pilots are ROC-A certified and maintain airspace awareness at all times. SAR helicopters maintain direct communication with the RPAS team; the RPAS flight plan, launch, position (periodically and on request), and landing are communicated. Full airspace management is detailed in Section 7.

### 4.7 Wildlife Hazards

- **Birds:** Various species may pose a collision risk, particularly at lower altitudes. Raptor interest in RPAS is common in alpine and coastal terrain.
- **Control:** If a predatory bird attacks the RPA, enact the best known evasive manoeuvre followed by a direct Return to Home to ensure operator comfort and aircraft safety.
- **Wildlife encounters:** Bears, deer, and in the northern corridor grizzly bears may be present at launch and recovery sites, creating hazardous interactions for people and animals.
- **Control:** Adhere to commonly known safe practices: no food left out, operators make noise, and bear spray is carried.

### 4.8 Technical and Operational Hazards

- **Signal interference:** Rugged terrain and dense vegetation interfere with GNSS and C2 signals, risking loss of control.
- **Battery drain:** Cold temperatures at higher altitudes cause faster battery drain, reducing flight time and increasing the risk of the RPA running out of power before returning.
- **Control:** Maintain awareness of link status through the telemetry feed. The PIC is trained to take frequent battery readings; if abnormal drain occurs, flight time is managed accordingly.

---


### 4.9 Hazards Specific to Medium RPA Operations

- **Mass and energy:** An aircraft of 95 kg to 150 kg presents a fundamentally different hazard from the small fleet. Cordons, abort decisions, and the treatment of any incident scene are sized accordingly.
- **Battery systems:** The battery packs are large and carry a significant thermal hazard if damaged. A damaged pack is not approached, is not moved, and is isolated until it can be assessed.
- **Suspended loads:** A load on a line is a hazard to anyone beneath it for the whole flight, not only at the delivery point. The flight path avoids overflight of persons wherever terrain allows.
- **Parachute footprint:** Where a parachute deploys, the descent is wind-dependent and the aircraft may land well displaced from the point of deployment. The footprint is estimated from the manufacturer's descent rate and the wind on the day.
- **Reduced weather envelope:** The CAR 901.34(2) relationship between ground visibility and permitted distance, which applies to medium RPA only, will frequently bind before the general BVLOS weather minima do.

---

## 5. Population and Ground Environment

### 5.1 Population Density

The region is best defined by the population census district of the Squamish-Lillooet Regional District, which has a population density of **3.1 people per square kilometre**. That figure includes the four population centres within the district (Squamish, Whistler, Pemberton, and Lillooet). Municipalities are excluded from Program operations, so the effective density in the operating area is lower still.

| Area | Approx. Population | Approx. Area | Density | Classification (CAR 900.01) |
|------|--------------------|--------------|---------|------------------------------|
| District of Squamish | 23,000 | 104 km² | 221/km² | Populated, excluded |
| Resort Municipality of Whistler | 13,000 | 161 km² | 81/km² | Populated, excluded |
| Village of Pemberton and environs | 3,400 | 49 km² | 69/km² | Populated, excluded |
| Squamish, Elaho and Cheakamus watersheds | <500 | 1,200 km² | <0.5/km² | Sparsely populated, approved |
| Sea to Sky backcountry and alpine | <200 | 800 km² | <0.25/km² | Sparsely populated, approved |
| Northern corridor backcountry (Lillooet, Birkenhead, Hurley, Duffey) | <200 | 1,500 km² | <0.15/km² | Sparsely populated, approved |
| Coastal inlets and islands | <100 | 400 km² | <0.25/km² | Sparsely populated, approved |

Site-specific density is confirmed during the Rapid Site Survey. Note that recreational use produces transient concentrations of people well above the resident density, particularly at trailheads and day-use areas such as Joffre Lakes, Garibaldi Lake, Wedgemount, and the Stawamus Chief.

### 5.2 Gatherings of People

Due to the nature of operations it is highly unlikely that the Program will be requested to operate near or over any gathering of people. If a gathering is identified, pre-launch planning includes mitigating proximity to the gathering by 100 feet. Seasonal events and festivals occur in all three communities and are avoided.

### 5.3 Security Measures

The launch and landing location is secured with signage stating RPAS operations in progress and directing people not to approach, high-visibility pylons, and a Visual Observer acting as a barrier to public interaction with the pilot.

### 5.4 Minimum Separations from People

A minimum separation of 100 feet is maintained at all times, except where the subject requiring assistance is within that distance.

---

## 6. Predominant Weather

Operations are conducted year-round. Values below are typical; the northern corridor runs colder and drier in winter and warmer in summer than the coastal south, and alpine terrain in all sub-regions is more severe than valley bottoms.

### Winter (December to February)
- **Temperature:** Low altitudes 0°C to 7°C; mid to high altitudes -10°C to 0°C, colder in the northern corridor
- **Precipitation:** Low altitudes heavy rain in the south, more snow in the north; mid to high altitudes frequent snowfall with accumulation increasing significantly with elevation
- **Winds:** Low altitudes 4 to 6 m/s average with strong gusts during storms; mid to high altitudes exceeding 10 m/s, particularly on exposed ridges and peaks

### Spring (March to May)
- **Temperature:** Low altitudes 5°C to 15°C; mid to high altitudes -5°C to 5°C with gradual warming
- **Precipitation:** Low altitudes rain decreasing by May; mid to high altitudes mixed rain and snow, snow lingering in higher terrain into late spring
- **Winds:** Low altitudes 3 to 5 m/s with occasional strong gusts; mid to high altitudes variable at 5 to 8 m/s, stronger in exposed areas

### Summer (June to August)
- **Temperature:** Low altitudes 14°C to 25°C, warmer in the Pemberton and Lillooet valleys; mid to high altitudes 5°C to 15°C, with alpine areas possibly freezing at night
- **Precipitation:** Low altitudes dry with minimal rain; mid to high altitudes generally dry, with afternoon thunderstorms possible in July and August. Wildfire smoke can significantly reduce visibility, particularly in the northern corridor
- **Winds:** Low altitudes 3 to 5 m/s with light to moderate afternoon breezes, including reliable up-valley thermal winds; mid to high altitudes 4 to 7 m/s with stronger gusts in exposed areas

### Fall (September to November)
- **Temperature:** Low altitudes 10°C to near freezing; mid to high altitudes -5°C to 5°C with early snow at higher elevations
- **Precipitation:** Low altitudes increasing rain with first snowfall in November; mid to high altitudes frequent snow, especially October and November
- **Winds:** Low altitudes 3 to 5 m/s with stronger winds in October and November; mid to high altitudes 6 to 10 m/s, particularly in exposed terrain during storms

### Key Considerations
- **Rain and snow:** Frequent in winter and fall, with high-elevation accumulation persisting well into spring
- **Temperature:** Cold in winter at all elevations, with significant drops at altitude; warmer summers with much cooler alpine temperatures
- **Winds:** Vary by altitude, strongest in winter and fall, with the highest speeds on exposed ridges and peaks
- **Visibility:** Valley fog and inversions in winter; wildfire smoke in late summer

---

## 7. Airspace Awareness and Management

Operations within the Program region are predominantly in **Class G airspace**, with Class C and Class E structures of the Vancouver Terminal Control Area overlying portions of the southern and central corridors. BVLOS operations under CARs Division VI are conducted in uncontrolled airspace only; operations in controlled airspace require authorization under CAR 901.71, and operations above 400 feet AGL require a valid SFOC.

### 7.1 Aerodromes and Heliports

BVLOS operations maintain at least 5 NM from any aerodrome listed in the Canada Flight Supplement or Water Aerodrome Supplement (CAR 901.47(3)).

| Name | Code | Type | Radio | Contact | Location |
|------|------|------|-------|---------|----------|
| Vancouver International | CYVR | International airport | 124.6 | 604-207-7022 | South of and above the region |
| Vancouver Harbour | CYHC | Seaplane base | 126.8 | 604-328-4340 | South of the region |
| Squamish Municipal | CYSE | Airport | 122.8 | 604-892-5217 | Squamish, southern corridor |
| Whistler/Green Lake | CAE5 | Water aerodrome | [Verify in WAS] | 604-932-6615 | Whistler, central corridor; elevation 2,100 ft |
| Whistler Municipal Heliport | CBE9 | Heliport | 123.05 | 604-938-1700 | 3.7 NM north of Whistler village, central corridor |
| Pemberton Regional | CYPS | Airport | [Verify in CFS] | 604-938-1700 | 5 NM south southeast of Pemberton; elevation 670 ft; runway 6/24; no tower, no lighting, no navaids |

Hospital and helipad landing sites at Squamish General Hospital, Whistler Health Care Centre, and Pemberton Health Centre receive medevac traffic and are treated as active landing sites.

### 7.2 Controlled Airspace Overlying the Region

| Location | Airspace Class | Altitude Range | Map ID |
|----------|----------------|----------------|--------|
| Furry Creek to the southernmost boundary | Class C | 6,501 ft to 8,500 ft MSL | S1 |
| Furry Creek to the northern boundary of Squamish | Class C | 8,501 ft to 9,500 ft MSL | S2 |
| Northern boundary of Squamish to Cloudburst Mountain and Garibaldi Lake | Class E | 700 ft AGL to 9,500 ft MSL | S3 |
| North of Garibaldi Lake to Daisy Lake | Class C | 9,501 ft to 12,500 ft MSL | S4 |
| Central and northern corridors north of Daisy Lake | Predominantly Class G below the Class E en route structure | [Verify current VNC and NAV Drone before operations] | S5 |

Terminal navigation area structures exist north of Squamish. Airspace classes and floors are verified on the current VNC and in NAV Drone as part of pre-flight planning for every operation; the table above is a planning reference, not a substitute for that check.

### 7.3 NOTAMs and Known Routes

There are no relevant NOTAMs as of the date of this survey. NOTAMs are monitored up to and including the day of the operation, with particular attention to wildfire restrictions, which are common in the region in summer and may establish restricted airspace at short notice.

Known airway crossings over the southern corridor are **V321 at 11,000 feet** north/south and **T606 at 10,500 feet** northeast/southwest. Airway and route structures over the central and northern corridors are verified on the current VNC.

### 7.4 Airspace Management by Sub-Region

**Southern corridor.** Traffic originates primarily from Squamish Municipal Airport, local heliports, and Vancouver Harbour.
- *Helicopter operations:* significant activity including commercial, rescue, and SAR-specific flights. Key points of activity are Squamish Municipal Airport, Squamish General Hospital, and the Squamish fire hall. Pipeline and utility construction has involved frequent slung-load operations in the Valleycliffe area.
- *Fixed-wing operations:* several flight schools operate from Squamish Municipal Airport, conducting circuits, route variations, and emergency manoeuvres including stalls at varying speeds and altitudes. Recreational pilots fly low-altitude circuits over the Chief, Garibaldi, and the Tantalus Range. Harbour Air and other commercial operators land in the Squamish harbour area with increasing frequency.

**Central corridor.** The Whistler Municipal Heliport is the dominant traffic generator, supporting tourism flights, heli-skiing, industrial lifts, and medical evacuation, with multiple operators based on site. Green Lake water aerodrome hosts scheduled and charter floatplane traffic. Expect helicopter activity at any altitude from valley bottom to alpine, frequently manoeuvring and operating with slung loads. Ski area operations generate additional low-level activity, and avalanche control may be active in and adjacent to ski terrain in winter.

**Northern corridor.** Pemberton Regional Airport supports helicopter operations, general aviation, and seasonal firefighting activity, and is an uncontrolled aerodrome without a tower. Heli-ski operations range widely across alpine terrain in winter, including areas well away from any aerodrome, and were a factor in past avalanche incidents. Agricultural aerial application occurs seasonally in the Pemberton and Lillooet valleys. Wildfire suppression aircraft, including skimmers drawing from regional lakes, may operate anywhere in the sub-region in summer with little warning.

### 7.5 Communication and Coordination

- **Visual Observers:** VOs remain aware of ongoing airspace activity and vigilant for potential conflicts. They promptly communicate any sighting or audible cue of nearby aircraft to the pilot in real time.
- **Radio monitoring:** A ROC-A radio is present and actively monitored during operations to identify and assess potential airspace conflicts.
- **ADS-B In:** When operating enterprise aircraft, ADS-B In notifications are monitored for situational awareness. Operators do not rely on ADS-B alone, as many aircraft in the region are not equipped with ADS-B Out.
- **Pre-operation communication:** For larger operations, or where interaction with flight schools, heli-ski, or commercial helicopter operations is a concern, operators contact the relevant airspace users before the operation to advise of RPAS activity.
- **Two-way communication requirement:** Operators are only permitted to operate when they have two-way communication capability with off-site stakeholders, whether by cellular phone, radio, or the Organization's communication network. All communications are tested before the operation through a signal check with off-site members.

### 7.6 Airspace User Contacts

| Operator | Area | Contact |
|----------|------|---------|
| Glacier Air | Southern corridor | 604-898-9016 |
| Sea To Sky Air | Southern corridor | 604-898-1975 |
| Black Tusk Helicopter | Southern corridor | 604-898-4800 |
| Whistler Municipal Heliport (managed by Blackcomb Helicopters) | Central corridor | 604-938-1700 |
| Whistler Air (Green Lake) | Central corridor | 604-932-6615 |
| Pemberton Regional Airport | Northern corridor | 604-938-1700 |
| Vancouver FIC (flight information) | All | 1-866-WXBRIEF |

Each Organization maintains current contacts for the heli-ski, flight training, and industrial operators active in its own area and reviews them seasonally.

---


### 7.7 Airspace Considerations for Medium RPA

- Medium RPA BVLOS must remain at least 1 km from any populated area for the entire operational volume including the ground risk buffer (CAR 901.87(a)). In the corridor this confines BVLOS delivery to backcountry and alpine terrain.
- Where a delivery aircraft is equipped with ADS-B, it is used for situational awareness in addition to, and not in place of, visual observers.
- The larger aircraft is more conspicuous to other airspace users, which is worth noting when coordinating with heli-ski, flight training, or industrial operators before an operation.

---

## 8. Emergency Preparedness

### 8.1 RPAS Emergency Notification

In the event of an RPAS emergency the following are informed immediately.

| Situation | Contact |
|-----------|---------|
| Emergency in the direction of uncontrolled airspace | FIC Kamloops: 1-866-541-4101 |
| Emergency in the direction of controlled airspace | Vancouver International (CYVR): 604-207-7022 |
| Critical situation, injury | 911 |

During a fly-away, follow the fly-away script (Operations Manual Section 14.4).

### 8.2 Medical Emergency Plan

Team members are deployed only as part of a larger team of trained search and rescue members, so medical emergencies are well prepared for. Typical deployments include medical relief kits, and access to evacuation is readily available by vehicle, water, or air.

| Facility | Address | Phone |
|----------|---------|-------|
| Squamish General Hospital | 38140 Behrner Drive, Squamish, BC V8B 0J3 | 911 for emergencies |
| Whistler Health Care Centre | 4380 Lorimer Road, Whistler, BC V8E 1A7 | 604-932-4911 |
| Pemberton Health Centre | 1403 Portage Road, Pemberton, BC V0N 2L0 | 604-894-6454 |

In a critical situation, contact 911. Emergency access routes are identified per the operational location of each mission, as these vary.

---

## 9. Verification Register

The following items require confirmation against primary sources before this survey is relied upon for an SFOC application or submitted to Transport Canada. Each is marked in the text above.

| Item | Section | Action Required |
|------|---------|-----------------|
| CYPS radio frequency (ATF/MF) | 7.1 | Confirm in the current Canada Flight Supplement |
| CAE5 Green Lake radio frequency | 7.1 | Confirm in the current Water Aerodrome Supplement |
| Airspace classes and floors north of Daisy Lake | 7.2 | Confirm on the current VNC and in NAV Drone |
| Airway and route structure over central and northern corridors | 7.3 | Confirm on the current VNC |
| Whistler and Pemberton SAR boundary maps | 3.1, Appendix A | Obtain from each Organization and attach |
| Municipal population and area figures | 5.1 | Confirm against latest census release |
| Heli-ski and flight training operator contacts, central and northern corridors | 7.6 | Compile with each Organization |

---

## Appendices

- **Appendix A:** Region-wide boundary map with per-Organization overlays
- **Appendix B:** Terrain and elevation reference models
- **Appendix C:** VNC extracts and frequency card
- **Appendix D:** Population density map extracts (AC 903-001 Appendix G methodology)
- **Appendix E:** Emergency fly-away script (see Operations Manual Section 14.4)

---

*This master survey pre-identifies regional risk. The Rapid Site Survey (Operations Manual Section 6.4) remains mandatory at every launch.*
`
    }

};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RPOC_CONTENT;
}
