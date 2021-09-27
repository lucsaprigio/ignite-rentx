import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
   Container,
   Header,
   CarImages,
} from './styles';

export function CarDetails(){
  return(
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

    <CarImages>
      <ImageSlider  
        imagesUrl={['https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-para-audi-a3-700x301.png']}
      />
    </CarImages>
    </Container>
  );
}