import React, { Component } from 'react';
import creatures from './Creatures.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() { 
        return ( 
            <>
                {this.props.boogers.map((item) => {
                    return <ImageItem key={creatures.name} image={item} />;
                })}
            </>
         );
    }
}
 
export default ImageList;