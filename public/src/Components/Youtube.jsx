import React from 'react';
import {youtubeAction} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Youtube extends React.Component {



    handleYoutube() {
        console.log('cliked', this);
        this.props.youtubeAction();

    }//end of handleYoutube;



    showVideos() {
        let vids =this.props.youtubeVideos.youtube;


        if( vids === undefined){
            console.log('false')
            return(
                <h1>There is nothing to show yet</h1>
            );
        } else {
            return (
                <div>
                    {
                        vids.map((v, i) => {
                            return (
                                v.map((f, j) => {
                                    console.log('insid eof the second loop', f.id.videoId)
                                    let videoSrc = "//www.youtube.com/embed/" +  f.id.videoId;
                                    return (
                                        <iframe  height="200" width="300" src={videoSrc}  allowFullScreen ></iframe>
                                    )
                                })
                            )
                        })
                    }
                </div>
            );
        }

    }


    render() {
        return (
            <div>
                <h4>Youtube</h4>
                {this.showVideos()}
            </div>  
        );//end of return  
    }//end of render




}//end of news

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        youtubeAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        youtubeVideos:state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Youtube);