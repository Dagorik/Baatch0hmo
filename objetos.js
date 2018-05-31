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

    getColor(){
        return this.color
    }
    setColor(nuevoColor){
        this.color = nuevoColor
    }
}

var fido = new Perro("Negro","Largo","Pug","Chiquito")
var firulais = new Perro("Blanco","Corto","Dalmata","Grande")
console.log(firulais.getColor())
firulais.setColor('Cafe')
console.log(firulais.getColor())
