import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const AsmaulHusnaScreen = () => {
    const [Names,setNames]=useState([]);
    fetch('https://api.aladhan.com/asmaAlHusna')
    .then(res=>res.json())
    .then(data=>setNames(data.data))
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:25,padding:10,backgroundColor:'#ffffff'}}>নাম সংখ্যা =:= {Names.length}</Text>
            <FlatList
                data={Names}
                
                renderItem={function ({item}){
                    return(
                    <View key={item.number} style={NameStyle.container}>
                        <Text style={{width:'25%',textAlign:'center',fontSize:16}}>{item.name}</Text>
                        <Text style={{width:'35%',fontSize:16}}>{item.transliteration}</Text>
                        <Text style={{width:'40%',fontSize:16}} >{item.en.meaning}</Text>
                        
                    </View>
                    )
                }}
            />
        </View>
    );
};

export default AsmaulHusnaScreen;

const NameStyle=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',
        borderWidth:1,
        borderColor:'#cccccc',
        width:'100%',
        padding:10,
        marginBottom:3
    },
    nameitem:{
        
        
    }
})