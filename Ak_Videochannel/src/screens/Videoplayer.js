import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text,TextInput,Dimensions, View,FlatList,ActivityIndicator } from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import Header from '../components/Header'
const Videoplayer =({route})=>{
    const{videoId,title}=route.params 
    return(
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <Header />
            <View style={{width:'100%',height:200}}>
            <WebView 
               source={{uri:`https://www.youtube.com/embed/${videoId}`}} 
               javaScriptEnabled={true}
               domStorageEnabled={true}
            />

            </View>
            <Text style={{fontSize:20,width:Dimensions.get('screen').width -50,
            margin:9}}
            numberOfLines={2}
            ellipsizeMode='tail'
            >{title}</Text>
            <View 
              style={{borderBottomWidth:1}}  

            />
        </View>
    )
}

export default Videoplayer;
