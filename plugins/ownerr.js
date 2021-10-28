const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

         {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*sreyasbot by sreyasbot*' , MessageType.text);
        }
        else {
            
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

         

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*sreyasbot*' , MessageType.text);
        }
        else {
            
        }
    }));
}
