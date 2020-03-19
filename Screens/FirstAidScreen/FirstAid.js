import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Header, Left, Right, List, ListItem, Button, Body, Icon, Text, Content, Container, Root } from 'native-base'
import HeaderFirstAid from '../../Headers/HeaderFirstAid'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ModalSpeak from '../HomeScreen/ModalSpeak'
import Entypo from 'react-native-vector-icons/Entypo'
import { GetTitle, translate, setQuestions, getDatas, calculateJaccard } from '../QuestionScreen/InjuryData'

var injuries = [
    { id: 0, text: "Asthma", filipino: "Hika", visayan: "Hubak", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/Asthma(white).png') },
    { id: 1, text: "Bite", filipino: "Nakagat", visayan: "Napaakan", backColor: '#ee5253', image: require('../../assets/AppIcon/AnimalBite(white).png') },
    { id: 2, text: "Bleeding", filipino: "Dumudugo", visayan: "Pagdugo", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/Bleed(white).png') },
    { id: 3, text: "Brain Attack", filipino: "Atake sa utak", visayan: "Pagatake sa utok", backColor: '#ee5253', image: require('../../assets/AppIcon/brainattack(white).png') },
    { id: 4, text: "Bruising", filipino: "Pasa", visayan: "Bun-og", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/Bruise.png') },
    { id: 5, text: "Burn", filipino: "Napaso", visayan: "Napaso", backColor: '#ee5253', image: require('../../assets/AppIcon/Burn(white).png') },
    { id: 6, text: "Choking", filipino: "Nabulunan", visayan: "Natuk-an", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/choke(white).png') },
    { id: 7, text: "Dehydration", filipino: "Kakulangan sa tubig", visayan: "Kulang sa tubig", backColor: '#ee5253', image: require('../../assets/AppIcon/dehydration(white).png') },
    { id: 8, text: "Drowning", filipino: "Nalunod", visayan: "Nalumos", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/Drowning(white).png') },
    { id: 9, text: "Fainting", filipino: "Nahimatay", visayan: "Nakuyapan", backColor: '#ee5253', image: require('../../assets/AppIcon/faint(white).png') },
    { id: 10, text: "Fracture", filipino: "Nabali", visayan: "Bali", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/Fracture(white).png') },
    { id: 11, text: "Heart Attack", filipino: "Atake sa puso", visayan: "Atake sa kasingkasing", backColor: '#ee5253', image: require('../../assets/AppIcon/heartattack(white).png') },
    { id: 12, text: "Heat Stroke", filipino: "Stroke sanhi sa matinding init", visayan: "Stroke tungod sa kainit", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/HeatStroke(white).png') },
    { id: 13, text: "Nosebleed", filipino: "Balinguyngoy", visayan: "Sunggo", backColor: '#ee5253', image: require('../../assets/AppIcon/nosebleed(white).png') },
    { id: 14, text: "Poisoning", filipino: "Pagkalason", visayan: "Nahiluan", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/poison(white).png') },
    { id: 15, text: "Seizure", filipino: "Seizure", visayan: "Seizure", backColor: '#ee5253', image: require('../../assets/AppIcon/Seizure(white).png') },
    { id: 16, text: "Sting", filipino: "Sting", visayan: "Sting", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/animalsting(white).png') },
    { id: 17, text: "Sprain", filipino: "Pilay", visayan: "Pi-ang", backColor: '#ee5253', image: require('../../assets/AppIcon/Sprain(white).png') },
    { id: 18, text: "Suffocation", filipino: "Hirap Huminga", visayan: "Paghuot", backColor: 'rgb(231,39,40)', image: require('../../assets/AppIcon/Suffocate(white).png') },
    { id: 19, text: "Diarrhea", filipino: "Pagtatae", visayan: "Gikalibanga", backColor: '#ee5253', image: require('../../assets/AppIcon/Vomiting(white).png') },
]


class FirstAid extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="medkit" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            ModalSpeak: false,
            xinjuries: [],
            language: ""
        };
    }
    componentWillMount() {
        console.disableYellowBox = true
        this.setState({ xinjuries: [...injuries] })
        this.changeLang()

    }
    showModalSpeak = () => {
        this.setState({ ModalSpeak: !this.state.ModalSpeak })
    }
    showModalState() {
        return this.state.ModalSpeak
    }
    changeLang() {
        if (GLanguage == 'English') {
            this.setState({ language: 'text' })
        } else if (GLanguage == 'Filipino') {
            this.setState({ language: 'filipino' })
        } else {
            this.setState({ language: 'visayan' })
        }

    }
    handleOnNavigateBack() {
        console.log("")
    }
    onPress(title) {
        var trans = ['injury', 'filipino', 'visaya']
        translated.length = 0
        for (let i = 0; i < translation.length; i++) {
            for (let x = 0; x < 3; x++) {
                var str =translation[i][trans[x]]+""
                if (title.toLowerCase() == str.toLowerCase()) {
                    translated.push(translation[i].injury)
                    setQuestions()
                    calculateJaccard()
                    if (highestJaccard == 1) {
                        this.props.navigation.navigate('Solutions', { title: title })
                        return
                    } else {
                        this.props.navigation.navigate('Questions', { onNavigateBack: this.handleOnNavigateBack.bind(this), title: title })
                        return
                    }
                }
            }
        }
        // alert(translated[0])

    }
    translatelang(){
        if (GLanguage == "English"){
            return 'text'
        }else if (GLanguage == "Filipino"){
            return 'filipino'
        }else{
            return 'visayan'
        }
    }
    render() {
        return (
            // <View styles={styles.container}>
            <Root>
                <Container>
                    <HeaderFirstAid navigation={this.props.navigation} showModalSpeak={this.showModalSpeak.bind(this)} ModalState={this.showModalState.bind(this)} changeLang={this.changeLang.bind(this)} />
                    <Content>
                        {/* <List style={{ marginTop: 3 }} dataArray={injuries}
                            renderRow={(injurie) =>
                                
                            }>
                        </List> */}
                        <List>
                            {this.state.xinjuries.map((injury, index) => {
                                return (
                                    //     <ListItem onPress={() => this.onPress(this.state.xinjuries[index][this.state.language])} icon style={{ backgroundColor: injuries.backColor, marginLeft: 0, borderColor: 'white' }}>
                                    //     <Left style={{ marginLeft: 18 }}>
                                    //         {/* <injuries.icontype size={20} style={{color:'white'}} active name = {injuries.iconname}/> */}
                                    //         <Image source={this.state.xinjuries[index].image} style={{ width: 20, height: 20 }} />
                                    //     </Left>
                                    //     <Body>
                                    //         <Text style={{ color: 'white' }}>{this.state.xinjuries[index][this.state.language]}</Text>
                                    //     </Body>
                                    //     <Right>
                                    //         <Icon style={{ color: 'white' }} name="arrow-forward" />
                                    //     </Right>
                                    // </ListItem>
                                    <ListItem onPress={() => this.onPress(this.state.xinjuries[index][this.state.language])} icon style={{ backgroundColor: injury.backColor, marginLeft: 0, borderColor: 'white' }}>
                                        <Left style={{ marginLeft: 18 }}>
                                            <Image source={injury.image} style={{ width: 20, height: 20 }} />
                                        </Left>
                                        <Body>
                                            <Text style={{ color: 'white' }}>{this.state.xinjuries[index][this.state.language]}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Content>
                    <ModalSpeak navigation={this.props.navigation} showModalSpeak={this.showModalSpeak.bind(this)} ModalState={this.showModalState.bind(this)} />

                </Container>
            </Root>
        );
    }
}

export default FirstAid;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    }
})