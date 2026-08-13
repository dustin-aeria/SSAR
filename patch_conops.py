import io

# --- 3.1 preamble: operations, not just the three envelopes ---
OLD_PRE = """This Concept of Operations outlines RPAS operations conducted under the S2S SAR Drone Program by its participating Sea to Sky corridor search and rescue organizations, operating throughout the Sea to Sky Corridor of British Columbia. This document supports each Organization's RPOC and, where applicable, SFOC applications, covering:

- **Level 1 Complex Operations (CAR 901.87):** BVLOS operation of a small RPA in uncontrolled airspace, max 400' AGL, over sparsely populated areas, conducted under the Organization's RPOC by Level 1 Complex pilots
- **(STSC-003)** VLOS operation of a small RPA (>250g up to 25kg) in uncontrolled airspace above 400' AGL up to 1000' AGL, under the Organization's valid SFOC
- **(STSC-004)** BVLOS operation of a small RPA (>250g up to 25kg) over low-risk ground areas using visual observer DAA, by Advanced pilots under the Organization's valid SFOC"""

NEW_PRE = """This Concept of Operations outlines RPAS operations conducted under the S2S SAR Drone Program by its participating Sea to Sky corridor search and rescue organizations, operating throughout the Sea to Sky Corridor of British Columbia. It supports each Organization's RPOC and, where applicable, SFOC applications.

**Scope.** The Program conducts any RPAS operation that supports search and rescue activity, using any aircraft eligible under Section 4.1, within the authority the pilot and Organization hold. The Program is not limited to a fixed list of mission types: as SAR practice and aircraft capability develop, new operation types are adopted under the same framework of authority, risk assessment, training, and procedure that governs the operations described here.

**Operation types currently conducted or provided for**, each with its procedure in this manual:

| Operation type | Procedure |
|----------------|-----------|
| Area search and subject location | Section 7 (Search Operations); flight profile 3.9.2 |
| Scene overview and situational awareness | Section 7.7; flight profile 3.9.3 |
| Subject overwatch and tracking | Sections 7 and 3.9.3 |
| Hazard and terrain assessment for ground and air teams | Sections 7 and 9 (Environmental Operations) |
| Support to helicopter and technical rescue operations | Sections 7.7 and 8 (Communications) |
| Night and low-light operations, including aerial lighting | Sections 3.9.3 and 9 |
| Mapping, imagery capture, and post-incident documentation | Section 7 |
| Payload delivery to a subject or team | Section 13 (Payload Delivery Operations) |
| Training, currency, and exercise flights | Training Manual |

**Authority envelopes available**, which apply across every operation type above rather than defining separate missions:

- **VLOS, EVLOS, and sheltered operations (CARs Division V):** conducted under the pilot's certificate
- **Level 1 Complex Operations (CAR 901.87):** BVLOS in uncontrolled airspace, max 400' AGL, under the Organization's RPOC by Level 1 Complex pilots
- **(STSC-003)** VLOS above 400' AGL up to 1000' AGL, under the Organization's valid SFOC
- **(STSC-004)** BVLOS over low-risk ground areas using visual observer DAA, by Advanced pilots under the Organization's valid SFOC
- **Medium RPA operations** for payload delivery, per Section 13

The operation type determines what the crew is trying to achieve. The authority envelope determines what they are permitted to do while achieving it. Both must be satisfied for every flight (Core Operating Rule, 1.3.1)."""

# --- 3.2 objectives ---
OLD_OBJ = """The S2S SAR Drone Program provides RPAS capability to the volunteer search and rescue organizations of the Sea to Sky corridor of British Columbia, each a first responder non-profit providing 24/7 SAR services in its own jurisdiction. The primary objective is to conduct safe and effective BVLOS RPAS flights supporting the Program operations.

| Objective | Performance Criteria |
|-----------|---------------------|
| Safe Operation | Zero incidents/near-misses; full adherence to checklists; successful emergency protocol execution |
| Effective Reconnaissance | Successful identification and location of subjects; real-time data; minimal latency |
| Situational Awareness | Flights launched to assess blind spots or unknown threats where insight was gained |
| Efficiency | Reduction in average mission time without compromising safety |"""

NEW_OBJ = """The S2S SAR Drone Program provides RPAS capability to the volunteer search and rescue organizations of the Sea to Sky corridor of British Columbia, each a first responder non-profit providing 24/7 SAR services in its own jurisdiction. The primary objective is to conduct safe and effective RPAS operations of whatever type the SAR task requires, in support of saving lives and reducing risk to ground and air crews.

| Objective | Performance Criteria |
|-----------|---------------------|
| Safe Operation | Zero incidents and near-misses; full adherence to checklists; successful emergency protocol execution |
| Mission Effectiveness | The operation achieves what the task required of it, whether locating a subject, informing a decision, supporting a rescue in progress, or delivering equipment |
| Information to Decision Makers | Timely, accurate imagery and reporting to SAR Management, with minimal latency |
| Risk Reduction | Ground and air crews exposed to less hazard because the aircraft was used in their place where practical |
| Efficiency | Reduction in average mission time without compromising safety |
| Adaptability | New operation types are adopted under the existing framework rather than requiring a parallel one |"""

