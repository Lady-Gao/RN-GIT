import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export class Account extends Component {
    constructor(props){
        super(props)
    }
    gotoHome=()=>{
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View>
                <Text> Account </Text>
                <Button onPress={()=>{
                    this.props.navigation.navigate('Login')
                }}  title="Go to gotoHome">
                </Button>
            </View>
        )
    }
}

export default Account
