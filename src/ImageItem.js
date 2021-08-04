import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        const { creature } = this.props;
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
                    <img alt={creature.title} width="100" src={creature.url} />
            </p>
            </>
         );
    }
}
 
export default ImageItem;