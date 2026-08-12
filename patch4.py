import io

PAIRS = [
# --- scope / ownership language -------------------------------------------
("the S2S SAR Drone Program is a first responder non-profit providing 24/7 SAR services in and around Squamish, British Columbia.",
 "The S2S SAR Drone Program provides RPAS capability to the volunteer search and rescue organizations of the Sea to Sky corridor of British Columbia, each a first responder non-profit providing 24/7 SAR services in its own jurisdiction."),

("The the Program region primarily encompasses the Squamish River Watershed. This area begins at Clendinning Provincial Park, following Clendinning Creek to the Elaho Valley, continuing through the Squamish River, and ultimately reaching Howe Sound, extending to Anvil Island. The surrounding mountainous terrain is also included.",
 "The Program region spans the Sea to Sky corridor, comprising the combined search and rescue jurisdictions of the participating organizations. It extends from Howe Sound and its islands in the south, north through the Squamish River and Elaho watersheds to Clendinning Provincial Park, and continues through the Whistler and Pemberton valleys to the surrounding alpine and interior boundaries of the region. Each Organization's specific boundary is recorded in its own tasking area documentation; the surrounding mountainous terrain is included throughout."),

("The the Program boundary is situated in the Sea-to-Sky Corridor of British Columbia, near the town of Squamish. The region is characterized by diverse and rugged natural landscape, positioned between the Coast Mountains to the east and Howe Sound to the west.",
 "The Program boundary is situated in the Sea to Sky corridor of British Columbia. The region is characterized by diverse and rugged natural landscape, positioned between the Coast Mountains to the east and Howe Sound to the west, and extending north through the Whistler and Pemberton valleys."),

("- **Valleys and River Systems:** Deep valleys following river systems like the Squamish River",
 "- **Valleys and River Systems:** Deep valleys following river systems including the Squamish, Cheakamus, Green, and Lillooet rivers"),

("The the Program region corresponds to the Squamish-Lillooet Regional District census district with a population density of 3.1 people/km² (including four municipalities: Squamish, Whistler, Pemberton, Lillooet). Municipalities are excluded from operational requirements, making the effective density even lower.",
 "The Program region corresponds to the Squamish-Lillooet Regional District census district, with a population density of 3.1 people/km² across its four municipalities (Squamish, Whistler, Pemberton, and Lillooet). Municipal areas are excluded from operations, making the effective density in the operating area lower still."),

# --- population table: regional framing ------------------------------------
("| Squamish Municipality | 23,000 | 104 | 221/km² | Populated - Excluded |\n| Whistler Municipality | 13,000 | 161 | 81/km² | Populated - Excluded |\n| Squamish River Watershed | <500 | 1,200 | <0.5/km² | Sparsely Populated - Approved |\n| Sea-to-Sky Backcountry | <200 | 800 | <0.25/km² | Sparsely Populated - Approved |",
 "| Squamish Municipality | 23,000 | 104 | 221/km² | Populated - Excluded |\n| Whistler Municipality | 13,000 | 161 | 81/km² | Populated - Excluded |\n| Village of Pemberton and environs | 3,400 | 49 | 69/km² | Populated - Excluded |\n| Squamish, Cheakamus and Lillooet watersheds | <500 | 1,200 | <0.5/km² | Sparsely Populated - Approved |\n| Sea to Sky backcountry and alpine | <200 | 800 | <0.25/km² | Sparsely Populated - Approved |"),

("| Squamish Municipality | Populated | Higher | No operations over urban |",
 "| Corridor municipalities (Squamish, Whistler, Pemberton) | Populated | Higher | No operations over urban areas |"),

# --- emergency resources: regional --------------------------------------
("| Squamish General Hospital | Closest medical facility | 38140 Behrner Drive, Squamish |",
 "| Squamish General Hospital | Medical facility, southern corridor | 38140 Behrner Drive, Squamish |\n| Whistler Health Care Centre | Medical facility, central corridor | 4380 Lorimer Road, Whistler |\n| Pemberton Health Centre | Medical facility, northern corridor | 1403 Portage Road, Pemberton |"),

("| Squamish General Hospital | 38140 Behrner Drive, Squamish |",
 "| Squamish General Hospital | 38140 Behrner Drive, Squamish |\n| Whistler Health Care Centre | 4380 Lorimer Road, Whistler |\n| Pemberton Health Centre | 1403 Portage Road, Pemberton |"),

("| Squamish Municipal | CYSE | Airport | 122.8 | 604-892-5217 | Squamish Municipality |\n| Green Lake Whistler | CAE5 | Seaplane Base | n/a | 604-932-6615 | Whistler |",
 "| Squamish Municipal | CYSE | Airport | 122.8 | 604-892-5217 | Squamish |\n| Green Lake Whistler | CAE5 | Seaplane Base | n/a | 604-932-6615 | Whistler |\n| Pemberton Regional | CYPS | Airport | [Verify in CFS] | [Verify] | Pemberton |"),

("| **Squamish SAR Base** | [Insert Number] | SAR coordination |\n| **RCMP Squamish** | [Insert Number] | Ground emergency |",
 "| **Organization SAR Base** | [Insert Number] | SAR coordination |\n| **Local RCMP Detachment** | [Insert Number] | Ground emergency |"),

# --- residual grammar bug from earlier pass ------------------------------
("The the Program", "The Program"),
("the the Program", "the Program"),
]

