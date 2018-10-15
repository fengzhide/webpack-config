import url from './util/url';

class Router{
    init() {
        this.navigation();
        window.addEventListener('popstate', state => {
            this.navigation();
        })
    }

    navigation () {
        const query = url.urlToJSON();
        const {page = 'main'} = query;
        switch (page) {
            case 'main':
            case 'detail':
                this.go(page);
                break;
            default:
                this.go('main');
                break
        }
    }
    
    go (page) {
        if (this[`${page}Page`]) {
            this[`${page}Page`].init();
        }
        const errorHandler = e => console.log(e);
        switch (page) {
            case 'main':
                import(/* webpackChunkName: "main" */ './page/main/index.js').then(res => {
                    this.renderPage('main', res);
                }).catch(errorHandler);
            break;
            case 'detail': 
                import(/* webpackChunkName: "detail" */ './page/detail').then(res => {
                    this.renderPage('detail', res);
                }).catch(errorHandler);
            break;
        }
    }

    renderPage(page, res) {
        this[`${page}Page`] = new res.default;
        this[`${page}Page`].init();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Router();
        }
        return this.instance;
    }
};


export default Router;