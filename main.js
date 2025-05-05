const path = require('path');
const AutoLaunch = require('auto-launch');
const { app, BrowserWindow } = require('electron');

let widgetAutoLauncher = new AutoLaunch({
  name: 'life-calendar-widget',
  path: app.getPath('exe'),  // Gets the current executable
});

widgetAutoLauncher.isEnabled().then((isEnabled) => {
  if (!isEnabled) {
    widgetAutoLauncher.enable();
  }
}).catch((err) => {
  console.error('Auto-launch setup failed:', err);
});


const createWindow=()=>{
 const win = new BrowserWindow({
    width:1340,
    height:1050,
    minHeight:450,
    minWidth:500,
    frame:true,
    transparent:true,
    resizable:false,
    skipTaskbar:true
 })
 win.loadFile("index.html")
 //to enable developer tools in electron app
 //win.webContents.openDevTools();
}

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      })
    })

    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin'){
            app.quit()
        }
    })