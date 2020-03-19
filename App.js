
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import Home from './Screens/HomeScreen/Home'
import FirstAid from './Screens/FirstAidScreen/FirstAid'
import HospitalPharmacy from './Screens/HospitalPharmacyScreen/HospitalPharmacy'
import Contacts from './Screens/ContactsScreen/Contacts'
import Games from './Screens/GamesScreen/Games'
import AddNewContact from './Screens/ContactsScreen/AddNewContact'
import Questions from './Screens/QuestionScreen/Questions'
import Solutions from './Screens/SolutionsScreen/Solutions'
import MedCatch from './Screens/GamesScreen/MedCatch'
import Quiz from './Screens/GamesScreen/Quiz'
import firebase from 'firebase'
global.fontF
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mods: false,
      fonts: ""
    };
  }
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyByDFgXyu3VuoR9cWq7pUpxtU5KPPM-BqM",
      authDomain: "voiceaiddatabase.firebaseapp.com",
      databaseURL: "https://voiceaiddatabase.firebaseio.com",
      projectId: "voiceaiddatabase",
      storageBucket: "voiceaiddatabase.appspot.com",
      messagingSenderId: "76701056916"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }


    if (Platform.OS == 'ios') {
      fontF = 'Helvetica'

    }
    else {
      fontF = 'sans-serif-condensed'
    }
    this.setState({ fonts: fontF })
  }
  render() {
    return (
      <AppStackNavigator fonts={fontF} />
    );
  }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
    {/* <View styles={{backgroundColor: 'black', opcaity: 0.5}}> */}
    <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/LOGOnew1.png')} style={{ height: 100, width: 212 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    {/* </View> */}
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  "Home": { screen: Home },
  "First Aid": { screen: FirstAid },
  "Hospitals and Pharmacies": { screen: HospitalPharmacy },
  "Emergency Contacts": { screen: Contacts },
  "Games": { screen: Games },
}, {
    contentComponent: CustomDrawerComponent,
    style: {
      backgroundColor: '#263238',
      flex: 1
    },
    contentOptions: {
      // labelStyle: {
      //   color: 'white'
      // },

      labelStyle: {
        fontFamily: this.fontF
      },
      activeTintColor: 'rgb(10,144,25)',
      inactiveTintColor: '#ffffff'
    }
  })

const AppStackNavigator = createStackNavigator({
  AppDrawerNavigator: AppDrawerNavigator,

  AddNewContact: { screen: AddNewContact },
  Questions: { screen: Questions },
  Solutions: { screen: Solutions },
  MedCatch: { screen: MedCatch },
  Quiz: { screen: Quiz },
  Contacts: { screen: Contacts }
})
AppDrawerNavigator.navigationOptions = { header: null }