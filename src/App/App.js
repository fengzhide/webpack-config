import React from 'react';
import { Provider } from 'react-redux';
import ThemeSwitch from './ThemeSwitch';
import ThemeTitle from './ThemeTitle';

const App = (props) => {
    return (
        <Provider store={props.store}>
            <ThemeTitle />
            <ThemeSwitch />
        </Provider>
    )
}

export default App;