import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Accordion, Header, Left, Right, Icon, Container, Tab, Tabs, TabHeading, Root, Spinner, Body, Content, List, ListItem, Separator, Button } from 'native-base'
import HeaderHospitalPharma from '../../Headers/HeaderHospitalPharma'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ModalSpeak from '../HomeScreen/ModalSpeak'
import MapView, { PROVIDER_GOOGLE, Polyline, Marker, AnimatedRegion } from 'react-native-maps'
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ActionButton from 'react-native-action-button';
import MapViewDirections from 'react-native-maps-directions';
import GetNearest from './Getnearest'
import MedSupplies from './MedSupplies'
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
merkersz = []
const GOOGLE_MAPS_APIKEY = 'AIzaSyDAi7txUXNwexgGUdfIe8YBgZaMcCsFCQo'
class HospitalPharmacy extends Component {
    static navigationOptions = {
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="pulse" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    state = {
        visible: false,
        allowDragging: true,
        isModalVisible1: false,
        isModalVisible2: false,
        isModalVisible3: false,
    }

    _toggleModal1 = () => {
        this.setState({ isModalVisible1: !this.state.isModalVisible1 });

    }

    _toggleModal2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 });
    }
    _toggleModal3 = () => {
        this.setState({ isModalVisible3: !this.state.isModalVisible3 });
    }
    toggleTopBtn() {
        this.setState({isVisiblesol: false})
        this.clearDirections()
        if (this.state.topbtnColor == "#e72828") {
            this.setMarkers(1)
            this.setState({ topbtnColor: "rgb(10,144,25)" })
            this.setState({ topbtnIcon: "pharmacy" })
            this.setState({ topbtnText: "Pharmacy" })

        } else {
            this.setMarkers(0)
            this.setState({ topbtnColor: "#e72828" })
            this.setState({ topbtnIcon: "hospital-building" })
            this.setState({ topbtnText: "Hospital" })
        }
    }
    toggleDirections(p){
        if (p == 1) {     
            this.setState({ topbtnColor: "#e72828" })
            this.setState({solcolor: 'red'})
            this.setState({ topbtnIcon: "hospital-building" })
            this.setState({ topbtnText: "Hospital" })
        } else {
            this.setState({ topbtnColor: "rgb(10,144,25)" })
            this.setState({solcolor: 'green'})
            this.setState({ topbtnIcon: "pharmacy" })
            this.setState({ topbtnText: "Pharmacy" })
        }
    }
    setNearestHP(){
        if (p == 1) {
            var des = {
                latitude: bot[0].coordinates.latitude,
                longitude: bot[0].coordinates.longitude
            }     
        } else {
            var des = {
                latitude: par[0].coordinates.latitude,
                longitude: par[0].coordinates.longitude
            }  
        }
        this.setState({solposition:des})
    }
    constructor(props) {
        super(props);
        this.state = {
            ModalSpeak: false,
            topbtnColor: "#e72828",
            topbtnIcon: "hospital-building",
            topbtnText: "Hospital",
            isVisiblepar: false,
            isVisiblebot: true,
            isVisiblesol: false,
            markers: [],
            markerbot: [],
            markerpar: [],
            soldescription:"",
            soltitle:"",
            solcolor:"red",
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
            },
            solposition: {
                latitude: 0,
                longitude: 0,
            }

        };
    }
    componentWillMount() {
        try {
            if (this.props.navigation.state.params.title == 'pharmacy') {
                this.setState({ topbtnColor: "#e72828" })
                this.toggleTopBtn()
            }else{
                this.setMarkers(0)
            }
        } catch (error) {
            this.setMarkers(0)
        }
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
                var des = {
                    latitude: lat,
                    longitude: long
                }
                this.setState({ origin: des })
                GetNearest.getNearest(lat, long)
                GetNearest.getNearestPharmacy(lat, long)
                this.setState({ initialPosition: initialRegion })
                this.setState({ markerPosition: initialRegion })

            },
            error => alert(error.message),
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 10000
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
                
            },
            error => console.log(error),
        );
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    setMarkers(val) {
        if (val == 1) {
            this.setState({ markerpar: [...par] })
            this.setState({ isVisiblepar: true })
            this.setState({ isVisiblebot: false })
        } else {
            this.setState({ markerbot: [...bot] })
            this.setState({ isVisiblepar: false })
            this.setState({ isVisiblebot: true })
        }
    }
    clearDirections() {
        this.setState({ origin: { latitude: 0, longitude: 0 } })
        this.setState({ destination: { latitude: 0, longitude: 0 } })
        this.setState({
            isVisiblesol: false
        })
        if (this.state.topbtnColor == "#e72828") {
            this.setMarkers(0)
        }else{
            this.setMarkers(1)
        }
    }
    setDirections(id, choice) {
        var desc=""
        var titl=""
        if (choice == 1) {
            var lat = bot[id].coordinates.latitude
            var long = bot[id].coordinates.longitude
            desc = bot[id].text
            titl = bot[id].distance+" meters"
            this._toggleModal1()
            // this.setState({ topbtnColor: "rgb(10,144,25)" }, function () {
            //     this.toggleTopBtn()
            // })

        } else {
            var lat = par[id].coordinates.latitude
            var long = par[id].coordinates.longitude
            desc = par[id].text
            titl = par[id].distance+" meters"
            this._toggleModal2()
            // this.setState({ topbtnColor: "#e72828" }, function () {
            //     this.toggleTopBtn()
            // })

        }
        this.toggleDirections(choice)
        this.setState({
            isVisiblepar: false,
            isVisiblebot: false,
            isVisiblesol: true
        })
        var des = {
            latitude: lat,
            longitude: long
        }
        this.setState({ 
            solposition: des ,
            soldescription: desc,
            soltitle: titl,
        })
        this.setState({ destination: des })
        // alert(this.state.destination.latitude+" "+this.state.destination.longitude)
        this.setState({ origin: this.state.markerPosition })
    }
    showModalState() {
        return this.state.ModalSpeak
    }
    showModalSpeak = () => {
        this.setState({ ModalSpeak: !this.state.ModalSpeak })
    }
    render() {
        return (
            <Root>
                <Container>
                    <ModalSpeak navigation={this.props.navigation} isModalVisible={this.state.ModalSpeak} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} />
                    <HeaderHospitalPharma navigation={this.props.navigation} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} />
                    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:"#e72828"}}>
                        <Tab heading={<TabHeading style={{backgroundColor:"white"}}><Text style={{color:"#e72828"}}>Hospital</Text></TabHeading>}>
                            <HospitalTab />
                        </Tab>
                        <Tab heading={<TabHeading style={{backgroundColor:"white"}}><Text style={{color:"#e72828"}}>Pharmacy</Text></TabHeading>}>
                            <PharmacyTab />
                        </Tab>
                    </Tabs>
                </View> */}

                    <MapView
                        style={styles.container}
                        region={this.state.initialPosition}
                    >
                        <MapView.Marker
                            coordinate={this.state.markerPosition}
                        // image={<Image source={require("../../assets/user.png")}/>}
                        >

                            <View>
                                <View style={styles.radius}>

                                    <View style={styles.markers}>
                                    </View>
                                </View>
                            </View>
                        </MapView.Marker>
                        {this.state.isVisiblesol &&
                            <MapView.Marker
                                key={`${0}-${this.state.solcolor}`}
                                coordinate={this.state.solposition}
                                title={this.state.soldescription}
                                description={this.state.soltitle}
                                pinColor={this.state.solcolor}>
                            </MapView.Marker>}

                        {this.state.markerbot.map((markerq, i) => (
                            this.state.isVisiblebot &&
                            <MapView.Marker
                                key={i}
                                coordinate={markerq.coordinates}
                                title={markerq.text}
                                description={markerq.distance + " meters"}
                                pinColor={markerq.color}>
                            </MapView.Marker>
                        ))}

                        {this.state.markerpar.map((markerq, i) => (
                            this.state.isVisiblepar &&
                            <MapView.Marker
                                key={i}
                                coordinate={markerq.coordinates}
                                title={markerq.text}
                                description={markerq.distance + " meters"}
                                pinColor={markerq.color}>
                            </MapView.Marker>
                        ))}

                        <MapViewDirections
                            origin={this.state.origin}
                            destination={this.state.destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                            onStart={(params) => {
                                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                            }}
                            onReady={result => {
                                console.log('Distance: ${result.distance} km')
                                console.log('Duration: ${result.duration} min.')
                            }}
                            onError={(errorMessage) => {
                                console.log(errorMessage)
                            }} />

                    </MapView>
                    <Spinner color='red' />
                    <TouchableOpacity style={{
                        position: 'absolute', top: 75, right: 15, borderRadius: 100, width: 65, height: 65, alignItems: 'center', backgroundColor: 'white',
                        justifyContent: 'center', borderWidth: 3, borderBottomColor: 'red', borderColor: this.state.topbtnColor
                    }}
                        onPress={() => this.toggleTopBtn()}><MaterialCommunityIcons size={20} style={{ color: this.state.topbtnColor, alignSelf: 'center' }} name={this.state.topbtnIcon} /><Text style={{ fontSize: 10, color: this.state.topbtnColor }}>
                            {this.state.topbtnText}</Text></TouchableOpacity>
                    <ActionButton buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#e72828' title="Nearest Hospitals" onPress={this._toggleModal1}>
                            <MaterialCommunityIcons name="hospital-building" size={30} style={[styles.actionButtonIcon, { color: 'white' }]} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='rgb(10,144,25)' title="Nearest Pharmacy" onPress={this._toggleModal2}>
                            <MaterialCommunityIcons name="pharmacy" size={30} style={[styles.actionButtonIcon, { color: 'white' }]} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='green' title="Medical Supplies" onPress={this._toggleModal3}>
                            <Ionicons name="md-medkit" size={30} style={[styles.actionButtonIcon, { color: 'white' }]} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#9b59b6' title="Clear Directions" onPress={() => { this.clearDirections() }}>
                            <MaterialCommunityIcons name="broom" size={30} style={[styles.actionButtonIcon, { color: 'white' }]} />
                        </ActionButton.Item>
                    </ActionButton>

                    <Modal deviceWidth={width} deviceHeight={height} isVisible={this.state.isModalVisible1}>
                        <View style={styles.modalstyle}>
                            <Button full style={{ backgroundColor: "#e72828", alignItems: 'center' }}
                                onPress={this._toggleModal1}>
                                <Entypo size={20} style={{ color: 'white' }} name='chevron-thin-down' />
                            </Button>
                            <Content>
                                <Separator bordered>
                                    <Text style={{ fontSize: 13 }}>Nearest Hospitals</Text>
                                </Separator>
                                <List dataArray={bot}
                                    renderRow={(bot) =>

                                        <ListItem avatar onPress={() => this.setDirections(bot.id, 1)}>
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
                    <Modal deviceWidth={width} deviceHeight={height} isVisible={this.state.isModalVisible2}>
                        <View style={styles.modalstyle}>
                            <Button full style={{ backgroundColor: "#e72828", alignItems: 'center' }}
                                onPress={this._toggleModal2}>
                                <Entypo size={20} style={{ color: 'white' }} name='chevron-thin-down' />
                            </Button>
                            <Content>
                                <Separator bordered>
                                    <Text style={{ fontSize: 13 }}>Nearest Pharmacies</Text>
                                </Separator>
                                <List dataArray={par}
                                    renderRow={(par) =>

                                        <ListItem avatar onPress={() => this.setDirections(par.id, 2)}>
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
                    <Modal deviceWidth={width} deviceHeight={height} isVisible={this.state.isModalVisible3}>
                        <View style={styles.modalstyle}>
                            <Button full style={{ backgroundColor: "#e72828", alignItems: 'center' }}
                                onPress={this._toggleModal3}>
                                <Entypo size={20} style={{ color: 'white' }} name='chevron-thin-down' />
                            </Button>
                            <Content padder>
                                <Separator bordered>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Medical Supplies</Text>
                                </Separator>
                                <Accordion
                                    dataArray={AccodionMedSupplies}
                                    headerStyle={{ backgroundColor: "#b7daf8" }}
                                    contentStyle={{ backgroundColor: "#ddecf8" }}
                                />
                            </Content>
                        </View>
                    </Modal>
                </Container>
            </Root>
        );
    }
}

export default HospitalPharmacy;

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
    },
    markers1: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
    }

})