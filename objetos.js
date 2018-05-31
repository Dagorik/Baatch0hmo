class Perro{
    constructor(color,pelaje,raza,tamano){
        console.log('Se ejecuto el metodo constructor')
        this.color = color
        this.pelaje = pelaje
        this.raza = raza
        this.tamano = tamano
    }
    nacer(){
        console.log("Ya naci")
    }
    ladrar(){
        console.log(this.raza +  " esta ladrando")
    }
}

var fido = new Perro("Negro","Largo","Pug","Chiquito")
var firulais = new Perro("Blanco","Corto","Dalmata","Grande")
firulais.ladrar()
fido.ladrar()
