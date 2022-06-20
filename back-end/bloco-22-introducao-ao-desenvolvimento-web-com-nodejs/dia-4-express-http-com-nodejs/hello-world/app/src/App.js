import React from 'react';


class receitasList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      drinks: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        {
          recipes,
          isLoading: false,
        },
      ));
    
      fetch('http://localhost:3001/drinks')
    .then(response => response.json())
    .then((drinks) => this.setState(
      {
        drinks,
        isLoading: false,
      },
    ));
  }

  render() {
    const { recipes, drinks, isLoading } = this.state;

    return (
      <div>
        <div>
          {isLoading && "Loading..."}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
          <div className='card-group'>
            {drinks.map((drink) => (
              <div key={drink.id}>
                <h1>{drink.name}</h1>
                <span>Preço: {drink.price}</span>
                <span>Tempo de preparo: {drink.waitTime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default receitasList;