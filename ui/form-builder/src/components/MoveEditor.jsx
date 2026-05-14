import React from 'react';
import { TECHNIQUES, STANCES, DIRECTIONS } from '../data/vocabulary.js';

export default function MoveEditor({ move, onUpdate }) {
  if (!move) {
    return (
      <div className="move-editor move-editor--empty">
        <p>Select a move on the canvas to edit its details.</p>
      </div>
    );
  }

  const set = (key, val) => onUpdate(move._id, { [key]: val });

  const handleTechChange = (name) => {
    const t = TECHNIQUES.find(t => t.name === name);
    set('tech', name);
    if (t) set('techKr', t.nameKr);
    if (t) set('fig', t.id);
  };

  const handleStanceChange = (name) => {
    const s = STANCES.find(s => s.name === name);
    set('stance', name);
    if (s) set('stanceKr', s.nameKr);
  };

  return (
    <div className="move-editor">
      <div className="move-editor__title">Move #{move.id}</div>

      {/* Section */}
      <label className="field">
        <span className="field__label">Section</span>
        <div className="field__row">
          <input
            className="field__input field__input--sm"
            value={move.sec}
            maxLength={2}
            onChange={e => set('sec', e.target.value.toUpperCase())}
            placeholder="A"
          />
          <input
            className="field__input"
            value={move.secName}
            onChange={e => set('secName', e.target.value)}
            placeholder="Section name…"
          />
        </div>
      </label>

      {/* Direction */}
      <label className="field">
        <span className="field__label">Direction</span>
        <select className="field__select" value={move.dir} onChange={e => set('dir', e.target.value)}>
          {DIRECTIONS.map(d => (
            <option key={d.id} value={d.id}>{d.id} — {d.desc}</option>
          ))}
        </select>
      </label>

      {/* Lower body — Stance */}
      <label className="field">
        <span className="field__label">Lower Body (Stance)</span>
        <select className="field__select" value={move.stance} onChange={e => handleStanceChange(e.target.value)}>
          <option value="">— Custom / type below —</option>
          {STANCES.map(s => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </select>
        <input
          className="field__input field__input--kr"
          value={move.stanceKr}
          onChange={e => set('stanceKr', e.target.value)}
          placeholder="Korean…"
        />
      </label>

      {/* Upper body — Technique */}
      <label className="field">
        <span className="field__label">Upper Body (Technique)</span>
        <select className="field__select" value={move.tech} onChange={e => handleTechChange(e.target.value)}>
          <option value="">— Custom / type below —</option>
          {TECHNIQUES.map(t => (
            <option key={t.id} value={t.name}>[{t.cat}] {t.name}</option>
          ))}
        </select>
        <input
          className="field__input field__input--kr"
          value={move.techKr}
          onChange={e => set('techKr', e.target.value)}
          placeholder="Korean…"
        />
      </label>

      {/* Description */}
      <label className="field">
        <span className="field__label">Description</span>
        <textarea
          className="field__textarea"
          value={move.desc || ''}
          onChange={e => set('desc', e.target.value)}
          placeholder="Instructor notes / description…"
          rows={3}
        />
      </label>

      {/* Note */}
      <label className="field">
        <span className="field__label">Note</span>
        <div className="field__row">
          <input
            className="field__input"
            value={move.note || ''}
            onChange={e => set('note', e.target.value || null)}
            placeholder="e.g. FAST with 3, END, KI-HAP…"
          />
          {move.note && (
            <button className="btn btn--ghost btn--sm" onClick={() => set('note', null)}>✕ Clear</button>
          )}
        </div>
      </label>

      {/* Figure key */}
      <label className="field">
        <span className="field__label">Figure Key (for storyboard)</span>
        <input
          className="field__input"
          value={move.fig || ''}
          onChange={e => set('fig', e.target.value)}
          placeholder="e.g. high-block-left, punch-right…"
        />
      </label>
    </div>
  );
}
