import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen() {
//   console.log(this,'this')
//   function navigator(){
//     console.log(888)
//   }
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button onPress={navigator}  title="Go to gotoHome">
//                 </Button>
//     </View>
//   );
// }


const Stack = createStackNavigator();
import Home from "./src/home";
import Login from "./src/login";
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;