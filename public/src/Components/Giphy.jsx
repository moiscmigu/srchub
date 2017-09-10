import React from 'react';
import {giphyAction} from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Giphy extends React.Component {
    constructor(props) {
        super(props);
    }
    
   startGiphy() {
    console.log('clicked', this)

    this.props.giphyAction();
    this.showGifs();
   }//end of startGiphy

   showGifs() {
       console.log(this.props.giphyImage.giphy)
       let results = this.props.giphyImage.giphy;

    if(results.length === 0 || results === undefined) {
        return (
            <h1>No gifs yet</h1>
        ) 
    } else {
        return (
            <div >
                {
                    results.map((r, i) => {
                        console.log('inisde of the first loop', r.data)
                        return(

                        
                        r.data.map((t, j) => {
                            console.log('inside of the second loop', t.images.downsized.url)
                            return (
                                    <img src={t.images.downsized.url} alt="gifs"/>

                            )
                        })
                        )
                    })
                }    
            </div>
           
        );
    }

   }

    render(){
       
        
        return(
            <div>
                <button onClick={() => this.startGiphy()} >Giphy</button>
                {this.showGifs()}
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

