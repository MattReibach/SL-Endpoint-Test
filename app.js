const app = require('app');  // Module to control application life.
const BrowserWindow = require('browser-window');  // Module to create native browser window.
const ipcMain = require('electron').ipcMain;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var resultsWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    var resultsData;
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 400,
        height: 768,
        'min-width': 400,
        'min-height': 768,
        'accept-first-mouse': true
    });

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    // Open the DevTools.
    //mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    function openResultsWindow() {
        resultsWindow = new BrowserWindow({
            width: 640,
            height: 480,
            show: true
        });

        resultsWindow.loadUrl('file://' + __dirname + '/views/results.html');
        resultsWindow.on('closed', function () {
            resultsWindow = null;
        });
    }
    ipcMain.on('toggle-results-view', function (event, results) {
        resultsData = results;
        if (!resultsWindow) {
            openResultsWindow();
        }
    });
    ipcMain.on('get-results-data', function (event, arg) {
        event.sender.send('results-data', resultsData);
    })
});
