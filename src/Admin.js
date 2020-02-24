import React, { Component } from 'react'
import { getTypes } from './GlassApi'

export default class Admin extends Component {
    state = {
        types: [],
        in_stock: true,
        type: 1
    }

    handleProductName(event){
        this.setState({ product_name: event.target.value})
    }
    handleDescription(event){
        this.setState({ description: event.target.value})
    }
    handlePrice(event){
        this.setState({ price: Number(event.target.value)})

    }
    handleImage(event){
        this.setState({ img_url: event.target.value})

    }
    handleType(event){
        this.setState({ type_id: Number(event.target.value)})

    }
    handleInStock(event){
        this.setState({ in_stock: Number(event.target.value)})
    }

    handleQuantity(event){
        this.setState({ quantity: Number(event.target.value)})

    }
    handleSubmit(event){
        event.prevent.default();
    }
    async componentDidMount() {
        const types = await getTypes();
        this.setState({types: types.body})
    }

    render() {

        return (
            <div>
                <h1>ADMIN</h1>
                <h2>Enter New Product</h2>
                <form onSubmit={this.handleSubmit}></form>
            </div>
        )
    }
}
