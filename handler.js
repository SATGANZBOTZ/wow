//Males Bang
//Udah susah susah nambahin fitur eh malah eror
//Kan babi:v
//tqto BochilGaming
//Recode : the.sad.boy01

let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
const uploadImage = require('./lib/uploadImage')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      
       
       
      m.exp = 0
      m.limit = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.stamina)) user.stamina = 0
            if (!isNumber(user.level)) user.level = 0
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.pc)) user.pc = 0
            if (!isNumber(user.limit)) user.limit = 10
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.money)) user.money = 0
            
            if (!isNumber(user.trofi)) user.trofi= 0
            if (!user.rtrofi) user.rtrofi = 'Perunggu'
            if (!isNumber(user.rumahsakit)) user.rumahsakit= 0
            if (!isNumber(user.fortress)) user.fortress = 0
            if (!isNumber(user.troopcamp)) user.troopcamp = 0
            if (!isNumber(user.shield)) user.shield = false
            if (!isNumber(user.pertanian)) user.pertanian = 0
            if (!isNumber(user.tambang)) user.tambang = 0
            
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0

            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.pet)) user.pet = 0
            if (!isNumber(user.psepick)) user.psepick = 0
            if (!isNumber(user.psenjata)) user.psenjata = 0
        
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            if (!isNumber(user.pancing)) user.pancing = 0
            
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
            
             if (!isNumber(user.apel)) user.apel = 0
             if (!isNumber(user.ayamb)) user.ayamb = 0
             if (!isNumber(user.ayamg)) user.ayamg = 0
             if (!isNumber(user.sapir)) user.sapir = 0
             if (!isNumber(user.ssapi)) user.ssapi = 0
             if (!isNumber(user.esteh)) user.esteh = 0
             if (!isNumber(user.leleb)) user.leleb = 0
             if (!isNumber(user.leleg)) user.leleg = 0

            if (!'banned' in user) user.banned = false
            if (!'bannedReason' in user) user.bannedReason = ''
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
            
            if (!isNumber(user.pedagang)) user.pedagang = false
            if (!isNumber(user.polisi)) user.polisi = false
            if (!isNumber(user.dokter)) user.dokter = false
            if (!isNumber(user.ojek)) user.ojek = false
            if (!isNumber(user.petani)) user.petani = false
            if (!isNumber(user.kuli)) user.kuli = false
            if (!isNumber(user.montir)) user.montir = false
            if (!isNumber(user.job)) user.job = false
            //last Job
            if (!isNumber(user.lastjb)) user.lastjb = 0

            if (!isNumber(user.nila)) user.nila = 0
            if (!isNumber(user.bawal)) user.bawal = 0
            if (!isNumber(user.lele)) user.lele = 0
            if (!isNumber(user.paus)) user.paus = 0
            if (!isNumber(user.kepiting)) user.kepiting = 0
            if (!isNumber(user.gurita)) user.gurita = 0
            if (!isNumber(user.cumi)) user.cumi= 0
            if (!isNumber(user.buntal)) user.buntal = 0
            if (!isNumber(user.dory)) user.dory = 0
            if (!isNumber(user.lumba)) user.lumba = 0
            if (!isNumber(user.lobster)) user.lobster = 0
            if (!isNumber(user.hiu)) user.hiu = 0
           if (!isNumber(user.udang)) user.udang = 0
            if (!isNumber(user.ikan)) user.ikan = 0
            if (!isNumber(user.orca)) user.orca = 0

            if (!isNumber(user.banteng)) user.banteng = 0
            if (!isNumber(user.harimau)) user.harimau = 0
            if (!isNumber(user.gajah)) user.gajah = 0
     if (!isNumber(user.kambing)) user.kambing = 0
     if (!isNumber(user.panda)) user.panda = 0
     if (!isNumber(user.buaya)) user.buaya = 0
     if (!isNumber(user.kerbau)) user.kerbau = 0
     if (!isNumber(user.sapi)) user.sapi = 0
     if (!isNumber(user.monyet)) user.monyet = 0
     if (!isNumber(user.babihutan)) user.babihutan = 0
     if (!isNumber(user.babi)) user.babi = 0
     if (!isNumber(user.ayam)) user.ayam = 0
     if (!isNumber(user.rusa)) user.rusa = 0
     if (!isNumber(user.keledai)) user.keledai = 0
     if (!isNumber(user.beruang)) user.beruang = 0
     if (!isNumber(user.unta)) user.unta = 0
     //
      if (!isNumber(user.lastberbru)) user.lastberbru = 0
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.antispam)) user.antispam = 0
            if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.string)) user.string = 0
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            
            if (!isNumber(user.lastsda)) user.lastsda = 0
            if (!isNumber(user.lastsda)) user.lastwar = 0
            
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmontly = 0
            if (!isNumber(user.lastbansos)) user.lastbansos = 0
            if (!isNumber(user.lastrampok)) user.lastrampok = 0
            if (!('kingdom' in user)) user.kingdom = false
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
            }
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!('ah' in user)) user.ah = []
            if (!('mission' in user)) user.mission = {}
            if (!('pasangan' in user)) user.pasangan = ''
            if (!user.role) user.role = 'Bronze'
            if (!isNumber(user.warning)) user.warning = 0
        } else global.DATABASE._data.users[m.sender] = {
            healt: 100,
            stamina: 100,
            level: 0,
            pc: 0,
            trofi: 0,
            rtrofi: 'perunggu',
            rumahsakit: 0,
            troopcamp: 0,
            fortress: 0,
            makanan: 0,
            shield: false,
            exp: 0,
            limit: 10,
            lastclaim: 0,
            money: 0,
            diamond: 0,
            iron: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            pet: 0,
            psepick: 0,
            psenjata: 0,
            potion: 0,
            pancing: 0,
            sampah: 0,
            armor: 0,
            kucing: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            Banneduser: false,
            BannedReason: '',
            warn: 0,
            afk: -1,
            afkReason: '',
            polisi: 0,
          petani: 0,
          pedagang: 0,
          ojek: 0,
          dokter: 0,
          kuli: 0,
          montir: 0,
          //
          lele: 0,
          nila: 0,
          bawal: 0,
          paus: 0,
          kepiting: 0,
           gurita: 0,
          cumi: 0,
          buntal: 0,
          dory: 0,
          lumba: 0,
          lobster: 0,
          hiu: 0,
          udang: 0,
          ikan: 0,
          orca: 0,
          banteng: 0,
          harimau: 0,
          gajah: 0,
          kambing: 0,
          panda: 0,
          buaya: 0,
          kerbau : 0,
          sapi: 0,
          monyet : 0,
          babihutan: 0,
          babi: 0,
          ayam: 0,

          apel: 20,
          ayamb: 0,
          ayamg: 0,
          ssapi: 0,
          sapir: 0,
          leleb: 0,
          leleg: 0,
          esteh: 0,
            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            string: 0,
            kayu: 0,
            batu: 0,
            besi: 0,
            emas: 0,
            makanan: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastmining: 0,
            lasthunt: 0,
            lastweekly: 0,
            lastmonthly: 0,
            lastbansos: 0,
            lastrampok: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            autolevelup: true,
            ah: [],
            mission: {},
            pasangan:'',
            role: 'Bronze',
            warning: 0,
        }

        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('stiker' in chat)) chat.stiker = false
          if (!('delete' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!('antiToxic' in chat)) chat.antiToxic = false
          if (!('antiVirtext' in chat)) chat.antiVirtext = false
          if (!('antiPhilip' in chat)) chat.antiPhilip = false
          if (!('antiBugfont' in chat)) chat.antiBugfont = false
          if (!('expired' in chat)) chat.expired = {}
          if (!('antiBadword' in chat)) chat.antiBadword = true
          if (!'antiJawa' in chat) chat.antiJawa = false
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          stiker: false,
          delete: false,
          antiLink: false,
          antiVirtext: false,
          antiPhilip: false,
          antiBugfont: false,
          antiToxic: false,
          expired: {},
          antiBadword: true,
          antiJawa: false,
        }
       let settings = global.DATABASE.data.settings
        if (typeof settings !== 'object') global.DATABASE.data.settings = {}
        if (settings) {
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = true
          if (!'backup' in settings) settings.backup = false
          if (!isNumber(settings.backupDATABASE)) settings.backupDATABASE = 0
          if (!'groupOnly' in settings) settings.groupOnly = false
          if (!'nsfw' in settings) settings.nsfw = true
        } else global.DATABASE.data.settings = {
          antispam: true,
          antitroli: true,
          backup: false,
          backupDB: 0,
          groupOnly: false,
          nsfw: true
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (m.chat == 'status@broadcast') return
      if (opts['pconly'] && m.chat.endsWith('g.us')) return
      if (opts['gconly'] && !m.chat.endsWith('g.us')) return
      if (opts['swonly'] && m.chat !== 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let isBotBussines = this.user.isBussines
      let DevMode = /true/i.test(global.DeveloperMode.toLowerCase())
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isBotBussines,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            if (!['unbanchat.js', 'creator.js'].includes(name) && chat && chat.isBanned && !isROwner) return // Except this
            if (!['unbanuser.js', 'inv.js', 'creator.js', 'profile.js'].includes(name) && user && user.banned && !isROwner) {
              if (!opts['msgifbanned']) m.reply(`*ANDA TERBANNED* ${user.bannedReason ? `\nKarena *${user.bannedReason}*` : ''}

Hubungi: 
${global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n')}

Kuy join group Official *${conn.getName(this.user.jid)}*: 
${(global.linkGC).map((v, i) => '*Group ' + (i + 1) + '*\n' + v).join`\n\n`}
`.trim())
              return
            }
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
          if (plugin.nsfw && !global.DATABASE.data.settings.nsfw) { // Nsfw
            fail('nsfw', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 15 // XP Earning per command
          if (xp > 99999999999) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy1*`, m)
            continue // Limit habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isBotBussines,
            isPrems,
            chatUpdate,
            DevMode,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                if (DevMode && text.length > 100) {
                  for (let jid of Object.entries(global.Owner).filter(v => v[1].isDev).map(v => v[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`*file:* ${m.plugin}\n*Nomor:* ${m.sender}\n*Text:* ${m.text}\n\n\`\`\`${text}\`\`\``, jid)
                }
                m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
          break
        }
      }
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (opts['autoread']) await this.chatRead(m.chat)
    }
  },
