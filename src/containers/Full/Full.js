import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

//MIT
// import Dashboard from '../../views/Dashboard/';
import Home from '../../views/Dashboard/Home';
import Welcome from '../../views/Dashboard/Welcome';
import FAQ from '../../views/Dashboard/FAQ';
import Cards from '../../views/Components/Cards/';
import Lecture6009 from '../../views/6.009/Lecture';
  import Lecture6009_L1 from '../../views/6.009/Lecture1';
  import Lecture6009_L2 from '../../views/6.009/Lecture2';
  import Lecture6009_L3 from '../../views/6.009/Lecture3';
  import Lecture6009_L4 from '../../views/6.009/Lecture4';
  import Lecture6009_L5 from '../../views/6.009/Lecture5';
  import Lecture6009_L6 from '../../views/6.009/Lecture6';
  import Lecture6009_L7 from '../../views/6.009/Lecture7';
  import Lecture6009_L8 from '../../views/6.009/Lecture8';
  import Lecture6009_L9 from '../../views/6.009/Lecture9';
  import Lecture6009_L10 from '../../views/6.009/Lecture10';


import Tutorial6009 from '../../views/6.009/Tutorial';
  import Tutorial6009_T1 from '../../views/6.009/Tutorial1';
  import Tutorial6009_T2 from '../../views/6.009/Tutorial2';
  import Tutorial6009_T3 from '../../views/6.009/Tutorial3';
  import Tutorial6009_T4 from '../../views/6.009/Tutorial4';
  import Tutorial6009_T5 from '../../views/6.009/Tutorial5';
  import Tutorial6009_T6 from '../../views/6.009/Tutorial6';
  import Tutorial6009_T7 from '../../views/6.009/Tutorial7';
  import Tutorial6009_T8 from '../../views/6.009/Tutorial8';
  import Tutorial6009_T9 from '../../views/6.009/Tutorial9';


import Lecture3091 from '../../views/3.091/Lecture';
  import Lecture3091_L1 from '../../views/3.091/Lecture1';
  import Lecture3091_L2 from '../../views/3.091/Lecture2';
  import Lecture3091_L3 from '../../views/3.091/Lecture3';
  import Lecture3091_L4 from '../../views/3.091/Lecture4';
  import Lecture3091_L5 from '../../views/3.091/Lecture5';
  import Lecture3091_L6 from '../../views/3.091/Lecture6';
  import Lecture3091_L7 from '../../views/3.091/Lecture7';
  import Lecture3091_L8 from '../../views/3.091/Lecture8';
  import Lecture3091_L9 from '../../views/3.091/Lecture9';
  import Lecture3091_L10 from '../../views/3.091/Lecture10';
  import Lecture3091_L11 from '../../views/3.091/Lecture11';
  import Lecture3091_L12 from '../../views/3.091/Lecture12';
  import Lecture3091_L13 from '../../views/3.091/Lecture13';
  import Lecture3091_L14 from '../../views/3.091/Lecture14';
  import Lecture3091_L15 from '../../views/3.091/Lecture15';
  import Lecture3091_L16 from '../../views/3.091/Lecture16';
  import Lecture3091_L17 from '../../views/3.091/Lecture17';
  import Lecture3091_L18 from '../../views/3.091/Lecture18';
  import Lecture3091_L19 from '../../views/3.091/Lecture19';
  import Lecture3091_L20 from '../../views/3.091/Lecture20';
  import Lecture3091_L21 from '../../views/3.091/Lecture21';
  import Lecture3091_L22 from '../../views/3.091/Lecture22';
  import Lecture3091_L23 from '../../views/3.091/Lecture23';
  import Lecture3091_L24 from '../../views/3.091/Lecture24';
  import Lecture3091_L25 from '../../views/3.091/Lecture25';
  import Lecture3091_L26 from '../../views/3.091/Lecture26';
  import Lecture3091_L27 from '../../views/3.091/Lecture27';
  import Lecture3091_L28 from '../../views/3.091/Lecture28';
  import Lecture3091_L29 from '../../views/3.091/Lecture29';
  import Lecture3091_L30 from '../../views/3.091/Lecture30';
  import Lecture3091_L31 from '../../views/3.091/Lecture31';
  import Lecture3091_L32 from '../../views/3.091/Lecture32';
  import Lecture3091_L33 from '../../views/3.091/Lecture33';
  import Lecture3091_L34 from '../../views/3.091/Lecture34';
  import Lecture3091_L35 from '../../views/3.091/Lecture35';
  import Lecture3091_L36 from '../../views/3.091/Lecture36';

import Crib3091 from '../../views/3.091/Crib';
  import Crib3091_Final from '../../views/3.091/CribFinal';
  import Crib3091_E1 from '../../views/3.091/CribExam1';
  import Crib3091_E2 from '../../views/3.091/CribExam2';
  import Crib3091_E3 from '../../views/3.091/CribExam3';


import Lecture6006 from '../../views/6.006/Lecture';
  import Lecture6006_L1 from '../../views/6.006/Lecture1';
  import Lecture6006_L2 from '../../views/6.006/Lecture2';
  import Lecture6006_L3 from '../../views/6.006/Lecture3';
  import Lecture6006_L4 from '../../views/6.006/Lecture4';
  import Lecture6006_L5 from '../../views/6.006/Lecture5';
  import Lecture6006_L6 from '../../views/6.006/Lecture6';
  import Lecture6006_L7 from '../../views/6.006/Lecture7';
  import Lecture6006_L8 from '../../views/6.006/Lecture8';
  import Lecture6006_L9 from '../../views/6.006/Lecture9';
  import Lecture6006_L10 from '../../views/6.006/Lecture10';
  import Lecture6006_L11 from '../../views/6.006/Lecture11';
  import Lecture6006_L12 from '../../views/6.006/Lecture12';
  import Lecture6006_L13 from '../../views/6.006/Lecture13';
  import Lecture6006_L14 from '../../views/6.006/Lecture14';
  import Lecture6006_L15 from '../../views/6.006/Lecture15';
  import Lecture6006_L16 from '../../views/6.006/Lecture16';
  import Lecture6006_L17 from '../../views/6.006/Lecture17';
  import Lecture6006_L18 from '../../views/6.006/Lecture18';
  import Lecture6006_L19 from '../../views/6.006/Lecture19';
  import Lecture6006_L20 from '../../views/6.006/Lecture20';
  import Lecture6006_L21 from '../../views/6.006/Lecture21';
  import Lecture6006_L22 from '../../views/6.006/Lecture22';
  import Lecture6006_L23 from '../../views/6.006/Lecture23';

import Recitation6006 from '../../views/6.006/Recitation';
  import Recitation6006_R1 from '../../views/6.006/Recitation1';
  import Recitation6006_R2 from '../../views/6.006/Recitation2';
  import Recitation6006_R3 from '../../views/6.006/Recitation3';
  import Recitation6006_R4 from '../../views/6.006/Recitation4';
  import Recitation6006_R5 from '../../views/6.006/Recitation5';
  import Recitation6006_R6 from '../../views/6.006/Recitation6';
  import Recitation6006_R7 from '../../views/6.006/Recitation7';
  import Recitation6006_R8 from '../../views/6.006/Recitation8';
  import Recitation6006_R9 from '../../views/6.006/Recitation9';
  import Recitation6006_R10 from '../../views/6.006/Recitation10';
  import Recitation6006_R11 from '../../views/6.006/Recitation11';
  import Recitation6006_R12 from '../../views/6.006/Recitation12';
  import Recitation6006_R13 from '../../views/6.006/Recitation13';
  import Recitation6006_R14 from '../../views/6.006/Recitation14';
  import Recitation6006_R15 from '../../views/6.006/Recitation15';
  import Recitation6006_R16 from '../../views/6.006/Recitation16';
  import Recitation6006_R17 from '../../views/6.006/Recitation17';
  import Recitation6006_R18 from '../../views/6.006/Recitation18';
  import Recitation6006_R19 from '../../views/6.006/Recitation19';
  import Recitation6006_R20 from '../../views/6.006/Recitation20';
  import Recitation6006_R21 from '../../views/6.006/Recitation21';

