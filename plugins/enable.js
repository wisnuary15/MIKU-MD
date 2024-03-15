//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'antitoxic':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiToxic = isEnable
            break
            
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
     case 'simi':
            if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
            }
            chat.simi = isEnable
            break
     
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
      
    case 'pconly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gconly':   
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
            
    default:
      if (!/[01]/.test(command)) return conn.sendMessage(m.chat, {
text: `
┌─⊷ *𝐋𝐈𝐒𝐓 𝐎𝐏𝐓𝐈𝐎𝐍𝐒*
▢ welcome
▢ antilink
▢ detect 
▢ document
▢ nsfw
▢ antitoxic
▢ autolevelup
▢ chatbot 
▢ public
▢ pconly
▢ gconly
▢ autoread
└─────────────
*📌 Contoh :*
*${usedPrefix}on* welcome
*${usedPrefix}off* welcome`,
contextInfo: {
externalAdReply: {
title: '𝐌-𝐈-𝐊-𝐔-𝐌-𝐃',
body: '© 𝑺𝒆𝒊𝒏𝒔 𝑶𝒇𝒇𝒄',
thumbnailUrl: 'https://telegra.ph/file/968471fbcd8563d3635a9.jpg',
sourceUrl: '-',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
      throw false
}

let anu = `╭───═[Status]\n│⩽⩾ Tipe: *${type}*\n│⩽⩾ Status: *Sukses*\n│⩽⩾ Opsi: *${isEnable ? 'Diaktifkan' : 'Dinonaktifkan'}*\n│⩽⩾ Untuk: *${isAll ? 'bot ini' : isUser ? '' : 'obrolan ini'}*\n┗─────────────···
`.trim()

conn.sendMessage(m.chat, {
text: anu,
contextInfo: {
externalAdReply: {
title: '𝐌-𝐈-𝐊-𝐔-𝐌-𝐃',
body: '© 𝑺𝒆𝒊𝒏𝒔 𝑶𝒇𝒇𝒄',
thumbnailUrl: 'https://telegra.ph/file/8f749c09d7f78f27690cc.jpg',
sourceUrl: '-',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['en', 'dis'].map(v => v + 'able <welcome>')
handler.tags = ['group']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler