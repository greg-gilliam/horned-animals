import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        const { key, image } = this.props;
        return ( 
            <>
            {/* <h1>
                {this.props.image.name}
            </h1>
            <img alt="creature"
                width="100"
                src={this.props.image.url} */}
                {/* /> */}
            <p>
                    <img alt={key} width="100" src={image} />
            </p>
            </>
         );
    }
}
 
export default ImageItem;