import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { CommonActions } from '@react-navigation/native'
export class Login extends Component {
    constructor(props){
        super(props)
    }
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
    render() {
        return (
            <View>
               
                     <Text> textInComponent </Text>
                <Button onPress={this.gotoHome} title="登陆">
                </Button>
            </View>
        )
    }
}

export default Login
