module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  permssion: 0,
  prefix: false,
  premium: false,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  category: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100011152309303") {
    var aid = ["100011152309303"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস সাইফুল কই তুমি তোমারে এক বলদে ডাকে__😁🤣","Mantion_দিস না _বস সাইফুল এ'র মন ভালো নেই আস্কে-!💔🥀","-আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mention_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল কথা বলো আমার বস সাইফুল এর তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে_//-😭😭","বস সাইফুল এখন  বিজি জা বলার আমাকে বলতে পারেন_//-😼🥰","এতো মেনশন  নাহ দিয়া সিংগেল boss সাইফুল রে একটা গফ দে_//-😒😏","Mention_না দিয়ে সিরিয়াস প্রেম করতে চাইলে আমার boss সাইফুল এর ইনবক্সে যা হট করে দিবে_//-🥵😋","মেনশন দিসনা পারলে আমার boss সাইফুল রে একটা গফ দে_//-🙈","Mention_দিস না বাঁলপাঁক্না বস সাইফুল প্রচুর বিজি_//-🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলো আমার boss সাইফুল এ_//-🤗","আমার boss সাইফল কে এতো ডাকো কেন_//-😒, boss সাইফুল রে ভালো টালো বাসো নাকি_//-🤭", "আমার boss সাইফুল কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", " boss সাইফুল এখন  কাজে বিজি আছে যা বলার আমাকে বলো_//-🫣", "যা বলার আমাকে বলো আমার boss মাসুম এখন বিজি আছে_//-🥰","  boss সাইফুল কে আর একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু_//-🤭🙈🤖"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
