import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation,useTheme } from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux'

export default function Home() {
  const navigation =useNavigation()
  const {colors}=useTheme()
  const dispatch=useDispatch()
  const currentSelect= useSelector(state => {
    return state.myDarkMode
  })
  //console.log(navigation)
  return (
    <View style={{
      marginTop:Constant.statusBarHeight,
      height:45,
      backgroundColor:colors.headerColor,
      flexDirection:'row',
      justifyContent:'space-between',
      elevation:5,
    }}>
     <View style={{flexDirection:'row',margin:5}}><Entypo name="youtube" size={32} style={{marginLeft:15}} color="red" />
     <Text style={{fontSize:22,marginLeft:5,fontWeight:'bold',color:`${colors.iconColor}`}}>YouTube</Text>
     </View>     
     <View style={{flexDirection:'row',justifyContent:'space-around',width:150 ,marginTop:5}}>
         <Ionicons name="md-videocam" size={32} color={colors.iconColor}
          onPress={()=>dispatch({type:"change_theme",payload:!currentSelect})}
          />
         <Ionicons name="md-search" size={32} color={colors.iconColor}  
           onPress={()=>navigation.navigate('search')}
         />
         <MaterialIcons name="account-circle" size={32} color={colors.iconColor}
         
          />
     </View>
     </View>
  );
}

