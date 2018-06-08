const request = require('request')
function peticionPromesa(){
    return new Promise((resolve,reject)=>{
        request.get("https://swapi.co/api/people/1",(err,response,body)=>{
            if (response.statusCode == 200){
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject('Error en la peticion')
            }
        })
    });
}

function peticionPromesa2Movie(url){
    return new Promise((resolve,reject)=>{
        request.get(url,(err,response,body)=>{
            if (response.statusCode == 200){
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject('Error en la peticion')
            }
        })
    });
}

peticionPromesa().then(response =>  {
                console.log('Primera promesa resuelta')
                console.log(response.name)
                return peticionPromesa2Movie("https://swapi.co/api/people/100")
            })
            .then(response =>{
                console.log('Segunda promesa resuelta')
                console.log(response.title)
            })
            .catch(err => console.log(err))


