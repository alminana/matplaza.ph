import React, { Component } from 'react';
import { InfoConsumer } from '../Context';
import { Link } from 'react-router-dom';
import '../datacss/infocss.css';
class Info extends Component {
    render() {

        const{
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            title,
            description,
            img,
            
        } = this.props.item;

        return (
            <InfoConsumer>
               
                {value =>(  
                <div className="article card mt-2">
                    <div className="article-card ">
                    <div className="row card-title card">
                    <div className="col-md-12">
                    <h2>{headerTitle}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 card-description">
                    {description}
                    </div>
                </div>
                    </div>
                </div>
                )}
            </InfoConsumer>
        )
    }
}
export default Info;