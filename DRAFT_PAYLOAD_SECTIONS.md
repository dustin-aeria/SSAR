# DRAFT: Payload Delivery Manual Sections

| Document | DRAFT-PAYLOAD-SECTIONS |
|----------|------------------------|
| Status | Draft for review. Not yet spliced into the manual suite. |
| Date | August 2026 |
| Covers | Plan deliverables 1.1, 1.2, 2.1, 2.2, 2.3 |
| Author | Dustin Wales |
| Questions, updates, inquiries | Dustin Wales, 604-849-2345 |

> **Reviewer note.** The risk assessment in Part B produces a better result than the implementation plan assumed. Running SORA 2.5 with the actual tables gives **SAIL II with low containment** for the FlyCart 30 in remote terrain, not the SAIL III the plan anticipated. The reasoning is set out in full so it can be checked. The FlyCart 100 does not reach the same result by the default method; see B.9.

---

# PART A: Operations Manual Section (new Section 8, existing 8 onward renumber)

## 8. Payload Delivery Operations

### 8.1 Purpose and Scope

Payload delivery is the carriage and release of equipment or supplies to a subject or team by RPAS. Typical Program applications are resupply to a stranded but stable subject (shelter, warmth, water, food, radio, medical kit), equipment ferry to a technical rescue site, and repeat delivery runs where helicopter support is unavailable or grounded by weather or darkness.

This Section applies to any delivery conducted with a **medium remotely piloted aircraft**, defined by CAR 900.01 as an aircraft with an operating weight of more than 25 kg and not more than 150 kg. Delivery using a small RPA (250 g to 25 kg) with a manufacturer-declared release mechanism is conducted under the general provisions of Sections 5 and 7 and does not require this Section, though 8.6 to 8.9 remain sound practice.

### 8.2 Operating Weight and the 150 kg Ceiling

**Operating weight** is the weight of the aircraft at any point during the flight, **including any payload and any safety equipment** carried or connected (CAR 900.01). Class is therefore determined by the loaded aircraft, not the empty aircraft.

> **Program rule: operations are planned and flown so that operating weight never exceeds 150 kg.** An aircraft configured or loaded above 150 kg falls outside CARs Part IX Subpart 1 entirely, requires a Special Flight Operations Certificate under CAR 903.01(a), and is not authorized by this documentation.

For reference, the current reference types:

| Aircraft | Empty weight | Maximum takeoff weight | Class |
|----------|--------------|------------------------|-------|
| DJI FlyCart 30 | Approximately 65 kg with two batteries | 95 kg | Medium RPA |
| DJI FlyCart 100 | 55.2 kg with lifting system; 60.2 kg with winch, excluding batteries | 149.9 kg configuration. A 170 kg performance specification exists and **must not be used**, as it exceeds the Part IX ceiling | Medium RPA at or below 150 kg |

Payload capacity is reduced by altitude and temperature. Load planning uses the manufacturer's altitude and temperature derating tables for the conditions on the day, not the sea-level maximum.

### 8.3 Operating Authority

The Core Operating Rule applies unchanged: fly within the parameters your pilot certificate allows, or under a valid SFOC held by your Organization.

| Operation | Division | Authority | Pilot certificate | Reference |
|-----------|----------|-----------|-------------------|-----------|
| VLOS, uncontrolled airspace, 500 ft or more from uninvolved persons | V | Pilot certificate, plus declaration per 8.4 | Advanced or Level 1 Complex | CAR 901.62(d) |
| VLOS, uncontrolled airspace, less than 500 ft but at least 100 ft from uninvolved persons | V | Pilot certificate, plus declaration per 8.4 | Advanced or Level 1 Complex | CAR 901.62(e) |
| VLOS, less than 100 ft from uninvolved persons | V | Pilot certificate, plus declaration per 8.4 | Advanced or Level 1 Complex | CAR 901.62(f) |
| VLOS in controlled airspace | V | Pilot certificate, plus ATS authorization and declaration | Advanced or Level 1 Complex | CAR 901.62(g), 901.71 |
| BVLOS, uncontrolled airspace, at least 1 km from any populated area | VI | Organization RPOC | Level 1 Complex | CAR 901.87(a) |
| BVLOS over a sparsely populated area, or less than 1 km from a populated area | Not available to medium RPA | Small aircraft only | n/a | CAR 901.87(b) |

Two points that differ from small-aircraft operations and are easy to get wrong:

