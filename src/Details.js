import React, { Component } from 'react'
import { getGlassItem } from './GlassApi'

export default class Details extends Component {
    state = { glassItem: {} }

    async componentDidMount(){
        const glassItem = await getGlassItem(this.props.match.params.productId)
        this.setState({glassItem: glassItem.body[0]})
        console.log(this.state.glassItem.product_name)
    }
       
    render() {
        const glassItem = this.state.glassItem
        return (
            <div>
                <div id="glassProducts">
                    <h2>{glassItem.product_name}</h2>
                 <img src={glassItem.img_url}/>
                 <li id="description">{glassItem.description}</li>
                 <li id="price">${glassItem.price}</li>
                 {/* <li>{glassItem.in_stock.toString()}</li> */}
                 {console.log(glassItem.in_stock)}
                 <li>Items in Stock: {glassItem.quantity}</li>
            </div>
            </div>
        )
    }
}
