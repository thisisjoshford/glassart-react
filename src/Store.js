import React, { Component } from 'react';
import GlassItem from './GlassItem.js';
import data from './data.json';

export default class Store extends Component {
    render() {
        const glassArray = data;
        const glassNode = glassArray.map(glass => 
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
