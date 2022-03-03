import './App.css';
import React, { Component } from 'react'
import Agree from './Agree';
import Name from './Name';

class Form extends Component {

  constructor() {
    super();
  
    this.state = {
      txtText: '',
      txtPassword: '',
      txtComment: '',
      tipoCliente: '',
      ckAgree: false,
      file: '',
      formularioComErros: ''
    };
  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === "checkbox" ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  handleErros = () => {
    this.setState({
      formularioComErros: true
    })
    console.log('teste')
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

              <Name 
                value={this.state.txtText} 
                handleChange={this.handleChange}
                handleErros={this.handleErros}
              />
              
              
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
              
              <Agree 
                value={this.state.ckAgree} 
                handleChange={this.handleChange} 
              />

            </fieldset>
          </form>

      </div>
      );
    }
}

export default Form;
