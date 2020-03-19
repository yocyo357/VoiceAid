import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar,AsyncStorage,} from 'react-native';
import { Header, Left, Right, Icon, Body, Title,ActionSheet,  } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FirstAid from '../Screens/FirstAidScreen/FirstAid'
import ModalSpeak from '../Screens/HomeScreen/ModalSpeak'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export class HeaderFirstAid extends React.Component {
    // showModalSpeak(){
    //     props.setState({ ModalSpeak: !this.props.ModalSpeak})
    //     alert(this.props.ModalSpeak)
    //  }
    showModal = () =>{
        this.props.showModalSpeak()
        ModalSpeak.onSpeechStart()
        // alert(this.props.ModalState())
    }
    render() {
        return (
            <Header style={{ backgroundColor: 'white' }}>
                <StatusBar hidden />
                <Left style={{ flex: 1 }}>
                    <Icon style={{ color: "#e72828" }} name="menu" onPress={() => this.props.navigation.openDrawer()} />
                </Left>
                <Body style={{ flex: 1, alignItems: 'center' }}>
                    <Title style={{ textAlign: 'left', color: "#e72828",fontFamily:fontF,fontWeight:'bold' }}>First Aid</Title>
                </Body>
                <Right style={{ flex: 1, marginRight: 6 }}>
                <TouchableOpacity style={{marginRight: 15}}>
                        <MaterialIcons size={25} name="language" onPress={() => 
                        ActionSheet.show(
                            {
                                options: langBUTTONS,
                                cancelButtonIndex: 3,
                                title: "Select Language"
                            },
                            buttonIndex => {
                                if (buttonIndex != 3){
                                    AsyncStorage.setItem('language', langBUTTONS[buttonIndex]);
                                    if (langBUTTONS[buttonIndex] == "Cebuano"){
                                        GLanguage='Visayan'
                                    }else{
                                        GLanguage=langBUTTONS[buttonIndex]
                                    }
                                    this.props.changeLang()
                                }
                                
                            }
                            
                        )} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.showModal()}>
                        <FontAwesome size={24} style={{ color: "#e72828" }} name="microphone" />
                    </TouchableOpacity>
                </Right>
            </Header>
        );
    }
}

export default HeaderFirstAid;
