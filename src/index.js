import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from './components/react-redux';
import  ThemeSwitch from './components/ThemeSwitch';

import Mock from './util/mock';
const App = () => {
    return (
        <Provider store={store}>
            <ThemeSwitch/>
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));

const mock = new Mock();

mock.use((param, next) => {
    console.log('m1 start');
    next();
    console.log('m1 end');
});

mock.use((param, next) => {
    console.log('m2 start');
    next();
    console.log('m2 end');
});

mock.compose();
