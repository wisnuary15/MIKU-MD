import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
≡ *INFO BOT*
  
*BOT INFO CHAT*
▢ *${groupsIn.length}* Obrolan grup
▢ *${groupsIn.length}* Grup bersatu
▢ *${groupsIn.length - groupsIn.length}* Grup yang ditinggalkan
▢ *${chats.length - groupsIn.length}* Obrolan pribadi
▢ *${chats.length}* Total Chats

*≡ OWNER*
  ${nama}
▢ Instagram :
  • ${fgig}
▢ WhatsApp :
  • ${nomor}
▢ Group : 
  • ${dygp}

 *≡ S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*≡  Penggunaan Memori NodeJS*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
conn.sendMessage(m.chat, {
	text: infobt,
	contextInfo: {
	externalAdReply: {
	title: '𝐍𝐚𝐤𝐚𝐧𝐨 𝐌𝐢𝐤𝐮',
	body: 'sᴇɪɴsᴏғғᴄ',
	thumbnailUrl: 'https://telegra.ph/file/2f5f218eaa5f9691b380a.jpg',
	sourceUrl: '-',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler