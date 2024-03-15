import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/tentacles?apikey=${global.lann}`
 let neko = " NIH TENTACLES NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(tentacles)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['tentacles']
handler.premium = true
handler.private = false
export default handler;