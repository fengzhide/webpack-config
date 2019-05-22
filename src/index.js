import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './page/Detail/Detail';
import Main from './page/Main/Main';
import AsyncPage from './page/AsyncPage';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import _ from 'lodash'
import $ from 'jquery'
// import './index.global.scss';
// import('jquery').then(component => {
//     console.log(component);
// });
const Center = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <Route path="/detail" component={Detail}/>
                <Route path="/async" component={AsyncPage}/>
                <Route path="/main" component={Main}/>
                {/* <Route path="/" render={() => (<Redirect to='/main' />)}></Route> */}
            </HashRouter>
        </React.Fragment>
    );
};
ReactDOM.render(<Center />, document.getElementById('app'));