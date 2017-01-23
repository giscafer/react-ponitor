
import goodService from '../service/goodService'

// Action Type
const FETCH_GOOD = 'FETCH_GOOD'
const ADD_GOOD = 'ADD_GOOD'
const DEL_GOOD = 'DEL_GOOD'

// Action Creator

//父类过滤
const filterGood = (goods, type = 'all') => {
    if (type !== 'all') {
        goods = goods.filter(good => {
            return good.type === type
        });
    }
    return { goods, goodType: type };
}
const fetchGood = (type, dispatch) => {
    goodService.query(type, (goods) => {
        sessionStorage.goods = JSON.stringify(goods);
        dispatch({
            type: FETCH_GOOD,
            payload: filterGood(goods, type)
        })
    })
}
// 设计一次查询所有商品时，前端sessionStorage保存，查询其他类别不走请求
const queryList = type => dispatch => {
    if (type === 'all') {
        fetchGood(type, dispatch)
    } else {
        let goods = sessionStorage.goods && JSON.parse(sessionStorage.goods);
        if (goods && goods.length) {
            dispatch({
                type: FETCH_GOOD,
                payload: filterGood(goods, type)
            })
        }
    }
}

const addGood = url => dispatch => {
    goodService.add(url, good => {
        dispatch({
            type: ADD_GOOD,
            payload: good
        })
    });
}


export default {
    queryList, addGood
}

// 参考网友的写法
// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
    [FETCH_GOOD]: (good, {payload}) => payload,
    [ADD_GOOD]: (state, {payload}) => {
        let goods = sessionStorage.goods && JSON.parse(sessionStorage.goods);
        console.log(state)
        let temp = [...goods, payload];
        return filterGood(temp,payload.type);
    }
}