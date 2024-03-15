import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/pussy?apikey=${global.lann}`
 let neko = " NIH PUSSY NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(pussy)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['pussy']
handler.premium = true
handler.private = false
export default handler;