import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji) 	
 let api = `https://api.betabotz.eu.org/api/nsfw/masturbation?apikey=${global.lann}`
 let neko = " NIH MASTURBATION NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(masturbation)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['masturbation']
handler.premium = true
handler.private = false
export default handler;