require("./Databases/module.js")

//========== Setting Owner ==========//
global.no = "923439597938"
global.owner = "𓆩𝕯𝗘𝗩𝗜𝕷࿐"
global.bot = "𝐀𝐒𝐓𝐀-𝐁𝐔𝐆"
global.v = "1.0.0"
global.welcome = false
global.autoread = false
global.anticall = false

//========= Setting Url Foto =========//
global.image = "https://files.catbox.moe/796b19.jpeg"

global.msg = {
"error": "error detected contact the dev https://wa.me/254114127157?text=Hi%20Dave",
"done": "Owari✨😉", 
"wait": "Matte 😝", 
"owner": "`Owner privilege`", 
"developer": "`dev privilege`"
}










































































global.own = "𝐀𝐒𝐓𝐀-𝐁𝐔𝐆"
global.log = "✨"
global.ch = "https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v"
global.bot = "𝐀𝐒𝐓𝐀-𝐁𝐔𝐆"
global.ver = "𝟭.𝟬.𝟬"
global.wa = "https://wa.me/254114127157?text=Hi%20Dave"
global.logo = "https://files.catbox.moe/796b19.jpeg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
