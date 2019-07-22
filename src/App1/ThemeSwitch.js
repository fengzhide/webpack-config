import React, { Component } from 'react';
import StoreContext from './StoreContext';

class ThemeSwitch extends Component {

    static contextType = StoreContext;
    state = {
        themeColor: ''
    };
    handleSwitchColor(color) {
       this.context.store.dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }

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
            <div>
                <button
                    style={{ color: this.state.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button
                    style={{ color: this.state.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        );
    }
}

export default ThemeSwitch;