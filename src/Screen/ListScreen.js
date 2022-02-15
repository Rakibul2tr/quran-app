import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View,ActivityIndicator } from 'react-native';

const ListScreen = ({navigation}) => {
    const [SuraData,setSuraData]=useState([])
    fetch('https://alquranbd.com/api/tafheem/sura/list')
    .then(res=>res.json())
    .then(data=>setSuraData(data))



    const detailsHendal=(id,name)=>{
        navigation.navigate('Detail',{
            itemId:id,
            suraName:name
        });
        

    }
    return (
        <View>
            <View>
                <Text style={listStyle.allsuraNsme}>সুরার নাম সমূহ</Text>
            </View>
           {
               SuraData.length==0?<ActivityIndicator size="large" color="#00ff00" />:
               <FlatList 
               data={SuraData}
               renderItem={function({item }){
                   return (<View style={listStyle.flexText}>
                       <Text style={listStyle.Item_1}>{item.id}-</Text>
                       <Text onPress={()=>detailsHendal(item.id,item.name)} style={listStyle.Item}>{item.name}</Text>
                   </View>);
               }}
               />
           }
        </View>
    );
};

export default ListScreen;
const listStyle=StyleSheet.create({

    allsuraNsme:{
        padding:30,
        fontSize:25,
        textAlign:'center'
    },
    flexText:{
        flexDirection:'row',
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'black',
        backgroundColor:'#cccccc',
        marginBottom:1,
        padding:15,
    },
    Item_1:{
        fontSize:20,
        width:'15%',
        marginRight:10
    },
    Item:{
        fontSize:20,
        width:'85%'
    }
})