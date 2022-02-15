import React from 'react';
import { Button, StyleSheet, Text, View,ImageBackground,Pressable } from 'react-native';

const HomeScreen = ({navigation}) => {

    const myStyle=StyleSheet.create({
        container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center'
        },
        h1:{
         fontSize:35,
         fontWeight:'900',
         color:'white',
         marginBottom:20,
        
        },
        image: {
            flexDirection:'column',
            justifyContent: "center",
            width:'100%',
            height:'100%',
            alignItems:'center'
          },
          button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#f194ff',
          },
          text: {
            fontSize: 15,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
      });


      const listHendale=()=>{
          navigation.navigate('List')
      }
    
      const asmaulHusnaHendale=()=>{
        navigation.navigate('AsmaulHusna')
      }



    return (
        <View style={myStyle.container}>
        <ImageBackground source={ require('../../assets/images/quran_Bg.jpg') } resizeMode="cover" style={myStyle.image}>
            <View style={{width:'90%'}}>
            <Text style={myStyle.h1}>Welcome to our App</Text>
            </View>
            <View style={{width:'50%',marginBottom:5}}>
            <Pressable 
            style={myStyle.button}
             onPress={
                listHendale
            }>
                <Text style={myStyle.text}>অনুবাদসহ পড়ুন</Text>
            </Pressable>
            
            </View>
            <View style={{width:'50%',margin:0}}>
            <Pressable 
            style={myStyle.button}
             onPress={
                asmaulHusnaHendale
            } 
            >
              <Text style={myStyle.text}>আল্লাহর নামসমূহ</Text>  
            </Pressable >
            
            </View>
        </ImageBackground>
        </View>
    );
};

export default HomeScreen;