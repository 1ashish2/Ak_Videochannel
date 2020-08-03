import React from 'react';
import { StyleSheet,Image, Text, View ,Dimensions,TouchableOpacity} from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { useNavigation,useTheme } from '@react-navigation/native';


const Minicard=(props)=>{
    const navigation=useNavigation();
    const {colors}=useTheme();
    const textColor=colors.iconColor;
  return(
      <TouchableOpacity onPress={()=>navigation.navigate('videoplayer',{
        videoId:props.videoId,
        title:props.title
      })}>
      <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
          <Image 
         source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
         style={{width:'45%',height:100}}

         />
         <View style={{paddingLeft:10}}>
             <Text style={{fontSize:18,color:textColor,width:Dimensions.get('screen').width/2}}
             ellipsizeMode='tail'
             numberOfLines={3}
             >{props.title}</Text>
             <Text style={{fontSize:12,color:textColor,width:Dimensions.get('screen').width/2}}
              ellipsizeMode='tail'
             numberOfLines={1}
             >{props.channel}</Text>
         </View>
      </View>
      </TouchableOpacity>
  )
}

export default Minicard;