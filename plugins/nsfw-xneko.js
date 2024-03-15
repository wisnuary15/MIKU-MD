import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {

m.react(global.xmoji)
let res = await fetch('https://api.waifu.pics/nsfw/neko')

if (!res.ok) return m.react('❌')

let json = await res.json()

if (!json.url) return m.react('❌')

await conn.sendFile(m.chat, json.url, 'xneko.png', '*Nih Nekonya Kak😋*', m)

}

handler.help = ['xneko']
handler.tags = ['nsfw','prem']
handler.command = ['xneko']
handler.premium = true

export default handler;