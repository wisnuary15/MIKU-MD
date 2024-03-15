import ytdl from 'ytdl-core'
import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'
import search from 'yt-search'

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*Example*: .play kill bill');

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  try {
    let results = await search(text);
    let videoId = results.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let url = info.videoDetails.video_url;
    let duration = parseInt(info.videoDetails.lengthSeconds);
    let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
    let views = info.videoDetails.viewCount;
    let minutes = Math.floor(duration / 60);
    let description = results.videos[0].description;
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    function formatViews(views) {
      if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
      } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
      } else {
        return views.toString();
      }
    }

    let audio = ytdl(videoId, { quality: 'highestaudio' });
    let inputFilePath = 'tmp/' + title + '.webm';
    let outputFilePath = 'tmp/' + title + '.mp3';

    let fileSize = 0;
    audio.on('data', (chunk) => {
      fileSize += chunk.length;
      if (fileSize > 50 * 1024 * 1024) {
        audio.destroy();
        fs.unlinkSync(inputFilePath);
        return m.reply('😅Audio mencapai batas 50MB');
      }
    });
    
    let viewsFormatted = formatViews(views);
    let infoText = `
*${title.toUpperCase()}*
    
╭─ •  「 *YOUTUBE PLAY* 」
│  ◦  *Durasi*: ${durationText}
│  ◦  *Tanggal Upload*: ${uploadDate}
│  ◦  *Dilihat*: ${viewsFormatted}
╰──── •`;

    conn.sendMessage(m.chat, {
      text: infoText,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: `${title}`,
          body: description,
          thumbnailUrl: thumbnailUrl,
          mediaUrl: url,
          sourceUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
      ffmpeg(inputFilePath)
        .toFormat('mp3')
        .on('end', async () => {
          let thumbnailData = await conn.getFile(thumbnailUrl);
          let buffer = fs.readFileSync(outputFilePath);
          conn.sendFile(m.chat, buffer, `${title}.mp3`, '', m);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .on('error', (err) => {
          console.log(err);
          m.reply(`🥺Terjadi kesalahan saat mengonversi audio: ${err.message}`);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .save(outputFilePath);
    });

  } catch (e) {
    console.log(e);
    m.reply(`🥺Terjadi kesalahan saat mencari lagu: ${e.message}`);
  }
};

handler.help = ['play'];
handler.tags = ['dl'];
handler.command = /^play$/i;
handler.limit = true;

export default handler