let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Kukuh
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/ramadhankukuh/RKbot-3
╠➥ Instagram: @ramadhankukuh
╠➥ YouTube: Kukuh Ramadhan YT
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-3543-5804
╠➥ Tsel: 0813-5730-2007
╠➥ Indosat: 0815-1586-0089
║
║>Request? Wa.me/14092765147
║
╠═〘 KUKUH BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

