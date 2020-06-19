import React, { Component } from 'react';
import { InfoConsumer } from '../api/Context';
import { Link } from 'react-router-dom';
import Info from '../api/datapage/Info';
class News extends Component {
  render() {
    return (
      
      <div className="container">
        <div className="row mt5">
        <InfoConsumer>
        {value => {
            return value.info.map(item =>{
                return <Info key={item.id} item={item} />;
            });
        }}
        </InfoConsumer>
        </div>
      </div>
     
    )
  }
}
export default News;