import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   About,
   Accessories,
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

    <Content>
      <Details>
        <Description>
          <Brand>Lamborghuni</Brand>
          <Name>Huracan</Name>
        </Description>

        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 580</Price>
        </Rent>
      </Details>

      <Accessories>
         <Accessory name="380Km/h" icon={speedSvg}/>
         <Accessory name="3.2s" icon={accelerationSvg}/>
         <Accessory name="800 HP" icon={forceSvg}/>
         <Accessory name="Gasoline" icon={gasolineSvg}/>
         <Accessory name="Auto" icon={exchangeSvg}/>
         <Accessory name="2 pessoas" icon={peopleSvg}/>
      </Accessories>

      <About>
        Este é automóvel desportivo, bruwueoekel ajdklsakj djksa
        ajsdklasfj ajskljkdslçf sajdfkslçjff jsadkfladçs jfdasklfj jsakdlf
        asjfsdkf sadjfklsaçdf asdjfklaçdsf asdjfklçf
      </About>
    </Content>

    </Container>
  );
}