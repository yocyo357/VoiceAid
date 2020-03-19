import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Animated, Image, ImageBackground, AsyncStorage } from 'react-native';
import { Header, Left, Right, Icon, Button } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Entypo from 'react-native-vector-icons/Entypo'
import MapView from 'react-native-maps'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Enemy from './Enemy'
import Modal from "react-native-modal"
const { width, height } = Dimensions.get('window')
let numPos = 0
let points = 0
const kitPosition = ['left', 'center', 'right']
var refreshIntervalId2
var refreshIntervalId
var refreshIntervalId1
var refreshIntervalId3
let highscore = 0
class MedCatch extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            ModalVisible1: false,

            points: 0,
            best: 0,

            countdown: 3,
            cdvisible: true,

            movePlayerVal: new Animated.Value(40),
            playerSide: 'left',

            moveEnemyval: new Animated.Value(0),
            enemyStartposX: 0,
            enemySide: 'left',
            enemySpeed: 4200,

            moveLineVal: new Animated.Value(0),
            moveLineVal2: new Animated.Value(0),

            line1pos: height / 1.5,
            line2pos: height / 3,
            gameOver: false,

            enemyCar: require("../../assets/GameIcons/car2.png")
        };
    }

    moveKit(direction) {
        if (direction == "SWIPE_LEFT" && numPos != 0) {
            numPos = numPos - 1
            this.setState({ playerSide: kitPosition[numPos] })
        }
        else if (direction == "SWIPE_RIGHT" && numPos != 2) {
            numPos = numPos + 1
            this.setState({ playerSide: kitPosition[numPos] })
        }
        if (kitPosition[numPos] == 'right') {
            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: width - 90,
                    tension: 120
                }
            ).start()
        } else if (kitPosition[numPos] == 'center') {
            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: width / 2.3,
                    tension: 120
                }
            ).start()

        } else if (kitPosition[numPos] == 'left') {
            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: 40,
                    tension: 120
                }
            ).start()
        }
    }

    componentDidMount= async () => {
        this.start()
        highscore = await AsyncStorage.getItem('medic')
        if (highscore == null) {
            highscore = 0
        }
        highscore = parseInt(highscore)
    }
    start(){
        this.setState({
            ModalVisible1: false,

            points: 0,
            best: 0,

            countdown: 3,
            cdvisible: true,

            playerSide: 'left',

            enemyStartposX: 0,
            enemySide: 'left',
            enemySpeed: 4200,

            line1pos: height / 1.5,
            line2pos: height / 3,
            gameOver: false,

            enemyCar: require("../../assets/GameIcons/car2.png")
        })


        this._isMounted = true
        let num = 0
        let num1 = 3
        this.state.moveLineVal2.setValue(-100)
        this.state.moveLineVal.setValue(-100)
        this.state.moveEnemyval.setValue(-100)
        refreshInterval1 = setInterval(() => {
            num1--
            if (num1 == 0) {
                this.setState({ countdown: "GO" })
            } else if (num1 == -1) {
                this.setState({ cdvisible: false })
                clearInterval(refreshInterval1)
            } else {
                this.setState({ countdown: num1 })
            }

        }, 700)
        refreshInterval = setInterval(() => {
            if (num == 1) {
                this.animateLine2()
                this.animateEnemy()
                clearInterval(refreshInterval)
            } else {
                this.animateLines()
            }
            num++
        }, this.state.enemySpeed / 2)

        
    }

    enemyCar() {
        var r = Math.floor(Math.random() * 2) + 1
        if (r == 1) {
            return require("../../assets/GameIcons/car.png")
        }
        else {
            return require("../../assets/GameIcons/car2.png")
        }
    }
    animateEnemy() {
        this.setState({ enemyCar: this.enemyCar() })
        this.state.moveEnemyval.setValue(-100)
        var windowH = height
        var r = Math.floor(Math.random() * 3) + 1
        if (r == 3) {
            this.setState({ enemySide: 'left' })
            r = 40

        }
        else if (r == 2) {
            this.setState({ enemySide: 'center' })
            r = width/2.6
        } else {
            this.setState({ enemySide: 'right' })
            r = width - 90
        }

        this.setState({ enemyStartposX: r })


        refreshIntervalId2 = setInterval(() => {
            if (this.state.moveEnemyval._value > windowH - 280
                && this.state.moveEnemyval._value < windowH - 180
                && this.state.playerSide == this.state.enemySide) {
                clearInterval(refreshIntervalId2)
                clearInterval(refreshIntervalId1)
                clearInterval(refreshIntervalId)
                this.setState({ gameOver: true })
                this.gameOver();
            }
        }, 50)
        let num = 0

        refreshIntervalId3 = setInterval(() => {
            this.setState({ enemySpeed: this.state.enemySpeed - 50 })

        }, 20000)

        Animated.timing(
            this.state.moveEnemyval,
            {
                toValue: height,
                duration: this.state.enemySpeed
            }
        ).start(event => {
            if (this._isMounted) {
                if (event.finished && this.state.gameOver == false) {
                    clearInterval(refreshIntervalId2)
                    this.setState({ points: ++this.state.points })
                    this.animateEnemy()
                }
            }
        })
    }
    componentWillUnmount() {
        this._isMounted = false
        clearInterval(refreshIntervalId3)
        clearInterval(refreshIntervalId2)
        clearInterval(refreshIntervalId1)
        clearInterval(refreshIntervalId)
    }
    animateLines() {
        this.state.moveLineVal.setValue(-100)
        Animated.timing(
            this.state.moveLineVal,
            {
                toValue: height,
                duration: this.state.enemySpeed,
            }
        ).start(event => {
            if (event.finished) {
                // this.setState({line1pos: height})
                if (this._isMounted) {
                    this.animateLines()
                }
            }
        })
    }
    animateLine2() {
        this.state.moveLineVal2.setValue(-100)
        Animated.timing(
            this.state.moveLineVal2,
            {
                toValue: height,
                duration: this.state.enemySpeed,
            }
        ).start(event => {
            if (event.finished) {
                // this.setState({line2pos: height})
                if (this._isMounted) {
                    this.animateLine2()
                }
            }
        })
    }
    exit() {
        this.props.navigation.goBack()
    }
    tryagain() {
        this.start()
    }

    gameOver() {
        this.setState({ ModalVisible1: true })
        if (this.state.points > highscore) {
            AsyncStorage.setItem('medic', this.state.points + "");
            this.setState({ best: this.state.points })
        }
        this.props.navigation.state.params.setHighscoreMedic()
        
    }
    render() {
        return (


            <GestureRecognizer
                onSwipe={(direction) => this.moveKit(direction)}
                style={{ flex: 1 }}>
                <ImageBackground source={require('../../assets/GameIcons/BG.jpg')} style={{
                    flex: 1
                }}>
                    
                    {this.state.cdvisible && <Text style={{ position: 'absolute', alignSelf: 'center', bottom: height / 2, fontSize: 70, fontWeight: 'bold', color: 'white' }}>
                        {this.state.countdown}</Text>}

                    <Enemy enemyImg={this.state.enemyCar}
                        enemyStartposX={this.state.enemyStartposX}
                        moveEnemyval={this.state.moveEnemyval} />


                    <Animated.Image source={require("../../assets/GameIcons/line2.png")}
                        style={{
                            height: 80,
                            width: 30,
                            position: 'absolute',
                            left: width / 3.1,
                            transform: [
                                { translateY: this.state.moveLineVal }
                            ]
                        }} />

                    <Animated.Image source={require("../../assets/GameIcons/line2.png")}
                        style={{
                            height: 80,
                            width: 30,
                            position: 'absolute',
                            left: width / 3.1,
                            transform: [
                                { translateY: this.state.moveLineVal2 }
                            ]
                        }} />

                    <Animated.Image source={require("../../assets/GameIcons/line2.png")}
                        style={{
                            height: 80,
                            width: 30,
                            position: 'absolute',
                            left: width / 1.6,
                            transform: [
                                { translateY: this.state.moveLineVal }
                            ]
                        }} />
                    <Animated.Image source={require("../../assets/GameIcons/line2.png")}
                        style={{
                            height: 80,
                            width: 30,
                            position: 'absolute',
                            left: width / 1.6,
                            transform: [
                                { translateY: this.state.moveLineVal2 }
                            ]
                        }} />

                    <Animated.Image source={require("../../assets/GameIcons/ambulance1-3.png")}
                        style={{
                            height: 120,
                            width: 55,
                            position: 'absolute',
                            resizeMode: "stretch",
                            bottom: 50,
                            transform: [
                                { translateX: this.state.movePlayerVal }
                            ]
                        }} />
                </ImageBackground>
                <Modal style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: height / 4, marginTop: height / 6, marginLeft: 20, marginRight: 20 }}
                    isVisible={this.state.ModalVisible1}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>GAME OVER</Text>
                        <Text style={{ fontSize: 20, margin: 5 }}>BEST</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.best}</Text>
                        <Text style={{ fontSize: 20, margin: 5 }}>SCORE</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.points}</Text>
                        <Button full danger style={{ margin: 5 }}
                            onPress={() => this.tryagain()}><Text style={{ color: 'white' }}>TRY AGAIN</Text></Button>
                        <Button full danger style={{ margin: 5 }}
                            onPress={() => this.exit()}><Text style={{ color: 'white' }}>EXIT</Text></Button>
                    </View>
                </Modal>
                <Text style={{ position: 'absolute', right: 10, top: 10 ,fontSize:20,fontWeight:"bold",color:'white'}}>{"SCORE: " + this.state.points}</Text>

            </GestureRecognizer >

        );
    }
}

export default MedCatch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        resizeMode: 'cover'
    }
})