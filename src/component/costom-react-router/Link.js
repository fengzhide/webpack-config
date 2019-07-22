import React from 'react';
import Context from './context';

class Link extends React.Component {
    static contextType = Context;

    handleClick(e) {
        e.preventDefault();
        console.log(Context);
        this.context.history.push(this.props.to);
    }
    render() {
        return(
            <a onClick={this.handleClick.bind(this)}>{
                this.props.children
            }</a>
        );
    }
}
Link.contextType = Context;

export default Link;