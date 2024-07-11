const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_51_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT3ZlMTM0M05mbVRTVGZ2YmNpNW04clY5WERsVXBhNmV0UXdSWFlTK0t1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2ODYzNDkxMzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwMEQ1Mzk0QzE0QTMxMTQxQkIxQ0JGRkFDRUE5Q0Y0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDY5MTQ1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY4NjM0OTEzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUM2Mzg4QjgwODgxMEFDOUNGQzcwMUI3OEI3NjY3MDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjkxNDYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1IY1FxWVNNVDh1QlhmZmd2TmhTU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjRkNGI2M2QtMzcxZS00NDI5LTgwMmUtYWRjNzQ1MjUxMjFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDI0MyxcbiAgICAgIDk4LFxuICAgICAgMTQyLFxuICAgICAgNzIsXG4gICAgICAyNTAsXG4gICAgICAxNDIsXG4gICAgICAxMDksXG4gICAgICAxNCxcbiAgICAgIDI0NyxcbiAgICAgIDI0OSxcbiAgICAgIDEwLFxuICAgICAgMTk4LFxuICAgICAgMTY4LFxuICAgICAgMTExLFxuICAgICAgMTY5LFxuICAgICAgMTkwLFxuICAgICAgOTAsXG4gICAgICAyMDAsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAyMCxcbiAgICAgIDIxMixcbiAgICAgIDY4LFxuICAgICAgMTM1LFxuICAgICAgMjM1LFxuICAgICAgMjQyLFxuICAgICAgMTc2LFxuICAgICAgMjEyLFxuICAgICAgMjA5LFxuICAgICAgMjQzLFxuICAgICAgMTgsXG4gICAgICA1OCxcbiAgICAgIDIxNSxcbiAgICAgIDEzMyxcbiAgICAgIDE2MixcbiAgICAgIDg4LFxuICAgICAgNCxcbiAgICAgIDM1LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA2SzFZSDJMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODYzNDkxMzY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQxMTkzMTkxMTM3NDEyOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU0kgSElWWU9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM1VrUHNGRVB2VnZyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJ5NkpDamR4elF5aWE1UlFlTmxzREJEU2hHZWFLNlh4WHl6enZxN0ZsbW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUEdIbDljTTJOdWdVMVg4bmRJNlo1Tm1ENk5YY3pzdVZOaXZsa0dxNWpQdTdiWVBqUWNCM3hDSnFhanpCenBsMWg3NXMxM2tPM0dWYjBxeWE2NWRRQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidmZDWC9jUWJYR1NaaU9vWTc0eHpyLy9hT2UxSzFHcm9SdFptV1JWeVN1NlBwTU9CN3ZaM1pLaE9JcWlKSTBFS21HYXRSM3RZWEZaZjg5ckNkZi9iQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njg2MzQ5MTM2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY5MTQ1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNOOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ044Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUDBBSVVhdEZVTHNyVDd3Q3cwbTNPdXN2UjdaZjIxVm9VNUo4Z2dEcFZ1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjAwMzk5OTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2OTE0NTkwOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
