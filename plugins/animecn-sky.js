import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://api.asxe.vip/scenery.php`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'anime sky cute~~🦊🐾 ' }, m)
}
handler.command = /^(sky)$/i
handler.tags = ['animecn']
handler.help = ['sky']


export default handler

