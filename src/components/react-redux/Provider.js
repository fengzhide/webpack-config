import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const StoreContext = React.createContext();

export default class Provider extends Component {
    static propTypes = {
      store: PropTypes.object,
      children: PropTypes.any
    };
  
    render () {
        const value = {store: this.props.store};
        return (
            <StoreContext.Provider value={value}>
                <div>{this.props.children}</div>
            </StoreContext.Provider>
        );
    }
  }