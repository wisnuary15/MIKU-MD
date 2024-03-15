import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/panties?apikey=${global.lann}`
 let neko = " NIH PANTIES NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(panties)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['panties']
handler.premium = true
handler.private = false
export default handler;