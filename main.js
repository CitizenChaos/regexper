const { app, BrowserWindow, Menu } = require('electron')
const { RUN_MODE } = require('./env')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  Menu.setApplicationMenu(null)
  if (RUN_MODE === 'development') {
    win.loadURL('http://localhost:8080/')
  } else if (RUN_MODE === 'production') {
    win.loadFile('./build/index.html')
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
