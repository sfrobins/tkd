// ─────────────────────────────────────────────────────────────────────────────
// TKD Vocabulary — all canonical stances, techniques, and directions
// Used by the Move Library panel in the form builder.
// ─────────────────────────────────────────────────────────────────────────────

// ─── STANCES (lower body) ─────────────────────────────────────────────────
export const STANCES = [
  // Walking Stances
  { id: 'left-walking',    name: 'Left Walking Stance',          nameKr: '왼 보행 서기',       type: 'walking',  side: 'left'  },
  { id: 'right-walking',   name: 'Right Walking Stance',         nameKr: '오른 보행 서기',      type: 'walking',  side: 'right' },

  // L-Stances (Rear Foot Stances)
  { id: 'right-l-stance',  name: 'Right L-Stance',               nameKr: '오른 뒷굽이',         type: 'l-stance', side: 'right' },
  { id: 'left-l-stance',   name: 'Left L-Stance',                nameKr: '왼 뒷굽이',           type: 'l-stance', side: 'left'  },

  // Sitting Stance (Horse/Parallel)
  { id: 'sitting',         name: 'Sitting Stance',               nameKr: '주춤 서기',           type: 'sitting',  side: null    },

  // Fixed Stances
  { id: 'right-fixed',     name: 'Right Fixed Stance',           nameKr: '오른 고정 서기',      type: 'fixed',    side: 'right' },
  { id: 'left-fixed',      name: 'Left Fixed Stance',            nameKr: '왼 고정 서기',        type: 'fixed',    side: 'left'  },

  // Closed Stances
  { id: 'right-closed',    name: 'Right Closed Stance',          nameKr: '오른 모아 서기',      type: 'closed',   side: 'right' },
  { id: 'left-closed',     name: 'Left Closed Stance',           nameKr: '왼 모아 서기',        type: 'closed',   side: 'left'  },

  // Vertical Stances (Parallel Ready)
  { id: 'parallel-ready',  name: 'Parallel Ready Stance',        nameKr: '평행 준비 서기',      type: 'vertical', side: null    },

  // Bending Ready Stances
  { id: 'right-bending',   name: 'Right Bending Ready Stance',   nameKr: '오른 굽혀 준비 서기', type: 'bending',  side: 'right' },
  { id: 'left-bending',    name: 'Left Bending Ready Stance',    nameKr: '왼 굽혀 준비 서기',  type: 'bending',  side: 'left'  },
];