import Crib6006 from '../../views/6.006/Crib';
  import Crib6006_Final from '../../views/6.006/CribFinal';
  import Crib6006_Q1 from '../../views/6.006/CribQuiz1';
  import Crib6006_Q2 from '../../views/6.006/CribQuiz2';


import Readings6031 from '../../views/6.031/Readings';
  import Reading6031_R1 from '../../views/6.031/Reading1';
  import Reading6031_R2 from '../../views/6.031/Reading2';
  import Reading6031_R3 from '../../views/6.031/Reading3';
  import Reading6031_R4 from '../../views/6.031/Reading4';
  import Reading6031_R5 from '../../views/6.031/Reading5';
  import Reading6031_R6 from '../../views/6.031/Reading6';
  import Reading6031_R7 from '../../views/6.031/Reading7';
  import Reading6031_R8 from '../../views/6.031/Reading8';
  import Reading6031_R9 from '../../views/6.031/Reading9';
  import Reading6031_R10 from '../../views/6.031/Reading10';
  import Reading6031_R11 from '../../views/6.031/Reading11';
  import Reading6031_R12 from '../../views/6.031/Reading12';
  import Reading6031_R13 from '../../views/6.031/Reading13';
  import Reading6031_R14 from '../../views/6.031/Reading14';
  import Reading6031_R15 from '../../views/6.031/Reading15';
  import Reading6031_R16 from '../../views/6.031/Reading16';
  import Reading6031_R17 from '../../views/6.031/Reading17';
  import Reading6031_R18 from '../../views/6.031/Reading18';
  import Reading6031_R19 from '../../views/6.031/Reading19';
  import Reading6031_R20 from '../../views/6.031/Reading20';
  import Reading6031_R21 from '../../views/6.031/Reading21';
  import Reading6031_R22 from '../../views/6.031/Reading22';
  import Reading6031_R23 from '../../views/6.031/Reading23';
  import Reading6031_R24 from '../../views/6.031/Reading24';
  import Reading6031_R25 from '../../views/6.031/Reading25';
  import Reading6031_R26 from '../../views/6.031/Reading26';
  import Reading6031_R27 from '../../views/6.031/Reading27';
  import Reading6031_R28 from '../../views/6.031/Reading28';
  import Reading6031_R29 from '../../views/6.031/Reading29';

import Crib6031 from '../../views/6.031/Crib';
  import Crib6031_Q1 from '../../views/6.031/CribQuiz1';
  import Crib6031_Q2 from '../../views/6.031/CribQuiz2';


import Lecture6033 from '../../views/6.033/Lecture';
  import Lecture6033_L1 from '../../views/6.033/Lecture1';
  import Lecture6033_L2 from '../../views/6.033/Lecture2';
  import Lecture6033_L3 from '../../views/6.033/Lecture3';
  import Lecture6033_L4 from '../../views/6.033/Lecture4';
  import Lecture6033_L5 from '../../views/6.033/Lecture5';
  import Lecture6033_L6 from '../../views/6.033/Lecture6';
  import Lecture6033_L7 from '../../views/6.033/Lecture7';
  import Lecture6033_L8 from '../../views/6.033/Lecture8';
  import Lecture6033_L9 from '../../views/6.033/Lecture9';
  import Lecture6033_L10 from '../../views/6.033/Lecture10';
  import Lecture6033_L11 from '../../views/6.033/Lecture11';
  import Lecture6033_L12 from '../../views/6.033/Lecture12';
  import Lecture6033_L13 from '../../views/6.033/Lecture13';
  import Lecture6033_L14 from '../../views/6.033/Lecture14';
  import Lecture6033_L15 from '../../views/6.033/Lecture15';
  import Lecture6033_L16 from '../../views/6.033/Lecture16';
  import Lecture6033_L17 from '../../views/6.033/Lecture17';
  import Lecture6033_L18 from '../../views/6.033/Lecture18';
  import Lecture6033_L19 from '../../views/6.033/Lecture19';
  import Lecture6033_L20 from '../../views/6.033/Lecture20';
  import Lecture6033_L21 from '../../views/6.033/Lecture21';


import Textbook6042 from '../../views/6.042/Textbook';
  import Textbook6042_T1 from '../../views/6.042/Textbook1';
  import Textbook6042_T2 from '../../views/6.042/Textbook2';
  import Textbook6042_T3 from '../../views/6.042/Textbook3';
  import Textbook6042_T4 from '../../views/6.042/Textbook4';
  import Textbook6042_T5 from '../../views/6.042/Textbook5';
  import Textbook6042_T6 from '../../views/6.042/Textbook6';
  import Textbook6042_T7 from '../../views/6.042/Textbook7';
  import Textbook6042_T8 from '../../views/6.042/Textbook8';
  import Textbook6042_T9 from '../../views/6.042/Textbook9';
  import Textbook6042_T10 from '../../views/6.042/Textbook10';
  import Textbook6042_T11 from '../../views/6.042/Textbook11';
  import Textbook6042_T12 from '../../views/6.042/Textbook12';
  import Textbook6042_T13 from '../../views/6.042/Textbook13';
  import Textbook6042_T14 from '../../views/6.042/Textbook14';
  import Textbook6042_T15 from '../../views/6.042/Textbook15';
  import Textbook6042_T16 from '../../views/6.042/Textbook16';
  import Textbook6042_T17 from '../../views/6.042/Textbook17';
  import Textbook6042_T18 from '../../views/6.042/Textbook18';
  import Textbook6042_T19 from '../../views/6.042/Textbook19';
  import Textbook6042_T20 from '../../views/6.042/Textbook20';
  import Textbook6042_T21 from '../../views/6.042/Textbook21';
  import Textbook6042_T22 from '../../views/6.042/Textbook22';
  import Textbook6042_T23 from '../../views/6.042/Textbook23';
  import Textbook6042_T24 from '../../views/6.042/Textbook24';
  import Textbook6042_T25 from '../../views/6.042/Textbook25';
  import Textbook6042_T26 from '../../views/6.042/Textbook26';
  import Textbook6042_T27 from '../../views/6.042/Textbook27';
  import Textbook6042_T28 from '../../views/6.042/Textbook28';
  import Textbook6042_T29 from '../../views/6.042/Textbook29';
  import Textbook6042_T30 from '../../views/6.042/Textbook30';
  import Textbook6042_T31 from '../../views/6.042/Textbook31';
  import Textbook6042_T32 from '../../views/6.042/Textbook32';
  import Textbook6042_T33 from '../../views/6.042/Textbook33';
  import Textbook6042_T34 from '../../views/6.042/Textbook34';
  import Textbook6042_T35 from '../../views/6.042/Textbook35';
  import Textbook6042_T36 from '../../views/6.042/Textbook36';
  import Textbook6042_T37 from '../../views/6.042/Textbook37';
  import Textbook6042_T38 from '../../views/6.042/Textbook38';



import Pset6042 from '../../views/6.042/Pset';
  import Pset6042_P1 from '../../views/6.042/Pset1';
  import Pset6042_P2 from '../../views/6.042/Pset2';
  import Pset6042_P3 from '../../views/6.042/Pset3';
  import Pset6042_P4 from '../../views/6.042/Pset4';
  import Pset6042_P5 from '../../views/6.042/Pset5';
  import Pset6042_P6 from '../../views/6.042/Pset6';
  import Pset6042_P7 from '../../views/6.042/Pset7';
  import Pset6042_P8 from '../../views/6.042/Pset8';
  import Pset6042_P9 from '../../views/6.042/Pset9';


