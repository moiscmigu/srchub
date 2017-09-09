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
   }//end of startGiphy

    render(){
       
        
        return(
            <div>
                <button onClick={() => this.startGiphy()} >Giphy</button>
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
        gihpy:state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Giphy);

