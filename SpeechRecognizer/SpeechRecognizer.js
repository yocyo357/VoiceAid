import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RecognizeChoices } from '../Screens/QuestionScreen/InjuryData';

class SpeechRecognizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

}
export default SpeechRecognizer;