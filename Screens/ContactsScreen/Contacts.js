import React, { Component } from 'react';
import { Platform, StyleSheet, View, ListView, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Header, Left, Right, Icon, Container, Content, Button, List, ListItem, Text, Root,Separator, Body, Toast, SwipeRow } from 'native-base'
import HeaderContacts from '../../Headers/HeaderContacts'
import { NavigationEvents } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import DialogInput from 'react-native-dialog-input';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import ModalSpeak from '../HomeScreen/ModalSpeak'
global.ewq = ['aw']
global.cnames = [];
global.cnumbers = [];
const cdatas = []
var cu = ""
global.getcnamedata = ""
global.getcnumberdata = ""
global.toastmsg = ""
global.rownumber
class Contacts extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <MaterialIcons name="perm-contact-calendar" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: cnames,
            ModalSpeak: false
        };
    }
    showModalSpeak = () => {
        this.setState({ ModalSpeak: !this.state.ModalSpeak })
    }
    showModalState() {
        return this.state.ModalSpeak
    }
    async renderDatas() {
        //get Datas
        cnames.length = 0
        cnumbers.length = 0
        var check = ""
        try {
            let namenumber = await AsyncStorage.getItem('namenumber')
            if (namenumber != null) {
                let parsed = JSON.parse(namenumber)
                var pname = parsed.name
                var pnumber = parsed.number
                check = "check"
            }

        } catch (error) {
            alert(error)
        }
        //Assigning of Datas
        if (check != "") {
            try {
                var strnames = ""
                for (let i = 0; i < pname.length; i++) {
                    var str = pname.charAt(i) + ""
                    if (str == "," && i != 0) {
                        cnames.push(strnames)
                        strnames = ""
                    }
                    else {
                        strnames = strnames + str
                    }
                }
                var strnumber = ""
                for (let i = 0; i < pnumber.length; i++) {
                    var str = pnumber.charAt(i)
                    if (str == ",") {
                        cnumbers.push(strnumber)
                        strnumber = ""
                    }
                    else {
                        strnumber = strnumber + str
                    }
                }

                this.setState({ listViewData: cnames })

            } catch (error) {
                alert(error)
            }
        }
    }
    newContact() {
        if (cnames.length == 3) {
            alert('Only 3 contacts can be stored')
        }else{
            cu = "Submit New Contact"
            this.props.navigation.navigate('AddNewContact')
        }
        
    }
    upDateContact(data, secId, rowId, rowMap) {
        cu = "Update Contact"
        getcnamedata = cnames[rowId]
        getcnumberdata = cnumbers[rowId]
        rownumber = rowId
        this.props.navigation.navigate('AddNewContact')
    }
    static passData() {
        return cu;
    }
    DeleteContact() {

    }

    deleteRow(data, secId, rowId, rowMap) {
        var choice = ""
        Alert.alert(
            'Delete Contact',
            'Are You sure you want to delete this contact?',
            [
                { text: 'Cancel', onPress: () => this.setState({ listViewData: cnames }), style: 'cancel' },
                {
                    text: 'Ok', onPress: () => {
                        rowMap[`${secId}${rowId}`].props.closeRow();
                        const newData = [...this.state.listViewData];
                        var index = cnames.indexOf(data)
                        newData.splice(rowId, 1)
                        cnames.splice(index, 1)
                        var index2 = cnumbers.indexOf(cnumbers[rowId])
                        cnumbers.splice(index2, 1)
                        toastmsg= "Contact Deleted"
                        Contacts.newContactData()
                        this.setState({ listViewData: newData });
                    }
                }
            ],
            { cancelable: false }
        )
    }

    static newContactData() {
        var contactname = ""
        var contactnumber = ""
        for (let i = 0; i < cnames.length; i++) {
            if (i == 0) {
                contactname = cnames[i] + ","
                contactnumber = cnumbers[i] + ","
            }
            else {
                contactname = contactname + cnames[i] + ","
                contactnumber = contactnumber + cnumbers[i] + ","
            }
        }
        Toast.show({
            text: toastmsg,
            buttonText: "OK",
            position: "bottom",
        })
        var obj = {
            name: contactname,
            number: contactnumber
        }
        AsyncStorage.setItem('namenumber', JSON.stringify(obj));
    }

    calle(data, secId, rowId, rowMap) {
        RNImmediatePhoneCall.immediatePhoneCall(cnumbers[rowId])
    }

    render() {
        return (
            <Root>
                <Container>
                    <Content>
                        <NavigationEvents onWillFocus={() => this.renderDatas()} />

                        <HeaderContacts navigation={this.props.navigation} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} />
                        <List style={{ marginTop: 4 }}>
                            <Separator borderd>
                                <Text style={{ fontSize: 13 }}>Emergency Hotlines</Text>
                            </Separator>
                            <ListItem>
                                <Body>
                                    <Text style={{ fontFamily: fontF }}>911 Emergency</Text>
                                    <Text style={{ fontFamily: fontF }} note>911</Text>
                                </Body>
                                <Right>
                                    <MaterialIcons size={20} active name="call" />
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body>
                                    <Text style={{ fontFamily: fontF }} >Philippine Red Cross - Davao</Text>
                                    <Text style={{ fontFamily: fontF }} note>(082) 227-3949</Text>
                                </Body>
                                <Right>
                                    <MaterialIcons size={20} active name="call" />
                                </Right>
                            </ListItem>
                        </List>
                        <Separator borderd>
                            <Text style={{ fontSize: 13 }}>Emergency Contacts</Text>
                        </Separator>
                        <List
                            leftOpenValue={75} rightOpenValue={-78}
                            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                            // dataArray={cnumbers}
                            renderRow={(data, secId, rowId, rowMap) =>
                                <ListItem
                                    onPress={_ => this.calle(data, secId, rowId, rowMap)}>
                                    <Text style={{ fontFamily: fontF }} > {"      "}{data}
                                    </Text>
                                </ListItem>
                            }
                            renderLeftHiddenRow={(data, secId, rowId, rowMap) =>
                                <Button full onPress={_ => this.upDateContact(data, secId, rowId, rowMap)}>
                                    <Icon active name="md-create" />
                                </Button>}
                            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                                <Button full danger onPress={_ => this.deleteRow(data, secId, rowId, rowMap)}>
                                    <Icon acrive name="trash" />
                                </Button>}>
                        </List>
                    </Content>
                    <TouchableOpacity onPress={() => this.newContact()}
                        style={{
                            position: 'absolute', backgroundColor: '#e72828'
                            , width: 65, height: 65, borderRadius: 35, alignItems: 'center', justifyContent: 'center', bottom: 15, right: 15
                        }}>
                        <Entypo size={20} active name="plus" style={{ color: 'white' }} />
                    </TouchableOpacity>
                    <ModalSpeak navigation={this.props.navigation} isModalVisible={this.state.ModalSpeak} ModalState={this.showModalState.bind(this)} showModalSpeak={this.showModalSpeak.bind(this)} />
                </Container>
            </Root>
        );
    }
}

export default Contacts;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    }
})