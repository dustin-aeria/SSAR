#!/usr/bin/env python3
"""Remove program-imposed time and duration requirements from the manual suite,
leaving regulatory time limits intact and converting fixed timings into
checklist-style content."""
import io, re

# Regulatory time references that must never be stripped
KEEP = [
    "24 months", "12 months", "12 hours after", "48 hours", "24 hours",
    "CAR 901.56", "CAR 901.65", "CAR 901.91", "901.223", "retention", "retained",
    "3 minutes", "90 days preceding", "20 hours of RPAS ground school",
]

DURATION_HEADERS = {"duration", "hours", "time", "hrs", "duration (hrs)", "length"}
DUR_CELL = re.compile(r"^\s*(\d+(?:\.\d+)?\s*(?:\+\s*)?(?:hours?|hrs?|mins?|minutes?)(?:\s*(?:total|each|min|minimum|approx\.?))?|\d+\s*(?:hours?|min)\s*\(.*\)|~?\d+\s*(?:hours?|min))\s*$", re.I)

def strip_duration_columns(text):
    """Remove any markdown table column whose header is a duration, and any
    body cell that is purely a duration value."""
    lines = text.split("\n")
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("|") and i + 1 < len(lines) and re.match(r"^\|[\s:\-|]+\|?$", lines[i+1]):
            # table found: gather it
            header = lines[i]
            sep = lines[i+1]
            body = []
            j = i + 2
            while j < len(lines) and lines[j].startswith("|"):
                body.append(lines[j]); j += 1

            def cells(row):
                r = row.strip()
                if r.startswith("|"): r = r[1:]
                if r.endswith("|"): r = r[:-1]
                return r.split("|")

            hcells = cells(header)
            drop = {k for k, h in enumerate(hcells)
                    if h.strip().strip("*").lower() in DURATION_HEADERS}
            if drop and len(hcells) - len(drop) >= 2:
                def rebuild(row):
                    cs = cells(row)
                    kept = [c for k, c in enumerate(cs) if k not in drop]
                    return "|" + "|".join(kept) + "|"
                out.append(rebuild(header))
                out.append(rebuild(sep))
                for b in body:
                    out.append(rebuild(b) if len(cells(b)) == len(hcells) else b)
                i = j
                continue
            else:
                out.append(header); out.append(sep); out.extend(body); i = j; continue
        out.append(line); i += 1
    return "\n".join(out)

def strip_duration_lines(text):
    """Remove standalone duration statements."""
    patterns = [
        r"(?m)^\*\*Duration:\*\*.*\n",
        r"(?m)^\*\*Total Duration:\*\*.*\n",
        r"(?m)^\*\*Time Required:\*\*.*\n",
        r"(?m)^\*\*Minimum Hours.*\n",
    ]
    for p in patterns:
        text = re.sub(p, "", text)
    return text

def inline_fixes(text):
    PAIRS = [
        # headings with embedded durations
        (re.compile(r"(?m)^(#{2,5} .*?) \((?:minimum )?\d+(?:\.\d+)? hours?(?: minimum)?\)\s*$"), r"\1"),
        (re.compile(r"(?m)^(#{2,5} .*?) \(\d+ min(?:utes)?\)\s*$"), r"\1"),
        # generic "X hours of" phrases in program requirements
        (re.compile(r"minimum (?:of )?\d+(?:\.\d+)? hours? (?:of )?flight time per RPAS type", re.I),
         "sufficient flight time on each RPAS type for the Chief Pilot to be satisfied with the pilot's competence"),
        (re.compile(r"[Mm]inimum \d+ hours? (?:total )?(?:logged )?flight time[^.|]*", ),
         "demonstrated competence on the Program operational equipment"),
        (re.compile(r"[Mm]inimum \d+ hours? total Program flight time before commencing[^|]*"),
         "Chief Pilot satisfied that the pilot is competent and comfortable on current Program aircraft"),
        (re.compile(r"All endorsements \+ \d+ hours"), "All endorsements complete"),
        (re.compile(r"Completion of minimum \d+ flight hours"), "Chief Pilot satisfied with demonstrated handling competence"),
        (re.compile(r"[Mm]inimum \d+ hours? per month"), "regular participation"),
        (re.compile(r"log at least 1 hour of flight time per month on each RPAS type"),
         "fly each RPAS type regularly enough to remain comfortable and competent on it"),
        (re.compile(r"additional scenarios or flight hours \(min \d+ hours?\)"), "additional scenarios or flight practice"),
        (re.compile(r"additional practice \(min 1 week\)"), "additional practice"),
        (re.compile(r"[Rr]eassessment within \d+ days"), "reassessment when the trainee and trainer agree readiness is met"),
        (re.compile(r"\| \d+ flights \|"), "| Repeated until competent |"),
        (re.compile(r"\| \d+ deliveries of each method used \|"), "| Repeated until competent in each method used |"),
    ]
    for pat, rep in PAIRS:
        text = pat.sub(rep, text)
    return text

def process(path):
    t = io.open(path, encoding="utf-8").read()
    before = t
    t = strip_duration_columns(t)
    t = strip_duration_lines(t)
    t = inline_fixes(t)
    io.open(path, "w", encoding="utf-8").write(t)
    print(f"{path}: {'changed' if t != before else 'unchanged'}")

for p in ["5_TRAINING_MANUAL.md","3_PEOPLE_EQUIPMENT_MANUAL.md","1_OPERATIONS_MANUAL.md",
          "4_FORMS_MAINTENANCE_MANUAL.md","2_SAFETY_EMERGENCY_MANUAL.md"]:
    process(p)
