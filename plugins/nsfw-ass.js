import fs from 'fs'

let handler = async (m, { conn }) => {
m.react (global.xmoji)	
 let api = `https://api.betabotz.eu.org/api/nsfw/ass?apikey=${global.lann}`
 let neko = " NIH ASS NYA KAK"
conn.sendFile(m.chat,api, "",neko, m) 
}
handler.command = /^(ass)$/i;
handler.tags = ['nsfw','prem']
handler.help = ['ass']
handler.premium = true
handler.private = false
export default handler;