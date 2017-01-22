
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
const SERVER_URL = 'http://project.xinong.wang:18080';
//测试用户ID,如果需要服务器，建议看项目的后端部分https://github.com/giscafer/Ponitor/
const USER_ID = '5739d26da1ad29f0025aac9e';
class GoodService {

    query(type = '', cb) {
        if (!cb) throw new Error("Bad response from server");
        fetch(`${SERVER_URL}/api/good/${type}/${USER_ID}`, {
            method: 'POST'
        }).then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(result => cb(result['data']));
    }
}

export default new GoodService();
