# S2S SAR Drone Program - Operations Manual

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
13. [Emergency Contacts](#13-emergency-contacts)
14. [Document Control](#14-document-control)

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
- **Visual Observers:** for EVLOS, the VO must hold a pilot certificate (CAR 901.75); for BVLOS, the VO must be trained per Standard 923 and Training Manual Section 6

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

| Duration | Behavior | PIC Action |
|----------|----------|------------|
| 0-3 seconds | Warning displayed, continues flight | Attempt reconnection |
| 3-10 seconds | Hover in place | Move to better signal area |
| 10-30 seconds | Begin RTH if not restored | Monitor telemetry |
| >30 seconds | Auto-RTH at preset altitude | Prepare for landing |
| Link restored | PIC control resumed | Assess and continue/abort |

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
| Squamish General Hospital | Medical facility, southern corridor | 38140 Behrner Drive, Squamish |
| Whistler Health Care Centre | Medical facility, central corridor | 4380 Lorimer Road, Whistler |
| Pemberton Health Centre | Medical facility, northern corridor | 1403 Portage Road, Pemberton |

### 13.3 Aerodromes in the Program Area

| Name | Code | Type | Radio | Phone | Location |
|------|------|------|-------|-------|----------|
| Vancouver Intl | CYVR | International | 124.6 | 604-207-7022 | South/Above the Program |
| Vancouver Harbour | CYHC | Seaplane Base | 126.8 | 604-328-4340 | South of the Program |
| Squamish Municipal | CYSE | Airport | 122.8 | 604-892-5217 | Squamish |
| Green Lake Whistler | CAE5 | Seaplane Base | n/a | 604-932-6615 | Whistler |
| Pemberton Regional | CYPS | Airport | [Verify in CFS] | [Verify] | Pemberton |

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
