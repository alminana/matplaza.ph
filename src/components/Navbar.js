import React from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/boxicons/css/boxicons.min.css';
import '../assets/icofont/icofont.min.css';
import logo from '../image/LOGO.png';
function Navbar() {
    return (
        <div>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                <div className="contact-info float-left">
                    <i className="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
                    <i className="icofont-phone"></i> +1 5589 55488 55
                </div>
                <div className="social-links float-right">
                    <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                    <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                    <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                    <a href="#" className="skype"><i className="icofont-skype"></i></a>
                    <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                </div>
                </div>
            </section>


            <header id="header">
                <div className="container">

                <div className="logo float-left">
                  
                    <h1 className="text-light">
                        <a href="index.html">
                        <img alt="MATPLAZA" src={logo}/>
                        </a>
                    </h1>
                </div>

                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#Details">Product</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#Contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Navbar