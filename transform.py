#!/usr/bin/env python3
"""Sea to Sky SAR RPAS Program documentation update.
Applies: regulatory corrections (CARs Jan 2026), L1C/SFOC authority framework,
JARUS SORA 2.5 alignment (CARs-first), and multi-organization generalization.
"""
import re, io, sys

# ---------------------------------------------------------------- new blocks

OPS_12_13 = """### 1.2 Scope

This manual applies to all RPAS operations conducted under the Sea to Sky SAR RPAS Program by its participating organizations: Squamish Search and Rescue, Whistler Search and Rescue, and Pemberton District Search and Rescue. In this manual, "the Program" means the shared Sea to Sky SAR RPAS Program, and "the Organization" means the participating search and rescue organization conducting the operation. Operations covered include:

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
"""

OPS_S2 = """## 2. Operating Certificates and Authority

### 2.1 Certificate Structure

Each participating organization holds its own certificates. This shared documentation supports each Organization's RPOC and SFOC applications and serves as common program policy; certificates themselves are issued to, and held by, each Organization individually.

| Certificate | Held By | Purpose |
|-------------|---------|---------|
| RPAS Operator Certificate (RPOC), CAR 901.214 | Each Organization | Required for Level 1 Complex (Division VI) BVLOS operations |
| SFOC-RPAS, CAR 903.03 | Each Organization (as required) | Operations beyond certificate privileges (e.g. STSC-003, STSC-004 for Advanced pilots) |
| Pilot Certificates, CAR 901.55 / 901.64 / 901.90 | Individual pilots | Basic, Advanced, or Level 1 Complex privileges |

### 2.2 Issued Certificates by Organization

| Organization | RPOC Number | Issued | Accountable Executive |
|--------------|-------------|--------|-----------------------|
| Squamish Search and Rescue Society | OC2607502737 | 2026-03-16 | Dustin Wales |
| Whistler Search and Rescue | [Per Organization] | [Pending] | [Per Organization] |
| Pemberton District Search and Rescue | [Per Organization] | [Pending] | [Per Organization] |

SFOCs are held internally by each Organization and are referenced against this documentation when applying. Each Organization maintains its current SFOC (number, validity period, authorized operations, and named pilots) in its own certificate records.

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

### 2.5 Authorized Pilots

Each Organization maintains its own authorized pilot roster. Current roster, Squamish Search and Rescue:

| Name | Certification | Certificate # | Role |
|------|---------------|---------------|------|
| Dustin Wales | Level 1 Complex + Flight Reviewer | PC1903576891 | Chief Pilot / AE |
| Michael Adams | Advanced Operations | PC2513272613 | PIC |
| Angela Wagner | Advanced Operations | PC2513172525 | PIC |
| David Thanh | Advanced Operations | PC2205100242 | PIC |
| Jacob Lagercrantz | Advanced Operations | PC2203399477 | PIC |
| Philip Bonham | Advanced Operations | PC2329738112 | PIC |
| Michael Rafferty | Advanced Operations | PC2515374690 | PIC |
| Jeffrey Fielding | Advanced Operations | PC2406844456 | PIC |
| Michelle Bech | Advanced Operations | PC2307121179 | PIC |

| Organization | Roster |
|--------------|--------|
| Whistler Search and Rescue | Maintained by Organization; recorded per CAR 901.223 |
| Pemberton District Search and Rescue | Maintained by Organization; recorded per CAR 901.223 |

### 2.6 Operating Area

- Sea to Sky Corridor, British Columbia (Squamish, Whistler, Pemberton and surrounding terrain)
- Each Organization's search and rescue jurisdiction
- Provincial parks and wilderness areas in the region
- Operations may be conducted throughout British Columbia as required for SAR missions, subject to appropriate airspace authorizations

---

"""

OPS_S5 = """## 5. Operating Authority and Standard Scenario Operations

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

"""

SAFETY_33 = """### 3.3 SORA Process Overview

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

"""

SAFETY_35 = """#### 3.5.1 Intrinsic GRC Determination (SORA v2.5, Table 2)

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

"""

SAFETY_362_ADD = """
**ARC Reduction for VLOS Operations (SORA v2.5, Step 5):** For STSC-003, the operation is VLOS with the pilot and visual observers assessing airspace activity before and during flight. Per SORA v2.5 Section 4.5.4 this strategic mitigation reduces the initial ARC by one class: initial ARC-c becomes **residual ARC-b**. For BVLOS operations the initial ARC-b is retained as the residual ARC.

"""

