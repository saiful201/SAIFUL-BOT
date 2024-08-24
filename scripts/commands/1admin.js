module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	permssion: 0,
  premium: false,
  prefix: true,
	credits: "ALVI",
	description: "Admin info",
	category: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg", 
            
            "https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg", 
            
"https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg",
            
            "https://i.postimg.cc/VL7V0Sbw/369250874-1930802593968132-6623658624781565033-n.jpg"];
  
var callback = () => api.sendMessage({body:`🌻-𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥-🌻\n
------------------------------------------------\n𝗡𝗮𝗺𝗲-🌸       :  𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌
\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝗗𝗵𝗮𝗸𝗮)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝗗𝗵𝗮𝗸𝗮,𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  25+\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (বউ বাংলাদেশ আমি বিদেশ)\n𝗪𝗼𝗿𝗸         : 𝗝𝗲𝗱𝗱𝗮𝗵,𝗦𝗮𝘂𝗱𝗶 𝗔𝗿𝗮𝗯𝗶𝗮\n𝗚𝗺𝗮𝗶𝗹-📩        :  si0803144@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+966556922013\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : t.me/চালাই না🥱\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/saifulislam713?mibextid=ZbWKwL
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
