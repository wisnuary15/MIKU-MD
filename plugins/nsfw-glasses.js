import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/glasses?apikey=${global.lann}`
 let neko = " NIH GLASSES NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(glasses2)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['glasses2']
handler.premium = true
handler.private = false
export default handler;