import React, { Component } from 'react'
import { getTypes, getGlassItem, deleteGlassItem, updateGlassItem } from './GlassApi'


export default class EditDelete extends Component {
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
    handleDelete = async () => {
        await deleteGlassItem(this.props.match.params.productId)
        alert("Yo! You deleted that shit!  Hope you were sure about that");
        this.props.history.push('/')
    }

    handleUpdate = async (event) => {
        event.preventDefault();
        const newGlassItem = {
            product_id: Number(this.props.match.params.productId),
            product_name: this.state.product_name,
            description: this.state.description,
            price: this.state.price,
            img_url: this.state.img_url,
            type_id: this.state.type,
            in_stock: this.state.in_stock,
            quantity: this.state.quantity
        }
        await updateGlassItem(newGlassItem);
        alert(`${this.state.product_name} has been updated!`);
        console.log(newGlassItem)
        this.props.history.push('/')

    }
    async componentDidMount() {
        const types = await getTypes();
        this.setState({types: types.body})
        const glassItemArray = await getGlassItem(this.props.match.params.productId)
        const glassItem = glassItemArray.body[0]
        
        this.setState({
            product_id: glassItem.product_id,
            product_name: glassItem.product_name,
            description: glassItem.description,
            price: glassItem.price,
            img_url: glassItem.img_url,
            type_id: glassItem.type_id,
            in_stock: glassItem.in_stock,
            quantity: glassItem.quantity
        })
    }
    render() {

        return (
            <div>
                <h2>EDIT / DELETE ITEM</h2>
                <form onSubmit={this.handleUpdate}>
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
                <button>UPDATE</button>
                </form>
                <br></br>
                <button id="clearButton" onClick={this.handleDelete}>DELETE</button>
            </div>
        )
    }
}
