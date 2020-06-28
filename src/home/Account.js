import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { CommonActions } from '@react-navigation/native'
export class Account extends Component {
    constructor(props){
        super(props)
    }
    /**
     * 退出登陆
     */
    loginOut=()=>{
        this.props.navigation.dispatch(state => {
            return CommonActions.reset({
              routes:[
                { name: 'Login' }
              ],
              index: 0,
            });
          });
    }
    render() {
        return (
            <View>
                <Text> Account </Text>
                <Button onPress={this.loginOut}  title="Go to gotoHome">
                </Button>
            </View>
        )
    }
}

export default Account
