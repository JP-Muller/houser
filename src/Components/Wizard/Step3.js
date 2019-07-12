import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, {UPDATE_MORTGAGE, UPDATE_RENT, CLEAR_ENTRIES} from './../../store'

export class Step3 extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            image: reduxState.image,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }
    addListing = () => {
        let { name, address, city, state, zip, image, mortgage, rent} = this.state
        axios.post('/api/addListing', { name, address, city, state, zip, image, mortgage, rent})
            .then(() => this.clearEntries())
            .catch(() => (console.log(`Add Listing Failed!`)))
    }
    clearEntries = () => {
        store.dispatch({
            type: CLEAR_ENTRIES
        })
    }
    updateMortgage = (mortgage) => {
        this.setState({
            mortgage
        })
        console.log(`Mortgage state: ${mortgage}`)
    }
    updateRent = (rent) => {
        this.setState({
            rent
        })
        console.log(`Rent state: ${rent}`)
    }
    saveChanges = () => {
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.rent
        })
    }
    render() {
        let {mortgage, rent} = this.state
        return (
            <div>
                <section id='s3-section'>
                    <h5>Monthly Mortgage Amount:</h5>
                    <input type='number' value={mortgage} onChange={(e) => this.updateMortgage(e.target.value)} />
                    <h5 id='rent-header'>Desired Monthly Rent:</h5>
                    <input type='number' value={rent} onChange={(e) => this.updateRent(e.target.value)} />
                </section>
                <br />
                <section id='s3-buttons'>
                    <Link to='/wizard/step2'><button id='s3-prev-btn' onClick={() => this.saveChanges()}>Previous Step</button></Link>
                    <Link to='/'><button id='s3-complete-btn' onClick={() => this.addListing()}>Complete</button></Link>
                </section>
            </div>
        )
    }
}

export default Step3
