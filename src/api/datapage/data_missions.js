import React, { Component } from 'react';
import {InfoConsumer} from '../Context';
import '../datacss/data_missions.css'
 class data_missions extends Component {
    render() {
        const{
            id,
            headerTitle,
            headerSubtitle,
            description,
            imgpolicy,
        } = this.props.item;

        return (
           <InfoConsumer>
            {value => (
              <section className="card_mission">
              <ul class="cards">
              <li class="cards__item">
                <div class="card">
                  <div class="card__image card__image--fence"></div>
                  <div class="card__content">
                   <div className="card_image">
                   <img className="imgcard" src={imgpolicy} alt="img1" />
                   </div>
                    <div class="card__title">
                      {headerTitle}
                    </div>
                    <p class="card__text">{description}</p>
                  </div>
                </div>
              </li>
             
            </ul>
              </section>
               
            )}
           </InfoConsumer>
        )
    }
}
export default data_missions;