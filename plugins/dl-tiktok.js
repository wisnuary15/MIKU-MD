import fetch from 'node-fetch'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZSF8mBw18/`

let f = await api.tiktok(text)
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  await m.reply('𝑳𝒐𝒂𝒅𝒊𝒏𝒈 𝑯𝒂𝒓𝒂𝒑 𝑻𝒖𝒏𝒈𝒈𝒖...')
 let cap = `⪼𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐓𝐢𝐤𝐭𝐨𝐤⪻
 
 ╭╼⪼𝐓𝐈𝐊𝐓𝐎𝐊⪻
✯ *Nickname* : *${f.nickname}*
✯ *Duration* : *${f.duration}*
✯ *Description* : ${f.description}`
conn.sendFile(m.chat, f.play, 'ttmp4', cap, m)
conn.sendMessage(m.chat, { audio: { url: f.play }, mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(tiktok|tt)$/i
handler.limit = true
export default handler