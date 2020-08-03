import React from 'react';
import { StyleSheet,Image, Text, View,TouchableOpacity ,Dimensions} from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation,useTheme } from '@react-navigation/native';

const Card=(props)=>{
 
  const navigation=useNavigation();
  const {colors}=useTheme();
  const textColor=colors.iconColor;
  //console.log(textColor)
  return(
    <TouchableOpacity onPress={()=>navigation.navigate('videoplayer',{
      videoId:props.videoId,
      title:props.title
    })} >

    
      <View style={{marginBottom:10}} 
       
      >
        <Image 
         source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
         style={{width:'100%',height:200}}

         />
         <View style={{flexDirection:'row',margin:5}}>
         <MaterialIcons name="account-circle" size={40} color={textColor} />
         <View style={{marginLeft:10}}>
             <Text style={{fontSize:20,color:textColor,width:Dimensions.get('screen').width - 100}}
             ellipsizeMode="tail"
             numberOfLines={2}
             >{props.title}</Text>
             <Text style={{color:textColor}}>{props.channel}</Text>
         </View>
            
         </View>
      </View>
      </TouchableOpacity>
  )
}

export default Card