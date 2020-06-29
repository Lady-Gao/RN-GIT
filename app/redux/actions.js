import {
     LOGIN,LOGOUT
} from './actionsTypes';

 /**
  * 登陆
  * @param {} data 
  */
const login = (data) => {
    return (dispatch) => {
        dispatch ({
            type: LOGIN,
            data: {data}
        })
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


export {
    login,
    logOut
    
}