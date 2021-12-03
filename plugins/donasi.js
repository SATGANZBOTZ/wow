let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • tre [+62 895-3362-82144]
│ • xl axiata [+62 882-1727-7973]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [0895336282144]
│ • saweria [https://saweria.co/thesadboy01]
╰────

╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895336282144
╰────
`.trim() )
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
