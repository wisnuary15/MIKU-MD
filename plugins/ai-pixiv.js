import fetch from "node-fetch"
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari pixiv.\n\nContoh:\n${command} Hutao`
  m.reply(wait)
  let res = `https://image.anosu.top/pixiv/direct?pixiv=1&keyword=${text}`
  
  conn.sendFile(m.chat, `https://image.anosu.top/pixiv/direct?pixiv=1&keyword=${args}`, 'anu.jpg', `Nih Kak\nPencarian: ${args}`, m)
}
handler.help = ['anime']
handler.tags = ['anime','prem']
handler.command = /^(anime)$/i
handler.premium = true

export default handler