async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            let pp = './src/avatar_contact.png'
            try {
              ppc = await this.getProfilePicture(user)
              pp = await (await require('node-fetch')(ppc)).buffer()
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
 
 // NEW
 this.sendButtonLoc(jid, pp, text, '© amirul dev x The.sad.boy01', action === 'add' ? 'WELCOME' : 'GOOD BYE', action == 'add' ? '#' : '!', null, {
 contextInfo: {
 mentionedJid: [user]
 }
 })
 /*             this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })*/
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
      
  async delete(m) {
    if (m.key.remoteJid == 'status@broadcast') return
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.send2Buntton(m.key.remoteJid, `
    *「  ANTI DELETE 」*

Terdeteksi @${m.participant.split`@`[0]} Telah Menghapus Pesan!

-❥ *Type*: ${Object.keys(m.message.message)[0]}
-❥ *Number*: ${require('awesome-phonenumber')(`+${m.participant.
split`@`[0]}`).getNumber('international')}
-❥ *Name*: ${this.getName(m.participant)}

Untuk mematikan anti delete
Klik tombol dibawah↓
`,`©Grup setting`, 'Enable',
'.enable antidelete',
 'Disable',
 '.disable antidelete', m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let ids = 'call-id' in json[2][0][2][0][1] ? Object.entries(json[2][0][2][0][1]) : []
    let id = ids[0][1]
    let isOffer = json[2][0][2][0][0] == 'offer' || false
    let users = global.DATABASE.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
        return
        break
    }
      
    if (from && id && isOffer && json[2][0]) {
      var tag = this.generateMessageTag()
      var NodePayload = ["action", "call", ["call", {
        "from": this.user.jid,
        "to": from,
        "id": tag
      }, [["reject", { 
        "call-id": id, 
        "call-creator": from, 
        "count": "0" 
      }, null]]]]
      
      await this.send(`${tag},${JSON.stringify(NodePayload)}`)
    }
    await this.sendMessage(from, 'Maaf, Tolong jangan telfon BOT!!', MessageType.extendedText)
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: '⚠️Perintah ini hanya dapat digunakan oleh _*OWWNER!1!1!*_',
    owner: '⚠️Perintah ini hanya dapat digunakan oleh _*Owner Bot*_!',
    mods: '⚠️Perintah ini hanya dapat digunakan oleh _*Moderator*_ !',
    premium: '⚠️Perintah ini hanya untuk member _*Premium*_ ! \n_ketik /premium untuk menjadi member premium_',
    group: '⚠️Perintah ini hanya dapat digunakan di grup!',
    private: '⚠️Perintah ini hanya dapat digunakan di Chat Pribadi!',
    admin: '⚠️Perintah ini hanya untuk *Admin* grup!',
    botAdmin: '⚠️Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',
    unreg: ' *「  BELUM TERDAFTAR 」* \nHalo Kak, Yuk Daftar Dulu Karena Anda Belum Terdaftar Dalam Database Bot\n\nKetik : #daftar nama.umur\nContoh : #daftar ᵀᵒᵒʳᵘ-ᴮᴼᵀᶻ.17',
    nsfw: 'Not Safe For Work (NSFW) not active',
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
//tqto all creator bot whatsapp 
