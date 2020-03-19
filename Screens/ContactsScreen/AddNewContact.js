import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, Alert, Keyboard } from 'react-native';
import { Header, Left, Right, Icon, Container, Content, Form, Item, Input, Label, Button, Toast, Root } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../HomeScreen/Home'
import Contacts from './Contacts'
var pname = ""
var pnumber = ""
var mactitle = ""
var actitle = ""
class AddNewContact extends Component {
    static navigationOptions = {
        headerMode: { Visible: true },
        title: "Add New Contact",
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center'
        },
        headerRight: (<View></View>),
    }

    constructor(props) {
        super(props);
        this.state = {
            cname: '',
            cnumber: '',
            showToast: false,
            buttontxt: Contacts.passData() + ""
        };
    }

    componentWillMount = async () => {
        if (Contacts.passData() == "Update Contact") {
            this.setState({ cname: getcnamedata })
            this.setState({ cnumber: getcnumberdata })
            mactitle = "Update Contact"
            actitle = "Are you sure you want to update this contact?"
        }
        else {
            mactitle = "Add New Contact"
            actitle = "Are you sure you want to add this contact?"
        }
        try {
            let namenumber = await AsyncStorage.getItem('namenumber')
            if (namenumber != null) {
                let parsed = JSON.parse(namenumber)
                pname = parsed.name
                pnumber = parsed.number
            }
        } catch (error) {
            alert(error)
        }
    }
    SaveData() {
        if (pnumber == "") {
            var contactnumber = this.state.cnumber + ","
            var contactname = this.state.cname + ","
        }
        else {
            var contactnumber = pnumber + this.state.cnumber + ","
            var contactname = pname + this.state.cname + ","
        }
        var obj = {
            name: contactname,
            number: contactnumber
        }
        AsyncStorage.setItem('namenumber', JSON.stringify(obj));
        Toast.show({
            text: "New Contact Added",
            buttonText: "OK",
            position: "bottom",
        })

    }
    UpdateData() {
        cnames[rownumber] = this.state.cname
        cnumbers[rownumber] = this.state.cnumber
    }

    NewData() {
        var n1 = this.state.cname + ""
        var n2 = this.state.cnumber + ""
        if (n1.length == 0 || n2.length == 0) {
            alert('Please fill all the fields')
            Toast.show({
                text: "Please fill all the fields",
                buttonText: "OK",
                posiotion: "bottom"
            })
        } else {
            Alert.alert(
                mactitle,
                actitle,
                [
                    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
                    {
                        text: 'Ok', onPress: () => {
                            if (Contacts.passData() == "Update Contact") {
                                this.UpdateData()
                                toastmsg = "Contact Updated"
                                Contacts.newContactData()

                            } else {
                                this.SaveData()
                                toastmsg = "New Contact Added"
                            }
                            this.props.navigation.goBack()
                            this.setState({ cname: "" })
                            this.setState({ cnumber: "" })
                            Keyboard.dismiss()
                        }
                    }
                ],
                { cancelable: false }
            )
        }

    }
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: 'rgb(217,83,79)' }}>
                    <Form style={{ backgroundColor: 'white', margin: 10, borderRadius: 5 }}>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input onChangeText={(text) => this.setState({ cname: text })}
                                value={this.state.cname} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Contact Number</Label>
                            <Input keyboardType='numeric' onChangeText={(text) => this.setState({ cnumber: text })}
                                value={this.state.cnumber} />
                        </Item>

                        <Button block primary style={{ margin: 20, marginTop: 40, backgroundColor: '#e80000' }}
                            onPress={this.NewData.bind(this)}>
                            <Text style={{ color: 'white' }}>{this.state.buttontxt}</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>

        );
    }
}

export default AddNewContact;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    }
})