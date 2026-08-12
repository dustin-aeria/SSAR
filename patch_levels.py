import io, re

LEVELS_TRAINING = """| Level | Title | Operations Authorized | Requirements |
|-------|-------|----------------------|--------------|
| Trainee | Pilot Under Training | Training flights only, under the direct supervision of a certified Program pilot (CAR 901.54(2), 901.63(2), 901.89(2)) | Enrolled in the Program training stream |
| Basic | Basic Pilot | Whatever a TC Basic certificate allows: VLOS, uncontrolled airspace, at least 100 ft from uninvolved persons (CAR 901.53). Program SAR basic training applies | TC Basic certificate (CAR 901.55) plus Program basic training complete |
| Advanced | Advanced Pilot | Whatever a TC Advanced certificate allows: VLOS in controlled airspace, closer to uninvolved persons, EVLOS and sheltered operations, and medium RPA VLOS per Division V (CAR 901.62). Program SAR advanced permissions apply | TC Advanced certificate (CAR 901.64) plus Program advanced training complete |
| SFOC | SFOC Pilot | Standard scenario and standing SFOC operations. The limits are those written into the SFOC itself | Advanced level complete, plus Program training for the standard scenarios and standing SFOCs held, plus granted privileges under that SFOC |
| L1C | Level 1 Complex Pilot | Whatever a TC Level 1 Complex certificate allows: BVLOS under the Organization RPOC per Division VI (CAR 901.87) | TC Level 1 Complex certificate (CAR 901.90) plus Program training for BVLOS operations |
| Flight Reviewer | Program Flight Reviewer | Conducts internal Program flight reviews and competency sign-offs. **This is an internal Program role, not a Transport Canada Flight Reviewer rating.** A TC flight review for certificate issue (CAR 901.64(c), 901.90(e)) must be conducted by a person holding the TC flight reviewer rating under CAR 901.176 and affiliated with a declared training provider (CAR 901.175) | Advanced or L1C level, plus Program instructor training, plus Chief Pilot appointment |

Progression is sequential: a member moves up when the previous level is complete and both the member and the trainer are satisfied they are ready. The Program levels describe what a member has been trained and signed off to do. They never extend what a pilot certificate or SFOC allows; the Core Operating Rule governs (Operations Manual 1.3.1)."""

LEVELS_PEOPLE = """| Level | Title | Requirements |
|-------|-------|--------------|
| Trainee | Pilot Under Training | Enrolled in the Program training stream; flies only under direct supervision |
| Basic | Basic Pilot | TC Basic certificate; Program basic training and orientation complete |
| Advanced | Advanced Pilot | TC Advanced certificate; Program advanced training complete; type training on aircraft flown |
| SFOC | SFOC Pilot | Advanced level; trained on the standard scenarios and standing SFOCs the Organization holds; granted privileges under that SFOC |
| L1C | Level 1 Complex Pilot | TC Level 1 Complex certificate; Program BVLOS training complete |
| Flight Reviewer | Program Flight Reviewer (internal) | Advanced or L1C level; Program instructor training; Chief Pilot appointment. Not a Transport Canada Flight Reviewer rating |"""

VO_NEW = """- **Visual Observers:** A visual observer is a crew member trained to assist the pilot in ensuring the safe conduct of a flight (CAR 900.01). Under the Organization's RPOC, the qualification required is simply that the person has been trained under the Program training program (CAR 901.219). A trained VO may be used on any operation where a VO is required or where an extra set of eyes is useful. Two regulatory exceptions apply: for **extended VLOS** operations the VO must additionally hold a pilot certificate (CAR 901.75), and for **BVLOS** operations where visual observer detect and avoid is relied upon, the VO must be trained in accordance with Standard 923 (CAR 901.95(2))"""

def fix(path, is_training=False, is_people=False):
    t = io.open(path, encoding="utf-8").read()
    if is_training:
        s = t.find("| Level | Title | Operations Authorized | Requirements |")
        e = t.find("\n\n", t.find("| Stage 5 | Flight Reviewer", s))
        if s > 0 and e > s:
            t = t[:s] + LEVELS_TRAINING + t[e:]
            print("  training level table replaced")
    if is_people:
        s = t.find("| Trainee | Pilot Under Training | In training program |")
        if s > 0:
            hs = t.rfind("| Level |", 0, s)
            he = t.find("\n\n", s)
            t = t[:hs] + LEVELS_PEOPLE + t[he:]
            print("  people 4.x level table replaced")
        s2 = t.find("| Level | Title | Requirements |")
        if s2 > 0 and "Pilot (Standard Scenario)" in t[s2:s2+600]:
            e2 = t.find("\n\n", s2)
            t = t[:s2] + LEVELS_PEOPLE + t[e2:]
            print("  people 5.x level table replaced")
    t = t.replace("- **Visual Observers:** for EVLOS, the VO must hold a pilot certificate (CAR 901.75); for BVLOS, the VO must be trained per Standard 923 and Training Manual Section 6", VO_NEW)
    t = t.replace("- **Crew Certs:** Confirm ALL Visual Observers (VOs) hold a valid Basic or Advanced Pilot Certificate",
                  "- **Crew Certs:** Confirm all Visual Observers are trained under the Program training program. For EVLOS only, confirm each VO also holds a pilot certificate (CAR 901.75)")
    io.open(path,"w",encoding="utf-8").write(t)

for p, tr, pe in [("5_TRAINING_MANUAL.md", True, False),
                  ("3_PEOPLE_EQUIPMENT_MANUAL.md", False, True),
                  ("1_OPERATIONS_MANUAL.md", False, False),
                  ("2_SAFETY_EMERGENCY_MANUAL.md", False, False),
                  ("4_FORMS_MAINTENANCE_MANUAL.md", False, False)]:
    print(p); fix(p, tr, pe)
