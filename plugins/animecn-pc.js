import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let yuanshen = `https://t.mwm.moe/pc/`
	conn.sendMessage(m.chat, { image: { url: yuanshen }, caption: 'waifu wallpaper pc ~~🦊🐾 ' }, m)
}
handler.command = /^(animepc|pc)$/i
handler.tags = ['animecn']
handler.help = ['pc']


export default handler