SAFETY_363 = """#### 3.6.3 TMPR and SAIL Determination

| Scenario | Final GRC | Residual ARC | TMPR (SORA v2.5 Table 6) | SAIL (Table 7) |
|----------|-----------|--------------|--------------------------|----------------|
| STSC-003 (High Alt) | GRC 1 | ARC-b (reduced from ARC-c, VLOS) | Low | **SAIL II** |
| Low-Risk BVLOS (Division VI / STSC-004) | GRC 2 | ARC-b | Low | **SAIL II** |

The Low TMPR for BVLOS is satisfied by visual observer detect and avoid conducted in accordance with Standard 923 and AC 903-001 Appendix B, which also satisfies CAR 901.95(2) in lieu of a Standard 922.10 DAA declaration.

"""

SAFETY_373 = """
#### 3.7.3 Containment Requirements (SORA v2.5, Step 8)

The adjacent area lateral limit is the distance flown in 3 minutes at maximum speed, with a 5 km minimum: at 23 m/s this is approximately 4.1 km, so **5 km** is applied. For a 1 m class UA at SAIL II (SORA v2.5 Table 8), containment robustness is **LOW** provided the following operational limits are respected:

| Operational Limit | Program Assessment |
|-------------------|--------------------|
| Adjacent area average population density under 50,000 people/km² | Sea to Sky adjacent areas are far below this limit |
| No outdoor assemblies over 40,000 people within 1 km of the operational volume | Verified during site survey for each mission |

Low robustness containment is met by the operational volume definition (flight geography, contingency volume, and 1:1 ground risk buffer per CAR 900.01), pre-programmed lost link and RTH behavior, and the emergency procedures of Section 2.

"""

SAFETY_38 = """### 3.8 OSO Compliance Summary (SORA v2.5, SAIL II)

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

"""

OPS_CONOPS_PREAMBLE_OLD = """This Concept of Operations outlines RPAS operations conducted by Squamish Search and Rescue (SSAR), based out of Squamish, British Columbia. This document is integral to SSAR Special Flight Operation Certificate (SFOC) application for:

- **(STSC-003)** VLOS operation of a small RPA (>250g up to 25kg) in uncontrolled airspace above 400' AGL up to 1000' AGL
- **(STSC-004)** BVLOS operation of a small RPA (>250g up to 25kg) over low-risk ground areas using visual observer DAA"""

OPS_CONOPS_PREAMBLE_NEW = """This Concept of Operations outlines RPAS operations conducted under the Sea to Sky SAR RPAS Program by its participating organizations (Squamish, Whistler, and Pemberton SAR), operating throughout the Sea to Sky Corridor of British Columbia. This document supports each Organization's RPOC and, where applicable, SFOC applications, covering:

- **Level 1 Complex Operations (CAR 901.87):** BVLOS operation of a small RPA in uncontrolled airspace, max 400' AGL, over sparsely populated areas, conducted under the Organization's RPOC by Level 1 Complex pilots
- **(STSC-003)** VLOS operation of a small RPA (>250g up to 25kg) in uncontrolled airspace above 400' AGL up to 1000' AGL, under the Organization's valid SFOC
- **(STSC-004)** BVLOS operation of a small RPA (>250g up to 25kg) over low-risk ground areas using visual observer DAA, by Advanced pilots under the Organization's valid SFOC"""

L1C_CHECKS_OLD = """- **Population Check:** Confirm via Site Survey that population density is <25 people/km²
- **Visibility Check:** Confirm Ground Visibility is >3 Statute Miles (4.8 km)
- **Airspace:** Confirm Class G Airspace (or SFOC held for Controlled)
- **Detect & Avoid:** Confirm ADS-B In (e.g., DJI AirSense) is active and audio is audible"""

L1C_CHECKS_NEW = """- **Population Check:** Confirm via Site Survey that the area is sparsely populated (more than 5, up to 25 people/km²) or the route remains at least 1 km from any populated area (CAR 901.87)
- **Visibility Check:** Confirm Ground Visibility is at least 3 Statute Miles and operation remains clear of cloud (CAR 901.34(3))
- **Airspace:** Confirm uncontrolled airspace (BVLOS in controlled airspace requires an SFOC)
- **Aerodrome Standoff:** Confirm at least 5 NM from any aerodrome listed in the CFS or Water Aerodrome Supplement (CAR 901.47(3))
- **Anti-Collision Lights:** Confirm installed and ON (white, 40-100 flashes/min, visible 1 mile, CAR 901.38.1)
- **PIC Designation:** Confirm a Pilot-in-Command is designated for the operation (CAR 901.222)
- **Detect & Avoid:** Visual observer DAA per Standard 923; confirm ADS-B In (e.g., DJI AirSense) is active and audio is audible"""

