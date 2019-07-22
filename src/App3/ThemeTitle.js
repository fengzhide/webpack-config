import React from 'react';
import {connect} from './costom-react-redux';

class ThemeTitle extends React.Component {

    render() {
        return (
            <div style={{color: this.props.themeColor}}>Title</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(ThemeTitle);