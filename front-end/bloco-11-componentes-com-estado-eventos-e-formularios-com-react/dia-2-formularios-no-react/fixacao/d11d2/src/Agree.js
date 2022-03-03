import React, { Component } from 'react'

class Agree extends Component {
  render(){
    const { value, handleChange } = this.props;

    let error = undefined;
    if (!value) {
      error = 'ATENÇÃO !!! É preciso concordar com os termos para prosseguir!'
    }
      

    return (
      <label htmlFor="ckAgree">Concordo com os termos de acesso.
        <input 
          type="checkbox"
          name="ckAgree"  
          value={value}
          onChange={handleChange}
        >
        </input>
        <br/>
        <span>{error ? error : ''}</span>
    </label>
    );
  }
}

export default Agree;