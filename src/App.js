import React, { Component } from 'react';

import creatures from './Creatures.js';
import ImageList from './ImageList';

class App extends Component {
  state = {
    type: 'All',
  };
  handleChange = (event) => {
    this.setState({ type: event.target.value });
  };
  render() { 
    const filteredCreatures = creatures.filter(
      (creature) => this.state.type === 'All' || creature.type === this.state.type
    );

    return ( 
      <div className="App">
        <h1>Choose the number of horns!</h1>
        <select onChange={this.handleChange}>
          <option value="All">All</option>
          <option value="1">1 horned creatures</option>
          <option value="2">2 horned creatures</option>
          <option value="3">3 horned creatures</option>
          <option value="100">100 horned creatures</option>
        </select>
      <ImageList images={creatures} />
      </div>
     );
  }
}
 
export default App;
