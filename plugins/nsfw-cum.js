import fs from 'fs'

let handler = async (m, { conn }) => {
m.react(global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/cum?apikey=${global.lann}`
 let neko = " NIH CUM NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(cum)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['cum']
handler.premium = true
handler.private = false
export default handler;