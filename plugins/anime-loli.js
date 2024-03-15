import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let アイ = `https://t.mwm.moe/moe/`
	conn.sendMessage(m.chat, { image: { url: アイ }, caption: 'LOLI cute ~🦊🐾 ' }, m)
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
export default handler