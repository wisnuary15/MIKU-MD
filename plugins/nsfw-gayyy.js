import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/gay?apikey=${global.lann}`
 let neko = " NIH GAY NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(gayyy)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['gayyy']
handler.premium = true
handler.private = false
export default handler;