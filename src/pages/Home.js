import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
// import { InfoConsumer } from '../Context';
import '../assets/css/data_home.css';
import '../assets/css/Home.css';
import '../assets/css//home.scss';
import banner3 from '../images/office.jpg';
// import banner3 from '../image/office.jpg';
import PRESIDENT from '../images/PRESIDENT.JPG';
import VICE from '../images/VICE.JPG';
import ARCHITECT from '../images/ARCHITECT.jpg';


import furniture from '../images/homeimages/furniture.jpg';

import firedoor from '../images/homeimages/firedoor.JPG';
import home_automation from '../images/homeimages/home_automation.jpg';
import PVC from '../images/homeimages/PVC.jpg';
import Sanitary from '../images/homeimages/Sanitary.JPG';
import terracotta from '../images/homeimages/terracotta.jpg';
import stone from '../images/homeimages/stone.jpg';
import tile from '../images/homeimages/tile.JPG';
import board from '../images/homeimages/board.jpg';

import  eye from '../images/imagedetails/eye.png';
import target from '../images/imagedetails/target.png';
import  bulb from '../images/imagedetails/bulb.png';

import bayantreesoul from '../images/bayantreesoul.jpg';
import bloomvista from '../images/bloomvista.gif';
import huosung from '../images/huosung.JPG';
import paradisebusan from '../images/paradisebusan.jpg';
import Samsung from '../images/Samsung.jpg';
import shilla from '../images/shilla.png';

class Home extends Component {
    render() {
        return (

        <main id="main">

        <section id="featured-services" class="featured-services ">
          <div class="container">
    
            <div class="row no-gutters">
              <div class="col-lg-4 col-md-6">
                <div class="icon-box">
                  <img alt="" src={target}/>
                  <h4 class="title">MISSION</h4>
                  <p class="description">MATPLAZA Philippines, Inc. intends to inspire people in building quality developments to achieve customers’ delight</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="icon-box">
                <img alt="" src={eye}/>
                  <h4 class="title">VISION</h4>
                  <p class="description">MATPLAZA Philippines, Inc. aims to provide best quality products with innovative, dynamic global sourcing for commercial, homes & mixed-use projects</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="icon-box">
                <img alt="" src={bulb}/>
                  <h4 class="title">POLICY</h4>
                  <p class="description">To become the Philippine’s No. 1 brand specializing in providing high-class materials with the best quality at reasonable prices.</p>
                </div>
              </div>
            </div>
    
          </div>
        </section>
        <section id="about" class="section-bg">
          <div class="container">
    
            <div class="section-title">
              <h2>PROCUREMENT EXPERT</h2>
            </div>
         
            <div className="row">
                <div className="col-md-6 datahomearticle">
                    <div className="datahomebtn">&nbsp;&nbsp;&nbsp;&nbsp; We at MATPLAZA Philippines Inc., welcomes you to our wide range of construction products. We offer almost of your interior design needs and some exterior design finishes like Natural stones, Terracotta, Tiles, UPVC doors & windows, Home automation system, Sun shading system, Glass & enclosures.With our expertise in the industry and procurement connection, we assure to give you our best quotation at a very reasonable price without compromising the value of our service & product. Dont hesitate to contact us. Let us hear your inquiries. Warm welcome!
                    </div>
                </div>
                <div className="col-md-6">
                  <img className="datahomeimg responsive" alt="" src={banner3}/>
                </div>
            </div>
    
          </div>
        </section>
        
    
 
        <section id="services" class="services">
          <div class="container">
    
            <div class="section-title">
              <h2>PRODUCT</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
    
            <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={furniture} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">FURNITURE<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>
             
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={stone} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">STONE<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={tile} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">TILE<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={board} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">BOARD<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={Sanitary} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">SANITARY<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={PVC} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">DOOR/WINDOW<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={terracotta} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">TERRACOTTA<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={firedoor} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">FIRE STEEL DOOR<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <figure className="gallery__item img-responsive">
                              <img className="gallery__img img-responsive" src={home_automation} alt="img1" />
                                <figcaption className="gallery__summary">
                                <h2 className="gallery__title">HOME AUTOMATION<br></br>
                                  <Link 
                                    to="/Details" 
                                    className="btn btn-primary text-uppercase"
                                    >
                                    SPECIFICATION
                                  </Link>
                                    </h2>
                                  </figcaption>            
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>  
              </div>              

            </div>
    
          </div>
        </section>
        <section id="team" class="team section-bg">
          <div class="container">
    
            <div class="section-title">
              <h2>Team</h2>
            </div>
    
            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src={PRESIDENT} alt=""/>
                  <h4>Mr. Reynaldo D. Villar</h4>
                  <span>PRESIDENT</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div class="social">
                    <Link to="www.twitter.com"><i class="icofont-twitter"></i></Link>
                    <Link to="www.facebook.com"><i class="icofont-facebook"></i></Link>
                    <Link to="www.instagram.com"><i class="icofont-instagram"></i></Link>
                    <Link to="www.linkedin.com"><i class="icofont-linkedin"></i></Link>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src={VICE} alt=""/>
                  <h4>San Ha Hong</h4>
                  <span>VICE CHAIRMAN</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div class="social">
                    <Link to="www.twitter.com"><i class="icofont-twitter"></i></Link>
                    <Link to="www.facebook.com"><i class="icofont-facebook"></i></Link>
                    <Link to="www.instagram.com"><i class="icofont-instagram"></i></Link>
                    <Link to="www.linkedin.com"><i class="icofont-linkedin"></i></Link>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src={ARCHITECT} alt=""/>
                  <h4>Domingo B. Alminana Jr.</h4>
                  <span>ARCHITECT</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                  </p>
                  <div class="social">
                    <Link to="www.twitter.com"><i class="icofont-twitter"></i></Link>
                    <Link to="www.facebook.com"><i class="icofont-facebook"></i></Link>
                    <Link to="www.instagram.com"><i class="icofont-instagram"></i></Link>
                    <Link to="www.linkedin.com"><i class="icofont-linkedin"></i></Link>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
        <section id="clients" class="clients">
          <div class="container">
    
            <div class="section-title">
              <h2>Our Clients</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
    
                <div className="row">
             <div class="slider">
             <div class="slide-track">
               <div class="slide">
                 <img className="carousel" src={bayantreesoul} alt="" />
               </div>
               <div class="slide">
                 <img className="carousel"  src={bloomvista} alt="" />
               </div>
               <div class="slide">
                 <img  className="carousel" src={huosung} alt="" />
               </div>
               <div class="slide">
                 <img className="carousel" src={paradisebusan} alt="" />
               </div>
               <div class="slide">
               <img  className="carousel" src={Samsung} alt="" />
               </div>
               <div class="slide">
               <img className="carousel" src={shilla}  alt="" />
               </div>
             </div>
           </div>
             </div>  
    
          </div>
        </section>
      </main>
        );
    }
}
 export default Home;