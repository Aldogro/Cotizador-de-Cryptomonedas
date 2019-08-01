import React, { Component } from 'react'

class Formulario extends Component {

  render() {
    return(
      <form>
        <div className="form-group">
          <label>Moneda:</label>
          <select className="form-control">
            <option value="" disabled defaultValue>Elige tu Moneda</option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="EUR">Euros</option>
            <option value="ARS">Pesos Argentinos</option>
          </select>
        </div>

        <div className="form-group">
          <label>Criptomoneda</label>
          <select className="form-control">

          </select>
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Cotizar"/>
        </div>
      </form>
    )
  }

}

export default Formulario