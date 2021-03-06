import React from 'react';
import {tweet} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import moment from 'moment';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[0],
            tweetCounter:2
        };//end of state
    }
    
    startTweet(interval) {
        clearTimeout(interval);


        this.props.tweet();
        
        return this.showTweets();
    }

    showTweets() {


    if(this.state.tweetCounter === 0) {
        this.setState({
            tweetCounter: this.state.tweetCounter + 1
        })

    } else {
        let info = this.props.info.tweets;

        return (
                    info.map((task, i) => {

                        return (

                            task.tweet.map((t, j) => {

                                return (
                                    <blockquote className="blockquote mb-0" id='giphyBlockquote' style={{"display": "inline-block"}}>
                                        <p>{t.text}</p>
                                        <footer className="blockquote-footer">{moment(new Date(t.created_at)).fromNow()}</footer>
                                    </blockquote>
                                )
                            })//end of loop
                        );
                    })//end of loop
        );//end of return
    }//end of else statement

    
        
    }//end of tweets



    render(){
        var interval = setTimeout(this.startTweet.bind(this), 300000);
        return(
            
        <div className="card" id='tweetsComponent'  style={{"margin": "2em 0 2em 0"}}>
            <div className="card-header">
                <h4>Twitter</h4>
            </div>
            <div className="card-body">
                {this.showTweets()}
            </div>
        </div>
        );
    }//end of render
}//end of Component

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        tweet
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        info:state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

