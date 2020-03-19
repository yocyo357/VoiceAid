import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Header, Left, Right, Icon, Content, Button, Text } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Entypo from 'react-native-vector-icons/Entypo'
import Modal from "react-native-modal";
import Voice from 'react-native-voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { TTSpeech,TTStop } from '../FirstAidScreen/Texttospeech'
import { GetTitle, translate, setQuestions, getDatas, calculateJaccard, SpeechCall, translateWord, navigatePage } from '../QuestionScreen/InjuryData'
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, LinesLoader } from 'react-native-indicator';
// import { clearInterval } from 'timers';

var { height, width } = Dimensions.get('window');
var refreshInterval1
var refreshInterval2
let count = 0
class ModalSpeak extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Entypo name="game-controller" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            listening: true,
            text: "SPEAK NOW!",
            iconname: 'microphone',
            icontype: FontAwesome,
            results: [],
        };
        this.handleOnNavigateBack()
    }

    handleOnNavigateBack() {
        Voice.onSpeechStart = this.onSpeechStart
        Voice.onSpeechRecognized = this.onSpeechRecognized
        Voice.onSpeechResults = this.onSpeechResults
        Voice.onSpeechEnd = this.onSpeechEnd
        Voice.onSpeechPartialResults = this.onSpeechPartialResults
        Voice.onSpeechError = this.onSpeechError
    }
    static timer() {
        count = 0
        refreshInterval1 = setInterval(() => {
            let sec = 5

            if (Platform.OS == 'ios') {
                sec = 5
            }
            if (count == sec) {
                clearInterval(refreshInterval1)
                Voice.cancel()
                Voice.stop()
            } else {
                count++
            }

        }, 1000)
    }
    static onSpeechStart(e) {
        Voice.start("en-")
        ModalSpeak.timer()
    }
    success() {
        clearInterval(refreshInterval2)
        clearInterval(refreshInterval1)
        speechResults.length = 0
        speechResults = this.state.results
        translate()
        if (translateWord(firstSpchWord) == 'call') {
            if (SpeechCall() == false) {
                this.onContactNotfound("Contact Not found")
            } else {
                SpeechCall()
                let num = 0
                var refreshInterval
                refreshInterval = setInterval(() => {
                    // if (num == 1) {
                    this.hideshowModal()
                    clearInterval(refreshInterval)
                    // }
                    // num++
                }, 2000)

            }

        } else if (translateWord(firstSpchWord) == 'go') {
            var codes = navigatePage();
            if (navigatePage() == codes[0]) {
                this.onDidntCatch("Page not found")
            } else {
                this.hideshowModal()
                this.props.navigation.navigate(codes[0], { title: codes[1] })
                
            }
        } else {
            var title = GetTitle()
            getDatas()
            setQuestions()
            calculateJaccard()
            if (title == undefined) {
                this.onDidntCatch("No Command found, Try Again!")
            } else if (highestJaccard == 1) {
                
                this.hideshowModal()
                this.props.navigation.navigate('Solutions', {title: title} )
            }
            else {
                this.hideshowModal()
                this.props.navigation.navigate('Questions', { onNavigateBack: this.handleOnNavigateBack.bind(this), title: title })
            }
        }
    }
    iosDetectifSilent() {
        let countios = 0
        
        refreshInterval2 = setInterval(() => {
            if (countios == 1) {
                this.success()
                Voice.stop()
                Voice.destroy().then(Voice.removeAllListeners);
            } else {
                countios = countios + 1
            }

        }, 1000)
    }
    
    onSpeechResults = (e) =>{
        if (Platform.OS == "ios") {
            clearInterval(refreshInterval2)
            this.iosDetectifSilent()
            // var joined = this.state.results.concat(e.value);
            this.setState({
                results: e.value,
            })
            
        } else {
            this.setState({
                results: e.value,
            });
            this.success()
        }
    }
    
    onSpeechEnd = e => {

    }
    onSpeechError = e => {
        this.onDidntCatch("Didn't Catch that. Try Again!")
        clearInterval(refreshInterval1)
    }
    retry() {
        if (this.state.listening == false) {
            Voice.start("en-")
            this.onModalClosed()
            ModalSpeak.timer()
            TTStop()
        }

    }
    onDidntCatch(txt) {
        TTSpeech(txt)
        this.setState({ listening: false })
        this.setState({ text: txt })
        this.setState({ icontype: EvilIcons })
        this.setState({ iconname: "undo" })
    }
    onContactNotfound(txt) {
        TTSpeech(txt)
        this.setState({ listening: false })
        this.setState({ text: txt })
        this.setState({ icontype: EvilIcons })
        this.setState({ iconname: "undo" })
    }
    onModalClosed() {
        this.setState({ listening: true })
        this.setState({ text: "SPEAK NOW!" })
        this.setState({ icontype: FontAwesome })
        this.setState({ iconname: 'microphone' })
    }
    hideshowModal = () => {
        this.props.showModalSpeak()
        Voice.stop()
        Voice.destroy()
        this.onModalClosed()
        TTStop()
    }
    componentWillUnmount(){
        clearInterval(refreshInterval2)
        clearInterval(refreshInterval1)
    }

    render() {
        const { isModalVisible } = this.props;
        _toggleModal = () =>
            isModalVisible = false

        return (
            <Modal style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: height / 3, marginTop: height / 6, marginLeft: 20, marginRight: 20 }}
                isVisible={this.props.ModalState()}
                onBackdropPress={() => this.hideshowModal()}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, position: 'absolute', top: height / 21, alignSelf: 'center' }}>
                        {this.state.listening && <LinesLoader barWidth={7} barNumber={10} barHeight={80} />}
                        {!this.state.listening && <Image source={require('../../assets/sad.jpg')} style={{ height: 80, width: 150 }} />}
                    </View>
                    <View style={{ flex: 1, position: 'absolute', bottom: 135, alignSelf: 'center' }}>
                        <Text style={{ color: '#ee5253', fontSize: 20 }}>{this.state.text}</Text>
                    </View>
                    <View style={{ flex: 1, position: 'absolute', bottom: 30, alignSelf: 'center' }}>
                        <Button onPress={() => this.retry()} style={{ backgroundColor: '#ee5253', borderRadius: 100, width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                            <this.state.icontype size={40} style={{ color: 'white' }} name={this.state.iconname} />
                        </Button>
                    </View>
                </View>
            </Modal>

        );
    }
}

export default ModalSpeak;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    }
})