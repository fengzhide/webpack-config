// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import  './index.global.css';
// import App from './App';
// import App1 from './App1';
// import App2 from './App2';
// import App3 from './App3';

// const reducer = (state = {}, action) => {
//     switch(action.type) {
//         case 'CHANGE_COLOR':
//             return { ...state, themeColor: action.themeColor }
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);


// ReactDOM.render(<App store={store}/>, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from './component/costom-react-router';

function Main() {
    return <div>Main</div>
}

function Detail() {
    return (
        <React.Fragment>
             <div>Detail  <Link to="/new"> to new </Link></div>
        </React.Fragment>
    )
}

class New extends React.Component{
    ref = React.createRef();
    state = {
        show: true
    }
    componentWillUpdate(nextProps, nextState) {
        if (!nextState.show) {
            this.ref.current.style.opacity = 1;
        } else {
            this.ref.current.style.opacity = 0;
        }
    }
    componentDidUpdate(preProps, preState) {
        if (this.state.show) {
            this.ref.current.style.opacity = 0;
        } else {
            this.ref.current.style.opacity = 1;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div ref={this.ref} style={{
                    color: 'red', fontSize: 50,
                    transition: 'opacity 0.5s ease',
                    // opacity: this.state.show ? 1 : 0
                }}>123</div>
                <button onClick={()=>{this.setState({show: !this.state.show})}}>change</button>
            </React.Fragment>
        )
    }
}

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/new" component={New}/>
            </Switch>
        </HashRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById('app'));

