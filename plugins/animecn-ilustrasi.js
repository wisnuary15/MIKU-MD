import fetch from 'node-fetch'


let handler = async (m, { conn, command }) => {
	let honkai = 'https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=P%E7%AB%99%E7%B3%BB%E5%88%971'
	conn.sendMessage(m.chat, { image: { url: honkai }, caption: 'ilustrasi Cute!~~🦊🐾 ' }, m)
}


handler.command = /^(ilustrasi)$/i
handler.tags = ['animecn']
handler.help = ['ilustrasi']


export default handler

