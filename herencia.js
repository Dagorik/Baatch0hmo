class Animal{
    constructor(nombre,peso){
        this.nombre = nombre
        this.peso = peso
        console.log('Se creo un animal')
    }
    getNombre(){
        return this.nombre
    }
    comer(comida){
        return `Esta comiendo ${comida}`
    }
}
class Perro extends Animal{
    constructor(nombre,peso,raza,color){
        super(nombre,peso)
        this.raza = raza
        this.color = color
        console.log('Se creo un perro')
    }
    ladrar(){
        return 'Waaau'
    }
}
var fido = new Perro('Fido','10kg','pug','cafe')
console.log(fido.getNombre())