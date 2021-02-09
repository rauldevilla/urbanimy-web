import React, { createContext, Component } from 'react';

export const UserSessionContext = createContext();

class UserSessionContextProvider extends Component {
    state = {
        rightHandUser: true,
        userProfile: null,
        reserveStarted: false
    }

    setUserProfile = (profile) => {
         this.setState({userProfile: profile});
    }

    isValidSession = () => {
        //return this.state.userProfile != null;
        return true;
    }

    getUserProfile = () => {
        //return this.state.userProfile;
        return {
            imageUrl: "https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg"
        };
    }

    isRightHandUser = () => {
        return this.state.rightHandUser;
    }

    isReserveStarted = () => {
        return this.state.reserveStarted;
    }

    startReserve = () => {
        this.setState({reserveStarted: true});
    }

    goHome = () => {
        this.setState({reserveStarted: false});
    }

    render() {
        return (
            <UserSessionContext.Provider 
                value={
                    {...this.state, 
                        setUserProfile: this.setUserProfile, 
                        isValidSession: this.isValidSession,
                        getUserProfile: this.getUserProfile,
                        isRightHandUser: this.isRightHandUser,
                        isReserveStarted: this.isReserveStarted,
                        startReserve: this.startReserve,
                        goHome: this.goHome
                    }
                }>
                    {this.props.children}
            </UserSessionContext.Provider>
        );
    }
}

export default UserSessionContextProvider;

