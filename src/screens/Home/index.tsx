import React from 'react';
import { StatusBar } from 'react-native';

import Logo from '../../assets/Logotipo.png';


import { Car } from '../../components/Car';

import {
    Container,
    Header,
    HeaderContent,
    ImageLogo,
    TotalCars
} from './styles';

export function Home(){
  const carDataOne = {
    brand: 'audi',
    name: 'R$ 5 Coupé',
    rent: {
        period: 'AO DIA',
        price: 120,
    },
    thumbnail: 'https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-para-audi-a3-700x301.png',
    
  }

  const carDataTwo = {
    brand: 'Porsche',
    name: 'R$ 5 Panamera',
    rent: {
        period: 'AO DIA',
        price: 340,
    },
    thumbnail: 'https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-panamera-corretora-de-seguros-700x350.png',
    
  }

  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        <Header>
          <HeaderContent>
            <ImageLogo 
              source={Logo}
            />
            <TotalCars>
              Total de 2 carros
            </TotalCars>
          </ HeaderContent>
        </Header>

        <Car data={carDataOne}/>
        <Car data={carDataTwo}/>
    </Container>
  );
}