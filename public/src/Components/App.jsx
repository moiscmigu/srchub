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
            <div className='tweets-container' >
                {
                    info.map((task, i) => {

                        return (

                            task.tweet.map((t, j) => {

                                return (
                                    <div key={j} className='tweets' >
                                        <p className='butt' >{t.text}</p>
                                        <span><em>{moment(new Date(t.created_at)).fromNow()}</em> </span>
                                    </div>
                                )
                            })
                        );
                    })



                    
                }
            </div>
        );//end of return
    }

    
        
    }//end of tweets



    render(){
       
        var interval = setTimeout(this.startTweet.bind(this), 300000);
        
        return(
            <div>
                <button onClick={() => this.startTweet(interval)} >Start</button>
               {this.showTweets()}
            </div>
        );
    }
}

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

