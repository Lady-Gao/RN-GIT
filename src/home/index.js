import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons//FontAwesome'
const Tab = createBottomTabNavigator();
import Account from "./Account";
import Feed from "./Feed";
import Profile from "./Profile";
export class Home extends Component {
   constructor(props){
       super(props)
       this.props.route.index=0
   }
    render() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed}  
            options={{
              tabBarLabel: 'Feed',
              tabBarIcon: ({ color, size }) => (
                <Icon name={'windows'} size={size} 
                color={color}/>
              ), 
            }}
             /> 
            <Tab.Screen name="Profile" component={Profile} 
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Icon name={'instagram'} size={size} 
                color={color}/>
              ), 
            }}/>
            <Tab.Screen name="Account" component={Account} 
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color, size }) => (
                <Icon name={'play'} size={size} 
                color={color}/>
              ), 
            }}/>
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
