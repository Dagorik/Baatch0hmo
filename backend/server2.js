const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Alumno = require('./mongooseClient')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.listen(3000,()=>{
    console.log('Server on 3000')
});