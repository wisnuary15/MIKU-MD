import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Ohayou|ohayou)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/ohayou.mp3",
"./vn/ohayou.mp3",
]