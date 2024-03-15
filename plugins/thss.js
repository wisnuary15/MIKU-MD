import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Saya sangat berterima kasih Atas Kerjasama Nya Membuat MIKU BOTZ_

┌─⊷ _*THANKS TO*_
➠ Sèins
➠ Kènz
➠ Ikƴ
➠ ~
➠ ~
➠ ~
➠ ~
➠ ~
➠ ~
➠ ~
➠ ~
➠ ~
└──────────────
`

    let pp = 'https://telegra.ph/file/a5de4f92b86d3d616401e.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}
handler.customPrefix = /^(tqto|tq|.tqto|.tq)$/i
handler.command = new RegExp

export default handler