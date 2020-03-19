import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity,StatusBar } from 'react-native';
import { Header, Left, Right, Icon, Body, Title } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ModalSpeak from '../Screens/HomeScreen/ModalSpeak'
export class HeaderContacts extends React.Component {
    showModal = () =>{
        this.props.showModalSpeak()
        ModalSpeak.onSpeechStart()
    }
    render() {
        return (
            <Header style={{ backgroundColor: 'white' }}>
            <StatusBar hidden />
                <Left style={{ flex: 1 }}>
                    <Icon style={{ color: "#e72828" }} name="menu" onPress={() => this.props.navigation.openDrawer()} />
                </Left>
                <Body style={{ flex: 1, alignItems: 'center' }}>
                    <Title style={{ textAlign: 'left', color: "#e72828" , fontFamily:fontF,fontWeight:'bold'}}>Contacts</Title>
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

export default HeaderContacts;
