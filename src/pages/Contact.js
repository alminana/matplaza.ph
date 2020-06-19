import React from 'react';
import '../assets/css/Contact.css';
const News = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 cardcontact">
          <img className="contacthomeimg responsive" alt="" src="../images/homeimages/matplza office.jpg"/>
          <hr></hr>
                  <b>Headquarter:</b><br />
                  Matplaza Philippines, Inc./KLC Philippines Corp. <br />
                  Tower 2, Unit 2510-2512 Corporate Plaza<br/>
                  corner 26th St, Taguig, Metro Manila, Philippines<br/>
                  Phone: +6329976497<br />
                  E-mail:<a href="mailto:usa@mysite.com">usa@mysite.com</a><br />
          <hr></hr>
          </div>
         
          <div className="col-md-8 map  ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8995400727295!2d121.04954931431962!3d14.547737082271366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9611f9dd093%3A0x39a3166c5d87e236!2sMatplaza%20Philippines%2C%20Inc.%2FKLC%20Philippines%20Corp.!5e0!3m2!1sen!2ssa!4v1591560654330!5m2!1sen!2ssa" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>

        // <div className="container">
        //   <div className="row">
        //     <div className="col-md-8 contact card">
        //       <form action="/post" method="post">
        //         <input className="form-control" name="name" placeholder="Name..." /><br />
        //         <input className="form-control" name="phone" placeholder="Phone..." /><br />
        //         <input className="form-control" name="email" placeholder="E-mail..." /><br />
        //         <textarea className="form-control" name="text" placeholder="How can we help you?"></textarea><br />
        //         <input className="btn btn-primary" type="submit" value="Send" /><br /><br />
        //       </form>
        //     </div>
        //     <div className="col-md-4 contact">
        //     <b>Main Offices:</b> <br />
        //         Phone: +1 129 209 291<br />
        //         E-mail: <a href="mailto:support@mysite.com ">support@Matplaza.com</a><br />
        //         <br /><br />
                
        //         <b>Headquarter:</b><br />
        //         Matplaza Philippines, Inc./KLC Philippines Corp. <br />
        //         Tower 2, Unit 2510-2512 Corporate Plaza<br/>
        //         corner 26th St, Taguig, Metro Manila, Philippines<br/>
        //         Phone: +6329976497<br />
        //         E-mail:<a href="mailto:usa@mysite.com">usa@mysite.com</a><br />
        //     </div>
        //   </div>
        //   <div className="row mt-3 contactmap">
        //     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8995400727295!2d121.04954931431962!3d14.547737082271366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9611f9dd093%3A0x39a3166c5d87e236!2sMatplaza%20Philippines%2C%20Inc.%2FKLC%20Philippines%20Corp.!5e0!3m2!1sen!2ssa!4v1591560654330!5m2!1sen!2ssa" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        //   </div>
        // </div>
    )
}
export default News;