// ─── TECHNIQUES (upper body) ──────────────────────────────────────────────
export const TECHNIQUES = [
  // ── Blocks ──────────────────────────────────────────────────────────────
  { id: 'high-block-left',            name: 'Left High Block',                  nameKr: '왼 높이막기',              cat: 'block',   side: 'left',  level: 'high'   },
  { id: 'high-block-right',           name: 'Right High Block',                 nameKr: '오른 높이막기',             cat: 'block',   side: 'right', level: 'high'   },
  { id: 'low-block-left',             name: 'Left Low Section Block',           nameKr: '왼 아래막기',               cat: 'block',   side: 'left',  level: 'low'    },
  { id: 'low-block-right',            name: 'Right Low Section Block',          nameKr: '오른 아래막기',              cat: 'block',   side: 'right', level: 'low'    },
  { id: 'inner-block-left',           name: 'Left Inner Forearm Middle Block',  nameKr: '왼 안팔목 중단막기',        cat: 'block',   side: 'left',  level: 'middle' },
  { id: 'inner-block-right',          name: 'Right Inner Forearm Middle Block', nameKr: '오른 안팔목 중단막기',       cat: 'block',   side: 'right', level: 'middle' },
  { id: 'circular-block-left',        name: 'Left Inner Forearm Circular Block',nameKr: '왼 안팔목 원형막기',        cat: 'block',   side: 'left',  level: 'middle' },
  { id: 'circular-block-right',       name: 'Right Inner Forearm Circular Block',nameKr: '오른 안팔목 원형막기',     cat: 'block',   side: 'right', level: 'middle' },
  { id: 'palm-block-left',            name: 'Left Palm Pushing Block',          nameKr: '왼 바탕손 밀기',            cat: 'block',   side: 'left',  level: 'middle' },
  { id: 'palm-block-right',           name: 'Right Palm Pushing Block',         nameKr: '오른 바탕손 밀기',           cat: 'block',   side: 'right', level: 'middle' },
  { id: 'pressing-block-left',        name: 'Left Pressing Block',              nameKr: '왼 누르기막기',              cat: 'block',   side: 'left',  level: 'low'    },
  { id: 'pressing-block-right',       name: 'Right Pressing Block',             nameKr: '오른 누르기막기',             cat: 'block',   side: 'right', level: 'low'    },
  { id: 'knife-guard-left',           name: 'Left Knife Hand Guarding Block',   nameKr: '왼 손날 대비막기',           cat: 'block',   side: 'left',  level: 'middle' },
  { id: 'knife-guard-right',          name: 'Right Knife Hand Guarding Block',  nameKr: '오른 손날 대비막기',          cat: 'block',   side: 'right', level: 'middle' },
  { id: 'outer-block-left',           name: 'Left Outer Forearm Middle Block',  nameKr: '왼 바깥팔목 중단막기',       cat: 'block',   side: 'left',  level: 'middle' },
  { id: 'outer-block-right',          name: 'Right Outer Forearm Middle Block', nameKr: '오른 바깥팔목 중단막기',      cat: 'block',   side: 'right', level: 'middle' },
  { id: 'x-fist-pressing',            name: 'X-Fist Pressing Block',            nameKr: '엑스 주먹 누르기',           cat: 'block',   side: null,    level: 'low'    },
  { id: 'forearm-guard-left',         name: 'Left Forearm Guarding Block',      nameKr: '왼 팔목 대비막기',           cat: 'block',   side: 'left',  level: 'middle' },
  { id: 'forearm-guard-right',        name: 'Right Forearm Guarding Block',     nameKr: '오른 팔목 대비막기',          cat: 'block',   side: 'right', level: 'middle' },

  // ── Punches ──────────────────────────────────────────────────────────────
  { id: 'punch-obverse-left',         name: 'Left Middle Obverse Punch',        nameKr: '왼 중단 바로지르기',         cat: 'punch',   side: 'left',  level: 'middle' },
  { id: 'punch-obverse-right',        name: 'Right Middle Obverse Punch',       nameKr: '오른 중단 바로지르기',        cat: 'punch',   side: 'right', level: 'middle' },
  { id: 'punch-reverse-left',         name: 'Left Middle Reverse Punch',        nameKr: '왼 중단 반대지르기',          cat: 'punch',   side: 'left',  level: 'middle' },
  { id: 'punch-reverse-right',        name: 'Right Middle Reverse Punch',       nameKr: '오른 중단 반대지르기',         cat: 'punch',   side: 'right', level: 'middle' },
  { id: 'punch-high-left',            name: 'Left High Obverse Punch',          nameKr: '왼 높이 바로지르기',          cat: 'punch',   side: 'left',  level: 'high'   },
  { id: 'punch-high-right',           name: 'Right High Obverse Punch',         nameKr: '오른 높이 바로지르기',         cat: 'punch',   side: 'right', level: 'high'   },
  { id: 'punch-low-left',             name: 'Left Low Section Punch',           nameKr: '왼 아래 지르기',              cat: 'punch',   side: 'left',  level: 'low'    },
  { id: 'punch-low-right',            name: 'Right Low Section Punch',          nameKr: '오른 아래 지르기',             cat: 'punch',   side: 'right', level: 'low'    },
  { id: 'angle-punch-left',           name: 'Left Angle Punch',                 nameKr: '왼 비틀어 지르기',            cat: 'punch',   side: 'left',  level: 'middle' },
  { id: 'angle-punch-right',          name: 'Right Angle Punch',                nameKr: '오른 비틀어 지르기',           cat: 'punch',   side: 'right', level: 'middle' },

  // ── Strikes ──────────────────────────────────────────────────────────────
  { id: 'knife-high-left',            name: 'Left Knife Hand High Strike',      nameKr: '왼 손날 높이치기',            cat: 'strike',  side: 'left',  level: 'high'   },
  { id: 'knife-high-right',           name: 'Right Knife Hand High Strike',     nameKr: '오른 손날 높이치기',           cat: 'strike',  side: 'right', level: 'high'   },
  { id: 'elbow-upper-left',           name: 'Left Upper Elbow Strike',          nameKr: '왼 올려 팔꿈치 치기',         cat: 'strike',  side: 'left',  level: 'high'   },
  { id: 'elbow-upper-right',          name: 'Right Upper Elbow Strike',         nameKr: '오른 올려 팔꿈치 치기',        cat: 'strike',  side: 'right', level: 'high'   },
  { id: 'elbow-side-left',            name: 'Left Side Elbow Thrust',           nameKr: '왼 옆 팔꿈치 치기',           cat: 'strike',  side: 'left',  level: 'middle' },
  { id: 'elbow-side-right',           name: 'Right Side Elbow Thrust',          nameKr: '오른 옆 팔꿈치 치기',          cat: 'strike',  side: 'right', level: 'middle' },
  { id: 'back-fist-left',             name: 'Left Back Fist High Strike',       nameKr: '왼 등주먹 높이치기',           cat: 'strike',  side: 'left',  level: 'high'   },
  { id: 'back-fist-right',            name: 'Right Back Fist High Strike',      nameKr: '오른 등주먹 높이치기',          cat: 'strike',  side: 'right', level: 'high'   },
  { id: 'crescent-strike-left',       name: 'Left Crescent Kick Strike',        nameKr: '왼 반달차기',                  cat: 'strike',  side: 'left',  level: 'high'   },
  { id: 'crescent-strike-right',      name: 'Right Crescent Kick Strike',       nameKr: '오른 반달차기',                 cat: 'strike',  side: 'right', level: 'high'   },

  // ── Thrusts ───────────────────────────────────────────────────────────────
  { id: 'fingertip-left',             name: 'Left Upset Fingertip Thrust',      nameKr: '왼 손끝 엎어치기',            cat: 'thrust',  side: 'left',  level: 'middle' },
  { id: 'fingertip-right',            name: 'Right Upset Fingertip Thrust',     nameKr: '오른 손끝 엎어치기',           cat: 'thrust',  side: 'right', level: 'middle' },
  { id: 'flat-fingertip-left',        name: 'Left Flat Fingertip Thrust',       nameKr: '왼 편손끝 찌르기',            cat: 'thrust',  side: 'left',  level: 'middle' },
  { id: 'flat-fingertip-right',       name: 'Right Flat Fingertip Thrust',      nameKr: '오른 편손끝 찌르기',           cat: 'thrust',  side: 'right', level: 'middle' },

  // ── Kicks ─────────────────────────────────────────────────────────────────
  { id: 'front-kick-left',            name: 'Left Front Snap Kick',             nameKr: '왼 앞차기',                   cat: 'kick',    side: 'left',  level: 'middle' },
  { id: 'front-kick-right',           name: 'Right Front Snap Kick',            nameKr: '오른 앞차기',                  cat: 'kick',    side: 'right', level: 'middle' },
  { id: 'side-kick-left',             name: 'Left Side Piercing Kick',          nameKr: '왼 옆 관통차기',              cat: 'kick',    side: 'left',  level: 'middle' },
  { id: 'side-kick-right',            name: 'Right Side Piercing Kick',         nameKr: '오른 옆 관통차기',             cat: 'kick',    side: 'right', level: 'middle' },
  { id: 'heel-kick-left',             name: 'Left Heel Kick',                   nameKr: '왼 뒤꿈치차기',               cat: 'kick',    side: 'left',  level: 'high'   },
  { id: 'heel-kick-right',            name: 'Right Heel Kick',                  nameKr: '오른 뒤꿈치차기',              cat: 'kick',    side: 'right', level: 'high'   },
  { id: 'turning-kick-left',          name: 'Left Turning Kick',                nameKr: '왼 돌려차기',                  cat: 'kick',    side: 'left',  level: 'middle' },
  { id: 'turning-kick-right',         name: 'Right Turning Kick',               nameKr: '오른 돌려차기',                 cat: 'kick',    side: 'right', level: 'middle' },
  { id: 'back-kick-left',             name: 'Left Back Piercing Kick',          nameKr: '왼 뒤차기',                   cat: 'kick',    side: 'left',  level: 'middle' },
  { id: 'back-kick-right',            name: 'Right Back Piercing Kick',         nameKr: '오른 뒤차기',                  cat: 'kick',    side: 'right', level: 'middle' },
  { id: 'reverse-turning-left',       name: 'Left Reverse Turning Kick',        nameKr: '왼 반대 돌려차기',             cat: 'kick',    side: 'left',  level: 'high'   },
  { id: 'reverse-turning-right',      name: 'Right Reverse Turning Kick',       nameKr: '오른 반대 돌려차기',            cat: 'kick',    side: 'right', level: 'high'   },

  // ── Combinations ──────────────────────────────────────────────────────────
  { id: 'front-kick-punch-left',      name: 'Left Front Snap Kick → Left Punch', nameKr: '왼 앞차기 → 왼 지르기',      cat: 'combo',   side: 'left',  level: 'middle' },
  { id: 'front-kick-punch-right',     name: 'Right Front Snap Kick → Right Punch',nameKr: '오른 앞차기 → 오른 지르기', cat: 'combo',   side: 'right', level: 'middle' },
  { id: 'side-kick-punch-left',       name: 'Left Side Piercing Kick → Left Punch',nameKr: '왼 옆차기 → 왼 지르기',    cat: 'combo',   side: 'left',  level: 'middle' },
  { id: 'side-kick-punch-right',      name: 'Right Side Piercing Kick → Right Punch',nameKr: '오른 옆차기 → 오른 지르기',cat: 'combo', side: 'right', level: 'middle' },
  { id: 'heel-kick-punch-left',       name: 'Left Heel Kick → Left Punch',      nameKr: '왼 뒤꿈치차기 → 왼 지르기',  cat: 'combo',   side: 'left',  level: 'high'   },
  { id: 'heel-kick-punch-right',      name: 'Right Heel Kick → Right Punch',    nameKr: '오른 뒤꿈치차기 → 오른 지르기',cat: 'combo', side: 'right', level: 'high'   },
];

