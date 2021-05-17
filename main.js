const { app, BrowserWindow } = require('electron');
const path = require('path')
 
require('electron-reload')(__dirname);

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 450,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('./src/index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})