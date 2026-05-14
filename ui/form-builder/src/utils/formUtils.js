import { v4 as uuidv4 } from 'uuid';

/** Create a blank new form. */
export function newForm(overrides = {}) {
  return {
    id: `custom-${Date.now()}`,
    name: 'New Form',
    korean: '',
    hanja: '',
    meaning: '',
    gup: '1st Dan',
    beltColor: '#1a1a1a',
    beltName: 'Black Belt',
    diagram: 'I_SHAPE',
    diagramHanja: 'I',
    diagramMeaning: '',
    bio: '',
    movements: [],
    ...overrides,
  };
}

/** Create a blank move. */
export function newMove(overrides = {}) {
  return {
    _id: uuidv4(),         // internal react key (not serialised to storyboard)
    id: 1,
    sec: 'A',
    secName: 'Section A',
    dir: 'B',
    stance: 'Left Walking Stance',
    stanceKr: '왼 보행 서기',
    tech: 'Left High Block',
    techKr: '왼 높이막기',
    fig: 'high-block-left',
    note: null,
    desc: '',
    ...overrides,
  };
}

/** Deep-clone a form, assigning fresh _id keys to each move. */
export function cloneForm(form) {
  return {
    ...form,
    id: `custom-${Date.now()}`,
    name: `${form.name} (Copy)`,
    movements: form.movements.map(m => ({ ...m, _id: uuidv4() })),
  };
}

/** Ensure every movement in a form has a stable _id for React keys. */
export function hydrateMoves(form) {
  return {
    ...form,
    movements: form.movements.map(m => ({
      _id: m._id || uuidv4(),
      ...m,
    })),
  };
}

/** Re-number movement ids sequentially and update sec/secName if secName is blank. */
export function renumberMoves(movements) {
  return movements.map((m, i) => ({ ...m, id: i + 1 }));
}

/** Insert a move at a specific index. */
export function insertMove(movements, index, move) {
  const next = [...movements];
  next.splice(index, 0, { ...move, _id: uuidv4() });
  return renumberMoves(next);
}

/** Remove a move by _id. */
export function removeMove(movements, _id) {
  return renumberMoves(movements.filter(m => m._id !== _id));
}

/** Replace a move by _id. */
export function updateMove(movements, _id, patch) {
  return movements.map(m => m._id === _id ? { ...m, ...patch } : m);
}

/** Reorder moves (drag result). */
export function reorderMoves(movements, srcIdx, dstIdx) {
  const next = [...movements];
  const [removed] = next.splice(srcIdx, 1);
  next.splice(dstIdx, 0, removed);
  return renumberMoves(next);
}
