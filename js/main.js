// Embeds every chart. Each spec lives in specs/ as a readable JSON file.
// The shared config below sets fonts and axis styling for all charts in one place.

const config = {
  font: "Verdana, Geneva, DejaVu Sans, sans-serif",
  background: null,
  view: { stroke: null },
  axis: {
    labelColor: "#52514e", titleColor: "#52514e", labelFontSize: 12, titleFontSize: 12,
    titleFontWeight: 500, gridColor: "#e1e0d9", domainColor: "#c3c2b7", tickColor: "#c3c2b7"
  },
  legend: { labelColor: "#52514e", titleColor: "#52514e", labelFontSize: 12, titleFontSize: 12, titleFontWeight: 500 },
  header: { labelColor: "#0b0b0b", labelFont: "Verdana, Geneva, DejaVu Sans, sans-serif" },
  text: { font: "Verdana, Geneva, DejaVu Sans, sans-serif" }
};

const charts = {
  vis01: "specs/01_trend.vg.json",
  vis02: "specs/02_radial_calendar.vg.json",
  vis03: "specs/03_flow_map.vg.json",
  vis04: "specs/04_airport_hubs.vg.json",
  vis05: "specs/05_bump_chart.vg.json",
  vis06: "specs/06_loadfactor_heatmap.vg.json",
  vis07: "specs/07_choropleth.vg.json",
  vis08: "specs/08_waffle.vg.json",
  vis09: "specs/09_purpose_trend.vg.json",
  vis10: "specs/10_slopegraph.vg.json",
  vis11: "specs/11_seasonal_small_multiples.vg.json",
  vis12: "specs/12_dumbbell.vg.json"
};

for (const [id, spec] of Object.entries(charts)) {
  vegaEmbed("#" + id, spec, { actions: false, renderer: "svg", config })
    .catch(err => console.error(id, err));
}
