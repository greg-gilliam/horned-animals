import React, { Component } from 'react';

import creatures from './Creatures.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

class App extends Component {
  state = {
    horns: 'All',
    type: 'All', 
  };

  horns = ['All', 1, 2, 3, 100];
  type = ['reality', 'fantastic', 'playtime'];

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
        <h3>Choose the number of horns!</h3>
        <Dropdown 
          label="Horns"
          options={this.horns}
          changeEvent={this.handleChange}
        />
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