1. **Medium RPA BVLOS is more restricted, not less.** The sparsely populated allowance in 901.87(b) is available to small aircraft only. A medium aircraft flying BVLOS must remain at least 1 km from any populated area (more than 5 people per km²) for the whole flight, including the ground risk buffer.
2. **No new pilot certificate is required.** The Advanced certificate covers aircraft up to 150 kg; TP 15263, the knowledge requirement referenced by CAR 901.64, applies to aircraft from 250 g up to and including 150 kg. Program type training and competency sign-off remain mandatory regardless (Section 2.5).

### 8.4 Declaration Requirement

No Division V medium RPA operation listed in 8.3 may be conducted unless a declaration has been made to the Minister under CAR 901.194 in respect of that model and each applicable technical requirement of Standard 922 (CAR 901.69(e) to (h)). Division VI BVLOS carries the equivalent requirement under CAR 901.95.

For the closest-proximity operations, CAR 901.69(f) and (g), the declaration is valid only if an acceptance letter was issued for that model under CAR 901.196 within the preceding two years (CAR 901.194(3)).

> **Before any delivery operation, the Chief Pilot confirms that a current declaration exists covering the specific aircraft model and the specific operation intended.** Where no applicable declaration exists, the operation requires an SFOC. The Organization's declaration status for each registered aircraft is recorded in its certificate register (Section 2.2).

### 8.5 Additional Regulatory Limits for Medium RPA

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

### 8.6 Delivery Methods

| Method | Description | Regulatory treatment | Program status |
|--------|-------------|----------------------|----------------|
| Cargo box, land and release | Aircraft lands, ground party or subject unloads, aircraft departs | Standard payload carriage | **Preferred where a landing site exists** |
| Winch | Cargo lowered on a cable, releasing automatically on touchdown | Permitted only when conducted per the operating manuals (CAR 901.43(1)(d)) | Permitted, procedure at 8.8 |
| Free drop | Payload released in flight to fall to the ground | Engages CAR 901.50; the Program cannot assure that a dropped object will not create a hazard | **Not authorized** without a documented justification and Chief Pilot approval for the specific mission |

### 8.7 Crew Configuration

Delivery operations require a larger crew than search operations. Minimum crew:

| Role | Responsibility |
|------|----------------|
| Pilot in Command | Flies the aircraft; go/no-go; final release authority |
| Visual Observer | Airspace and ground watch; maintains VLOS where required |
| Loadmaster | Payload weight, securing, and centre of gravity; confirms load figures to the PIC; supervises loading area |
| Ground party (at delivery site) | Confirms the delivery site is clear, receives the load, confirms release, keeps persons clear |

Where the delivery site cannot be attended by a ground party, the delivery is treated as a release into an unattended area and the site must be confirmed clear by the crew before release.

### 8.8 Normal Procedures

#### 8.8.1 Mission Planning

- [ ] Confirm the mission is within the documented mission set (8.1); if not, Chief Pilot approval required
- [ ] Confirm operating authority available (8.3) and current declaration (8.4)
- [ ] Calculate operating weight including payload, batteries, and safety equipment; confirm at or below 150 kg and within the manufacturer's limit for altitude and temperature
- [ ] Confirm route maintains at least 1 km from any populated area if BVLOS
- [ ] Confirm forecast visibility against 901.34(2) and (3)
- [ ] Identify launch site, delivery site, and at least one alternate landing site
- [ ] Confirm ground party communications

#### 8.8.2 Launch Site

- [ ] Area adequate for the aircraft's footprint with propellers unfolded, plus the manufacturer's propeller safe distance (3.5 m for the FlyCart 30)
- [ ] Surface firm and level; loose debris cleared
- [ ] Approach and departure paths clear of wires, canopy, and terrain
- [ ] Cordon established at the separation required by 8.5; uninvolved persons excluded
- [ ] Signage and visual observer positioned to prevent approach

#### 8.8.3 Loading

- [ ] Payload contents recorded and checked against the prohibited categories (CAR 901.43(1))
- [ ] Payload secured so it cannot shift in flight
- [ ] Weight confirmed by the loadmaster and stated to the PIC
- [ ] Centre of gravity within limits; aircraft weight and centre-of-gravity detection confirms a balanced load where the system provides it
- [ ] Cargo box latched, or winch hook engaged and load stable

#### 8.8.4 Flight

- [ ] Hover check at low altitude before departure; confirm handling with the load
- [ ] Climb and cruise per the profile planned; avoid abrupt manoeuvres with a slung load
- [ ] Monitor for load swing; where the system provides swing control, confirm it is active
- [ ] Monitor battery margin against the return requirement, remembering that a delivered load changes the aircraft's performance for the return leg

#### 8.8.5 Delivery

