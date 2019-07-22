import React from 'react';
import StoreContext from './StoreContext';
import ThemeSwitch from './ThemeSwitch';
import ThemeTitle from './ThemeTitle';

const App = (props) => {
    const value = {store: props.store};
    return (
        <StoreContext.Provider value={value}>
            <ThemeTitle/>
            <ThemeSwitch/>
        </StoreContext.Provider>
    );
};

export default App;