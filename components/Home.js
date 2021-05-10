import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal,TouchableHighlight, TextInput,TouchableOpacity, Image, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Home = () =>{

    const[shop, setShop] = useState([
        {
            id:1,
            supermercado:'Líder Umarizal',
            foto: require('../resources/liderdoca.jpg')
        },
        {
            id:2,
            supermercado:'Mix Atacarejo',
            foto: require('../resources/mix-atacarejo.jpg')
        },
        {
            id:3,
            supermercado:'YYamada',
            foto: require('../resources/yamada.jpg')
        }
    ]);
    const[nome, setNome] = useState('pabloandre_13')
    const [modal, setModal] = useState(false);
    const image = require('../resources/user.png');
    return(
        <ScrollView style={{marginTop:20}}>

        
            <TouchableOpacity onPress={() => setModal(true)}>
                <Ionicons name="menu" size={50} color="#ED0B0B" />
            </TouchableOpacity>
        
          <Modal
          animationType = 'slide'
          transparent={true}
          visible={modal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              

              <TouchableHighlight
                style={{marginTop:30}}
                
              >
                <Text style={styles.textStyle}>Início</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{marginTop:30}}
                
              >
                <Text style={styles.textStyle}>Comerçar compras</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{marginTop:30}}
                
              >
                <Text style={styles.textStyle}>Histórico de compras</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => setModal(false)}
              >
                <Text style={styles.textStyle}>
                <Feather name="x" size={24} color="black" />
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

            <View style={{flex:1, alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Perfil</Text>

                
                    <Image style={styles.userPerfil} source={image}></Image>
                    <View>
                        <Text>{nome}  

                            <TouchableOpacity style={{marginTop:-5}}>
                                <Feather name="edit-3" size={25} color="black" />
                            </TouchableOpacity>

                        </Text>
                    </View>

                    <View style={{marginTop:30}}>
                        <Text style ={{textAlign:'center', fontSize:20, fontWeight:'700'}}>Nome</Text>
                        <Text style={{fontSize:16, opacity:0.5, fontWeight:'bold'}}>Paulo André Magalhões</Text>
                    </View>

                    <View style={{marginTop:30}}>
                        <Text style ={{textAlign:'center', fontSize:20, fontWeight:'700'}}>CPF</Text>
                        <Text style={{fontSize:16, opacity:0.5, fontWeight:'bold'}}>0000000-00</Text>
                    </View>

                    {
                        shop.map((val) =>{
                            return(
                                <View style={styles.supermercados}>

                                    <Image style={{width:300,height:200,borderTopRightRadius:40,borderTopLeftRadius:40}} source={val.foto}></Image>

                                    <View>
                                        <Text style={{fontSize:17, fontWeight:'700', padding:10, textAlign:'center'}}>{val.supermercado}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

            </View>

            <StatusBar style='dark'></StatusBar>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userPerfil:{
        flex:1,
        width:150,
        height:150,
        resizeMode:'cover',
        borderRadius:200
    },
    supermercados:{
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        marginTop:30,
        backgroundColor:'#fff',
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
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
      },
      modalView: {
        position:"relative",
        backgroundColor: 'rgba(245, 78, 66, 1)',
        width:'50%',
        height:'100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        position:'absolute',
        top:0,
        left:180,
        backgroundColor: '#F194FF',
        borderRadius: 100,
        marginBottom:20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
          fontSize:18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
}) 

export default Home;