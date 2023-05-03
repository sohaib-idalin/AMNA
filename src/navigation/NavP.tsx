
import 'react-native-gesture-handler';
import React from 'react'
import {View,Text,Button, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNav from './HomeNav';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';
import User_Manual from '../screens/User_Manual';
import DrawerContent from '../components/DrawerContent';
import { Colors } from '../constants/Colors';


const Drawer = createDrawerNavigator();

export default function NavP() {

  return (
    <NavigationContainer>
              <Drawer.Navigator
              initialRouteName='Welcome'
                screenOptions={({route,navigation})=>({
                headerShown:(route.params as any)?.disableheader ? false : true,
                swipeEnabled: (route.params as any)?.disableheader ? false : true,
                overlayColor:'#000a',
                headerTitle:'تطبيق آمنة',
                headerTitleAlign:'center',
                headerTintColor:'white',
                headerTitleStyle:styles.headerTitleStyle,
                headerStyle:styles.headerStyle,
                drawerStyle:styles.drawerStyle,
                
                
                
              })}
              backBehavior='firstRoute'
              drawerContent={DrawerContent}
              > 
              <Drawer.Screen  name="HomeNav"  component={HomeNav}  />
              <Drawer.Screen name="Welcome"  component={Welcome}  />
              <Drawer.Screen name="User_Manual"  component={User_Manual}  />
              <Drawer.Screen name="Settings"   component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>)
}

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: Colors.primaryColor,
  },
  drawerStyle:{
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    paddingTop:10
  },
  headerTitleStyle:{
    color:'white',
    fontWeight:'bold'
    
  }

  
});