import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>
                {this.props.image.name}
            </h1>
            <img alt="creature"
                width="100"
                src={this.props.image.url}
                />

            </>
         );
    }
}
 
export default ImageItem;