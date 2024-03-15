import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(wakuwaku|anya)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/wakuwaku.mp3",
"./vn/wakuwaku.mp3",
]