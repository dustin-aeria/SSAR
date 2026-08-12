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
