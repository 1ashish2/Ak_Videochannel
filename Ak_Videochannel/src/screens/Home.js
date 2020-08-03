import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet,ScrollView, Text, View,FlatList } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'
 const Home=()=>{
  
  const cardData=useSelector(state => {
    return state.cardData
  })
  //const data=cardData
  //const [videolist,setViedolist]=useState([]);
  //setViedolist(cardData)
  
  
  //console.log(cardData.length)
  return (
  
    <View style={{flex:1}}>
     <Header />
     {/* <ScrollView>
     <Card />
     <Card />
     <Card />
     <Card />
     </ScrollView>
      */}
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
     </View>
  );
}
export default Home;

