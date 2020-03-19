import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, AsyncStorage } from 'react-native';
import { Header, Left, Right, Icon, Content, Card, CardItem, Body, Container, Button, ActionSheet } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MapView from 'react-native-maps'
import Modal from "react-native-modal"
import { setQuestions } from '../QuestionScreen/InjuryData';

const { width, height } = Dimensions.get('window')

var existingquestion = []
var refreshInterval

var queschoice = [
    { id: 0, question: "What does asthmatic people use whenever they have an attack?", tagalog: "Ano ang ginagamit ng mga pasyente sa tuwing inaatake ito ng hika?", visaya: "Unsa ang ginagamit sa mga kaswalti kon sila atakihon ug hubak?", c1: "Inhaler", c1tagalog: "Inhaler", c1visaya: "Inhaler", c2: "Aspirin", c2tagalog: "Aspirin", c2visaya: "Aspirin", c3: "Cough medicine", c3tagalog: "Gamot sa ubo", c3visaya: "Tambal sa ubo", asnwer: 1 },

    { id: 1, question: "When a casualty has been bitten by a snake, he/she should not _______ the bitten limb to prevent the venom from spreading.", tagalog: "Kung ang pasyente ay nakagat ng ahas, hindi niya dapat _______ ang nakagat na paa upang		maiwasan ang pagkalat ng lason.", visaya: "Kon ang kaswalti napaakan ug bitin, dili kini angay na _________ ang napaakang tiil arun 	mapugngan ang pagkalat sa lala.", c1: "Move", c1tagalog: "Igalaw", c1visaya: "Lihukon", c2: "Stay", c2tagalog: "Manatili", c2visaya: "Ipundo", c3: "Rest", c3tagalog: "Magpahinga", c3visaya: "Ipahulay", asnwer: 1 },

    { id: 2, question: "When bitten by an animal/human, you should wash your wound with __________ to minimize the risk of infection.", tagalog: "Kung ikaw ay nakagat ng isang hayop/tao, dapat mong hugasan ang iyong sugat ng ______ 	para mabawasan ang panganib na maimpeksyon ito.", visaya: "Kon ikaw napaakan ug mananap o tawo, angay na imong hugasan imong samad ug ________ 	aron mapakunhod ang risgo niini nga ma impeksyon.", c1: "Soap and Warm water", c1tagalog: "Sabon at Mainit na tubig", c1visaya: "Sabon ug Init nga tubig", c2: "Soap and Alcohol", c2tagalog: "Sabon at Alkohol", c2visaya: "Sabon ug Alkohol", c3: "Alcohol and Betadine", c3tagalog: "Alkohol at Betadine", c3visaya: "Alkohol ug Betadine", asnwer: 1 },

    { id: 3, question: "For how many hours does the casualty have to avoid drinking anything hot after his/her mouth bled?", tagalog: "Ilang oras dapat umiwas ang pasyente saa pag inom ng kahit anong mainit na inumin matapos 	magkasugat ang kanyang bibig?", visaya: "Pila ka oras dapat maglikay ang kaswalti sap pag inom ug miski unsang init na ilimnon human masamdam ang imong baba?", c1: "24 hours", c1tagalog: "24 oras", c1visaya: "24 ka oras", c2: "8 hours", c2tagalog: "8 oras", c2visaya: "8 ka oras", c3: "12 hours", c3tagalog: "12 oras", c3visaya: "12 ka oras", asnwer: 3 },

    { id: 4, question: "If the varicose is bleeding, the leg should be _______ and supported until help arrives.", tagalog: "Kung ang varicose vein ay nagdurugo, dapat _____ at suportado ang binti hanggang sa dumating 	ang tulong.", visaya: "Kon ang varicose vein kay nagadugo, angay __________ ug suportahi ang paa niini hantod sa 	muabot ang tabang.", c1: "Bended", c1tagalog: "Nakayuko", c1visaya: "Iyuko", c2: "Folded", c2tagalog: "Nakatiklop", c2visaya: "Ipilo", c3: "Raised", c3tagalog: "Nakataas", c3visaya: "Itaas ", asnwer: 3 },

    { id: 5, question: "How many minutes are you supposed to place the cold compress on the bruised area?", tagalog: "Ilang minuto mo dapat ilagay ang cold compress sa may pasang bahagi?", visaya: "Pila ka minutos nimo angay ibutang ang cold compress sa bun-og nga bahin?", c1: "At least 15 minutes", c1tagalog: "Hindi bababa sa 15 minuto", c1visaya: "Dili moubos sa 15 minutos", c2: "At least 30 minutes", c2tagalog: "Hindi bababa sa 30 minuto", c2visaya: "Dili moubos sa 30 minutos", c3: "At least 10 minutes", c3tagalog: "Hindi bababa sa 10 minuto", c3visaya: "Dili moubos sa 10 minutos", asnwer: 3 },

    { id: 6, question: "For an electrical burn, you can use a _____________ for covering the burn on a foot or hand.", tagalog: "Para sa electricl burn, maaari kang gumamit ng ___________ pangtakip sa nasunog na paa o kamay.", visaya: "Alang sa electrical burn, mahimong mugamit ug __________ pantabon sa nasunog nga tiil o kamot.", c1: "Dry cloth", c1tagalog: "Tuyong tela", c1visaya: "Uga nga tela", c2: "Wet cloth", c2tagalog: "Basang tela", c2visaya: "Basa nga tela", c3: "Clean plastic", c3tagalog: "Malinis na plastic", c3visaya: "Limpyo nga plastik", asnwer: 3 },

    { id: 7, question: "For chemical burn, you need to wear a _______________ to prevent contact with the chemical.", tagalog: "Para sa chemical burn, kailangan mong magsuot ng ________ para mapigilan ang pagkakaroon ng direktang kontak sa kemikal.", visaya: "Alang sa chemical burn, kinahanglan nimong magsuot ug ________ aron mapugngan ang 	pagluntad ug direkta nga kontak sa kemikal.", c1: "Disposable gloves", c1tagalog: "Pwedeng itapon na guwantes", c1visaya: "Mahimong ilabay nga gwantes", c2: "Protective gloves", c2tagalog: "Guwantes na pang proteksiyon", c2visaya: "Gwantes na angay pang proteksyon", c3: "Plastic gloves", c3tagalog: "Plastik na guwantes", c3visaya: "Plastic nga gwantes", asnwer: 2 },

    { id: 8, question: "For chemical burn, how many minutes do you need to flood the burn with water to disperse the chemical and stop the burning?", tagalog: "Para sa chemical burn, ilang minute mo dapat bahain ng tubig ang napasong parte para kumalat ang kemikal at matigil ang pgkapaso?", visaya: "Alang sa chemical burn, pila ka minutos nimo angay na bahaon ug tubig ang napaso nga bahin 	aron mukalat ang kemikal ug mahunong ang pagkapaso?", c1: "At least 30 minute", c1tagalog: "Hindi bababa sa 30 minuto", c1visaya: "Dili moubos sa  30 minutos", c2: "At least 20 minutes", c2tagalog: "Hindi bababa sa 20 minuto", c2visaya: "Dili moubos sa 20 minutos", c3: "At least 10 minutes", c3tagalog: "Hindi bababa sa 10 minuto", c3visaya: "Dili moubos sa 10 minutos", asnwer: 2 },

    { id: 9, question: "For heart attack, how many full-dose of aspirin(325mg) does the casualty needs to take?", tagalog: "Para sa atake sa puso, ilang full-dose ng aspiring(325mg) ang kailangang inomin ng pasyente?", visaya: "Alang sa atake sa kasing-kasing, pila ka full-dose nga aspirin(325mg) ang kinahanglan nimong ipa-inom sa kaswalti?", c1: "One", c1tagalog: "Isa", c1visaya: "Usa", c2: "Two", c2tagalog: "Dalawa", c2visaya: "Duha", c3: "Three", c3tagalog: "Tatlo", c3visaya: "Tulo", asnwer: 1 },

    { id: 10, question: "For heart attack, how many low-dose of aspirin(81mg) does the casualty needs to take?", tagalog: "Para sa atake sa puso, ilang low-dose ng aspirin (81mg bawat isa) ang kailangang inomin ng pasytente?", visaya: "Alang sa atake sa kasing-kasing, pila ka low-dose nga aspirin(81mg matag isa) ang kinahanglan nimong ipa-inom sa kaswalti?", c1: "One", c1tagalog: "Isa", c1visaya: "Usa", c2: "Two", c2tagalog: "Dalawa", c2visaya: "Duha", c3: "Three", c3tagalog: "Tatlo", c3visaya: "Tulo", asnwer: 2 },

    { id: 11, question: "For adult’s CPR, how many chest compressions do you need to give the casualty?", tagalog: "Para sa CPR na pang matanda, ilang chest compressions ang kinakailangan mong ibigay sa pasyente?", visaya: "Alang sa CPR sa mga hamtong, pila ka chest compressions ang kinahanglan nimong ihatag sa kaswalti?", c1: "10 compressions", c1tagalog: "10 compressions", c1visaya: "10 ka compressions", c2: "20 compressions", c2tagalog: "20 compressions", c2visaya: "20 ka compressions", c3: "30 compressions", c3tagalog: "30 compressions", c3visaya: "30 ka compressions", asnwer: 3 },

    { id: 12, question: "For adult’s CPR, how many rescue breaths do you need to give the casualty?", tagalog: "Para sa CPR na pang matanda, ilang rescue breaths ang kinakailangan mong ibigay sa pasyente?", visaya: "Alang sa CPR sa mga hamtong, pila ka rescue breaths ang kinahanglan nimong ihatag sa kaswalti?", c1: "1 rescue breath", c1tagalog: "1 rescue breath", c1visaya: "1 ka rescue breath", c2: "2 rescue breaths", c2tagalog: "2 rescue breaths", c2visaya: "2 ka rescue breaths", c3: "3 rescue breaths", c3tagalog: "3 rescue breaths", c3visaya: "3 ka rescue breaths", asnwer: 2 },

    { id: 13, question: "For child’s CPR, how many chest compressions do you need to give the casualty?", tagalog: "Para sa CPR na pang bata, ilang chest compressions ang kinakailangan mong ibigay sa bata?", visaya: "Alang sa CPR sa mga bata, pila ka chest compressions ang kinahanglan nimong ihatag sa bata?", c1: "10 compressions", c1tagalog: "10 compressions", c1visaya: "10 ka compressions", c2: "20 compressions", c2tagalog: "20 compressions", c2visaya: "20 ka compressions", c3: "30 compressions", c3tagalog: "30 compressions", c3visaya: "30 ka compressions", asnwer: 3 },

    { id: 14, question: "For child’s CPR, how many rescue breaths do you need to give the casualty?", tagalog: "Para sa CPR na pang bata, ilang rescue breaths ang kinakailangan mong ibigay sa bata?", visaya: "Alang sa CPR sa mga bata, pila ka rescue breaths ang kinahanglan nimong ihatag sa bata?", c1: "2 rescue breaths", c1tagalog: "2 rescue breath", c1visaya: "2 ka rescue breath", c2: "4 rescue breaths", c2tagalog: "4 rescue breaths", c2visaya: "4 ka rescue breaths", c3: "6 rescue breaths", c3tagalog: "6 rescue breaths", c3visaya: "6 ka rescue breaths", asnwer: 1 },

    { id: 15, question: "What do you call the tool that responders use in doing CPR?", tagalog: "Anong tawag sa bagay na ginagamit ng mga taga responde sa pagsasagawa ng CPR?", visaya: "Unsay tawag sa butang na ginagamit sa mga naga responde sa pagbuhta ug CPR?", c1: "Inhaler", c1tagalog: "Inhaler", c1visaya: "Inhaler", c2: "Breathing barrier", c2tagalog: "Breathing barrier", c2visaya: "Breathing barrier", c3: "Mask", c3tagalog: "Maskara", c3visaya: "Maskara", asnwer: 2 },

    { id: 16, question: "During heat stroke, you should give the casualty a food or drink.", tagalog: "Kapag nakaranas ng heat stroke, dapat mong bigyan ng pagkain o inomin.", visaya: "Sa panahon sa heat stroke, imo dapat tagaan ang kaswalti ug pagkaon ug ilimnon.", c1: "True", c1tagalog: "Tama", c1visaya: "Tinuod", c2: "Maybe", c2tagalog: "Marahil", c2visaya: "Matud", c3: "False", c3tagalog: "Mali", c3visaya: "Dili tinuod", asnwer: 3 },

    { id: 17, question: "For infant’s CPR, how many fingers do you use to perform chest compressions?", tagalog: "Para sa CPR na pang sanggol, ilang daliri ang ginagamit sa pagbibigay ng chest compressions?", visaya: "Alang sa CPR sa mga masuso, pila ka tudlo ang angay gamiton sa paghatag ug chest compression?", c1: "2 fingers", c1tagalog: "2 na daliri", c1visaya: "2 ka tudlo", c2: "4 fingers", c2tagalog: "4 na daliri", c2visaya: "4 ka tudlo", c3: "5 fingers", c3tagalog: "5 na daliri", c3visaya: "5 ka tudlo", asnwer: 1 },

    { id: 18, question: "For infant’s CPR, how many chest compressions do you need to give the casualty?", tagalog: "Para sa CPR na pang sanggol, ilang chest compressions ang kinakailangan mong ibigay sa sanggol?", visaya: "Alang sa CPR sa mga masuso, pila ka chest compressions ang kinahanglan nimong ihatag sa masuso?", c1: "10 compressions", c1tagalog: "10 compressions", c1visaya: "10 ka compressions", c2: "20 compressions", c2tagalog: "20 compressions", c2visaya: "20 ka compressions", c3: "30 compressions", c3tagalog: "30 compressions", c3visaya: "30 ka compressions", asnwer: 3 },

    { id: 19, question: "For infant’s CPR, how many rescue breaths do you need to give the casualty?", tagalog: "Para sa CPR na pang sanggol, ilang rescue breaths ang kinakailangan mong ibigay sa sanggol?", visaya: "Alang sa CPR sa mga masuso, pila ka rescue breaths ang kinahanglan nimong ihatag sa masuso?", c1: "2 rescue breaths", c1tagalog: "2 rescue breath", c1visaya: "2 ka rescue breath", c2: "4 rescue breaths", c2tagalog: "4 rescue breaths", c2visaya: "4 ka rescue breaths", c3: "6 rescue breaths", c3tagalog: "6 rescue breaths", c3visaya: "6 ka rescue breaths", asnwer: 1 },

    { id: 20, question: "For poison that has been absorbed through the skin, you need to wash it with cold water for how many minutes?", tagalog: "Para sa pagkalason sa pagkasipsip sa pamamagitan ng balat, ilang minuto mo kailangang  hugasan ang parteng iyon ng malamig na tubig?", visaya: " Alang sa nahiluan tungod sa nasuyop pinaagi sa imong panit, pila ka minuto nimo kinahanglan hugasan ug bugnawg tubig ang bahin nga napaso?", c1: "20 minutes", c1tagalog: "20 minuto", c1visaya: "20 ka minutos", c2: "40 minutes", c2tagalog: "40 minuto", c2visaya: "40 ka minutos", c3: "60 minutes", c3tagalog: "60 minuto", c3visaya: "60 ka minutos", asnwer: 1 },

    { id: 21, question: "For jellyfish sting, you can use _____ to incapacitate the stinging cells.", tagalog: "Para sa nasugatn ng dikya, maaari kang gumamit ng ______ para mawalan ng kakayahan ang mga nakakasakit na selula.", visaya: "Alang sa nasamdan tungod sa sabayon, mahimo kang mugamit ug ________ aron mawala ang abilidad ang mga makasakit nga selula?", c1: "Water", c1tagalog: "Tubig", c1visaya: "Tubig ", c2: "Vinegar", c2tagalog: "Suka", c2visaya: "Suka ", c3: "Alcohol", c3tagalog: "Alkohol", c3visaya: "Alkohol ", asnwer: 2 },

    { id: 22, question: "For Portuguese man o’ wars sting, you can immerse the affected area in ___________ to treat the pain.", tagalog: "Para sa nasugatan ng Portuguese man o’ wars, maaari mong isawsaw ang napinsalang bahagi sa ___________ para gamutin ang sakit.", visaya: "Alang sa nasamdan tungod sa poruguese man o’wars, mahimo nimong isawsaw ang napaakang bahin sa  ________ aron tambalan ang sakit.", c1: "Hot water", c1tagalog: "Mainit na tubig", c1visaya: "Ininit tubig", c2: "Cold water", c2tagalog: "Malamig na tubig", c2visaya: "Bugnawng tubig", c3: "Luke-warm water", c3tagalog: "Maligamgam na tubig", c3visaya: "Dili kayo init nga tubig", asnwer: 1 },

    { id: 23, question: "For strain and sprain, you can support the injured area by _______ it to minimize the bruising and swelling.", tagalog: "Para sa pilay, maari mong suportahan ang napinsalang lugar sa pamamagitan ng ________ dito para mabawasan ang pasa at pamamaga.", visaya: "Alang sa piang, mahimo nimong suportahan ang nadaot nga lugar pinaagi sa ______ niini aron makunhod ang bun-og ug hubag.", c1: "Raising", c1tagalog: "Pagtaas", c1visaya: "Pagtaas", c2: "Bending", c2tagalog: "Pagyuko", c2visaya: "Pagyukbo", c3: "Covering", c3tagalog: "Pagtakip", c3visaya: "Pagtabon", asnwer: 1 },

    { id: 24, question: "For shoulder fracture, you need to secure the arm by tying a _____________ around the chest and the sling to provide an extra support.", tagalog: "Para sa nabaling balikat, kailangan mong i-secure ang braso nito sa pamamagitan ng pagtali ng ______ sa paligid ng dibdib at ng sling para magbigay ng dagdag suporta.", visaya: "Alang sa nabali nga abaga, kinahanglang i-secure ang bukton niini pinaagi sa pagtali ug ________ sa palibot sa dughan gu ang sling aron maghatag ug dugang suporta.", c1: "Handkerchief", c1tagalog: "Panyo", c1visaya: "Panyo", c2: "Arm sling", c2tagalog: "Arm sling", c2visaya: "Arm sling", c3: "Broad fold bandage", c3tagalog: "Broad fold bandage", c3visaya: "Broada fold bandage", asnwer: 3 },

    { id: 25, question: "For hand and fingers fracture, you need to wrap the hand in a soft, __________ for extra protection.", tagalog: "Para sa nabaling kamay at mga daliri, kailangan mong ibalot ang kamay nito sa malambot, _______ upang magbigay ng dagdag proteksyon.", visaya: "Alang sa nabaling kamot ug mga tudlo, kinahanglan nimong ibalot ang kamot niini sa usa ka humok, _______ aron maghatag ug dugang proteksyon.", c1: "Non?u?y padding", c1tagalog: "Hindi mahimulmol na padding", c1visaya: "Dili mahimulmol", c2: "Rough padding", c2tagalog: "Magaspang na padding", c2visaya: "Magaspang nga padding ", c3: "Thick padding", c3tagalog: "Makapal na padding", c3visaya: "Baga nga padding", asnwer: 1 },

    { id: 26, question: "For forearm and wrist fracture, you can use ______ as a soft padding to surround the forearm.", tagalog: "Para sa nabaling bisig at pulso, maaari kang gumamit ng ______ bilang malambot na padding upang palibutan ang bisig nito.", visaya: "Alang sa nabaling bukton ug mga tudlo, mahimo kang mag gamit ug _______ ingon humok nga padding aron ituyok sa bukton niini.", c1: "Pillow", c1tagalog: "Unan", c1visaya: "Unlan", c2: "Cotton", c2tagalog: "Bulak", c2visaya: "Gapas", c3: "Small towel", c3tagalog: "Maliit na tuwalya", c3visaya: "Gamay nga tuwalya", asnwer: 3 },

    { id: 27, question: "For elbow fracture that can be bent, you need to keep the bandages on the fracture site.", tagalog: "Para sa nabaling siko na maaaring mabaluktot, kailangan mong panatilihin ang mga bandage sa lugar ng bali.", visaya: "Alang sa nabaling siko nga pwedeng bawogon, kinahanglan nimong bantayan ang mga bandage ng sa nabaling bahin.", c1: "True", c1tagalog: "Tama", c1visaya: "Tinuod", c2: "Maybe", c2tagalog: "Marahil", c2visaya: "Matud", c3: "False", c3tagalog: "Mali", c3visaya: "Dili tinuod", asnwer: 3 },

    { id: 28, question: "For upper arm fracture, you need to remove all jewelry such as bracelets, rings, and watches.", tagalog: "Para sa nabaling itaas na bahagi ng braso, kailangan mong tanggalin lahat ng mga alahas nito tulad ng bracelet, singsing, at relo.", visaya: "Alang sa nabaling taas nga bahin sa bukton, kinahanglan nimong tanggalon tanang alahas niini sama sa bracelet, singsing, ug relo.", c1: "True", c1tagalog: "Tama", c1visaya: "Tinuod", c2: "Maybe", c2tagalog: "Marahil", c2visaya: "Matud", c3: "False", c3tagalog: "Mali", c3visaya: "Dili tinuod", asnwer: 1 },

    { id: 29, question: "For an unconscious infant that has been drowned, you need to give a 5 minutes CPR first before you call for emergency help.", tagalog: "Para sa walang malay na sanggol na nalunod, kailangan mong bigyan ito ng CPR sa loob ng 5 minuto bago tumawag ng tulong emerhensiya.", visaya: "Alang sa walay panimuot nga masuso, kinahanglan nimong tagaan kini ug CPR sa sulod sa 15 minutos bago mangayog tabang.", c1: "True", c1tagalog: "Tama", c1visaya: "Tinuod ", c2: "Maybe", c2tagalog: "Marahil", c2visaya: "Matud ", c3: "False", c3tagalog: "Mali", c3visaya: "Dili tinuod", asnwer: 3 },

    { id: 30, question: "For dehydration, you may use _____ as a replacement for oral rehydration.", tagalog: "Para sa dehydration, maaring gumamqit ng _______ bilang pamalit para sa oral rehydration.", visaya: "Alang sa dehydration, mahimo nimong gamiton ang ________ ingon pangpuli sa oral rehydration.", c1: "Pepper", c1tagalog: "Paminta", c1visaya: "Paminta", c2: "Sugar", c2tagalog: "Asukal", c2visaya: "Asukal", c3: "Salt", c3tagalog: "Asin ", c3visaya: "Asin", asnwer: 3 },

    { id: 31, question: "For a choking infant, how many back blows do you have to give?", tagalog: "Para sa nabulunang sanggol, ilang back blows ang kailangan mong ibigay?", visaya: "Alang sa natuk-an  nga masuso, pila ka back blows ang angay nimong ihatag?", c1: "2", c1tagalog: "2", c1visaya: "2", c2: "5", c2tagalog: "5", c2visaya: "5", c3: "8", c3tagalog: "8", c3visaya: "8", asnwer: 2 },

    { id: 32, question: "For a chocking child that’s not breathing, how many abdominal thrusts do you have to give?", tagalog: "Para sa hindi humihingang nabulungang bata, ilang tulak sa tiyan ang kailangan mong ibigay?", visaya: "Alang sa natuk-an  nga bata nga wala gaginhawa, pila ka abdominal thrust ang kinahanglan ibutang?", c1: "2", c1tagalog: "2", c1visaya: "2", c2: "5", c2tagalog: "5", c2visaya: "5", c3: "10", c3tagalog: "10", c3visaya: "10", asnwer: 2 },

]

