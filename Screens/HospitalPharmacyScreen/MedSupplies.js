import React, { Component } from 'react';
import { View,Text} from 'react-native';
global.medSupplies =  [
    {SolutionNo: 3, title: "Human Bite with deep wound", 
    supplies: [
        {name:"Sterile Pad",price:"Php 6.00"},
        {name:"Sterile Dressing/Non-fluffy Pad",price:"Php 6.58"},
		{name:"Bandage",price:"Php 21.25"},
    ]},
    {SolutionNo: 4, title: "Human Bite with normal wound", 
    supplies: [
        {name:"Gauze Pad",price:"Php 16.50"},
        {name:"Sterile Dressing",price:"Php 6.58"},
    ]},
    {SolutionNo: 6, title: "Snake Bite", 
    supplies: [
        {name:"Bandage",price:"Php 21.25"},
     ]},
	{SolutionNo: 7, title: "Animal Bite with deep wound", 
    supplies: [
        {name:"Sterile Pad",price:"Php 16.50"},
        {name:"Sterile Dressing",price:"Php 6.58"},
		{name:"Bandage",price:"Php 21.25"},
    ]},
    {SolutionNo: 8, title: "Animal Bite with normal wound", 
    supplies: [
        {name:"Gauze Swabs",price:"Php 16.50"},
     ]},
    {SolutionNo: 9, title: "Scalp Wound", 
    supplies: [
        {name:"Gauze Pad",price:"Php 16.50"},
        {name:"Roller Bandage",price:"Php 25.50"},
    ]},
	{SolutionNo: 10, title: "Head Wound", 
    supplies: [
        {name:"Gauze Pad",price:"Php 16.50"},
        {name:"Roller Bandage",price:"Php 25.50"},
    ]},
    {SolutionNo: 11, title: "Mouth Bleeding", 
    supplies: [
        {name:"Gauze Pad",price:"Php 16.50"},
    ]},
    {SolutionNo: 12, title: "Finger Bleeding", 
    supplies: [
        {name:"Gauze Pad",price:"Php 16.50"},
    ]},
	{SolutionNo: 13, title: "Palm Wound", 
    supplies: [
        {name:"Gauze Pad",price:"Php 16.50"},
        {name:"Bandage",price:"Php 21.25"},
		{name:"Elevation Sling",price:"Php 78.25"},
    ]}
]

global.AccodionMedSupplies = [
    { title: "Human Bite with deep wound", content:  "Sterile Pad (Php 6.00)\nSterile Dressing/Non-fluffy Pad (Php 6.58)\nBandage (Php 21.25) "},
    { title: "Human Bite with normal wound", content: "Gauze Pad (Php 16.50)\nSterile Dressing (Php 6.58)" },
    { title: "Snake Bite", content: "Bandage (Php 21.25)"},
    { title: "Animal Bite with deep wound", content: "Sterile Pad (Php 6.00)\n Sterile Dressing (Php 0)\nBandage (Php 21.25"},
    { title: "Animal Bite with normal wound", content: "Gauze Swabs (Php 16.25)"},
    { title: "Scalp Wound", content: "Gauze Pad (Php 16.25)\nRoller Bandage (Php 25.50)"},
    { title: "Head Wound", content: "Gauze Pad (Php 16.25)\nRoller Bandage (Php 25.50)"},
    { title: "Mouth Bleeding", content: "Gauze Pad (Php 16.25)"},
    { title: "Palm Wound", content: "Gauze Pad (Php 16.25)\nBandage (Php 21.25)\nElevation Sling (Php 78.25)"},
  ];