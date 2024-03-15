let linkRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|anj|babi|kuntul|asu|janc|jnck|ngontol|hasu|anjeng|memeg|mmg|pemai|ngtd|bangke|bangkek|bngke|cok|bjingan|poke|pepeg|ppg|jingan|jing|jir|anjir|njay|anjay|kerek|kere|peli|pli|peller/i // tambahin sendiri
export async function before(m) {
    if (m.isBaileys && m.fromMe) return
    let chat = global.db.data.chats[m.chat]
    let isGroupToxic = linkRegex.exec(m.text)
    if (chat.antiToxic && isGroupToxic && m.isGroup) {
        await conn.sendMessage(m.chat, { delete: m.key })
    let vn = "./vn/toxic.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
  }
  return true
}