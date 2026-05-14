const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,
  saveJSON:         (formData)           => ipcRenderer.invoke('save-json', formData),
  saveHTML:         (filename, html)     => ipcRenderer.invoke('save-html', filename, html),
  loadCustomForms:  ()                   => ipcRenderer.invoke('load-custom-forms'),
  saveDialog:       (options)            => ipcRenderer.invoke('save-dialog', options),
});
