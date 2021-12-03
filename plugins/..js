let handler = async (m, { conn, text }) => {
 conn.reply(m.chat,
  await conn.sendButton(m.chat, `ada apa kak ?\n\ntekan tombol *menu* dibawah ini untuk melihat *menu*`.trim(), '© wabot', 'Menu', `.menu` )
  throw false
   )
  }
handler.help = ['bot <text>?']
handler.tags = ['info']
handler.customPrefix = /(\?$)/
handler.command = /^bot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
