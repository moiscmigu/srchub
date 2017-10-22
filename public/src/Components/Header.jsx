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
        console.log('searching the news...')

        let search = this.state.search; 
        this.props.giphyAction(search);
        this.props.news(search);
        this.props.tweet(search);
        this.props.youtubeAction(search);
    }//end of searchNews


    render() {
        return (

            <nav className="navbar navbar-default" role="navigation" style={{"textAlign": "center"}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">srcHub</a>
                    </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{"textAlign": "center"}}>
                 
                    <div className="col-sm-3 col-md-3" style={{"margin": "auto"}}>
                            <div className="input-group" style={{"textAlign": "center"}}>
                                
                                <input type="text" className="form-control" placeholder="Search" name="q" onChange={ event => this.setState({search:event.target.value}) } />
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit" onClick={ this.searchNews.bind(this) } ><i className="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </nav>


            
          
             


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