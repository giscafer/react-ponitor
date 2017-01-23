
require('es6-promise').polyfill();
import request from 'superagent';
const SERVER_URL = 'http://project.xinong.wang:18080';
//测试用户giscafer的ID,如果需要服务器，建议看项目的后端部分https://github.com/giscafer/Ponitor/，自行注册用户，复制userId
const USER_ID = '5739a47c35827d2c06b5dd01';
class GoodService {

    query(type = '', cb) {
        if (!cb) throw new Error("Bad response from server");
        request
            .post(`${SERVER_URL}/api/good/${type}/${USER_ID}`)
            .end((err, res) => {
                if (err) {
                    return alert(err)
                }
                if (res.body.result_code === -1) {
                    return alert(res.body.error);
                }
                cb(res.body['data']);
            });
    }

    add(url = null, cb) {
        if (!cb) throw new Error("Bad response from server");

        let bodyParams = {
            'userId': USER_ID,
            'url': url
        }
        request
            .post(`${SERVER_URL}/api/good`)
            .send(bodyParams)
            .end((err, res) => {
                if (err) {
                    return alert(err)
                }
                if (res.body.result_code === -1) {
                    return alert(res.body.error);
                }else if(res.body.errors){
                    return alert(res.body.message || res.body.errors);
                }
                cb(res.body);
            });
    }
}

export default new GoodService();
