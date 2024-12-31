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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_35_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwialk2SVkvWjRONHUxM1ZyNm1KSlh5WHpCMXZ4ZmlhYWdWRXhGL0NZcG9kVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWUxYWZhMlFTd210QnhkY0hDR3ZxQVwiLFxuICBcInBob25lSWRcIjogXCIxMGJhZWZmOC0yN2IwLTQwODUtOTMwMS00N2I4YmZjMzUxYTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTUxLFxuICAgICAgMTk0LFxuICAgICAgMTYsXG4gICAgICAzMSxcbiAgICAgIDk0LFxuICAgICAgMTQxLFxuICAgICAgMTY0LFxuICAgICAgMTI3LFxuICAgICAgMjE1LFxuICAgICAgMjQzLFxuICAgICAgNCxcbiAgICAgIDExNCxcbiAgICAgIDE0NCxcbiAgICAgIDE1MCxcbiAgICAgIDExOCxcbiAgICAgIDIwOCxcbiAgICAgIDE3MSxcbiAgICAgIDg1LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTA3LFxuICAgICAgMjMxLFxuICAgICAgODUsXG4gICAgICAxMSxcbiAgICAgIDE4MyxcbiAgICAgIDk1LFxuICAgICAgMTExLFxuICAgICAgMTY3LFxuICAgICAgOSxcbiAgICAgIDExOSxcbiAgICAgIDE4NSxcbiAgICAgIDE5NixcbiAgICAgIDY5LFxuICAgICAgOTUsXG4gICAgICA1NixcbiAgICAgIDY4LFxuICAgICAgMjEzLFxuICAgICAgMjU0LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY4Q05EWUtHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzg5NDkwNzc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkbfwnZKT8J2SkPCdkofwnZKG8J2SlPCdkpTwnZKQ8J2SkyDwnZGp8J2SifCdkpbwnZKV8J2SlfCdkoIg8J2Rr/CdkoLwnZKE8J2SjPCdkobwnZKTXCIsXG4gICAgXCJsaWRcIjogXCIxODA1MjIzNTc2NDk2MzU6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWHlvZndFRU4rVXpic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFKaENlQUJhVHRYTDJtOVk0djloN21LVU9MSzJ6QlgxVWhCa25hWGFKMkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidU93UVZpTnRpUHd6cFkxTXd1TGQ4L3pQVXBrelF0SmtjWjJjbnRPR3lSU3lpMVBnY0R0enc0Rkhqb0NJMTFVSFBXdml1OGNKY0Q5bGQ3anpPMUt6RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNy9GTWJ4UjNyOTIrN0dYUXJtSTRkVU1SU2RJYlVQRmxCQ24yS2ZyNG9yWFBaRi9BQUhSelRUM3IwRC9Qb0Q4VHdxS0FrSlhZeHF6bmcwaG9XN2lzQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDc4OTQ5MDc3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2MDg5MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFM0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUzRS5qc29uIjogIntcImtleURhdGFcIjpcImJDWFM1YlpFMjZIRlFZNXRRT2xCaUpPNmExZVpZbmRDdVdJeXU3bXhyY2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMzNDM0NDAzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1NjA4OTM1ODQ2XCJ9Igp9"  // PUT your SESSION_ID 


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
