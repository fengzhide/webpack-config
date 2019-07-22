import React from 'react';
import {Consumer} from './context';
const matchPath = (pathname, options) => {
    const {path, exact = false} = options;
    const match = new RegExp(`^${path}`).exec(pathname);
    if (!match) return null;
    const url = match[0];
    const isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
        path,
        url
    }
};

class Route extends React.Component {
    render() {
        return (
            <Consumer>{
                state => {
                    const {path, component: Component, exact = false} = this.props;
                    const {location, history} = state;
                    const pathname = location.pathname;
                    const match = matchPath(pathname, {path, exact});
                    if (!match) {
                        return null;
                    }
                    const props = {
                        location,
                        history,
                        match
                    }
                    return <Component {...props}></Component>
                }
            }</Consumer>
        );
    }
}

export default Route;