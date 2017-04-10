import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; 
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { createStore } from 'redux';
//let store = createStore(todoApp)
// import reducers from './reducers/index';  
//import { AUTH_USER } from './actions/types';

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
// const store = createStoreWithMiddleware(reducers);


// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('root')
);
