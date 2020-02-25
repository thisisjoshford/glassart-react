import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Details from './Details.js';
import './GlassItem.css';
import { getGlassItem } from './GlassApi.js';

export default class GlassItem extends Component {

    render() {
        return (
            <div id="glassProducts">
                 <h2>{this.props.glass.product_name}</h2>
                 <img src={this.props.glass.img_url}/>
                 {/* <li id="description">{this.props.glass.description}</li> */}
                 <li id="price">${this.props.glass.price}</li>
                 <Link to={`product/${this.props.glass.product_id}`}>Details</Link>
                 {/* <li>{this.props.glass.in_stock.toString()}</li>
                 <li>{this.props.glass.quantity}</li> */}
            </div>
        )
    }
}
