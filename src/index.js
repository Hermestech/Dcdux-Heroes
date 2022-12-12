import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { 
  applyMiddleware,
  compose,
  legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './middlewares'
import rootReducer from './reducers/rootReducer';
import MainLayout from './components/MainLayout';


function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined 
    }
}

const persistedState = loadFromLocalStorage()

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlternative = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlternative(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, persistedState, composedEnhancers);

store.subscribe(() => saveToLocalStorage(store.getState()))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
       <App />
    </MainLayout>
    </Provider>
  </React.StrictMode>
);


