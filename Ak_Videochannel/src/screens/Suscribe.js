import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text,TextInput,Dimensions, View,FlatList,ActivityIndicator } from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'
import { useNavigation,useTheme } from '@react-navigation/native';
const LittleCard=({name})=>{
    return(
      <View style={{backgroundColor:'#240090',height:40,borderRadius:50,marginTop:10,marginLeft:10}}>
          <Text style={{textAlign:'center',color:'white',paddingLeft:15,paddingRight:15,paddingTop:8,fontSize:16}}>{name}</Text>
      </View>  
    )
}
const IconCard=({name})=>{
    const {colors}=useTheme();
    const textColor=colors.iconColor;
    return(
      <View style={{height:100,marginTop:10,marginButtom:10,marginLeft:10}}>
      <View style={{flexDirection:'column'}}>
           <MaterialIcons name="account-circle" size={65} color='#DAAD86' />
           <Text style={{fontSize:18,textAlign:'center',color:textColor,width:Dimensions.get('screen').width/5}}
            ellipsizeMode="tail"
             numberOfLines={1}
           >{name}</Text>
      </View>
           
      </View>  
    )
}
const Suscribe =()=>{
    const cardData=useSelector(state => {
        return state.cardData
      })
      const {colors}=useTheme();
      const textColor=colors.iconColor;
    return(
        <View style={{flex:1}}>
        <Header />
        <ScrollView>
        <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'green'}}>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <IconCard name="funzone"/>
                    <IconCard name="tricks"/>
                    <IconCard name="mjoToon"/>
                    <IconCard name="dance"/>
                    <IconCard name="romantic dream"/>
                    <IconCard name="news"/>
                   
                 </ScrollView>
                <View style={{width:50}}>
                    <Text style={{fontSize:20,textAlign:'center',paddingTop:34,color:textColor=='black'?'blue':'orange'}}>ALL</Text>
                </View>
            </View>
          <View style={{flexDirection:'row',height:60,justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'green'}}>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                 <LittleCard name="All"/>
                    <LittleCard name="Today"/>
                    <LittleCard name="Continue watching"/>
                    <LittleCard name="Unwatched"/>
                    <LittleCard name="Live"/>
                    <LittleCard name="Posts"/>
                    <Text style={{fontSize:18,color:textColor=='black'?'blue':'orange',marginTop:18,marginLeft:10,marginRight:10}}>SETTINGS</Text>
                 </ScrollView>
                    
            </View>
         
            <FlatList 
                data={cardData}
                renderItem={({item})=>{
                    return <Card 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}

                />
        </ScrollView>
            
        </View>
    )
}

export default Suscribe;
