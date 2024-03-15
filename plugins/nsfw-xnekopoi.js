import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/neko?apikey=${global.lann}`
 let neko = " NIH XNEKOPOI NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(xnekopoi)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['xnekopoi']
handler.premium = true
handler.private = false
export default handler;