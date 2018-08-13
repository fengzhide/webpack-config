import test from './test';
import './index.global.scss';
const appDom = document.getElementById('app');

appDom.append('test');
test();

// 异步加载
appDom.addEventListener('click', () => {
    import(/* webpackChunkName: "asyncLoad"*/ './aysncLoad').then(async => {
        async.default();
    });
});


// HMR, 监听到test.js文件发生变化，执行相应的回调函数，而不是刷新整个页面
// if (process.env.NODE_ENV === 'development') {
//     if (module.hot) {
//         module.hot.accept('./test.js', () => {
//             test();
//         })
//     }
// }