import React, { useState } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { TECHNIQUES, STANCES, CAT_COLORS, STANCE_COLORS } from '../data/vocabulary.js';
import { newMove } from '../utils/formUtils.js';

export default function LibraryPanel({ forms, onAddToCanvas }) {
  const [tab, setTab]         = useState('techniques');
  const [filter, setFilter]   = useState('');
  const [formIdx, setFormIdx] = useState(0);

  const q = filter.toLowerCase();

  const filteredTechs = TECHNIQUES.filter(t =>
    !q || t.name.toLowerCase().includes(q) || t.nameKr.includes(q)
  );
  const filteredStances = STANCES.filter(s =>
    !q || s.name.toLowerCase().includes(q) || s.nameKr.includes(q)
  );
  const formMoves = forms[formIdx]?.movements.filter(m =>
    !q || m.tech.toLowerCase().includes(q) || m.stance.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
  ) || [];

  return (
    <aside className="library-panel">
      <div className="library-panel__header">
        <div className="library-panel__tabs">
          {['techniques', 'stances', 'forms'].map(t => (
            <button
              key={t}
              className={`lib-tab ${tab === t ? 'lib-tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'techniques' ? 'Techniques' : t === 'stances' ? 'Stances' : 'From Form'}
            </button>
          ))}
        </div>
        <input
          className="library-panel__search"
          placeholder="Search…"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      {tab === 'forms' && (
        <select
          className="library-panel__form-select"
          value={formIdx}
          onChange={e => setFormIdx(+e.target.value)}
        >
          {forms.map((f, i) => (
            <option key={f.id} value={i}>{f.name} ({f.gup})</option>
          ))}
        </select>
      )}

      <Droppable droppableId="library" isDropDisabled={true}>
        {(provided) => (
          <div
            className="library-panel__list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tab === 'techniques' && filteredTechs.map((tech, idx) => {
              const move = newMove({ tech: tech.name, techKr: tech.nameKr, fig: tech.id });
              const encoded = encodeURIComponent(JSON.stringify(move));
              const colors = CAT_COLORS[tech.cat] || CAT_COLORS.block;
              return (
                <Draggable key={tech.id} draggableId={`library::${encoded}`} index={idx}>
                  {(prov, snap) => (
                    <div
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                      className={`lib-item ${snap.isDragging ? 'lib-item--dragging' : ''}`}
                      style={{ ...prov.draggableProps.style, borderLeftColor: colors.border }}
                      onClick={() => onAddToCanvas(move)}
                      title="Click to add, or drag to position"
                    >
                      <span className="lib-item__cat" style={{ color: colors.text }}>{tech.cat}</span>
                      <span className="lib-item__name">{tech.name}</span>
                      <span className="lib-item__kr">{tech.nameKr}</span>
                    </div>
                  )}
                </Draggable>
              );
            })}

            {tab === 'stances' && filteredStances.map((stance, idx) => {
              const move = newMove({ stance: stance.name, stanceKr: stance.nameKr });
              const encoded = encodeURIComponent(JSON.stringify(move));
              const colors = STANCE_COLORS[stance.type] || STANCE_COLORS.walking;
              return (
                <Draggable key={stance.id} draggableId={`library::${encoded}`} index={idx}>
                  {(prov, snap) => (
                    <div
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                      className={`lib-item ${snap.isDragging ? 'lib-item--dragging' : ''}`}
                      style={{ ...prov.draggableProps.style, borderLeftColor: colors.border }}
                      onClick={() => onAddToCanvas(move)}
                      title="Click to add, or drag to position"
                    >
                      <span className="lib-item__cat" style={{ color: colors.text }}>{stance.type}</span>
                      <span className="lib-item__name">{stance.name}</span>
                      <span className="lib-item__kr">{stance.nameKr}</span>
                    </div>
                  )}
                </Draggable>
              );
            })}

            {tab === 'forms' && formMoves.map((move, idx) => {
              const encoded = encodeURIComponent(JSON.stringify(move));
              return (
                <Draggable key={`fm-${idx}`} draggableId={`library::${encoded}`} index={idx}>
                  {(prov, snap) => (
                    <div
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      {...prov.dragHandleProps}
                      className={`lib-item lib-item--move ${snap.isDragging ? 'lib-item--dragging' : ''}`}
                      style={prov.draggableProps.style}
                      onClick={() => onAddToCanvas(move)}
                      title="Click to add, or drag to position"
                    >
                      <span className="lib-item__num">#{move.id}</span>
                      <div className="lib-item__move-body">
                        <span className="lib-item__name">{move.tech}</span>
                        <span className="lib-item__sub">{move.stance} → {move.dir}</span>
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </aside>
  );
}