- [ ] Confirm delivery site clear of persons not involved, and that the ground party is in position and ready
- [ ] Confirm the area below the aircraft is clear before descent or release
- [ ] Ground party confirms readiness by the agreed call
- [ ] Release or land per the method selected
- [ ] Confirm release complete and the aircraft is clear of the load before departing
- [ ] Ground party confirms receipt

#### 8.8.6 Winch Operations

Winch operations are conducted **strictly in accordance with the manufacturer's operating manual**, which is the condition on which CAR 901.43(1)(d) permits them at all. In particular:

- Cable descent and retraction speeds per the manual
- Swing control engaged where provided
- Cable length appropriate to the terrain and the hover height; never exceeding the manual's maximum
- The cut-cable function is used only where the load is entangled or the aircraft is otherwise endangered. Cutting is a last resort; the falling load must be considered before the cut is made
- After any use of cut-cable protection, the aircraft is grounded pending manufacturer-specified inspection or service

### 8.9 Abort Criteria

The delivery is aborted, and the load returned or the flight terminated at a safe location, if any of the following occurs:

- Uninvolved persons enter the launch, flight, or delivery area and cannot be cleared
- Load swing that cannot be controlled
- Weather deteriorates below the limits of 8.5, including the 901.34(2) visibility relationship
- Ground party loses communications or cannot confirm the site is clear
- Battery margin falls below that required for return plus reserve
- Any aircraft warning affecting propulsion, positioning, or the payload system

---

# PART B: Safety and Emergency Manual Section (new Section 3.11)

## 3.11 Risk Assessment: Payload Delivery with Medium RPA

### 3.11.1 Scope and Relationship to Section 3

Sections 3.1 to 3.10 assess Program operations conducted with small RPA in the 1 m, 25 m/s class. **Those assessments do not extend to medium RPA.** A FlyCart-class aircraft differs in characteristic dimension and mass by enough to change the intrinsic ground risk, the containment requirement, and potentially the SAIL. This Section is a separate SORA 2.5 assessment for payload delivery operations and is read alongside, not in place of, Section 3.

### 3.11.2 Step 1: Operational Description

| Element | Description |
|---------|-------------|
| Operation | Carriage and release of supplies or equipment to a subject or team during a SAR tasking |
| Aircraft | Medium RPA, reference types DJI FlyCart 30 and FlyCart 100 (Operations Manual 8.2) |
| Environment | Sea to Sky corridor backcountry and alpine; remote to lightly populated terrain; municipalities excluded |
| Altitude | 400 ft AGL maximum |
| Visual | VLOS under Division V, or BVLOS under Division VI at least 1 km from any populated area |
| Airspace | Uncontrolled (Class G) |
| Operational volume | Flight geography plus contingency volume plus ground risk buffer, per CAR 900.01, buffer at least 1:1 with planned maximum altitude |

### 3.11.3 Step 2: Intrinsic Ground Risk Class

SORA 2.5 Table 2 is entered on **maximum characteristic dimension** (for a multi-rotor, the maximum distance between blade tips) and **maximum speed**, taking the leftmost column matching both.

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

Program planning cases:

- **Remote alpine and backcountry delivery**, the expected majority of taskings: fewer than 5 people/km², **iGRC 3**
- **Lightly populated valley terrain**, still outside municipalities: fewer than 50 people/km², **iGRC 4**

### 3.11.4 Step 3: Final GRC

Mitigations are applied in the numerical sequence of SORA 2.5 Table 5.

**M1(A) sheltering: NOT APPLIED.** The credit requires that the aircraft would not be expected to penetrate a standard dwelling. A 95 kg to 150 kg aircraft would. Claiming this credit would not be defensible.

**M1(B) operational restrictions: NOT APPLIED** as a primary claim, though the Program's restriction to SAR taskings in remote terrain would support it if substantiated to medium robustness under Annex B.

**M1(C) ground observation, low robustness, minus 1: APPLIED.** As in Section 3.5.2, SAR ground presence provides observation of the area, with radio communication to the crew and clear abort criteria. For delivery the case is stronger than for search, because the delivery site is attended by a ground party who confirms it is clear before release.

**M2 effects of impact dynamics reduced, medium robustness, minus 1: APPLIED, subject to evidence.** Both reference types carry an **integrated parachute** designed to deploy at low altitude at maximum takeoff weight. This is a genuine impact-dynamics mitigation that the Program's small aircraft do not have and for which Section 3.5.3 records no claim. Claiming it at medium robustness requires the supporting evidence set out in SORA Annex B: manufacturer data on deployment envelope and descent rate, evidence that the system is installed and serviceable, and inclusion of parachute inspection and repack in the maintenance program (Forms Manual). **If that evidence is not assembled, M2 is not claimed and the final GRC is one higher throughout this assessment.**

