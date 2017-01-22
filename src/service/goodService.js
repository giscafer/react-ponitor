
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
const SERVER_URL = 'http://project.xinong.wang:18080/';

class GoodService {

    query(type = '', cb) {
        if (!cb) throw new Error("Bad response from server");
        fetch(`${SERVER_URL}/api/good/${type}`)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json=> cb(json));
    }
}

export default new GoodService();
