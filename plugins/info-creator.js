import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn }) => {

    const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${nama}\nitem1.TEL;waid=${nomor}:${nomor}\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:${web}\nEMAIL;Email Owner:${email}\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] },mimetype: 'kontak', 
contextInfo: {
externalAdReply: {
title: wm,
body: global.author,
thumbnailUrl: "https://telegra.ph/file/877428178e494b7334fd9.jpg",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
    await delay(1000)
    await conn.sendMessage(m.chat, { text: `Hᴀʟᴏ Kᴀᴋ @${m.sender.split('@')[0]}, Iᴛᴜ Oᴡɴᴇʀ Kᴜ Kᴀᴋ, Sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ Jɪᴋᴀ Pᴇʀʟᴜ `, mentions: [m.sender] }, { quoted: m})
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))