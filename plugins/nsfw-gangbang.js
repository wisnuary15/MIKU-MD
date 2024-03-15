import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/gangbang?apikey=${global.lann}`
 let neko = " NIH GANGBANG NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(gangbang)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['gangbang']
handler.premium = true
handler.private = false
export default handler;