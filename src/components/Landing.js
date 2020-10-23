import React, { Component } from 'react';

import LandingSingInOptions from './LandingSingInOptions';
import Header from './Header';

import { UserSessionContext } from '../context/UserContext.js';

class Landing extends Component {

    static contextType = UserSessionContext;

    render() {
        if (this.context.isValidSession()) {
            return (
                <Header/>
            );
        } else {
            return (
                <div>
                    <Header/>
                    <LandingSingInOptions/>
                </div>
            );
        }
    }

};

export default Landing;
