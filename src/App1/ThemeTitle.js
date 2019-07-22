import React, {Component}from 'react';
import StoreContext from './StoreContext';

class ThemeTitle extends Component{
    static contextType = StoreContext;

    state = {
        themeColor: ''
    };
    
    updateThemeColor() {
        const state = this.context.store.getState();
        this.setState({ themeColor: state.themeColor });
    }

    componentDidMount() {
        this.updateThemeColor();
        this.context.store.subscribe(() => this.updateThemeColor())
    }
    render() {
        
        return (
            <div style={{color: this.state.themeColor}}>Title</div>
        );
    }
}

export default ThemeTitle;