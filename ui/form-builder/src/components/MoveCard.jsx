import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { CAT_COLORS, STANCE_COLORS, TECHNIQUES, STANCES } from '../data/vocabulary.js';

function techColor(techName) {
  const t = TECHNIQUES.find(t => t.name === techName);
  return t ? CAT_COLORS[t.cat] : CAT_COLORS.punch;
}

function stanceColor(stanceName) {
  const s = STANCES.find(s => s.name === stanceName);
  return s ? STANCE_COLORS[s.type] : STANCE_COLORS.walking;
}

const DIR_ARROWS = { A: '↩', B: '↑', C: '→', D: '←', EF: '↗', GH: '↖', IJ: '↘', KL: '↙' };

export default function MoveCard({ move, index, isSelected, onSelect, onDelete, onDuplicate }) {
  const tc = techColor(move.tech);
  const sc = stanceColor(move.stance);

  return (
    <Draggable draggableId={move._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`move-card ${isSelected ? 'move-card--selected' : ''} ${snapshot.isDragging ? 'move-card--dragging' : ''}`}
          onClick={() => onSelect(move._id)}
        >
          {/* Drag handle */}
          <div className="move-card__handle" {...provided.dragHandleProps} title="Drag to reorder">
            ⠿
          </div>

          {/* Move number */}
          <div className="move-card__num">{move.id}</div>

          {/* Direction */}
          <div className="move-card__dir" title={`Direction: ${move.dir}`}>
            <span className="move-card__dir-arrow">{DIR_ARROWS[move.dir] || move.dir}</span>
            <span className="move-card__dir-label">{move.dir}</span>
          </div>

          {/* Lower body — stance */}
          <div
            className="move-card__stance"
            style={{ borderColor: sc.border, background: sc.bg, color: sc.text }}
            title={move.stanceKr}
          >
            <span className="move-card__label">LOWER</span>
            <span className="move-card__value">{move.stance}</span>
          </div>

          {/* Upper body — technique */}
          <div
            className="move-card__tech"
            style={{ borderColor: tc.border, background: tc.bg, color: tc.text }}
            title={move.techKr}
          >
            <span className="move-card__label">UPPER</span>
            <span className="move-card__value">{move.tech}</span>
          </div>

          {/* Section badge */}
          <div className="move-card__sec" title={move.secName}>
            {move.sec}
          </div>

          {/* Note badge */}
          {move.note && (
            <div className={`move-card__note ${move.note === 'END' ? 'move-card__note--end' : ''}`}>
              {move.note}
            </div>
          )}

          {/* Actions */}
          <div className="move-card__actions">
            <button
              className="move-card__btn"
              onClick={e => { e.stopPropagation(); onDuplicate(move._id); }}
              title="Duplicate this move"
            >⧉</button>
            <button
              className="move-card__btn move-card__btn--del"
              onClick={e => { e.stopPropagation(); onDelete(move._id); }}
              title="Delete this move"
            >✕</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
