import React from 'react';
import {Provider} from './context';

class HashRouter extends React.Component {
    state = {
        location: {
            pathname: location.hash.slice(1) || ''
        }
    };

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash || '#/'
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: hash.slice(1)
                }
            });
        });
    }
    render() {
        const value = {
            location: this.state.location,
            history: {
                push(to) {
                    window.location.hash = to;
                },
                replace(to) {
                    window.location.replace(
                        window.location.pathname + window.location.search + '#' + to
                    )
                }
            }
        };

        return (
            <Provider value={value}>{
                this.props.children
            }</Provider>
        );
    }
}

export default HashRouter;