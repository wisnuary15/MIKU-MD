import axios from 'axios';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn }) => {
  let message = m.quoted ? m.quoted : m;
  let mime = (message.msg || message).mimetype || '';

  if (/image/.test(mime)) {
    conn.sendMessage(m.chat, {
      react: {
        text: 'ðŸ•’',
        key: m.key,
      }
    });
    let image = await message.download();
    let imageUrl = await uploadImage(image);

    try {
      let removeBgUrl = `https://api.lolhuman.xyz/api/removebg?apikey=GataDios&img=${encodeURIComponent(imageUrl)}`;
      let removeBgResponse = await axios.get(removeBgUrl, { responseType: 'arraybuffer' });
      let caption = 'Here is your image with removed background.';
      conn.sendFile(m.chat, Buffer.from(removeBgResponse.data), 'removed.png', caption, m);
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, 'An error occurred while removing the image background.', m);
    }
  } else {
    conn.reply(m.chat, 'Reply to an image with caption *.removebg*', m);
  }
};

handler.help = ['nobg', 'removebg'];
handler.tags = ['tools'];
handler.command = /^(nobg|removebg)$/i;

export default handler;