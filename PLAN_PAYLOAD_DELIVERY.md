# Implementation Plan: Payload Delivery Operations

| Document | PLAN-PAYLOAD-01 |
|----------|-----------------|
| Status | Draft for review. Not yet program policy. |
| Date | August 2026 |
| Author | Dustin Wales |
| Questions, updates, inquiries | Dustin Wales, 604-849-2345 |
| Regulatory basis | CARs Part IX current to 2026-03-17, last amended 2026-01-05 (SOR/2025-70) |

---

## Part 1: Audit of the Current Documentation

### 1.1 How payload delivery currently appears

A line-by-line review of all six documents and the web tool found payload delivery mentioned in exactly two places:

| Location | Content | Assessment |
|----------|---------|------------|
| Site Survey 2.1 | A flight profile paragraph describing launch, hover above subject, release, return | Aspirational. Describes an operation the suite does not otherwise support |
| Training Manual 12.3.1 | One bullet in awareness training: "payload delivery where authorized" | Correctly hedged, but points at nothing |

There is no operating authority basis, no procedure, no risk assessment, no crew configuration, no training syllabus, no maintenance requirement, no checklist, and no form anywhere in the suite that addresses delivering a payload. The two mentions describe a capability the documentation does not actually authorize.

### 1.2 How the suite handles an operational type when it is done properly

Level 1 Complex BVLOS is the model to copy. It is not a section; it is a thread running through every document. Any new operational type must be built the same way or it will be incomplete:

| Layer | Where it lives | What it establishes |
|-------|----------------|---------------------|
| Authority | Ops 1.3.1, 2.4, 5.1 | Which certificate or SFOC permits it, and who may fly it |
| Regulatory conditions | Ops 5.3.1 | The specific CARs conditions that must be met |
| Operating limits | Ops 5.3.2 | Program limits tighter than the regulation |
| Procedures | Ops 6, 7, 13 | Site survey, flight planning, emergencies |
| Risk assessment | Safety 3 | iGRC, mitigations, ARC, SAIL, containment, OSOs |
| Crew | Ops 5.8 | Minimum and recommended crew for that operation type |
| Training | Training 4, 6; People 3.7 | Type training, competency standards, currency |
| Maintenance | Forms 1, 2, 3, 5, 6 | Inspection, battery, firmware, serviceability |
| Checklists and records | Forms 4, 8; People 3.7 | Pre-flight, post-flight, qualification records |
| Site survey | Site Survey 2.1, 4, 7 | Flight profile, hazards, airspace treatment |

**Ten layers. Payload delivery currently has one and a half.**

---

## Part 2: Regulatory Analysis

### 2.1 The weight class question, and why it is now favourable

This is the decisive finding. The January 2026 amendments (SOR/2025-70) introduced **medium remotely piloted aircraft** into CARs Part IX: an aircraft with an operating weight of more than 25 kg but not more than 150 kg (CAR 900.01). Subpart 1 now applies to small **and medium** RPA (CAR 901.01).

Before that amendment, anything over 25 kg fell outside the certificate framework entirely and required an SFOC for every flight. That is no longer the case.

Note that **operating weight** is defined as the weight of the aircraft at any point during the flight, **including any payload and any safety equipment** (CAR 900.01). The class is determined by loaded weight, not empty weight.

| Aircraft | Empty (approx.) | Max takeoff weight | Class |
|----------|-----------------|--------------------|-------|
| DJI FlyCart 30 | 65 kg with two batteries | 95 kg | Medium RPA |
| DJI FlyCart 100 | 55.2 kg with lifting system, 60.2 kg with winch, excluding batteries | 149.9 kg configuration; 170 kg performance specification | Medium RPA if operated at or below 150 kg. **Above 150 kg it leaves Part IX entirely** (CAR 903.01(a)) and requires an SFOC as a medium-complexity operation (CAR 903.02(3)(a)) |

> **Program rule to adopt:** operations are planned and conducted so that operating weight never exceeds 150 kg. An aircraft configured or loaded above 150 kg is outside this documentation and requires a separate SFOC.

### 2.2 What a medium RPA may do, and under what authority

| Operation | Division | Authority | Pilot | Reference |
|-----------|----------|-----------|-------|-----------|
| VLOS, uncontrolled airspace, 500 ft or more from uninvolved persons | V | Pilot certificate | Advanced (901.63) | 901.62(d) |
| VLOS, uncontrolled airspace, less than 500 ft but at least 100 ft from uninvolved persons | V | Pilot certificate | Advanced | 901.62(e) |
| VLOS, less than 100 ft from uninvolved persons | V | Pilot certificate | Advanced | 901.62(f) |
| VLOS in controlled airspace | V | Pilot certificate plus ATS authorization (901.71) | Advanced | 901.62(g) |
| BVLOS, uncontrolled airspace, at least 1 km from a populated area | VI | Organization RPOC | Level 1 Complex (901.89) | 901.87(a) |
| BVLOS over a sparsely populated area, or less than 1 km from a populated area | Not available | **Small RPA only** | n/a | 901.87(b) |

