
import 'react-native-gesture-handler';
import React from 'react'
import {View,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
    const HomeScreen = ()=>{
        return (
        <View>
            <Text>Home screen</Text>
            <Text>Home screen</Text>
        </View>
        
    )}
    const Sales = ()=>{return <View>
        <Text>Sales screen</Text>

    </View>}
    const Credit = ()=>{return <View><Text>Credit screen</Text></View>}
    const Expenses = ()=>{return <View><Text>Expenses screen</Text></View>}
  return (
    <NavigationContainer>
              <Drawer.Navigator> 
              <Drawer.Screen name="Home"  component={HomeScreen}  options={{ headerShown: false }}  />
              <Drawer.Screen name="Sales"   component={Sales} options={{ headerShown: false }}  />
              <Drawer.Screen name="Credit"  component={Credit}  options={{ headerShown: false }}  />
              <Drawer.Screen name="Expenses"  component={Expenses}  options={{ headerShown: false }}  />
   
      </Drawer.Navigator>
    </NavigationContainer>)
}