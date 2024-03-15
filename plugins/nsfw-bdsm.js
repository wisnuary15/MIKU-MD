import fs from 'fs'

let handler = async (m, { conn }) => {
m.react(global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/bdsm?apikey=${global.lann}`
 let neko = " NIH BDSM NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(bdsm)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['bdsm']
handler.premium = true
handler.private = false
export default handler;