import React from 'react';
import MoveEditor from './MoveEditor.jsx';
import PreviewPanel from './PreviewPanel.jsx';

export default function RightPanel({ tab, onTabChange, move, form, previewStep, onPreviewStep, onUpdateMove }) {
  return (
    <aside className="right-panel">
      <div className="right-panel__tabs">
        <button
          className={`right-tab ${tab === 'editor' ? 'right-tab--active' : ''}`}
          onClick={() => onTabChange('editor')}
        >
          Edit Move
        </button>
        <button
          className={`right-tab ${tab === 'preview' ? 'right-tab--active' : ''}`}
          onClick={() => onTabChange('preview')}
        >
          Preview
        </button>
      </div>

      <div className="right-panel__body">
        {tab === 'editor'
          ? <MoveEditor move={move} onUpdate={onUpdateMove} />
          : <PreviewPanel form={form} step={previewStep} onStep={onPreviewStep} />
        }
      </div>
    </aside>
  );
}
