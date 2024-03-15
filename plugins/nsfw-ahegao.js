import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji)	
 let api = `https://api.betabotz.eu.org/api/nsfw/ahegao?apikey=${global.lann}`
 let neko = " NIH AHEGAO NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(ahegao)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['ahegao']
handler.premium = true
handler.private = false
export default handler;