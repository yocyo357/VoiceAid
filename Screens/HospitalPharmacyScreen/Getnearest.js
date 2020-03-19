import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'
import HeaderGames from '../../Headers/HeaderGames'
import Entypo from 'react-native-vector-icons/Entypo'
import HospitalTab from './HospitalTab'
global.bot =[{id:0, text:"Anda Riverview Medical Center, Inc.", coordinates: {latitude: 7.065032, longitude: 125.605622}, distance: 0, color:"red"},
{id:1, text:"Fabie's General Hospital", coordinates: {latitude: 7.067891, longitude: 125.606572}, distance: 0, color:"red"},
{id:2, text:"Brokenshire Hospital Integrated Health Ministries, Inc.", coordinates: {latitude: 7.074467, longitude: 125.597076}, distance: 0, color:"red"},
{id:3, text:"Davao Doctors Hospital", coordinates: {latitude: 7.070034, longitude: 125.604718}, distance: 0, color:"red"},
{id:4, text:"Ricardo Limso Medical Center- Surgery and Pediatrics Clinic", coordinates: {latitude: 7.070546, longitude: 125.606819}, distance: 0, color:"red"},
{id:5, text:"San Pedro Hospital of Davao City, Inc.", coordinates: {latitude: 7.078834, longitude: 125.615059}, distance: 0, color:"red"},
{id:6, text:"Medical Mission Hospital", coordinates: {latitude: 7.078834, longitude: 125.625181}, distance: 0, color:"red"},
{id:7, text:"DMSF HOSPITAL", coordinates: {latitude: 7.085214, longitude: 125.606752}, distance: 0, color:"red"},
{id:8, text:"Metro Davao Medical And Research Center", coordinates: {latitude: 7.095101, longitude: 125.613321}, distance: 0, color:"red"},
{id:9, text:"Barangay Ma-a Health Center", coordinates: {latitude: 7.090013, longitude: 125.579871}, distance: 0, color:"red"},
{id:10, text:"Alexian Brothers Health and Wellness Center", coordinates: {latitude: 7.059732, longitude: 125.583240}, distance: 0, color:"red"},
{id:11, text:"Adventist Hospital - Davao", coordinates: {latitude: 7.060125, longitude: 125.555054}, distance: 0, color:"red"},
{id:12, text:"Saint Felix Medical Hospital", coordinates: {latitude: 7.044886, longitude: 125.532393}, distance: 0, color:"red"},
{id:13, text:"Malta Medical Center, Inc.", coordinates: {latitude: 7.023588, longitude: 125.501645}, distance: 0, color:"red"},
{id:14, text:"St. John of the Cross Hospital", coordinates: {latitude: 7.017720, longitude: 125.502498}, distance: 0, color:"red"},
{id:15, text:"Bullecer Medical & Maternity Hospital", coordinates: {latitude: 7.017018, longitude: 125.503716}, distance: 0, color:"red"},
{id:16, text:"Ernesto Guadalupe Community Hospital", coordinates: {latitude: 7.009553, longitude: 125.502932}, distance: 0, color:"red"},
{id:17, text:"Davao Mediquest Hospital", coordinates: {latitude: 7.011435, longitude: 125.489574}, distance: 0, color:"red"},
{id:18, text:"Sirawan Health Center", coordinates: {latitude: 6.990520, longitude: 125.481846}, distance: 0, color:"red"},
{id:19, text:"Holy Spirit Community Hospital", coordinates: {latitude: 7.089397, longitude: 125.504939}, distance: 0, color:"red"},
{id:20, text:"Isaac T. Robillo Hospital", coordinates: {latitude: 7.177787, longitude: 125.466581}, distance: 0, color:"red"},
{id:21, text:"Calinan health center", coordinates: {latitude: 7.188866, longitude: 125.460675}, distance: 0, color:"red"},
{id:22, text:"Davao East Medical Center", coordinates: {latitude: 7.190441, longitude: 125.454270}, distance: 0, color:"red"},
{id:23, text:"Dr. Lorenzo Principe Clinic and Drugstore, Inc", coordinates: {latitude: 7.188656, longitude: 125.450106}, distance: 0, color:"red"},
{id:24, text:"Lady of Lourdes Hospital & Colleges of Caybiga", coordinates: {latitude: 7.187252, longitude: 125.453760}, distance: 0, color:"red"},
{id:25, text:"Tamugan Barangay Health Center", coordinates: {latitude: 7.253434, longitude: 125.393148}, distance: 0, color:"red"},
{id:26, text:"Paquibato District Hospital", coordinates: {latitude: 7.253434, longitude: 125.496885}, distance: 0, color:"red"},
{id:27, text:"Paquibato Proper Hospital", coordinates: {latitude: 7.351806, longitude: 125.467235}, distance: 0, color:"red"},
{id:28, text:"Kibalang Barangay Health Center, Marilog District, Davao City", coordinates: {latitude: 7.337046, longitude: 125.290149}, distance: 0, color:"red"},
{id:29, text:"Allab Health Center", coordinates: {latitude: 7.279555, longitude: 125.216425}, distance: 0, color:"red"},
{id:30, text:"German Doctors Buda", coordinates: {latitude: 7.520171, longitude: 125.236693}, distance: 0, color:"red"},
{id:31, text:"Buda Community Health Care Center", coordinates: {latitude: 7.519480, longitude: 125.233703}, distance: 0, color:"red"},
{id:32, text:"Gig Oca Robles Seamenâ€™S Hospital", coordinates: {latitude: 7.094909, longitude: 125.637228}, distance: 0, color:"red"},
{id:33, text:"Southern Philippines Medical Center", coordinates: {latitude: 7.098376, longitude: 125.619836}, distance: 0, color:"red"},
{id:34, text:"Tebow CURE Hospital", coordinates: {latitude: 7.099360, longitude: 125.627229}, distance: 0, color:"red"},
{id:35, text:"Agdao Health Center", coordinates: {latitude: 7.081188, longitude: 125.622118}, distance: 0, color:"red"},
{id:36, text:"ALTERADO GENERAL HOSPITAL", coordinates: {latitude: 7.086960, longitude: 125.632131}, distance: 0, color:"red"},
{id:37, text:"Lanang Premiere Doctors Hospital, Inc. (LPDHI)", coordinates: {latitude: 7.097458, longitude: 125.633077}, distance: 0, color:"red"},
{id:38, text:"Medical Mission Group Hospital", coordinates: {latitude: 7.076473, longitude: 125.625306}, distance: 0, color:"red"},
{id:39, text:"Seaman's Hospital", coordinates: {latitude: 7.094826, longitude: 125.637739}, distance: 0, color:"red"},
{id:40, text:"HSSC-Health Services & Specialty Clinic", coordinates: {latitude: 7.097890, longitude: 125.618997}, distance: 0, color:"red"},
{id:41, text:"Sta. Ana Health Center", coordinates: {latitude: 7.075334, longitude: 125.624875}, distance: 0, color:"red"},
{id:42, text:"LINGAP SPMC", coordinates: {latitude: 7.099090, longitude: 125.620209}, distance: 0, color:"red"},
{id:43, text:"Mindanao Heart Center", coordinates: {latitude: 7.100047, longitude: 125.619358}, distance: 0, color:"red"},
{id:44, text:"Clinica Estrellado", coordinates: {latitude: 7.078819, longitude: 125.614788}, distance: 0, color:"red"},
{id:45, text:"Medstation", coordinates: {latitude: 7.103446, longitude: 125.633173}, distance: 0, color:"red"},
{id:46, text:"Medical Director - San Pedro Hospital of Davao", coordinates: {latitude: 7.078818, longitude: 125.615055}, distance: 0, color:"red"},
{id:47, text:"Tommy E. Bangayan, MD", coordinates: {latitude: 7.078669, longitude: 125.614709}, distance: 0, color:"red"},
{id:48, text:"Lapanday Hospital", coordinates: {latitude: 7.156642, longitude: 125.580397}, distance: 0, color:"red"},
{id:49, text:"Valucare Health Systems, Incorporated", coordinates: {latitude: 7.102692, longitude: 125.615111}, distance: 0, color:"red"},
{id:50, text:"Mend Now Health Services", coordinates: {latitude: 7.119298, longitude: 125.620685}, distance: 0, color:"red"},
{id:51, text:"Tricare", coordinates: {latitude: 7.098350, longitude: 125.619845}, distance: 0, color:"red"},
{id:52, text:"Dela Cerna Medical Clinic", coordinates: {latitude: 7.165197, longitude: 125.575988}, distance: 0, color:"red"},
{id:53, text:"GLUCARE MED CENTER", coordinates: {latitude: 7.085454, longitude: 125.614265}, distance: 0, color:"red"},
{id:54, text:"Philippine National Red Cross", coordinates: {latitude: 7.069961, longitude: 125.614094}, distance: 0, color:"red"},
{id:55, text:"TIBUNGCO DOCTORS ACOSTA MEDICAL CLINIC", coordinates: {latitude: 7.190805, longitude: 125.648920}, distance: 0, color:"red"},
{id:56, text:"Colonix Clinic", coordinates: {latitude: 7.078108, longitude: 125.606341}, distance: 0, color:"red"},
{id:57, text:"Panacan Station Hospiata l 10 division", coordinates: {latitude: 7.153343, longitude: 125.662114}, distance: 0, color:"red"},
{id:58, text:"Islamic Medical Center", coordinates: {latitude: 7.191853, longitude: 125.644713}, distance: 0, color:"red"},
{id:59, text:"Specialists' Primary Care of Ilang, Inc.", coordinates: {latitude: 7.186095, longitude: 125.649947}, distance: 0, color:"red"},
{id:60, text:"Tibungco Doctors Hospital", coordinates: {latitude: 7.198075, longitude: 125.647230}, distance: 0, color:"red"},
{id:61, text:"Community Health & Development Cooperative Hospital", coordinates: {latitude: 7.190707, longitude: 125.455342}, distance: 0, color:"red"},
{id:62, text:"United Davao Specialists Hospital and Medical Center", coordinates: {latitude: 7.061840, longitude: 125.590775}, distance: 0, color:"red"},
{id:63, text:"Talomo Central Health Center", coordinates: {latitude: 7.059397, longitude: 125.574350}, distance: 0, color:"red"},
{id:64, text:"Clinica Isaguirre", coordinates: {latitude: 7.187961, longitude: 125.452074}, distance: 0, color:"red"},
{id:65, text:"Clinica Feliciano", coordinates: {latitude: 7.187839, longitude: 125.452879}, distance: 0, color:"red"},
{id:66, text:"Barangay Health Center", coordinates: {latitude: 7.078516, longitude: 125.495306}, distance: 0, color:"red"},
{id:67, text:"Chdc hospital", coordinates: {latitude: 7.069176, longitude: 125.601776}, distance: 0, color:"red"},
]
global.par =[
    {id:0, text:"Generics Pharmacy", coordinates: {latitude: 7.058652,  longitude: 125.569332}, distance: 0, color:"green"},
    {id:1, text:"Rose Pharmacy Inc", coordinates: {latitude: 7.058690, longitude: 125.569204}, distance: 0, color:"green"},
    {id:2, text:"Rojon Pharmacy", coordinates: {latitude: 7.059117, longitude: 125.569498}, distance: 0, color:"green"},
    {id:3, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.058195, longitude: 125.568647}, distance: 0, color:"green"},
    {id:4, text:"Murang Generics Siguradongmabisa Pharmacy", coordinates: {latitude: 7.054511, longitude: 125.565966}, distance: 0, color:"green"},
    {id:5, text:"Mercury Drug - Matina Aplaya", coordinates: {latitude: 7.050911, longitude: 125.566901}, distance: 0, color:"green"},
    {id:6, text:"RX Save-On Drugstore Inc.", coordinates: {latitude: 7.056399, longitude: 125.555729}, distance: 0, color:"green"},
    {id:7, text:"318 Pharma King, Inc.", coordinates: {latitude: 7.045069, longitude: 125.567982}, distance: 0, color:"green"},
    {id:8, text:"AJM Healthmed Pharmacy", coordinates: {latitude: 7.041389, longitude: 125.571994}, distance: 0, color:"green"},
    {id:9, text:"318 Pharma King, Inc.", coordinates: {latitude: 7.041335, longitude: 125.572289}, distance: 0, color:"green"},
    {id:10, text:"Generika drugstore", coordinates: {latitude: 7.041536, longitude: 125.571586}, distance: 0, color:"green"},
    {id:11, text:"Save-on Drugstore", coordinates: {latitude: 7.052728, longitude: 125.566346}, distance: 0, color:"green"},
    {id:12, text:"Everyday Enterprise Pharmacy", coordinates: {latitude: 7.057460, longitude: 125.572067}, distance: 0, color:"green"},
    {id:13, text:"CRMS Pharmacy", coordinates: {latitude: 7.055617, longitude: 125.576928}, distance: 0, color:"green"},
    {id:14, text:"D' Mucho Marketing", coordinates: {latitude: 7.056651, longitude: 125.578536}, distance: 0, color:"green"},
    {id:15, text:"KSP Pharmacy", coordinates: {latitude: 7.058296, longitude: 125.579950}, distance: 0, color:"green"},
    {id:16, text:"The Generics Pharmacy", coordinates: {latitude: 7.063182, longitude: 125.596913}, distance: 0, color:"green"},
    {id:17, text:"Everlasting Pharmacy", coordinates: {latitude: 7.062947, longitude: 125.598703}, distance: 0, color:"green"},
    {id:18, text:"Amesco Drug", coordinates: {latitude: 7.061655, longitude: 125.593216}, distance: 0, color:"green"},
    {id:19, text:"Pharmacore Trading", coordinates: {latitude: 7.061511, longitude: 1125.592555}, distance: 0, color:"green"},
    {id:20, text:"Mercury Drug - Quimpo-Ecowest", coordinates: {latitude: 7.050105, longitude: 125.586249}, distance: 0, color:"green"},
    {id:21, text:"Mercury Drug Corporation", coordinates: {latitude: 7.049570, longitude: 125.596638}, distance: 0, color:"green"},
    {id:22, text:"Priceline Pharmacy", coordinates: {latitude: 7.047324, longitude: 125.595136}, distance: 0, color:"green"},
    {id:23, text:"HB1+ PHARMACY", coordinates: {latitude: 7.053325, longitude: 125.597841}, distance: 0, color:"green"},
    {id:24, text:"SAVE-ON DRUGSTORE", coordinates: {latitude: 7.052628, longitude: 125.594443}, distance: 0, color:"green"},
    {id:25, text:"Century Chinese Drug Store", coordinates: {latitude: 7.049103, longitude: 125.587964}, distance: 0, color:"green"},
    {id:26, text:"Xavier Drugstore", coordinates: {latitude: 7.041326, longitude: 125.572286}, distance: 0, color:"green"},
    {id:27, text:"The Generics Pharmacy", coordinates: {latitude: 7.055678, longitude: 125.601725}, distance: 0, color:"green"},
    {id:28, text:"Mercury Drug - Bucana", coordinates: {latitude: 7.337046, longitude: 125.290149}, distance: 0, color:"green"},
    {id:29, text:"Gio and Gen Pharmacy", coordinates: {latitude: 7.059038, longitude: 125.601432}, distance: 0, color:"green"},
    {id:30, text:"Generika Sandawa", coordinates: {latitude: 7.058761, longitude: 125.601224}, distance: 0, color:"green"},
    {id:31, text:"Gio & Gen Star Mart And Pharmacy", coordinates: {latitude: 7.061565, longitude: 125.601092}, distance: 0, color:"green"},
    {id:32, text:"Mercury Drug - Matina Crossing", coordinates: {latitude: 7.063170, longitude: 125.597864}, distance: 0, color:"green"},
    {id:33, text:"Pamela's Fruitcake", coordinates: {latitude: 7.064866, longitude: 125.592060}, distance: 0, color:"green"},
    {id:34, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.065511, longitude: 125.591899}, distance: 0, color:"green"},
    {id:35, text:"THE GENERICS PHARMACY", coordinates: {latitude: 7.078457, longitude: 125.583179}, distance: 0, color:"green"},
    {id:36, text:"Mercury Drug - Ma-a", coordinates: {latitude: 7.079129, longitude: 125.583390}, distance: 0, color:"green"},
    {id:37, text:"Botica Carina", coordinates: {latitude: 7.088385, longitude: 125.580639}, distance: 0, color:"green"},
    {id:38, text:"The Generics Pharmacy", coordinates: {latitude: 7.088525, longitude: 125.580495}, distance: 0, color:"green"},
    {id:39, text:"EGLD Pharmacy", coordinates: {latitude: 7.088346, longitude: 125.580534}, distance: 0, color:"green"},
    {id:40, text:"MMJS Pharmacy", coordinates: {latitude: 7.101823, longitude: 125.581601}, distance: 0, color:"green"},
    {id:41, text:"Botica Erma", coordinates: {latitude: 7.067312, longitude: 125.602278}, distance: 0, color:"green"},
    {id:42, text:"Golden Drug Store", coordinates: {latitude: 7.067729, longitude: 125.604943}, distance: 0, color:"green"},
    {id:43, text:"THE GENERICS PHARMACY", coordinates: {latitude: 7.065656, longitude: 125.605795}, distance: 0, color:"green"},
    {id:44, text:"Amesco Drug", coordinates: {latitude: 7.065227, longitude: 125.608507}, distance: 0, color:"green"},
    {id:45, text:"HB1", coordinates: {latitude: 7.065727, longitude: 125.609175}, distance: 0, color:"green"},
    {id:46, text:"THE GENERIC PHARMACY", coordinates: {latitude: 7.069053, longitude: 125.605244}, distance: 0, color:"green"},
    {id:47, text:"Mercury Drug - Ilustre", coordinates: {latitude: 7.069001, longitude: 125.605183}, distance: 0, color:"green"},
    {id:48, text:"Farmacia Southern VI", coordinates: {latitude: 7.069339, longitude: 1125.606192}, distance: 0, color:"green"},
    {id:49, text:"Rose Pharmacy - Quirino", coordinates: {latitude: 7.070024, longitude: 125.605121}, distance: 0, color:"green"},
    {id:50, text:"Rose Pharmacy - Ilustre", coordinates: {latitude: 7.069955, longitude: 125.606694}, distance: 0, color:"green"},
    {id:51, text:"JZ Pharmazone", coordinates: {latitude: 7.070205, longitude: 125.607079}, distance: 0, color:"green"},
    {id:52, text:"Farmacia Southern", coordinates: {latitude: 7.069944, longitude: 125.609718}, distance: 0, color:"green"},
    {id:53, text:"Mercury Drug - McArthur", coordinates: {latitude: 7.067491, longitude: 125.602017}, distance: 0, color:"green"},
    {id:54, text:"Value Plus Pharmacy", coordinates: {latitude: 7.067854, longitude: 125.601976}, distance: 0, color:"green"},
    {id:55, text:"Boticard Pharmacy", coordinates: {latitude: 7.068510, longitude: 125.602249}, distance: 0, color:"green"},
    {id:56, text:"Adela Fortuna Botika", coordinates: {latitude: 7.068231, longitude: 125.601243}, distance: 0, color:"green"},
    {id:57, text:"Laforteza Pharmacy", coordinates: {latitude: 7.068906, longitude: 125.601715}, distance: 0, color:"green"},
    {id:58, text:"Golden Drug", coordinates: {latitude: 7.068962, longitude: 125.601497}, distance: 0, color:"green"},
    {id:59, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.068646, longitude: 125.601189}, distance: 0, color:"green"},
    {id:60, text:"Amesco Drug", coordinates: {latitude: 7.069313, longitude: 125.601756}, distance: 0, color:"green"},
    {id:61, text:"Gapan Drug Davao", coordinates: {latitude: 7.070744 , longitude: 125.604741}, distance: 0, color:"green"},
    {id:62, text:"Clinica Isaguirre", coordinates: {latitude: 7.070742, longitude: 125.604805}, distance: 0, color:"green"},
    {id:63, text:"Amesco Drug", coordinates: {latitude: 7.070393, longitude: 125.605170}, distance: 0, color:"green"},
    {id:64, text:"Pink 24/7 Pharmacy Corporation", coordinates: {latitude: 7.071033, longitude: 125.605513}, distance: 0, color:"green"},
    {id:65, text:"Glorso Medica", coordinates: {latitude: 7.071215, longitude: 125.605087}, distance: 0, color:"green"},
    {id:66, text:"Rose Pharmacy - Ilustre", coordinates: {latitude: 7.072549, longitude: 125.605277}, distance: 0, color:"green"},
    {id:67, text:"We Serve Generic Medicines Pharmacy", coordinates: {latitude: 7.072143, longitude: 125.607194}, distance: 0, color:"green"},
    {id:68, text:"PUNU HYDRAULIC HOSE CENTER", coordinates: {latitude: 7.074619, longitude: 125.609332}, distance: 0, color:"green"},
    {id:69, text:"Mercury Drug - Jacinto Extension", coordinates: {latitude: 7.076942, longitude: 125.609798}, distance: 0, color:"green"},
    {id:70, text:"Mercury Drug - Mabini", coordinates: {latitude: 7.080032, longitude: 125.603735}, distance: 0, color:"green"},
    {id:71, text:"Suy Hoo Pharmacy", coordinates: {latitude: 7.078617, longitude: 125.612975}, distance: 0, color:"green"},
    {id:72, text:"Nfsh Express Drug", coordinates: {latitude: 7.078768, longitude: 125.612816}, distance: 0, color:"green"},
    {id:73, text:"Watsons Gaisano Mall Bajada", coordinates: {latitude: 7.078042, longitude: 125.613665}, distance: 0, color:"green"},
    {id:74, text:"Farmacia Southern", coordinates: {latitude: 7.077910, longitude: 125.613778}, distance: 0, color:"green"},
    {id:75, text:"ROSE PHARMACY", coordinates: {latitude: 7.077758, longitude: 125.613710}, distance: 0, color:"green"},
    {id:76, text:"Mercury Drug - Gaisano Mall", coordinates: {latitude: 7.077611, longitude: 125.613692}, distance: 0, color:"green"},
    {id:77, text:"Promasa Pharmacy", coordinates: {latitude: 7.076816, longitude: 125.615447}, distance: 0, color:"green"},
    {id:78, text:"Amesco Drug", coordinates: {latitude: 7.077248, longitude: 125.615469}, distance: 0, color:"green"},
    {id:79, text:"The Generics Pharmacy", coordinates: {latitude: 7.077512, longitude: 125.615320}, distance: 0, color:"green"},
    {id:80, text:"Med Express Drugstore", coordinates: {latitude: 7.078262, longitude: 125.614673}, distance: 0, color:"green"},
    {id:81, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.079985, longitude: 125.614459}, distance: 0, color:"green"},
    {id:82, text:"Save-On Drug Store Inc.", coordinates: {latitude: 7.082283, longitude: 125.601423}, distance: 0, color:"green"},
    {id:83, text:"Optimed Pharmacy", coordinates: {latitude: 7.086088, longitude: 125.610933}, distance: 0, color:"green"},
    {id:84, text:"Medicost Drug Haus", coordinates: {latitude: 7.085041, longitude: 125.606939}, distance: 0, color:"green"},
    {id:85, text:"KLBS Pharmacy", coordinates: {latitude: 7.089311, longitude: 125.607872}, distance: 0, color:"green"},
    {id:86, text:"Save On Drugstore", coordinates: {latitude: 7.090163, longitude: 125.606686}, distance: 0, color:"green"},
    {id:87, text:"Tesco Drug", coordinates: {latitude: 7.090310, longitude: 125.605820}, distance: 0, color:"green"},
    {id:88, text:"Mercury Drug", coordinates: {latitude: 7.093439, longitude: 125.603575}, distance: 0, color:"green"},
    {id:89, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.097748, longitude: 125.602539}, distance: 0, color:"green"},
    {id:90, text:"Mercury Drug - Lacson", coordinates: {latitude: 7.086203, longitude: 125.613780}, distance: 0, color:"green"},
    {id:91, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.087148, longitude: 125.612109}, distance: 0, color:"green"},
    {id:92, text:"Watsons Ayala Abreeza", coordinates: {latitude: 7.090854, longitude: 125.611231}, distance: 0, color:"green"},
    {id:93, text:"Mercury Drug Abreeza Mall", coordinates: {latitude: 7.091149, longitude: 125.611021}, distance: 0, color:"green"},
    {id:94, text:"SOUTHSTAR DRUG", coordinates: {latitude: 7.091189, longitude: 125.611479}, distance: 0, color:"green"},
    {id:95, text:"Amesco Drug", coordinates: {latitude: 7.093841, longitude: 125.613592}, distance: 0, color:"green"},
    {id:96, text:"Generic Pharmacy", coordinates: {latitude: 7.074461, longitude: 125.624616 }, distance: 0, color:"green"},
    {id:97, text:"New Farmacia Suy Hoo", coordinates: {latitude: 7.074396, longitude: 125.624120}, distance: 0, color:"green"},
    {id:98, text:"Amesco Drug", coordinates: {latitude: 7.074385, longitude: 125.624081}, distance: 0, color:"green"},
    {id:99, text:"TGP - THE GENERICS PHARMACY", coordinates: {latitude: 7.073860, longitude: 125.621220}, distance: 0, color:"green"},
    {id:100, text:"Amesco Drug", coordinates: {latitude: 7.074087, longitude: 125.618497}, distance: 0, color:"green"},
    {id:101, text:"Rose Pharmacy - Abreeza", coordinates: {latitude: 7.091431, longitude: 125.610933}, distance: 0, color:"green"},
    {id:102, text:"Generika Drugstore", coordinates: {latitude: 7.062294, longitude: 125.611626}, distance: 0, color:"green"},
    {id:103, text:"Coson Mercury", coordinates: {latitude: 7.065484, longitude: 125.615455}, distance: 0, color:"green"},
    {id:104, text:"Sheryl Pharmacy", coordinates: {latitude: 7.070921, longitude: 125.611684}, distance: 0, color:"green"},
    {id:105, text:"GN Pharmacy", coordinates: {latitude: 7.063843, longitude: 125.609779}, distance: 0, color:"green"},
    {id:106, text:"Watsons Savemore Davao", coordinates: {latitude: 7.059221, longitude: 125.558941}, distance: 0, color:"green"},
    {id:107, text:"Francx-M Pharmacy", coordinates: {latitude: 7.060420, longitude: 125.555842}, distance: 0, color:"green"},
    {id:108, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.059852, longitude: 125.552600}, distance: 0, color:"green"},
    {id:109, text:"D and K Pharmacy", coordinates: {latitude: 7.046631, longitude: 125.550664}, distance: 0, color:"green"},
    {id:110, text:"Leilex Pharmacy", coordinates: {latitude: 7.056858, longitude: 125.548696}, distance: 0, color:"green"},
    {id:111, text:"SOUTHSTAR DRUG", coordinates: {latitude: 7.057169, longitude: 125.548398}, distance: 0, color:"green"},
    {id:112, text:"Mercury Drug - Ulas", coordinates: {latitude: 7.054684, longitude: 125.545287}, distance: 0, color:"green"},
    {id:113, text:"Botica Verde", coordinates: {latitude: 7.055022, longitude: 125.545417}, distance: 0, color:"green"},
    {id:114, text:"Brigada Pharmacy", coordinates: {latitude: 7.055143, longitude: 125.545775}, distance: 0, color:"green"},
    {id:115, text:"Mercury Drug - Catalunan Grande Branch", coordinates: {latitude: 7.074252, longitude: 125.547165}, distance: 0, color:"green"},
    {id:116, text:"NCA Pharmacy", coordinates: {latitude: 7.075732, longitude: 125.549998}, distance: 0, color:"green"},
    {id:117, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.075505, longitude: 125.545295}, distance: 0, color:"green"},
    {id:118, text:"TJB Pharmacy", coordinates: {latitude: 7.078997, longitude:  125.544924}, distance: 0, color:"green"},
    {id:119, text:"The Generics Pharmacy", coordinates: {latitude: 7.051221, longitude: 125.540869}, distance: 0, color:"green"},
    {id:120, text:"The Generics Pharmacy", coordinates: {latitude: 7.054155, longitude: 125.544808}, distance: 0, color:"green"},
    {id:121, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.053373, longitude: 125.543234}, distance: 0, color:"green"},
    {id:122, text:"Mercury Drug - Talomo Proper Puan", coordinates: {latitude: 7.052518, longitude: 125.542740}, distance: 0, color:"green"},
    {id:123, text:"HB1 + Pharmacy", coordinates: {latitude: 7.049359, longitude: 125.547636}, distance: 0, color:"green"},
    {id:124, text:"Shania Pharmacy", coordinates: {latitude: 7.074265, longitude: 125.518832}, distance: 0, color:"green"},
    {id:125, text:"Mercury Drug - Bago Aplaya", coordinates: {latitude: 7.042726, longitude: 125.529134}, distance: 0, color:"green"},
    {id:126, text:"Lord's Valley Pharmacy", coordinates: {latitude: 7.032045, longitude: 125.513394}, distance: 0, color:"green"},
    {id:127, text:"Sara Michelle Pharmacy", coordinates: {latitude: 7.032245, longitude: 125.507039}, distance: 0, color:"green"},
    {id:128, text:"Doc Lloyd Pharmacy", coordinates: {latitude: 7.055079, longitude: 125.510340}, distance: 0, color:"green"},
    {id:129, text:"Farmacia Baliok Rx Pharmacy And Groceries", coordinates: {latitude: 7.044744, longitude: 125.498895}, distance: 0, color:"green"},
    {id:130, text:"Take & Pharmacy & Mini Mart", coordinates: {latitude: 7.023728, longitude: 125.501242}, distance: 0, color:"green"},
    {id:131, text:"AJM HealthMed Pharmacy", coordinates: {latitude: 7.019792, longitude: 125.496093}, distance: 0, color:"green"},
    {id:132, text:"Rojon Pharmacy", coordinates: {latitude: 7.019347, longitude: 125.496004}, distance: 0, color:"green"},
    {id:133, text:"The Generics Pharmacy", coordinates: {latitude: 7.017372, longitude: 125.497724}, distance: 0, color:"green"},
    {id:134, text:"Rose Pharmacy - Gaisano Mall of Toril", coordinates: {latitude: 7.016206, longitude: 125.493657}, distance: 0, color:"green"},
    {id:135, text:"Mercury Drug - Gaisano Mall of Toril", coordinates: {latitude: 7.014009, longitude: 125.490942}, distance: 0, color:"green"},
    {id:136, text:"ACT Pharmacy", coordinates: {latitude: 7.017202, longitude: 125.502535}, distance: 0, color:"green"},
    {id:137, text:"Ajm Health Med Pharmacy", coordinates: {latitude: 7.017626, longitude: 125.502828}, distance: 0, color:"green"},
    {id:138, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.074241, longitude: 125.518731}, distance: 0, color:"green"},
    {id:139, text:"JG - AC Pharmacy", coordinates: {latitude: 7.069809, longitude: 125.524612}, distance: 0, color:"green"},
    {id:140, text:"Rara Pharmacy", coordinates: {latitude: 7.080183, longitude: 125.512639}, distance: 0, color:"green"},
    {id:141, text:"Rose Pharmacy - Mintal", coordinates: {latitude: 7.090082, longitude: 125.504824}, distance: 0, color:"green"},
    {id:142, text:"K 101 Pharma", coordinates: {latitude: 7.087308, longitude: 125.502850}, distance: 0, color:"green"},
    {id:143, text:"Binoya Pharmacy", coordinates: {latitude: 7.091661, longitude: 125.502899}, distance: 0, color:"green"},
    {id:144, text:"MEDFAITH PHARMACY", coordinates: {latitude: 7.092300, longitude: 125.503099}, distance: 0, color:"green"},
    {id:145, text:"The Generics Pharmacy", coordinates: {latitude: 7.091938, longitude: 125.501913}, distance: 0, color:"green"},
    {id:146, text:"Cristone 88 Pharmacy", coordinates: {latitude: 7.069914, longitude: 125.501154}, distance: 0, color:"green"},
    {id:147, text:"Conti Pharmacy", coordinates: {latitude: 7.093020, longitude: 125.501646}, distance: 0, color:"green"},
    {id:148, text:"Toril Wisebuy Pharmacy", coordinates: {latitude: 7.092919, longitude: 125.501259}, distance: 0, color:"green"},
    {id:149, text:"Kriea and Kirk Pharmacy - Branch I", coordinates: {latitude: 7.093008, longitude: 125.500351}, distance: 0, color:"green"},
    {id:150, text:"Racktrade Generics Pharmacy", coordinates: {latitude: 7.102937, longitude: 125.512729}, distance: 0, color:"green"},
    {id:151, text:"A-Y Pharmacy", coordinates: {latitude: 7.109604, longitude: 125.490808}, distance: 0, color:"green"},
    {id:152, text:"Accurate Pharmacy & General Merchandise", coordinates: {latitude: 7.109135, longitude: 125.494657}, distance: 0, color:"green"},
    {id:153, text:"Heavenly Grace Pharmacy", coordinates: {latitude: 7.110382, longitude: 125.498998}, distance: 0, color:"green"},
    {id:154, text:"Khuvent Pharmacy", coordinates: {latitude: 7.109563, longitude: 125.499009}, distance: 0, color:"green"},
    {id:155, text:"RYL Janssen Pharmacy", coordinates: {latitude: 7.118013, longitude: 125.479360}, distance: 0, color:"green"},
    {id:156, text:"A & Y Pharmacy", coordinates: {latitude: 7.118187, longitude: 125.479755}, distance: 0, color:"green"},
    {id:157, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.171630, longitude: 125.447070}, distance: 0, color:"green"},
    {id:158, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.186237, longitude: 125.459590}, distance: 0, color:"green"},
    {id:159, text:"One Angel Pharmacy", coordinates: {latitude: 7.186274, longitude: 125.459538}, distance: 0, color:"green"},
    {id:160, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.188662, longitude: 125.458776}, distance: 0, color:"green"},
    {id:161, text:"Mercury Drug", coordinates: {latitude: 7.188358, longitude: 125.457700}, distance: 0, color:"green"},
    {id:162, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.189342, longitude: 125.455640}, distance: 0, color:"green"},
    {id:163, text:"L - Three Cooperative Pharmacy", coordinates: {latitude: 7.187747, longitude: 125.453092}, distance: 0, color:"green"},
    {id:164, text:"Farmacia Eva Pharmacy", coordinates: {latitude: 7.188367, longitude: 125.453516}, distance: 0, color:"green"},
    {id:165, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.190364, longitude: 125.455343}, distance: 0, color:"green"},
    {id:166, text:"Mercury Drug - Calinan", coordinates: {latitude: 7.190114, longitude: 125.454490}, distance: 0, color:"green"},
    {id:167, text:"Generika Drug Store", coordinates: {latitude: 7.190773, longitude: 125.454825}, distance: 0, color:"green"},
    {id:168, text:"Dragon Rose Pharmacy", coordinates: {latitude: 7.190365, longitude: 125.453854}, distance: 0, color:"green"},
    {id:169, text:"Botica Carina", coordinates: {latitude: 7.191647, longitude: 125.454187}, distance: 0, color:"green"},
    {id:170, text:"Watsons Gaisano Grand Calinan", coordinates: {latitude: 7.193924, longitude:125.454591 }, distance: 0, color:"green"},
    {id:171, text:"New Botica Concepcion", coordinates: {latitude: 7.097100, longitude: 125.619288}, distance: 0, color:"green"},
    {id:172, text:"GENERIKA DRUGSTORE", coordinates: {latitude: 7.082080, longitude: 125.622780}, distance: 0, color:"green"},
    {id:173, text:"Rose Pharmacy", coordinates: {latitude: 7.098968, longitude: 125.625083}, distance: 0, color:"green"},
    {id:174, text:"Merin Pharmacy", coordinates: {latitude: 7.101465, longitude: 125.632800}, distance: 0, color:"green"},
    {id:175, text:"Rojon Pharmacy", coordinates: {latitude: 7.087142, longitude: 125.623587}, distance: 0, color:"green"},
    {id:176, text:"Davao Farmacia Southern", coordinates: {latitude: 7.075735, longitude: 125.624592}, distance: 0, color:"green"},
    {id:177, text:"One Family Pharmacy", coordinates: {latitude: 7.080786, longitude: 125.622786}, distance: 0, color:"green"},
    {id:178, text:"Amosup-Jsu Multipurpose Center", coordinates: {latitude: 7.094748, longitude: 125.638069}, distance: 0, color:"green"},
    {id:179, text:"Sta. Ana Drugs", coordinates: {latitude: 7.082648, longitude: 125.624050}, distance: 0, color:"green"},
    {id:180, text:"Botikang Pinoy, Inc.", coordinates: {latitude: 7.097111, longitude: 125.620454}, distance: 0, color:"green"},
    {id:181, text:"Amesco Drug", coordinates: {latitude: 7.082369, longitude: 125.623230}, distance: 0, color:"green"},
    {id:182, text:"THE GENERICS PHARMACY", coordinates: {latitude: 7.081751, longitude: 125.624113}, distance: 0, color:"green"},
    {id:183, text:"RBZ Pharmaceutical Distribution", coordinates: {latitude: 7.098202, longitude: 125.623345}, distance: 0, color:"green"},
    {id:184, text:"Family Care Plus Pharmacy", coordinates: {latitude: 7.081289, longitude: 125.623574}, distance: 0, color:"green"},
    {id:185, text:"Farmacia ni Dok", coordinates: {latitude: 7.094970, longitude: 125.635659}, distance: 0, color:"green"},
    {id:186, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.097062, longitude: 125.620310}, distance: 0, color:"green"},
    {id:187, text:"ortholife medical enterprises", coordinates: {latitude: 7.079397, longitude: 125.625403}, distance: 0, color:"green"},
    {id:188, text:"NY Sonneth Pharmacy & Gen. Merchandise", coordinates: {latitude: 7.089971, longitude: 125.627632}, distance: 0, color:"green"},
    {id:189, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.081820, longitude: 125.622564}, distance: 0, color:"green"},
    {id:190, text:"Amesco Drug", coordinates: {latitude: 7.097494, longitude: 125.620601}, distance: 0, color:"green"},
    {id:191, text:"77th-Jireh Med Retailer Distributor", coordinates: {latitude: 7.090476, longitude: 125.633181}, distance: 0, color:"green"},
    {id:192, text:"MBE Pharma", coordinates: {latitude: 7.097672, longitude: 125.621155}, distance: 0, color:"green"},
    {id:193, text:"318 Pharma King, Inc.", coordinates: {latitude: 7.096498, longitude: 125.638091}, distance: 0, color:"green"},
    {id:194, text:"Take & Care Pharmacy", coordinates: {latitude: 7.087705, longitude: 125.624425}, distance: 0, color:"green"},
    {id:195, text:"Value Pharma", coordinates: {latitude: 7.086004, longitude: 125.627510}, distance: 0, color:"green"},
    {id:196, text:"Rx Pharmacy", coordinates: {latitude: 7.093818, longitude: 125.635887}, distance: 0, color:"green"},
    {id:197, text:"Watsons SM City Lanang Supermarket", coordinates: {latitude: 7.100497, longitude: 125.630963}, distance: 0, color:"green"},
    {id:198, text:"Capsule Drug Center", coordinates: {latitude: 7.097601, longitude: 125.620776}, distance: 0, color:"green"},
    {id:199, text:"De Oro Therapeutic Shop", coordinates: {latitude: 7.099300, longitude: 125.632024}, distance: 0, color:"green"},
    {id:200, text:"Overpass Drughaus", coordinates: {latitude: 7.097618, longitude: 125.620972}, distance: 0, color:"green"},
    {id:201, text:"Watsons Savemore Bajada", coordinates: {latitude: 7.096399, longitude: 125.618480}, distance: 0, color:"green"},
    {id:202, text:"Farmacia Barba", coordinates: {latitude: 7.090180, longitude: 125.627458}, distance: 0, color:"green"},
    {id:203, text:"McKline Enterprises & Pharmacy", coordinates: {latitude: 7.099045, longitude: 125.624885}, distance: 0, color:"green"},
    {id:204, text:"Kalingap Pharmacy", coordinates: {latitude: 7.097683, longitude: 125.621086}, distance: 0, color:"green"},
    {id:205, text:"Health and Beauty One", coordinates: {latitude: 7.099989, longitude: 125.627792}, distance: 0, color:"green"},
    {id:206, text:"Mercury Drug - Lapu Lapu", coordinates: {latitude: 7.081415, longitude: 125.621972}, distance: 0, color:"green"},
    {id:207, text:"Generika drugstore", coordinates: {latitude: 7.094353, longitude: 125.635956}, distance: 0, color:"green"},
    {id:208, text:"Mercury Drug - R. Castillo", coordinates: {latitude: 7.089252, longitude: 125.631340}, distance: 0, color:"green"},
    {id:209, text:"HB1", coordinates: {latitude: 7.095111, longitude: 125.636424}, distance: 0, color:"green"},
    {id:210, text:"JLAN Generic Drug Distributor", coordinates: {latitude: 7.075754, longitude: 125.617305}, distance: 0, color:"green"},
    {id:211, text:"BIOMONTE Healthcare Solutions", coordinates: {latitude: 7.084357, longitude: 125.613306}, distance: 0, color:"green"},
    {id:212, text:"Rose Pharmacy - Buhangin", coordinates: {latitude: 7.109992, longitude: 125.617006}, distance: 0, color:"green"},
    {id:213, text:"Gamot PUBLIKO", coordinates: {latitude: 7.108956, longitude: 125.613412}, distance: 0, color:"green"},
    {id:214, text:"Steward", coordinates: {latitude: 7.110167, longitude: 125.611605}, distance: 0, color:"green"},
    {id:215, text:"Mercury Drug - Buhangin C.P. Garcia Highway", coordinates: {latitude: 7.105620, longitude: 125.600083}, distance: 0, color:"green"},
    {id:216, text:"The Generics Pharmacy", coordinates: {latitude: 7.135088, longitude: 125.661667}, distance: 0, color:"green"},
    {id:217, text:"Mercury Drug - Buhangin Pag-asa", coordinates: {latitude: 7.106550, longitude: 125.613563}, distance: 0, color:"green"},
    {id:218, text:"HB1 Pharmacy", coordinates: {latitude: 7.131220, longitude: 125.613243}, distance: 0, color:"green"},
    {id:219, text:"Mercury Drug - Cabantian", coordinates: {latitude: 7.128416, longitude: 125.619603}, distance: 0, color:"green"},
    {id:220, text:"The Generics Pharmacy", coordinates: {latitude: 7.132001, longitude: 125.623242}, distance: 0, color:"green"},
    {id:221, text:"Amesco Drug", coordinates: {latitude: 7.109850, longitude: 125.613238}, distance: 0, color:"green"},
    {id:222, text:"Health and Beauty One", coordinates: {latitude: 7.099989, longitude: 125.627792}, distance: 0, color:"green"},
    {id:223, text:"Amesco Drug", coordinates: {latitude: 7.103140, longitude: 125.614409}, distance: 0, color:"green"},
    {id:224, text:"BMCDC PHARMACY", coordinates: {latitude: 7.107105, longitude: 125.613592}, distance: 0, color:"green"},
    {id:225, text:"The Generics Pharmacy", coordinates: {latitude: 7.109553, longitude: 125.613210}, distance: 0, color:"green"},
    {id:226, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.097754, longitude: 125.602540}, distance: 0, color:"green"},
    {id:227, text:"Yourmed Marketing Distributor", coordinates: {latitude: 7.153475, longitude: 125.596774}, distance: 0, color:"green"},
    {id:228, text:"Mia & Gen Drug", coordinates: {latitude: 7.109162, longitude: 125.613456}, distance: 0, color:"green"},
    {id:229, text:"Herlin Pharmacy", coordinates: {latitude: 7.136076, longitude: 125.661670}, distance: 0, color:"green"},
    {id:230, text:"Kindex Pharmacy", coordinates: {latitude: 7.127105, longitude: 125.635353}, distance: 0, color:"green"},
    {id:231, text:"McKline Enterprises & Pharmacy", coordinates: {latitude: 7.099044, longitude: 125.624885}, distance: 0, color:"green"},
    {id:232, text:"Sasa Pharmacy", coordinates: {latitude: 7.134936, longitude: 125.661674}, distance: 0, color:"green"},
    {id:233, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.111052, longitude: 125.611097}, distance: 0, color:"green"},
    {id:234, text:"FnC Generics Pharmacy", coordinates: {latitude: 7.108551, longitude: 125.613215}, distance: 0, color:"green"},
    {id:235, text:"TGP - THE GENERICSPHARMACY", coordinates: {latitude: 7.127801, longitude: 125.619938}, distance: 0, color:"green"},
    {id:236, text:"Ambrad Pharmacy", coordinates: {latitude: 7.134650, longitude: 125.662766}, distance: 0, color:"green"},
    {id:237, text:"Car El Pharmacy", coordinates: {latitude: 7.163118, longitude: 125.656333}, distance: 0, color:"green"},
    {id:238, text:"Mercury Drug - Gaisano Grand Mall Tibungco", coordinates: {latitude: 7.195713, longitude: 125.647122}, distance: 0, color:"green"},
    {id:239, text:"TGP THE GENERICS PHARMACY", coordinates: {latitude: 7.192667, longitude: 125.648218}, distance: 0, color:"green"},
    {id:240, text:"PPC PHARMACY", coordinates: {latitude: 7.235760, longitude: 125.642154}, distance: 0, color:"green"},
    {id:241, text:"James Mherl Pharmacy", coordinates: {latitude: 7.193002, longitude: 125.647904}, distance: 0, color:"green"},
    {id:242, text:"Early Bird Pharmacy", coordinates: {latitude: 7.152447, longitude: 125.658787}, distance: 0, color:"green"},
    {id:243, text:"TGP The Generics Pharmacy", coordinates: {latitude: 7.223058, longitude: 125.642137}, distance: 0, color:"green"},
    {id:244, text:"Mai-Mai Pharmacy", coordinates: {latitude: 7.236384, longitude: 125.642039}, distance: 0, color:"green"},
    {id:245, text:"Tgp The Generics Pharmacy", coordinates: {latitude:7.236802, longitude: 125.641827}, distance: 0, color:"green"},
    {id:246, text:"All Care Pharmacy", coordinates: {latitude: 7.178709, longitude: 125.652674}, distance: 0, color:"green"},
    {id:247, text:"GENERIKA DRUGSTORE", coordinates: {latitude: 7.192895, longitude: 125.648158}, distance: 0, color:"green"},
    {id:248, text:"Rose Pharmacy - Panacan", coordinates: {latitude: 7.152490, longitude: 125.658450}, distance: 0, color:"green"},
    {id:249, text:"Tel Ton Pharmacy", coordinates: {latitude: 7.267749, longitude: 125.664471}, distance: 0, color:"green"},
    {id:250, text:"Ecra Drug Store", coordinates: {latitude: 7.224720, longitude: 125.641237}, distance: 0, color:"green"},
    {id:251, text:"HB1 Panacan", coordinates: {latitude: 7.143945, longitude: 125.660976}, distance: 0, color:"green"}, 
    {id:252, text:"Zccl Pharmacy", coordinates: {latitude: 7.267646, longitude: 125.664446}, distance: 0, color:"green"},
    {id:253, text:"The Generics Pharmacy", coordinates: {latitude: 7.091944, longitude: 125.501912}, distance: 0, color:"green"},
    {id:254, text:"JJ Sabanpan's Haven", coordinates: {latitude: 7.109973, longitude: 125.515207}, distance: 0, color:"green"},
    {id:255, text:"Ampoyas Generic Pharmacy", coordinates: {latitude: 7.091569, longitude: 125.502886}, distance: 0, color:"green"},
    {id:256, text:"Famrie Pharmacy", coordinates: {latitude: 7.080144, longitude: 125.512636}, distance: 0, color:"green"},
    {id:257, text:"Botika Ng Barangay", coordinates: {latitude: 7.133652, longitude: 125.466168}, distance: 0, color:"green"},
    {id:258, text:"Arnell Cruspero's Payag", coordinates: {latitude: 7.129105, longitude: 125.460895}, distance: 0, color:"green"},
    {id:259, text:"The Generics Pharmacy", coordinates: {latitude: 7.069154, longitude: 125.601581}, distance: 0, color:"green"},
    ]