import Crib6042 from '../../views/6.042/Crib';
  import Crib6042_C1 from '../../views/6.042/Crib1';
  import Crib6042_C2 from '../../views/6.042/Crib2';
  import Crib6042_C3 from '../../views/6.042/Crib3';
  import Crib6042_C4 from '../../views/6.042/Crib4';
  import Crib6042_C5 from '../../views/6.042/CribFinal';


  import Lecture6046 from '../../views/6.046/Lecture';
  import Lecture6046_L1 from '../../views/6.046/Lecture1';
  import Lecture6046_L2 from '../../views/6.046/Lecture2';
  import Lecture6046_L3 from '../../views/6.046/Lecture3';
  import Lecture6046_L4 from '../../views/6.046/Lecture4';
  import Lecture6046_L5 from '../../views/6.046/Lecture5';
  import Lecture6046_L6 from '../../views/6.046/Lecture6';
  import Lecture6046_L7 from '../../views/6.046/Lecture7';
  import Lecture6046_L8 from '../../views/6.046/Lecture8';
  import Lecture6046_L9 from '../../views/6.046/Lecture9';
  import Lecture6046_L10 from '../../views/6.046/Lecture10';
  import Lecture6046_L11 from '../../views/6.046/Lecture11';
  import Lecture6046_L12 from '../../views/6.046/Lecture12';
  import Lecture6046_L13 from '../../views/6.046/Lecture13';
  import Lecture6046_L14 from '../../views/6.046/Lecture14';
  import Lecture6046_L15 from '../../views/6.046/Lecture15';
  import Lecture6046_L16 from '../../views/6.046/Lecture16';
  import Lecture6046_L17 from '../../views/6.046/Lecture17';
  import Lecture6046_L18 from '../../views/6.046/Lecture18';
  import Lecture6046_L19 from '../../views/6.046/Lecture19';
  import Lecture6046_L20 from '../../views/6.046/Lecture20';
  import Lecture6046_L21 from '../../views/6.046/Lecture21';
  import Lecture6046_L22 from '../../views/6.046/Lecture22';
  import Lecture6046_L23 from '../../views/6.046/Lecture23';
  import Lecture6046_L24 from '../../views/6.046/Lecture24';

import Recitation6046 from '../../views/6.046/Recitation';
  import Recitation6046_R1 from '../../views/6.046/Recitation1';
  import Recitation6046_R2 from '../../views/6.046/Recitation2';
  import Recitation6046_R3 from '../../views/6.046/Recitation3';
  import Recitation6046_R4 from '../../views/6.046/Recitation4';
  import Recitation6046_R5 from '../../views/6.046/Recitation5';
  import Recitation6046_R6 from '../../views/6.046/Recitation6';
  import Recitation6046_R7 from '../../views/6.046/Recitation7';
  import Recitation6046_R8 from '../../views/6.046/Recitation8';
  import Recitation6046_R9 from '../../views/6.046/Recitation9';
  import Recitation6046_R10 from '../../views/6.046/Recitation10';
  import Recitation6046_R11 from '../../views/6.046/Recitation11';

  import Crib6046 from '../../views/6.046/Crib';
  import Crib6046_Final from '../../views/6.046/CribFinal';
  import Crib6046_Q1 from '../../views/6.046/CribQuiz1';
  import Crib6046_Q2 from '../../views/6.046/CribQuiz2';

import Lecture608 from '../../views/6.08/Lecture';
  import Lecture608_L1 from '../../views/6.08/Lecture1';
  import Lecture608_L2 from '../../views/6.08/Lecture2';
  import Lecture608_L3 from '../../views/6.08/Lecture3';
  import Lecture608_L4 from '../../views/6.08/Lecture4';
  import Lecture608_L5 from '../../views/6.08/Lecture5';
  import Lecture608_L6 from '../../views/6.08/Lecture6';

import Crib608 from '../../views/6.08/Crib';
  import Crib608_1 from '../../views/6.08/CribMidterm';

import Lecture7012 from '../../views/7.012/Lecture';
  import Lecture7012_L1 from '../../views/7.012/Lecture1';
  import Lecture7012_L2 from '../../views/7.012/Lecture2';
  import Lecture7012_L3 from '../../views/7.012/Lecture3';
  import Lecture7012_L4 from '../../views/7.012/Lecture4';
  import Lecture7012_L5 from '../../views/7.012/Lecture5';
  import Lecture7012_L6 from '../../views/7.012/Lecture6';
  import Lecture7012_L7 from '../../views/7.012/Lecture7';
  import Lecture7012_L8 from '../../views/7.012/Lecture8';
  import Lecture7012_L9 from '../../views/7.012/Lecture9';
  import Lecture7012_L10 from '../../views/7.012/Lecture10';
  import Lecture7012_L11 from '../../views/7.012/Lecture11';
  import Lecture7012_L12 from '../../views/7.012/Lecture12';
  import Lecture7012_L13 from '../../views/7.012/Lecture13';
  import Lecture7012_L14 from '../../views/7.012/Lecture14';
  import Lecture7012_L15 from '../../views/7.012/Lecture15';
  import Lecture7012_L16 from '../../views/7.012/Lecture16';
  import Lecture7012_L17 from '../../views/7.012/Lecture17';
  import Lecture7012_L18 from '../../views/7.012/Lecture18';
  import Lecture7012_L19 from '../../views/7.012/Lecture19';
  import Lecture7012_L20 from '../../views/7.012/Lecture20';
  import Lecture7012_L21 from '../../views/7.012/Lecture21';
  import Lecture7012_L22 from '../../views/7.012/Lecture22';
  import Lecture7012_L23 from '../../views/7.012/Lecture23';
  import Lecture7012_L24 from '../../views/7.012/Lecture24';
  import Lecture7012_L25 from '../../views/7.012/Lecture25';
  import Lecture7012_L26 from '../../views/7.012/Lecture26';
  import Lecture7012_L27 from '../../views/7.012/Lecture27';
  import Lecture7012_L28 from '../../views/7.012/Lecture28';
  import Lecture7012_L29 from '../../views/7.012/Lecture29';
  import Lecture7012_L30 from '../../views/7.012/Lecture30';
  import Lecture7012_L31 from '../../views/7.012/Lecture31';
  import Lecture7012_L32 from '../../views/7.012/Lecture32';
  import Lecture7012_L33 from '../../views/7.012/Lecture33';
  import Lecture7012_L34 from '../../views/7.012/Lecture34';
  import Lecture7012_L35 from '../../views/7.012/Lecture35';

import Recitation7012 from '../../views/7.012/Recitation';
  import Recitation7012_R1 from '../../views/7.012/Recitation1';
  import Recitation7012_R2 from '../../views/7.012/Recitation2';
  import Recitation7012_R3 from '../../views/7.012/Recitation3';
  import Recitation7012_R4 from '../../views/7.012/Recitation4';
  import Recitation7012_R5 from '../../views/7.012/Recitation5';
  import Recitation7012_R6 from '../../views/7.012/Recitation6';
  import Recitation7012_R7 from '../../views/7.012/Recitation7';
  import Recitation7012_R8 from '../../views/7.012/Recitation8';
  import Recitation7012_R9 from '../../views/7.012/Recitation9';
  import Recitation7012_R10 from '../../views/7.012/Recitation10';
  import Recitation7012_R11 from '../../views/7.012/Recitation11';
  import Recitation7012_R12 from '../../views/7.012/Recitation12';
  import Recitation7012_R13 from '../../views/7.012/Recitation13';
  import Recitation7012_R14 from '../../views/7.012/Recitation14';
  import Recitation7012_R15 from '../../views/7.012/Recitation15';
  import Recitation7012_R16 from '../../views/7.012/Recitation16';
  import Recitation7012_R17 from '../../views/7.012/Recitation17';
  import Recitation7012_R18 from '../../views/7.012/Recitation18';
  import Recitation7012_R19 from '../../views/7.012/Recitation19';
  import Recitation7012_R20 from '../../views/7.012/Recitation20';
  import Recitation7012_R21 from '../../views/7.012/Recitation21';
  import Recitation7012_R22 from '../../views/7.012/Recitation22';


