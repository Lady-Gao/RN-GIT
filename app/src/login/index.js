import React, { Component } from 'react'
import { Text,TextInput, StyleSheet,View,Button } from 'react-native'
import { CommonActions } from '@react-navigation/native'
import {connect} from 'react-redux';
import { login } from "../../redux/actions";
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            passworld:'',
            name:''
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
    login=()=>{
        this.props.dispatch(login(333))
    }
    render() {
        return (
            <View>
                <Text>Username or email address</Text>
              <TextInput  style={styles.TextInput} placeholder=""  value={ this.state.name}  onChangeText={this.onphoneText}></TextInput>
                <Text>Password</Text>
              <TextInput  style={styles.TextInput} placeholder=""  value={ this.state.passworld}  onChangeText={this.onphoneText}></TextInput>
                <Button onPress={this.login} title="登陆">
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({
  counter: state.counter 
})
export default connect(mapStateToProps)(Login);
const styles = StyleSheet.create({
    TextInput:{
        margin:50,
        height: 40, borderColor: 'gray', borderWidth: 1
    }
})