# SSAR Forms & Maintenance Manual

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
7. [Maintenance Records](#7-maintenance-records)
8. [Document Control](#8-document-control)
9. [Quick Reference Cards](#9-quick-reference-cards)

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

- All aircraft firmware must be maintained at current stable versions
- Beta/experimental firmware is not authorized for SAR operations
- Firmware updates must be tested before operational deployment
- Update logs must be maintained for each aircraft

### 6.2 Firmware Version Tracking

| Aircraft | Serial # | Current FW | Update Date | Updated By |
|----------|----------|------------|-------------|------------|
| M30T-001 | [Serial] | [Version] | [Date] | [Name] |
| M30T-002 | [Serial] | [Version] | [Date] | [Name] |
| M4TD-001 | [Serial] | [Version] | [Date] | [Name] |
| M4TD-002 | [Serial] | [Version] | [Date] | [Name] |

### 6.3 Firmware Update Procedure

1. Check DJI release notes for new firmware version
2. Review changes for any safety-related items
3. Download firmware to DJI Pilot 2 or RC controller
4. Perform update in controlled environment
5. Verify successful update and system function
6. Conduct test flight if update includes flight control changes
7. Record update in firmware log
8. Brief all pilots on any operational changes

---

## 7. Maintenance Records

### 7.1 Maintenance Schedule

#### 7.1.1 Pre-Flight Inspection (Every Flight)

- Visual inspection of airframe for damage
- Propeller condition check (no chips, cracks, wear)
- Battery charge level and health indicator
- Camera/gimbal function test
- Control surface response check
- Compass calibration if required
- Firmware version verification

#### 7.1.2 Post-Flight Inspection (Every Flight)

- Visual inspection for flight damage
- Motor temperature check (should not be excessively hot)
- Battery condition and charge remaining
- Log flight data (time, location, anomalies)
- Clean sensors and lenses if needed

#### 7.1.3 Weekly Maintenance

- Detailed airframe inspection
- Propeller replacement assessment
- Battery storage charge verification
- Remote controller condition check
- Firmware update check
- Flight log backup

#### 7.1.4 Monthly Maintenance

- Complete system diagnostic
- Motor and ESC inspection
- Landing gear inspection
- Full sensor calibration
- Battery cycle count review
- Accessory inspection (charging station, cases)

#### 7.1.5 Annual Maintenance

- Comprehensive airframe inspection
- Full propulsion system inspection
- Battery retirement assessment (>70% degradation)
- Replace worn components
- Manufacturer service if available
- Documentation review and update

### 7.2 Maintenance Log Template

| Date | Aircraft | Type | Description | Technician | Sign-off |
|------|----------|------|-------------|------------|----------|
| 2026-03-03 | M30T-001 | Pre-flight | Standard inspection - all OK | D. Wales | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

---

## 8. Document Control

### 8.1 Document Approval

| Role | Name | Date |
|------|------|------|
| Accountable Executive | Dustin Wales | 2026-03-09 |
| Chief Pilot | Dustin Wales | 2026-03-09 |

Signatures on file. Original signed document retained per QAP-001.

### 8.2 Amendment / Revision History

| Date | Version | Description of Change | Approved By |
|------|---------|----------------------|-------------|
| 2026-03-09 | 1.0 | Initial consolidated Forms & Maintenance Manual | Dustin Wales |
| | | | |
| | | | |

### 8.3 Document Sources

This consolidated Forms & Maintenance Manual incorporates content from the following source documents:

| Document ID | Document Title |
|-------------|----------------|
| CHK-001 | Mission Checklists |
| PRO-101 | Pre-Flight & Post-Flight Procedures |
| MCM-001 | Maintenance Control Manual |
| MAINT-001 | Maintenance Records |
| MNT-002 | Firmware Updates & Battery Care |

---

## 9. Quick Reference Cards

### 9.1 Emergency Fly-Away Script

> **CRITICAL CONTACT: FIC Kamloops Direct Line: 250-376-7045**

When experiencing a fly-away or lost link emergency requiring ATC notification:

#### 9.1.1 Fly-Away Communication Script

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

#### 9.1.2 DESCEND Protocol (Fly-Away)

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

### 9.2 Traffic De-Conflict Quick Reference

#### 9.2.1 De-Conflict Scenarios Matrix

| Scenario | Situation | Action | Priority |
|----------|-----------|--------|----------|
| **1** | Manned aircraft approaching operating area | LAND IMMEDIATELY or descend below 50' AGL | Manned aircraft ALWAYS has right-of-way |
| **2** | Helicopter operating in same area | Coordinate via radio; maintain minimum 500' horizontal separation | Coordinate before launch |
| **3** | Fixed-wing traffic transiting area | Descend and hold position until traffic clear | Monitor and yield |
| **4** | Multiple RPAS in same airspace | Stagger altitudes by minimum 100'; establish communication | Coordination required |
| **5** | Emergency aircraft (MEDEVAC, etc.) | IMMEDIATE LAND - no exceptions | Land and disable immediately |

#### 9.2.2 Traffic Communication

**When traffic spotted:**
> "TRAFFIC! [Position - clock direction], [altitude estimate], [aircraft type if known], [direction of travel]"

**Example:**
> "TRAFFIC! 2 o'clock, low, helicopter, moving north to south"

**Response protocol:**
1. PIC acknowledges traffic
2. PIC announces intended action: "DESCENDING" or "LANDING" or "HOLDING"
3. VO confirms traffic clear before resuming

#### 9.2.3 Altitude Quick Reference

| Airspace | Max RPAS Altitude | Notes |
|----------|-------------------|-------|
| Time-Critical SAR (no ATC) | 400' AGL | STSC-004 parameters |
| STSC-003 (with 24hr ATC notice) | Up to 1000' AGL | ATC notification required |
| STSC-004 BVLOS | 400' AGL | Low-risk corridor operations |
| Near airports (controlled) | 0' without authorization | Requires specific authorization |
| Near heliports | 0' without coordination | Direct coordination required |

---

### 9.3 Rapid Site Survey Checklist

**5-Point Field Assessment for Time-Critical Operations**

Complete within 2-3 minutes for urgent SAR deployment:

| # | Check | Details | ✓ |
|---|-------|---------|---|
| **1** | **AIRSPACE** | Check for controlled airspace, NOTAMs, nearby airports/heliports | [ ] |
| **2** | **HAZARDS** | Identify power lines, towers, tall structures, moving equipment | [ ] |
| **3** | **TERRAIN** | Assess slopes, obstacles, landing zone clearance (min 3m radius) | [ ] |
| **4** | **PEOPLE** | Identify bystanders, establish safety perimeter (30m minimum) | [ ] |
| **5** | **WEATHER** | Wind speed/direction, visibility, precipitation, temperature | [ ] |

#### 9.3.1 Rapid Survey Decision Matrix

| Condition | Action |
|-----------|--------|
| All 5 checks PASS | Proceed to pre-flight |
| 1-2 checks MARGINAL | Proceed with documented mitigations |
| Any check FAIL | DO NOT FLY - relocate or stand down |

#### 9.3.2 Quick Weather Assessment

| Parameter | GO | CAUTION | NO-GO |
|-----------|-----|---------|-------|
| Wind (sustained) | <10 m/s | 10-15 m/s | >15 m/s |
| Gusts | <12 m/s | 12-18 m/s | >18 m/s |
| Visibility | >5 km | 3-5 km | <3 km |
| Ceiling | >500' AGL | 200-500' AGL | <200' AGL |
| Precipitation | None | Light | Moderate/Heavy |

---

### 9.4 Emergency Contacts Quick Reference

| Contact | Number | When to Use |
|---------|--------|-------------|
| **FIC Kamloops (Direct)** | 250-376-7045 | Fly-away, airspace emergency |
| **NAV CANADA** | 1-866-WXBRIEF | NOTAM, weather briefing |
| **Squamish SAR Base** | [Insert Number] | SAR coordination |
| **RCMP Squamish** | [Insert Number] | Ground emergency |
| **BC Ambulance** | 911 | Medical emergency |

---

### 9.5 Battery Status Quick Reference

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

*This document is part of the SSAR RPAS Operator Certificate (RPOC) documentation package.*
