import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() { 
        const { images } = this.props;
        return ( 
            <>
                {images.map((item) => {
                    return <ImageItem 
                    key={item.id} 
                    creature={item} />;
                })}
            </>
         );
    }
}
 
export default ImageList;