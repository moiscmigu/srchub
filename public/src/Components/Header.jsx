import React from 'react';
import axios from 'axios';
import {giphyAction, news, tweet, youtubeAction} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            search:''
        };//
    }
    
    searchNews() {
        

        let search = this.state.search; 
        console.log('asdfasdf', this.props)
        this.props.giphyAction(search);
        this.props.news(search);
        this.props.tweet(search);
        this.props.youtubeAction(search);
    }//end of searchNews


    render() {
        return (
            
            <div className='container header' >
                <img src="views/image/srchub-logo_2.png" alt="" id='logo'/>
            <div name="col-md-6">
                <div className="input-group">
                
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={ this.searchNews.bind(this) } >Go!</button>
                </span>
                <input type="text" className="form-control" placeholder="Search for..." onChange={ event => this.setState({search:event.target.value}) } />
            </div>
            </div>
            </div>


        );//end of return
    }//end of render

}//end of class

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        giphyAction,
        news,
        tweet,
        youtubeAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        hub:state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);