import axios from 'axios';

export const tweet = (search) => {
    const request = axios.post('/tweet', {tweet:search});

    return (dispatch) => {
        request.then(data => {
            dispatch({type:"TWEET", payload:data})
        });
    };
};

export const news = (search) => {
    const request = axios.post('/news', {news:search});

    return (dispatch) => {
        request.then(data => {
            dispatch({type:"NEWS", payload:data})
        });
    };
};

export const youtubeAction = (search) => {
    const request = axios.post('/youtube', {vids:search});
    
    return (dispatch) => {
        request.then(data => {
            dispatch({type:"YOUTUBE", payload:data});
        });
    };
};

export const giphyAction = (userSearch) => {
    const request = axios.post('/giphy', {search:userSearch});
    console.log('text in Action', userSearch);
    return (dispatch) => {
        request.then(data => {
            console.log('the giphy data', data);
            dispatch({type:"GIPHY", payload:data});
        });
    };
};