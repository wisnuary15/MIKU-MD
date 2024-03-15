import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, `https://api.betabotz.eu.org/api/nsfw/gifs?apikey=${global.lann}`, global.packname, global.author)
m.react (global.xmoji)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
} 

handler.command = /^(gifs)$/i
handler.tags = ['nsfw','prem']
handler.help = ['gifs']
handler.premium = true
export default handler;