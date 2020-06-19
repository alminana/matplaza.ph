import React, { Component } from 'react'
import banner1 from '../image/Sanitary.JPG';
import banner from '../image/banner.JPG';
import banner3 from '../image/office.jpg';
import '../assets/owl.carousel/assets/owl.carousel.min.css';
class Carousel extends Component {
    render() {
        return (
            <section id="hero">
                <div class="hero-container">
                <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">

                
                    <div class="carousel-item active">
                        <img alt="banner" src={banner}/>
                        <div class="carousel-container">
                        <div class="carousel-content container">
                            <h2 class="animate__animated animate__fadeInDown"><span>MATPLAZA</span></h2>
                            <p class="animate__animated animate__fadeInUp">CREATING A TRENDY CONTEMPORARY APPEAL</p>
                            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                        </div>
                    </div>

            
                    <div class="carousel-item">
                    <img alt="banner" src={banner1}/>
                        <div class="carousel-container">
                        <div class="carousel-content container">
                        <h2 class="animate__animated animate__fadeInDown"><span>MATPLAZA</span></h2>
                            <p class="animate__animated animate__fadeInUp">CREATING A TRENDY CONTEMPORARY APPEAL</p>
                            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                        </div>
                    </div>

                    
                    <div class="carousel-item">
                    <img alt="banner" src={banner3}/>
                        <div class="carousel-container">
                        <div class="carousel-content container">
                        <h2 class="animate__animated animate__fadeInDown"><span>MATPLAZA</span></h2>
                            <p class="animate__animated animate__fadeInUp">CREATING A TRENDY CONTEMPORARY APPEAL</p>
                            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                        </div>
                    </div>

                    </div>

                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>

                </div>
                </div>
            </section>
        )
    }
}
export default Carousel;