import React from 'react';
import { CAT_COLORS, STANCE_COLORS, TECHNIQUES, STANCES } from '../data/vocabulary.js';

const DIR_ARROWS = { A: '↩', B: '↑', C: '→', D: '←', EF: '↗', GH: '↖', IJ: '↘', KL: '↙' };

function techColor(name) {
  const t = TECHNIQUES.find(t => t.name === name);
  return t ? CAT_COLORS[t.cat] : CAT_COLORS.punch;
}
function stanceColor(name) {
  const s = STANCES.find(s => s.name === name);
  return s ? STANCE_COLORS[s.type] : STANCE_COLORS.walking;
}

export default function PreviewPanel({ form, step, onStep }) {
  if (!form || form.movements.length === 0) {
    return (
      <div className="preview-panel preview-panel--empty">
        <p>Add moves to the canvas to preview the sequence.</p>
      </div>
    );
  }

  const moves = form.movements;
  const move  = moves[step] || moves[0];
  const tc = techColor(move.tech);
  const sc = stanceColor(move.stance);

  return (
    <div className="preview-panel">
      <div className="preview-panel__header">
        <span className="preview-panel__title">Step-Through Preview</span>
        <span className="preview-panel__count">{step + 1} / {moves.length}</span>
      </div>

      {/* Progress bar */}
      <div className="preview-bar">
        <div
          className="preview-bar__fill"
          style={{ width: `${((step + 1) / moves.length) * 100}%` }}
        />
      </div>

      {/* Current move display */}
      <div className="preview-move">
        <div className="preview-move__num">#{move.id}</div>

        <div className="preview-move__dir">
          <span className="preview-move__arrow">{DIR_ARROWS[move.dir] || move.dir}</span>
          <span className="preview-move__dir-label">Direction {move.dir}</span>
        </div>

        {move.sec && (
          <div className="preview-move__sec">
            Section {move.sec} — {move.secName}
          </div>
        )}

        {/* Stance */}
        <div
          className="preview-move__body-block"
          style={{ borderColor: sc.border, background: sc.bg }}
        >
          <span className="preview-move__body-label" style={{ color: sc.text }}>LOWER BODY</span>
          <span className="preview-move__body-name">{move.stance}</span>
          {move.stanceKr && <span className="preview-move__body-kr">{move.stanceKr}</span>}
        </div>

        {/* Technique */}
        <div
          className="preview-move__body-block"
          style={{ borderColor: tc.border, background: tc.bg }}
        >
          <span className="preview-move__body-label" style={{ color: tc.text }}>UPPER BODY</span>
          <span className="preview-move__body-name">{move.tech}</span>
          {move.techKr && <span className="preview-move__body-kr">{move.techKr}</span>}
        </div>

        {/* Description */}
        {move.desc && (
          <p className="preview-move__desc">{move.desc}</p>
        )}

        {/* Note */}
        {move.note && (
          <div className={`preview-move__note ${move.note === 'END' ? 'preview-move__note--end' : ''}`}>
            {move.note}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="preview-nav">
        <button
          className="btn btn--ghost"
          onClick={() => onStep(0)}
          disabled={step === 0}
          title="First move"
        >⏮</button>
        <button
          className="btn btn--ghost"
          onClick={() => onStep(Math.max(0, step - 1))}
          disabled={step === 0}
          title="Previous"
        >◀ Prev</button>
        <button
          className="btn btn--primary"
          onClick={() => onStep(Math.min(moves.length - 1, step + 1))}
          disabled={step === moves.length - 1}
          title="Next"
        >Next ▶</button>
        <button
          className="btn btn--ghost"
          onClick={() => onStep(moves.length - 1)}
          disabled={step === moves.length - 1}
          title="Last move"
        >⏭</button>
      </div>

      {/* Mini sequence map */}
      <div className="preview-map">
        {moves.map((m, i) => (
          <button
            key={m._id}
            className={`preview-map__dot ${i === step ? 'preview-map__dot--active' : ''} ${m.note === 'END' ? 'preview-map__dot--end' : ''}`}
            onClick={() => onStep(i)}
            title={`#${m.id}: ${m.tech}`}
          >
            {m.id}
          </button>
        ))}
      </div>
    </div>
  );
}
