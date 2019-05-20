import Router from './router'
// 异步加载
// appDom.addEventListener('click', () => {
//     // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
//     import(/* webpackChunkName: "asyncLoad"*/ './aysncLoad').then(async => {
//         async.default();
//     });
// });
const router = Router.getInstance();
router.init();

var s = new Set();
s.add(1);

// HMR, 监听到test.js文件发生变化，执行相应的回调函数，而不是刷新整个页面
// if (process.env.NODE_ENV === 'development') {
//     if (module.hot) {
//         module.hot.accept('./test.js', () => {
//             test();
//         })
//     }
// }