var r
var shuffleChoices
var shuffled
var refreshInterval
let count
var answer
var useranswer
let highscore
var truescore = 0
class Quiz extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerMode: { Visible: true },
            headerRight: navigation.state.params && navigation.state.params.headerRight
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            time: 30,
            timecolor: 'green',
            stage: 0,

            s1: "white",
            s2: "white",
            s3: "white",
            t1: "black",
            t2: "black",
            t3: "black",

            selected: 0,

            question: "",
            c1: "",
            c2: "",
            c3: "",

            answer: "",
            useranswer: "",
            score: 0,
            id: 0,

            ModalVisible: false,
            ModalVisible1: false,
            best: 0,

            icon: "check",
            color: "",

        }
    }
    componentWillMount = async () => {
        this.setState({ qdata: [...queschoice] })
        this._changeLang()
        this.generateQuestion()
        highscore = await AsyncStorage.getItem('quiz')
        if (highscore == null) {
            highscore = 0
        }
        highscore = parseInt(highscore)
    }
    onSelectChoice(selected) {
        this.clearState()
        if (selected == 1) {
            this.setState({ s1: "green", t1: "white" })
        } else if (selected == 2) {
            this.setState({ s2: "green", t2: "white" })
        } else {
            this.setState({ s3: "green", t3: "white" })
        }
        useranswer = (selected - 1)
    }
    clearState() {
        this.setState({
            s1: "white", t1: "black",
            s2: "white", t2: "black",
            s3: "white", t3: "black"
        })
    }
    startTimer() {
        this.setState({ timecolor: 'green' })
        refreshInterval = setInterval(() => {
            count--
            this.setState({ time: count })
            if (count == 0) {
                if (this.state.stage + 1 > 10) {
                    this.calculatehighscore()
                    this.ModalState1()
                } else {
                    this.ModalState1()
                }
                clearInterval(refreshInterval)
            } else if (count == 5) {
                this.setState({ timecolor: 'rgb(217,83,79)' })
            }

        }, 1000)
    }
    generateQuestion() {
        count = 30
        this.setState({ stage: this.state.stage + 1 })
        this.setState({ time: count })
        this.startTimer()
        this.clearState()
        var codes = this.translateq();
        bol = true
        do {
            r = Math.floor(Math.random() * 33) + 1
            if (existingquestion.indexOf(r) > -1) {
                bol = true
            } else {
                bol = false
            }
        } while (bol)
        r = r - 1
        this.setState({ id: r })
        this.setState({ question: queschoice[r][codes[0]] })
        this.shuffleChoices()
        existingquestion.push(r)
    }
    changelangq() {
        var codes = this.translateq();
        this.setState({ question: queschoice[r][codes[0]] })
        this.generateChoices()
    }
    shuffleChoices() {
        shuffleChoices = [1, 2, 3]
        shuffled = this.shuffle(shuffleChoices)
        this.generateChoices()
    }
    generateChoices() {
        var codes = this.translateq();
        var c = []
        // alert(shuffled)
        for (let i = 0; i < shuffled.length; i++) {
            c.push(codes[shuffled[i]])
            if (shuffled[i] == queschoice[r].asnwer) {
                answer = i
                this.setState({ answer: queschoice[r][c[i]] })
            }
        }
        this.setState({
            c1: queschoice[r][c[0]],
            c2: queschoice[r][c[1]],
            c3: queschoice[r][c[2]],
        })

    }
    shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr
    }
    translateq() {
        if (GLanguage == 'English') {
            return ['question', 'c1', 'c2', 'c3']
        } else if (GLanguage == 'Filipino') {
            return ['tagalog', 'c1tagalog', 'c2tagalog', 'c3tagalog']
        } else {
            return ['visaya', 'c1visaya', 'c2visaya', 'c3visaya']
        }
    }
    Next() {
        this.setState({ ModalVisible1: !this.state.ModalVisible1 })
        if (this.state.stage + 1 > 10) {
            this.calculatehighscore()
            this.ModalState()
        } else {
            this.generateQuestion()
        }
    }
    calculatehighscore() {
        this.setState({ score: truescore })
        if (truescore > highscore) {
            AsyncStorage.setItem('quiz', truescore + "");
            this.setState({ best: truescore })
            this.props.navigation.state.params.setHighscore()
        } else {
            this.setState({ best: highscore })
        }
    }
    ModalState() {
        this.setState({ ModalVisible: !this.state.ModalVisible })
    }
    ModalState1() {
        if (useranswer == -1) {

        }
        else {
            clearInterval(refreshInterval)
            if (answer == useranswer) {
                truescore = truescore + 1
                this.setState({ color: "green", icon: "check" })
            } else {
                this.setState({ color: "red", icon: "cross" })
            }
            this.setState({ ModalVisible1: !this.state.ModalVisible1 })
            useranswer = -1
        }
    }
    exit() {
        this.props.navigation.goBack()
    }
    componentWillUnmount() {
        clearInterval(refreshInterval)
    }
    tryagain() {
        this.ModalState()
        truescore = 0
        this.generateQuestion()
        this.setState({ stage: 1 })
        existingquestion.length = 0
    }
    _changeLang() {

        this.props.navigation.setParams({
            headerRight: (<MaterialIcons style={{ marginRight: width / 20 }} size={25} name="language" onPress={() =>
                ActionSheet.show(
                    {
                        options: langBUTTONS,
                        cancelButtonIndex: 3,
                        title: "Select Language"
                    },
                    buttonIndex => {
                        if (buttonIndex != 3) {
                            AsyncStorage.setItem('language', langBUTTONS[buttonIndex]);
                            GLanguage = langBUTTONS[buttonIndex]
                            this.changelangq()
                        }

                    }
                )} />)
        })

    }
    render() {
        return (
            <Container>
                <View style={{ alignSelf: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: rgb(68, 68, 68), width: width - 22, height: height / 10, top: 15 }}>
                    <MaterialCommunityIcons name="timer" size={30} style={{ color: this.state.timecolor }} />
                    <Text style={{ color: this.state.timecolor, fontSize: 30, fontWeight: 'bold' }}> {this.state.time}</Text>
                </View>

                <Content padder style={{ marginTop: 20, marginBottom: 0 }}>
                    <Card>
                        <CardItem header bordered>
                            <Text style={{ position: 'absolute', right: 10 }}>{this.state.stage + "/10"}</Text>
                        </CardItem>
                        <CardItem style={{ height: 120 }}>
                            <Body>
                                <Text>
                                    {this.state.question}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Content style={{ marginTop: 10 }}>
                        <Button full bordered danger style={{ margin: 5, backgroundColor: this.state.s1 }}
                            onPress={() => this.onSelectChoice(1)}>
                            <Text style={{ color: this.state.t1 }}>{this.state.c1}</Text>
                        </Button>
                        <Button full bordered danger style={{ margin: 5, backgroundColor: this.state.s2 }}
                            onPress={() => this.onSelectChoice(2)}>
                            <Text style={{ color: this.state.t2 }}>{this.state.c2}</Text>
                        </Button>
                        <Button full bordered danger style={{ margin: 5, backgroundColor: this.state.s3 }}
                            onPress={() => this.onSelectChoice(3)}>
                            <Text style={{ color: this.state.t3 }}>{this.state.c3}</Text>
                        </Button>
                    </Content>
                </Content>
                <Button full danger style={{ bottom: 0 }} onPress={() => this.ModalState1()}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </Button>
                <Modal style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: height / 4, marginTop: height / 6, marginLeft: 20, marginRight: 20 }}
                    isVisible={this.state.ModalVisible}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>GAME OVER</Text>
                        <Text style={{ fontSize: 20, margin: 5 }}>BEST</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.best}</Text>
                        <Text style={{ fontSize: 20, margin: 5 }}>SCORE</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.score}</Text>
                        <Button full danger style={{ margin: 5 }}
                            onPress={() => this.tryagain()}><Text style={{ color: 'white' }}>TRY AGAIN</Text></Button>
                        <Button full danger style={{ margin: 5 }}
                            onPress={() => this.exit()}><Text style={{ color: 'white' }}>EXIT</Text></Button>
                    </View>
                </Modal>
                <Modal style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: height / 3, marginTop: height / 4, marginLeft: 20, marginRight: 20 }}
                    isVisible={this.state.ModalVisible1}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Entypo name={this.state.icon} size={70} style={{ color: this.state.color, margin: 20 }} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{"Answer: "}</Text>
                            <Text style={{ fontSize: 20 }}>{this.state.answer}</Text>
                        </View>
                        <View style={{ bottom: 10, position: 'absolute', left: 10, right: 10 }}>
                            <Button full success style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }} onPress={() => this.Next()}><Text style={{ color: 'white' }}>OK</Text></Button>
                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})