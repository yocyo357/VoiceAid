import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, AsyncStorage } from 'react-native';
import { Header, Left, Right, Icon, Button, Root } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import ModalSpeak from '../HomeScreen/ModalSpeak'
import { test } from '../QuestionScreen/InjuryData'
var qq = ['asthma', 'wew', 'aw']
const { width, height } = Dimensions.get('window')
var highscore = 0
var highscoremedic = 0
class Games extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Entypo name="game-controller" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            ModalSpeak: false,
            highscore: 0,
            highscoremedic: 0,
        };
    }
    componentWillMount = async () => {
        this.setHighscore()
        this.setHighscoreMedic()
    }
    setHighscore = async () => {
        highscore = await AsyncStorage.getItem('quiz')
        if (highscore == null) {
            highscore = 0
        }
        highscore = parseInt(highscore)
        this.setState({ highscore: highscore })
    }
    setHighscoreMedic = async () => {
        highscoremedic = await AsyncStorage.getItem('medic')
        if (highscoremedic == null) {
            highscoremedic = 0
        }
        highscoremedic = parseInt(highscoremedic)
        this.setState({ highscoremedic: highscoremedic })
    }
    showModalState() {
        return this.state.ModalSpeak
    }
    showModalSpeak = () => {
        this.setState({ ModalSpeak: !this.state.ModalSpeak })
    }
    posh() {
        qq.splice(1, 4)
    }
    render() {
        return (
            <Root>
                <View style={styles.container}>
                    <HeaderGames navigation={this.props.navigation} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} />
                    <ModalSpeak navigation={this.props.navigation} isModalVisible={this.state.ModalSpeak} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} />
                    <Button style={styles.buttons} block danger onPress={() => this.props.navigation.navigate('Quiz', { setHighscore: this.setHighscore.bind(this) })}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.text}>{'Quiz Game\n'}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons size={40} name="md-trophy" style={{ color: 'yellow' }} />
                                <Text style={styles.text}>{' ' + this.state.highscore}</Text>
                            </View>
                        </View>
                    </Button>
                    <Button style={styles.buttons} block danger onPress={() => this.props.navigation.navigate('MedCatch', { setHighscoreMedic: this.setHighscoreMedic.bind(this) })}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.text}>{'Emergency\n'}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons size={40} name="md-trophy" style={{ color: 'yellow' }} />
                                <Text style={styles.text}>{' ' + this.state.highscoremedic}</Text>
                            </View>
                        </View>
                    </Button>
                </View>
            </Root>
        );
    }
}

export default Games;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    },
    buttons: {
        marginLeft: width / 18,
        marginRight: width / 18,
        marginTop: height / 60,
        marginBottom: height / 56,
        height: height / 2.4,
    },
    text: {
        color: 'white',
        fontSize: 25
    },
    text1: {
        color: 'white',
        fontSize: 220
    }
})