var latlong = []
class GetNearest extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Entypo name="game-controller" style={{ fontSize: 24, color: tintColor }} />
        )
    }
  

    static getNearest(lat,long) {
        var str=""
        for(let i=0;i<bot.length;i++){
            var dis =0 
            dis=geolib.getDistance({
                latitude:lat,
                longitude: long,
              }, {
                latitude: bot[i].coordinates.latitude,
                longitude: bot[i].coordinates.longitude,
              },1,3);
              bot[i].distance = dis
              str=str+bot[i].distance+"\n"
        }
        // alert(str)
        
        function sortFunction(a, b) {
            if (a["distance"] === b["distance"]) {
                return 0;
            }
            else {
                return (a["distance"] < b["distance"]) ? -1 : 1;
            }
        }
        bot.sort(sortFunction)
        str1=""
        for(let i=0;i<bot.length;i++){
            bot[i].id = i+1
        }
        
    }
    static getNearestPharmacy(lat,long) {
        var str=""
        for(let i=0;i<par.length;i++){
            var dis =0 
            dis=geolib.getDistance({
                latitude:lat,
                longitude: long,
              }, {
                latitude: par[i].coordinates.latitude,
                longitude: par[i].coordinates.longitude,
              },1,3);
              par[i].distance = dis
              str=str+par[i].distance+"\n"
        }
        
        function sortFunction(a, b) {
            if (a["distance"] === b["distance"]) {
                return 0;
            }
            else {
                return (a["distance"] < b["distance"]) ? -1 : 1;
            }
        }
        par.sort(sortFunction)
        str1=""
        for(let i=0;i<bot.length;i++){
            par[i].id = i+1
        }
        
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderGames navigation={this.props.navigation} />

            </View>
        );
    }
}

export default GetNearest;

const styles = StyleSheet.create({
    container: {
        flex: 1.
    }
})