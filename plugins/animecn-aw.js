import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://api.wdvipa.com/bm`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'waifu aw cute ~🦊🐾 ' }, m)
}
handler.command = /^(aw)$/i
handler.tags = ['animecn']
handler.help = ['aw']


export default handler

