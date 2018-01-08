import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props);
    }

    register() {
        this.props.history.push('/');
    }
    divStyle = {
        width: '25%',
    }
    bsuccess = {
        width: '100%'
    }
    render() {

        return (
            <div className="App">

                <div class="container container1" style={this.divStyle}>

                    <div className="heading">Hi!</div>
                    <div className="subtext">
                        We need your information you know before we can proceed so we can spam you eventually
                    </div>
                    <div className="bod">
                        <div class="form-group">
                            <label for="usr">Email</label>
                            <input type="text" class="form-control" id="usr" />
                        </div>

                        <button type="button" class="btn btn-secondary btn-modal" style={this.bsuccess}>Continue ></button>

                        <div className="divalready">
                            <span class="already">I dont have an account.</span><strong onClick={this.register.bind(this)}>Click Here</strong>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Login;
