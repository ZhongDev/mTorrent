const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // and load the index.html of the app.
    win.loadFile('./view/index.html')
    //win.webContents.openDevTools()
}

app.on('ready', createWindow)