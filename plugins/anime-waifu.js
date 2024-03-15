import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let アイ = `https://t.mwm.moe/pc/`
	conn.sendMessage(m.chat, { image: { url: アイ }, caption: 'INI WAIFU NYA KAK>//<? ' }, m)
}
handler.command = /^(waifu)$/i
handler.tags = ['anime','prem']
handler.help = ['waifu']
handler.premium = true;
export default handler