# --------------------------------------------------------- global replacers

CITE_FIXES = [
    ("### 2.2 Fatigue Management - CAR 901.29", "### 2.2 Fatigue Management - CAR 901.19"),
    ("(exceeding CAR 901.29 minimums)", "(in support of CAR 901.19(1)(a), fitness of crew members)"),
    ("Per CAR 901.222, maintain records", "Per CAR 901.223, maintain records"),
    ("| 901.222 | [ ] | |", "| 901.223 | [ ] | |"),
    ("(CAR 901.76)", "(CAR 901.194 and Standard 922)"),
    ("(CAR 901.02)", "(CAR 900.13)"),
    ("per CAR 901.02", "per CAR 900.13"),
    ("with CAR 901.02", "with CAR 900.13"),
    ("(CAR 901.03)", "(CAR 900.14)"),
    ("| 901.02 | [ ] | |", "| 900.13 | [ ] | |"),
    ("| 901.03 | [ ] | |", "| 900.14 | [ ] | |"),
    ("### 8.2 Insurance Requirements - CAR 901.06", "### 8.2 Insurance Requirements (Program Policy)"),
    ("CAR 901.06", "Program policy"),
]

SFOC_LANG = [
    ("comply with regulations and SFOC constraints",
     "comply with regulations, certificate privileges, and the conditions of any applicable SFOC"),
    ("| 6 | Full SFOC Operator Approval | All SFOC-permitted operations | All stages complete; final sign-off |",
     "| 6 | Full Operator Privileges | All operations permitted by certificates held and any valid SFOC | All stages complete; final sign-off |"),
    ("(Ops Manual, CONOPS, Site Survey, SFOC)",
     "(Ops Manual, CONOPS, Site Survey, and any applicable SFOC)"),
    ("CARs Part IX, SFOC requirements, SSAR Operational Procedures.",
     "CARs Part IX, certificate privileges and SFOC conditions, and Program Operational Procedures."),
    ("Used for long-range searches in the backcountry without an SFOC.",
     "Conducted under the Organization's RPOC by Level 1 Complex certified pilots (CARs Division VI); no SFOC is required within Division VI limits. Advanced pilots may conduct the equivalent envelope only under a valid SFOC (STSC-004)."),
    ("Certificates, SFOC copy, Emergency Procedures card",
     "Certificates, any applicable SFOC copy, Emergency Procedures card"),
    (L1C_CHECKS_OLD, L1C_CHECKS_NEW),
    (OPS_CONOPS_PREAMBLE_OLD, OPS_CONOPS_PREAMBLE_NEW),
]

ORG_GENERALIZE = [
    ("# SSAR RPAS Operations Manual", "# Sea to Sky SAR RPAS Operations Manual"),
    ("# SSAR Safety & Emergency Manual", "# Sea to Sky SAR Safety & Emergency Manual"),
    ("# SSAR People & Equipment Manual", "# Sea to Sky SAR People & Equipment Manual"),
    ("# SSAR Forms & Maintenance Manual", "# Sea to Sky SAR Forms & Maintenance Manual"),
    ("# SSAR RPAS Training Program Manual", "# Sea to Sky SAR RPAS Training Program Manual"),
    ("## Squamish Search and Rescue - RPAS Operations Program",
     "## Sea to Sky SAR RPAS Program - Squamish | Whistler | Pemberton"),
    ("Squamish Search and Rescue (SSAR)", "the Sea to Sky SAR RPAS Program"),
    ("Squamish Search and Rescue", "the Sea to Sky SAR RPAS Program"),
    ("the SSAR", "the Program"),
    ("SSAR's", "the Program's"),
    ("SSAR RPAS", "Program RPAS"),
]

VERSION_BUMP = [
    ("| Version | 1.0 |", "| Version | 2.0 |"),
    ("| Effective | March 2026 |", "| Effective | August 2026 |"),
    ("| Effective Date | March 2026 |", "| Effective Date | August 2026 |"),
    ("| Review Date | March 2027 |", "| Review Date | August 2027 |"),
]

def span_replace(text, start_anchor, end_anchor, new_block, label):
    s = text.find(start_anchor)
    if s < 0:
        print(f"  !! start anchor not found: {label}"); return text, False
    e = text.find(end_anchor, s + len(start_anchor))
    if e < 0:
        print(f"  !! end anchor not found: {label}"); return text, False
    return text[:s] + new_block + text[e:], True

def apply_pairs(text, pairs, label):
    n = 0
    for old, new in pairs:
        c = text.count(old)
        if c:
            text = text.replace(old, new); n += c
    print(f"  {label}: {n} replacements")
    return text

