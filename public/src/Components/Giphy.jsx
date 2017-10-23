import React from 'react';
import {giphyAction} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Giphy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            giphy:''
        };
    }
    

   showGifs() {
 
       let results = this.props.giphyImage.giphy;

    if(results.length === 0 || results === undefined) {
        return false;
    } else {
        return (
                    results.map((r, i) => {
                        return(

                        
                        r.data.map((t, j) => {

                            return (
                                <div className="blockquote mb-0" id='giphyBlockquote'>
                                    <img src={t.images.downsized.url} alt="gifs"/>
                                </div>
                                    

                            )
                        })//end of loop
                        )//end of return 
                    })//end of loop
        );//end of return 
    }//end of else statement
   }//end of showGif

    render(){
       
        
        return(
            <div className="card" id='giphyComponent' style={{"margin": "2em 0 2em 0"}}>
                <div className="card-header">
                    <h4>Gigphy</h4>
                </div>
                <div className="card-body" id='giphycard'>
                    {this.showGifs()}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        giphyAction
    },
     dispatch)
}

function mapStateToProps(state) {
    return {
        giphyImage:state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Giphy);


