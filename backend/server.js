const express = require('express');
const bodyParser = require('body-parser');
var app = express();    

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hola desde express")
});

app.get('/user',(req,res)=>{
    res.send({message:"Rute de user"})
});

//Este GET deberia de traer la informacion del usuario con el id
app.get('/user/:uid',(req,res)=>{
    let {uid} = req.params
    res.send({message:'El id que escribiste fue: ' + uid})
});

app.get('/busqueda',(req,res)=>{
    let {q,nombre} = req.query
    res.send({q,nombre})
});

app.post('/create/user',(req,res)=>{
    let {nombre,apellido} = req.body
    res.status(201).send({id:1,
            nombre,
            apellido})
});

app.listen(3000,()=>{
    console.log('Server on 3000')
});