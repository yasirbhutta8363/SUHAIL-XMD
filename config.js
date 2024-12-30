const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923078949077";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_31_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM4S291a01MVzczOEJnSy83eVhLNWwwK2NmNHo5TFAvM1dHOFhNekl2dnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDc4OTQ5MDc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQjI1QTVDNDVCQ0I0MDBCNEE1OEJBRjhENTcyQUI0N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU1NDc0NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjkyaVZFTmlSbk9IQlNGRE03RmNyZ1wiLFxuICBcInBob25lSWRcIjogXCIxYTFlNTA4Mi1mOGYzLTQ4YTYtOTQ1Ni02NTc5MGU1NzYzYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICA0NixcbiAgICAgIDEyNixcbiAgICAgIDEzLFxuICAgICAgMjI4LFxuICAgICAgMTQzLFxuICAgICAgMTMwLFxuICAgICAgMTA5LFxuICAgICAgMjAzLFxuICAgICAgMTg3LFxuICAgICAgNzYsXG4gICAgICAyMTEsXG4gICAgICAyMzYsXG4gICAgICA1NixcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDE4NCxcbiAgICAgIDEzNSxcbiAgICAgIDUwLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDExNixcbiAgICAgIDY5LFxuICAgICAgMjU0LFxuICAgICAgNTIsXG4gICAgICAxODAsXG4gICAgICAyMzUsXG4gICAgICAyMzgsXG4gICAgICAyNDIsXG4gICAgICA2NixcbiAgICAgIDE0LFxuICAgICAgMjksXG4gICAgICAyNDIsXG4gICAgICAyMTIsXG4gICAgICAyMTQsXG4gICAgICAxNCxcbiAgICAgIDE5MixcbiAgICAgIDgxLFxuICAgICAgMzksXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkNNUUU5NkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3ODk0OTA3NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Rt/CdkpPwnZKQ8J2Sh/CdkobwnZKU8J2SlPCdkpDwnZKTIPCdkanwnZKJ8J2SlvCdkpXwnZKV8J2SgiDwnZGv8J2SgvCdkoTwnZKM8J2ShvCdkpNcIixcbiAgICBcImxpZFwiOiBcIjE4MDUyMjM1NzY0OTYzNToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UeW9md0VFTVMweWJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUUpoQ2VBQmFUdFhMMm05WTR2OWg3bUtVT0xLMnpCWDFVaEJrbmFYYUoyRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWcDdzTXBVMjZIS0hlR3JCOFZXN3VmLzlMMFE4QlZoQTVQbmYvSjkxMi82QTBuOHVMeTVaYU0wdCtrbVJvM0dHU2FydUlYQnFaeklBc1p5UkYra0JDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOTTFDeDUvcm1ISlJHUmcvWEdUWWRlYTNzUDZKcXIvNzhGSVBxT0ZaWS92ZWd2NFpUUWF5MzdQY2NjWTMvSFNKKy9vRCtOVXNyRlRjYTBUbXQremhoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzg5NDkwNzc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTU0NzQ2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1tNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTW00Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUG1zN0x6dXQyOHdTVy9KUGN3Q3ZMQ2prdzJHNjhmdE1mYW5tZ2tzeUE5WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzM0MzQ0MDM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUzMjQ5OTQ4MjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
