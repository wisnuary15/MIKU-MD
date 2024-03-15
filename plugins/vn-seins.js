import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(.Seins|.seins)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/seins.mp3",
"./vn/seins.mp3",
]