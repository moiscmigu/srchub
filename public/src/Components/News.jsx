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
               
                        news.map((n, i) => {

                            return (
                                n.map((m, j) => {

                                    return (

                                        <blockquote className="blockquote mb-0" id='giphyBlockquote'>
                                            <a href={m.web_url} target= "_blank" ><h5><strong>{m.headline.main}</strong> </h5></a>
                                        </blockquote>
                                        
                                    );
                                })
                                
                            );
                        })
                   
            )
        }
       
    }//end showNews

    render() {
        return (
            <div className="card" id='newsComponent' style={{"margin": "2em 0 2em 0"}}>
                <div className="card-header">
                    <h5>New york times</h5>
                </div>
                <div className="card-body" id='giphycard'>
                {this.showNews()}
                </div>
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