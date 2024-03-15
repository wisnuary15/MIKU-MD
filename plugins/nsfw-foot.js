import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/foot?apikey=${global.lann}`
 let neko = " NIH FOOT NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(foot)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['foot']
handler.premium = true
handler.private = false
export default handler;