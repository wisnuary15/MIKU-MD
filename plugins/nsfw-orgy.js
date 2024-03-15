import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/orgy?apikey=${global.lann}`
 let neko = " NIH ORGY NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(orgy)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['orgy']
handler.premium = true
handler.private = false
export default handler;