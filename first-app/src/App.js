import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer'
import Register from './components/Register'
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.state = {
        saludo:"¡Hola desde React!",
        despedida:"¡Adios desde React!",
        numero:0,
        cards:[
          {nombre:"jun",bio:"nada"},
          {nombre:"pedro",bio:"nada"},
          {nombre:"luis",bio:"nada"},
          {nombre:"pepe",bio:"nada"}
        ],
        pokemons:[] 
    }
}

updateComponent(){
    const listaCard = this.state.cards.map((element,index,array)=> {
    return <Card nombre={element.nombre} bio={element.bio}/>
  })
  return listaCard
}

retornaParrafo(){
  return <p>Parrafo desde una funcion</p>
}

componentDidMount(){
    axios.get('https://pokeapi.co/api/v1/pokedex/1/')
      .then(response => {
        this.setState({
          pokemons:response.data.pokemon
        })
      })
      .catch(err => console.log(err))
}
 
updateCardPokemon(){
  if (this.state.pokemons.length == 0){
    return <h1>Cargando...</h1>
  }else{
    let pokemons =  this.state.pokemons.map(element => {
      return <Card nombre={element.name} bio={element.resource_uri}/>
    })
    return pokemons
  }
}

componentWillMount(){
  console.log('Will mount')
}

cambiarEstado = (e) =>{
  let number = this.state.numero
  this.setState({
    numero:number+1
  })
}

  render() {
    console.log('Me ejecute render')
    console.log(this.state)
    return (
      // <div className="App">
      //   <Navbar/>
      //   <Saludo texto = {this.state.numero}/>
      //   <button onClick={this.cambiarEstado}>Buton</button>
      //   {/* {this.updateComponent()} */}
      //   {this.updateCardPokemon()}
      // /div>

      //Para hacer routing

      <BrowserRouter>
            <main>
                <Route exact path= "/" component = {Navbar} />
                <Route exact path= "/login" component = {Card} />
                <Route exact path= "/register" component = {Register} />
            </main>
      </BrowserRouter>

    );
  }
}

export default App;
