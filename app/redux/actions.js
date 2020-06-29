import {
     LOGIN,LOGOUT,LOGIN_SUCCESS
} from './actionsTypes';
 /**
  * 登陆
  * @param {} data 
  */
const login = (data) => {
    console.log(data,'data')
    //已登录
    if (data.token) {
        return {
          type: LOGIN,
          data
        }
    }else{
        // return {
        //     type: LOGIN,
        //     data
        // }
    }
};
 /**
  * 退出登陆
  * @param {} data 
  */
const logOut = (data) => {
    return (dispatch) => {
        dispatch ({
            type: LOGOUT,
            data: data
})
}
};

const detailUser = (data) => {
    return (dispatch) => {
        dispatch ({
            type: LOGIN_SUCCESS,
            data: data
})
}
};
export {
    login,
    logOut,
    detailUser
    
}