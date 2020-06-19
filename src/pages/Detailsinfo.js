import React, { Component } from 'react';
import { InfoConsumer } from '../Context';
import { Link } from 'react-router-dom';

class Detailsinfo extends Component {
    render() {
        return (
           <InfoConsumer>
           {data => {

            const {
                id,
                headerTitle,
                headerSubTitle,
                headerText,
                img,
                title,
                description,
            }= data.info;
            return(
                <React.Fragment>
                {headerSubTitle}
                </React.Fragment>
            );
           }}
           </InfoConsumer>
        )
    }
}
export default Detailsinfo; 