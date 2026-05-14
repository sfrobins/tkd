const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

const isDev = !app.isPackaged;

// Resolve paths relative to the project root (two levels up from electron/)
const PROJECT_ROOT = path.join(__dirname, '../../..');
const STORYBOARDS_DIR = path.join(PROJECT_ROOT, 'storyboards');
const CUSTOM_FORMS_DIR = path.join(__dirname, '../custom-forms');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#0d1117',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
    // Uncomment to open DevTools automatically:
    // win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  ensureDir(CUSTOM_FORMS_DIR);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ─── IPC: Save form as JSON to custom-forms/ ──────────────────────────────
ipcMain.handle('save-json', async (_event, formData) => {
  ensureDir(CUSTOM_FORMS_DIR);
  const slug = (formData.id || formData.name || 'untitled')
    .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const filename = `${slug}.json`;
  const filepath = path.join(CUSTOM_FORMS_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(formData, null, 2), 'utf8');
  return { success: true, path: filepath, filename };
});

// ─── IPC: Save generated HTML into storyboards/ ───────────────────────────
ipcMain.handle('save-html', async (_event, filename, html) => {
  ensureDir(STORYBOARDS_DIR);
  const filepath = path.join(STORYBOARDS_DIR, filename);
  fs.writeFileSync(filepath, html, 'utf8');
  return { success: true, path: filepath };
});

// ─── IPC: Load all custom JSON forms ──────────────────────────────────────
ipcMain.handle('load-custom-forms', async () => {
  ensureDir(CUSTOM_FORMS_DIR);
  const files = fs.readdirSync(CUSTOM_FORMS_DIR).filter(f => f.endsWith('.json'));
  const forms = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(CUSTOM_FORMS_DIR, file), 'utf8');
      forms.push(JSON.parse(raw));
    } catch { /* skip corrupt files */ }
  }
  return forms;
});

// ─── IPC: Save dialog (for user-chosen path) ──────────────────────────────
ipcMain.handle('save-dialog', async (_event, options) => {
  return dialog.showSaveDialog(options);
});
