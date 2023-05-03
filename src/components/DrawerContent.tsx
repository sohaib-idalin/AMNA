import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';

type inconfuncParamType={
    focused:boolean
    color:string
    size:number
}
const inconfunc=({ focused, color, size }:inconfuncParamType):React.ReactNode => {
    return(
        <Ionicons
        size={focused? 30 : 25} name='settings-sharp' color={focused? 'black':'white'} style={styles.iconStyle}
        />
    )
}
const focused_name_props=(name:string,props:any)=> props.state.index==props.state.routeNames.indexOf(name)
const componentsData = [
    { id:1, rootName: 'Settings', label: 'الاعدادات' },
    { id:2, rootName: 'Welcome', label: 'حول التطبيق' },
    { id:3, rootName: 'User_Manual', label: 'دليل الاستخدام' },
  ];


export default function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        {componentsData.map((component) => (
            <DrawerItem
            key={component.id}
            icon={inconfunc}
            label={component.label}
            labelStyle={{
                ...styles.labelStyle,
                fontSize: focused_name_props(component.rootName,props) ? 22 : 20,
                fontWeight: focused_name_props(component.rootName,props) ? 'bold' : 'normal',
                color:focused_name_props(component.rootName,props) ? 'black':'white',
                
            }}
            focused={focused_name_props(component.rootName,props)}
            onPress={() => props.navigation.navigate(component.rootName)}
            activeBackgroundColor={Colors.primaryColorF}
            inactiveBackgroundColor={Colors.primaryColor}
            style={styles.itemStyle}
  
            />
        ))}
        
        <DrawerItem
          icon={inconfunc}
          label="الموقع الرسمي"
          labelStyle={styles.labelStyle}
          onPress={() => {} }
          activeBackgroundColor={Colors.primaryColorF}
          inactiveBackgroundColor={Colors.primaryColor}
          style={styles.itemStyle}

        />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      paddingTop: 20,
    },
    iconStyle:{
        position: "absolute",
        right: 20,
    },
    itemStyle:{
        borderRadius:30,
    },
    labelStyle:{
        marginRight:20,
        color:'white',
        fontSize:18
    }
    
  });