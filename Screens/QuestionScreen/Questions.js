import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Header, Button, Left, Right, Icon, Container, Content, Card, CardItem, Radio, Body, ActionSheet, Root, ListItem, Separator, CheckBox, Thumbnail } from 'native-base'
import SpeechRecognizer from '../../SpeechRecognizer/SpeechRecognizer'
import { Col, Row, Grid } from 'react-native-easy-grid';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Voice from 'react-native-voice';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, LinesLoader } from 'react-native-indicator';
import { setChoices, setQuestions, calculateJaccard, translate, getDatas, RecognizeChoices, QuestionSpeech, GetTitle, translatelangInj } from '../QuestionScreen/InjuryData'
import firebase from 'firebase'
import MicToggleButton from '../HomeScreen/MicToggleButton';
import { TTSpeech, TTStop, TTSpeechSol } from '../FirstAidScreen/Texttospeech'
var { height, width } = Dimensions.get('window');
var rows = ['1', '2', '3', '4', '5']
global.QspchR = []
var refreshInterval2
var lvl = 0
var doselected = false
class Questions extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `${navigation.state.params.title}`,
        headerLeft: <Icon name='arrow-back' style={{ fontSize: 23, marginLeft: width / 20 }}
            onPress={() => {
                Alert.alert(
                    'Are you sure you want to go back?',
                    '',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: 'OK', onPress: () => { navigation.goBack(), navigation.state.params.onNavigateBack() } },
                    ],
                    { cancelable: false },
                );

            }} />,
        headerTitleStyle: {
            fontFamily: fontF,
            color: 'rgb(231,39,40)',
            width: '90%',
            textAlign: 'center'
        },
        headerRight: navigation.state.params && navigation.state.params.headerRight
    });
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            value: '',
            question: '',
            text: '',
            stage: 1,
            backbutton: false,
            listening: false,
            items: []
        };
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this)
        Voice.onSpeechResults = this.onSpeechResults.bind(this)
        Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechError = this.onSpeechError
    }
    componentDidMount() {
        this.setState({ items: [...this.state.items, ...setChoices()] })
        this.setState({ question: setQuestions() })
        this.setState({ listening: false })
        this._changeLang()
        this.setState({ stage: translated.length })
        lvl = translated.length
        if (translated.length > 1) {
            this.setState({ backbutton: true })
        }
        doselected = false
        TTSpeech(QuestionSpeech())
        // alert(this.props.navigation.state.params.title)
    }

    onSelect(index) {
        items = []
        for (let i = 0; i < this.state.items.length; i++) {
            var bol
            if (i == index) {
                bol = true
            } else {
                bol = false
            }
            item = this.state.items[i];
            item.selected = bol;
            items[i] = item

        }
        doselected = true
        this.setState({ items: items })
        translated[this.state.stage] = this.state.items[index].value
    }
    onNext() {
        // alert(translated[translated.length-1])
        if (doselected == true) {
            setQuestions()
            calculateJaccard()
            if (highestJaccard != 1) {
                this.setState({ question: setQuestions() })
                this.setState({ backbutton: true })
                this.setState({ stage: this.state.stage + 1 }, function () {
                    lvl = this.state.stage
                })
                this.setState({ items: [...setChoices()] })
                doselected = false
                TTSpeech(QuestionSpeech())
            } else {

                this.props.navigation.navigate('Solutions', { title: this.props.navigation.state.params.title })
                doselected = true
            }

        } else {
            alert('Please do select answer first')
        }
    }
    onBack() {
        doselected = false

        this.setState({ stage: this.state.stage - 1 }, function () {
            lvl = this.state.stage
            if (this.state.stage == 1) {
                this.setState({ backbutton: false })
            }
        })
        translated.splice(lvl - 1, 3)
        // alert(translated)
        this.setState({ question: setQuestions() })
        this.setState({ items: [...setChoices()] })
        TTSpeech(QuestionSpeech())
        // this.setState({stage: 1})
    }

    returnstage() {
        return translated.length
    }
    toggleMic() {
        this.setState({ listening: !this.state.listening })
        TTStop()
        Voice.start("en-")
    }
    onSpeechRecognized() {

    }
    onSpeechPartialResults() {

    }

    onSpeechResults(e) {
        // alert(e.value)
        if (Platform.OS == 'ios') {
            QspchR = e.value
            clearInterval(refreshInterval2)
            this.iosDetectifSilent()
        } else {
            QspchR = e.value
            // if (RecognizeChoices() != undefined) {
                if (RecognizeChoices() == "null") {
                    TTSpeech("Answer didn't match. Choose from the given choices")
                } else {
                    this.onSelect(RecognizeChoices())
                    this.onNext()
                }
            // }
        }


        // Voice.stop()
        // if (Platform.OS == 'ios') {
        //     this.setState({ listening: !this.state.listening })
        //     Voice.destroy().then(Voice.removeAllListeners);
        // }
    }
    iosDetectifSilent() {
        countios = 0
        refreshInterval2 = setInterval(() => {
            if (countios == 1) {
                if (RecognizeChoices() != "null") {
                    this.onSelect(RecognizeChoices())
                    this.onNext()
                } else{
                    TTSpeech("Answer didn't match. Choose from the given choices")
                }
                    QspchR = ""
                    clearInterval(refreshInterval2)
                    this.setState({ listening: !this.state.listening })
                    Voice.stop()
                    Voice.destroy().then(Voice.removeAllListeners);
                

            } else {
                countios = countios + 1
            }

        }, 1000)
    }
    onSpeechEnd(e) {
        if (Platform.OS == 'android') {
            this.setState({ listening: !this.state.listening })
        }

    }
    _changeLang() {
        this.props.navigation.setParams({
            headerRight: (<MaterialIcons style={{ marginRight: width / 20 }} size={25} name="language" onPress={() =>
                ActionSheet.show(
                    {
                        options: langBUTTONS,
                        cancelButtonIndex: 3,
                        title: "Select Language"
                    },
                    buttonIndex => {
                        if (buttonIndex != 3) {
                            AsyncStorage.setItem('language', langBUTTONS[buttonIndex]);
                            if (langBUTTONS[buttonIndex] == "Cebuano") {
                                GLanguage = 'Visayan'
                            } else {
                                GLanguage = langBUTTONS[buttonIndex]
                            }
                            if (doselected == true) {
                                translated.splice(translated.length - 1, 1)
                                doselected = false
                            }
                            this.props.navigation.setParams({ title: translatelangInj(this.props.navigation.state.params.title) })
                            this.setState({ question: setQuestions() })
                            this.setState({ items: [...setChoices()] })

                        }

                    }

                )} />)
        })
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text style={{ fontWeight: 'bold', fontFamily: fontF, fontSize: 20 }}>{"Question " + this.state.stage}</Text>
                        </CardItem>
                        <CardItem bordered >
                            <Body>
                                <Text style={{ fontWeight: 'bold', fontFamily: fontF, fontSize: 15 }}>
                                    {this.state.question}
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Grid>

                                {this.state.items.map((item, index) => {
                                    var max = false
                                    if (index % 2 == 0) {
                                        if (index == this.state.items.length - 1) {
                                            max = true
                                        }
                                        return (
                                            <Row key={index}>
                                                <Col style={{ flex: 1, flexDirection: 'row', height: 30, alignItems: 'center' }}>
                                                    <Radio
                                                        onPress={() => this.onSelect(index)}
                                                        color={"#f0ad4e"}
                                                        selectedColor={"#5cb85c"}
                                                        selected={this.state.items[index].selected}
                                                    />
                                                    <TouchableOpacity onPress={() => this.onSelect(index)}>
                                                        <Text style={{ fontFamily: fontF }}>{"   " + this.state.items[index].label}</Text>
                                                    </TouchableOpacity>
                                                </Col>
                                                {max ? (
                                                    <Col />
                                                ) : (<Col style={{ flex: 1, flexDirection: 'row', height: 30, alignItems: 'center' }}>
                                                    <Radio
                                                        onPress={() => this.onSelect(index + 1)}
                                                        color={"#f0ad4e"}
                                                        selectedColor={"#5cb85c"}
                                                        selected={this.state.items[index + 1].selected}
                                                    />
                                                    <TouchableOpacity onPress={() => this.onSelect(index + 1)}>
                                                        <Text style={{ fontFamily: fontF }}>{"   " + this.state.items[index + 1].label}</Text>
                                                    </TouchableOpacity>
                                                </Col>)}
                                            </Row>

                                        )

                                    } else {
                                        return null
                                    }

                                })}

                            </Grid>
                        </CardItem>
                        <CardItem footer bordered>
                            <Left>
                                {this.state.backbutton &&
                                    <Button onPress={() => this.onBack()} iconLeft light>
                                        <Icon name='arrow-back' />
                                        <Text>  Back    </Text>
                                    </Button>
                                }
                            </Left>
                            <Right>
                                <Button onPress={() => this.onNext()} iconRight light>
                                    <Text>    Next  </Text>
                                    <Icon name='arrow-forward' />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>

                </Content>
                <View style={{ position: 'absolute', alignSelf: 'center', bottom: 185 }}>
                    {this.state.listening && <Text style={{ fontFamily: fontF }}>LISTENING</Text>}
                </View>
                <View style={{ position: 'absolute', alignSelf: 'center', bottom: 140 }}>
                    {this.state.listening && <LinesLoader />}
                </View>
                <Button disabled={this.state.listening} onPress={() => this.toggleMic()} style={{
                    position: 'absolute', borderRadius: 100, height: 100, width: 100, backgroundColor: 'rgb(231,39,40)',
                    alignSelf: 'center', alignItems: 'center', justifyContent: 'center', bottom: 10,
                }}
                ><FontAwesome size={40} style={{ color: 'white' }} name='microphone'></FontAwesome></Button>
            </Container >
        );
    }
}

export default Questions;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    questioncontainer: {
        flex: 1,
        backgroundColor: 'rgb(231,39,40)',
        marginTop: height / 20,
        marginLeft: height / 25,
        marginRight: height / 25,
        marginBottom: height / 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

})