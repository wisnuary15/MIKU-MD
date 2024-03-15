import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Uwuw|uwuw)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/uwuw.mp3",
"./vn/uwuw.mp3",
]