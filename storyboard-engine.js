/* ═══════════════════════════════════════════════════════════
   TKD Mastery Storyboard Engine
   Grand Master Scott Craig
   Expects window.PATTERN to be defined before this script loads
   ═══════════════════════════════════════════════════════════ */

// ── SVG STICK FIGURES ────────────────────────────────────────
const F = { body:'#c4c7c7', active:'#D4AF37', joint:'#e2e2e2', dim:'#555' };

const FIGURES = {
  'low-block-left':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="60" y2="24" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="30" x2="10" y2="58" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="10" cy="58" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="52" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="8" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="52" y1="74" x2="64" y2="78" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'low-block-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="10" y2="24" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="30" x2="60" y2="58" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="60" cy="58" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="52" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="8" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="52" y1="74" x2="64" y2="78" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'punch-right':`
    <circle cx="28" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="28" y1="17" x2="28" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="28" y1="28" x2="5" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="28" y1="28" x2="60" y2="30" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="60" cy="30" r="4" fill="${F.active}"/>
    <line x1="28" y1="46" x2="14" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="28" y1="46" x2="44" y2="72" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="14" y1="78" x2="4" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="44" y1="72" x2="62" y2="76" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'punch-left':`
    <circle cx="42" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="42" y1="17" x2="42" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="42" y1="28" x2="10" y2="30" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="10" cy="30" r="4" fill="${F.active}"/>
    <line x1="42" y1="28" x2="65" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="42" y1="46" x2="26" y2="72" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="42" y1="46" x2="56" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="26" y1="72" x2="8" y2="76" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="78" x2="66" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'high-block-left':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="60" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="24" x2="12" y2="8" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="12" cy="8" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="6" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="50" y1="76" x2="62" y2="80" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'high-block-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="10" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="24" x2="58" y2="8" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="58" cy="8" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="6" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="50" y1="76" x2="62" y2="80" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'sitting-block-left':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="48" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="30" x2="10" y2="32" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="10" cy="32" r="3" fill="${F.active}"/>
    <line x1="35" y1="30" x2="55" y2="25" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="48" x2="12" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="48" x2="58" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="12" y1="78" x2="2" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="58" y1="78" x2="68" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'sitting-block-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="48" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="30" x2="60" y2="32" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="60" cy="32" r="3" fill="${F.active}"/>
    <line x1="35" y1="30" x2="15" y2="25" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="48" x2="12" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="48" x2="58" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="12" y1="78" x2="2" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="58" y1="78" x2="68" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'inner-block-left':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="60" y2="40" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="26" x2="14" y2="20" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="14" cy="20" r="3" fill="${F.active}"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="48" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="48" y1="74" x2="62" y2="76" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'inner-block-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="10" y2="40" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="26" x2="56" y2="20" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="56" cy="20" r="3" fill="${F.active}"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="48" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="48" y1="74" x2="62" y2="76" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'knife-hand-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="26" x2="58" y2="19" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="58" cy="19" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="30" x2="12" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="22" y2="68" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="48" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="68" x2="10" y2="72" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="48" y1="76" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'knife-hand-left':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="26" x2="12" y2="19" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="12" cy="19" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="30" x2="58" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="22" y2="68" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="48" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="68" x2="10" y2="72" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="48" y1="76" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'front-kick-right':`
    <circle cx="30" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="30" y1="17" x2="30" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="30" y1="28" x2="8" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="30" y1="28" x2="52" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="30" y1="46" x2="18" y2="82" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="18" y1="82" x2="8" y2="86" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="30" y1="46" x2="42" y2="62" stroke="${F.active}" stroke-width="2"/>
    <line x1="42" y1="62" x2="62" y2="44" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="62" cy="44" r="4" fill="${F.active}"/>`,
  'front-kick-left':`
    <circle cx="40" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="40" y1="17" x2="40" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="40" y1="28" x2="18" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="40" y1="28" x2="62" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="40" y1="46" x2="52" y2="82" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="52" y1="82" x2="62" y2="86" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="40" y1="46" x2="28" y2="62" stroke="${F.active}" stroke-width="2"/>
    <line x1="28" y1="62" x2="8" y2="44" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="8" cy="44" r="4" fill="${F.active}"/>`,
  'side-kick-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="44" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="12" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="56" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="44" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="10" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="35" y1="44" x2="48" y2="58" stroke="${F.active}" stroke-width="2"/>
    <line x1="48" y1="58" x2="68" y2="52" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="68" cy="52" r="4" fill="${F.active}"/>`,
  'back-kick':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="44" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="12" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="56" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="44" x2="48" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="48" y1="76" x2="60" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="35" y1="44" x2="22" y2="58" stroke="${F.active}" stroke-width="2"/>
    <line x1="22" y1="58" x2="5" y2="52" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="5" cy="52" r="4" fill="${F.active}"/>`,
  'double-forearm':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="12" y2="16" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="58" y2="16" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="12" y1="16" x2="22" y2="8" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <line x1="58" y1="16" x2="48" y2="8" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="6" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="50" y1="78" x2="64" y2="82" stroke="${F.body}" stroke-width="2.5" stroke-linecap="round"/>`,
  'x-block':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="26" x2="12" y2="10" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="35" y1="26" x2="58" y2="10" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="35" cy="18" r="5" fill="none" stroke="${F.active}" stroke-width="2"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="6" y2="82" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="78" x2="64" y2="82" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'elbow-left':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="18" y2="22" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="18" y1="22" x2="8" y2="34" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="18" cy="22" r="5" fill="none" stroke="${F.active}" stroke-width="2"/>
    <line x1="35" y1="28" x2="60" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="52" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="6" y2="82" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="52" y1="74" x2="64" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'elbow-right':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="52" y2="22" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="52" y1="22" x2="62" y2="34" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="52" cy="22" r="5" fill="none" stroke="${F.active}" stroke-width="2"/>
    <line x1="35" y1="28" x2="10" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="20" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="52" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="20" y1="78" x2="6" y2="82" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="52" y1="74" x2="64" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'fingertip-thrust':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="10" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="62" y2="30" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <line x1="60" y1="27" x2="68" y2="30" stroke="${F.active}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="60" y1="30" x2="68" y2="27" stroke="${F.active}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'vertical-punch':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="10" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="24" x2="35" y2="4" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="35" cy="4" r="4" fill="${F.active}"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'pressing-block':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="10" y1="36" x2="60" y2="36" stroke="${F.active}" stroke-width="3" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="35" y2="36" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'twin-forearm':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="26" x2="8" y2="24" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="35" y1="32" x2="8" y2="34" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="8" cy="29" r="4" fill="${F.active}" opacity=".8"/>
    <line x1="35" y1="28" x2="58" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="22" y2="78" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="78" x2="8" y2="82" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="76" x2="62" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'heel-kick':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="44" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="12" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="56" y2="36" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="44" x2="22" y2="72" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="72" x2="10" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="35" y1="44" x2="46" y2="60" stroke="${F.active}" stroke-width="2"/>
    <line x1="46" y1="60" x2="62" y2="72" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="62" cy="72" r="4" fill="${F.active}"/>`,
  'circular-block':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <path d="M55 20 Q65 35 50 45" fill="none" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="50" cy="45" r="3.5" fill="${F.active}"/>
    <line x1="35" y1="30" x2="12" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'palm-block':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="62" y2="30" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="10" y2="30" stroke="${F.active}" stroke-width="2" stroke-linecap="round"/>
    <rect x="5" y="26" width="8" height="10" fill="${F.active}" rx="1"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
  'rising-punch':`
    <circle cx="35" cy="10" r="7" fill="none" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="17" x2="35" y2="46" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="28" x2="10" y2="38" stroke="${F.dim}" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="35" y1="28" x2="55" y2="12" stroke="${F.active}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="55" cy="12" r="4" fill="${F.active}"/>
    <line x1="35" y1="46" x2="22" y2="76" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="35" y1="46" x2="50" y2="74" stroke="${F.body}" stroke-width="1.5"/>
    <line x1="22" y1="76" x2="8" y2="80" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>
    <line x1="50" y1="74" x2="62" y2="78" stroke="${F.body}" stroke-width="2" stroke-linecap="round"/>`,
};

function makeFigure(type) {
  return FIGURES[type] || FIGURES['punch-right'];
}

// ── DIAGRAM SVG GENERATOR ────────────────────────────────────
function makeDiagram(type, movements) {
  const W=180, H=220;
  const base = `<line x1="90" y1="0" x2="90" y2="${H}" stroke="#444748" stroke-width=".5" stroke-dasharray="3,4"/>
    <line x1="0" y1="110" x2="${W}" y2="110" stroke="#444748" stroke-width=".5" stroke-dasharray="3,4"/>`;
  const labels = `
    <text x="90" y="11" text-anchor="middle" fill="#c4c7c7" font-family="Work Sans" font-size="9" letter-spacing="1">B (Front)</text>
    <text x="90" y="215" text-anchor="middle" fill="#c4c7c7" font-family="Work Sans" font-size="9" letter-spacing="1">A (Rear)</text>
    <text x="8" y="113" text-anchor="middle" fill="#c4c7c7" font-family="Work Sans" font-size="9">D</text>
    <text x="172" y="113" text-anchor="middle" fill="#c4c7c7" font-family="Work Sans" font-size="9">C</text>`;

  const shapes = {
    'CROSS': `<line x1="30" y1="30" x2="150" y2="30" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="90" y1="30" x2="90" y2="190" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="20" y1="190" x2="160" y2="190" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>`,
    'I_SHAPE': `<line x1="50" y1="25" x2="130" y2="25" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="90" y1="25" x2="90" y2="195" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="50" y1="195" x2="130" y2="195" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>`,
    'SCHOLAR': `<line x1="30" y1="30" x2="150" y2="30" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="90" y1="30" x2="90" y2="190" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="20" y1="190" x2="160" y2="190" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>`,
    'ENGINEER': `<line x1="20" y1="25" x2="160" y2="25" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="90" y1="25" x2="90" y2="195" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="30" y1="115" x2="150" y2="115" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="30" y1="195" x2="150" y2="195" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"/>`,
  };

  const shape = shapes[type] || shapes['I_SHAPE'];
  const startMark = `<polygon points="90,108 84,96 96,96" fill="#D4AF37" opacity=".6"/>
    <text x="90" y="94" text-anchor="middle" fill="#D4AF37" font-family="Work Sans" font-size="7">START</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="margin-top:8px">
    ${base}${shape}${labels}${startMark}
  </svg>`;
}

