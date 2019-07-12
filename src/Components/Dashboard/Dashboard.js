import React, { Component } from 'react'
import House from './../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getListings()
        this.forceUpdate()
    }

    getListings = () => {
        axios.get('/api/listings')
            .then(res => {
                this.setState({
                    list: res.data
                })
            })
    }
    deleteListing = (id) => {
        axios.delete(`/api/deleteListing/${id}`)
        this.getListings()
        this.forceUpdate()
    }
    render() {
        let houseListings = this.state.list.map((property, i) => {
            return (
                <div className='property-listing' key={i}>
                    <div className='listing-img'>
                        <img src={property.image} alt='House Imagery' />
                    </div>
                    <div className='listing-info'>
                    <div className='property-details'>
                        <h5>Property Name: {property.name}</h5>
                        <h5>Address: {property.address}</h5>
                        <h5>City: {property.city}</h5>
                        <h5>State: {property.state}</h5>
                        <h5>Zip Code: {property.zip}</h5>
                    </div>
                    <div className='mortgage-rent-info'>
                        <h5>Monthly Mortgage: {property.mortgage}</h5>
                        <h5>Desired Rent: {property.rent}</h5>
                    </div>
                    <br />
                    <div className='listing-delete'>
                        <button onClick={() => this.deleteListing(property.id)}>Delete</button>
                    </div>
                    </div>
                    <br /><hr /><br />
                </div>
            )
        })
        return (
            <div>
                <section id='dashboard-header'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard/step1'><button><b>Add New Listing</b></button></Link>
                </section>
                <br /><hr /><br />
                <section>
                <header id='listings-header'><b>Home Listings</b></header>
                    {houseListings}
                </section>
                <House />
            </div>
        )
    }
}

export default Dashboard
