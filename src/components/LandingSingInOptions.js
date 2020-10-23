import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import { Configuration } from '../config/Constants';
import { UserSessionContext } from '../context/UserContext.js';

class LandingSingInOptions extends Component {

    static contextType = UserSessionContext;

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        this.context.setUserProfile(response.profileObj);
    }

    render() {
        return (
            <div style={{marginTop: "30px"}}>
                <GoogleLogin 
                    clientId={Configuration.GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
};

export default LandingSingInOptions;
