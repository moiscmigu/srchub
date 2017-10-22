import axios from 'axios';




const giphyReducer = (state=[], action) => {
    let jifs;
    switch(action.type) {
        case "GIPHY":
            jifs  = JSON.parse(action.payload.data.body);
            state =  [jifs];
            return state;
        default: 
            return state;
    }//end of switch

};

export default giphyReducer;