# --- 3.9.2 / 3.9.3 headings: generalize ---
OLD_92 = "#### 3.9.2 Reconnaissance Flight"
NEW_92 = """#### 3.9.2 Search Flight Profile

Applies to area search, subject location, and any operation whose purpose is to find something. The same phase structure supports mapping and documentation flights."""

OLD_93 = "#### 3.9.3 Situational Awareness Flight"
NEW_93 = """#### 3.9.3 Overwatch and Support Flight Profile

Applies to scene overview, subject overwatch and tracking, hazard assessment for teams on the ground, support to helicopter and technical rescue operations, and night or low-light work including aerial lighting."""

OLD_ADD = """| Return & Land | Fly to launch; descend vertically to pad |"""
NEW_ADD = """| Return & Land | Fly to launch; descend vertically to pad |

#### 3.9.4 Other Operation Types

Payload delivery has its own profile and procedures at Section 13. For any operation type not described above, the PIC builds the profile from the phase structure of 3.9.2 or 3.9.3, whichever fits the task, and confirms with the Chief Pilot where the operation is materially different from anything previously conducted. New profiles that prove useful are added to this Section so the Program's documented practice keeps pace with what it actually does."""

# --- 3.7 in-field rationale: applies to any operation type ---
OLD_RAT = """- **BVLOS:** Permitted when mission requires increased awareness beyond VLOS, with radio link intact
- **High-Altitude (>400 ft AGL):** Authorized only when mission requires visibility essential to locating a subject

> **Under no circumstances is an operator permitted to fly BVLOS or at high altitudes unless deemed essential for the SAR operation.**"""
NEW_RAT = """- **BVLOS:** Permitted when the operation, of whatever type, requires reach or awareness beyond VLOS, with the command and control link intact and the authority for BVLOS held
- **High-Altitude (>400 ft AGL):** Permitted only under a valid SFOC or ATS authorization, and only when the operation requires the altitude, for example for a field of view essential to the task or for terrain clearance on return

> **Under no circumstances is an operator permitted to fly BVLOS or at high altitude unless it is required by the SAR operation and the authority for it is held.**"""

# --- 3.5 staging table: align to the new level names, no flight counts ---
OLD_STAGE = """| Stage | Description | Allowed Operations | Progression Criteria |
|-------|-------------|-------------------|---------------------|
| 1 | Basic License & Onboarding | Sub-250g RPAS flights | 20 training flights; complete the Program Manuals |
| 2 | Advanced License Training | VLOS <400 ft AGL | Advanced License; 20 additional flights |
| 3 | BVLOS Training & Operations | BVLOS under supervision | 20 BVLOS flights; supervisor sign-off |
| 4 | High-Altitude Training | High altitude under supervision | 20 high-altitude flights; supervisor sign-off |
| 6 | Full Operator Privileges | All operations permitted by certificates held and any valid SFOC | All stages complete; final sign-off |"""
NEW_STAGE = """| Level | Description | Allowed Operations | Progression |
|-------|-------------|-------------------|-------------|
| Trainee | Onboarding and supervised training | Training flights under direct supervision | Enrolled in the Program training stream |
| Basic | TC Basic certificate plus Program basic training | Whatever the Basic certificate allows | Trainee level complete; trainer satisfied |
| Advanced | TC Advanced certificate plus Program advanced training | Whatever the Advanced certificate allows, across all operation types | Basic level complete; trainer satisfied |
| SFOC | Trained on the standard scenarios and standing SFOCs held | Operations within the SFOC, per its conditions | Advanced level complete; granted under the SFOC |
| L1C | TC Level 1 Complex certificate plus Program BVLOS training | Division VI BVLOS under the Organization RPOC | Advanced level complete; trainer satisfied |
| Flight Reviewer | Internal Program appointment | Conducts Program flight reviews and sign-offs | Chief Pilot appointment |

Progression is by demonstrated readiness rather than a flight count. Full detail is in the Training Manual."""

t = io.open("1_OPERATIONS_MANUAL.md", encoding="utf-8").read()
for old, new, label in [(OLD_PRE, NEW_PRE, "3.1 preamble"), (OLD_OBJ, NEW_OBJ, "3.2 objectives"),
                        (OLD_92, NEW_92, "3.9.2"), (OLD_93, NEW_93, "3.9.3"),
                        (OLD_ADD, NEW_ADD, "3.9.4"), (OLD_RAT, NEW_RAT, "3.7 rationale"),
                        (OLD_STAGE, NEW_STAGE, "3.5 staging")]:
    if old in t:
        t = t.replace(old, new, 1); print("  ok:", label)
    else:
        print("  !! not found:", label)
io.open("1_OPERATIONS_MANUAL.md","w",encoding="utf-8").write(t)