Where a mitigation changes the descent behaviour of the aircraft, the ground risk buffer is re-evaluated (SORA 2.5, Step 3 guidance). A parachute descent has a different footprint from a ballistic one, and is wind-dependent; the buffer is sized on the manufacturer's descent rate and the wind limit for the day, and never smaller than the 1:1 minimum required by CAR 900.01.

| Scenario | iGRC | M1(C) | M2 | Final GRC |
|----------|------|-------|----|-----------|
| Remote terrain, fewer than 5 people/km², parachute evidence in place | 3 | -1 | -1 | **1** |
| Remote terrain, fewer than 5 people/km², no M2 claim | 3 | -1 | 0 | **2** |
| Lightly populated, fewer than 50 people/km², parachute evidence in place | 4 | -1 | -1 | **2** |
| Lightly populated, fewer than 50 people/km², no M2 claim | 4 | -1 | 0 | **3** |

### 3.11.5 Steps 4 and 5: Air Risk

The airspace is uncontrolled, non-airport, rural, below 400 ft AGL, which gives an **initial ARC-b** as in Section 3.6.

For VLOS delivery, the strategic mitigation of SORA 2.5 Section 4.5.4 would reduce the initial ARC by one class, but the mitigation cannot reduce an ARC to ARC-a. The **residual ARC is therefore ARC-b** for both VLOS and BVLOS delivery operations.

### 3.11.6 Step 6: TMPR

From SORA 2.5 Table 6, residual ARC-b gives a **Low TMPR at low robustness**.

For VLOS delivery this is satisfied by the see-and-avoid deconfliction scheme with visual observers, with the caveat at Annex D that an observer is not assumed to detect traffic beyond 2 NM. For BVLOS delivery it is satisfied by visual observer detect and avoid conducted per Standard 923, as in Section 3.6.3, which also satisfies CAR 901.95(2) in lieu of a Standard 922.10 declaration.

### 3.11.7 Step 7: SAIL

From SORA 2.5 Table 7, final GRC against residual ARC-b:

| Scenario | Final GRC | Residual ARC | **SAIL** |
|----------|-----------|--------------|----------|
| Remote terrain, M2 claimed | 1 | b | **II** |
| Remote terrain, no M2 | 2 | b | **II** |
| Lightly populated, M2 claimed | 2 | b | **II** |
| Lightly populated, no M2 | 3 | b | **II** |

**All four cases reach SAIL II.** Table 7 assigns SAIL II to final GRC of 2 or less and to GRC 3 alike at ARC-b; the step to SAIL III occurs at GRC 4. This is a materially better outcome than the implementation plan anticipated, and it means the OSO burden at Section 3.8 carries across unchanged.

The margin should not be taken for granted. A delivery into terrain of fewer than 500 people/km² would give iGRC 5, and even with both mitigations a final GRC of 3, still SAIL II; but iGRC 6 territory (fewer than 5,000 people/km², which describes the edges of the corridor communities) would give a final GRC of 4 and **SAIL III**. The SAIL II result depends on staying in genuinely remote terrain.

### 3.11.8 Step 8: Containment

Adjacent area lateral limit: the distance flown in 3 minutes at maximum speed. At 20 m/s this is 3.6 km, which is less than the 5 km minimum, so **5 km applies**, the same figure as Section 3.7.3.

Sheltering is **not** assumed applicable for the adjacent area, for the same reason it is not claimed as M1(A): an aircraft of this mass would penetrate a standard dwelling. SORA 2.5 Table 10 (3 m UA without shelter assumption) therefore applies:

| Adjacent area average population density | Assemblies within 1 km | Containment at SAIL II |
|------------------------------------------|------------------------|------------------------|
| No upper limit | More than 400k | Out of scope |
| Fewer than 50,000 people/km² | 40k to 400k | High |
| Fewer than 5,000 people/km² | Fewer than 40k | Medium |
| Fewer than 500 people/km² | Fewer than 40k | **Low** |

The Sea to Sky adjacent areas relevant to backcountry delivery are far below 500 people/km² on average, and outdoor assemblies of 40,000 people do not occur within 1 km of the operating areas contemplated. **Containment robustness: LOW**, subject to the operational limits below being observed and verified during the site survey for each mission.

| Operational limit | Basis |
|-------------------|-------|
| Adjacent area average population density below 500 people/km² | Table 10 column selected |
| No outdoor assembly exceeding 40,000 people within 1 km of the operational volume | Table 10 column selected |

