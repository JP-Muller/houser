import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP_CODE } from './../../store'

export class Step1 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
        })
    }
    updateName = (name) => {
        this.setState({
            name
        })
        console.log(`name state: ${this.state.name}`);
    }
    updateAddress = (address) => {
        this.setState({
            address
        })
        console.log(`address state: ${this.state.address}`);
    }
    updateCity = (city) => {
        this.setState({
            city
        })
        console.log(`city state: ${this.state.city}`);
    }
    updateState = (state) => {
        this.setState({
            state
        })
        console.log(`State state: ${this.state.state}`);
    }
    updateZipCode = (zip) => {
        this.setState({
            zip
        })
        console.log(`zip state: ${this.state.zip}`);
    }
    saveChanges = () => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        })
        store.dispatch({
            type: UPDATE_ZIP_CODE,
            payload: this.state.zip
        })
    }
    render() {
        let {name, address, city, state, zip} = this.state
        return (
            <div>
                <section>
                    <form action=''>
                        <h3>Name:</h3>
                        <input type='text' value={name} onChange={(e) => this.updateName(e.target.value)} />
                        <h3>Address:</h3>
                        <input type='text' value={address} onChange={(e) => this.updateAddress(e.target.value)} />
                        <h3>City:</h3>
                        <input type='text' value={city} onChange={(e) => this.updateCity(e.target.value)} />
                        <h3>State:</h3>
                        <input type='text' value={state} onChange={(e) => this.updateState(e.target.value)} />
                        <h3>Zip Code:</h3>
                        <input type='number' value={zip} onChange={(e) => this.updateZipCode(e.target.value)} />
                    </form>
                </section>
                <br />
                <section>
                    <Link to='/wizard/step2'><button id='wizard-s1-button' onClick={() => this.saveChanges()}>Next Step</button></Link>
                </section>
            </div>
        )
    }
}

export default Step1
