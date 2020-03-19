import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Animated,Image} from 'react-native';
import {Header,Left,Right,Icon} from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Entypo from 'react-native-vector-icons/Entypo'
import MapView from 'react-native-maps'

class Enemy extends Component{
    render(){
        return(
                <Animated.Image source={this.props.enemyImg}
                            style={{
                                height: 100,
                                width: 100,
                                position: 'absolute',
                                left: this.props.enemyStartposX,
                                transform: [
                                    { translateY: this.props.moveEnemyval }
                                ]
                            }} />
        );
    }
}

export default Enemy;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    }
})