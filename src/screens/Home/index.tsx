import React from 'react';
import { StatusBar } from 'react-native';

import Logo from '../../assets/Logotipo.png';


import { Car } from '../../components/Car';

import {
    Container,
    Header,
    HeaderContent,
    ImageLogo,
    TotalCars,
    CarList
} from './styles';

export function Home(){
  const carData = {
    brand: 'audi',
    name: 'R$ 5 Coupé',
    rent: {
        period: 'AO DIA',
        price: 120,
    },
    thumbnail: 'https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-para-audi-a3-700x301.png',
    
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
      <CarList 
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}