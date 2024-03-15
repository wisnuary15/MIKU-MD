import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/manga?apikey=${global.lann}`
 let neko = " NIH XMANGA NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(xmanga)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['xmanga']
handler.premium = true
handler.private = false
export default handler;