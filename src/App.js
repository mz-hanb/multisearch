import React, { Component } from 'react';
import './App.css';
import MultiSearchTemplate from './components/MultiSearchTemplate';
import Forms from './components/Forms';
import Contries from './components/Contries';

class App extends Component {
  state = {
    forms: [
      {id: "1", stHolder: 'Filter by Country'},
      {id: "2", stHolder: 'Filter by Capital'},
      {id: "3", stHolder: 'Filter by Region'},
      {id: "4", stHolder: 'Filter by Subregion'}
    ], 
    contries: []
  }

  componentDidMount(){
    

  }

  getDate(){
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(data => data.json())
    .then( json => console.log(json) )
    .catch( err => console.log(err) );
  }

  render() {
    const {forms, contries} = this.state;
    return (
      <div className="App">
        <MultiSearchTemplate
          form={(
            <Forms filters={forms} />
          )}
        >
        <Contries contries={contries} />          
        </MultiSearchTemplate>
      </div>
    );
  }
}

export default App;
