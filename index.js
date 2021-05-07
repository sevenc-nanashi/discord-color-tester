const electron = require("electron");

// アプリケーションをコントロールするモジュール
const app = electron.app;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
    require("@electron/remote/main").initialize()
        // メイン画面の表示。ウィンドウの幅、高さを指定できる
    mainWindow = new BrowserWindow({ width: 64 * 4 + 32, height: 128 * 4 + 32, frame: false, webPreferences: { enableRemoteModule: true, preload: __dirname + "/color.js" } });
    mainWindow.loadURL('file://' + __dirname + '/color.html');

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});