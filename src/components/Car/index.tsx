import React from 'react';

import GasolinePng from '../../assets/gasoline.png';

import {
   Container,
   Details,
   Brand,
   Name,
   About,
   Rent,
   Period,
   Price,
   Type,
   Gasoline,
   CarImage,
} from './styles';

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
}

interface Props {
    data: CarData;
}

export function Car( {data }: Props){
  return(
    <Container>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$${data.rent.price}`}</Price>
                </Rent>

                <Type>
                    <Gasoline source={GasolinePng}/>
                </Type>
            </About>
        </Details>

        <CarImage 
            source={{ uri: data.thumbnail}} 
            resizeMode="contain"
        />
    </Container>
  );
}