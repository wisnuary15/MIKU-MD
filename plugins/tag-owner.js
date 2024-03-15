import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, `https://telegra.ph/file/3d09b0264e6085c0526c1.jpg`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
} 

handler.customPrefix = /^(@6283806470574|@6289670540908|seins|sen|senn|seinss|sein|seinnn|@6289670540908 seins|@6289670540908 sen)$/i;
handler.command = new RegExp()

export default handler