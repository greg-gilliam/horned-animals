import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return ( 
            <p>
                {this.props.creature.name}
                width="100"
                src={this.props.creature.url}
            </p>
         );
    }
}
 
export default ImageItem;