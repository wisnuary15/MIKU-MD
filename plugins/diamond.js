let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let user = global.db.data.users[who]
    let diamond = user.premiumTime >= 1 ? 'Unlimited' : user.diamond
    m.reply(`
❏ *Username:* ${user.registered ? user.name : conn.getName(who)}
▧ *Status:* ${who.split`@`[0] == global.nomor ? 'MyDevelopers👑' : user.premiumTime >= 1 ? 'Premium User' : user.level >= 1000 ? 'Elite User' : 'Free User'}
▧ *Diamond:* ${diamond} / 1000
`.trim())
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit|dm|diamond)$/i
export default handler