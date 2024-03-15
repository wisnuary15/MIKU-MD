import fs from 'fs'

let handler = async (m, { conn }) => {
let text = `ʜᴀɪ ᴋᴀᴋ ᴀᴅᴀ ʏᴀɴɢ ʙɪsᴀ ᴍɪᴋᴜ ʙᴀɴᴛᴜ? ᴋᴇᴛɪᴋ [ᴀʟʟᴍᴇɴᴜ] ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ sᴇᴍᴜᴀ ᴍᴇɴᴜ ʙᴏᴛᴢ`
 conn.sendMessage(m.chat, { 
 video: fs.readFileSync('./media/menu.mp4'),
mimetype: 'video/mp4',
fileLength: 1000,
gifPlayback: true,
caption:text,
contextInfo: {
externalAdReply: {
title: `𝐌-𝐈-𝐊-𝐔-𝐌-𝐃`,
body: 'sᴇɪɴs ᴏғғɪᴄɪᴀʟ',
thumbnailUrl: 'https://telegra.ph/file/ba80a93c5b91ffa3d835b.jpg',
sourceUrl: `wa.me/6289670540908`,
mediaType: 1,
renderLargerThumbnail: true
}},})
conn.sendMessage(m.chat, { audio: fs.readFileSync('./media/menu.mp3'), quoted: m });
}
handler.command = /^(menu|helo|help)$/i;

export default handler;