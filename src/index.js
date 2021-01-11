const electron = require("electron");
const path = require("path");
const { app, BrowserWindow } = electron;

let appWindow;

app.on("ready", () => {
  appWindow = new BrowserWindow({width: 700, height: 500});

  appWindow.loadURL(`file://${path.join(__dirname, "/index.html")}`);

  appWindow.webContents.openDevTools();

  appWindow.on("closed", app.quit);
});

app.on("window-all-closed", () => {
  app.quit();
});