import Lecture1470 from '../../views/14.70/Lecture';
  import Lecture1470_L1 from '../../views/14.70/Lecture1';
  import Lecture1470_L2 from '../../views/14.70/Lecture2';
  import Lecture1470_L3 from '../../views/14.70/Lecture3';
  import Lecture1470_L4 from '../../views/14.70/Lecture4';
  import Lecture1470_L5 from '../../views/14.70/Lecture5';
  import Lecture1470_L6 from '../../views/14.70/Lecture6';
  import Lecture1470_L7 from '../../views/14.70/Lecture7';
  import Lecture1470_L8 from '../../views/14.70/Lecture8';
  import Lecture1470_L9 from '../../views/14.70/Lecture9';
  import Lecture1470_L10 from '../../views/14.70/Lecture10';
  import Lecture1470_L11 from '../../views/14.70/Lecture11';
  import Lecture1470_L12 from '../../views/14.70/Lecture12';
  import Lecture1470_L13 from '../../views/14.70/Lecture13';


  import Textbook1402 from '../../views/14.02/Textbook';
  import Textbook1402_T2 from '../../views/14.02/Textbook2';
  import Textbook1402_T3 from '../../views/14.02/Textbook3';
  import Textbook1402_T1 from '../../views/14.02/Textbook1';
  import Textbook1402_T4 from '../../views/14.02/Textbook4';
  import Textbook1402_T5 from '../../views/14.02/Textbook5';
  import Textbook1402_T6 from '../../views/14.02/Textbook6';
  import Textbook1402_T7 from '../../views/14.02/Textbook7';
  import Textbook1402_T8 from '../../views/14.02/Textbook8';
  import Textbook1402_T9 from '../../views/14.02/Textbook9';
  import Textbook1402_T10 from '../../views/14.02/Textbook10';
  import Textbook1402_T11 from '../../views/14.02/Textbook11';
  import Textbook1402_T12 from '../../views/14.02/Textbook12';
  import Textbook1402_T13 from '../../views/14.02/Textbook13';
  import Textbook1402_T14 from '../../views/14.02/Textbook14';
  import Textbook1402_T17 from '../../views/14.02/Textbook17';
  import Textbook1402_T18 from '../../views/14.02/Textbook18';
  import Textbook1402_T19 from '../../views/14.02/Textbook19';

  import Crib1402 from '../../views/14.02/Crib';
  import Crib1402_C1 from '../../views/14.02/Crib1';
  import Crib1402_C2 from '../../views/14.02/Crib2';
  import Crib1402_C3 from '../../views/14.02/Crib3';

  import Crib21M011 from '../../views/21M.011/Crib';
  import Crib21M011_Final from '../../views/21M.011/CribFinal';
  import Crib21M011_E1 from '../../views/21M.011/CribExam1';
  import Crib21M011_E2 from '../../views/21M.011/CribExam2';
  import Crib21M011_E3 from '../../views/21M.011/CribExam3';

// BGHS
import APPhysics1 from '../../views/APPhysics1/Home';
  import APPhysics11 from '../../views/APPhysics1/APPhysics11';
  import APPhysics12 from '../../views/APPhysics1/APPhysics12';
  import APPhysics13 from '../../views/APPhysics1/APPhysics13';
  import APPhysics14 from '../../views/APPhysics1/APPhysics14';
  import APPhysics15 from '../../views/APPhysics1/APPhysics15';
  import APPhysics16 from '../../views/APPhysics1/APPhysics16';
  import APPhysics17 from '../../views/APPhysics1/APPhysics17';
  import APPhysics18 from '../../views/APPhysics1/APPhysics18';
  import APPhysics19 from '../../views/APPhysics1/APPhysics19';
  import APPhysics110 from '../../views/APPhysics1/APPhysics110';


import APPhysicsC from '../../views/APPhysicsC/APPhysicsC';
  import APPhysicsC1 from '../../views/APPhysicsC/APPhysicsC1';
  import APPhysicsC2 from '../../views/APPhysicsC/APPhysicsC2';

import APEcon from '../../views/APEcon/APEcon';
  import Micro from '../../views/APEcon/Micro';


import APCalcBC from '../../views/APCalcBC/APCalcBC';
  import APCalcBC1 from '../../views/APCalcBC/APCalcBC1';
  import APCalcBC2 from '../../views/APCalcBC/APCalcBC2';
  import APCalcBC3 from '../../views/APCalcBC/APCalcBC3';
  import APCalcBC4 from '../../views/APCalcBC/APCalcBC4';
  import APCalcBC5 from '../../views/APCalcBC/APCalcBC5';
  import APCalcBC6 from '../../views/APCalcBC/APCalcBC6';
  import APCalcBC7 from '../../views/APCalcBC/APCalcBC7';
  import APCalcBC8 from '../../views/APCalcBC/APCalcBC8';
  import APCalcBC9 from '../../views/APCalcBC/APCalcBC9';

import Calc3 from '../../views/Calc3/Calc3';
  import Calc31 from '../../views/Calc3/Calc31';
  import Calc32 from '../../views/Calc3/Calc32';
  import Calc33 from '../../views/Calc3/Calc33';
  import Calc34 from '../../views/Calc3/Calc34';
  import Calc35 from '../../views/Calc3/Calc35';

