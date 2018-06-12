const mongoose = require('mongoose')
mongoose.connect('mongodb://prueba:c1234567890@ds259079.mlab.com:59079/cinta-roja')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const alumnoSchema = new Schema({
    alumno: ObjectId,
    nombre:String,
    apellidos:String,
    edad:Number,
    email:String,
    ciudad:String
});

var Alumno = mongoose.model('Alumno',alumnoSchema)

module.exports = Alumno