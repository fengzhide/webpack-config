import tpl from './detail.tpl';
import Base from '../base';
class DetailPage extends Base {
    constructor() {
        super();
    }
    render() {
        const containerDom = this.containerDom;
        const detailHtml = tpl({
            text: 'detailPage'
        });
        containerDom.innerHTML = detailHtml;
    }
}

export default DetailPage;