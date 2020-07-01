import {combineReducers} from 'redux'
import {
    LOGIN,
    LOGOUT,LOGIN_SUCCESS
} from './actionsTypes';

const initialLogin = {
    user: {
      login: null,
      token: null,
      pwd: null,
      avatar: null,
      userId: null,
      url: null,
    },
    loading: false
  }
function login(state = initialLogin, action) {
    switch (action.type) {
        //登陆
        case LOGIN:
            return { ...state, user: { ...state.user, ...action.data }}
        //已登陆
        case LOGIN_SUCCESS:
            return { ...state, user: { ...state.user, ...action.data }}
        //退出登陆
        case LOGOUT:
           return { ...state, user: { ...state.user, ...action.user }, loading: false}
        default:
            return state;
    }
  }
function counter(state = initialLogin, action) {
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
    login: login,
    counter: counter,
});

export default combinedReducer;