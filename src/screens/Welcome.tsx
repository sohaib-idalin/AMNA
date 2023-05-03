import { View, Text, Animated, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Colors } from '../constants/Colors';

export default function Welcome({navigation}:any) {
    const titleOpacity = useRef(new Animated.Value(0)).current;
    const descriptionPosition = useRef(new Animated.ValueXY({ x: 200, y: 0 })).current;
    const imagePosition = useRef(new Animated.ValueXY({ x: -200, y: 0 })).current;
    const iconesPosition = useRef(new Animated.ValueXY({ x: 0, y: 200 })).current;
  
    const logos=[
        {id:1,source:require(`../../assets/logos/logo1.png`)},
        {id:2,source:require(`../../assets/logos/logo2.png`)},
        {id:3,source:require(`../../assets/logos/logo3.png`)},
        {id:4,source:require(`../../assets/logos/logo4.png`)},
        {id:5,source:require(`../../assets/logos/logo5.png`)},
        {id:6,source:require(`../../assets/logos/logo6.png`)},
    ]


    useEffect(() => {
       
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
  
      
      Animated.timing(imagePosition, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }).start();
  
  
      Animated.timing(descriptionPosition, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }).start();
  
  
      Animated.timing(iconesPosition, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, []);
  

    return (
  
      <View style={styles.container}>
          <Animated.View style={[styles.titleView, { opacity: titleOpacity }]}>
              <Text style={styles.titleText}>
              تطبيق آمنة
              </Text>
          </Animated.View>
          <View style={styles.bodyView}>
              <Animated.View style={[styles.imageView, { transform: imagePosition.getTranslateTransform() }]}>
                <Image 
                  source={require('../../assets/images/image1.jpg')}
                  resizeMode='stretch'
                  style={styles.image}
                />
              </Animated.View>
              <Animated.View style={[styles.descriptionView, { transform: descriptionPosition.getTranslateTransform() }]}>
                <Text style={styles.descriptionText}>
                تطبيق آمنة هو تطبيق يساعد النساء في العثور بسهولة على المستندات الرسمية المطلوبة من الدوائر الحكومية، دون الحاجة إلى مستوى دراسي محدد. يوفر التطبيق واجهة بسيطة و سهلة الاستخدام للبحث عن المستندات الرسمية المتعلقة بالقضايا المتعلقة بالحالة المدنية و الصحة و التعليم والعمل و غيرها من المجالات. كما يتيح التطبيق إمكانية تحميل         و حفظ المستندات بشكل آمن               و مرتب للرجوع إليها في أي وقت.
                </Text>
              </Animated.View>
          </View>
          <Animated.View style={[styles.buttonView, { opacity: titleOpacity }]}>
              <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeNav')}}>
                <Text style={styles.buttonText}>تصفح</Text>
              </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.iconesView, { transform: iconesPosition.getTranslateTransform() }]}>
            {logos.map((logo) => (
                <Image 
                key={logo.id}
                source={logo.source}
                resizeMode='stretch'
                style={styles.icone}
                />
            ))}
            
  
          </Animated.View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    },
    titleView:{
      flex:0.7,
      marginTop:15,
      alignItems:'center',
      justifyContent:'center',
  
    },
    titleText:{
      color:Colors.primaryColor,
      fontWeight:'bold',
      fontSize:50,
    },
    bodyView:{
      flex:2.7,
      flexDirection:'row',
    },
    imageView:{
      flex:1,
    },
    image:{
      width:'100%',
      height:'100%',
    },
    descriptionView:{
      flex:1.7,
      margin:5,
      borderRadius:20,
      borderColor:Colors.primaryColor,
      borderWidth:5,
      alignItems:'center',
      justifyContent:'center'
    },
    descriptionText:{
      color:'black',
      margin:6,
      fontSize:16.3,
      fontWeight:'bold',
      textAlign:'justify',
  
    },
    buttonView:{
      flex:0.6,
      alignItems:'center',
      marginTop:7
  
    },
    button:{
      backgroundColor:Colors.primaryColor,
      borderRadius:25,
    },
    buttonText:{
      color:'white',
      margin:5,
      marginHorizontal:25,
      fontSize:22,
      fontWeight:'bold'
    },
    iconesView:{
      flex:1.3,
      flexDirection:'row',
      flexWrap: 'wrap',
      alignItems:'center',
      justifyContent:'center'
      
    },
    rowView:{
      flexDirection:'row',
    },
    icone:{
      width:70,
      height:70,
      marginHorizontal:5
    },
  });
