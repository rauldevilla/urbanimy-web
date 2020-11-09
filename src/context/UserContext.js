import React, { createContext, Component } from 'react';

export const UserSessionContext = createContext();

class UserSessionContextProvider extends Component {
    state = {
        rightHandUser: true,
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

    isRightHandUser = () => {
        return this.state.rightHandUser;
    }

    render() {
        return (
            <UserSessionContext.Provider 
                value={
                    {...this.state, 
                        setUserProfile: this.setUserProfile, 
                        isValidSession: this.isValidSession,
                        getUserProfile: this.getUserProfile,
                        isRightHandUser: this.isRightHandUser
                    }
                }>
                    {this.props.children}
            </UserSessionContext.Provider>
        );
    }
}

export default UserSessionContextProvider;

