import './App.css';
import { Component } from "react";


class App extends Component{

  constructor () {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    
    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    }

  }

  handleClick1() {
    this.setState (({ clicksBtn1 }) => ({ 
      clicksBtn1: clicksBtn1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtn1) }`);
    });
  }

  handleClick2() {
    this.setState (({ clicksBtn2 }) => ({ 
      clicksBtn2: clicksBtn2 + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtn2) }`);
    });
  }

  handleClick3() {
    this.setState (({ clicksBtn3 }) => ({ 
      clicksBtn3: clicksBtn3 + 1
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtn3) }`);
    });
  }

  // Para essa função, não precisamos utilizar o bind porque ela é utilizada
  // apenas dentro do contexto do componente App
  getButtonColor(num) {
  // Essa função contém um ternário que realiza a lógica para mudarmos
  // a cor do botão para verde quando for um número par
  return num % 2 === 0 ? 'green' : 'white';
  }


  
  render(){

    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return (

    <div className='container-btn'>
      
      <button
        onClick={this.handleClick1}
        style={{backgroundColor: this.getButtonColor(clicksBtn1)}}
      >
        Botão 1 | Count = { clicksBtn1 }
      </button>

      <button
        onClick={this.handleClick2}
        style={{backgroundColor: this.getButtonColor(clicksBtn2)}}
      >
        Botão 2 | Count = { clicksBtn2 }
      </button>

      <button
        onClick={this.handleClick3}
        style={{backgroundColor: this.getButtonColor(clicksBtn3)}}
      >
        Botão 3 | Count = { clicksBtn3 }
      </button>
      
    </div>

    )}
}

export default App;
