import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://api.woeo.net/API/ecy/index_4.php`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'yuri loli girls cute~~🦊🐾 ' }, m)
}
handler.command = /^(yuriloli)$/i
handler.tags = ['animecn']
handler.help = ['yuriloli']


export default handler