Low robustness containment is met by the operational volume definition, pre-programmed lost link and return behaviour, the parachute where fitted, and the emergency procedures of Section 2 as extended by 3.11.10.

### 3.11.9 The FlyCart 100 Exception

By the default method the FlyCart 100, at approximately 3.9 m between blade tips, does not fit the 3 m column and falls into the **8 m column**, which raises the intrinsic GRC by one across every density band (remote terrain becomes iGRC 4 rather than 3) and, more significantly, changes the containment table to Table 11, where SAIL II containment is Low only when the adjacent area average density is below 50 people/km², Medium below 500, and High below 5,000.

This is conservative in a way SORA itself anticipates. Table 2's 8 m column assumes a maximum speed of 75 m/s; the FlyCart 100 flies at 20 m/s, less than a third of that, so the impact energy that drives the column assignment is substantially overstated. SORA 2.5 Section 4.2.4 provides for exactly this case under "Non-typical cases", allowing an applicant to calculate the iGRC using the mathematical model in Annex F Section 1.8 and to select the column matching the actual risk.

**Recommendation:** if the FlyCart 100 is adopted, run the Annex F Section 1.8 calculation rather than accepting the 8 m column, and present the result to Transport Canada as part of the operational approval. Until that calculation is done, plan FlyCart 100 operations on the conservative 8 m column figures.

### 3.11.10 Emergency Procedures Specific to Payload Operations

To be added to Safety Manual Section 2:

| Situation | Immediate actions |
|-----------|-------------------|
| Load swing developing | Reduce speed; avoid control inputs that amplify the oscillation; confirm swing control active; if divergent, descend and land or set the load down at the nearest safe point |
| Winch cable entangled | Attempt controlled release per the manual; if the aircraft is endangered, use cut-cable protection, having first confirmed the area below is clear; ground the aircraft afterward pending inspection |
| Loss of link with a load aboard | Aircraft executes pre-programmed lost link behaviour; ground party and all crew clear the return path and the area beneath it; treat the load as a falling hazard until the aircraft is recovered |
| Parachute deployment | Announce; clear all persons from the descent footprint, which is wind-dependent and can be substantially displaced from the aircraft's position at deployment; treat the aircraft and load as a single hazard until secured |
| Forced landing with cargo | Select the landing point for the combined mass; expect the aircraft not to be recoverable by hand; secure a cordon commensurate with a 95 kg to 150 kg aircraft |
| Any incident involving the aircraft | Cordon substantially larger than that used for small aircraft; batteries of this size present a significant thermal hazard if damaged; do not approach a damaged battery pack |

An occurrence involving a medium RPA meets the reporting criteria of CAR 901.49 on the same terms as any other aircraft, and operations cease until analysis and corrective action are complete.

---

## Sections Still To Draft

| Deliverable | Manual | Status |
|-------------|--------|--------|
| 2.4 Site survey additions | Site Survey | Not started |
| 3.1 to 3.4 Training, competency, loadmaster, awareness | Training, People | Not started |
| 4.1 to 4.3 Maintenance, checklists, records | Forms | Not started |

*This draft is for review. On approval the sections above are spliced into the manual suite, content.js, and the SQL sync.*

---

# PART C: Site Survey Additions

To be added to the Master Site Survey (6_SITE_SURVEY_MASTER.md).

## 2.1 Flight Profiles (revised payload paragraph)

Replace the existing payload delivery paragraph with the following, which ties the profile to the authority that permits it:

> **Payload delivery:** Carriage and release of supplies or equipment to a subject or team, conducted with a medium RPA under Operations Manual Section 8, or with a small RPA equipped with a manufacturer-declared release mechanism under Sections 5 and 7. The flight launches from a prepared site and proceeds to the delivery location, where the load is set down by landing or lowered by winch. Free-drop release is not authorized without specific Chief Pilot approval. Medium RPA operations are limited to an operating weight of 150 kg including payload, require a current Standard 922 declaration for the model and operation, and maintain the separations and visibility limits of Operations Manual 8.5.

## 3.5 Launch and Delivery Site Requirements (new subsection)

Medium RPA impose site requirements the current survey does not contemplate. The Rapid Site Survey confirms these on scene.

