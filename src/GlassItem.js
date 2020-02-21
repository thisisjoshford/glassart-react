import React, { Component } from 'react'
import './GlassItem.css';

export default class GlassItem extends Component {
    render() {
        return (
            <div id="glassProducts">
                 <h2>{this.props.glass.product_name}</h2>
                 <img src={`https://cryptic-journey-67632.herokuapp.com/assets/${this.props.glass.img_url}`}/>
                 <li id="description">{this.props.glass.description}</li>
                 <li id="price">${this.props.glass.price}</li>
                 {/* <li>{this.props.glass.in_stock.toString()}</li>
                 <li>{this.props.glass.quantity}</li> */}
            </div>
        )
    }
}
