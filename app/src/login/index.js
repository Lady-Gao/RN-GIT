import React, { Component } from 'react'
import { Text,TextInput, StyleSheet,View,Button ,Alert} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import {connect} from 'react-redux';
import { login } from "../../redux/actions";
import { basicLogin } from "../../services/GithubServices";
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
        //  username: props.user.login,
         username: 'Lady-Gao',
         password:"gaoyanan1995",
         tfaToken:"",
        }
    }
    /**
     * 跳转首页
     */
    gotoHome=()=>{
        this.props.navigation.dispatch(state => {
            return CommonActions.reset({
              routes:[
                { name: 'Home' }
              ],
              index: 0,
            });
          });
    }
    /**
     * 登陆
     */
  login=  ()=>{
    const { username, password, tfaToken } = this.state
     this._validFields(username, password).then((res,reject)=>{
       res&&this.saveUser(username, password, tfaToken)
      })
       
    }
    saveUser=async (username, password, tfaToken)=>{
      const user = await basicLogin(username, password, tfaToken)
      //存储用户token
      this.props.dispatch(login({
        login: username,
        pwd: password,
        token: user.token
      }))
      this.gotoHome()
    }
    _validFields(username, password) {
     return new Promise((res,reject)=>{
        if (!username || !username.length) {
          Alert.alert(`username is empty`)
          return  reject(false)
        }
    
        if (!password || !password.length) {
          
          Alert.alert(`password is empty`)
          return reject(false)
        }
        return res(true)
       
      })
      
    }
    render() {
        return (
            <View>
                <Text>Username or email address</Text>
              <TextInput  style={styles.TextInput} placeholder=""  value={ this.state.username}  onChangeText={(e)=>this.setState({username:e})}></TextInput>
                <Text>Password</Text>
              <TextInput  style={styles.TextInput} placeholder=""  value={ this.state.password}   onChangeText={(e)=>this.setState({password:e})}></TextInput>
                <Button onPress={this.login} title="登陆">
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({
  user: state.login.user
})
export default connect(mapStateToProps)(Login);
const styles = StyleSheet.create({
    TextInput:{
        margin:50,
        height: 40, borderColor: 'gray', borderWidth: 1
    }
})