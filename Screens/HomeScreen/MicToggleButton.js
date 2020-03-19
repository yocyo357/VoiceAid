import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, BackHandler,Alert  } from 'react-native';
import { Toast, Root } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AwesomeButton from 'react-native-really-awesome-button';
import Voice from 'react-native-voice';
import { GetTitle, translate, setQuestions, getDatas, calculateJaccard, SpeechCall, translateWord, navigatePage, getContactData} from '../QuestionScreen/InjuryData'
import { ANIMATED_TIMING_IN } from 'react-native-really-awesome-button/src/constants';
import { TTSpeech,TTStop } from '../FirstAidScreen/Texttospeech'
global.speechResults = []
global.rs = ""
global.SolTitle = ""
let count = 0
let countios = 0
var refreshInterval1
var refreshInterval2
let reslength = 0
var { height, width } = Dimensions.get('window');
class MicToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            recognized: '',
            started: '',
            results: [],
            partialResults: [],
            showToast: false
        };
        // Voice.onSpeechStart = this.onSpeechStart.bind(this)
        // Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this)
        // Voice.onSpeechResults = this.onSpeechResults.bind(this)
        // Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        // Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        // Voice.onSpeechError = this.onSpeechError
    }
    handleOnNavigateBack() {
        Voice.onSpeechStart = this.onSpeechStart.bind(this)
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this)
        Voice.onSpeechResults = this.onSpeechResults.bind(this)
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechError = this.onSpeechError
    }
    removeAllListeners() {
        Voice.onSpeechStart = null;
        Voice.onSpeechRecognized = null;
        Voice.onSpeechEnd = null;
        Voice.onSpeechError = null;
        Voice.onSpeechResults = null;
        Voice.onSpeechPartialResults = null;
    }
    timer() {
        count = 0
        refreshInterval1 = setInterval(() => {
            let sec = 5

            if (Platform.OS == 'ios'){
                sec = 5
            }
            if (count == sec) {
                // this.alertChoice()
                clearInterval(refreshInterval1)
                clearInterval(refreshInterval2)
                Voice.cancel()
                Voice.stop()
            } else {
                count++
            }

        }, 1000)
    }
    componentDidMount() {
        getContactData()
        this._componentFocused();

        this._sub = this.props.navigation.addListener(
            'didFocus',
            this._componentFocused
        );
    }
    componentWillUnmount() {
        this._sub.remove();
    }
    _componentFocused = () => {

        this.handleOnNavigateBack()
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
        Voice.destroy().then(Voice.removeAllListeners);
    }
    onBackButtonPressed() {
        return true;
    }
    onSpeechStart(e) {
        this.setState({
            started: '√',
        });
    }
    onSpeechError = e => {
        if (Platform.OS == 'android'){
                clearInterval(refreshInterval1)
        }else{
            clearInterval(refreshInterval1)  
        }
        this.props.toggleSpeak()
        this.alertChoice()
        TTSpeech(this.transpeak(1)[0]+","+this.transpeak(1)[1]+" "+this.transpeak(1)[2])
        
    };
    onSpeechRecognized(e) {
        this.setState({
            recognized: '√',
        });
    }
    onSpeechEnd = e => {
        console.log('onSpeechEnd: ', e);
    };

    onSpeechResults(e) {
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
    onSpeechPartialResults(){

    }
    success() {
        clearInterval(refreshInterval1)
        clearInterval(refreshInterval2)
        this.props.toggleSpeak()
        speechResults.length = 0
        speechResults = this.state.results
        translate()
        if (translateWord(firstSpchWord) == 'call') {
            if (SpeechCall() == false) {
                this.alertContact()
                TTSpeech(this.transpeak(2)[0]+","+this.transpeak(2)[1])
            } else {
                SpeechCall()
            }
        }
        else if (translateWord(firstSpchWord) == 'go') {
            var codes = navigatePage();
            if (navigatePage() == 'null') {
                TTSpeech("Page not found")
            } else {
                this.props.navigation.navigate(codes[0], { title: codes[1] })
            }
        }
        else {
            var title = GetTitle()
            SolTitle = title
            getDatas()
            setQuestions()
            calculateJaccard()
            if (title == undefined) {
                TTSpeech("Command not found")
            } else if (highestJaccard == 1) {
                
                BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
                this.props.navigation.navigate('Solutions', { title: title })
            }
            else {
                BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
                this.props.navigation.navigate('Questions', { onNavigateBack: this.handleOnNavigateBack.bind(this), title: title })
            }
        }
    }
    iosDetectifSilent() {
        countios = 0
        refreshInterval2 = setInterval(() => {
            if (countios == 1){
                this.success()
                Voice.stop()
                Voice.destroy().then(Voice.removeAllListeners);
            }else{
                countios=countios+1
            }
            
        }, 1000)
    }
    onSpeechPartialResults = e => {
        // eslint-disable-next-line
        reslength = e.value.length
        this.setState({
            partialResults: e.value,
        });
    };
    async _startRecognition(e) {
    
        this.setState({
            recognized: '',
            started: '',
            results: [],
        });
        try {
            await Voice.start('en-');
            TTSpeech("Speak...")
        } catch (e) {
            console.error(e);
        }
        this.props.toggleSpeak()
        this.timer()
    }
    static getResults() {
        return <MicToggleButton results={this.state.results} />
    }

    btntoggled() {
        if (this.state.toggled == true) {
            this.setState({ toggled: false })
        } else {
            this.setState({ toggled: true })
        }
        rs = this.state.results
    }
    alertChoice(){
        Alert.alert(
            this.transpeak(1)[0],
            this.transpeak(1)[1]+" "+this.transpeak(1)[2],
            [
                { text: 'Go to First Aid', onPress: () => {TTStop(), this.props.navigation.navigate('First Aid')}},
                { text: 'Try again', onPress: () => {TTStop()},style:'cancel'
                }
            ],
            { cancelable: false }
        )
    }
    alertContact(){
        Alert.alert(
            this.transpeak(2)[0],
            this.transpeak(2)[1],
            [
                { text: 'Cancel', onPress: () => TTStop(), style: 'cancel' },
                {
                    text: 'Go to Contacts', onPress: () => {
                        TTStop()
                        this.props.navigation.navigate('Emergency Contacts')
                    }
                }
            ],
            { cancelable: false }
        )
    }
    transpeak(num){
        if (num == 1){
            // return ["Oops, didn't catch that!","Try Again.","Or you can click go to first aid button"]
            return ["Oops, Didn't catch that!\n","Try speaking again.","Or you can click Go To First Aid button."]
        }else if (num == 2){
            return ['It seems that you are trying to call a contact\n',"We can't found any contact you want to reach to. Do you want to go to contacts?"]
        }
    }
    render() {
        return (

            <View>
                {/* {this.state.partialResults.map((result, index) =>
                    <Text>{result}</Text>)} */}
                <AwesomeButton
                    onPress={this._startRecognition.bind(this)}
                    disabled={this.props.listeningstate}
                    backgroundColor='white'
                    // borderColor='black'
                    // borderWidth={1}
                    // backgroundDarker='rgb(231,39,40)'
                    borderRadius={100}
                    height={100}
                    width={100}
                ><FontAwesome size={40} style={{ color: '#ee5253' }} name='microphone'></FontAwesome></AwesomeButton>
                {/* {this.state.results.map((result, index) => (
                    <Text>{result}</Text>))} */}
            </View>
            // <TouchableOpacity
            //     onPress={this.btntoggled.bind(this)}
            //     disabled={this.state.toggled}
            //     style={{
            //         backgroundColor: 'red', borderWidth: 1, borderColor: 'rgba(0,0,0,0.2', alignItems: 'center',
            //         justifyContent: 'center', borderWidth: 2, borderRadius: 100, width: 100, height: 100
            //     }}>
            //     <FontAwesome size={40} name='microphone'></FontAwesome>
            // </TouchableOpacity>

        );
    }
}

export default MicToggleButton;
