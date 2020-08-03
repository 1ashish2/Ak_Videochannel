import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text,TextInput, View,FlatList,ActivityIndicator } from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'
import { useNavigation,useTheme } from '@react-navigation/native';
const LittleCard=({name})=>{
    return(
      <View style={{backgroundColor:'#240090',width:160,height:50,borderRadius:5,marginTop:10}}>
          <Text style={{textAlign:'center',color:'white',fontSize:20,marginTop:8}}>{name}</Text>
      </View>  
    )
}
const Explore =()=>{
    const cardData=useSelector(state => {
        return state.cardData
      })
      const {colors}=useTheme();
      const textColor=colors.iconColor;
    return(
        <View style={{flex:1}}>
        <Header />
        <ScrollView>
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
                    <LittleCard name="Gaming"/>
                    <LittleCard name="Trending"/>
                    <LittleCard name="Movies"/>
                    <LittleCard name="Music"/>
                    <LittleCard name="News"/>
                    <LittleCard name="Fashion"/>
            </View>
            <Text style={{margin:8,fontSize:22,color:textColor,borderBottomWidth:1,borderBottomColor:'green'}}>Trending Videos</Text>
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

export default Explore;
