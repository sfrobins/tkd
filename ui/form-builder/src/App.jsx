import React, { useState, useCallback } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { FORMS } from './data/forms.js';
import { newForm, cloneForm, hydrateMoves, insertMove, removeMove, updateMove, reorderMoves, newMove } from './utils/formUtils.js';
import { generateStoryboardHTML, storyboardFilename } from './utils/exportHTML.js';
import Toolbar from './components/Toolbar.jsx';
import LibraryPanel from './components/LibraryPanel.jsx';
import FormCanvas from './components/FormCanvas.jsx';
import RightPanel from './components/RightPanel.jsx';

const BUILT_IN_FORMS = FORMS.map(hydrateMoves);

export default function App() {
  // ── Form state ─────────────────────────────────────────────────────────────
  const [currentForm, setCurrentForm] = useState(null);
  const [savedCustomForms, setSavedCustomForms] = useState([]);

  // ── Selection & UI state ───────────────────────────────────────────────────
  const [selectedId, setSelectedId]   = useState(null);
  const [rightTab,   setRightTab]     = useState('editor');   // 'editor' | 'preview'
  const [previewStep, setPreviewStep] = useState(0);
  const [toast, setToast]             = useState(null);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const allForms = [...BUILT_IN_FORMS, ...savedCustomForms];

  // ── Form-level actions ─────────────────────────────────────────────────────
  const handleNewForm = () => {
    setCurrentForm(hydrateMoves(newForm()));
    setSelectedId(null);
    setPreviewStep(0);
  };

  const handleLoadForm = (form) => {
    setCurrentForm(hydrateMoves(cloneForm(form)));
    setSelectedId(null);
    setPreviewStep(0);
  };

  const handleEditBuiltIn = (form) => {
    setCurrentForm(hydrateMoves(cloneForm(form)));
    setSelectedId(null);
    setPreviewStep(0);
    showToast(`Loaded ${form.name} for editing — a copy was created.`);
  };

  const handleUpdateMeta = (patch) => {
    setCurrentForm(f => ({ ...f, ...patch }));
  };

  // ── Move-level actions ─────────────────────────────────────────────────────
  const handleDeleteMove = useCallback((_id) => {
    setCurrentForm(f => ({ ...f, movements: removeMove(f.movements, _id) }));
    setSelectedId(null);
  }, []);

  const handleUpdateMove = useCallback((_id, patch) => {
    setCurrentForm(f => ({ ...f, movements: updateMove(f.movements, _id, patch) }));
  }, []);

  const handleAddBlankMove = () => {
    if (!currentForm) return;
    const lastMove = currentForm.movements[currentForm.movements.length - 1];
    const blank = newMove(lastMove ? { sec: lastMove.sec, secName: lastMove.secName } : {});
    setCurrentForm(f => ({ ...f, movements: [...f.movements, blank] }));
    setSelectedId(blank._id);
    setRightTab('editor');
  };

  const handleDuplicateMove = useCallback((_id) => {
    setCurrentForm(f => {
      const idx = f.movements.findIndex(m => m._id === _id);
      if (idx === -1) return f;
      const copy = { ...f.movements[idx] };
      return { ...f, movements: insertMove(f.movements, idx + 1, copy) };
    });
  }, []);

  // ── Drag & Drop ────────────────────────────────────────────────────────────
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination || !currentForm) return;

    if (source.droppableId === 'canvas' && destination.droppableId === 'canvas') {
      // Reorder within canvas
      setCurrentForm(f => ({
        ...f,
        movements: reorderMoves(f.movements, source.index, destination.index),
      }));
    } else if (source.droppableId === 'library' && destination.droppableId === 'canvas') {
      // Add from library
      const [, encodedMove] = result.draggableId.split('::');
      try {
        const move = JSON.parse(decodeURIComponent(encodedMove));
        setCurrentForm(f => ({
          ...f,
          movements: insertMove(f.movements, destination.index, move),
        }));
      } catch { /* ignore corrupt drags */ }
    }
  };

  // ── Save & Export ──────────────────────────────────────────────────────────
  const handleSaveJSON = async () => {
    if (!currentForm) return;
    try {
      if (window.electronAPI?.saveJSON) {
        const result = await window.electronAPI.saveJSON(currentForm);
        if (result.success) showToast(`Saved JSON → ${result.filename}`);
      } else {
        // Browser fallback
        const blob = new Blob([JSON.stringify(currentForm, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${currentForm.id}.json`;
        a.click();
        showToast('JSON downloaded');
      }
    } catch (e) {
      showToast('Save failed: ' + e.message, 'error');
    }
  };

  const handleExportHTML = async () => {
    if (!currentForm) return;
    try {
      const html = generateStoryboardHTML(currentForm);
      const filename = storyboardFilename(currentForm);
      if (window.electronAPI?.saveHTML) {
        const result = await window.electronAPI.saveHTML(filename, html);
        if (result.success) showToast(`HTML exported → storyboards/${filename}`);
      } else {
        const blob = new Blob([html], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        showToast('HTML downloaded');
      }
    } catch (e) {
      showToast('Export failed: ' + e.message, 'error');
    }
  };

  // ── Selected move ──────────────────────────────────────────────────────────
  const selectedMove = currentForm?.movements.find(m => m._id === selectedId) || null;

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="app-root">
        <Toolbar
          currentForm={currentForm}
          allForms={allForms}
          onNew={handleNewForm}
          onLoad={handleLoadForm}
          onEditBuiltIn={handleEditBuiltIn}
          onSaveJSON={handleSaveJSON}
          onExportHTML={handleExportHTML}
          onUpdateMeta={handleUpdateMeta}
        />

        <div className="main-layout">
          <LibraryPanel
            forms={allForms}
            onAddToCanvas={(move) => {
              if (!currentForm) return;
              setCurrentForm(f => ({
                ...f,
                movements: insertMove(f.movements, f.movements.length, move),
              }));
            }}
          />

          <FormCanvas
            form={currentForm}
            selectedId={selectedId}
            onSelect={(id) => { setSelectedId(id); setRightTab('editor'); }}
            onDelete={handleDeleteMove}
            onDuplicate={handleDuplicateMove}
            onAddBlank={handleAddBlankMove}
            onUpdateMeta={handleUpdateMeta}
          />

          <RightPanel
            tab={rightTab}
            onTabChange={setRightTab}
            move={selectedMove}
            form={currentForm}
            previewStep={previewStep}
            onPreviewStep={setPreviewStep}
            onUpdateMove={handleUpdateMove}
          />
        </div>

        {toast && (
          <div className={`toast toast--${toast.type}`}>{toast.msg}</div>
        )}
      </div>
    </DragDropContext>
  );
}
