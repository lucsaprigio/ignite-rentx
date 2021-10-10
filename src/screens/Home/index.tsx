import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo-screen.svg';


import { Car } from '../../components/Car';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

export function Home(){
  const navigation = useNavigation();

  const carData = {
    brand: 'audi',
    name: 'R$ 5 Coupé',
    rent: {
        period: 'AO DIA',
        price: 120,
    },
    thumbnail: 'https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-para-audi-a3-700x301.png',
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
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
          <Logo width={RFValue(108)} height={RFValue(12)} />
            <TotalCars>
              Total de 2 carros
            </TotalCars>
          </ HeaderContent>
        </Header>
      <CarList 
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
          <Car data={carData} onPress={handleCarDetails}/>
      }
      />
    </Container>
  );
}