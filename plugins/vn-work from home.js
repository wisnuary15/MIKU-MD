import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(work from home)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/work from home.mp3",
"./vn/work from home.mp3",
]