import React, { Component } from 'react';
import { InfoConsumer } from '../api/Context';
import '../api/datacss/data_home.css';
import '../assets/css/Home.css';
import office from '../image/office.jpg';

import Apidatashowroom from '../api/datapage/data_home';
import Companypolicy from '../api/datapage/data_missions';

class Home extends Component {
    render() {
        return (
          
          <div className="container datahome">
          <div className></div>
            <div className=" datahome datahometitle">PROCUREMENT EXPERT</div>
            <div className="row">
                <div className="col-md-6 datahomearticle">
                    <div className="datahomebtn">&nbsp;&nbsp;&nbsp;&nbsp; We at MATPLAZA Philippines Inc., welcomes you to our wide range of construction products. We offer almost of your interior design needs and some exterior design finishes like Natural stones, Terracotta, Tiles, UPVC doors & windows, Home automation system, Sun shading system, Glass & enclosures.With our expertise in the industry and procurement connection, we assure to give you our best quotation at a very reasonable price without compromising the value of our service & product. Dont hesitate to contact us. Let us hear your inquiries. Warm welcome!
                    </div>
                </div>
                <div className="col-md-6">
                  <img className="datahomeimg responsive" alt="" src={office}/>
                </div>
            </div>
        
            <div className="row mt-1">
              <InfoConsumer>
                {value => {
                  return value.apidatashowroom.map(item =>{
                    return<Apidatashowroom key={item.id} item={item}/>;
                  });
                }}
                </InfoConsumer>
                
                <InfoConsumer>
                {value => {
                  return value.companypolicy.map(item =>{
                    return<Companypolicy key={item.id} item={item}/>;
                  });
                }}
                </InfoConsumer>
            
            <div className="row">
            <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img className="carousel" src="../company/bayantreesoul.jpg" alt="" />
              </div>
              <div class="slide">
                <img className="carousel"  src="../company/bloomvista.gif" alt="" />
              </div>
              <div class="slide">
                <img className="carousel" src="../company/hotel atti.png"  alt="" />
              </div>
              <div class="slide">
                <img  className="carousel" src="../company/huosung.JPG" alt="" />
              </div>
              <div class="slide">
                <img className="carousel" src="../company/hyosung.png"  alt="" />
              </div>
              <div class="slide">
                <img  className="carousel" src="../company/paradise-casino-walkerhill.png"alt="" />
              </div>
              <div class="slide">
                <img className="carousel" src="../company/paradisebusan.jpg" alt="" />
              </div>
              <div class="slide">
              <img  className="carousel" src="../company/Samsung.jpg"alt="" />
              </div>
              <div class="slide">
              <img  className="carousel"src="../company/Shilla-Stay-Mapo.png" alt="" />
              </div>
              <div class="slide">
              <img className="carousel" src="../company/shilla.png"  alt="" />
              </div>
            </div>
          </div>
            </div>  
          </div>
      
          </div>  
          
        );
    }
}
 export default Home;