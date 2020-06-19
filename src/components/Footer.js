import React, { Component } from 'react';
import logo from '../image/LOGO.png';
import '../assets/css/Footer.css';
class Footer extends Component {
    render() {
        return (
   
    <footer id="dk-footer" className="dk-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                        <a href="index.html" className="footer-logo">
                            <img className="footerlogo" src={logo} alt="matplaza"/>
                        </a>
                        <p className="footer-info-text">
                          Your inquiries are our plesure.For latest updates and. new products,you may follow us on the following as below for us to keep you posted
                        </p>
                        <div className="footer-social-a">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-aedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
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
   
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>Useful as</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
              
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget">
                                <div className="section-heading">
                                    <h3>Company</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <div className="contact">
                                    <p>MATPLAZA Philippines</p>
                                    <p>Smart:  09293725995</p>
                                    <p>Mobile: 09958119505</p>
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
                    <div className="col-md-6">
                    <div className="copyright-menu">
                            <ul>
                                <li>
                                    <a to="/">Home</a>
                                </li>
                                <li>
                                    <a to="/Product">Product</a>
                                </li>
                                <li>
                                    <a href="/Contact">Contact</a>
                                </li>
                                <li>
                                    <a href="/News">News</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="col-md-6">
                    <span>Copyright © {new Date().getFullYear()} All Right Reserved MATPLAZA</span>
                    </div>
         
                </div>
             
            </div>
          
        </div>

</footer>

        )
    }
}
export default Footer;