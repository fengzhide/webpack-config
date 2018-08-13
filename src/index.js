import test from './test';
const appDom = document.getElementById('app');

appDom.append('tesst1ssss1');

test();

// HMR, 监听到test.js文件发生变化，执行相应的回调函数，而不是刷新整个页面
if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./test.js', () => {
            test();
        })
    }
}