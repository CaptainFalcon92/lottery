const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow(
      { 
        width: 1020, 
        height: 650,
        frame: false,
        webPreferences: {
          nodeIntegration: true,
        } 
      });
   
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, `/dist/lottery/index.html`),
        protocol: "file:",
        slashes: true
      })
    );

    win.setResizable(false);

    // The following is optional and will open the DevTools:
    // win.webContents.openDevTools();

    // close window
    win.on("closed", () => {
      win = null;
    });
   
  }

  app.on('ready', createWindow);
  
  // on macOS, closing the window doesn't quit the app
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });