import React from 'react';

function AsyncLoader(importComponent, opt={}) {
    const {componentName = 'default'} = opt;
    return class AsyncComponent extends React.Component {
        state = {
            Component: null
        }
        
        componentDidMount() {
            importComponent().then(res => {
                setTimeout(() => {
                    this.setState({
                        Component: res[componentName]
                    });
                }, 1000);
            })
        }

        render() {
            const {Component} = this.state;
            if (!Component) {
                return <div>loading</div>;
            } else {
                return <Component {...this.props}/>;
            }
        }
    }
}

export default AsyncLoader;