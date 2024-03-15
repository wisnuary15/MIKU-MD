import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = await sticker(null, `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=GataDios`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.help = ['blowjob']
  handler.tags = ['nsfw','prem']
  handler.command = /^(blowjob)$/i
  handler.premium = true

   export default handler;