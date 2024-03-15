import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(michi|michika|chika|bot|ping|p)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./vn/menu.mp3",
	"./vn/menu1.mp3",
	"./vn/menu2.mp3",
	"./vn/menu3.mp3",
	"./vn/menu4.mp3",
];