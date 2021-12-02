import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/brand.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';


import {
   Container,
   Content,
   Title,
   Message,
   Footer,
} from './styles';

/* Parâmetros da Rota */
interface Params {
  title: string; // Título da tela
  message: string; // Mensagem da Tela
  nextScreenRoute: string; // Próxima tela que vai
}

export function Confirmation({}: Params){
    const { width } = useWindowDimensions();

    const navigation = useNavigation();
    const route = useRoute();
    /* Recuperamos as informações da tela */
    const { title, message, nextScreenRoute } = route.params as Params;

    function handleConfirm(){
      //@ts-ignore
      navigation.navigate(nextScreenRoute);
    }

  return(
    <Container>
        <StatusBar 
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
        />
        <LogoSvg width={width}/>

        <Content>
            <DoneSvg width={80} height={80}/>
            <Title>{title}</Title>
            
            <Message>
                {message}
            </Message>
        </Content>

        <Footer>
            <ConfirmButton title="OK" onPress={handleConfirm}/>
        </Footer>
    </Container>
  );
}