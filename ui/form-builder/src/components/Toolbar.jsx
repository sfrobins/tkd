import React, { useState } from 'react';
import { BELT_GRADES, DIAGRAM_SHAPES } from '../data/vocabulary.js';

export default function Toolbar({ currentForm, allForms, onNew, onLoad, onEditBuiltIn, onSaveJSON, onExportHTML, onUpdateMeta }) {
  const [loadOpen, setLoadOpen] = useState(false);

  return (
    <header className="toolbar">
      <div className="toolbar__brand">
        <span className="toolbar__logo">⚫</span>
        <span className="toolbar__title">TKD Form Builder</span>
        <span className="toolbar__sub">Grand Master Scott Craig</span>
      </div>

      <div className="toolbar__actions">
        <button className="btn btn--ghost" onClick={onNew} title="Start a new blank form">
          + New Form
        </button>

        <div className="dropdown-wrap">
          <button className="btn btn--ghost" onClick={() => setLoadOpen(v => !v)} title="Load an existing form to edit">
            Load Form ▾
          </button>
          {loadOpen && (
            <div className="dropdown" onMouseLeave={() => setLoadOpen(false)}>
              <div className="dropdown__section-label">Built-in Forms</div>
              {allForms.map(f => (
                <button
                  key={f.id}
                  className="dropdown__item"
                  onClick={() => { onEditBuiltIn(f); setLoadOpen(false); }}
                >
                  <span className="dropdown__belt" style={{ background: f.beltColor }} />
                  <span>{f.name}</span>
                  <span className="dropdown__gup">{f.gup}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {currentForm && (
        <div className="toolbar__form-meta">
          <input
            className="toolbar__name-input"
            value={currentForm.name}
            onChange={e => onUpdateMeta({ name: e.target.value })}
            placeholder="Form Name"
          />
          <input
            className="toolbar__name-input toolbar__name-input--sm"
            value={currentForm.korean}
            onChange={e => onUpdateMeta({ korean: e.target.value })}
            placeholder="Korean"
          />
          <select
            className="toolbar__select"
            value={currentForm.diagram}
            onChange={e => {
              const shape = DIAGRAM_SHAPES.find(s => s.id === e.target.value);
              onUpdateMeta({ diagram: e.target.value, diagramHanja: shape?.hanja || '', diagramMeaning: shape?.meaning || '' });
            }}
          >
            {DIAGRAM_SHAPES.map(s => (
              <option key={s.id} value={s.id}>{s.label} — {s.meaning}</option>
            ))}
          </select>
          <select
            className="toolbar__select"
            value={`${currentForm.gup}|${currentForm.beltColor}|${currentForm.beltName}`}
            onChange={e => {
              const [gup, beltColor, beltName] = e.target.value.split('|');
              onUpdateMeta({ gup, beltColor, beltName });
            }}
          >
            {BELT_GRADES.map(b => (
              <option key={b.gup + b.color} value={`${b.gup}|${b.color}|${b.name}`}>
                {b.gup} — {b.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="toolbar__file-actions">
        <button
          className="btn btn--primary"
          onClick={onSaveJSON}
          disabled={!currentForm}
          title="Save form as JSON"
        >
          Save JSON
        </button>
        <button
          className="btn btn--accent"
          onClick={onExportHTML}
          disabled={!currentForm}
          title="Export as storyboard HTML"
        >
          Export HTML
        </button>
      </div>
    </header>
  );
}
