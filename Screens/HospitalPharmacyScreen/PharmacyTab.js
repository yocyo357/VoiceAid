import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header, Left, Right, Icon, Container, Root,Button, Content,Separator,Body,List, ListItem } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import MapView, { PROVIDER_GOOGLE, Polyline, Marker, AnimatedRegion } from 'react-native-maps'
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ActionButton from 'react-native-action-button';
import MapViewDirections from 'react-native-maps-directions';


const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
merkersz = []
const GOOGLE_MAPS_APIKEY = 'AIzaSyDAi7txUXNwexgGUdfIe8YBgZaMcCsFCQo'
class PharmacyTab extends Component {
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
                GetNearest.getNearestPharmacy(lat, long)
            },
            error => console.log(error),
        );
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
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
                        {par.map((markerq, i) => (
                        <MapView.Marker
                            style={{ width: 5, height: 5 }}
                            key={i}
                            coordinate={markerq.coordinates}
                            title={markerq.text}
                            description={markerq.distance + " meters"}
                        />
                    ))}
                    </MapView>







                    <ActionButton buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#9b59b6' title="Nearest Hospitals" onPress={this._toggleModal}>
                            <Icon name="list" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="Clear Directions" onPress={() => { this.clearDirections() }}>
                            <MaterialCommunityIcons name="broom" size={30} style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>

                    <Modal deviceWidth={width} deviceHeight={height} isVisible={this.state.isModalVisible}>
                        <View style={styles.modalstyle}>
                            <Button full style={{ backgroundColor: "#e72828", alignItems: 'center' }}
                                onPress={this._toggleModal}>
                                <Entypo size={20} style={{ color: 'white' }} name='chevron-thin-down' />
                            </Button>
                            <Content>
                                <Separator bordered>
                                    <Text style={{ fontSize: 13 }}>Nearest Pharmacies</Text>
                                </Separator>
                                <List dataArray={par}
                                    renderRow={(par) =>

                                        <ListItem avatar onPress={() => this.setDirections(par.id)}>
                                        <Left>
                                            <Text>{par.id}</Text>
                                        </Left>
                                            <Body>
                                                <Text>{par.text}</Text>
                                                <Text note>{par.distance + " meters"}</Text>
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

export default PharmacyTab;

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