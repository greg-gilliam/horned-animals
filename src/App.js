import React, { Component } from 'react';

import creatures from './Creatures.js';
import ImageList from './ImageList';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
      <ImageList images={creatures} />
      </div>
     );
  }
}
 
export default App;
