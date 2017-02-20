'use strict'

require('./constants')

const {app, ipcMain, dialog, BrowserWindow} = require('electron')

// include server for production application
if(!IS_DEV)
    require(`./server`)


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, splashWindow


// Create the browser window.
function createWindow() {
    splashWindow = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false,
        show: false
    })

    // and load the index.html of the app.
    splashWindow.loadURL(`file://${__dirname}/index.html`)

    setTimeout(()=>{
        splashWindow.show()
    }, 150)



    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        show: false
    })

    // Open the DevTools.
    if (IS_DEV) {
        mainWindow.webContents.openDevTools()

        const installExtension = require('electron-devtools-installer')
        installExtension.default(installExtension.VUEJS_DEVTOOLS)
            .then(name => console.log(`Added Extension:  ${name}`))
            .catch(err => console.log('An error occurred: ', err))
    }else
        mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null

        app.quit()
    })



    let ready = {
        server: false,
        window: false
    }

    $Core.on(`server:ready`, (msg)=>{
        mainWindow.loadURL(`http://localhost:${process.env.PORT}`)

        setTimeout(()=>{
            ready.server = true
        }, 500)

        // if(!IS_DEV)
        //     dialog.showMessageBox(mainWindow, {
        //         type: `info`,
        //         title: `Server is ready`,
        //         message: msg
        //     })
    })


    // application initialized
    ipcMain.on(`ready:window`, (event, arg) => {
        ready.window = true
    })

    let t = setInterval(()=>{
        if(ready.server && ready.window){

            splashWindow.hide()
            mainWindow.show()

            splashWindow.destroy()

            clearInterval(t)
        }
    })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
