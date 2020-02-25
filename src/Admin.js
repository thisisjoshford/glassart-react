import React, { Component } from 'react'
import { getTypes, insertNewProduct } from './GlassApi'
import {Link} from 'react-router-dom';

import './Admin.css';

export default class Admin extends Component {
    state = {
        types: [],
        in_stock: true,
        type: 1
    }
    handleProductName = (event) => {
        this.setState({ product_name: event.target.value})
    }
    handleDescription = (event) => {
        this.setState({ description: event.target.value})
    }
    handlePrice = (event) => {
        this.setState({ price: Number(event.target.value)})
    }
    handleImage = (event) => {
        this.setState({ img_url: event.target.value})
    }
    handleType = (event) => {
        this.setState({ type_id: Number(event.target.value)})
    }
    handleInStock = (event) => {
        const bool = event.target.value === 'false' ? false : true
        this.setState({in_stock: bool})
    }
    handleQuantity = (event) => {
        this.setState({ quantity: Number(event.target.value)})
    }
    handleClear = () => {
        window.location.reload();
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const newGlassItem = {
            product_name: this.state.product_name,
            description: this.state.description,
            price: this.state.price,
            img_url: this.state.img_url,
            type_id: this.state.type,
            in_stock: this.state.in_stock,
            quantity: this.state.quantity
        }
        await insertNewProduct(newGlassItem);
        this.props.history.push('/');
    }
    async componentDidMount() {
        const types = await getTypes();
        this.setState({types: types.body})
    }
    render() {

        return (
            <div>
                <h2>Enter New Product</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Product Name--->
                        <input
                            value={this.state.product_name}
                            onChange={this.handleProductName}>
                        </input>
                    </label>
                    <label>
                        Description--->
                        <input
                            value={this.state.description}
                            onChange={this.handleDescription}>
                        </input>
                    </label>
                    <label>
                        Price--->
                        <input
                            value={this.state.price}
                            onChange={this.handlePrice}>
                        </input>
                    </label>
                    <label>
                        Image_Url--->
                        <input
                            value={this.state.img_url}
                            onChange={this.handleImage}>
                        </input>
                    </label>

                    <label>
                        Type------->
                        <select onChange={this.handleType}>
                            {
                            this.state.types.map(type =>
                                <option value={type.type_id}>
                                    {type.type_name}
                                </option>
                                )
                            }
                        </select>
                    </label>

                    <label>
                        In Stock----------->
                        <select 
                        onChange={this.handleInStock}  
                        value={this.state.in_stock}>
                                <option value="true" defaultChecked>True</option>
                                <option value="false">False</option>
                        </select>
                    </label>
                    <label>
                        Quantity--->
                        <input
                            value={this.state.quantity}
                            onChange={this.handleQuantity}>
                        </input>
                    </label>
                    <br></br>
                <button>SUBMIT</button>
                </form>
                <br></br>
                <button id="clearButton" onClick={this.handleClear}>CLEAR</button>
            </div>
        )
    }
}
