const BootBot = require('bootbot')

const bot = new BootBot({
    accessToken: 'EAAKZAgZBXnvBkBAMx7XkeBZCJoK2GFkekcCzwsF08PTj4vhMM2JltAE3QPqZBTwKlguZCcbsD5NwrX6xJklr3v0sqzSSE20ZAnGeWWZBZBbwGH45RZBSSF7o4wfBzp6kOFp2M26lNyzQLc0Vjn78jBuazPZCfxMFi26qS3omkZBrHB6YmalOLItZC49u',
    verifyToken: 'unbotchilo',
    appSecret:'628d613c3b0846b37cdeffb0292d981e'
})

// bot.on('message',(payload,chat)=>{
//     console.log(payload)
//     chat.say('Hola soy mi primer bot')
// });

// { sender: { id: '1680468171963833' },
//   recipient: { id: '1421856941216275' },
//   timestamp: 1529720589646,
//   message:
//    { mid: 'mid.$cAAVX39FfwjVqW7kVTlkKnP0E-KtO',
//      seq: 679844,
//      text: 'Hola',
//      nlp: { entities: [Object] } } }

//Escuchar saludos
bot.hear(['HOLA',"saludos","que onda"],(payload,chat)=>{
    console.log(payload)
    chat.say('Que onda humano.')
})

//Escuchar despedidias
bot.hear(['adios','bye'],(payload,chat)=>{
    chat.say('Adios... :(')
});


//Enviar mensaje con bootones
bot.hear('ayuda',(payload,chat)=>{
    chat.say({
        text: 'En que puedo ayudarte??',
        buttons: [
            {type:'postback', title:'Ayuda',payload:'HELP'},
            {type:'postback', title:'FAQ',payload:'HELP_FAQ'},
            {type:'postback', title:'HABLAR CON UN HUMANO',payload:'HELP_TALK'}
        ]
    })
})


//Mensaje con quickreplice
bot.hear('comida',(payload,chat)=>{
    chat.say({
        text:'Que quieres comer???',
        quickReplies:['Tacos','Dogos','Burritos']
    })
})

bot.on('postback',(payload,chat)=>{
    console.log(payload)
    chat.say('Puchaste un boton')
})

bot.start()