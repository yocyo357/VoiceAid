import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, AsyncStorage, ScrollView,WebView } from 'react-native';
import { Content, Separator, Grid, Row, Col, Header, Right, Icon, Button, Root, ActionSheet, Container } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ModalSpeak from '../HomeScreen/ModalSpeak'
import Swiper from 'react-native-swiper';
import SolutionData from './SolutionData'
import StepIndicator from 'react-native-step-indicator';
import Modal from "react-native-modal";
import firebase from 'firebase';
import StarRating from 'react-native-star-rating';
import MicToggleButton from '../HomeScreen/MicToggleButton';
import MedSupplies from '../HospitalPharmacyScreen/MedSupplies'

import { TTSpeech,TTStop,TTSpeechSol } from '../FirstAidScreen/Texttospeech'
var { height, width } = Dimensions.get('window');
var fontFami
var labels = []
let Sindex = 0
let SolutionLine = 0
let gettotalratings = 0
let gettotalusers = 0
var hasSupply= false
var medSup = []
let pos = 0
class Solutions extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerMode: { Visible: true },
            headerTitle: (<View style={{ alignItems: 'center', width: '100%', textAlign: 'cetner' }}>
                <Text style={{ marginTop: 5, color: "#e72828", fontFamily: fontF, fontSize: 20, fontWeight: 'bold' }}>{navigation.state.params.title}</Text>
                <Text>{params.handleThis} <FontAwesome style={{ color: 'yellow' }} name='star' />
                </Text></View>),
            headerRight: navigation.state.params && navigation.state.params.headerRightS,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            }

        }
    }

    constructor(props) {
        super(props);
        this.state = {
            ModalSpeak: false,
            Asolution: [],
            title: "",
            rating: 0,
            language: "",
            currentPosition: 0,
            isDone: false,
            language: "",
            ModalState: false,
            ModalState1: false,
            starCount: 0,
            starpressed: true,
            opacity: 0.2,
            stepcolor:"white"
        };
    }
    initializeFirebase() {


        let num = 1
        // var refreshInterval
        // refreshInterval = setInterval(() => {
        //     if (num == 85) {          
        //         clearInterval(refreshInterval)     
        //     } else {
        //         firebase.database().ref("SolutionRatings/Solution"+num).set(
        //             {
        //                 rating: 0,
        //                 users: 0,
        //                 totalrate:0
        //             }
        //         ).then(()=> {
        //             console.log("inserted");
        //         }).catch((error) => {
        //           console.log(error);
        //         });
        //     }
        //     num++
        // }, 4000)


    }
    componentDidMount() {
        console.disableYellowBox = true
        if (Platform.OS == "ios"){
            this.setState({stepcolor:"rgb(247,247,247)"})
        }
        this.changeTitleLang(GLanguage)
        this.setState({ language: GLanguage })
        
        this._changeLang()
        this.initializeFirebase()
        fontFami = fontF
        var holdData = []
        labels.length = 0
        var all = ""
        var error 
        try {
            

        for (let i = 0; i < OAsolutions.length; i++) {
            if (OAsolutions[i].SolutionNo == IndexOfSolution) {
                Sindex = OAsolutions[i].SolutionNo
                SolutionLine = i
                this.setState({ title: OAsolutions[i].Title })
                let num = 1
                for (let x = i + 1; x < i + OAsolutions[i].Steps + 1; x++) {
                    labels.push("Step " + num)
                    holdData.push({ English: OAsolutions[x].English, Filipino: OAsolutions[x].Filipino, Visayan: OAsolutions[x].Visaya, image: OAsolutions[x].image })
                    all = all + " " + OAsolutions[x].English + "\n\n"
                    num++
                }
            }
        }
    } catch (error) {
            
    }
    if (GLanguage == "English"){

   
        TTSpeech("Solution for"+OAsolutions[SolutionLine]["Title"]+"\n"+"Step 1,\n"+holdData[0].English)
    }
        this.setState({ Asolution: [...this.state.Asolution, ...holdData] })
        this.changeTitleLang(GLanguage)

        let rate = 0
        let wer
        firebase.database().ref('SolutionRatings/Solution' + Sindex).once('value', (data) => {
            let rt = data.toJSON().rating
            if (rt % 1 != 0) {
                rt = (data.toJSON().rating).toFixed(1)
            }
            this.props.navigation.setParams({
                handleThis: rt + ""
            });
            gettotalratings = data.toJSON().totalrate
            gettotalusers = data.toJSON().users
        })
        this.getMedicalSupply()

    }
    getMedicalSupply() {
        for (let i = 0; i < medSupplies.length; i++) {
            if (medSupplies[i].SolutionNo == Sindex) {
                for (let x = 0; x < medSupplies[i].supplies.length; x++) {
                    medSup.push({ name: medSupplies[i].supplies[x].name, price: medSupplies[i].supplies[x].price })
                }
                hasSupply=true
                return
            }
        }
       
    }
    translatetitle(){
        for (let i =0; i < translation.length;i++){
            for (let x =0; x <translation[i].sets.length;x++){

            }
        }
    }
    showModalState() {
        return this.state.ModalSpeak
    }
    showModalSpeak = () => {
        this.setState({ ModalSpeak: !this.state.ModalSpeak })
    }
    renderSolutions() {
        var partialSolution = [...this.state.Asolution]
        partialSolution.slice(0, 1)
        return partialSolution
    }
    transTTSpeeach(){

    }
    onchangePage(position) {
        pos = position
        this.setState({ currentPosition: position });
        if (GLanguage == "English"){
        TTSpeech("Step "+(position+1)+","+this.state.Asolution[position].English)
        }
        if (position == this.state.Asolution.length - 1) {
            this.setState({ isDone: true })
        } else {
            this.setState({ isDone: false })
        }
    }
    ModalState() {
        this.setState({ ModalState: !this.state.ModalState })
    }
    ModalState1() {
        this.setState({ ModalState1: !this.state.ModalState1 })
    }
    _changeLang() {
        this.props.navigation.setParams({
            headerRightS: (<View style={{ flexDirection: 'row' }}>
                <Ionicons onPress={() => this.onPressSupplies()} size={25} name="md-medkit" style={{ marginRight: 15, color: 'green' }} />
                <MaterialIcons style={{ marginRight: width / 20 }} size={25} name="language" onPress={() =>
                    ActionSheet.show(
                        {
                            options: langBUTTONS,
                            cancelButtonIndex: 3,
                            title: "Select Language"
                        },
                        buttonIndex => {
                            if (buttonIndex != 3) {
                                AsyncStorage.setItem('language', langBUTTONS[buttonIndex]);
                                if (langBUTTONS[buttonIndex] == "Cebuano"){
                                    GLanguage='Visayan'
                                }else{
                                    GLanguage=langBUTTONS[buttonIndex]
                                }
                                // this.props.navigation.setParams({title: GetTitle()})
                                this.setState({ language: GLanguage })
                                this.changeTitleLang(GLanguage)
                                TTStop()
                                if (GLanguage == "English"){
                                    TTSpeech("Step "+(pos+1)+","+this.state.Asolution[pos].English)
                                    }
                            }

                        }

                    )} /></View>)
        })
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating,
            opacity: 1
        });
        this.setState({
            starpressed: false,
        });
    }

    SubmitNewRating() {
        let totalrating = this.state.starCount + gettotalratings
        let totalusers = gettotalusers + 1
        let newrating = totalrating / totalusers
        this.UpdateDatabase(totalrating, totalusers, newrating)
        this.props.navigation.navigate('Home')

    }
    UpdateDatabase(totrating, totusers, newrating) {
        firebase.database().ref('SolutionRatings/Solution' + Sindex).update({
            rating: newrating,
            totalrate: totrating,
            users: totusers
        });
    }
    changeTitleLang(lang) {
        if (lang == "English") {
            this.setState({ title: OAsolutions[SolutionLine]["Title"] })
        } else if (lang == "Filipino") {
            this.setState({ title: OAsolutions[SolutionLine]["Tagalog"] })
        } else {
            this.setState({ title: OAsolutions[SolutionLine]["Visaya"] })
        }

    }
    onPressSupplies() {
        if (hasSupply){
            this.ModalState1()
        }else{
            alert('No Medical Supply Needed')
        }
        
    }
    componentWillUnmount(){

        TTStop()
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <ModalSpeak isModalVisible={this.state.ModalSpeak} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} /> */}
                <View style={{ height: 40, backgroundColor: this.state.stepcolor, borderBottomWidth: 2 }}>
                    <StepIndicator
                        stepCount={labels.length}
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                    />
                </View>
                <Swiper style={styles.wrapper} loop={false} showsButtons={true}
                    activeDotColor="black"
                    onIndexChanged={(index) => this.onchangePage(index)}>
                    {this.state.Asolution.map((solution, index) => {
                        return (
                            <ScrollView style={{ marginBottom: 41 }}>
                                <View style={styles.slide1}>
                                    <Text style={{ color: '#fff', fontFamily: fontFami, textAlign: 'center', fontSize: 20, margin: 15, fontWeight: 'bold' }}>{this.state.title}</Text>
                                    <Image source={solution.image} style={{ height: 250, width: 250, resizeMode: "stretch" }} />
                                    <Text style={{ color: '#fff', fontFamily: fontF, margin: 30, textAlign:'justify',fontWeight: 'bold' }}>{this.state.Asolution[index][this.state.language]}</Text>
                                </View>
                            </ScrollView>
                        )
                    })}
                </Swiper>
                {this.state.isDone &&
                    <TouchableOpacity onPress={() => this.ModalState()} style={{ position: 'absolute', bottom: 23, right: 30, flex: 1 }}>
                        <Text style={{ fontFamily: fontF, color: '#fff', fontWeight: 'bold' }}
                        >DONE</Text>
                    </TouchableOpacity>}

                <Modal style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: height / 2.5, marginTop: height / 5, marginLeft: 25, marginRight: 25 }}
                    isVisible={this.state.ModalState}
                    onBackdropPress={() => this.ModalState()}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, marginLeft: width / 9, marginRight: width / 9 }}>
                            <Text style={{ marginTop: height / 30, fontSize: 17 }}>Please rate your satisfaction from the solution given</Text>
                            <View style={{ marginTop: height / 30 }}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    fullStarColor={'yellow'}
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
                            style={{ position: 'absolute', bottom: 10, right: 90 }}><Text style={{ fontSize: 15, fontWeight: 'bold' }}>Not now</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.SubmitNewRating()}
                            disabled={this.state.starpressed}
                            style={{ position: 'absolute', bottom: 10, right: 20, opacity: this.state.opacity }}><Text style={{ fontSize: 15, fontWeight: 'bold' }}>Submit</Text></TouchableOpacity>

                    </View>
                </Modal>
                <Modal style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: height / 1.9, marginTop: height / 5, marginLeft: 25, marginRight: 25 }}
                    isVisible={this.state.ModalState1}
                    onBackdropPress={() => this.ModalState1()}>
                    <Container>
                        <Content>
                            <Separator bordered>
                                <Text style={{ fontSize: 13,fontWeight:'bold',fontSize:15 }}>Medical Supplies</Text>
                            </Separator>
                            <Grid style={{justifyContent:'center',alignItems:'center'}}>
                                {medSup.map((supplys, index) => {
                                    return (
                                        <Row style={{marginLeft:10,marginTop:10}}>
                                            <Col><Text style={{fontSize:15}}>{medSup[index].name}</Text></Col>
                                            <Col><Text style={{fontSize:15}}>{medSup[index].price}</Text></Col>
                                        </Row>
                                    )
                                })}
                            </Grid>
                        </Content>
                    </Container>
                </Modal>
            </View >

        );
    }
}

export default Solutions;

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        flex: 1,
        backgroundColor: '#e72828'
    },
    slide1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e72828',
        marginBottom: 40
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontFamily: fontFami,
        margin: 30,
        fontWeight: 'bold'
    },
    texttitle: {
        color: '#fff',
        fontFamily: fontFami,
        textAlign: 'center',
        fontSize: 20,
        margin: 15,
        fontWeight: 'bold'
    }
})

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 35,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 4,
    stepStrokeCurrentColor: 'rgb(10,144,25)',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'rgb(10,144,25)',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: 'rgb(10,144,25)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgb(10,144,25)',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'black',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'

}