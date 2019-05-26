
function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }
    if (funcs.length === 1) {
      return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
  }
  

class Mock {
    constructor() {
        this.middlewares = [];
    }

    use(fn) {
        this.middlewares.push(fn);
    }

    compose() {
        const ctx = '';
        const dispatch = index => {
            if (index === this.middlewares.length) {
                return;
            }
            let fn = this.middlewares[index];
            return fn(ctx, () => {
                return  dispatch(index + 1);
            });
        }
        return dispatch(0);
    }
}

export default Mock;