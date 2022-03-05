import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      isLoaded: false,
      user: [],
    }
  }

  fetchUsers = async () => {
    const requestReturn = await fetch('https://api.randomuser.me/')
    const dataJson = await requestReturn.json();
    console.log(dataJson.results[0]);
    this.setState({
      user: dataJson.results[0],
      isLoaded: true,
    })
  }
  
  componentDidMount() {
    this.fetchUsers();
  }


  render() {
    const { isLoaded, user} = this.state
    const loadingElement = <span className='loading'>Loading...</span> 
    
    return (
      <div className='card'>
        <h1>Random Users</h1>
        {
          !isLoaded 
          ? loadingElement
          : <div>
              <p key={user.id}><span>Nome:</span>{user.name.first}</p>
              <p><span>Email:</span>{user.email}</p>
              <p><span>Idade:</span>{user.dob.age}</p>
              <img src={user.picture.large} alt={user.name.first}></img>
            </div>
        }
      </div>
    )
}


}

export default App;
