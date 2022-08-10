import xapi from 'xapi';

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

xapi.status.on('Video Selfview Mode', (event) => {
    
    if (event === 'Off') {
      var monitors = "Single"; //Change to Triple when using Inogeni USB3.0
      xapi.status.get('Video Monitors').then((count) => {
        var current = count;
        console.log("Monitor Role " +current);
        if(current === monitors){
          timeout(200).then(() => {
            xapi.Command.Video.Selfview.Set(
              { Mode: "On"});
          })
        }
      });
    }
})
