const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Alumno = require('./mongooseClient')

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Arriba")
})

//Crear estudiantes
app.post('/api/v1/user/create',(req,res)=>{
    const {nombre,apellidos,edad} = req.body
    let nuevoAlumno = Alumno({
        nombre,
        apellidos,
        edad
    });
    nuevoAlumno.save((err,alumno)=>{
        if (err) throw err;
        res.status(201).send(alumno)
    });
});

//Get todos los alumnos
app.get('/api/v1/alumnos',(req,res)=>{
    Alumno.find().exec().then(alumnos =>{
        res.send(alumnos)
    }).catch(err => {
        res.status(400).send(err)
    })
})

//Obtener el alumno por ID
app.get('/api/v1/alumnos/:uid',(req,res)=>{
    const {uid} = req.params
    Alumno.findById(uid).exec().then(alumno =>{
        res.send(alumno)
    }).catch(err =>{
        res.status(404).send(err)
    })
});

app.delete('/api/v1/alumnos/:uid',(req,res)=>{
    const {uid} = req.params
    Alumno.findByIdAndRemove(uid).exec().then(alumno =>{
        res.status(204).send()
    }).catch(err =>{
        res.status(404).send(err)
    })
});

app.put('/api/v1/alumnos/:uid',(req,res)=>{
    const {uid} = req.params
    Alumno.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec().then(alumno =>{
        res.send(alumno)
    }).catch(err =>{
        res.send(err)
    })
});


app.listen(PORT,()=>{
    console.log('Server on '+PORT)
});