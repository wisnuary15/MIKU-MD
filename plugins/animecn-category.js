import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://tuapi.eees.cc/api.php?category=dongman&type=302`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'waifu category~~🦊🐾 ' }, m)
}
handler.command = /^(category)$/i
handler.tags = ['animecn']
handler.help = ['category']


export default handler

