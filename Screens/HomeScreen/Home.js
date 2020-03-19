import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image,Text, ImageBackground, PermissionsAndroid, Alert,Dimensions, BackAndroid,BackHandler } from 'react-native';
import { Header, Left, Right, Icon, Title, Body, Button, Root, ActionSheet, } from 'native-base'
import HeaderHome from '../../Headers/HeaderHome'
import MicToggleButton from './MicToggleButton'
import Permissions from 'react-native-permissions'
import Voice from 'react-native-voice';
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, LinesLoader } from 'react-native-indicator';
const qwe = ""
var {height, width} = Dimensions.get('window');
global.Qtitle=''

class Home extends Component {
    static navigationOptions = {
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            listening: false
        };
    }
    state = {
        locationPermission: ""
    }
    toggleSpeak() {
        this.setState({ listening: !this.state.listening })
    }
    componentWillMount() {
        console.disableYellowBox = true
        // alert(MicToggleButton.props.results)\
        
        if (Platform.OS == 'android') {
            PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.CALL_PHONE, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]).then((result) => {
                console.log('result', result);
            })
        }
    }
    
    render() {
        return (
            // <Root>
                <ImageBackground source={require('../../assets/Background.jpg')} style={{
                    flex: 1
                }}>
                    <View style={{ flex: 1 }}>
                        <HeaderHome navigation={this.props.navigation} />
                        <View style={{ marginTop: 130, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/LOGOnew.png')} style={{ height: 140, width: 300 }} />
                        </View>

                        <View style={{ marginTop: height/9, alignItems: 'center', justifyContent: 'center' }}>
                            {this.state.listening && <Text style={{fontFamily:fontF}}>LISTENING</Text>}
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                            {this.state.listening && <LinesLoader />}
                        </View>
                        <View style={styles.container}>
                            <MicToggleButton toggleSpeak={this.toggleSpeak.bind(this)} listeningstate={this.state.listening} navigation={this.props.navigation} />
                        </View>
                    </View>
                </ImageBackground>
            // </Root>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        bottom: 50,
        position: 'absolute'
    }
})