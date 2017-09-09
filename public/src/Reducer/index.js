import axios from 'axios';




const tweetCallReducer = (state=[], action) => {
    let tweet;
    let news;
    switch(action.type) {
        case "TWEET":
        
            tweet = [...state, {tweet: action.payload.data}]
            console.log('this is the tweet', tweet);
            return tweet;
        default: 
            return state;
    }//end of switch

};

export default tweetCallReducer;