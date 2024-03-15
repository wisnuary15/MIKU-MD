import fs from 'fs'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.game = conn.game ? conn.game: {}
    let id = 'tebaklogo-' + m.chat
    if (id in conn.game) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./json/tebaklogo.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hlogo untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.game[id] = [
        await conn.sendFile(m.chat, json.img, 'tebaklogo.jpg', caption, m),
        json,
        poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo$/i

handler.onlyprem = true
handler.game = true

export default handler