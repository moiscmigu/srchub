import React from 'react';
import axios from 'axios'
import {news} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newsArr:[null]
        };//end of state
    }//end of constructor

    start() {
        this.props.news();
        
        
    }//end of start

    showNews() {

        let news = this.props.newsInfo.news;

        if(news.length  === 0) {
            if (news.length -1  === 0) {
                return (
                    <h1>Nothing Yet</h1>
                );
            }
            return (
                <h1>Nothing Yet</h1>
            );
        } else {

            
            return (
                <div className='tweets-container-2' >
                    {
                        news.map((n, i) => {

                            return (
                                n.map((m, j) => {

                                    return (
                                        <div key={j}>
                                            <a href={m.web_url} target= "_blank" ><h5><strong>{m.headline.main}</strong> </h5></a>
                                            
                                        </div>
                                    );
                                })
                                
                            );
                        })
                    }
                </div>
            )
        }
       
    }//end showNews

    render() {
        return (
            <div>
                <h1>NEW YORK TIMES</h1>
                {this.showNews()}
            </div>  
        );//end of return
    }//end of render




}//end of news

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        news
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        newsInfo:state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(News);