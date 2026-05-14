// ─────────────────────────────────────────────────────────────────────────────
// exportHTML — regenerates a storyboard .html file from a form data object.
// The output matches the exact format used by the existing storyboard pages.
// ─────────────────────────────────────────────────────────────────────────────

export function generateStoryboardHTML(form) {
  const movementsJSON = JSON.stringify(form.movements, null, 4)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '    ' + line))
    .join('\n');

  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>${form.name} Tul — Storyboard | Grand Master Scott Craig</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Work+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="../storyboard-base.css"/>
</head><body>
<script>
window.PATTERN = {
  name:'${form.name}', korean:'${form.korean}', hanja:'${form.hanja}', meaning:'${escapeStr(form.meaning)}',
  gup:'${form.gup}', beltColor:'${form.beltColor}', beltName:'${form.beltName}',
  moves:${form.movements.length}, diagram:'${form.diagram}', diagramHanja:'${form.diagramHanja}', diagramMeaning:'${escapeStr(form.diagramMeaning)}',
  youtube: null,
  bio:'${escapeStr(form.bio)}',
  movements:${movementsJSON}
};
<\/script>
<script src="../storyboard-engine.js"><\/script>
</body></html>`;
}

function escapeStr(str) {
  return (str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

export function storyboardFilename(form) {
  return `${form.id || form.name.toLowerCase().replace(/\s+/g, '-')}.html`;
}
