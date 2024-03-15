import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let honkai = `https://api.woeo.net/API/ecy/index_5.php`
	conn.sendMessage(m.chat, { image: { url: honkai }, caption: 'menhera-chan cute 🎶 🦊🐾 ' }, m)
}
handler.command = /^(menhera|mc)$/i
handler.tags = ['animecn']
handler.help = ['menhera']

export default handler

