import tpl from './main.tpl';
import Base from '../base';
import Router from '../../router';
import url from '../../util/url';
class MainPage extends Base{
    constructor() {
        super();
    }
    render() {
        const containerDom = this.containerDom;
        const mainHtml = tpl({
            text: 'mainPage'
        });
        containerDom.innerHTML = mainHtml;
        this.bind();
    }
    bind() {
        this.containerDom.querySelector('.main .to-detail').addEventListener('click', () => {
            const query = url.urlToJSON();
            query.page = 'detail';
            window.history.pushState({}, '', '?' + $.param(query));
            Router.getInstance().navigation();
        })
    }
}

export default MainPage;