// ── RENDER CARDS ─────────────────────────────────────────────
function renderCards(filterSec) {
  const P = window.PATTERN;
  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  // Build section → color map (stable order)
  const sectionColors = ['#ac012c','#7a4a00','#1a5a1a','#1a3a7a','#5a1a7a','#7a5a00','#1a5a5a','#4a4a00','#2a5a2a','#6a2a00'];
  const secs = [...new Set(P.movements.map(m => m.sec))];
  const secColorMap = {};
  secs.forEach((s, i) => { secColorMap[s] = sectionColors[i % sectionColors.length]; });

  // Filter while preserving numeric sequence order
  const visItems = P.movements.filter(m => filterSec === 'all' || m.sec === filterSec);

  const grid = document.createElement('div');
  grid.className = 'cards-grid';

  visItems.forEach(m => {
    const card = document.createElement('div');
    card.className = 'mv-card';
    const isFast = m.note && m.note.startsWith('FAST');
    const isEnd  = m.note === 'END';
    card.innerHTML = `
      <div class="card-hdr">
        <div class="card-num"><span>Move</span><strong>${m.id}</strong></div>
        <div class="card-badges">
          <span class="badge badge-sec" style="background:${secColorMap[m.sec]};color:#fff" title="${m.secName}">§${m.sec} · ${m.secName}</span>
          ${isFast ? `<span class="badge badge-fast">⚡ ${m.note}</span>` : ''}
          ${isEnd  ? `<span class="badge" style="background:#D4AF37;color:#121414">★ END</span>` : ''}
          <span class="badge badge-dir">→ ${m.dir}</span>
        </div>
      </div>
      <div class="card-fig">
        <svg viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">${makeFigure(m.fig)}</svg>
      </div>
      <div class="card-body">
        <div class="card-tech">${m.tech}</div>
        <div class="card-kr">${m.techKr}</div>
        <div class="card-stance"><strong>${m.stance}</strong><br/><span style="font-size:9px;color:#D4AF37">${m.stanceKr}</span></div>
        <div class="card-desc">${m.desc}</div>
      </div>`;
    grid.appendChild(card);
  });

  container.appendChild(grid);

  const shown = visItems.length;
  const ct = filterSec === 'all'
    ? `All ${P.moves} movements`
    : `${shown} movement${shown !== 1 ? 's' : ''} · Section ${filterSec}`;
  document.getElementById('showing-count').textContent = ct;
}

