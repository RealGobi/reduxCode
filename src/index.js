import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

////////////////////REDUX BOOILERPLATE/////////////////////////////
// //STORE 

// //ACTIONS
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// //REDUCER
// const counter = (state = 0, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//     }
// }

// let store = createStore(counter);

// // Display it in the console.
// store.subscribe(() => console.log(store.getState()))

// //DISPATCH
// store.dispatch(increment());



ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>

, document.getElementById('root'));

serviceWorker.unregister();
