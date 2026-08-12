import io

PAIRS = [
# ---------- FORMS & MAINTENANCE ----------
("""### 1.2 Approved Aircraft

| Aircraft | MTOM | Max Flight | Op. Temp | IP Rating |
|----------|------|------------|----------|-----------|
| DJI M30T | 3.77 kg | 41 minutes | -20°C to 50°C | IP55 |
| DJI Matrice 4TD | 2.3 kg | 42 minutes | -20°C to 45°C | IP54 |""",
"""### 1.2 Aircraft Covered by This Manual

This manual applies to every aircraft entered in the Organization's aircraft register, not to a fixed list of models. Eligibility criteria for adding an aircraft are set out in Operations Manual Section 4.1. When a new type is registered, the Person Responsible for RPAS Maintenance establishes its maintenance schedule, inspection criteria, and component life limits from the manufacturer's documentation before the aircraft is tasked, and records them here alongside the reference types.

The following are the current reference types, documented in detail in this manual because they are the models most widely used by SAR organizations at present. They are examples, not the limit of what may be operated.

| Aircraft | MTOM | Max Flight | Op. Temp | IP Rating |
|----------|------|------------|----------|-----------|
| DJI M30T | 3.77 kg | 41 minutes | -20°C to 50°C | IP55 |
| DJI Matrice 4TD | 2.3 kg | 42 minutes | -20°C to 45°C | IP54 |

For any other registered aircraft, the equivalent specifications, pre-flight inspection, checklist, battery care, and firmware procedures are taken from that aircraft's flight manual and filed in the Organization's aircraft register in the same format used below."""),

("""## 2. Aircraft Specifications

### 2.1 DJI Matrice 30T (M30T)""",
"""## 2. Aircraft Specifications

Specifications for the reference types follow. Specifications for any other registered aircraft are recorded in the Organization's aircraft register in this same format, drawn from the manufacturer's flight manual.

### 2.1 DJI Matrice 30T (M30T)"""),

("| **Aircraft:** | [ ] M30T  [ ] M4TD |",
 "| **Aircraft:** | [ ] M30T  [ ] M4TD  [ ] Other (specify): ____________ |"),

('> - "Aircraft type: DJI [M30T/M4TD]"',
 '> - "Aircraft type: [make and model]"'),

# ---------- PEOPLE & EQUIPMENT ----------
("**Aircraft-Specific Training:** Complete type-specific training on the assigned operational RPAS (e.g., DJI M30T, DJI Matrice 4TD).",
 "**Aircraft-Specific Training:** Complete type-specific training on each RPAS type the pilot will operate. Type training is required for every aircraft in the Organization's register, whether or not it is one of the reference types documented in this suite (currently the DJI M30T and DJI Matrice 4TD)."),

("| Aircraft Qualifications: | M30T [ ]    M4TD [ ] |",
 "| Aircraft Qualifications: | M30T [ ]    M4TD [ ]    Other (specify): ____________ |"),

("""| M30T type training | | | |
| M4TD type training | | | |""",
 """| M30T type training | | | |
| M4TD type training | | | |
| Other type training (specify) | | | |"""),

("""| DJI M30T | | | | |
| DJI M4TD | | | | |""",
 """| DJI M30T | | | | |
| DJI M4TD | | | | |
| Other registered type | | | | |"""),

("""### 8.3 the Program Aircraft Coverage

| Aircraft | MTOM | Category | Minimum Required | the Program Actual |
|----------|------|----------|------------------|-------------|
| DJI M30T | 3.77 kg | 1-5 kg | $100,000 | [Policy Amount] |
| DJI Matrice 4TD | 2.3 kg | 1-5 kg | $100,000 | [Policy Amount] |""",
"""### 8.3 Aircraft Coverage

Every aircraft in the Organization's register must be covered before it is operated. Coverage is confirmed when a new type is added.

| Aircraft | MTOM | Category | Minimum Required | Policy Actual |
|----------|------|----------|------------------|---------------|
| DJI M30T | 3.77 kg | 1-5 kg | $100,000 | [Policy Amount] |
| DJI Matrice 4TD | 2.3 kg | 1-5 kg | $100,000 | [Policy Amount] |
| [Other registered aircraft] | [MTOM] | [Category] | [Per category] | [Policy Amount] |"""),

# ---------- TRAINING ----------
("Advanced Training develops expertise with operational aircraft (DJI M30T, DJI Matrice 4TD) and prepares pilots for complex SAR missions",
 "Advanced Training develops expertise with the Organization's operational aircraft (the reference types documented in this suite are the DJI M30T and DJI Matrice 4TD; type training is required for whichever aircraft the pilot will fly) and prepares pilots for complex SAR missions"),

("| Aircraft Qualifications | M30T [ ] M4TD [ ] |",
 "| Aircraft Qualifications | M30T [ ] M4TD [ ] Other (specify): ____________ |"),

("""| M30T Type Training | | | |
| M4TD Type Training | | | |""",
 """| M30T Type Training | | | |
| M4TD Type Training | | | |
| Other Type Training (specify) | | | |"""),

# ---------- shared competency tables ----------
("| Aircraft systems (M30T, M4TD) | 85% | Written + practical |",
 "| Aircraft systems (each type flown) | 85% | Written + practical |"),

# ---------- README ----------
("""## Authorized Aircraft

| Aircraft | MTOM | Flight Time | Operating Temp | Wind Resistance | IP Rating |""",
"""## Aircraft

Any RPAS may be operated under this documentation provided it meets the eligibility criteria in Operations Manual Section 4.1 (registered and marked, declared under Standard 922 where the operation requires it, within the mass and speed class assumed by the SORA assessment, serviceable under the MCM, correctly equipped, flown by a type-qualified pilot, and signed off by the Chief Pilot). The following are the current reference types, the models most widely used by SAR organizations at present and the ones documented in detail throughout this suite.

| Aircraft | MTOM | Flight Time | Operating Temp | Wind Resistance | IP Rating |"""),
]

for p in ["1_OPERATIONS_MANUAL.md","2_SAFETY_EMERGENCY_MANUAL.md","3_PEOPLE_EQUIPMENT_MANUAL.md",
          "4_FORMS_MAINTENANCE_MANUAL.md","5_TRAINING_MANUAL.md","README.md","docs/js/content.js"]:
    t = io.open(p, encoding="utf-8").read()
    n = 0
    for old, new in PAIRS:
        c = t.count(old)
        if c: t = t.replace(old, new); n += c
    io.open(p,"w",encoding="utf-8").write(t)
    print(f"{p}: {n}")
