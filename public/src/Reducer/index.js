import axios from 'axios';




const tweetCallReducer = (state=[], action) => {
    let tweet;
    let news;

    switch(action.type) {
        case "TWEET":
        
        
            state = [{tweet:action.payload.data}]
            return state;
        default: 
            return state;
    }//end of switch

};

export default tweetCallReducer;