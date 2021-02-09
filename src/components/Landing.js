import React, { Component } from 'react';

import LandingSingInOptions from './LandingSingInOptions';
import Header from './Header';
import Footer from './Footer';
import FooterBar from './FooterBar';
import Feed from './Feed';

import { UserSessionContext } from '../context/UserContext.js';

class Landing extends Component {

    static contextType = UserSessionContext;

    contentPanel = () => {
        return <Feed/>;
    }

    render() {
        if (this.context.isValidSession()) {
            return (
                <div id="landing-container">
                    <Header/>
                    {this.contentPanel()}
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
