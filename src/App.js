import React, {Component} from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'

import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      cryptos : []
    }
  }

  async componentDidMount(){
    this.obtenerMonedas()
  }

  obtenerMonedas = async () => {
      const url =`https://api.coinmarketcap.com/v2/ticker/`
      
      await axios.get(url)
        .then(respuesta =>{
          console.log(respuesta.data.data)
          this.setState({
            cryptos : respuesta.data.data
          })
        })
        .catch(error=>{
          console.log(error)
        })
  }
  render(){
    return (
      <div className="App">
        <Header titulo="Cotizador de Cryptomonedas"/>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Formulario cryptos={this.state.cryptos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
