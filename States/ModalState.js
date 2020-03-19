import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header,Left,Right,Icon} from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import HeaderHome from '../../Headers/HeaderHome'
class ModalState extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State"
        }
        updateState = updateState.bind(this)
    }
    render(){
        return(
            <View>
                <HeaderHome ModalSpeakVisible={this.state.ModalSpeakVisible}/>
            </View>
        );
    }
}

export default ModalState;
