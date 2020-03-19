import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Header, Left, Right, Text, Icon, Button, List, ListItem, Body, Separator, Footer, FooterTab, Container, ActionSheet, Root, Content } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, { PROVIDER_GOOGLE, Polyline, Marker, AnimatedRegion } from 'react-native-maps'
import Modal from "react-native-modal";
import Pulse from 'react-native-pulse'
import geolib from 'geolib'
import GetNearest from './Getnearest'
import ActionButton from 'react-native-action-button';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
merkersz = []
const GOOGLE_MAPS_APIKEY = 'AIzaSyDAi7txUXNwexgGUdfIe8YBgZaMcCsFCQo';
class HospitalTab extends Component {
    state = {
        visible: false,
        allowDragging: true,
        isModalVisible: false,
    }

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
        
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            },
            origin: {
                latitude: 0,
                longitude: 0,
            },
            destination: {
                latitude: 0,
                longitude: 0,
            }


        };
    }
    componentWillMount() {

    }
    watchID = null
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)
                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }
                this.setState({ initialPosition: initialRegion })
                this.setState({ markerPosition: initialRegion })

            },
            error => alert(error.message),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                var lat = parseFloat(position.coords.latitude)
                var long = parseFloat(position.coords.longitude)

                var lastRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }

                this.setState({ initialPosition: lastRegion })
                this.setState({ markerPosition: lastRegion })
                this.setState({ destination: lastRegion })
                var des = {
                    latitude: 7.095369,
                    longitude: 125.613342
                }
                this.setState({ origin: des })
                GetNearest.getNearest(lat, long)
            },
            error => console.log(error),
        );
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    clearDirections() {
        this.setState({ origin: { latitude: 0, longitude: 0 } })
        this.setState({ destination: { latitude: 0, longitude: 0 } })
    }
    setDirections(id) {
        var lat = bot[id].coordinates.latitude
        var long = bot[id].coordinates.longitude
        var des = {
            latitude: lat,
            longitude: long
        }
        this.setState({ destination: des })
        this.setState({ origin: this.state.markerPosition })
    }
    render() {

        return (
            <Root>
                <Container>
                    <MapView
                        style={styles.container}
                        region={this.state.initialPosition}
                    >
                        <MapView.Marker
                            coordinate={this.state.markerPosition}>
                            <View style={styles.radius}>
                                <View style={styles.markers}>
                                </View>
                            </View>
                        </MapView.Marker>
                        {bot.map((markerq, i) => (
                            <MapView.Marker
                                style={{ width: 5, height: 5 }}
                                key={i}
                                coordinate={markerq.coordinates}
                                title={markerq.text}
                                description={markerq.distance + " meters"}
                            />
                        ))}
                        <MapViewDirections
                            origin={this.state.origin}
                            destination={this.state.destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink" />
                    </MapView>




                    <ActionButton buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#9b59b6' title="Nearest Hospitals" onPress={this._toggleModal}>
                            <Icon name="list" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="Clear Directions" onPress={() => { this.clearDirections() }}>
                            <MaterialCommunityIcons name="broom" size={30} style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>

                    {/* <Button full style={{ backgroundColor: "#e72828", position: "absolute", bottom: 0, alignItems: 'center', left: 0, right: 0 }}
                        onPress={this._toggleModal}>
                        <Text style={{ color: "white" }}>Choose Hospitals</Text>
                    </Button> */}
                    <Modal deviceWidth={width} deviceHeight={height} isVisible={this.state.isModalVisible}>
                        <View style={styles.modalstyle}>
                            <Button full style={{ backgroundColor: "#e72828", alignItems: 'center' }}
                                onPress={this._toggleModal}>
                                <Entypo size={20} style={{ color: 'white' }} name='chevron-thin-down' />
                            </Button>
                            <Content>
                                <Separator bordered>
                                    <Text style={{ fontSize: 13 }}>Nearest Hospitals</Text>
                                </Separator>
                                <List dataArray={bot}
                                    renderRow={(bot) =>

                                        <ListItem avatar onPress={() => this.setDirections(bot.id)}>
                                        <Left>
                                            <Text>{bot.id}</Text>
                                        </Left>
                                            <Body>
                                                <Text>{bot.text}</Text>
                                                <Text note>{bot.distance + " meters"}</Text>
                                            </Body>
                                            <Right>
                                                <Icon active name="arrow-forward" />
                                            </Right>
                                        </ListItem>
                                    }>

                                </List>
                            </Content>
                        </View>
                    </Modal>
                </Container>
            </Root>
        );
    }
}

export default HospitalTab;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    modalstyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    radius: {
        height: 20,
        width: 20,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255,0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    markers: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    }
})