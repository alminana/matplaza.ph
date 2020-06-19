import React, { Component } from 'react'
import { InfoConsumer } from '../Context';
import '../datacss/experience.css';
class Experience extends Component {
    render() {
        
        const {
            position,
            dateposition,
            company,
            address,
        } = this.props.item
        return (
            <InfoConsumer>
                {value =>(
                    <div class="how-section1">
                        <div class="row">
                            <div class="col-md-6 how-img">
                                <img src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" class="rounded-circle img-fluid" alt=""/>
                            </div>
                            <div class="col-md-6">
                                <h4>Find rewarding projects</h4>
                                <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
                                <p class="text-muted">Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                                                Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                                                More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.</p>
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Get hired quickly</h4>
                                        <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
                                        <p class="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                            Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                            Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
                )}
            </InfoConsumer>
        );
    }
}
export default Experience;