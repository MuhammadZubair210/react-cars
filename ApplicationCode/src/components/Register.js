import React, { Component } from 'react';
import './Login.css'


class Register extends Component {

    constructor(props) {
        super(props);
    }
    login() {
        this.props.history.push('/login');
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
                    <div class="form-group">
                        <label for="usr">Name</label>
                        <input type="text" class="form-control" id="usr" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Place of residence</label>
                        <input type="password" class="form-control" id="pwd" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="number">Number</label>
                        <input type="password" class="form-control" id="number" />
                    </div>
                    <button type="button" class="btn btn-secondary btn-modal" style={this.bsuccess}>Continue ></button>

                    <div className="divalready">
                        <span class="already">I already have an account.</span><strong onClick={this.login.bind(this)}>Click Here</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
