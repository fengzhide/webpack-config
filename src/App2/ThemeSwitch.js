import React, { Component } from 'react'
import connect from './connect'

class ThemeSwitch extends Component {
    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }
    render() {
        return (
            <div>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

