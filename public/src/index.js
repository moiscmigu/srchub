import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './Reducer/allReducers';


import thunk from 'redux-thunk';


import App from './Components/App.jsx';
import News from './Components/News.jsx';
import Youtube from './Components/Youtube.jsx';
import Giphy from './Components/Giphy.jsx';
import Header from './Components/Header.jsx';
const store = createStore(Reducer, applyMiddleware(thunk));


 

render(
    <Provider store = {store}>
         
        <div className="container">
            <div className='row' >
                <div className='col-md-12 col-xs-12 col-sm-12' >
                    <Header />
                </div>

            </div>
            <div className='row' >
                <div className='col-md-12 col-xs-12 col-sm-12' >
                    <App/>
                </div>

            </div>
            <div className='row' >
                <div className='col-md-12 col-xs-12 col-sm-12' >
                <Giphy/>
                </div>

            </div>
            <div className='row' >
                <div className='col-md-12 col-xs-12 col-sm-12' >
                <News/>
                </div>

            </div>
            
           
        </div>
        
    </Provider>,
    
    document.getElementById('root'))