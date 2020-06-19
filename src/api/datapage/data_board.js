import React, {Component} from 'react';
import {InfoConsumer} from '../Context';
import {Link} from 'react-router-dom'; 
import '../datacss/data_board.css';
class data_board extends Component {
    render(){
        const{
            id,
            board,
            filename,
            fileDirectory,
         
        } = this.props.item;
        
        return (
            <InfoConsumer>
                {value => (
                    <table class="table">
            
                    <tbody>
                      <tr>
                        <th scope="row" className="pdf"><i class="fas fa-file-pdf"></i></th>
                        <td>{filename}</td>
                        <td></td>
                        <td><a href="{fileDirectory}">Download</a></td>
                      </tr>                  
                    </tbody>
                  </table>
                )}
            </InfoConsumer>
            
          
        )
    }
}
export default data_board;