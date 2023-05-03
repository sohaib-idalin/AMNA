import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import P1 from '../screens/P1';
import P3 from '../screens/P3';
import P2 from '../screens/P2';
import { Colors } from '../constants/Colors';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function NavS() {
  const getTilte=(route:RouteProp<ParamListBase, string>)=>{
    if(route.name=='P1')return 'شكاية قضائية1'
    if(route.name=='P2')return 'شكاية قضائية2'
    if(route.name=='P3')return 'شكاية قضائية3'
  } 

  return (
    <Stack.Navigator
    screenOptions={({route,navigation})=>({
      headerTitleAlign:'center',
      headerTintColor:'white',
      headerTitle:getTilte(route),
      headerTitleStyle:styles.headerTitleStyle,
      headerStyle:styles.headerStyle,

    })}
    >
      <Stack.Screen name="P1" component={P1} />
      <Stack.Screen name="P2" component={P2} />
      <Stack.Screen name="P3" component={P3} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: Colors.primaryColor,
  },
  headerTitleStyle:{
    color:'white',
    fontWeight:'bold',
    fontSize:30
    
  }

  
});