function filterSection(sec, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards(sec);
}

// ── BUILD PAGE ───────────────────────────────────────────────
function buildPage() {
  const P = window.PATTERN;
  document.title = `${P.name} Tul — Storyboard | Grand Master Scott Craig`;

  // Build filter buttons
  const secs = [...new Set(P.movements.map(m => m.sec))];
  const secNames = {};
  P.movements.forEach(m => secNames[m.sec] = m.secName);

  const filterBtns = secs.map(s => {
    const cnt = P.movements.filter(m => m.sec === s).length;
    return `<button class="filter-btn" data-sec="${s}" onclick="filterSection('${s}',this)">${secNames[s]} <span class="fc">${cnt}</span></button>`;
  }).join('');

  const videoBlock = P.youtube
    ? `<a class="video-link" href="${P.youtube}" target="_blank">
        <div class="play-icon"><svg viewBox="0 0 16 16"><path d="M6 4l6 4-6 4V4z"/></svg></div>
        <div class="vtext"><small>YouTube · GM Craig</small><span>${P.name} Performance</span></div>
      </a>`
    : `<div class="video-link" style="opacity:.5">
        <div class="play-icon"><svg viewBox="0 0 16 16"><path d="M6 4l6 4-6 4V4z"/></svg></div>
        <div class="vtext"><small>Video reference</small><span>Coming soon</span></div>
      </div>`;

  document.body.innerHTML = `
  <header class="site-header">
    <div class="logo">Grand Master Scott Craig · TKD Mastery</div>
    <div style="display:flex;gap:20px;align-items:center">
      <a href="../practice-guide.html">← Practice Guide</a>
      <a href="../index.html">Home</a>
    </div>
  </header>

  <section class="hero">
    <div class="belt-badge">
      <span class="belt-swatch" style="background:${P.beltColor}"></span>
      <span style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#c4c7c7">${P.beltName} · ${P.gup}</span>
    </div>
    <p class="hero-tag">ITF Pattern · ${P.gup}</p>
    <h1 class="serif">${P.name} Tul
      <span class="hanja">${P.korean} &nbsp;·&nbsp; ${P.hanja}</span>
    </h1>
    <div class="hero-desc">${P.bio}</div>
    <div class="hero-meta">
      <div class="meta-item"><label>Movements</label><span>${P.moves}</span></div>
      <div class="meta-item"><label>Diagram</label><span>${P.diagramMeaning}</span></div>
      <div class="meta-item"><label>Level</label><span>${P.gup}</span></div>
      <div class="meta-item"><label>Belt</label><span>${P.beltName}</span></div>
    </div>
  </section>

  <div class="cal-divider"></div>

  <div class="content-wrap">
    <aside class="sidebar">
      <div class="sb-block">
        <h3>Pattern Diagram — ${P.diagramHanja}</h3>
        ${makeDiagram(P.diagram, P.movements)}
      </div>
      <div class="sb-block"><h3>Video Reference</h3>${videoBlock}</div>
      <div class="sb-block">
        <h3>Filter by Section</h3>
        <button class="filter-btn active" onclick="filterSection('all',this)">All Movements <span class="fc">${P.moves}</span></button>
        ${filterBtns}
      </div>
      <div class="sb-block">
        <h3>Legend</h3>
        <div class="legend-item"><div class="ld" style="background:#D4AF37"></div>Active / striking limb</div>
        <div class="legend-item"><div class="ld" style="background:#555"></div>Inactive / supporting</div>
        <div class="legend-item"><div class="ld" style="background:#ac012c"></div>FAST — paired with adjacent</div>
      </div>
    </aside>
    <main>
      <div class="sb-hdr">
        <h2 class="serif">Movement Storyboard</h2>
        <span class="showing" id="showing-count"></span>
      </div>
      <div id="cards-container"></div>
    </main>
  </div>

  <footer class="page-footer hanji">
    <div class="footer-logo">Grand Master Scott Craig</div>
    <p>ITF Tae Kwon Do · ${P.name} Tul · ${P.moves} Movements</p>
    <p class="footer-note">Based on ITF curriculum — verify against video reference</p>
  </footer>`;

  renderCards('all');
}

document.addEventListener('DOMContentLoaded', buildPage);
