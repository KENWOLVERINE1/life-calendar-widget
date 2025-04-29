const { app, BrowserWindow } = require("electron");

const createWindow=()=>{
 const win = new BrowserWindow({
    width:800,
    height:1000,
    maxWidth:1200,
    maxHeight:1400,
    minHeight:600,
    minWidth:800
 })
 win.loadFile("index.html")
}

app.whenReady().then(()=>{
    createWindow();

    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin'){
            app.quit()
        }
    })
})