// ─── DIRECTIONS ────────────────────────────────────────────────────────────
export const DIRECTIONS = [
  { id: 'A',  label: 'A',  desc: 'Start / Return point' },
  { id: 'B',  label: 'B',  desc: 'Forward (main axis)'  },
  { id: 'C',  label: 'C',  desc: 'Right lateral'        },
  { id: 'D',  label: 'D',  desc: 'Left lateral'         },
  { id: 'EF', label: 'EF', desc: 'Upper right diagonal' },
  { id: 'GH', label: 'GH', desc: 'Upper left diagonal'  },
  { id: 'IJ', label: 'IJ', desc: 'Lower right diagonal' },
  { id: 'KL', label: 'KL', desc: 'Lower left diagonal'  },
];

// ─── DIAGRAM SHAPES ────────────────────────────────────────────────────────
export const DIAGRAM_SHAPES = [
  { id: 'I_SHAPE',  label: 'I',  hanja: 'I',  meaning: 'Straight Line' },
  { id: 'SCHOLAR',  label: '士', hanja: '士', meaning: 'Scholar'       },
  { id: 'EARTH',    label: '土', hanja: '土', meaning: 'Earth'         },
  { id: 'CROSS',    label: '十', hanja: '十', meaning: 'Ten / Cross'   },
  { id: 'HEAVEN',   label: '天', hanja: '天', meaning: 'Heaven'        },
  { id: 'MAN',      label: '人', hanja: '人', meaning: 'Man / Person'  },
  { id: 'KING',     label: '王', hanja: '王', meaning: 'King'          },
  { id: 'EIGHT',    label: '八', hanja: '八', meaning: 'Eight'         },
  { id: 'CUSTOM',   label: '?',  hanja: '',   meaning: 'Custom'        },
];

