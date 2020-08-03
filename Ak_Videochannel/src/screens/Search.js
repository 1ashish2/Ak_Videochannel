import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text,TextInput, View,FlatList,ActivityIndicator } from 'react-native';
import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Minicard from '../components/Minicard'
import Constant from 'expo-constants'
import { useTheme } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyC894ZVtYwcKv0xwps4CRFdOBIVeiEzdbQ
const Search=({navigation})=>{

    //console.log(navigation)
    //here we r using destruction as a props to access navigation functions without destructuring we cant access the navigation function
    const {colors}=useTheme();
    const textColor=colors.iconColor; 
    
    const [value,setValue]=useState();
    //const [minicarddata,setMinicardata]=useState(); bcoz we r using redux store hving initial state as empty array
    const minicarddata = useSelector(state =>{
        return state.cardData
    })
    //i want to share array data to globally to communicate search screen data to home screen data so we are using redux
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false);
    const fetchData=()=>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&type=video&key=AIzaSyC894ZVtYwcKv0xwps4CRFdOBIVeiEzdbQ`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false)
            dispatch({type:'add',payload:data.items})
            
        })
    }
  return(
      <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
        <View style={{padding:5,flexDirection:'row',elevation:5,backgroundColor:colors.headerColor,justifyContent:'space-around'}}>
        <Ionicons name="md-arrow-back" style={{color:textColor}} size={32} 
            onPress={()=>navigation.goBack()}
        />
        <TextInput
        style={{width:"70%",backgroundColor:'#e6e6e6'}}
          value={value} 
          onChangeText={(text)=>setValue(text)}
         />
         <Ionicons 
         name="md-send"
         size={32}
         style={{color:textColor}}
         onPress={()=>fetchData()}
          />
        </View>

        {/* <ScrollView>
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />

        </ScrollView> */}
       {loading ? <ActivityIndicator style={{marginTop:10}} size="large" color="red" />:null}
       <FlatList 
        data={minicarddata}
        renderItem={({item})=>{
            return <Minicard 
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
            />
        }}
       keyExtractor={item=>item.id.videoId}

       />
        
       
      </View>
  )
}

export default Search;