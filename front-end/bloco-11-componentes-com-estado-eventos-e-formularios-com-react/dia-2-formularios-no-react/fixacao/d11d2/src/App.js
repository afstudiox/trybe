import './App.css';
import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super();
  
    this.state = {
      txtText: '',
      txtPassword: '',
      txtComment: '',
      tipoCliente: '',
      ckAgree: false,
      file: ''
    };
  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === "checkbox" ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Exercício de Fixação | Bloco 11.2 </h1>
          <form>
            <fieldset>
              <select
                name="tipoCliente"
                onChange={this.handleChange}
                value={this.state.tipoCliente}
              >
                <option value="Cliente">Cliente</option>
                <option value="Visitante">Visitante</option>
              </select>
              
              <input 
                name="txtText" 
                type="text"
                onChange={this.handleChange}
                value={this.state.txtText}
              >
              </input>
              
              <input 
                name="txtPassword"
                type="password"
                onChange={this.handleChange}
                value={this.state.txtPassword}
              >
              </input>

              <input 
                name="file"
                type="file"
                onChange={this.handleChange}
                value={this.state.file}
              >
              </input>
              
              <textarea
                name="txtComment"
                placeholder='Digite aqui seu comentário'
                onChange={this.handleChange}
                value={this.state.txtComment}  
              >        
              </textarea>
              
              <label htmlFor="ckAgree">Concordo com os termos de acesso.
                <input 
                  type="checkbox"
                  name="ckAgree"  
                  onChange={this.handleChange}
                  value={this.state.ckAgree}
                >
                </input>

              </label>
            </fieldset>
          </form>

      </div>
      );
    }
}

export default Form;
