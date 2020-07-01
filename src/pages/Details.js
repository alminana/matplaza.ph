import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import '../assets/css/Details.css';
import  Furnituretop from "../images/imagedetails/Furnituretop.gif";
import  Furniture from "../images/imagedetails/Furniture.gif";
import  stonetop from "../images/imagedetails/stonetop.gif";
import  stonecontent from "../images/imagedetails/stonecontent.gif";
import  tiletop from "../images/imagedetails/tiletop.gif";
import  tilecontent from "../images/imagedetails/tilecontent.gif";
import  boardtop from "../images/imagedetails/boardtop.gif";
import  boardcontent from "../images/imagedetails/boardcontent.gif";
import  sanitarycontent from "../images/imagedetails/sanitarycontent.jpg";
import  UPVC from "../images/imagedetails/UPVC.jpg";
import  terracottatop from "../images/imagedetails/terracottatop.gif";
import  terracottacontent from "../images/imagedetails/terracottacontent.gif";
import  fired from "../images/imagedetails/fired.jpg";
import  automation from "../images/imagedetails/automation.jpg";
import F06Y from "../Files/BOARDS_EN/MELAMINE.pdf";
class Details extends Component {
    render() {
        return (
            <div className="container">
            <div className="row mt-3">
                <div className="col-md-4 nav-left">
                <ul className="nav nav-tabs" id="myTab" role="tablist" >
                <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="home">FURNITURE</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="STONE">STONE</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="TILE">TILE</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="BOARD">BOARD</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-5" role="tab" aria-controls="SANITARYWARES">SANITARYWARES</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-6" role="tab" aria-controls="DOORS&WINDOWS">DOORS&WINDOWS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-7" role="tab" aria-controls="TERRACOTTA">TERRACOTTA</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-8" role="tab" aria-controls="FIRE RATED STEEL DOORS">FIRE RATED STEEL DOORS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-9" role="tab" aria-controls="AUTOMATION SYSTEMAUTOMATION SYSTEM">AUTOMATION SYSTEM</a>
                </li>
                <li className="nav-item">
                <div class="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="PDF">PDF</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                 <a className="nav-link" data-toggle="tab" href="#tab-10" role="tab" aria-controls="BOARDS">BOARDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-11" role="tab" aria-controls="FIRE STEEL DOOR">FIRE STEEL DOOR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-12" role="tab" aria-controls="SANITARY WARES">SANITARY WARES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab-13" role="tab" aria-controls="STONES & TILES">STONES & TILES</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
                </div>
                <div className="col-md-6 mt-2 ">
                <div className="tab-content">
                    <div className="tab-pane active" id="tab-1" role="tabpanel">
                        <img alt="" className="imgresponsive" src={Furnituretop}/>
                        <img alt="" className="imgresponsive" src={Furniture}/>
                    </div>
                    <div className="tab-pane" id="tab-2" role="tabpanel">
                        <img alt="" className="imgresponsive" src={stonetop}/>
                        <img alt="" className="imgresponsive" src={stonecontent}/>
                    </div>

                    <div className="tab-pane" id="tab-3" role="tabpanel">
                        <img alt="" className="imgresponsive" src={tiletop}/>
                        <img alt="" className="imgresponsive" src={tilecontent}/>
                    </div>

                    <div className="tab-pane" id="tab-4" role="tabpanel">
                        <img alt="" className="imgresponsive" src={boardtop}/>
                        <img alt="" className="imgresponsive" src={boardcontent}/>
                    </div>

                    <div className="tab-pane" id="tab-5" role="tabpanel">
                        <img alt="" className="imgresponsive" src={sanitarycontent}/>
                    </div>

                    <div className="tab-pane" id="tab-6" role="tabpanel">
                        <img alt="" className="imgresponsive" src={UPVC}/>
                    </div>

                    <div className="tab-pane" id="tab-7" role="tabpanel">
                        <img alt="" className="imgresponsive" src={terracottatop}/>
                        <img alt="" className="imgresponsive" src={terracottacontent}/>
                    </div>

                    <div className="tab-pane" id="tab-8" role="tabpanel">
                        <img alt="" className="imgresponsive" src={fired}/>
                    </div>

                    <div className="tab-pane" id="tab-9" role="tabpanel">
                        <img alt="" className="imgresponsive" src={automation}/>
                    </div>

                    <div className="tab-pane" id="tab-10" role="tabpanel">
                    <div class="container">
                    <h2>BOARD</h2>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Filename</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>MELAMINE (F06Y) LPM</td>
                          <td><Link to="../Files/BOARDS_EN/MELAMINE.pdf">Download</Link></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>PARTICLE BD. (15mm)</td>
                          <td><a href="../Files/BOARDS_EN/MELAMINE (F06Y) LPM.pdf">Download</a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>PARTICLE BD. (18mm)</td>
                          <td><a href="../Files/BOARDS_EN/BOARDS_EN/MELAMINE (F06Y) LPM.pdf">Download</a></td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>PARTICLE BD. (25mm).pdf</td>
                        <td><a href="../Files/BOARDS_EN/BOARDS_EN/MELAMINE (F06Y) LPM.pdf">Download</a></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                    </div>

                    <div className="tab-pane" id="tab-11" role="tabpanel">
                    <div class="container">
                    <h2>FIRE RATED STEEL DOOR ACCESSORIES</h2>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Filename</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>BUTT HINGE_GEZE ID200039</td>
                          <td><a href="../Files/FIRE RATED STEEL DOOR ACCESSORIES/BUTT HINGE_GEZE ID200039.pdf">Download</a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>DOOR CLOSER TS2000NV Certificate_UK</td>
                          <td><a href="../Files/FIRE RATED STEEL DOOR ACCESSORIES/DOOR CLOSER TS2000NV_Certifire_Certificate_UK.pdf">Download</a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>DOOR CLOSER CE Konform TS2000NV</td>
                          <td><a href="../Files/FIRE RATED STEEL DOOR ACCESSORIES/DOOR CLOSER_CE_Konform_TS2000NV.pdf">Download</a></td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>DOOR CLOSER TS2000NV</td>
                        <td><a href="../Files/FIRE RATED STEEL DOOR ACCESSORIES/DOOR CLOSER_TS2000NV.pdf">Download</a></td>
                      </tr>
                      <tr>
                      <td>4</td>
                      <td>PANIC EXIT DEVICE LEON6000</td>
                      <td><a href="../Files/FIRE RATED STEEL DOOR ACCESSORIES/PANIC EXIT DEVICE_LEON6000.pdf">Download</a></td>
                      </tr>
                      </tbody>
                    </table>
                    </div>
                    </div>

                    <div className="tab-pane" id="tab-12" role="tabpanel">
                    <div class="container">
                    <h2>SANITARY WARES</h2>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Filename</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>BUTT HINGE_GEZE ID200039</td>
                          <td><a href="../Files/SANITARY WARES/KELIM CATALOG.pdf">Download</a></td>
                        </tr>  
                     </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="tab-pane" id="tab-13" role="tabpanel">
                    <div class="container">
                    <h2>STONES & TILES</h2>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Filename</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>BUTT HINGE_GEZE ID200039</td>
                          <td><a href="../Files/STONES & TILES/SANITARY WARES/Baldocer Tech.pdf">Download</a></td>
                        </tr>  
                        <tr>
                        <td>2</td>
                        <td>QUARELLA Tech</td>
                        <td><a href="../Files/STONES & TILES/SANITARY WARES/QUARELLA Tech.pdf">Download</a></td>
                        </tr>  
                        <tr>
                        <td>3</td>
                        <td>ECO-PRINCE CATALOG</td>
                        <td><a href="../Files/STONES & TILES/SANITARY WARES/QUARELLA Tech.pdf">Download</a></td>
                        </tr>  
                     </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="tab-pane" id="tab-14" role="tabpanel">
                  
                    </div>
                </div>
                </div>                
            </div>
        
          </div>
        )
    }
}
export default Details;