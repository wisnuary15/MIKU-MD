import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(terbayang bayang kamu)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/terbayang bayang kamu.mp3",
"./vn/terbayang bayang kamu.mp3",
]