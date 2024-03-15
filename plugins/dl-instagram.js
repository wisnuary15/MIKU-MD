import fetch from "node-fetch"
import util from "util"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Masukkan tautan Instagram\n\n📌Contoh : ${usedPrefix + command} https://www.instagram.com/reel/Cvxkrtsg7-G/?igshid=MzRlODBiNWFlZA==`
    m.reply(wait)
     const url = args[0];
     let re = await fetch(API('lann', '/api/download/igdowloader', { url: url, apikey: lann }))
     let message = await re.json()  
    try {             
        for (let i of message.message ) {
            conn.sendFile(m.chat, i._url, null, `*Instagram Downloader*`, m)
        }
    } catch(err) {
        m.reply(util.format(message))
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(Instagram|ig|igdl|igstory)$/i
handler.limit = true

export default handler