| Requirement | Standard |
|-------------|----------|
| Launch area | Clear area accommodating the aircraft with arms and propellers unfolded, plus the manufacturer's propeller safe distance (3.5 m for the FlyCart 30), plus room for the loading party to work clear of the rotor arc |
| Surface | Firm and level, capable of supporting the loaded aircraft; loose snow, deep duff, and unconsolidated scree are unsuitable; loose debris cleared to prevent rotor wash projectiles |
| Rotor wash | Significantly greater than the small fleet. Assess for loose gear, tarps, tents, and casualty care in progress within the wash radius |
| Approach and departure | Clear paths in at least two directions where terrain allows, accounting for the reduced climb performance of a loaded aircraft |
| Cordon | Sized to the separation required by Operations Manual 8.5 (500 ft from uninvolved persons for VLOS unless the Division V declaration permits closer) |
| Delivery site | Clear of overhead obstruction for the descent; ground party positioned outside the descent footprint; for winch operations, clear of canopy and wires that could entangle the cable |
| Alternate landing sites | At least one identified before launch, per the aircraft's alternate landing site function where provided |

## 4.9 Hazards Specific to Medium RPA Operations (new subsection)

- **Mass and energy:** An aircraft of 95 kg to 150 kg presents a fundamentally different hazard from the small fleet. Cordons, abort decisions, and the treatment of any incident scene are sized accordingly.
- **Battery systems:** The battery packs are large and carry a significant thermal hazard if damaged. A damaged pack is not approached, is not moved, and is isolated until it can be assessed.
- **Suspended loads:** A load on a line is a hazard to anyone beneath it for the whole flight, not only at the delivery point. The flight path is planned to avoid overflight of persons wherever the terrain allows.
- **Parachute footprint:** Where a parachute deploys, the descent is wind-dependent and the aircraft may land well displaced from the point of deployment. The footprint is estimated from the manufacturer's descent rate and the wind on the day.
- **Reduced weather envelope:** The CAR 901.34(2) relationship between ground visibility and permitted distance, which applies to medium RPA only, will frequently bind before the general BVLOS weather minima do.
- **Site scarcity in corridor terrain:** Suitable launch areas for an aircraft of this size are far less common in Sea to Sky terrain than for the small fleet. Candidate sites near likely tasking areas are worth pre-identifying and recording in Appendix A as the survey matures.

## 7.7 Airspace Considerations for Medium RPA (new subsection)

Airspace treatment is unchanged in principle, with three additions:

- Medium RPA BVLOS must remain at least 1 km from any populated area for the entire operational volume including the ground risk buffer (CAR 901.87(a)). In the corridor this confines BVLOS delivery to backcountry and alpine terrain.
- Where the FlyCart 100 or a comparable aircraft is equipped with ADS-B, it is used for situational awareness in addition to, and not in place of, visual observers.
- The larger aircraft is more conspicuous to other airspace users, which is an advantage worth noting when coordinating with heli-ski, flight training, or industrial operators before an operation.

---

# PART D: Training and Competency Sections

## D.1 Training Manual, new Section 4.9: Medium RPA and Payload Delivery Training

### 4.9.1 Prerequisites

| Requirement | Standard |
|-------------|----------|
| Certificate | Advanced (CAR 901.64), or Level 1 Complex (CAR 901.90) where BVLOS delivery is intended |
| Program standing | Foundation and Advanced Training complete; current on at least one Program aircraft |
| Flight hours | Minimum 25 hours total Program flight time before commencing medium RPA training |
| Recommendation | Chief Pilot endorsement to enter the medium RPA stream |

### 4.9.2 Ground School (minimum 8 hours)

| Module | Duration | Content |
|--------|----------|---------|
| Regulatory framework | 90 min | Medium RPA definition and the 150 kg ceiling; operating weight including payload; Division V and VI authority; the declaration requirement; CAR 901.26(b) separation; CAR 901.34(2) visibility relationship; payload rules at 901.43 and 901.50 |
| Aircraft systems | 120 min | Airframe, propulsion, battery system and charging, positioning and RTK, obstacle sensing, parachute system, FPV and camera, alternate landing sites |
| Weight, balance and performance | 90 min | Operating weight calculation; centre of gravity; altitude and temperature derating; endurance and range with and without load; the changed performance of the return leg after release |
| Delivery systems | 90 min | Cargo mode loading and securing; winch operation per the manufacturer's manual; swing control; cut-cable protection and when it is justified; multi-drop systems where fitted |
| Risk and emergencies | 90 min | The payload SORA assessment in outline (Safety Manual 3.11); load swing; entanglement; parachute deployment and footprint; forced landing with cargo; battery thermal hazard; cordon sizing |
| Site and crew | 60 min | Launch and delivery site standards; crew roles including loadmaster; ground party coordination and release calls; abort criteria |

### 4.9.3 Flight Training Progression

Each stage is completed to the Chief Pilot's satisfaction before the next begins. Stages 1 to 4 are conducted in benign terrain before any mountain operation.

