import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import MoveCard from './MoveCard.jsx';

export default function FormCanvas({ form, selectedId, onSelect, onDelete, onDuplicate, onAddBlank, onUpdateMeta }) {
  if (!form) {
    return (
      <main className="canvas canvas--empty">
        <div className="canvas__empty-state">
          <div className="canvas__empty-icon">⬛</div>
          <h2 className="canvas__empty-title">No Form Loaded</h2>
          <p className="canvas__empty-sub">
            Click <strong>+ New Form</strong> to start from scratch,<br />
            or <strong>Load Form</strong> to edit an existing pattern.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="canvas">
      {/* Form header strip */}
      <div className="canvas__header" style={{ borderLeftColor: form.beltColor }}>
        <div className="canvas__header-left">
          <span className="canvas__form-name">{form.name}</span>
          {form.korean && <span className="canvas__form-kr">{form.korean}</span>}
          {form.hanja && <span className="canvas__form-hanja">{form.hanja}</span>}
        </div>
        <div className="canvas__header-right">
          <span className="canvas__badge">{form.gup}</span>
          <span className="canvas__badge canvas__badge--diagram">{form.diagramHanja} {form.diagramMeaning}</span>
          <span className="canvas__badge canvas__badge--count">{form.movements.length} moves</span>
        </div>
      </div>

      {/* Bio editor */}
      <textarea
        className="canvas__bio"
        value={form.bio || ''}
        onChange={e => onUpdateMeta({ bio: e.target.value })}
        placeholder="Form description / bio (optional)…"
        rows={2}
      />

      {/* Sequence */}
      <Droppable droppableId="canvas">
        {(provided, snapshot) => (
          <div
            className={`canvas__sequence ${snapshot.isDraggingOver ? 'canvas__sequence--over' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {form.movements.length === 0 && !snapshot.isDraggingOver && (
              <div className="canvas__drop-hint">
                Drag moves from the library, or click <strong>+ Add Move</strong> below.
              </div>
            )}

            {form.movements.map((move, idx) => (
              <MoveCard
                key={move._id}
                move={move}
                index={idx}
                isSelected={move._id === selectedId}
                onSelect={onSelect}
                onDelete={onDelete}
                onDuplicate={onDuplicate}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <button className="canvas__add-btn" onClick={onAddBlank}>
        + Add Move
      </button>
    </main>
  );
}
