export default {
    urlToJSON: function (url) {
        let result = {};
        let hash = location.hash;
        let query = location.search;
        if (query) {
            query = query.replace(/^\?/, '');
            if (query) {
                result = $.extend(result, this._parse(query));
            }
        }
        if (hash) {
            hash = hash.replace(/^#/, '');
            hash = String.prototype.split.call(hash, '?');
            if (hash[1]) {
                result = $.extend(result, this._parse(hash[1]));
            }
        }
        return result;
    },
    _parse: function (str) {
        let res = {};
        let pairs = str.split('&');
        for (let i = 0, len = pairs.length; i < len; i++) {
            let keyValue = pairs[i].split('=');
            res[keyValue[0]] = decodeURIComponent(keyValue[1]);
        }
        return res;
    },
    jsonToUrl: function (json) {
        if (!json) {
            return '';
        }
        let arr = [];
        let key;
        for (key in json) {
            if (json.hasOwnProperty(key)) {
                arr.push(key + '=' + encodeURIComponent(json[key]));
            }
        }
        return arr.join('&');
    }
};