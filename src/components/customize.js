import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import './customize.css';

class CustomizeComponent extends Component {

    constructor(props) {
        super(props);
    }

    spanStyle = {
        color: 'black',
        fontSize: '30px'
    }

    innerStyle = {
        width: '100px',
        background: '#fff'
    }
    downArrow = {
        top: '100%'
    }
    upArrow = {
        marginBottom: '555px'
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1">


                        <div id="carouselExampleControls" class="carousel vert slide" data-ride="carousel" data-interval="2000" data-interval="false">
                            <div class="carousel-inner" style={this.innerStyle}>
                                <div className="carousel-item  active">
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                </div>
                                <div className="carousel-item ">
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                </div>
                                <div className="carousel-item ">
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                </div>
                                <div className="carousel-item ">
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                </div>
                                <div className="carousel-item ">
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                    <img className="img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                </div>
                            </div>

                            <a className="up carousel-control carousel-control-arrows" style={this.upArrow} href="#carouselExampleControls" role="button" data-slide="prev">
                                <div className="card">
                                    <div className="card-block">
                                        <img className="img-fluid img-circle" src="https://cpffcf.org/wp-content/uploads/2016/07/yourlogo.png" alt="" />
                                    </div>
                                </div>
                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="down carousel-control-arrows" style={this.downArrow} >
                                <div className="card add-car">
                                    <div className="card-block">
                                        <p className="add-car-para">Not here?</p>
                                        <img className="img-fluid img-rounded" style={{ height: '42px' }} src="https://d30y9cdsu7xlg0.cloudfront.net/png/65404-200.png" alt="" />
                                        <p className="add-car-para">Send request</p>
                                    </div>
                                </div>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="card">
                            <div className="card-block">
                                <p className="card-title color-title"><span className="color-platte current-color" style={{ background: '#fff' }}>
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                </span></p>
                                <p className="card-text color-para"><span className="color-platte" style={{ background: '#000' }}></span></p>
                                <p className="card-text color-para"><span className="color-platte" style={{ background: 'blue' }}></span></p>
                                <p className="card-text color-para"><span className="color-platte" style={{ background: 'red' }}></span></p>
                                <p className="card-text color-para"><span className="color-platte" style={{ background: 'brown' }}></span></p>
                                <p className="card-text color-para"><span className="color-platte" style={{ background: 'green' }}></span></p>
                                <p className="card-text color-para"><span className="color-platte add-color" style={{ background: '#fff' }}>
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </span></p>
                                <p className="close-color-btn">
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default CustomizeComponent;
