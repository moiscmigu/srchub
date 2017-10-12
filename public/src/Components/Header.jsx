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

            <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">srcHub</a>
                    </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li className="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="col-sm-3 col-md-3">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="q" onChange={ event => this.setState({search:event.target.value}) } />
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit" onClick={ this.searchNews.bind(this) } ><i className="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                        </li>
                    </ul>
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