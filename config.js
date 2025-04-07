const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "THARUWA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9Sc3BVS1UxWDA3V3dMR2RqY2FvQmdYemRSeTB6U1RrM1hZdERCMEtGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG5kd0pwUHh0elR0ZE1XcTdPUFJkcGlBY2YwNmFXTHBZaWdiQ3AxeG95MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SUpVTEZrVlRvcVNhNWUzOUJacmhGeTlUVGt4NTArdDVicG5Yd213V0VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0V0hjRmhpYm9jY0F0TS9PWCtWWFBUMUk4ZUhOUFFZcmZtMVlLdnhycFRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQU1M3Zmw5VXNRTWJ3TmZwTjJydk82cHpmK3Q3T0JWQ1g3QXNPVXhsMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1S3BoT0tLdmVpVEsrU2laUU0rUmo2Z3lrK3E3czRETkd5clRzK3MwQ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01TblN0ZzNYNmJUbk9QZ1Y0ZVBpVTBMTU44c0s4Zjh5YkNNUGVuQWtIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpkTmR2V1RqNFBabFh6bGFBaG5mNDZGWThwMjd1a1FqVzlRQnRQYXlUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVTaklmT3VEdVROcFZkN2FOcUR3eFdBNjBxYzdpc2hTcjR0dXBzNmhZT2tSM0tNcEpZeG1DQUJOWTkreXlnOVVOUXZjdDdpdk9lZTdWbFNMbDAzTENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJkaTNlMXp3d3NXU0JFc3d0RndBWUhTME9MZUZLZG9FUFVwNGNOREtnQUxJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTRUFNTVpEU1NOT1BXZ01iVFZub3JBIiwicGhvbmVJZCI6ImNhZDQ1MWQyLTBlNDAtNGEzYi04MTllLWY5OGE1MzdhMjZmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtamQ0T01tblRyV1ZBdUJQU1J6NFd2WEltSk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2tsWE94STUvM1NZdzBLYUIyOEdqdFMySFFvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFERkVaMjdIIiwibWUiOnsiaWQiOiI5NDc2MjQ5ODUxOToxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcjMrYklGRUpEZHpiOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjS0tieG9OT1krOC9QRDNMR3g2SVRyZnEyT1h1RlU3ak9tNDVSSHVmc1E4PSIsImFjY291bnRTaWduYXR1cmUiOiJVWnZFb3pkUGRIOE1Jc00vS0dQYVVxTU80K1JOY0dJZXgrU1pSb09IbStMZGJRai8xMVA3dXFyS3JvcmdiMmVvSWhMbGJGNkxLTVJZR0xDME5pdzlDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlN0S3RTKytBcThiTFQ5VnRtd1piV05KUmxaS3pXS3FYNFdjQWVseGhKMlBXVEI2VW8yRW04NTE0WGMyT21nU1lzSFhiamRRUVptUnpjZytISE9mQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjQ5ODUxOToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhDaW04YURUbVB2UHp3OXl4c2VpRTYzNnRqbDdoVk80enB1T1VSN243RVAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQwMDY4MTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTd5In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW 𝗧𝗛𝗔𝗥𝗨𝗪𝗔_MD 😎😎*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "THARUWA_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕄𝕣   𝕋   𝕠   𝕙   𝕚   𝕕",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94761180271",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗧𝗛𝗔𝗥𝗨𝗪𝗔",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ᴛʜᴀʀᴜᴡᴀ_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/yw7szdC/IMG-20250331-WA0270.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 I'M ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94761180271",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
