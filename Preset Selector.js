const xapi = require('xapi');
const ui = require('./ui');


// ------------------- HELPER FUNCTIONS -----------------------------------------

// When a config changes

// When a ui event occurs
function onUi(widgetId, onEvent) {
  console.log("inUI");
  xapi.Event.UserInterface.Extensions.Widget.Action.on((e) => {
    if (e.WidgetId === widgetId) {
      onEvent(e);
    }
  })
}

// When a config changes
async function onConfig(configPath, onChange) {
  try {
    await xapi.config.on(configPath, onChange);
    await xapi.config.get(configPath).then(onChange);
  }
  catch(e) {
    console.warn('Not able to use config', configPath, e);
  }
}

// ------------------- ACTUAL SETTINGS -----------------------------------------

xapi.Event.UserInterface.Extensions.Widget.Action.on((e) => {
      if(e.Type === 'pressed'){
    switch (e.Value) {
    case 'bt_set_1':
      xapi.status.get('Cameras Camera Position').then((position) => {
        xapi.Command.Camera.Preset.Store(
        { CameraId: 1, DefaultPosition: true,  PresetId: 1});
      });
      break;
    case 'bt_set_2':
      xapi.status.get('Cameras Camera Position').then((position) => {
        xapi.Command.Camera.Preset.Store(
        { CameraId: 1, DefaultPosition: true,  PresetId: 2});
      });
      break;
    case 'bt_set_3':
      xapi.status.get('Cameras Camera Position').then((position) => {
        xapi.Command.Camera.Preset.Store(
        { CameraId: 1, DefaultPosition: true,  PresetId: 3});
      });
      break;
    case 'bt_set_4':
      xapi.status.get('Cameras Camera Position').then((position) => {
        xapi.Command.Camera.Preset.Store(
        { CameraId: 1, DefaultPosition: true,  PresetId: 4});
      });
      break;
      case 'bt_sel_1':
      xapi.Command.Camera.Preset.Activate({ PresetId: 1 });
      break;
    case 'bt_sel_2':
      xapi.Command.Camera.Preset.Activate({ PresetId: 2 });
      break;
    case 'bt_sel_3':
      xapi.Command.Camera.Preset.Activate({ PresetId: 3 });
      break;
    case 'bt_sel_4':
      xapi.Command.Camera.Preset.Activate({ PresetId: 4 });
      break;
    default:
      break;
  }
    }
  })



  