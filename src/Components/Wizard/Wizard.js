import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export class Wizard extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <header id="wizard-header">
                        <h1>Add New Listing</h1>
                        <Link to='/'><button><b>Cancel</b></button></Link>
                    </header>
                    <br /><hr />
                    <Switch>
                        <Route path='/wizard/step1' component={Step1} />
                        <Route path='/wizard/step2' component={Step2} />
                        <Route path='/wizard/step3' component={Step3} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Wizard
