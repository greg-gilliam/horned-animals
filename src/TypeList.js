import React, { Component } from 'react';
import creatures from './Creatures.js';
import ImageItem from './ImageItem.js';

class TypeList extends Component {
    render() { 
        return ( 
            <>
                {this.props.images.map((item) => {
                    return <ImageItem 
                    key={creatures.type} 
                    image={item} />;
                })}
            </>
         );
    }
}
 
export default TypeList;