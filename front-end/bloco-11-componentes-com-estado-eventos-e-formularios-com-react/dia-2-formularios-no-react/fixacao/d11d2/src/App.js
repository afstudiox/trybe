import './App.css';
import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super();
  
    this.state = {
      txtText: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      txtText: event.target.value,
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Exercício de Fixação | Bloco 11.2 </h1>
          <form>
            <select>
              <option value="">Cliente</option>
              <option value="">Visitante</option>
            </select>
            <input 
              name="textText" 
              type="text"
              onChange={this.handleChange}
              value={this.state.txtText}
            >
            </input>
            <input type="password"></input>
            <textarea></textarea>
          </form>
      </div>
      );
    }
}

export default Form;
