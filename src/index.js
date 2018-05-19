import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    posts: [
        {
            date: new Date().getTime(),
            title: 'Welcome!',
            text: `You can edit this post, or create new ones!. \nEverything will be saved in your browser, so don't worry!`
        }
    ]
};

const store = createStore(rootReducer, initialState,  persistState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
