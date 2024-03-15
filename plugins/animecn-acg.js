import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://www.loliapi.com/acg/`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'acg cute~~🦊🐾 ' }, m)
}
handler.command = /^(acg)$/i
handler.tags = ['animecn']
handler.help = ['acg']


export default handler

