import React, { Component } from 'react';
import {
       
        apidatashowroom,
        basic_toolset,
        companypolicy,
        info,
        reviews, 
        // detailInfo, 

        WorkExperience,
        news,
        } from '../api/data';
const InfoContext = React.createContext();

class InfoProvider extends Component {

    state = {
        apidatashowroom:apidatashowroom,
        companypolicy:companypolicy,
        experience:WorkExperience,
        tool:basic_toolset,
        reviews:reviews,
        // detailInfo:detailInfo,
        new:news,
        info:info,
    };
  
 
    getItem = id => {
        const item = this.state.apidatashowroom.find(item=> item.id ===id);
        return item;
    };
    getItem = id => {
        const item = this.state.info.find(item=> item.id === id);
        return item;
    };
    getItem = id => {
        const item = this.state.companypolicy.find(item=> item.id ===id);
        return item;
    };

    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
        return  {
            new:item
        } 
        });
    };
    // handlelatestnews = id => {
    //     const item = this.getItem(id);
    //     this.setState(() => {
    //     return  {
    //         latestnews:item
    //     } 
    //     });
    // };



    render() {
        return (
            <InfoContext.Provider value={{

                apidatashowroom:this.state.apidatashowroom,
                showTitle:this.state.showTitle,
                showdescription:this.state.showdescription,
                showimg:this.state.showimg,
                tab:this.state.tab,
                tabs:this.state.tabs,
                imgdetails:this.state.imgdetails,
                imgdetailstop:this.state.imgdetailstop,

                board:this.state.board,
                filename:this.state.filename,
                fileDirectory:this.state.fileDirectory,

                companypolicy:this.state.companypolicy,
                mission:this.state.mission,
                vison:this.state.vision,
                policy:this.state.policy,

   
               newdate:this.state.newsdate,
               newmonth:this.state.newsmonth,
               newimg:this.state.newsimg,
               newTitle:this.statenewsTitle,
               newTex:this.state.newsTex,
                
                experience:this.state.experience,
                tool:this.state.tool,
                devtools:this.state.devtools,
                projectname:this.state.projectname,
                projectdescription:this.state.projectdescription,
                images:this.state.images,
                info:this.state.info,
                reviews:this.state.reviews,
                maps:this.state.maps,
                news:this.state.news,

                headerTitle:this.state.headerTitle,
                headerTitleSubTitle:this.state.headerTitleSubTitle,
                headerText:this.state.headerText,

                // detailInfo:this.state.detailInfo,
                name:this.state.name,
                comment:this.state.comment,
                
                handleDetail:this.handleDetail,
                handlelatestnews:this.handlelatestnews,
            }}>
              {this.props.children}
          </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;
 
export {InfoProvider,InfoConsumer};