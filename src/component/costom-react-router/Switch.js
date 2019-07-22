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

class Switch extends React.Component {
    render() {
        return (
            <Consumer>{
                state => {
                    const pathname = state.location.pathname;
                    const children = this.props.children;
                    for (let i = 0; i < children.length; i++) {
                        const child = children[i];
                        const {path = '', exact = false} = child.props;
                        const match = matchPath(pathname, {path, exact});
                        if (match) {
                            return child;
                        }
                    }
                    return null;
                }
            }</Consumer>
        );
    }
}

export default Switch;