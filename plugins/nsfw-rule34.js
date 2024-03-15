import { googleImage, pinterest } from '@bochilteam/scraper'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
m.reply (wait)
    if (!text) throw `Use example ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendFile(m.chat, res, 'rule34.jpg', ` \`\`\`➩ Random Nsfw Rule34 ${text ? text.capitalize() : false}\`\`\` `,  m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw','prem']
handler.command = ['rule34']
handler.premium = true
export default handler