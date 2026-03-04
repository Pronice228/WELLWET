import React from 'react'
import HeaderComponent from './Header';
import Card_product from './card_product';
import HelpComponent from './Help_us'
import FooterComponent from './Footer';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const main = () => {
  return (
 <>
 
    <HeaderComponent/>

    <Card_product/>

    <HelpComponent/>

    <FooterComponent/>
    
  </>
  

  );
};

export default main;
