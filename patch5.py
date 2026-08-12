import io

AIRCRAFT_INTRO = """## 4. Aircraft

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

### 4.3 DJI Matrice 30T (M30T) Specifications"""

PAIRS = [
# Operations Manual section 4 header block
("""## 4. Authorized Aircraft

### 4.1 Approved Aircraft

> **AUTHORIZED AIRCRAFT - DJI M30T and DJI Matrice 4TD ONLY**

| Aircraft | MTOM | Authorization |
|----------|------|---------------|
| DJI M30T | 3.77 kg | All operations |
| DJI Matrice 4TD | 2.3 kg | All operations |

### 4.2 DJI Matrice 30T (M30T) Specifications""", AIRCRAFT_INTRO),

("### 4.3 DJI Matrice 4TD (M4TD) Specifications", "### 4.4 DJI Matrice 4TD (M4TD) Specifications"),

# Safety Manual ConOps summary
("- **Aircraft:** DJI M30T and DJI Matrice 4TD ONLY",
 "- **Aircraft:** Any RPAS meeting the eligibility criteria of Operations Manual Section 4.1, within the mass and speed class assumed by this assessment. DJI M30T and DJI Matrice 4TD are the current reference types"),

# Safety Manual risk acceptance condition
("- Only approved aircraft (M30T, M4TD) used",
 "- Only eligible aircraft used, per Operations Manual Section 4.1 (registered, declared where required, serviceable, within the assessed mass and speed class, and crew type-qualified)"),

# TOC entry
("4. [Authorized Aircraft](#4-authorized-aircraft)", "4. [Aircraft](#4-aircraft)"),

# Generic restrictive phrasing elsewhere
("Authorized Aircraft", "Aircraft"),
("approved aircraft types (M30T, M4TD)", "eligible aircraft types"),
]

for p in ["1_OPERATIONS_MANUAL.md","2_SAFETY_EMERGENCY_MANUAL.md","3_PEOPLE_EQUIPMENT_MANUAL.md",
          "4_FORMS_MAINTENANCE_MANUAL.md","5_TRAINING_MANUAL.md","docs/js/content.js"]:
    t = io.open(p, encoding="utf-8").read()
    n = 0
    for old, new in PAIRS:
        c = t.count(old)
        if c: t = t.replace(old, new); n += c
    io.open(p,"w",encoding="utf-8").write(t)
    print(f"{p}: {n}")
