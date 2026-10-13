# Up in the Air — Domestic Air Travel in Australia

FIT3179 Data Visualisation 2 (Semester 2, 2026) · P'ng Yik Soon · Monash University Malaysia

Live page: ``

## Structure
```
index.html          page layout and story text
css/style.css       typography, colours, layout
js/main.js          embeds each chart + shared Vega-Lite config (fonts, axes)
specs/*.vg.json     one Vega-Lite spec per chart (human-readable JSON)
data/               cleaned CSVs, state boundaries (TopoJSON), data README, build script
sketch.pdf          ← add your scanned hand-drawn sketch here
```

| Spec | Chart | Idiom |
|---|---|---|
| 01_trend | A Nation in Motion | Line chart (monthly + 12-month average) |
| 02_radial_calendar | Australia's Travel Calendar | Radial calendar heatmap |
| 03_flow_map | Connected by Air | Flow map (Map 1) |
| 04_airport_hubs | Australia's Aviation Hubs | Proportional-symbol map (Map 2) |
| 05_bump_chart | The Race for the Top | Bump chart |
| 06_loadfactor_heatmap | How Full Are the Planes? | Heatmap |
| 07_choropleth | Where Tourism Is Growing | Choropleth with measure selector (Map 3) |
| 08_waffle | Work or Escape? | Waffle chart |
| 09_purpose_trend | Is the Purpose of Travel Changing? | Indexed multi-line chart |
| 10_slopegraph | Routes Rewritten | Slopegraph |
| 11_seasonal_small_multiples | Holiday Peaks or Everyday Journeys? | Small multiples |
| 12_dumbbell | Short Break or Long Holiday? | Dumbbell chart |

## Run locally
The specs load CSVs by relative URL, so open the page through a local server, not by double-clicking:
```
python -m http.server 8000
```
then visit http://localhost:8000.

## Publish on GitHub Pages
1. Create a **public** repository and push these files to the `main` branch.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root` → Save.
3. Wait a minute, then open the live URL and check every chart loads.

## Notes for editing
- Map projection (all three maps): `conicEqualArea` with parallels −18°/−36° and centre meridian 132°E (Australian Albers).
- CSV columns used for sorting or arithmetic are declared in each spec's `"format": {"parse": …}`; Vega-Lite only converts columns to numbers automatically when they are encoded as quantitative.
- Chart colours: categorical blue `#2a78d6`, orange `#eb6834`, aqua `#1baf7a`, yellow `#eda100`; diverging red `#e34948` – grey `#f0efec` – blue `#2a78d6`.
- Text marked **DRAFT** in `index.html` is placeholder copy: rewrite it in your own words.
