import axios from 'axios';




const newsCallReducer = (state=[], action) => {
    let news;
    switch(action.type) {
        case "NEWS":
            let data = action.payload.data.response.docs;
            state = [data]
            return state;
        default: 
            return state;
    }//end of switch

};

export default newsCallReducer;