import React, { Component } from 'react'
import './CreateType.css'
import { createType } from './GlassApi';

export default class CreateType extends Component {

    state = {
        type_name: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const newType = {
            type_name: this.state.type_name
        }
        await createType(newType)
        alert(`Yo!!! You created a new Type called ${this.state.type_name}`);
        this.props.history.push('/')
    }
    handleTypeInput = (event) => {
        this.setState({
            type_name: event.target.value
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>ADD AN EVENT</legend>
                        <label>NEW TYPE:</label>
                        <input 
                        type="text" 
                        value={this.state.type_name}
                        onChange={this.handleTypeInput}
                        />
                        <button>SUBMIT</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
