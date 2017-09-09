import axios from 'axios';

export const tweet = () => {
    const request = axios.get('/tweet');

    return (dispatch) => {
        request.then(data => {
            dispatch({type:"TWEET", payload:data})
        });
    };
};

export const news = () => {
    const request = axios.get('/news');

    return (dispatch) => {
        request.then(data => {
            dispatch({type:"NEWS", payload:data})
        });
    };
};

export const youtubeAction = () => {
    const request = axios.get('/youtube');
    
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"YOUTUBE", payload:data});
        });
    };
};

export const giphyAction = () => {
    const request = axios.get('/giphy');
    
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"GIPHY", payload:data});
        });
    };
};