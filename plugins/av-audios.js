let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'fino': './src/mp3/fino.mp3',
  'ah': './src/mp3/ah.mp3',
  'bot': './src/mp3/bot.mp3',
  'yowaimo': './src/mp3/yowaimo.mp3',
  'karena kamu': './src/mp3/karena kamu.mp3',
  'moshi-moshi': './src/mp3/moshi-moshi.mp3',
}