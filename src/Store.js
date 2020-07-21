import React, { Component } from 'react';
import GlassItem from './GlassItem.js';
// import data from './data.json';
import { getGlassArt } from './GlassApi.js';

export default class Store extends Component {
    state = {
        glass: [],
    }
    async componentDidMount() {
        const glassData = await getGlassArt();
        this.setState({glass: glassData.body})
        console.log(this.state.glass);
    }

    render() {
        const glassNode = this.state.glass.map(glass => 
            <GlassItem glass={glass}/>
            )
        return (
            <div>
                <ul>
                    {glassNode}
                </ul>
                
            </div>
        )
    }
}
