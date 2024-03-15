import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\n*Contoh:* \n${usedPrefix + command} https://v.douyin.com/iNS4tBXN/`;
  }
    if (!args[0].match(/douyin/gi)) {
      throw `URL Tidak Ditemukan!`;
    }
    m.reply(wait)
    try {
    const api = await fetch(`https://api.betabotz.eu.org/api/download/douyin?url=${args[0]}&apikey=${lann}`);
    const res = await api.json();
    var {
      title, 
      duration, 
      total_share,
      total_download,
      total_play,
      total_comment
    } = res.result.info_video
    const { 
    nowm,
    wm, 
    audio 
    } = res.result.url
     
  conn.sendFile(m.chat, nowm, null, `*Deskripsi:* ${title}\n*Durasi:* ${duration}\n*Total Share*: ${total_share}\n*Total Download:* ${total_download}\n*Total Play:* ${total_play}\n*Total Komentar:* ${total_comment}\n*Audio:* ${audio}`, m);
  } catch (e) {
    console.log(e);
    throw `Terjadi kesalahan!`;
  }
};
handler.help = ['douyin'];
handler.command = /^(douyin)$/i;
handler.tags = ['dl'];
handler.diamond = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler;