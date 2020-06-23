import React from 'react';
import ReactDOM from 'react-dom';
// redux configuration - Provider is a named export, and is a component, by convention components begin with a capital letter
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

//pass the Provider a single prop called store, the store will be the result of calling createStore and passing in the reducers
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root')
);