
import React, { Component } from 'react';
// import component
import Navbar from './components/Navbar';

import Footer from './components/Footer';
// import pages
import Home from '../src/pages/Home';
import NotFoundPage from '../src/pages/Error';
import Details from '../src/pages/Details';
import Contact from '../src/pages/Contact';
import Mission from '../src/pages/Missions'
import News from '../src/pages/News';

import{Switch,Route} from 'react-router-dom';
class App extends Component{
  render(){
    return (
    <div>
        <Navbar/>
         
           <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/Home" exact component={Home}/>
             <Route path="/Details" exact component={Details}/>
             <Route path="/Contact" exact component={Contact}/>
             <Route path="/Mission" exact component={Mission}/>
             <Route path="/News" exact component={News}/>
             <Route component={NotFoundPage}/>
            </Switch>
          <Footer/> 
    </div>
    );
  }
}
export default App;