// ─── BELT GRADES ────────────────────────────────────────────────────────────
export const BELT_GRADES = [
  { gup: '9th Gup', color: '#f5f5f5', name: 'White Belt'        },
  { gup: '8th Gup', color: '#f5c518', name: 'Yellow Belt'       },
  { gup: '7th Gup', color: '#f5c518', name: 'Yellow Belt'       },
  { gup: '6th Gup', color: '#1a7a1a', name: 'Green Belt'        },
  { gup: '5th Gup', color: '#1a7a1a', name: 'Green Belt'        },
  { gup: '4th Gup', color: '#1a3a7a', name: 'Blue Belt'         },
  { gup: '3rd Gup', color: '#1a3a7a', name: 'Blue Belt'         },
  { gup: '2nd Gup', color: '#8b0000', name: 'Red Belt'          },
  { gup: '1st Gup', color: '#8b0000', name: 'Red Belt'          },
  { gup: '1st Dan', color: '#111111', name: 'Black Belt 1st Dan' },
  { gup: '2nd Dan', color: '#111111', name: 'Black Belt 2nd Dan' },
  { gup: '3rd Dan', color: '#111111', name: 'Black Belt 3rd Dan' },
];

// ─── Category colour helpers ──────────────────────────────────────────────
export const CAT_COLORS = {
  block:  { bg: '#1f3a5c', border: '#1f6feb', text: '#79c0ff' },
  punch:  { bg: '#4a1515', border: '#da3633', text: '#ff7b72' },
  strike: { bg: '#3d1a5c', border: '#8957e5', text: '#d2a8ff' },
  thrust: { bg: '#2d3a1a', border: '#56d364', text: '#9be9a8' },
  kick:   { bg: '#3d2800', border: '#e36209', text: '#ffa657' },
  combo:  { bg: '#1a2a3d', border: '#58a6ff', text: '#a5d6ff' },
};

export const STANCE_COLORS = {
  walking:  { bg: '#0f2a1a', border: '#238636', text: '#56d364' },
  'l-stance':{ bg: '#0d1f3c', border: '#1f6feb', text: '#79c0ff' },
  sitting:  { bg: '#2d2a00', border: '#d29922', text: '#e3b341' },
  fixed:    { bg: '#1a1a2e', border: '#6e40c9', text: '#bc8cff' },
  closed:   { bg: '#1a1a1a', border: '#6e7681', text: '#c9d1d9' },
  vertical: { bg: '#1a1a1a', border: '#6e7681', text: '#c9d1d9' },
  bending:  { bg: '#2d1a00', border: '#c9810b', text: '#f0a732' },
};
