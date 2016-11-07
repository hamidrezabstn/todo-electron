const {Tray , Menu , app , BrowserWindow} = require("electron")
const path = require('path')

let tray = null
app.on('ready' , () => {
  /*let image = path.join(__dirname , 'images' , 'list.png')
  tray = new Tray(image)
  console.log('tray created '+image);

  let contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
   {label: 'Item2', type: 'radio'},
   {label: 'Item3', type: 'radio', checked: true},
   {label: 'Item4', type: 'radio'}
  ])

  tray.setContextMenu(contextMenu);
  console.log('tray context set');
  tray.setToolTip("Todo List")
  console.log('tray tooltip set');*/

  let win = new BrowserWindow({
    'width':300 , 'height':400 ,
    'frame':false });
  win.loadURL(`file://${__dirname}/main.html`)

});
