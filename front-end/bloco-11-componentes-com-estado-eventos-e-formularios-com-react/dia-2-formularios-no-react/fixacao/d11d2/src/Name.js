import React, { Component } from 'react'

class Name extends Component {

  render(){
    const { value, handleChange, handleErros } = this.props;

    let error = undefined;
    if (value.length === 0){
      error = 'O campo acima não pode estar vazio';
      handleErros();
    } else if (value.length > 50){
      error = 'O campo acima não pode ter mais de 50 caracteres';
      handleErros();
    }
   
    return (

      <>
        <input 
          name="txtText" 
          type="text"
          value={value}
          onChange={handleChange}
        >
        </input>
        <span
        >{error ? error : '' }</span>
      </>
     
    )
  }

}

export default Name;