import React, { Component } from 'react';

import './App.css'
import creatures from './Creatures.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

class App extends Component {
  state = {
    horns: 'All',
    type: 'All', 
  };

  horns = ['All', 1, 2, 3, 100];
  type = ['All', 'reality', 'fantastic', 'playtime'];

  handleChange = (event) => {
    this.setState({ horns: event.target.value });
  };

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };

  render() { 
    const filteredNumberCreatures = creatures.filter(
      (creature) => (this.state.horns === 'All' || creature.horns === Number(this.state.horns)) && (this.state.type === 'All' || creature.type === this.state.type)

    );

      return ( 
      <div className="App">
        <header>
        <h2>Horned animals!</h2>
        </header>
        <h4 id='sub'>Filter by how many horns I have:</h4>
        <Dropdown 
          label="Horns"
          options={this.horns}
          changeEvent={this.handleChange}
        />
        <h4 id='sub'>Or filter by 'Am I found in: Reality? Fantasy? Playtime?'</h4>
      <Dropdown
        label="Type"
        options={this.type}
        changeEvent={this.handleTypeChange}
      />
      <ImageList images={filteredNumberCreatures} />
      </div>
     );
  }
}
 
export default App;
