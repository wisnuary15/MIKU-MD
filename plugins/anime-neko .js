import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let アイ = `https://t.mwm.moe/ysz/`
	conn.sendMessage(m.chat, { image: { url: アイ }, caption: 'NEKO cute ~🦊🐾 ' }, m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko','prem']
handler.premium = true;
export default handler