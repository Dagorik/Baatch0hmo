import React, { Component } from 'react';
import axios from 'axios'
class Register extends Component {

   constructor(props){
       super(props);
       console.log(props)
       this.state = {
           nombre: "",
           apellidos: "",
           edad: ""
       }
   }

   onInputChange =  (e) => {
        if (e.target.name == 'nombre' ){
            this.setState({
                nombre: e.target.value
            })
        }else if (e.target.name == 'apellidos'){
            this.setState({
                apellidos: e.target.value
            })
        }else{
            this.setState({
                edad: e.target.value
            })
        }    
   }

   onSubmit = (e) =>{
        e.preventDefault()
        console.log('Desde el submit',this.state)
        
        let json = {
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            edad:this.state.edad
        }
        
        axios.post('https://pruebacintaroja2.herokuapp.com/api/v1/user/create',json).then(alumno => {
            console.log(alumno)
            alert('Usuario guardado')}
        ).catch(err => {
            console.log(err)
            alert("Lo siento exite un problema")
        })

   }

    render(){
        console.log(this.state)
        return (
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre del Alumno</label>
                        <input type="text" name="nombre" class="form-control" ia-describedby="emailHelp" placeholder="Enter name"
                        value={this.state.nombre}
                        onChange={this.onInputChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Apellidos</label>
                        <input type="text" name="apellidos" class="form-control"  placeholder="Apellidos"
                        onChange={this.onInputChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Edad</label>
                        <input type="number" name="edad" class="form-control" placeholder="Edad"
                        onChange={this.onInputChange}>
                        </input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        );
    }


}

export default Register;