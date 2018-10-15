export default class Base {
    constructor() {
        this.containerDom = document.getElementById('app');
    }
    init () {
        if (this.render) {
            this.render();
        } else {
            throw new Error('need a render method');
        }
    }
}