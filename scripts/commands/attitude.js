/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "attitude",
  version: "1.0.0",
  permission: 0,
  credits: "ALVI",
  description: "Random attitude video",
  premium: false,
  prefix: true, 
  category: "Media", 
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🌸🥰-𝗦𝗔𝗜𝗙𝗨𝗟-𝗜𝗦𝗟𝗔𝗠-💜🌹"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

"https://drive.google.com/uc?id=1JXqhDn7dpdv9946LqC5pbRqjYSthoAsl",
   "https://drive.google.com/uc?id=1JzbWziwK75R8DcIIWNpPlsLJmGn5WqEP",
   "https://drive.google.com/uc?id=1JYD6e1vkxVLqgPZKOSpkxXXUOpw_hbNg",
   "https://drive.google.com/uc?id=1JqNF2zPuuq9nSyuf2ntdSM9XznekjfiB",
   "https://drive.google.com/uc?id=1K-0JsyNorU-rCimpHytsBGIuR-2_o8Qt",
   "https://drive.google.com/uc?id=1JqNF2zPuuq9nSyuf2ntdSM9XznekjfiB",
   "https://drive.google.com/uc?id=1JzCkq_WrcfiR8c8ZchzI_cIPxJsBKbFl",
   "https://drive.google.com/uc?id=1JBwSwNEhTSH5PKWOfreds1nXWtB3XxZu",
   "https://drive.google.com/uc?id=1JDC_7Neqt2ZnPcZOb30-rbU1TJ52AHsL",
   "https://drive.google.com/uc?id=1JXiBhdHAvuaSJlca2h2SwHW0sasuCAFh",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
