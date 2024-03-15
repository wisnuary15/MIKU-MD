import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let 日本动画片 = `https://img.moehu.org/pic.php?id=sjpic`
	conn.sendMessage(m.chat, { image: { url: 日本动画片 }, caption: 'sjpic cute~~🦊🐾 ' }, m)
}
handler.command = /^(sjpic)$/i
handler.tags = ['animecn']
handler.help = ['sjpic']


export default handler

// No limit api Key //
// 没有限制 api 密钥 //