import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StoreContext  from './StoreContext';

export default class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    };

    render () {
        const value = {store: this.props.store};
        return (
            <StoreContext.Provider value={value}>
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}
