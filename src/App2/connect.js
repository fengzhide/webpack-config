import React, { Component } from 'react';
import StoreContext from './StoreContext';
// connect(mapStateToProps, mapDispatchToProps)(UIComponent);
const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
    class Connect extends Component {
        static contextType = StoreContext;
        state = {
            allProps: {}
        }

        componentWillMount() {
            const { store } = this.context;
            this.updateProps();
            store.subscribe(() => this.updateProps());
        }

        updateProps() {
            const { store } = this.context
            // 处理 mapStateToProps
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
            // 处理 mapDispatchToProps
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