Two consequences worth flagging early:

1. **Medium RPA BVLOS is more restricted than small RPA BVLOS.** The sparsely populated allowance in 901.87(b) applies to small aircraft only. A medium aircraft flying BVLOS must remain at least 1 km from any populated area (more than 5 people per km²). In practice this is workable in the corridor backcountry and unworkable near the communities.
2. **The Advanced certificate covers medium RPA.** TP 15263, the knowledge requirement referenced by 901.55 and 901.64, is now titled for aircraft "250 g up to and including 150 kg". No new pilot certificate is required to fly a FlyCart VLOS. Type training and competency remain a Program requirement regardless.

### 2.3 Additional rules that bite specifically

| Rule | Requirement | Program impact |
|------|-------------|----------------|
| 901.26(b) | Medium RPA VLOS: at least 500 ft (152.4 m) horizontally from any person not involved, unless under Division V | Significantly larger separation than the 100 ft the Program currently applies. The Division V exception is what makes closer operation possible, and it needs the declaration below |
| 901.69(e) to (h) | A Standard 922 declaration must exist for that model, for that operation, before any Division V medium RPA operation | **This is the gating item. See 2.4** |
| 901.34(2) | If ground visibility is 4 miles or less, medium RPA VLOS is limited to a distance of half the ground visibility | New weather limit that does not apply to small aircraft. In corridor conditions this will frequently be the binding constraint |
| 901.43(1)(d) | A payload attached by a line is prohibited **unless** the operation is conducted in accordance with the operating manuals for the system | Winch operations are permitted, but only strictly per the manufacturer's manual. This must be written into the procedure |
| 901.43(1)(c) | No payload that could create a hazard to aviation safety or cause injury to persons | Governs what may be carried and how it is secured |
| 901.50 | No creating a hazard to persons or property by dropping an object from an aircraft in flight | Free-drop delivery needs a deliberate justification; winch or land-and-release is the defensible default |
| 903.02(4)(b) | Carrying a payload referred to in 901.43(1) is a **high-complexity** SFOC operation | If the Program ever needs to carry a hazardous payload or use a line outside the manufacturer's manual, that is a high-complexity SFOC, not a variation |
| 901.222 | A PIC must be designated for each Division VI operation | Applies to medium BVLOS as it does to small |

### 2.4 The gating item: Standard 922 declarations

Division V medium RPA operations require a declaration under CAR 901.194 in respect of that model and each applicable technical requirement of Standard 922 (CAR 901.69(e) to (h)). Division VI BVLOS requires the same under 901.95.

Further, for the closest-proximity operations (901.69(f) and (g)) and for small-RPA sparsely-populated BVLOS (901.87(b)), the declaration is only valid if an **acceptance letter** was issued for that model under 901.196 within the preceding two years (901.194(3)).

**Action required before anything else in this plan proceeds:** confirm whether a Standard 922 declaration exists for the FlyCart 30 and FlyCart 100 in Canada, covering the intended operations. Check the Transport Canada RPAS declaration list, and ask the dealer directly. If no declaration exists for the model and operation:

- The aircraft may still be operated under Division V at 500 ft or more from uninvolved persons only if a declaration covering 901.69(e) exists
- Without any applicable declaration, the operation requires an SFOC
- No amount of Program documentation substitutes for the manufacturer's declaration

This single question determines whether payload delivery is a certificate-based capability or an SFOC-based one, and everything downstream depends on the answer.

### 2.5 Risk assessment consequences

The Program's SAIL II rests on assumptions that a FlyCart breaks. This is not a paperwork detail; it is the substantive work of this project.

| Factor | Current fleet | FlyCart 30 | FlyCart 100 |
|--------|---------------|------------|-------------|
| Characteristic dimension | Within 1 m | Approximately 2.8 m unfolded | Approximately 3.2 m unfolded, 3.9 m tip to tip |
| Max speed | 23 m/s | 20 m/s | 20 m/s |
| SORA 2.5 Table 2 column | 1 m / 25 m/s | 3 m / 35 m/s | 3 m / 35 m/s |
| Kinetic energy at impact | Reference case for current GRC | Substantially higher | Substantially higher again |

Moving from the 1 m column to the 3 m column raises the intrinsic GRC for the same population density band. The consequences chain forward: a higher final GRC raises the SAIL, a higher SAIL raises the required OSO robustness levels and the containment requirement, and OSOs that are currently "not required" at SAIL II become required at SAIL III or above.

Working assumption to be confirmed by running the assessment: **expect SAIL III for payload operations**, with a correspondingly larger OSO burden. Do not assume the existing Safety Manual Section 3 covers these aircraft. It explicitly does not.

