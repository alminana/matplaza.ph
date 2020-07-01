

import React from 'react'; 
import {Link} from 'react-router-dom';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/boxicons/css/boxicons.min.css';
import '../assets/icofont/icofont.min.css';
import '../assets/owl.carousel/assets/owl.carousel.min.css';
import '../assets/css/Navbar.css';
// import '../Carousel/Carousel.css';
import banner1 from '../images/Sanitary.JPG';
import banner from '../images/banner.JPG';
import banner3 from '../images/office.jpg';
import logo from '../images/LOGO.png';
 const Navbar = () => {
    return (        
        <div>
            <header className="header-section  bg-white">
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                <div className="contact-info float-left">
                    <i className="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
                    <i className="icofont-phone"> +963 9293725995</i> 
                    <i className="icofont-phone"> +963 9958119505</i>
                </div>
                <div className="social-links float-right">
                    <Link to="/" className="twitter"><i className="icofont-twitter"></i></Link>
                    <Link to="/" className="facebook"><i className="icofont-facebook"></i></Link>
                    <Link to="/" className="instagram"><i className="icofont-instagram"></i></Link>
                    <Link to="/" className="skype"><i className="icofont-skype"></i></Link>
                    <Link to="/" className="linkedin"><i className="icofont-linkedin"></i></Link>
                </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <nav className="navbar navbar-expand-lg ">
                        <Link className="navbar-brand logo" to="/">
                            <img alt="" src={logo}/>
                        </Link>
                        <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Details">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Details">Client</Link>
                            </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </header>
    

                <section id="hero">
                <div className="hero-container">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">

                
                    <div className="carousel-item active">
                        <img alt="banner" className="responsive" src={banner}/>
                        <div className="carousel-container">
                        <div className="carousel-content container">
                            <h2 className="animate__animated animate__fadeInDown"><span>MATPLAZA</span></h2>
                            <p className="animate__animated animate__fadeInUp">CREATING A TRENDY CONTEMPORARY APPEAL</p>
                        </div>
                        </div>
                    </div>

            
                    <div className="carousel-item">
                    <img alt="banner" className="responsive" src={banner1}/>
                        <div className="carousel-container">
                        <div className="carousel-content container">
                        <h2 className="animate__animated animate__fadeInDown"><span>MATPLAZA</span></h2>
                            <p className="animate__animated animate__fadeInUp">CREATING A TRENDY CONTEMPORARY APPEAL</p>

                        </div>
                        </div>
                    </div>

                    
                    <div className="carousel-item">
                    <img alt="banner" className="responsive" src={banner3}/>
                        <div className="carousel-container">
                        <div className="carousel-content container">
                        <h2 className="animate__animated animate__fadeInDown"><span>MATPLAZA</span></h2>
                            <p className="animate__animated animate__fadeInUp">CREATING A TRENDY CONTEMPORARY APPEAL</p>
                           
                        </div>
                        </div>
                    </div>

                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>

                </div>
                </div>
            </section>
        </div>
    )
}
export default Navbar;