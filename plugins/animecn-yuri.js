import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let honkai = `https://api-images.kanochan.net/api.php?album=yuri&`
	conn.sendMessage(m.chat, { image: { url: honkai }, caption: 'yuri girl cute  anime 🎶 🦊🐾 ' }, m)
}
handler.command = /^(yuri)$/i
handler.tags = ['animecn']
handler.help = ['yuri']

export default handler

