import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/yuri?apikey=${global.lann}`
 let neko = " NIH XYURI NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(xyuri)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['xyuri']
handler.premium = true
handler.private = false
export default handler;