import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Cadastro = (props) =>{

    function userCadastrado(){
        props.cadastrado('home');
        alert('Parabéns você foi cadastrado')
    }
    return(
        <View>

            <View style = {styles.areaFoto}>
            </View>

            <View style={{position:"absolute",width:150, height:150, backgroundColor:'#BCBCBC', left:130, top:100, borderRadius:200}}>
                <AntDesign style ={{position:'absolute', bottom:5}} name="user" size={150} color="black" />
            </View>

            <View style = {styles.formData}>
                <Text style ={{padding:5}}>Email</Text>
                <TextInput style = {styles.texInput} placeholder = "Coloque seu E-mail aqui"></TextInput>

                <Text style={{padding:5}}>CPF</Text>
                <TextInput style = {styles.texInput} placeholder = "Coloque sua senha aqui"></TextInput>

                <Text style={{padding:5}}>Senha</Text>
                <TextInput style = {styles.texInput} placeholder = "Coloque sua senha aqui"></TextInput>

                <TouchableOpacity onPress={() => userCadastrado()} style = {styles.btnCadastrar}>

                  <Text style = {{color:'#fff', textAlign:'center', fontWeight:'700'}}>Cadastrar</Text>
                  
                </TouchableOpacity>
                
              </View>

        </View>
    )
}

const styles = StyleSheet.create({

    areaFoto:{
        position:'relative',
        bottom:200,
        height:400,
        width:400,
        backgroundColor:'#ED0B0B',
        borderRadius:200
    },
    formData:{
        position:'absolute',
        padding:30,
        top:100,
        width:'80%',
        borderRadius:25,
        marginLeft:45,
        marginTop:'40%',
    },
    texInput:{
        padding:10,
        marginBottom:20,
        borderRightColor:'#333',
        borderRadius:10,
        borderWidth:1.5
      },

      btnCadastrar:{
        padding:15,
        borderRadius:25,
        backgroundColor:'#333',
        position:'relative',
        top:50
      },

})

export default Cadastro;