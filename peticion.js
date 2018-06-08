const request = require('request');

request.get('http://pokeapi.co/api/v2/pokemon/151',
            (error,response,body)=>{
                console.log(`Error -> ${error}`)
                console.log('Response ->', response.statusCode)
                var json = JSON.parse(body)
             if (response.statusCode == 200){
                    console.log("Peticion exitosa")
                    console.log(json.name)
                }else{
                    console.log("Pokemon no encontrado")
                }
            });


