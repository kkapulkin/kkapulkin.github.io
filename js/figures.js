/* Signature figures — line-work drawn from the subject's own mathematics.
   Injected via [data-fig] attribute. All strokes use CSS vars so they
   theme with the page. Animations respect prefers-reduced-motion. */

const FIGURES = {

/* ---- cubical complex with a glued path (discrete / cubical homotopy) ---- */
cubes: `
<svg viewBox="0 0 460 380" role="img" aria-label="A cubical complex: nested squares and cubes with a highlighted homotopy path between two vertices.">
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="var(--ochre)" stroke-width="1.3"/>
    </marker>
  </defs>
  <g fill="none" stroke="var(--line)" stroke-width="1.4">
    <!-- back cube -->
    <path d="M120,90 h150 v150 h-150 Z"/>
    <path d="M170,50 h150 v150 h-150 Z"/>
    <path d="M120,90 L170,50 M270,90 L320,50 M270,240 L320,200 M120,240 L170,200"/>
  </g>
  <g fill="none" stroke="var(--chalk-faint)" stroke-width="1.2" opacity=".85">
    <!-- a filled 2-cell shading -->
    <path d="M120,90 h150 v150 h-150 Z" fill="var(--ink-3)" fill-opacity=".5" stroke="none"/>
    <path d="M195,150 h110 v110 h-110 Z"/>
  </g>
  <!-- vertices -->
  <g fill="var(--chalk-dim)">
    <circle cx="120" cy="90" r="4"/><circle cx="270" cy="90" r="4"/>
    <circle cx="270" cy="240" r="4"/><circle cx="120" cy="240" r="4"/>
    <circle cx="170" cy="50" r="4"/><circle cx="320" cy="50" r="4"/>
    <circle cx="320" cy="200" r="4"/><circle cx="170" cy="200" r="4"/>
  </g>
  <!-- highlighted homotopy path -->
  <path class="fig-path" d="M120,90 Q210,60 270,90 Q320,150 320,200"
        fill="none" stroke="var(--ochre)" stroke-width="2.4"
        stroke-linecap="round" marker-end="url(#ah)"/>
  <g fill="var(--ochre)">
    <circle cx="120" cy="90" r="5"/><circle cx="320" cy="200" r="5"/>
  </g>
  <text x="104" y="84" font-family="'Spline Sans Mono',monospace" font-size="13" fill="var(--ochre)">x</text>
  <text x="330" y="204" font-family="'Spline Sans Mono',monospace" font-size="13" fill="var(--ochre)">y</text>
</svg>`,

/* ---- straightening: a Grothendieck-style fibration diagram ---- */
straighten: `
<svg viewBox="0 0 460 360" role="img" aria-label="A straightening diagram: a fibration projecting down to a base category, with fibres drawn as vertical stacks.">
  <defs>
    <marker id="ah2" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
      <path d="M0,0 L7,3.2 L0,6.4" fill="none" stroke="var(--chalk-dim)" stroke-width="1.3"/>
    </marker>
  </defs>
  <!-- fibres -->
  <g stroke="var(--line)" stroke-width="1.3" fill="none">
    <path d="M90,40 v120 M230,30 v120 M370,50 v120"/>
  </g>
  <g fill="var(--chalk-faint)">
    <circle cx="90" cy="50" r="3.5"/><circle cx="90" cy="95" r="3.5"/><circle cx="90" cy="145" r="3.5"/>
    <circle cx="230" cy="42" r="3.5"/><circle cx="230" cy="90" r="3.5"/><circle cx="230" cy="140" r="3.5"/>
    <circle cx="370" cy="60" r="3.5"/><circle cx="370" cy="110" r="3.5"/><circle cx="370" cy="160" r="3.5"/>
  </g>
  <!-- transport arrows between fibres -->
  <g fill="none" stroke="var(--ochre)" stroke-width="1.8" opacity=".9">
    <path d="M98,50 Q160,20 222,42" marker-end="url(#ah2)"/>
    <path d="M238,90 Q304,80 362,110" marker-end="url(#ah2)"/>
  </g>
  <!-- projection -->
  <g stroke="var(--chalk-faint)" stroke-width="1.2" stroke-dasharray="3 4" fill="none">
    <path d="M90,175 v55 M230,165 v65 M370,185 v45"/>
  </g>
  <!-- base -->
  <line x1="60" y1="255" x2="400" y2="255" stroke="var(--line)" stroke-width="1.4"/>
  <g fill="var(--chalk-dim)">
    <circle cx="90" cy="255" r="4"/><circle cx="230" cy="255" r="4"/><circle cx="370" cy="255" r="4"/>
  </g>
  <g fill="none" stroke="var(--chalk-dim)" stroke-width="1.5">
    <path d="M104,255 h108" marker-end="url(#ah2)"/>
    <path d="M244,255 h108" marker-end="url(#ah2)"/>
  </g>
  <text x="52" y="300" font-family="'Spline Sans Mono',monospace" font-size="12" fill="var(--chalk-faint)">base category  𝒞</text>
  <text x="52" y="24" font-family="'Spline Sans Mono',monospace" font-size="12" fill="var(--ochre)">total space  ∫F</text>
</svg>`,

/* ---- persistence / discrete homology of data ---- */
persistence: `
<svg viewBox="0 0 460 360" role="img" aria-label="A persistence diagram: birth-death points above the diagonal, with one long-lived feature highlighted.">
  <!-- axes -->
  <g stroke="var(--line)" stroke-width="1.3" fill="none">
    <path d="M70,300 h330 M70,300 V40"/>
  </g>
  <!-- diagonal -->
  <line x1="70" y1="300" x2="360" y2="40" stroke="var(--chalk-faint)" stroke-width="1" stroke-dasharray="4 5"/>
  <!-- shaded band near diagonal (noise) -->
  <path d="M70,300 L360,40 L360,72 L96,300 Z" fill="var(--ink-3)" fill-opacity=".45"/>
  <!-- points -->
  <g fill="var(--chalk-dim)">
    <circle cx="120" cy="255" r="3.5"/><circle cx="150" cy="238" r="3.5"/>
    <circle cx="185" cy="210" r="3.5"/><circle cx="205" cy="215" r="3.5"/>
    <circle cx="150" cy="205" r="3.5"/><circle cx="240" cy="170" r="3.5"/>
    <circle cx="110" cy="270" r="3.5"/><circle cx="270" cy="180" r="3.5"/>
  </g>
  <!-- long-lived feature -->
  <circle cx="150" cy="110" r="6" fill="var(--ochre)"/>
  <line x1="150" y1="245" x2="150" y2="116" stroke="var(--ochre)" stroke-width="1.6" stroke-dasharray="2 4" opacity=".8"/>
  <text x="163" y="106" font-family="'Spline Sans Mono',monospace" font-size="12" fill="var(--ochre)">H₁</text>
  <text x="372" y="304" font-family="'Spline Sans Mono',monospace" font-size="11" fill="var(--chalk-faint)">birth</text>
  <text x="30" y="46" font-family="'Spline Sans Mono',monospace" font-size="11" fill="var(--chalk-faint)">death</text>
</svg>`,

/* ---- small brand glyph: a commuting square ---- */
glyph: `
<svg viewBox="0 0 32 32" aria-hidden="true">
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <rect x="6" y="6" width="20" height="20" rx="2"/>
    <path d="M6,6 L26,26" stroke="var(--ochre)"/>
  </g>
  <circle cx="6" cy="6" r="2.4" fill="var(--ochre)"/>
  <circle cx="26" cy="26" r="2.4" fill="var(--ochre)"/>
</svg>`,

/* ---- abstraction vs complexity positioning map ---- */
positioning: `
<svg viewBox="0 0 620 440" role="img" aria-label="A plot of Abstraction against Complexity. Pure mathematics sits high-abstraction and low-complexity; applied mathematics sits low-abstraction and high-complexity; the interesting problems this group works on sit high in both.">
  <defs>
    <marker id="axarrow" markerWidth="10" markerHeight="10" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8" fill="none" stroke="var(--chalk-faint)" stroke-width="1.6"/>
    </marker>
  </defs>
  <!-- axes: y-axis drawn upward so its arrow points up; x-axis drawn rightward -->
  <path d="M110,360 L110,60" fill="none" stroke="var(--chalk-faint)" stroke-width="2" marker-end="url(#axarrow)"/>
  <path d="M110,360 L560,360" fill="none" stroke="var(--chalk-faint)" stroke-width="2" marker-end="url(#axarrow)"/>
  <!-- axis labels -->
  <text x="86" y="215" transform="rotate(-90 86 215)" text-anchor="middle"
        font-family="'Spline Sans Mono',monospace" font-size="15" letter-spacing="1" fill="var(--chalk-dim)">Abstraction</text>
  <text x="335" y="398" text-anchor="middle"
        font-family="'Spline Sans Mono',monospace" font-size="15" letter-spacing="1" fill="var(--chalk-dim)">Complexity</text>
  <text x="335" y="420" text-anchor="middle"
        font-family="'Spline Sans Mono',monospace" font-size="11.5" fill="var(--chalk-faint)"># of equations, variables</text>
  <!-- quadrant labels -->
  <text x="235" y="108" text-anchor="middle" font-family="'Fraunces',serif" font-weight="600" font-size="19" fill="var(--chalk)">Pure</text>
  <text x="235" y="132" text-anchor="middle" font-family="'Fraunces',serif" font-weight="600" font-size="19" fill="var(--chalk)">mathematics</text>
  <text x="470" y="300" text-anchor="middle" font-family="'Fraunces',serif" font-weight="600" font-size="19" fill="var(--chalk)">Applied</text>
  <text x="470" y="324" text-anchor="middle" font-family="'Fraunces',serif" font-weight="600" font-size="19" fill="var(--chalk)">mathematics</text>
  <!-- the sweet spot -->
  <circle cx="470" cy="118" r="72" fill="var(--ochre)" fill-opacity=".1" stroke="var(--ochre)" stroke-width="1.3" stroke-dasharray="3 4"/>
  <text x="470" y="112" text-anchor="middle" font-family="'Fraunces',serif" font-weight="600" font-style="italic" font-size="19" fill="var(--ochre)">Interesting</text>
  <text x="470" y="136" text-anchor="middle" font-family="'Fraunces',serif" font-weight="600" font-style="italic" font-size="19" fill="var(--ochre)">problems</text>
</svg>`
};

document.querySelectorAll('[data-fig]').forEach(el => {
  const f = FIGURES[el.dataset.fig];
  if (f) el.innerHTML = f;
});

// gentle draw-in of the highlighted path in the hero
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  requestAnimationFrame(() => {
    document.querySelectorAll('.fig-path').forEach(p => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.transition = 'stroke-dashoffset 1.6s ease .3s';
      requestAnimationFrame(() => { p.style.strokeDashoffset = 0; });
    });
  });
}
