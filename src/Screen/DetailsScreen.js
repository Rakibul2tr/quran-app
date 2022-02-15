import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList,ActivityIndicator  } from 'react-native';

const DetailsScreen = ({navigation, route}) => {
    const { itemId,suraName } = route.params;
    const parseNum=parseInt(itemId);
    // console.log(typeof parseNum);
    const [Details,setDetails]=useState([])

    fetch(`https://alquranbd.com/api/tafheem/suraData/${parseNum}/1`)
    .then(res=>res.json())
    .then(data=>setDetails(data))

    return (
        <View >
            <View style={ditailStyle.viweBes}>
                <Text style={ditailStyle.besmilla}>সুরা: {suraName}</Text>
                <Text style={ditailStyle.suraNamber}>মোট আয়াত : {Details.length} ,</Text>
                <Text style={ditailStyle.suraNamber}>সুরা নাম্বার : {parseNum} ,</Text>
                <Text style={ditailStyle.besmilla}>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
            </View>
           {
               Details.length==0?<ActivityIndicator size="large" color="#00ff00" />:
               <FlatList 
               data={Details}
               renderItem={function({item }){
                   return (<View style={ditailStyle.viweField}>
                       <View>
                           <Text style={ditailStyle.ayath}>{item.ayah_no}</Text>
                       </View>
                       <View style={{paddingRight:10}}>
                       <Text style={ditailStyle.Item}>{item.ayah_text}</Text>
                       <Text style={ditailStyle.Item}>{item.bn[0].token_trans}</Text>
                       </View>
                   </View >);
               }}
               
               />
           }
            
        </View>
    );
};

export default DetailsScreen;

const ditailStyle=StyleSheet.create({
    container:{
        
        
    },
    
    Item:{
        fontSize:20,
       padding:15,
       marginRight:20
        
    },
    viweBes:{
        borderBottomWidth:1,
        borderBottomColor:'#444444',
        backgroundColor:'#ffffff',
        padding:30,
        textAlign:'center'
    },
   
    besmilla:{
        fontSize:25,
        textAlign:'center',
    },
    viweField:{
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        flexDirection: 'row',
        alignItems:'center'
    },
    ayath:{
        width:40,
        height:40,
        borderRadius:100,
        backgroundColor:'#cccccc',
        textAlign:'center',
        lineHeight:40,

    },
    suraNamber:{
        fontSize:15,
        textAlign:'center',
    }
})