import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';
import App from './App';

import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <Provider store={ store } >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>   
), document.getElementById('root'));

registerServiceWorker();