Mitigating factors available and worth claiming in the assessment:

- Both FlyCart models have an **integrated parachute** designed to deploy at low altitude at maximum takeoff weight. This is a legitimate M2 (impact dynamics) mitigation, which the current assessment does not claim because the small aircraft lack it
- Both have multi-sensor obstacle awareness; the FC100 adds LiDAR and ADS-B
- SAR ground presence continues to support M1(C) ground observation
- Delivery operations are typically point-to-point to a known location, which constrains the flight geography more tightly than a search pattern does

---

## Part 3: Phased Implementation Plan

### Phase 0: Decisions and verification (before any documentation work)

| # | Item | Owner | Why it blocks |
|---|------|-------|---------------|
| 0.1 | Confirm Standard 922 declaration status for the intended models and operations (see 2.4) | Program Lead | Determines certificate path versus SFOC path |
| 0.2 | Decide the operational envelope sought: VLOS only, or VLOS plus BVLOS | Program leads, three organizations | BVLOS adds the 1 km populated-area constraint and L1C pilot requirement |
| 0.3 | Decide delivery method: cargo box land-and-release, winch, or both | Program leads | Winch invokes 901.43(1)(d) and manufacturer-manual compliance; free drop invokes 901.50 |
| 0.4 | Confirm insurance will cover a 95 kg to 150 kg aircraft and its payload | Each Organization | People Manual 8.3 currently contemplates 1 to 5 kg aircraft |
| 0.5 | Confirm ownership and hosting model: which Organization owns the aircraft, who maintains it, who may task it | Three organizations | Determines whose RPOC, whose MCM, whose register |
| 0.6 | Define the mission set worth the investment | Program leads | See Phase 0 note below |

**Phase 0 note on mission set.** Worth being honest at the outset: a FlyCart is a large, heavy, slow-to-deploy aircraft with 12 to 18 minutes of endurance under load, requiring a large launch area and a 500 ft separation from uninvolved persons. The realistic SAR missions are resupply to a stranded but stable subject or team (shelter, warmth, food, water, radio, medical kit), equipment ferry to a technical rescue site, and repeat runs where a helicopter is unavailable or grounded by weather or darkness. Missions it does not suit include anything time-critical inside a populated area, anything requiring precision placement in tight terrain, and anything better served by the aircraft already in the fleet. Documenting the mission set narrowly makes the risk assessment defensible and the training tractable.

### Phase 1: Regulatory and risk foundation

**Deliverable 1.1: Weight class and authority determination**
New Operations Manual subsection under Section 4, stating the medium RPA definition, the 150 kg ceiling as a Program rule, and the authority table from 2.2 above.

**Deliverable 1.2: Payload delivery SORA assessment**
New Safety Manual Section 3 subsection, or a standalone annex, running the full SORA 2.5 process for the payload configuration: iGRC from the 3 m column, M1(C) and M2 (parachute) mitigations, ARC determination, SAIL, containment at the larger adjacent-area distance implied by the aircraft, and the OSO table at whatever SAIL results. This is the largest single piece of work in the plan and should not be compressed.

**Deliverable 1.3: SFOC application package, if Phase 0.1 requires it**
If no declaration covers the intended operation, assemble the medium or high complexity SFOC application per CAR 903.02(7): detailed operational plan, ground and air risk assessment, crew certificates, standard crew procedures, maintenance instructions, and detect-and-avoid description.

### Phase 2: Operating procedures

**Deliverable 2.1: Operations Manual, new Section on payload delivery operations**
Covering: authority and pilot requirements; the 500 ft separation rule and how the launch and delivery sites are secured to achieve it; the 901.34(2) visibility limit; load planning including weight and centre of gravity confirmation; cargo securing; winch procedures strictly per the manufacturer's manual, including swing control, descent rate, and cable cut protection; delivery site selection and marking; ground party coordination and the signal for cargo release; abort criteria; and post-delivery confirmation.

**Deliverable 2.2: Emergency procedures**
Safety Manual additions for: load shift or swing in flight; cable entanglement and the cut-cable decision; parachute deployment criteria and the debris footprint that follows; loss of link with a slung load; forced landing with cargo aboard; and the substantially larger cordon required around an incident involving a 95 kg to 150 kg aircraft.

**Deliverable 2.3: Crew configuration**
Payload operations need a larger crew than the current table contemplates: PIC, at least one VO, a loadmaster responsible for weight, securing, and centre of gravity, and a ground party at the delivery site. Add to Operations Manual 5.8.

**Deliverable 2.4: Site survey additions**
Master Site Survey additions covering launch site requirements for an aircraft of this size (area, surface, approach and departure paths, 3.5 m propeller safe distance on the FC30), delivery site criteria, and the treatment of the 500 ft separation in populated corridor terrain.

