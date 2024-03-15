import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command, args }) => {
    let err = `
Contoh:
${usedPrefix + command} <lang> <your message>
${usedPrefix + command} id Hello How Are You

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()
    if (!args[0]) throw err
    try {
        let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
        let msg = m.quoted ? m.quoted.text : txt
        let src = await(await fetch(API('lol', '/api/translate/auto/' + args[0], { text: msg }, 'apikey'))).json()
        await m.reply(src.result.translated)
    } catch (e) {
        throw err
    }
}
handler.help = ['translate']
handler.tags = ['tools']
handler.command = /^(tr|translate)$/i
handler.limit = true
export default handler