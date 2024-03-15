import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args }) => {
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  
  let clockString = `Tanggal : ${day}/${month}/${year}\nJam : ${wib} WIB`;
  
  // Mengirimkan hasil ke grup atau 
  conn.reply(m.chat, clockString, m);
}

handler.help = ['kalender'];
handler.tags = ['tools'];
handler.command = /^(clock|kalender|jam|tanggal)$/i;

export default handler;