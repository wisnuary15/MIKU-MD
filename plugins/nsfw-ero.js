import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/ero?apikey=${global.lann}`
 let neko = " NIH ERO NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(ero)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['ero']
handler.premium = true
handler.private = false
export default handler;