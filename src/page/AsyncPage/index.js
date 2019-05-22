import AsyncComponent from '../../components/AsyncComponent/AsyncComponent';
export default AsyncComponent(() => import(/* webpackChunkName: "test" */'./AsyncPage'))