def cleanup(text):
    text = text.replace("the the Program", "the Program").replace("The the Program", "The Program")
    text = re.sub(r"\bSSAR\b(?!-)", "the Program", text)
    text = text.replace("the the Program", "the Program")
    text = re.sub(r"(?m)^the Program", "The Program", text)
    return text

def process(path, is_ops=False, is_safety=False, is_contentjs=False):
    print(f"\n== {path}")
    with io.open(path, encoding="utf-8") as f:
        t = f.read()

    if is_ops or is_contentjs:
        t, _ = span_replace(t, "### 1.2 Scope",
            "### 1.4 Related Documents", OPS_12_13 + "\n", "ops 1.2-1.3")
        t, _ = span_replace(t, "## 2. RPAS Operator Certificate (RPOC)",
            "## 3. Concept of Operations (CONOPS)", OPS_S2, "ops s2")
        t, _ = span_replace(t, "## 5. Standard Scenario Operations",
            "## 6. Site Survey and Flight Planning", OPS_S5, "ops s5")
        t = t.replace("5. [Standard Scenario Operations](#5-standard-scenario-operations)",
                      "5. [Operating Authority and Standard Scenario Operations](#5-operating-authority-and-standard-scenario-operations)")

    if is_safety or is_contentjs:
        t, _ = span_replace(t, "### 3.3 SORA Process Overview",
            "### 3.4 Concept of Operations", SAFETY_33, "safety 3.3")
        t, _ = span_replace(t, "#### 3.5.1 Intrinsic GRC Determination",
            "### 3.6 Air Risk Assessment", SAFETY_35, "safety 3.5")
        t = t.replace("#### 3.6.3 SAIL Determination", "@@SAIL@@", 1)
        t, _ = span_replace(t, "@@SAIL@@", "### 3.7 Adjacent Area/Airspace Assessment",
            SAFETY_362_ADD + SAFETY_363, "safety 3.6.3")
        t, _ = span_replace(t, "### 3.8 OSO Compliance Summary",
            "### 3.9 Final Risk Statement", SAFETY_38, "safety 3.8")
        t = t.replace("### 3.8 OSO Compliance Summary (SORA v2.5, SAIL II)",
                      SAFETY_373.rstrip("\n") + "\n\n### 3.8 OSO Compliance Summary (SORA v2.5, SAIL II)", 1)
        t = t.replace("| ATC Coordination | STSC-003: 24hr prior notification | OPS-001 procedure |",
                      "| ATS Coordination | STSC-003: coordination per SFOC conditions | OPS-001 procedure |")
        t = t.replace("- **STSC-003:** VLOS operations above 400' AGL up to 1000' AGL\n- **STSC-004:** BVLOS operations in sparsely populated areas",
                      "- **Level 1 Complex BVLOS (Division VI, under RPOC):** BVLOS up to 400' AGL over sparsely populated areas\n- **STSC-003 (under valid SFOC):** VLOS operations above 400' AGL up to 1000' AGL\n- **STSC-004 (under valid SFOC):** BVLOS operations in sparsely populated areas by Advanced pilots")
        t = t.replace("### 3.10 STSC-003 Specific Assessment\n",
                      "### 3.10 STSC-003 Specific Assessment\n\n> STSC-003 operations are available only where the Organization holds a valid SFOC authorizing them (see Operations Manual Section 5).\n")

    t = apply_pairs(t, CITE_FIXES, "citation fixes")
    t = apply_pairs(t, SFOC_LANG, "SFOC language")
    t = apply_pairs(t, ORG_GENERALIZE, "generalization")
    t = apply_pairs(t, VERSION_BUMP, "version bump")
    t = cleanup(t)

    if is_contentjs:
        t = t.replace("// SSAR RPOC Content Data",
                      "// Sea to Sky SAR RPAS Program - RPOC Content Data")
        t = t.replace("// Generated: 2026-03-09",
                      "// Generated: 2026-03-09 | Updated: 2026-08-11 (v2.0 regulatory update)")

    with io.open(path, "w", encoding="utf-8") as f:
        f.write(t)

process("1_OPERATIONS_MANUAL.md", is_ops=True)
process("2_SAFETY_EMERGENCY_MANUAL.md", is_safety=True)
process("3_PEOPLE_EQUIPMENT_MANUAL.md")
process("4_FORMS_MAINTENANCE_MANUAL.md")
process("5_TRAINING_MANUAL.md")
process("docs/js/content.js", is_contentjs=True)
print("\nDone.")
