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
    
   startGiphy() {


    this.props.giphyAction().then(() => {
        console.log('asdkfjbjkashdbfkjasdbmfknjhsvdfkxjv abdk');
    });

    

    this.showGifs();
   }//end of startGiphy

   showGifs() {
 
       let results = this.props.giphyImage.giphy;

    if(results.length === 0 || results === undefined) {
        return (
            <h1>No gifs yet</h1>
        ) 
    } else {
        return (
            <div id='giphy-container'>
                {
                    results.map((r, i) => {
                        return(

                        
                        r.data.map((t, j) => {

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
            <div id = 'giphy'>
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

