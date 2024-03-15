import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/cuckold?apikey=${global.lann}`
 let neko = " NIH CUCKOLD NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(cuckold)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['cuckold']
handler.premium = true
handler.private = false
export default handler;