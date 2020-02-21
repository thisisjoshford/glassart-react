import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        return (
            <div>
                 <h2>{this.props.glass.product_name}</h2>
                 <img src={this.props.glass.img_url}/>
                 <li>{this.props.glass.description}</li>
                 <li>${this.props.glass.price}</li>
                 <li>{this.props.glass.in_stock.toString()}</li>
                 <li>{this.props.glass.quantity}</li>
            </div>
        )
    }
}
