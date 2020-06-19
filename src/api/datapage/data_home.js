import React, {Component} from 'react';
import {InfoConsumer} from '../Context';
import {Link} from 'react-router-dom'; 
class data_home extends Component {
    render(){
        const{
        
            showTitle,
            showimg,

         
        } = this.props.item;
        
        return (
            <InfoConsumer>
                {value => (
                    <div className="datahome" >          
                        <div className=" datashow">
                            <div className="datahometitleshow">
                            </div>
                        </div>  
                        <div>  
                        <section id="section-one">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <figure className="gallery__item img-responsive">
                                                        <img className="gallery__img img-responsive" src={showimg} alt="img1" />
                                                        <figcaption className="gallery__summary">
                                                            <h2 className="gallery__title">{showTitle} <br></br><span> &nbsp; SPECIFICATION</span><br></br>
                                                                <Link 
                                                                 to="/Details" 
                                                                 
                                                                 className="btn btn-primary text-uppercase"
                                                                 >
                                                                 MORE INFO
                                                                </Link>
                                                            </h2>
                                                        </figcaption>            
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>           
                            </section>  

                        </div>
                      
                    </div>
                )}
            </InfoConsumer>
            
          
        )
    }
}
export default data_home;