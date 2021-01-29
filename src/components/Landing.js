import React, { Component } from 'react';

import LandingSingInOptions from './LandingSingInOptions';
import Header from './Header';
import Footer from './Footer';
import FooterBar from './FooterBar';
import Feed from './Feed';

import { UserSessionContext } from '../context/UserContext.js';

class Landing extends Component {

    static contextType = UserSessionContext;

    render() {
        if (this.context.isValidSession()) {
            return (
                <div id="landing-container">
                    <Header/>
                    <Feed/>
                    <FooterBar/>
                </div>
                );
        } else {
            return (
                <div id="landing-container">
                    <Header/>
                    <LandingSingInOptions/>
                    <Footer/>
                </div>
            );
        }
    }

};

export default Landing;
