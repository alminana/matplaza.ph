import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/Footer.css';
import logo from '../images/LOGO.png';
class Footer extends Component {
    render() {
        return (
   
    <footer id="dk-footer" className="dk-footer">
    
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8995400727295!2d121.04954931431962!3d14.547737082271366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9611f9dd093%3A0x39a3166c5d87e236!2sMatplaza%20Philippines%2C%20Inc.%2FKLC%20Philippines%20Corp.!5e0!3m2!1sen!2ssa!4v1591560654330!5m2!1sen!2ssa" width="1900" height="500" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                        <Link href="index.html" className="footer-logo">
                            <img className="footerlogo" src={logo} alt="matplza"/>
                        </Link>
                        <p className="footer-info-text">
                          Your inquiries are our plesure.For latest updates and. new products,you may follow us on the following links below for us to keep you posted
                        </p>
                        <div className="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                     
                    </div>
                 
                    <div className="footer-awarad">
                    
                    </div>
                </div>
           
                <div className="col-md-12 col-lg-8">
                    <div className="row">
                        
       
            
                    </div>
   
                    <div className="row ">
                        <div className="footer-row col-md-6 col-lg-5">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>OUR LINKS</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <Link href="#">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Product</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Our Team</Link>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
              
                        <div className="footer-row footer-left col-md-12 col-lg-6">
                            <div className="footer-widget">
                                <div className="section-heading">
                                    <h3>PRODUCT</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                    <div className="contact">
                                        <ul>
                                            <li>
                                                <Link href="#">Furniture</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Stone</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Board</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Sanitary</Link>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                            <div className="contact">
                                                <ul>
                                                    <li>
                                                        <Link href="#">Door & Windows</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Terracotta</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Fire Steel Door</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Automation System</Link>
                                                    </li>
                                                
                                                </ul>
                                          </div>
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                          
                        </div>

                    </div>
             
                </div>
          
            </div>
        
        </div>



        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <span>Copyright © 2020, All Right Reserved MATPLAZA</span>
                    </div>
                </div>
            </div>
        </div>

</footer>

        )
    }
}
export default Footer;