| Stage | Content | Minimum |
|-------|---------|---------|
| 1. Handling, unloaded | Takeoff, hover, basic manoeuvring, landing, RTH, alternate landing site use | 5 flights |
| 2. Handling, light load | As stage 1 at approximately one third of maximum payload; hover check discipline | 5 flights |
| 3. Handling, full load | As stage 1 at maximum planned payload for the conditions; performance and endurance observed against calculation | 5 flights |
| 4. Delivery, method-specific | Cargo land-and-release and, where used, winch delivery to a marked site with a ground party | 5 deliveries of each method used |
| 5. Emergency drills | Simulated load swing recovery, simulated entanglement decision, lost link with load, forced landing site selection | Each drill demonstrated |
| 6. Mountain and operational | Delivery in representative terrain with a full crew, from tasking through to load receipt | 3 complete missions |

### 4.9.4 Competency Standard

The candidate demonstrates:

- Correct calculation of operating weight, including payload and safety equipment, with an independent check by the loadmaster
- Correct determination of authority and confirmation of the declaration before flight
- Correct application of the separation and visibility limits, including the 901.34(2) relationship
- Stable handling with a load, with no divergent swing
- Correct and timely abort decisions when criteria are met
- Clear communication with the ground party through the delivery sequence
- Sound emergency decision making, particularly the cut-cable judgment

Assessment is by a Flight Reviewer or the Chief Pilot, recorded per CAR 901.223.

### 4.9.5 Currency

| Requirement | Interval |
|-------------|----------|
| Delivery flight in the type flown | At least one every 90 days |
| Emergency drill set | At least annually |
| Ground school refresh | On any change to the aircraft, the delivery system, or the regulatory framework |

A pilot current on the M30T or M4TD is **not** thereby current on a medium RPA. Currency is per type and per delivery method.

## D.2 People and Equipment Manual, new Section 1.6: Loadmaster

### Role

The Loadmaster is responsible for everything about the payload: what it is, what it weighs, how it is secured, and whether the aircraft is safe to fly with it.

### Required credentials

| Requirement | Standard |
|-------------|----------|
| Program standing | Trained Program member; Visual Observer qualification recommended |
| Training | Medium RPA ground school modules on weight and balance, delivery systems, and site and crew (Training Manual 4.9.2) |
| Assessment | Practical assessment on load preparation, weight verification, and securing, signed off by the Chief Pilot |
| Currency | Participation in at least one delivery operation or drill every 12 months |

### Responsibilities

1. Confirms the payload contents are permitted under CAR 901.43(1) and Program policy
2. Determines payload weight by measurement, not estimate, and states it to the PIC
3. Confirms total operating weight is within the aircraft limit for the conditions and at or below 150 kg
4. Secures the load so it cannot shift, and confirms centre of gravity within limits
5. Controls the loading area and keeps persons clear of the rotor arc during loading
6. Confirms the load is released and the aircraft is clear before the aircraft departs the delivery point where the loadmaster is present
7. Records the payload details for the delivery log

The Loadmaster has the authority to stop a loading operation and to refuse a load that cannot be verified or safely secured.

## D.3 People and Equipment Manual, Section 3.7 addition: Medium RPA Competency Records

Add to the type competency table:

| Competency | Standard | Assessed by | Date | Expiry |
|------------|----------|-------------|------|--------|
| Medium RPA type training (specify type) | Training Manual 4.9 | Chief Pilot or Flight Reviewer | | 24 months |
| Payload delivery, cargo method | Training Manual 4.9.3 stage 4 | Chief Pilot or Flight Reviewer | | 24 months |
| Payload delivery, winch method | Training Manual 4.9.3 stage 4 | Chief Pilot or Flight Reviewer | | 24 months |
| Loadmaster | People Manual 1.6 | Chief Pilot | | 24 months |

## D.4 Training Manual, Section 12 addition: Awareness Training for Payload Operations

Add to Program Awareness Training under 12.3.4 and 12.3.5:

**What is different about the big aircraft.** The Program may operate delivery aircraft weighing 95 kg to 150 kg fully loaded, far larger than the search drones most members have seen. They are louder, their rotor wash is strong enough to move loose gear and disturb casualty care, and the cordon around them is much larger.

**How to help.**

- Stay outside the cordon at all times unless the crew tasks you to assist
- Secure loose gear, tarps, and tent flies before launch or landing near your position
- If a load is being lowered on a line, never stand under it and never reach for it until the crew calls it clear
- Only handle a delivered load when the crew or ground party tells you to
- If you hear the call for a parachute deployment, move away from the area beneath the aircraft immediately and keep clear; the aircraft may land well away from where it started descending

