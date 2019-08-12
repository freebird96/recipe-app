import React, {Component} from 'react';
import Form from './components/Form';
import './App.css';

const APP_ID = "607dbaa0";
const APP_KEY = "620af0d5669f22a409cd547b49f906fd";


class App extends Component {

  state = {
    recipes: [],
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}
    `);

    const data = await api_call.json();

    this.setState({
      recipes: data.hits
    });

    console.log(this.state.recipes);

  }

  render(){  
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe search</h1>
          </header>
          <Form getRecipe = {this.getRecipe}/>
          {}          
        </div>
      );
  }
}

export default App;
