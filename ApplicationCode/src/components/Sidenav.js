import React, { Component } from 'react';
import './sidenav.css'
import { findDOMNode } from 'react-dom';


class Sidenav extends Component {

    constructor(props) {
        super(props);
    }
       
    openNav() {
        document.getElementById("mySidenav").style.width = "270px";
        document.getElementById("main").style.marginRight = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.body.style.backgroundColor = "white";
    }

    spanStyle = {
        color: 'black',
        fontSize: '30px'
    }

    innerStyle = {
        width: '79px',
        background: '#fff'
    }
    downArrow = {
        top: '100%'
    }
    upArrow = {
        marginBottom: '555px'
    }
    overflow ={
        overflow: 'hidden'
    }

    render() {

        return (
            <div className="App app-container">

                <div id="mySidenav" className="sidenav">
                    <ul class="list-group">

                        <li class="list-group-item">


                            <div className="row">
                                <div className="col-12 panel-heading">
                                    Order Summary</div>
                            </div>

                        </li>

                        <li class="list-group-item">
                            <div className="row">

                                <div className="col-12">

                                    CAR</div>
                            </div>
                            <div className="row pad">
                                <div className="col-2">  <span> <img class="span1" src="http://www.carlogos.org/logo/Mitsubishi-emblem-1024x768.png" /></span></div>
                                <div className="col-6">Expander v</div>
                                <div className="col-4">900,000</div>
                            </div></li>


                        <div class="scrollbar" id="style-1" >
                            <div class="force-overflow">

                                <li class="list-group-item">
                                    <div className="row pad">
                                        <div className="col-12">
                                            Accessories</div>
                                    </div>



                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Expander v </div>
                                        <div className="col-4">
                                            24500</div>
                                    </div>
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Expander v</div>
                                        <div className="col-4">
                                            12500</div>
                                    </div>
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Expander v</div>
                                        <div className="col-4">
                                            16500</div>
                                    </div>
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Expander v</div>
                                        <div className="col-4">
                                            24500</div>
                                    </div>

                                </li>
                                <li class="list-group-item">
                                    
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Paintjob</div>
                                        <div className="col-4">
                                            5000</div>
                                    </div>
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Installation</div>
                                        <div className="col-4">
                                            12500</div>
                                    </div>
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Expander v</div>
                                        <div className="col-4">
                                            2400</div>
                                    </div>
                                    <div className="row pad">
                                        <div className="col-2">
                                            <span> <img class="span1 " src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                                        </div>
                                        <div className="col-6">
                                            Paintjob</div>
                                        <div className="col-4">
                                            5000</div>
                                    </div>


                                </li>
                            </div>
                        </div>

                    </ul>
                    <div className="row cost-class">

                    </div>
                    <div className="colorblack">
                        <div className="row order-white">
                            <div className="col-5">
                                Total Cost
                            </div>
                            <div className="col-7">
                                <sup>php</sup><span className="cost">1,118,000</span>
                            </div>
                        </div>
                        <div className="order-black">
                            <span className="order">
                                Order</span>
                        </div>
                    </div>
                </div>
                <div id="main">
                    <div className="float-left">

                        <div className="row" style={this.overflow}>
                            <div className="col-lg-2 col-md-2 col-sm-12 hiddn">
                                <div className="row">
                                    <div className="col-5 col-height-set">
                                        <div id="carouselExampleControls" class="carousel vert slide" data-ride="carousel" data-interval="2000" data-interval="false">
                                            <div class="carousel-inner" style={this.innerStyle}>
                                                <div className="carousel-item  active">
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                </div>
                                                <div className="carousel-item ">
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                    <img className="img-fluid carosel-img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                                </div>
                                            </div>

                                            <a className="up-arrow up carousel-control carousel-control-arrows text-center" style={this.upArrow} href="#carouselExampleControls" role="button" data-slide="prev">
                                                <div className="card">
                                                    <div className="card-block">
                                                        <img className="img-fluid img-circle" src="https://cpffcf.org/wp-content/uploads/2016/07/yourlogo.png" alt="" />
                                                    </div>
                                                </div>
                                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            
                                        </div>
                                        <a className="down carousel-control-arrows" style={this.downArrow} >
                                            <div className="card add-car">
                                                <div className="card-block text-center add-car-pic">
                                                    <p className="add-car-para">Not here?</p>
                                                    <img className="img-fluid img-rounded" src="https://d30y9cdsu7xlg0.cloudfront.net/png/65404-200.png" alt="" />
                                                    <p className="add-car-para">Send request</p>
                                                </div>
                                            </div>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 col-height-set">
                                        <div className="car-colors card col-height-set text-center">
                                            <div className="card-block add-car-pic">
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
                                                <p className="cross-button">
                                                    <span className="close-color-btn">
                                                        <i className="fa fa-times" aria-hidden="true"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/*left side bar starts  */}
                            <div className="col-1">
                                <div style={{ width: "59px" }} className="sidenavbar float-left">
                                    <div className="icons-section">
                                        <img className="img-nav img-fluid" src="https://cpffcf.org/wp-content/uploads/2016/07/yourlogo.png" alt="" />
                                        <img className="img-nav img-fluid" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" alt="" />
                                        <div className="bottom-section">
                                            <p className=""><span className="color-platte1" style={{ background: 'grey' }}></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* left sidebar ends  */}

