const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const FacebookService = require('./config')
const Bot = require('./Bot')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send('Ok')
});


app.get('/webhook',(req,res)=>{
    console.log(req.query)
    if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === FacebookService.verifyToken) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }
});


app.post('/webhook',(req,res)=>{
    console.log(req.body.entry[0].messaging[0])
    const bot = new Bot(FacebookService.accessToken);
    const senderId = req.body.entry[0].messaging[0].sender.id
    bot.getUserProfile(senderId).then(profile =>{
        console.log(profile)
        bot.sendTextMessage(senderId,'Hola soy un bot :D')
    })
    

    res.send('ok')
});

app.listen(3000,()=>{
    console.log("Server on 3000")
})