import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Arigatou|arigatou)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/arigatou.mp3",
"./vn/arigatou.mp3",
]