import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';
let handler = async (m, { text, args, usedPrefix, command }) => {
    m.reply(`ʟᴏᴀᴅɪɴɢ, ᴛᴜɴɢɢᴜɪɴ ᴀᴊᴀ ᴠɪᴅʜᴇɴᴛᴀɪ sᴜᴅᴀʜ ᴅɪ ᴋɪʀɪᴍ ᴅɪ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ sɪʟᴀʜᴋᴀɴ ᴅɪ ᴄʜᴇᴄᴋ , ᴊᴀɴɢᴀɴ sᴀᴍʙɪʟ ᴄᴏʟɪ ʏᴀʜ🗿`)
    m.react ('⏱️')
    let cr = await xhentai(text);
    let tan = cr[Math.floor(Math.random(), cr.length)]
    let vap = `
⭔ Title : ${tan.title}
⭔ Category : ${tan.category}
⭔ Mimetype : ${tan.type}
⭔ Views : ${tan.views_count}
⭔ Shares : ${tan.share_count}
⭔ Source : ${tan.link}
⭔ Media Url : ${tan.video_1}
`
conn.sendMessage(m.sender, { video: { url: tan.video_1 }, caption: vap }, { quoted: m})
};
handler.help = ['vidhentai'];
handler.command = /^(vidhentai)$/i;
handler.tags = ['nsfw','prem'];
handler.premium = true;
handler.diamond = false;

export default handler;

async function xhentai(page) {
    return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/' + page)
            .then((data) => {
                const $ = cheerio.load(data.data);
                const hasil = [];
                $('#primary > div > div > ul > li > article').each(function (a, b) {
                    hasil.push({
                        title: $(b).find('header > h2').text(),
                        link: $(b).find('header > h2 > a').attr('href'),
                        category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                        share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                        views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                        type: $(b).find('source').attr('type') || 'image/jpeg',
                        video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                        video_2: $(b).find('video > a').attr('href') || ''
                    });
                });
                resolve(hasil);
            })
            .catch(reject);
    });
}