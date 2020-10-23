import React, { createContext, Component } from 'react';

export const UserSessionContext = createContext();

class UserSessionContextProvider extends Component {
    state = {
        userProfile: null
    }

    setUserProfile = (profile) => {
         this.setState({userProfile: profile});
    }

    isValidSession = () => {
        return this.state.userProfile != null;
    }

    getUserProfile = () => {
        return this.state.userProfile;
    }

    render() {
        return (
            <UserSessionContext.Provider 
                value={
                    {...this.state, 
                        setUserProfile: this.setUserProfile, 
                        isValidSession: this.isValidSession,
                        getUserProfile: this.getUserProfile
                    }
                }>
                    {this.props.children}
            </UserSessionContext.Provider>
        );
    }
}

export default UserSessionContextProvider;