**What not to do.**

- Do not approach a landed delivery aircraft until the props are stopped and the PIC clears you
- Do not attempt to steady, guide, or catch a suspended load
- Do not handle the battery packs
- If the aircraft is damaged in any way, keep clear and keep others clear; the batteries present a fire hazard and are not to be approached

---

# PART E: Maintenance, Checklists and Records

## E.1 Forms and Maintenance Manual, Section 1 addition: Medium RPA in the Maintenance Program

Medium RPA are entered in the Organization's aircraft register and maintained under the Maintenance Control Manual on the same basis as any other registered aircraft (CAR 901.221). Before a medium RPA is tasked, the Person Responsible for RPAS Maintenance establishes and records:

| Item | Source |
|------|--------|
| Inspection schedule and intervals | Manufacturer's maintenance program provided under CAR 901.200(a) |
| Component life limits, including propellers, motors, and batteries | Manufacturer's documentation |
| Delivery system maintenance: cargo latches, winch mechanism, cable, hook | Manufacturer's documentation |
| Cable inspection criteria and retirement standard | Manufacturer's documentation; cable is inspected before and after every winch operation |
| Parachute inspection and repack interval | Manufacturer's documentation. **Where the parachute is claimed as an M2 mitigation in the risk assessment, this maintenance is mandatory, not optional, because the risk assessment depends on the system being serviceable** |
| Battery handling, charging, storage, and retirement | Manufacturer's documentation, adapted from the small-fleet procedures of Section 5 |
| Mandatory actions | Manufacturer notifications under CAR 901.200(b) |

## E.2 Forms and Maintenance Manual, Section 3 addition: Medium RPA Pre-Flight Inspection

Additional items over the standard pre-flight:

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

## E.3 Forms and Maintenance Manual, Section 4 addition: Payload Delivery Mission Checklist

### Load Card (completed by the Loadmaster before every delivery)

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

### Delivery Sequence Callouts

| Call | By | Response |
|------|----|----------|
| "Load secure, weight [X] kilograms" | Loadmaster | PIC: "Weight [X], within limits" |
| "Delivery site clear" | Ground party | PIC: "Copy, commencing approach" |
| "Below clear" | Ground party or VO | PIC: "Copy, descending" |
| "Load down" | Ground party | PIC: "Copy, releasing" |
| "Clear of load" | PIC | Ground party: "Copy, load received" |
| "DESCEND, DESCEND, DESCEND" | Any crew member | PIC executes emergency descent |
| "ABORT" | Any crew member | PIC discontinues the delivery |

## E.4 Forms and Maintenance Manual, Section 8 addition: Delivery Log

Retained for 12 months per CAR 901.223(1)(a), with the maintenance record retained 24 months per 901.223(1)(e).

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

## E.5 Web Tool

On approval, add to the quick access panel:

- A payload delivery emergency card covering load swing, entanglement and the cut-cable decision, parachute deployment, and forced landing with cargo
- The delivery sequence callouts from E.3

---

# Completion Status

| Deliverable | Manual | Status |
|-------------|--------|--------|
| 1.1 Weight class and authority | Operations 8.1 to 8.5 | Drafted (Part A) |
| 1.2 Payload SORA assessment | Safety 3.11 | Drafted (Part B) |
| 2.1 Operating procedures | Operations 8.6 to 8.9 | Drafted (Part A) |
| 2.2 Emergency procedures | Safety 3.11.10 | Drafted (Part B) |
| 2.3 Crew configuration | Operations 8.7 | Drafted (Part A) |
| 2.4 Site survey additions | Site Survey 2.1, 3.5, 4.9, 7.7 | Drafted (Part C) |
| 3.1 Type training syllabus | Training 4.9 | Drafted (Part D) |
| 3.2 Competency and currency | Training 4.9.4, People 3.7 | Drafted (Part D) |
| 3.3 Loadmaster role | People 1.6 | Drafted (Part D) |
| 3.4 Awareness training update | Training 12 | Drafted (Part D) |
| 4.1 Maintenance program | Forms 1, 3 | Drafted (Part E) |
| 4.2 Checklists | Forms 3, 4 | Drafted (Part E) |
| 4.3 Records | Forms 8 | Drafted (Part E) |
| 1.3 SFOC package | n/a | **Contingent on Phase 0.1 declaration answer** |
| Phase 5 validation | n/a | **Operational, not documentation** |

All documentation deliverables in the implementation plan are now drafted. Two items remain open by design: the SFOC package, which is only needed if no Standard 922 declaration covers the intended operation, and Phase 5 validation, which is flight and exercise work rather than drafting.
