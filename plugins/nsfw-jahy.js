import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/jahy?apikey=${global.lann}`
 let neko = " NIH JAHY NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(jahy)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['jahy']
handler.premium = true
handler.private = false
export default handler;