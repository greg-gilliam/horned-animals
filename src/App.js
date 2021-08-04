import React, { Component } from 'react';

import creatures from './Creatures.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = {
    type: 'All', 
    horns: 'All',
  };
  handleChange = (event) => {
    this.setState({ horns: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ type: event.target.value });
  };

  render() { 
    const filteredNumberCreatures = creatures.filter(
      (creature) => this.state.horns === 'All' || creature.horns === Number(this.state.horns)
    );
    
    const filteredTypeCreatures = creatures.filter(
      (creature) => this.state.type === 'All' || creature.type === this.state.type
    );

      return ( 
      <div className="App">
        <h3>Choose the number of horns!</h3>
        <select onChange={this.handleChange}>
          <option value="All">All</option>
          <option value="1">1 horned creatures</option>
          <option value="2">2 horned creatures</option>
          <option value="3">3 horned creatures</option>
          <option value="100">100 horned creatures</option>
        </select>
      <ImageList images={filteredNumberCreatures} />
        <h3>Are we based in: Reality? Fantasy? Playtime?</h3>
        <select onChange={this.handleChange}>
          <option value="All">All</option>
          <option value="Reality">Reality</option>
          <option value="Fantastic">Fantastic</option>
          <option value="Playtime">Playtime</option>
        </select>
      </div>
     );
  }
}
 
export default App;