                            {/* Main page content  */}
                            <div className="col-lg-8 col-md-8 col-sm-12 responsive-mat text-center">
                                <div className="main-heading text-left">
                                    <span className="heading">Expander</span>
                                    <br />
                                    <span className="undheading">SRP P1,200,000</span><span className="specs btn">specs >></span>
                                </div>
                                <img className="mainpic img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZxn1izYhZ8NwH3ygtTtM9lxzGyFe1NBbQ2IZ02xsgRANTot6" />
                                <div id="footer" class="col-lg-12">
                                    <ul class="nav nav-pills nav-justified">
                                        <li className="col-4 footitem fontbold">Sterling Silver</li>
                                        <li className="col-4 footimg">
                                            <img class="spanfooter img-fluid img-nav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3--NuuaaK8LFZQRHOOWx7SO1FJowpAEYPilQerDkDgACYiGeKA" />
                                            <img class="spanfooter img-fluid img-nav" src="https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-instagram-512.png" /></li>
                                        <li className="col-4 footitem"><span className="">Total Cost</span><br /> <sup>php</sup><span className="fontbold">1,000,000</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* table section end  */}

                    </div>
                    {/*   right sidebar  */}
                    <div className="sidenavbar float-right">
                        <div className="icons-section icons-section2">
                            <span className="search-1 padding-icons"><i class="fa fa-search span" aria-hidden="true"></i></span>
                            <span className="padding-icons"><img class="span img-fluid img-nav" src="https://cdn4.iconfinder.com/data/icons/car-silhouettes/1000/sedan-512.png" /></span>
                            <span className="padding-icons"><img class="span img-fluid img-nav" src="http://icons.iconarchive.com/icons/icons8/android/512/Transport-Car-icon.png" /></span>
                            <span className="padding-icons"><img class="span img-fluid img-nav" src="https://d30y9cdsu7xlg0.cloudfront.net/png/996-200.png" /></span>
                            <span className="padding-icons"><img class="span img-fluid img-nav" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Aiga_taxi.svg/600px-Aiga_taxi.svg.png" /></span>
                            <span className="padding-icons"><img class="span img-fluid img-nav" src="http://www.iconarchive.com/download/i89067/icons8/ios7/Transport-Wheel.ico" /></span>
                            <div className="bottom-section">
                                <span className="carl-bottom secondlast-icon"><img class="span img-fluid img-nav" src="https://www.materialui.co/materialIcons/maps/directions_car_grey_192x192.png" /></span>
                                <div className="bottom-sec">
                                    <span className="sign-out-1" ><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right sidebar end  */}
                </div>
            </div >
        );
    }
}

export default Sidenav;
