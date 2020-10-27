import React, { Component } from 'react';

import LandingSingInOptions from './LandingSingInOptions';
import Header from './Header';
import Footer from './Footer';
import Feed from './Feed';

import { UserSessionContext } from '../context/UserContext.js';

class Landing extends Component {

    static contextType = UserSessionContext;

    render() {
        if (this.context.isValidSession()) {
            return (
                <div>
                    <Header/>
                    <Feed/>
                    <Footer/>
                </div>
                );
        } else {
            return (
                <div>
                    <Header/>
                    <LandingSingInOptions/>
                    <Footer/>
                </div>
            );
        }
    }

};

export default Landing;
