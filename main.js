const { app, BrowserWindow } = require("electron");

const createWindow=()=>{
 const win = new BrowserWindow({
    width:850,
    height:850,
    maxWidth:850,
    maxHeight:850,
    minHeight:450,
    minWidth:500
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