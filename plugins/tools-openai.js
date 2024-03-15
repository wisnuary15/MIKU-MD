import axios from "axios"
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Iya Kak Mau Nanya Apa???`
    m.reply(wait)
let ayaka = await fetch(`https://aemt.me/openai?text=${text}`)
let hasil = await ayaka.json()
 let awe = `*${hasil.result}*`.trim()
    conn.sendMessage(m.chat, {
text: awe,
contextInfo: {
externalAdReply: {
title: '𝐌-𝐈-𝐊-𝐔-𝐌-𝐃',
body: '© 𝑺𝒆𝒊𝒏𝒔 𝑶𝒇𝒇𝒄',
thumbnailUrl: "https://telegra.ph/file/2125d60e679c33cf6ef63.jpg",
sourceUrl: "-",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['ai']
handler.tags = ['main']
handler.command = /^(ai|syg|sayang)$/i

export default handler