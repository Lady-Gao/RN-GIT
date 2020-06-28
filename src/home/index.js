import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Account from "./Account";
import Feed from "./Feed";
import Profile from "./Profile";
export class Home extends Component {
   constructor(props){
       super(props)
       console.log(props,'props')
   }
    
    render() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Account" component={Account} />
          </Tab.Navigator>
    //     <View>
    //     <Text> Account </Text>
    //     <Button onPress={()=>{
    //         this.props.navigation.navigate('Login')
    //     }}  title="Go to gotoHome">
    //     </Button>
    // </View>
        )
    }
}

export default Home
