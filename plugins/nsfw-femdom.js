import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/femdom?apikey=${global.lann}`
 let neko = " NIH FEMDOM NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(femdom)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['femdom']
handler.premium = true
handler.private = false
export default handler;