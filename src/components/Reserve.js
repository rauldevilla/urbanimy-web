import React, { Component } from 'react';

class Reserve extends Component {

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-25" >
                        <label
                            for="fname" > First Name </label>
                    </div>
                    <div className="col-75" >
                        <input type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.." />
                    </div>
                </div>
            </div>
        );
    }

}

export default Reserve;