import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Data from './Data';

class BassCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basses: [] // To populate later
        }
    }

    componentDidMount() {
        this.setState({ basses: Data });
    }

    render() {
        return (
            <Carousel>
                {this.state.basses.map(bass => (
                    <div key={bass.id}>
                        <img src={`/assets/${bass.id}.jpg`} alt={`A ${bass.make} ${bass.model} bass`} />
                        <p className='legend'>{bass.make} {bass.model}, ${bass.avgPrice}</p>
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default BassCarousel;
