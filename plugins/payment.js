import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `
╭─「 • *𝑷𝒖𝒍𝒔𝒂* • 」
│  083806470574
╰─────

╭─「 • *𝑬-𝑾𝒂𝒍𝒍𝒆𝒕* • 」
│ • *𝑫𝒂𝒏𝒂* 083808400312
│ • *𝑮𝒐𝒑𝒂𝒚* 083806470574
│ • *𝑸𝒓𝒊𝒔* 𝑯𝒖𝒃𝒖𝒏𝒈𝒊 𝑶𝒘𝒏𝒆𝒓
╰─────

◛˖ _*ᴊɪᴋᴀ ꜱᴜᴅᴀʜ ᴍᴇᴍʙᴀʏᴀʀ*_\n_*ꜱɪʟᴀʜᴋᴀɴ ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴋᴇ ᴏᴡɴᴇʀ ʙᴏᴛ...*_`
await conn.sendFile(m.chat, qris, 'payment.jpg', `${payi}`, m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
export default handler