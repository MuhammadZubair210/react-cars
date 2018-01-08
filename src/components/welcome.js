import React, { Component } from 'react';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';
import slide6 from '../images/slide6.png';
import slide7 from '../images/slide7.png';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

   login() {
        this.props.history.push('/sidenav');
    }

  register() {
    this.props.history.push('/register');
  }
  render() {
    return (
      <div className="container text-center Welcome">
        <h1>Car Models</h1>
        <button className="btn spec-btn" data-toggle="modal" data-target="#myModal">see specs >></button>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">

          

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active text-center">
                <figure className="fig">
                  <img className="d-block img-fluid cover-img" src={slide1} alt="First slide" />
                  <figcaption className="figure-caption">
                    <div className="row data-row">
                      <div className="col-3">drivetrain
                        <h4>FWD</h4>
                      </div>
                      <div className="col-3">passengers
                        <h4>5</h4>
                      </div>
                      <div className="col-3">petrol
                        <h4>Diesel</h4>
                      </div>
                      <div className="col-3">starts at
                        <h4>1000,000</h4>
                      </div>
                    </div>

                  </figcaption>
                </figure>
              </div>
            <div className="carousel-item">
              <figure className="fig">
                <img className="d-block img-fluid cover-img" src={slide2} alt="Second slide" />
                <figcaption className="figure-caption">
                  <div className="row data-row">
                    <div className="col-3">drivetrain
                      <h4>FWD</h4>
                    </div>
                    <div className="col-3">passengers
                      <h4>5</h4>
                    </div>
                    <div className="col-3">petrol
                      <h4>Diesel</h4>
                    </div>
                    <div className="col-3">starts at
                      <h4>1000,000</h4>
                    </div>
                  </div>

                </figcaption>
              </figure>
            </div>
             <div className="carousel-item">
              <figure className="fig">
                <img className="d-block img-fluid cover-img" src={slide3} alt="Third slide" />
                <figcaption className="figure-caption">
                  <div className="row data-row">
                    <div className="col-3">drivetrain
                      <h4>FWD</h4>
                    </div>
                    <div className="col-3">passengers
                      <h4>5</h4>
                    </div>
                    <div className="col-3">petrol
                      <h4>Diesel</h4>
                    </div>
                    <div className="col-3">starts at
                      <h4>1000,000</h4>
                    </div>
                  </div>

                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="fig">
                <img className="d-block img-fluid cover-img" src={slide4} alt="Third slide" />
                <figcaption className="figure-caption">
                  <div className="row data-row">
                    <div className="col-3">drivetrain
                      <h4>FWD</h4>
                    </div>
                    <div className="col-3">passengers
                      <h4>5</h4>
                    </div>
                    <div className="col-3">petrol
                      <h4>Diesel</h4>
                    </div>
                    <div className="col-3">starts at
                      <h4>1000,000</h4>
                    </div>
                  </div>

                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="fig">
                <img className="d-block img-fluid cover-img" src={slide5} alt="Third slide" />
                <figcaption className="figure-caption">
                  <div className="row data-row">
                    <div className="col-3">drivetrain
                      <h4>FWD</h4>
                    </div>
                    <div className="col-3">passengers
                      <h4>5</h4>
                    </div>
                    <div className="col-3">petrol
                      <h4>Diesel</h4>
                    </div>
                    <div className="col-3">starts at
                      <h4>1000,000</h4>
                    </div>
                  </div>

                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="fig">
                <img className="d-block img-fluid cover-img" src={slide6} alt="Third slide" />
                <figcaption className="figure-caption">
                  <div className="row data-row">
                    <div className="col-3">drivetrain
                      <h4>FWD</h4>
                    </div>
                    <div className="col-3">passengers
                      <h4>5</h4>
                    </div>
                    <div className="col-3">petrol
                      <h4>Diesel</h4>
                    </div>
                    <div className="col-3">starts at
                      <h4>1000,000</h4>
                    </div>
                  </div>

                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="fig">
                <img className="d-block img-fluid cover-img" src={slide7} alt="Third slide" />
                <figcaption className="figure-caption">
                  <div className="row data-row">
                    <div className="col-3">drivetrain
                      <h4>FWD</h4>
                    </div>
                    <div className="col-3">passengers
                      <h4>5</h4>
                    </div>
                    <div className="col-3">petrol
                      <h4>Diesel</h4>
                    </div>
                    <div className="col-3">starts at
                      <h4>1000,000</h4>
                    </div>
                  </div>

                </figcaption>
              </figure>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>



      

        <div id="carouselExampleControlss" className="carousel slide" data-ride="carousel" data-interval="false">

        

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active text-center main-carousel">
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='0' className='active'>
                    <img className="img-fluid" src={slide1} alt='' />
                    <figcaption className="figure-caption text-center">Car model A</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='1'>
                    <img className="img-fluid" src={slide2} alt='' />
                    <figcaption className="figure-caption text-center">Car model B</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='2'>
                    <img className="img-fluid" src={slide3} alt='' />
                    <figcaption className="figure-caption text-center">Car model C</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='3'>
                    <img className="img-fluid" src={slide4} alt='' />
                    <figcaption className="figure-caption text-center">Car model D</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='4'>
                    <img className="img-fluid" src={slide5} alt='' />
                    <figcaption className="figure-caption text-center">Car model E</figcaption>
                  </figure>

            </div>
            <div className="carousel-item text-center">
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='5'>
                    <img className="img-fluid" src={slide6} alt='' />
                    <figcaption className="figure-caption text-center">Car model F</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='6'>
                    <img className="img-fluid" src={slide7} alt='' />
                    <figcaption className="figure-caption text-center">Car model G</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='0'>
                    <img className="img-fluid" src={slide1} alt='' />
                    <figcaption className="figure-caption text-center">Car model A</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='1'>
                    <img className="img-fluid" src={slide2} alt='' />
                    <figcaption className="figure-caption text-center">Car model B</figcaption>
                  </figure>
                  <figure className="figure" data-target='#carouselExampleControls' data-slide-to='2'>
                    <img className="img-fluid" src={slide3} alt='' />
                    <figcaption className="figure-caption text-center">Car model C</figcaption>
                  </figure>
            </div>
         
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControlss" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControlss" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        <div className="container collast">
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Car Model</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span className="modal-close-icon" aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                    <div className="row rowModal">
                      <div className="col-6">
                        <div class="carmodname">
                          Car Model
                                                </div>
                        <div className="cont">

                          <div className="wrapper">
                            <div class="scrollbar" id="style-2" style={{background:'#fff'}}>
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
                      <div className="col-6 collast column-6">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                          <ul class="carousel-indicators carousel-indicators-modal li-caros">
                            <li data-target="#demo" data-slide-to="0" className="active li-lastt"></li>
                            <li data-target="#demo" data-slide-to="1" className="li-lastt"></li>
                            <li data-target="#demo" data-slide-to="2" className="li-lastt"></li>
                          </ul>
                          <div class="carousel-inner">                                                        
                            <div class="carousel-item active">
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
                        <button type="button" class="btn btn-secondary btn-modal" data-dismiss="modal" aria-label="Close" onClick={this.login.bind(this)}>Configure ></button>
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

export default Welcome;

