import React, { createContext, Component } from 'react';

export const UserSessionContext = createContext();

class UserSessionContextProvider extends Component {
    state = {
        rightHandUser: true,
        userProfile: null,
        reserveStarted: false,
        DEV_MODE: true
    }

    setUserProfile = (profile) => {
         this.setState({userProfile: profile});
    }

    isValidSession = () => {
        if (this.state.DEV_MODE) {
            return true;
        } else {
            return this.state.userProfile != null;
        }
    }

    getUserProfile = () => {
        if (this.state.DEV_MODE) {
            return {
                email: "raul.devilla@gmail.com",
                imageUrl: "./img/avatar-man-default.png"
            };
        } else {
            return this.state.userProfile;
        }
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

