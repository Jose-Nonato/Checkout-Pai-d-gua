import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import Cadastro from './components/Cadastro.js';
import Home from './components/Home.js'

export default function App() {
  
    const image = require('./resources/bg-login.jpg')

    const[state, setState] = useState('home')

    console.disableYellowBox = true;

    if(state == 'login'){
      return(
          <View style = {{flex:1}}>

              <StatusBar hidden></StatusBar>

              
              <View>
                <ImageBackground source={image} style = {styles.bg}></ImageBackground>
              </View>

              <View style = {styles.formData}>
                <Text style ={{padding:5}}>Email</Text>
                <TextInput style = {styles.texInput} placeholder = "Coloque seu E-mail aqui"></TextInput>

                <Text style={{padding:5}}>Senha</Text>
                <TextInput style = {styles.texInput} placeholder = "Coloque sua senha aqui"></TextInput>

                <Text style = {{textAlign:'center', fontWeight:'700', fontSize:18,position:'relative', top:20 }}>Seja bem-vindo</Text>

                <TouchableOpacity style = {styles.btnEntrar}>

                  <Text style = {{color:'#fff', textAlign:'center', fontWeight:'700'}}>Entrar</Text>
                  
                </TouchableOpacity>
                
              </View>

              <View>
                <TouchableOpacity onPress={() => setState('cadastro')} style={styles.btnCadastrar}>

                    <Text style ={{color:'#000', fontWeight:'700', textAlign:"center"}}>Cadastrar</Text>

                </TouchableOpacity>
              </View>

            
                <Text style={{textAlign:'center', marginTop:40,fontSize:20, fontWeight:'700',color:'#de0d0d'}}>Checkout Pai 

                <Text style={{color:'#1f64db',fontSize:20, fontWeight:'700'}}> d'égua</Text></Text>
              
                

            
          </View>
      )
    }else if (state == 'cadastro') {
      return(
        <Cadastro cadastrado ={setState}></Cadastro>
      )
    }
    else if (state == 'home') {
      return(
        <Home></Home>
      )
    }
}

const styles = StyleSheet.create({
  textHeader:{
      fontSize:30,
      color:'#c71812',
      textAlign:'center',
      fontWeight:'700'
  },
  textHeader2:{
      fontSize:30,
      color:'#fff',
      textAlign:'center',
      fontWeight:'700'
  },
  bg:{
      flex:1,
      height:250,
      width:'100%',
      resizeMode:'cover'
  },
  formData:{
      padding:30,
      backgroundColor:'#fff',
      width:'80%',
      borderRadius:25,
      marginLeft:45,
      marginTop:'40%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 5
    },
    texInput:{
      padding:10,
      marginBottom:20,
      borderRightColor:'#333',
      borderRadius:10,
      borderWidth:1.5
    },
    btnEntrar:{
      padding:15,
      borderRadius:25,
      backgroundColor:'#ED0B0B',
      position:'relative',
      top:50
    },
    btnCadastrar:{
      width:'80%',
      backgroundColor:'#fff',
      borderRadius:25,
      padding:15,
      marginTop:115,
      marginLeft:45,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 5
    },

      
  }
)
