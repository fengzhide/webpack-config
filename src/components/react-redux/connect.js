import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StoreContext } from './Provider';
const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextType = StoreContext;
        state = {
            allProps: {}
        }

        componentWillMount() {
            const { store } = this.context;
            this._updateProps();
            store.subscribe(() => this._updateProps());
        }

        _updateProps() {
            const { store } = this.context

            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};

            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props): {};
            
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            });
        }

        render() {
            return <WrappedComponent {...this.state.allProps} />;
        }
    }
    return Connect
}
export default connect;