#!/usr/bin/env python3
"""Replace legacy source-document IDs with references to where the content
actually lives in this suite, and remove the 'source documents' framing."""
import io, re

# legacy ID -> where that content now lives in this suite
MAP = {
    "SFOC-001": "Operations Manual 3 (CONOPS)",
    "SFOC-003": "Site Survey",
    "OPS-001":  "Operations Manual 5 (Operating Authority)",
    "OPS-102":  "Operations Manual 7 (Search Operations)",
    "OPS-104":  "Operations Manual 9 (Environmental Operations)",
    "POL-001":  "Operations Manual 1 (Regulatory Framework)",
    "POL-002":  "People & Equipment Manual 1 (Roles and Responsibilities)",
    "POL-003":  "People & Equipment Manual 5 (Chief Pilot)",
    "POL-004":  "People & Equipment Manual 7 (PPE)",
    "POL-005":  "Operations Manual 8 (Communications)",
    "POL-006":  "Safety Manual 3.6 (Detect and Avoid)",
    "POL-007":  "Operations Manual 10 (Weather Minimums)",
    "POL-008":  "Safety Manual 5 (Incident and Accident Reporting)",
    "POL-009":  "People & Equipment Manual 8 (Insurance)",
    "POL-010":  "Forms & Maintenance Manual 3 (Equipment Testing)",
    "POL-011":  "Operations Manual 6 (Site Survey and Flight Planning)",
    "POL-012":  "Forms & Maintenance Manual 1 (Airworthiness)",
    "PRO-101":  "Operations Manual 12 (Pre-Flight and Post-Flight Procedures)",
    "PRO-102":  "Safety Manual 2 (Emergency Procedures)",
    "PRO-103":  "Operations Manual 11 (Advanced Procedures)",
    "ERP-001":  "Safety Manual 2 (Emergency Procedures)",
    "CHK-001":  "Forms & Maintenance Manual 4 (Mission Checklists)",
    "MCM-001":  "Forms & Maintenance Manual 1 (Maintenance Control)",
    "MAINT-001":"Forms & Maintenance Manual 8 (Maintenance Records)",
    "MNT-002":  "Forms & Maintenance Manual 5 (Firmware and Battery Care)",
    "PCR-001":  "People & Equipment Manual 4 (Pilot Competency Records)",
    "QAP-001":  "Safety Manual 7 (Quality Assurance Program)",
    "SAF-201":  "Safety Manual 1 (Safety Policy) and 5 (Incident Reporting)",
    "SAF-202":  "Safety Manual 6 (Non-Punitive Reporting)",
    "SAF-203":  "Safety Manual 4 (Hazard Identification and Risk Assessment)",
    "SAF-204":  "Safety Manual 7 (QA and Internal Audit)",
    "SMS-001":  "Safety Manual (Safety Management System)",
    "SOA-001":  "Safety Manual 3 (SORA Documentation)",
    "TRN-301":  "Training Manual",
    "TRN-302":  "Training Manual 3 (Foundation Training)",
    "TRN-303":  "Training Manual 4 (Advanced Training)",
    "TRN-304":  "Training Manual 8 (Progression)",
    "TRN-305":  "Training Manual 9 (Examiner Standards)",
}

SOURCES_REPLACEMENT = """### Document History

This manual consolidates the Program's earlier standalone policies, procedures, and forms into a single document. **Those earlier documents are superseded: this manual is the authoritative source for the material it contains.** References throughout this suite point to sections of these manuals, not to separate documents held elsewhere.

"""

def fix(path):
    t = io.open(path, encoding="utf-8").read()
    orig = t

    # 1) Replace the "Document Sources" section (heading + intro + table)
    m = re.search(r"(?m)^(#{2,4}) [\d.]* ?Document Sources\s*$", t)
    if m:
        start = m.start()
        # section runs to the next --- separator or END OF marker
        nxt = t.find("\n---", start)
        endmark = t.find("**END OF", start)
        end = min(x for x in [nxt, endmark, len(t)] if x > start)
        heading = m.group(0).split(" ")[0]
        t = t[:start] + heading + " Document History\n\n" + SOURCES_REPLACEMENT.split("\n", 2)[2] + t[end:]

    # 2) Inline legacy IDs -> where the content lives now
    for ident, target in sorted(MAP.items(), key=lambda kv: -len(kv[0])):
        # in table cells and prose alike
        t = re.sub(r"\b%s\b(?! \|)" % re.escape(ident), target, t)
        t = re.sub(r"\b%s\b" % re.escape(ident), target, t)

    # 3) Tidy phrasings left behind
    t = t.replace("per Training Manual checklist", "per the Training Manual")
    t = t.replace("Operations Manual 12 (Pre-Flight and Post-Flight Procedures) checklist",
                  "the pre-flight checklist (Operations Manual 12)")
    t = t.replace("All crew qualified per Training Manual", "All crew qualified per the Training Manual")

    if t != orig:
        io.open(path, "w", encoding="utf-8").write(t)
        print(f"{path}: references updated")
    else:
        print(f"{path}: no change")

for p in ["1_OPERATIONS_MANUAL.md","2_SAFETY_EMERGENCY_MANUAL.md","3_PEOPLE_EQUIPMENT_MANUAL.md",
          "4_FORMS_MAINTENANCE_MANUAL.md","5_TRAINING_MANUAL.md","6_SITE_SURVEY_MASTER.md"]:
    fix(p)
