var lista = [1,3,5,8,1,3,5,78,0]
var strings = ["a","j","a","l","p"]
var obj = [{data:"Hola",nombre:"Pedro"},{data:"Holi",nombre:"Juan"},{data:"Holo",nombre:"Pancho"},]

let listaNueva = strings.map((x,y,z) =>{
    console.log(z)
    strings.push(x)
})
console.log(strings)

var tasks = [
    {
      name     : 'Write for Envato Tuts+',
      duration : 120
    },
    {
      name     : 'Work out',
      duration : 60
    },
    {
      name     : 'Procrastinate on Duolingo',
      duration : 240
    }
  ];

let nuevaListaa = tasks.filter((x,y,z)=>{
    return x.duration > 90
})
// console.log(nuevaListaa)