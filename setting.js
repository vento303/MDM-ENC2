//HANYA BOT  YANG SUKA ERROR ERROR 🗿

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner ="6285668506864"
global.nomerOwner2 = "6285668506864"
global.ownerName = "Vento Project MD"
global.namabot = "© Gawr Gura Bot MD"
global.botName = "© Gawr Gura Bot MD"
global.autoJoin = true
global.sessionName = 'session' //hati hati nanti error
global.packName = "Gawr Gura Bot MD"
global.authorName = "Created By Vento Project MD"
global.namastore = "Vento Project MD"
global.nodana = "Ga ada"
global.nogopay = "-"
global.noovo = "-"
global.qris = "-"
global.TextT = `Rangel°᭄ᴮᵒᵗ` //
global.textT = `Rangel°᭄ᴮᵒᵗ` // 

global.sgc = 'https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS'
global.syt = ''
global.sig = 'https://instagram.com/vento.kndy'
const mess = {
wait: '_Sedang Di Proses Mohon Di Tunggu..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/b56fec27bd3ee07d506a1.jpg",
    "https://telegra.ph/file/b56fec27bd3ee07d506a1.jpg",
    "https://telegra.ph/file/b56fec27bd3ee07d506a1.jpg",
    "https://telegra.ph/file/b56fec27bd3ee07d506a1.jpg",
    "https://telegra.ph/file/b56fec27bd3ee07d506a1.jpg",
   
    ]
// Apikey 
global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 999999999,
'user' : 99999
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})