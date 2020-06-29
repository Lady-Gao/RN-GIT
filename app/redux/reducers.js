import {combineReducers} from 'redux'
import {
    LOGIN,
    LOGOUT
} from './actionsTypes';

// // 原始默认state
const defaultState = {
    userInfo: {userInfo:{}},
    language: 0,//语言标识 0 中文 1 英文
    themeName: 3, //主题标识
    historyList:[],
    carInfo:{},
    logOut:false,//是否退出当前账号
}

function counter(state = defaultState, action) {
    console.log(action,'action.type counter')
    let obj={}
    switch (action.type) {
        //登陆
        case LOGIN:
            return {
                ...state, userInfo: action.data,logOut:false
            };
        //退出登陆
        case LOGOUT:
            return {
                ...state, logOut: action.data
            };
        default:
            return state;
    }
}
 






const combinedReducer = combineReducers({
    counter: counter,
});

export default combinedReducer;