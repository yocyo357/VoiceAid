import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,StatusBar} from 'react-native';
import {Header,Left,Right,Icon, Body,Title} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ModalSpeak from '../Screens/HomeScreen/ModalSpeak'
export class HeaderHospitalPharma extends React.Component{
    showModal = () =>{
        this.props.showModalSpeak()
        ModalSpeak.onSpeechStart()
    }
    render(){
        return(
                <Header hasTabs style={{backgroundColor:'white'}}>
                <StatusBar hidden />
                    <Left style={{ flex: 1 }}>
                        <Icon style={{ color: "#e72828" }} name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                    <Body style={{alignItems:'center',flex:1 }}>
                        <Title style={{ color: "#e72828",fontFamily:fontF,fontWeight:'bold' }}>Hospital/Pharmacy</Title>
                    </Body>
                    <Right style={{ flex: 1,marginRight:6 }}>
                    <TouchableOpacity onPress={()=>this.showModal()}>
                    <FontAwesome size={24} style={{ color: "#e72828" }}  name="microphone" />
                    </TouchableOpacity>
                    </Right>
                </Header>
        );
    }
}

export default HeaderHospitalPharma;
