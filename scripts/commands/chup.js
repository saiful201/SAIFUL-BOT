const fs = require("fs");
module.exports.config = {
  name: "chup",
  version: "1.0.0", 
  permission: 0,
  credits: "ALVI",
  description: "", 
  premium: false,
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 

};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cup")==0 || event.body.indexOf("Cup")==0 ||
event.body.indexOf("🤫")==0 ||
event.body.indexOf("চুপ")==0 || event.body.indexOf("chup")==0 || event.body.indexOf("Chup")==0) {
		var msg = {
				body: "╭──────•◈•───────╮\n         𝗦𝗔𝗜𝗙𝗨𝗟-𝗕𝗢𝗧       \n-ওই চুপ বেশি বুঝো 🫵তুমি-🤫😒\n╰──────•◈•───────╯",
				attachment: fs.createReadStream(__dirname + `/nofrefix/chup.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
