import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/thighs?apikey=${global.lann}`
 let neko = " NIH THIGHS NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(thighs)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['thighs']
handler.premium = true
handler.private = false
export default handler;