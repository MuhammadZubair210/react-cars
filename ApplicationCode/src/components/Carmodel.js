import React, { Component } from 'react';
import './Login.css'


class Carmodel extends Component {

    constructor(props) {
        super(props);
    }
    login() {
        this.props.history.push('/login');
    }

    render() {

        return (
            <div className="App">

                <div class="container">
                    <h2>Large Modal</h2>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Open modal</button>

                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">

                                    <div className="container">
                                        <div className="row rowModal">
                                            <div className="col-6">
                                                <div class="carmodname">
                                                    Car Model
                                                </div>
                                                <div className="cont">

                                                    <div className="wrapper">
                                                        <div class="scrollbar" id="style-2">
                                                            <div class="force-overflow">
                                                                <div className="paragraph">
                                                                    <p>A car is a wheeled motor vehicle used for transportation. Most definitions of car say they run primarily on roads, seat one to eight people, have four tires, and mainly transport people rather than goods.</p>
                                                                </div>
                                                                <div className="lowcontent">
                                                                    <div className="row rowinner">
                                                                        <div className="col-8">
                                                                            Race car at 000.3003 (CRX the speed is 0.49300299303)
                                                    </div>
                                                                        <div className="col-4">
                                                                            (25)23
                                                    </div>
                                                                    </div>
                                                                    <div className="row rowinner">
                                                                        <div className="col-8">
                                                                            Acceleration 000.3003 for various0.49300299303)
                                                    </div>
                                                                        <div className="col-4">
                                                                            (25)23
                                                    </div>
                                                                    </div>
                                                                    <div className="row rowinner">
                                                                        <div className="col-8">
                                                                            Acceleration 000.3003 (CRX =0.49300299303)
                                                    </div>
                                                                        <div className="col-4">
                                                                            (25)23
                                                    </div>
                                                                    </div>
                                                                    <div className="row rowinner">
                                                                        <div className="col-8">
                                                                            Acceleration 000.3003 (CRX =0.49300299303)
                                                    </div>
                                                                        <div className="col-4">
                                                                            (25)23
                                                    </div>
                                                                    </div>
                                                                    <div className="row rowinner">
                                                                        <div className="col-8">
                                                                            Acceleration 000.3003 (CRX =0.49300299303)
                                                    </div>
                                                                        <div className="col-4">
                                                                            (25)23
                                                    </div>
                                                                    </div>
                                                                    <div className="row rowinner">
                                                                        <div className="col-8">
                                                                            Acceleration 000.3003 (CRX =0.49300299303)
                                                    </div>
                                                                        <div className="col-4">
                                                                            (25)23
                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 collast">
                                                <span className="close cross" data-dismiss="modal"><span className="closee">X</span></span>
                                                <div id="demo" class="carousel slide" data-ride="carousel">
                                                    <ul class="carousel-indicators">
                                                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                                                        <li data-target="#demo" data-slide-to="1"></li>
                                                        <li data-target="#demo" data-slide-to="2"></li>
                                                    </ul>
                                                    <div class="carousel-inner">                                                        <div class="carousel-item active">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0zb4TFWK8t2GmPuhHrM51M8PLZiRdwF7u53acADj8zRxTHzE" alt="Los Angeles" width="1100" height="500" />
                                                    </div>
                                                        <div class="carousel-item">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOCI-bc5b0Ss4SgzGXLJyc6Lb73JzKbw18GYi-tEB1EMif3qlPw" alt="Chicago" width="1100" height="500" />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHk_qtQ7cpnptfuG6luBokQ46mKIuLDN-a9Sp7LCIbj-LpdSv" alt="New York" width="1100" height="500" />
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                                        <span class="carousel-control-prev-icon"></span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#demo" data-slide="next">
                                                        <span class="carousel-control-next-icon"></span>
                                                    </a>
                                                </div>

                                                <div class="buttonlast">
                                                    <button type="button" class="btn btn-secondary">Configure ></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Carmodel;
