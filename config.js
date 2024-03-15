/*
ᴛʜᴀɴᴋs ᴛᴏ ᴍɪᴋᴜ-ʙᴏᴛᴢ
ᴛʜᴀɴᴋs ᴛᴏ ᴍɪᴋᴜ-ᴍᴅ
ᴛʜᴀɴᴋs ᴛᴏ sᴇɪɴsᴏғғᴄ
ᴛʜᴀɴᴋs ᴛᴏ sᴇɪɴs
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285723806433', '𝐉𝐨𝐝𝐳𝐳 𝐨𝐟𝐟𝐜', true],
  ['6285723806433']
] // Nomor Owner

global.mods = ['6285723806433'] 
global.prems = ['6285723806433']

// apikey
global.lolkey = 'apikey-seins'
global.lann = 'apikey-seins'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.lolhuman.xyz': 'apikey-seins',
  'https://api.betabotz.eu.org': 'apikey-seins'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  lolkey: 'https://api.lolhuman.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}

// Watermark
global.nama = '𝐉𝐨𝐝𝐳𝐳 𝐨𝐟𝐟𝐜'// nama owner
global.nomor = '6285723806433' // nomor owner
global.nans = '𝐲𝐮𝐭𝐚𝐨𝐤𝐤𝐨𝐭𝐬𝐮' // nama bot 
global.thumb = 'https://telegra.ph/file/927c725aadf7fb4cb4bb3.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/LDqJYVZEbQY20SyBPsGvXJ'// link group yang ada di menu

// Sticker wm
global.wm = '© 𝐉𝐨𝐝𝐳𝐳 𝐨𝐟𝐟𝐜'
global.packname = '𝐲𝐮𝐭𝐚𝐨𝐤𝐤𝐨𝐭𝐬𝐮' 
global.author = '@𝐉𝐨𝐝𝐳𝐳𝐨𝐟𝐟𝐜' 
global.fgig = 'https://www.instagram.com/hii.jodii?igsh=bDFranB2MjZ4d2h6' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/Bintang73/botst4rz' // bebas tapi jangan kosong
global.fgyt = 'https://youtube.com/@jodisans7937?si=orUnJhfJf_cbDS-k' // bebas tapi jangan kosong
global.fgpyp = 'https://www.facebook.com/jodia.rahmat.1' // bebas tapi jangan kosong
global.fglog = 'https://telegra.ph/file/927c725aadf7fb4cb4bb3.jpg'

// Other
global.dana = '085723806433'
global.qris = 'https://telegra.ph/file/c2797676b606c0a846431.jpg'
global.web = 'Youtube : Jodi sans'
global.email = '𝐟𝐟𝐬𝐚𝐲𝐳𝐧@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ 𝐉𝐨𝐝𝐳𝐳'

global.wait = '𝑳𝒐𝒂𝒅𝒊𝒏𝒈 𝑺𝒆𝒃𝒆𝒏𝒕𝒂𝒓.....'
global.rwait = '⌛'
global.dmoji = '🗿'
global.done = '☑️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})