### Phase 3: Training and competency

**Deliverable 3.1: Type training syllabus**
Training Manual addition: ground school on the aircraft and its systems, weight and balance, winch or cargo system operation, emergency procedures, and a supervised flight progression from unloaded handling through progressively heavier loads to full-load delivery.

**Deliverable 3.2: Competency standards and currency**
People Manual addition mirroring the existing type competency tables, plus a currency requirement specific to payload operations. A pilot current on the M30T is not thereby current on a FlyCart.

**Deliverable 3.3: Loadmaster role**
New role definition, responsibilities, and training standard. This role does not currently exist in the People Manual.

**Deliverable 3.4: Awareness training update**
Training Manual Section 12 addition so that non-program members understand the larger aircraft, the wider cordon, the danger of a suspended load, and never approaching or handling a load without direction.

### Phase 4: Maintenance and records

**Deliverable 4.1: Maintenance program**
Forms Manual additions: inspection schedule, component life limits, battery handling for the substantially larger battery system, winch and cable inspection criteria including cable retirement, and parachute inspection and repack intervals per the manufacturer.

**Deliverable 4.2: Checklists**
Pre-flight, load, and post-flight checklists specific to the aircraft and delivery method.

**Deliverable 4.3: Records**
Delivery log capturing payload description, weight, delivery location, method, and outcome, retained per CAR 901.223.

### Phase 5: Validation before operational use

- Tabletop exercise of the full mission profile with all three organizations
- Progressive flight testing: unloaded, light load, full load, each in benign terrain before mountain use
- Delivery rehearsal with a ground party, including the release signal and abort call
- Emergency drills: cable cut, load swing, forced landing with cargo
- Sign-off by each Organization's Chief Pilot before the capability is declared operational

---

## Part 4: Openness to Other Systems

Consistent with the aircraft eligibility approach adopted in Operations Manual 4.1, this capability is written around **criteria, not models**. The FlyCart 30 and FlyCart 100 are the reference types because they are the most likely systems for SAR use today, not because they are the only permitted ones.

Any aircraft may be used for payload delivery under this documentation when it meets the general eligibility criteria of Operations Manual 4.1 **and** the following additional payload-specific criteria:

| Criterion | Requirement |
|-----------|-------------|
| Weight class | Operating weight, including payload, does not exceed 150 kg; the aircraft is registered and marked |
| Declaration | Standard 922 declaration in place covering the intended operation, or the operation is conducted under a valid SFOC |
| Release mechanism | Manufacturer-supplied or manufacturer-approved, with documented operating instructions; line-attached payloads operated strictly per the operating manuals (CAR 901.43(1)(d)) |
| Risk assessment | Covered by the payload SORA assessment, or a revised assessment where the aircraft's dimension, speed, or mitigations differ materially from the reference types |
| Load control | Means of confirming payload weight and centre of gravity before flight |
| Mitigations claimed | Any mitigation claimed in the risk assessment, such as a parachute, is actually fitted and serviceable |
| Type training | Pilot and loadmaster type-qualified on that aircraft and its delivery system |

Where a proposed aircraft is materially larger, faster, or less well equipped than the reference types, the risk assessment is rerun before use rather than assumed to carry over.

---

## Part 5: Open Questions for Transport Canada or the Dealer

1. Does a Standard 922 declaration exist for the FlyCart 30 or FlyCart 100 in Canada, and which operations does it cover?
2. Has an acceptance letter been issued under CAR 901.196 for either model, and when?
3. Is a winch delivery, conducted per the manufacturer's manual, treated as within 901.43(1)(d) without further authorization, or does the regional office expect an SFOC?
4. For medium RPA, does the Program's existing RPOC require amendment to reflect the new aircraft class and operation type?
5. Does the SAR carve-out at 900.08(2) and 901.41(2) extend to payload delivery conducted in the service of a public authority, on the same footing as search operations?

---

## Part 6: Sequencing Summary

| Phase | Blocking? | Rough effort |
|-------|-----------|--------------|
| 0. Decisions and verification | Yes, blocks everything | Days, mostly waiting on answers |
| 1. Regulatory and risk foundation | Yes, blocks procedures | Substantial; the SORA rerun is the bulk |
| 2. Operating procedures | Yes, blocks training | Moderate |
| 3. Training and competency | Yes, blocks operational use | Moderate |
| 4. Maintenance and records | Parallel with 3 | Moderate |
| 5. Validation | Yes, blocks declaration of capability | Flight time and exercises |

**Recommended immediate next step:** Phase 0.1. Everything else is contingent on the declaration answer, and it costs one phone call to the dealer plus a check of the Transport Canada declaration list.

---

*This plan is a draft for review and is not program policy. On approval, the deliverables above are written into the manual suite in the layered pattern described in Part 1.2.*