import DiffEq from '../../views/DiffEq/DiffEq';
  import DiffEq1 from '../../views/DiffEq/DiffEq1';
  import DiffEq2 from '../../views/DiffEq/DiffEq2';
  import DiffEq3 from '../../views/DiffEq/DiffEq3';
  import DiffEq4 from '../../views/DiffEq/DiffEq4';
  import DiffEq5 from '../../views/DiffEq/DiffEq5';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/Dashboard" name="Dashboard" component={Home}/>
                <Route path="/Welcome" name="Welcome" component={Welcome}/>
                <Route path="/FAQ" name="FAQ" component={FAQ}/>
                <Route path="/Home" name="Home" component={Home}/>
                <Route path="/components/cards" name="Cards" component={Cards}/>
                <Route path="/6.009/Lecture" name="Lecture" component={Lecture6009}/>
                <Route path="/6.009/Tutorial" name="Tutorial" component={Tutorial6009}/>
                <Route path="/3.091/Lecture" name="Lecture" component={Lecture3091}/>
                <Route path="/3.091/Crib" name="Crib" component={Crib3091}/>
                <Route path="/6.006/Lecture" name="Lecture" component={Lecture6006}/>
                <Route path="/6.006/Recitation" name="Recitation" component={Recitation6006}/>
                <Route path="/6.006/Crib" name="Crib" component={Crib6006}/>
                <Route path="/6.031/Readings" name="Readings" component={Readings6031}/>
                <Route path="/6.031/Crib" name="Crib" component={Crib6031}/>
                <Route path="/6.033/Lecture" name="Lecture" component={Lecture6033}/>
                <Route path="/6.042/Textbook" name="Textbook" component={Textbook6042}/>
                <Route path="/6.042/Pset" name="Pset" component={Pset6042}/>
                <Route path="/6.042/Crib" name="Crib" component={Crib6042}/>
                <Route path="/6.046/Lecture" name="Lecture" component={Lecture6046}/>
                <Route path="/6.046/Recitation" name="Recitation" component={Recitation6046}/>
                <Route path="/6.046/Crib" name="Crib" component={Crib6046}/>
                <Route path="/6.08/Lecture" name="Lecture" component={Lecture608}/>
                <Route path="/6.08/Crib" name="Crib" component={Crib608}/>
                <Route path="/7.012/Lecture" name="Lecture" component={Lecture7012}/>
                <Route path="/7.012/Recitation" name="Recitation" component={Recitation7012}/>
                <Route path="/14.70/Lecture" name="Lecture" component={Lecture1470}/>
                <Route path="/14.02/Textbook" name="Textbook" component={Textbook1402}/>
                <Route path="/14.02/Crib" name="Crib" component={Crib1402}/>
                <Route path="/21M.011/Crib" name="Crib" component={Crib21M011}/>
                <Route path="/APPhysics1/Home" name="APPhysics1" component={APPhysics1}/>
                <Route path="/APPhysicsC/APPhysicsC" name="APPhysicsC" component={APPhysicsC}/>
                <Route path="/APEcon/APEcon" name="APEcon" component={APEcon}/>
                <Route path="/APCalcBC/APCalcBC" name="APCalcBC" component={APCalcBC}/>
                <Route path="/Calc3/Calc3" name="Calc3" component={Calc3}/>
                <Route path="/DiffEq/DiffEq" name="DiffEq" component={DiffEq}/>

                <Route path="/3.091/CribFinal" component={Crib3091_Final}/>
                <Route path="/3.091/CribExam1" component={Crib3091_E1}/>
                <Route path="/3.091/CribExam2" component={Crib3091_E2}/>
                <Route path="/3.091/CribExam3" component={Crib3091_E3}/>

                <Route path="/3.091/Lecture1" component={Lecture3091_L1}/>
                <Route path="/3.091/Lecture2" component={Lecture3091_L2}/>
                <Route path="/3.091/Lecture3" component={Lecture3091_L3}/>
                <Route path="/3.091/Lecture4" component={Lecture3091_L4}/>
                <Route path="/3.091/Lecture5" component={Lecture3091_L5}/>
                <Route path="/3.091/Lecture6" component={Lecture3091_L6}/>
                <Route path="/3.091/Lecture7" component={Lecture3091_L7}/>
                <Route path="/3.091/Lecture8" component={Lecture3091_L8}/>
                <Route path="/3.091/Lecture9" component={Lecture3091_L9}/>
                <Route path="/3.091/Lecture10" component={Lecture3091_L10}/>
                <Route path="/3.091/Lecture11" component={Lecture3091_L11}/>
                <Route path="/3.091/Lecture12" component={Lecture3091_L12}/>
                <Route path="/3.091/Lecture13" component={Lecture3091_L13}/>
                <Route path="/3.091/Lecture14" component={Lecture3091_L14}/>
                <Route path="/3.091/Lecture15" component={Lecture3091_L15}/>
                <Route path="/3.091/Lecture16" component={Lecture3091_L16}/>
                <Route path="/3.091/Lecture17" component={Lecture3091_L17}/>
                <Route path="/3.091/Lecture18" component={Lecture3091_L18}/>
                <Route path="/3.091/Lecture19" component={Lecture3091_L19}/>
                <Route path="/3.091/Lecture20" component={Lecture3091_L20}/>
                <Route path="/3.091/Lecture21" component={Lecture3091_L21}/>
                <Route path="/3.091/Lecture22" component={Lecture3091_L22}/>
                <Route path="/3.091/Lecture23" component={Lecture3091_L23}/>
                <Route path="/3.091/Lecture24" component={Lecture3091_L24}/>
                <Route path="/3.091/Lecture25" component={Lecture3091_L25}/>
                <Route path="/3.091/Lecture26" component={Lecture3091_L26}/>
                <Route path="/3.091/Lecture27" component={Lecture3091_L27}/>
                <Route path="/3.091/Lecture28" component={Lecture3091_L28}/>
                <Route path="/3.091/Lecture29" component={Lecture3091_L29}/>
                <Route path="/3.091/Lecture30" component={Lecture3091_L30}/>
                <Route path="/3.091/Lecture31" component={Lecture3091_L31}/>
                <Route path="/3.091/Lecture32" component={Lecture3091_L32}/>
                <Route path="/3.091/Lecture33" component={Lecture3091_L33}/>
                <Route path="/3.091/Lecture34" component={Lecture3091_L34}/>
                <Route path="/3.091/Lecture35" component={Lecture3091_L35}/>
                <Route path="/3.091/Lecture36" component={Lecture3091_L36}/>


                <Route path="/6.006/Lecture1" component={Lecture6006_L1}/>
                <Route path="/6.006/Lecture2" component={Lecture6006_L2}/>
                <Route path="/6.006/Lecture3" component={Lecture6006_L3}/>
                <Route path="/6.006/Lecture4" component={Lecture6006_L4}/>
                <Route path="/6.006/Lecture5" component={Lecture6006_L5}/>
                <Route path="/6.006/Lecture6" component={Lecture6006_L6}/>
                <Route path="/6.006/Lecture7" component={Lecture6006_L7}/>
                <Route path="/6.006/Lecture8" component={Lecture6006_L8}/>
                <Route path="/6.006/Lecture9" component={Lecture6006_L9}/>
                <Route path="/6.006/Lecture10" component={Lecture6006_L10}/>
                <Route path="/6.006/Lecture11" component={Lecture6006_L11}/>
                <Route path="/6.006/Lecture12" component={Lecture6006_L12}/>
                <Route path="/6.006/Lecture13" component={Lecture6006_L13}/>
                <Route path="/6.006/Lecture14" component={Lecture6006_L14}/>
                <Route path="/6.006/Lecture15" component={Lecture6006_L15}/>
                <Route path="/6.006/Lecture16" component={Lecture6006_L16}/>
                <Route path="/6.006/Lecture17" component={Lecture6006_L17}/>
                <Route path="/6.006/Lecture18" component={Lecture6006_L18}/>
                <Route path="/6.006/Lecture19" component={Lecture6006_L19}/>
                <Route path="/6.006/Lecture20" component={Lecture6006_L20}/>
                <Route path="/6.006/Lecture21" component={Lecture6006_L21}/>
                <Route path="/6.006/Lecture22" component={Lecture6006_L22}/>
                <Route path="/6.006/Lecture23" component={Lecture6006_L23}/>


                <Route path="/6.006/Recitation1" component={Recitation6006_R1}/>
                <Route path="/6.006/Recitation2" component={Recitation6006_R2}/>
                <Route path="/6.006/Recitation3" component={Recitation6006_R3}/>
                <Route path="/6.006/Recitation4" component={Recitation6006_R4}/>
                <Route path="/6.006/Recitation5" component={Recitation6006_R5}/>
                <Route path="/6.006/Recitation6" component={Recitation6006_R6}/>
                <Route path="/6.006/Recitation7" component={Recitation6006_R7}/>
                <Route path="/6.006/Recitation8" component={Recitation6006_R8}/>
                <Route path="/6.006/Recitation9" component={Recitation6006_R9}/>
                <Route path="/6.006/Recitation10" component={Recitation6006_R10}/>
                <Route path="/6.006/Recitation11" component={Recitation6006_R11}/>
                <Route path="/6.006/Recitation12" component={Recitation6006_R12}/>
                <Route path="/6.006/Recitation13" component={Recitation6006_R13}/>
                <Route path="/6.006/Recitation14" component={Recitation6006_R14}/>
                <Route path="/6.006/Recitation15" component={Recitation6006_R15}/>
                <Route path="/6.006/Recitation16" component={Recitation6006_R16}/>
                <Route path="/6.006/Recitation17" component={Recitation6006_R17}/>
                <Route path="/6.006/Recitation18" component={Recitation6006_R18}/>
                <Route path="/6.006/Recitation19" component={Recitation6006_R19}/>
                <Route path="/6.006/Recitation20" component={Recitation6006_R20}/>
                <Route path="/6.006/Recitation21" component={Recitation6006_R21}/>

                <Route path="/6.006/CribFinal" component={Crib6006_Final}/>
                <Route path="/6.006/CribQuiz1" component={Crib6006_Q1}/>
                <Route path="/6.006/CribQuiz2" component={Crib6006_Q2}/>


                <Route path="/6.009/Lecture1" component={Lecture6009_L1}/>
                <Route path="/6.009/Lecture2" component={Lecture6009_L2}/>
                <Route path="/6.009/Lecture3" component={Lecture6009_L3}/>
                <Route path="/6.009/Lecture4" component={Lecture6009_L4}/>
                <Route path="/6.009/Lecture5" component={Lecture6009_L5}/>
                <Route path="/6.009/Lecture6" component={Lecture6009_L6}/>
                <Route path="/6.009/Lecture7" component={Lecture6009_L7}/>
                <Route path="/6.009/Lecture8" component={Lecture6009_L8}/>
                <Route path="/6.009/Lecture9" component={Lecture6009_L9}/>
                <Route path="/6.009/Lecture10" component={Lecture6009_L10}/>

                <Route path="/6.009/Tutorial1" component={Tutorial6009_T1}/>
                <Route path="/6.009/Tutorial2" component={Tutorial6009_T2}/>
                <Route path="/6.009/Tutorial3" component={Tutorial6009_T3}/>
                <Route path="/6.009/Tutorial4" component={Tutorial6009_T4}/>
                <Route path="/6.009/Tutorial5" component={Tutorial6009_T5}/>
                <Route path="/6.009/Tutorial6" component={Tutorial6009_T6}/>
                <Route path="/6.009/Tutorial7" component={Tutorial6009_T7}/>
                <Route path="/6.009/Tutorial8" component={Tutorial6009_T8}/>
                <Route path="/6.009/Tutorial9" component={Tutorial6009_T9}/>


                <Route path="/6.031/CribQuiz1" component={Crib6031_Q1}/>
                <Route path="/6.031/CribQuiz2" component={Crib6031_Q2}/>

                <Route path="/6.031/Reading1" component={Reading6031_R1}/>
                <Route path="/6.031/Reading2" component={Reading6031_R2}/>
                <Route path="/6.031/Reading3" component={Reading6031_R3}/>
                <Route path="/6.031/Reading4" component={Reading6031_R4}/>
                <Route path="/6.031/Reading5" component={Reading6031_R5}/>
                <Route path="/6.031/Reading6" component={Reading6031_R6}/>
                <Route path="/6.031/Reading7" component={Reading6031_R7}/>
                <Route path="/6.031/Reading8" component={Reading6031_R8}/>
                <Route path="/6.031/Reading9" component={Reading6031_R9}/>
                <Route path="/6.031/Reading10" component={Reading6031_R10}/>
                <Route path="/6.031/Reading11" component={Reading6031_R11}/>
                <Route path="/6.031/Reading12" component={Reading6031_R12}/>
                <Route path="/6.031/Reading13" component={Reading6031_R13}/>
                <Route path="/6.031/Reading14" component={Reading6031_R14}/>
                <Route path="/6.031/Reading15" component={Reading6031_R15}/>
                <Route path="/6.031/Reading16" component={Reading6031_R16}/>
                <Route path="/6.031/Reading17" component={Reading6031_R17}/>
                <Route path="/6.031/Reading18" component={Reading6031_R18}/>
                <Route path="/6.031/Reading19" component={Reading6031_R19}/>
                <Route path="/6.031/Reading20" component={Reading6031_R20}/>
                <Route path="/6.031/Reading21" component={Reading6031_R21}/>
                <Route path="/6.031/Reading22" component={Reading6031_R22}/>
                <Route path="/6.031/Reading23" component={Reading6031_R23}/>
                <Route path="/6.031/Reading24" component={Reading6031_R24}/>
                <Route path="/6.031/Reading25" component={Reading6031_R25}/>
                <Route path="/6.031/Reading26" component={Reading6031_R26}/>
                <Route path="/6.031/Reading27" component={Reading6031_R27}/>
                <Route path="/6.031/Reading28" component={Reading6031_R28}/>
                <Route path="/6.031/Reading29" component={Reading6031_R29}/>

                <Route path="/6.033/Lecture1" component={Lecture6033_L1}/>
                <Route path="/6.033/Lecture2" component={Lecture6033_L2}/>
                <Route path="/6.033/Lecture3" component={Lecture6033_L3}/>
                <Route path="/6.033/Lecture4" component={Lecture6033_L4}/>
                <Route path="/6.033/Lecture5" component={Lecture6033_L5}/>
                <Route path="/6.033/Lecture6" component={Lecture6033_L6}/>
                <Route path="/6.033/Lecture7" component={Lecture6033_L7}/>
                <Route path="/6.033/Lecture8" component={Lecture6033_L8}/>
                <Route path="/6.033/Lecture9" component={Lecture6033_L9}/>
                <Route path="/6.033/Lecture10" component={Lecture6033_L10}/>
                <Route path="/6.033/Lecture11" component={Lecture6033_L11}/>
                <Route path="/6.033/Lecture12" component={Lecture6033_L12}/>
                <Route path="/6.033/Lecture13" component={Lecture6033_L13}/>
                <Route path="/6.033/Lecture14" component={Lecture6033_L14}/>
                <Route path="/6.033/Lecture15" component={Lecture6033_L15}/>
                <Route path="/6.033/Lecture16" component={Lecture6033_L16}/>
                <Route path="/6.033/Lecture17" component={Lecture6033_L17}/>
                <Route path="/6.033/Lecture18" component={Lecture6033_L18}/>
                <Route path="/6.033/Lecture19" component={Lecture6033_L19}/>
                <Route path="/6.033/Lecture20" component={Lecture6033_L20}/>
                <Route path="/6.033/Lecture21" component={Lecture6033_L21}/>

                <Route path="/6.042/Textbook1" component={Textbook6042_T1}/>
                <Route path="/6.042/Textbook2" component={Textbook6042_T2}/>
                <Route path="/6.042/Textbook3" component={Textbook6042_T3}/>
                <Route path="/6.042/Textbook4" component={Textbook6042_T4}/>
                <Route path="/6.042/Textbook5" component={Textbook6042_T5}/>
                <Route path="/6.042/Textbook6" component={Textbook6042_T6}/>
                <Route path="/6.042/Textbook7" component={Textbook6042_T7}/>
                <Route path="/6.042/Textbook8" component={Textbook6042_T8}/>
                <Route path="/6.042/Textbook9" component={Textbook6042_T9}/>
                <Route path="/6.042/Textbook10" component={Textbook6042_T10}/>
                <Route path="/6.042/Textbook11" component={Textbook6042_T11}/>
                <Route path="/6.042/Textbook12" component={Textbook6042_T12}/>
                <Route path="/6.042/Textbook13" component={Textbook6042_T13}/>
                <Route path="/6.042/Textbook14" component={Textbook6042_T14}/>
                <Route path="/6.042/Textbook15" component={Textbook6042_T15}/>
                <Route path="/6.042/Textbook16" component={Textbook6042_T16}/>
                <Route path="/6.042/Textbook17" component={Textbook6042_T17}/>
                <Route path="/6.042/Textbook18" component={Textbook6042_T18}/>
                <Route path="/6.042/Textbook19" component={Textbook6042_T19}/>
                <Route path="/6.042/Textbook20" component={Textbook6042_T20}/>
                <Route path="/6.042/Textbook21" component={Textbook6042_T21}/>
                <Route path="/6.042/Textbook22" component={Textbook6042_T22}/>
                <Route path="/6.042/Textbook23" component={Textbook6042_T23}/>
                <Route path="/6.042/Textbook24" component={Textbook6042_T24}/>
                <Route path="/6.042/Textbook25" component={Textbook6042_T25}/>
                <Route path="/6.042/Textbook26" component={Textbook6042_T26}/>
                <Route path="/6.042/Textbook27" component={Textbook6042_T27}/>
                <Route path="/6.042/Textbook28" component={Textbook6042_T28}/>
                <Route path="/6.042/Textbook29" component={Textbook6042_T29}/>
                <Route path="/6.042/Textbook30" component={Textbook6042_T30}/>
                <Route path="/6.042/Textbook31" component={Textbook6042_T31}/>
                <Route path="/6.042/Textbook32" component={Textbook6042_T32}/>
                <Route path="/6.042/Textbook33" component={Textbook6042_T33}/>
                <Route path="/6.042/Textbook34" component={Textbook6042_T34}/>
                <Route path="/6.042/Textbook35" component={Textbook6042_T35}/>
                <Route path="/6.042/Textbook36" component={Textbook6042_T36}/>
                <Route path="/6.042/Textbook37" component={Textbook6042_T37}/>
                <Route path="/6.042/Textbook38" component={Textbook6042_T38}/>

                <Route path="/6.042/Pset1" component={Pset6042_P1}/>
                <Route path="/6.042/Pset2" component={Pset6042_P2}/>
                <Route path="/6.042/Pset3" component={Pset6042_P3}/>
                <Route path="/6.042/Pset4" component={Pset6042_P4}/>
                <Route path="/6.042/Pset5" component={Pset6042_P5}/>
                <Route path="/6.042/Pset6" component={Pset6042_P6}/>
                <Route path="/6.042/Pset7" component={Pset6042_P7}/>
                <Route path="/6.042/Pset8" component={Pset6042_P8}/>
                <Route path="/6.042/Pset9" component={Pset6042_P9}/>

                <Route path="/6.042/Crib1" component={Crib6042_C1}/>
                <Route path="/6.042/Crib2" component={Crib6042_C2}/>
                <Route path="/6.042/Crib3" component={Crib6042_C3}/>
                <Route path="/6.042/Crib4" component={Crib6042_C4}/>
                <Route path="/6.042/CribFinal" component={Crib6042_C5}/>

                <Route path="/6.046/Lecture1" component={Lecture6046_L1}/>
                <Route path="/6.046/Lecture2" component={Lecture6046_L2}/>
                <Route path="/6.046/Lecture3" component={Lecture6046_L3}/>
                <Route path="/6.046/Lecture4" component={Lecture6046_L4}/>
                <Route path="/6.046/Lecture5" component={Lecture6046_L5}/>
                <Route path="/6.046/Lecture6" component={Lecture6046_L6}/>
                <Route path="/6.046/Lecture7" component={Lecture6046_L7}/>
                <Route path="/6.046/Lecture8" component={Lecture6046_L8}/>
                <Route path="/6.046/Lecture9" component={Lecture6046_L9}/>
                <Route path="/6.046/Lecture10" component={Lecture6046_L10}/>
                <Route path="/6.046/Lecture11" component={Lecture6046_L11}/>
                <Route path="/6.046/Lecture12" component={Lecture6046_L12}/>
                <Route path="/6.046/Lecture13" component={Lecture6046_L13}/>
                <Route path="/6.046/Lecture14" component={Lecture6046_L14}/>
                <Route path="/6.046/Lecture15" component={Lecture6046_L15}/>
                <Route path="/6.046/Lecture16" component={Lecture6046_L16}/>
                <Route path="/6.046/Lecture17" component={Lecture6046_L17}/>
                <Route path="/6.046/Lecture18" component={Lecture6046_L18}/>
                <Route path="/6.046/Lecture19" component={Lecture6046_L19}/>
                <Route path="/6.046/Lecture20" component={Lecture6046_L20}/>
                <Route path="/6.046/Lecture21" component={Lecture6046_L21}/>
                <Route path="/6.046/Lecture22" component={Lecture6046_L22}/>
                <Route path="/6.046/Lecture23" component={Lecture6046_L23}/>
                <Route path="/6.046/Lecture24" component={Lecture6046_L24}/>

                <Route path="/6.046/Recitation1" component={Recitation6046_R1}/>
                <Route path="/6.046/Recitation2" component={Recitation6046_R2}/>
                <Route path="/6.046/Recitation3" component={Recitation6046_R3}/>
                <Route path="/6.046/Recitation4" component={Recitation6046_R4}/>
                <Route path="/6.046/Recitation5" component={Recitation6046_R5}/>
                <Route path="/6.046/Recitation6" component={Recitation6046_R6}/>
                <Route path="/6.046/Recitation7" component={Recitation6046_R7}/>
                <Route path="/6.046/Recitation8" component={Recitation6046_R8}/>
                <Route path="/6.046/Recitation9" component={Recitation6046_R9}/>
                <Route path="/6.046/Recitation10" component={Recitation6046_R10}/>
                <Route path="/6.046/Recitation11" component={Recitation6046_R11}/>

                <Route path="/6.046/CribFinal" component={Crib6046_Final}/>
                <Route path="/6.046/CribQuiz1" component={Crib6046_Q1}/>
                <Route path="/6.046/CribQuiz2" component={Crib6046_Q2}/>

                <Route path="/6.08/Lecture1" component={Lecture608_L1}/>
                <Route path="/6.08/Lecture2" component={Lecture608_L2}/>
                <Route path="/6.08/Lecture3" component={Lecture608_L3}/>
                <Route path="/6.08/Lecture4" component={Lecture608_L4}/>
                <Route path="/6.08/Lecture5" component={Lecture608_L5}/>
                <Route path="/6.08/Lecture6" component={Lecture608_L6}/>

                <Route path="/6.08/CribMidterm" component={Crib608_1}/>

                <Route path="/7.012/Lecture1" component={Lecture7012_L1}/>
                <Route path="/7.012/Lecture2" component={Lecture7012_L2}/>
                <Route path="/7.012/Lecture3" component={Lecture7012_L3}/>
                <Route path="/7.012/Lecture4" component={Lecture7012_L4}/>
                <Route path="/7.012/Lecture5" component={Lecture7012_L5}/>
                <Route path="/7.012/Lecture6" component={Lecture7012_L6}/>
                <Route path="/7.012/Lecture7" component={Lecture7012_L7}/>
                <Route path="/7.012/Lecture8" component={Lecture7012_L8}/>
                <Route path="/7.012/Lecture9" component={Lecture7012_L9}/>
                <Route path="/7.012/Lecture10" component={Lecture7012_L10}/>
                <Route path="/7.012/Lecture11" component={Lecture7012_L11}/>
                <Route path="/7.012/Lecture12" component={Lecture7012_L12}/>
                <Route path="/7.012/Lecture13" component={Lecture7012_L13}/>
                <Route path="/7.012/Lecture14" component={Lecture7012_L14}/>
                <Route path="/7.012/Lecture15" component={Lecture7012_L15}/>
                <Route path="/7.012/Lecture16" component={Lecture7012_L16}/>
                <Route path="/7.012/Lecture17" component={Lecture7012_L17}/>
                <Route path="/7.012/Lecture18" component={Lecture7012_L18}/>
                <Route path="/7.012/Lecture19" component={Lecture7012_L19}/>
                <Route path="/7.012/Lecture20" component={Lecture7012_L20}/>
                <Route path="/7.012/Lecture21" component={Lecture7012_L21}/>
                <Route path="/7.012/Lecture22" component={Lecture7012_L22}/>
                <Route path="/7.012/Lecture23" component={Lecture7012_L23}/>
                <Route path="/7.012/Lecture24" component={Lecture7012_L24}/>
                <Route path="/7.012/Lecture25" component={Lecture7012_L25}/>
                <Route path="/7.012/Lecture26" component={Lecture7012_L26}/>
                <Route path="/7.012/Lecture27" component={Lecture7012_L27}/>
                <Route path="/7.012/Lecture28" component={Lecture7012_L28}/>
                <Route path="/7.012/Lecture29" component={Lecture7012_L29}/>
                <Route path="/7.012/Lecture30" component={Lecture7012_L30}/>
                <Route path="/7.012/Lecture31" component={Lecture7012_L31}/>
                <Route path="/7.012/Lecture32" component={Lecture7012_L32}/>
                <Route path="/7.012/Lecture33" component={Lecture7012_L33}/>
                <Route path="/7.012/Lecture34" component={Lecture7012_L34}/>
                <Route path="/7.012/Lecture35" component={Lecture7012_L35}/>


                <Route path="/7.012/Recitation1" component={Recitation7012_R1}/>
                <Route path="/7.012/Recitation2" component={Recitation7012_R2}/>
                <Route path="/7.012/Recitation3" component={Recitation7012_R3}/>
                <Route path="/7.012/Recitation4" component={Recitation7012_R4}/>
                <Route path="/7.012/Recitation5" component={Recitation7012_R5}/>
                <Route path="/7.012/Recitation6" component={Recitation7012_R6}/>
                <Route path="/7.012/Recitation7" component={Recitation7012_R7}/>
                <Route path="/7.012/Recitation8" component={Recitation7012_R8}/>
                <Route path="/7.012/Recitation9" component={Recitation7012_R9}/>
                <Route path="/7.012/Recitation10" component={Recitation7012_R10}/>
                <Route path="/7.012/Recitation11" component={Recitation7012_R11}/>
                <Route path="/7.012/Recitation12" component={Recitation7012_R12}/>
                <Route path="/7.012/Recitation13" component={Recitation7012_R13}/>
                <Route path="/7.012/Recitation14" component={Recitation7012_R14}/>
                <Route path="/7.012/Recitation15" component={Recitation7012_R15}/>
                <Route path="/7.012/Recitation16" component={Recitation7012_R16}/>
                <Route path="/7.012/Recitation17" component={Recitation7012_R17}/>
                <Route path="/7.012/Recitation18" component={Recitation7012_R18}/>
                <Route path="/7.012/Recitation19" component={Recitation7012_R19}/>
                <Route path="/7.012/Recitation20" component={Recitation7012_R20}/>
                <Route path="/7.012/Recitation21" component={Recitation7012_R21}/>
                <Route path="/7.012/Recitation22" component={Recitation7012_R22}/>

                <Route path="/14.70/Lecture1" component={Lecture1470_L1}/>
                <Route path="/14.70/Lecture2" component={Lecture1470_L2}/>
                <Route path="/14.70/Lecture3" component={Lecture1470_L3}/>
                <Route path="/14.70/Lecture4" component={Lecture1470_L4}/>
                <Route path="/14.70/Lecture5" component={Lecture1470_L5}/>
                <Route path="/14.70/Lecture6" component={Lecture1470_L6}/>
                <Route path="/14.70/Lecture7" component={Lecture1470_L7}/>
                <Route path="/14.70/Lecture8" component={Lecture1470_L8}/>
                <Route path="/14.70/Lecture9" component={Lecture1470_L9}/>
                <Route path="/14.70/Lecture10" component={Lecture1470_L10}/>
                <Route path="/14.70/Lecture11" component={Lecture1470_L11}/>
                <Route path="/14.70/Lecture12" component={Lecture1470_L12}/>
                <Route path="/14.70/Lecture13" component={Lecture1470_L13}/>

                <Route path="/14.02/Textbook1" component={Textbook1402_T1}/>
                <Route path="/14.02/Textbook2" component={Textbook1402_T2}/>
                <Route path="/14.02/Textbook3" component={Textbook1402_T3}/>
                <Route path="/14.02/Textbook4" component={Textbook1402_T4}/>
                <Route path="/14.02/Textbook5" component={Textbook1402_T5}/>
                <Route path="/14.02/Textbook6" component={Textbook1402_T6}/>
                <Route path="/14.02/Textbook7" component={Textbook1402_T7}/>
                <Route path="/14.02/Textbook8" component={Textbook1402_T8}/>
                <Route path="/14.02/Textbook9" component={Textbook1402_T9}/>
                <Route path="/14.02/Textbook10" component={Textbook1402_T10}/>
                <Route path="/14.02/Textbook11" component={Textbook1402_T11}/>
                <Route path="/14.02/Textbook12" component={Textbook1402_T12}/>
                <Route path="/14.02/Textbook13" component={Textbook1402_T13}/>
                <Route path="/14.02/Textbook14" component={Textbook1402_T14}/>
                <Route path="/14.02/Textbook17" component={Textbook1402_T17}/>
                <Route path="/14.02/Textbook18" component={Textbook1402_T18}/>
                <Route path="/14.02/Textbook19" component={Textbook1402_T19}/>

                <Route path="/14.02/Crib1" component={Crib1402_C1}/>
                <Route path="/14.02/Crib2" component={Crib1402_C2}/>
                <Route path="/14.02/Crib3" component={Crib1402_C3}/>

                <Route path="/21M.011/CribFinal" component={Crib21M011_Final}/>
                <Route path="/21M.011/CribExam1" component={Crib21M011_E1}/>
                <Route path="/21M.011/CribExam2" component={Crib21M011_E2}/>
                <Route path="/21M.011/CribExam3" component={Crib21M011_E3}/>

                <Route path="/APPhysics1/APPhysics11" component={APPhysics11}/>
                <Route path="/APPhysics1/APPhysics12" component={APPhysics12}/>
                <Route path="/APPhysics1/APPhysics13" component={APPhysics13}/>
                <Route path="/APPhysics1/APPhysics14" component={APPhysics14}/>
                <Route path="/APPhysics1/APPhysics15" component={APPhysics15}/>
                <Route path="/APPhysics1/APPhysics16" component={APPhysics16}/>
                <Route path="/APPhysics1/APPhysics17" component={APPhysics17}/>
                <Route path="/APPhysics1/APPhysics18" component={APPhysics18}/>
                <Route path="/APPhysics1/APPhysics19" component={APPhysics19}/>
                <Route path="/APPhysics1/APPhysics110" component={APPhysics110}/>

                <Route path="/APCalcBC/APCalcBC1" component={APCalcBC1}/>
                <Route path="/APCalcBC/APCalcBC2" component={APCalcBC2}/>
                <Route path="/APCalcBC/APCalcBC3" component={APCalcBC3}/>
                <Route path="/APCalcBC/APCalcBC4" component={APCalcBC4}/>
                <Route path="/APCalcBC/APCalcBC5" component={APCalcBC5}/>
                <Route path="/APCalcBC/APCalcBC6" component={APCalcBC6}/>
                <Route path="/APCalcBC/APCalcBC7" component={APCalcBC7}/>
                <Route path="/APCalcBC/APCalcBC8" component={APCalcBC8}/>
                <Route path="/APCalcBC/APCalcBC9" component={APCalcBC9}/>

                <Route path="/Calc3/Calc31" component={Calc31}/>
                <Route path="/Calc3/Calc32" component={Calc32}/>
                <Route path="/Calc3/Calc33" component={Calc33}/>
                <Route path="/Calc3/Calc34" component={Calc34}/>
                <Route path="/Calc3/Calc35" component={Calc35}/>

                <Route path="/APPhysicsC/APPhysicsC1" component={APPhysicsC1}/>
                <Route path="/APPhysicsC/APPhysicsC2" component={APPhysicsC2}/>

                <Route path="/DiffEq/DiffEq1" component={DiffEq1}/>
                <Route path="/DiffEq/DiffEq2" component={DiffEq2}/>
                <Route path="/DiffEq/DiffEq3" component={DiffEq3}/>
                <Route path="/DiffEq/DiffEq4" component={DiffEq4}/>
                <Route path="/DiffEq/DiffEq5" component={DiffEq5}/>

                <Route path="/APEcon/Micro" component={Micro}/>

                <Redirect from="/" to="/Home"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
