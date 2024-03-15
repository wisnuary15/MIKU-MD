import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let honkai = `https://api.wdvipa.com/hs`
	conn.sendMessage(m.chat, { image: { url: honkai }, caption: 'hs girl cute  anime 🎶 🦊🐾 ' }, m)
}
handler.command = /^(hs)$/i
handler.tags = ['animecn']
handler.help = ['hs']

export default handler

