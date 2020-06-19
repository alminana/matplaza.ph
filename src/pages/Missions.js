import React, { Component } from 'react'
import { InfoConsumer } from '../api/Context';
import Companypolicy from '../api/datapage/data_missions';
class Missions extends Component {
    render() {
        return (
            <InfoConsumer>
            {value => {
              return value.companypolicy.map(item =>{
                return<Companypolicy key={item.id} item={item}/>;
              });
            }}
            </InfoConsumer>
        )
    }
}
export default Missions;