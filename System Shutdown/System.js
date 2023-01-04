import xapi from 'xapi';


xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if(event.PanelId == 'system'){
        xapi.command("UserInterface Message Prompt Display", {
              Title: "System"
            , Text: 'Bitte wählen Sie'
            , FeedbackId: 'system'
            , 'Option.1':'Restart'
            , 'Option.2':'Shutdown'
          }).catch((error) => { console.error(error); });
    }
});

xapi.event.on('UserInterface Message Prompt Response', (event) => {
    switch(event.FeedbackId){
        case 'system':
          switch(event.OptionId){
             case '1':
                console.log('System is Restart');
                xapi.Command.SystemUnit.Boot({ Action: 'Restart', Force: 'True' });
                  break;
              case '2':
                  console.log('System is Shutdown');
                  xapi.Command.SystemUnit.Boot({ Action: 'Shutdown', Force: 'True' });
                  break;
          }
          break;
    }
});