for p in ["1_OPERATIONS_MANUAL.md","2_SAFETY_EMERGENCY_MANUAL.md","3_PEOPLE_EQUIPMENT_MANUAL.md",
          "4_FORMS_MAINTENANCE_MANUAL.md","5_TRAINING_MANUAL.md","docs/js/content.js"]:
    t = io.open(p, encoding="utf-8").read()
    n = 0
    for old, new in PAIRS:
        c = t.count(old)
        if c: t = t.replace(old, new); n += c
    io.open(p, "w", encoding="utf-8").write(t)
    print(f"{p}: {n}")

# ---- app shell ----
ih = io.open("docs/index.html", encoding="utf-8").read()
ih = ih.replace("<span>&copy; 2026 Squamish SAR<br>All Rights Reserved</span>",
                "<span>&copy; 2026 S2S SAR Drone Program<br>All Rights Reserved</span>")
io.open("docs/index.html","w",encoding="utf-8").write(ih)
print("index.html copyright updated")

aj = io.open("docs/js/app.js", encoding="utf-8").read()
aj = aj.replace("<p>Squamish Search and Rescue - RPAS Policy Manual | Generated: ${new Date().toLocaleDateString()}</p>",
                "<p>S2S SAR Drone Program - RPAS Policy Manual | Generated: ${new Date().toLocaleDateString()}</p>")
aj = aj.replace("<p>CONFIDENTIAL - This document is the property of Squamish Search and Rescue</p>",
                "<p>CONFIDENTIAL - This document is the property of the S2S SAR Drone Program</p>")
aj = aj.replace("console.log('%cSquamish Search and Rescue - RPAS Policy Manual'",
                "console.log('%cS2S SAR Drone Program - RPAS Policy Manual'")
aj = aj.replace("<td><span class=\"cal-badge field\">Field</span><br>Location: Squamish River</td>",
                "<td><span class=\"cal-badge field\">Field</span><br>Location: Per host Organization</td>")
aj = aj.replace("<td><span class=\"cal-badge field\">Field</span><br>Location: Squamish Canyon<br><em>After hours coordination</em>",
                "<td><span class=\"cal-badge field\">Field</span><br>Location: Per host Organization<br><em>After hours coordination</em>")
io.open("docs/js/app.js","w",encoding="utf-8").write(aj)
print("app.js updated")

sw = io.open("docs/sw.js", encoding="utf-8").read().replace("'s2s-rpoc-v15'", "'s2s-rpoc-v16'")
io.open("docs/sw.js","w",encoding="utf-8").write(sw)
print("cache v16")
