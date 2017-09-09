import axios from 'axios';




const youtubeReducer = (state=[], action) => {
    let videoData;
    switch(action.type) {
        case "YOUTUBE":

            videoData = action.payload.data.items
            state = [...state, videoData]
            return state;
        default: 
            return state;
    }//end of switch

};

export default youtubeReducer;