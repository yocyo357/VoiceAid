import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity,AsyncStorage } from 'react-native';
import { Header, Left, Right, Icon, Body, Title, Image, ActionSheet,Root } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';
global.GLanguage
global.langBUTTONS = ["English", "Filipino",  "Cebuano", "Cancel"];
export class HeaderHome extends React.Component {
    constructor(props){
    super(props);
        this.state = {
            lang:''
        }
    }
    updateChild(text) {
        updateState(text)
    }
    setLang(val){
        if(val == 'English'){
            this.setState({lang: 'ENG'})
        }
        else if(val == 'Filipino'){
            this.setState({lang: 'FIL'})
        }
        else{
            this.setState({lang: 'CEB'})
            GLanguage= 'Visayan'
        }
    }
    componentDidMount = async () => {
        GLanguage = await AsyncStorage.getItem('language')
        this.setLang(GLanguage)
        
    }
    
    render() {
        return (
            <View>
                <StatusBar hidden />
                {/* <ModalSpeak/> */}
                <View style={{ top: 20, right: 46, position: 'absolute' }}>
                    <Text style={{fontFamily:fontF}}>{this.state.lang}</Text>
                </View>
                <View style={{ top: 15, left: 15, position: 'absolute' }}>
                    <Icon size={200} name="menu" onPress={() => this.props.navigation.openDrawer()} />
                </View>
                <Root>
                <View style={{ top: 15, right: 15, position: 'absolute' }}>
                    <TouchableOpacity>
                        <MaterialIcons size={30} name="language" onPress={() => 
                        ActionSheet.show(
                            {
                                options: langBUTTONS,
                                cancelButtonIndex: 3,
                                title: "Select Language"
                            },
                            buttonIndex => {
                                if (buttonIndex != 3){
                                    AsyncStorage.setItem('language', langBUTTONS[buttonIndex]);
                                    this.setLang(langBUTTONS[buttonIndex])
                                    if (langBUTTONS[buttonIndex] == "Cebuano"){
                                        GLanguage='Visayan'
                                    }else{
                                        GLanguage=langBUTTONS[buttonIndex]
                                    }
                                    
                                }
                                
                            }
                            
                        )} />
                    </TouchableOpacity>
                </View>
                </Root>
            </View>
        );
    }
}

export default HeaderHome;
