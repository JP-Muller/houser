import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_IMAGE} from './../../store'

export class Step2 extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            image: reduxState.image
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
        })
    }
    updateImage = (image) => {
        this.setState({
            image
        })
        console.log(`Image URL State: ${image}`)
    }
    saveChanges = () => {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: this.state.image
        })
    }
    render() {
        let {image} = this.state
        return (
            <div>
            <section id='s2-section'>
                <h5>Image URL:</h5>
                <input type='text' value={image}onChange={(e) => this.updateImage(e.target.value)} />
            </section>
            <br />
            <section id='s2-buttons'>
            <Link to='/wizard/step1'><button className='wizard-s2-buttons'>Previous Step</button></Link>
            <Link to='/wizard/step3'><button className='wizard-s2-buttons' onClick={() => this.saveChanges()}>Next Step</button></Link>
            </section>
            </div>
        )
    }
}

export default Step2
