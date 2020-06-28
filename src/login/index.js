import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
export class Login extends Component {
    constructor(props){
        super(props)
    }
    gotoHome=()=>{
        console.log(this.props.navigation)
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View>
               
                     <Text> textInComponent </Text>
                <Button onPress={this.gotoHome} title="Go to gotoHome">
                </Button>
            </View>
        )
    }
}

export default Login
