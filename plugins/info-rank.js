let handler = async m => {

let user = global.db.data.users[m.sender]
let intro = `*Rank Anda Saat Ini* ⪼ *${user.role}* ⪻`
conn.sendMessage(m.chat, {
	text: intro,
	contextInfo: {
	externalAdReply: {
	title: '𝐍𝐀𝐊𝐀𝐍𝐎 𝐌𝐈𝐊𝐔',
	body: global.author,
	thumbnailUrl: 'https://telegra.ph/file/34e6c863472c1ed5a5359.jpg',
	sourceUrl: '-',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
}
handler.tags = ['info']
handler.help = ['rank']
handler.command = /^(rank|cekrank)$/i

export default handler