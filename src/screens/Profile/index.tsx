import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';

import {
   Container,
   Header,
   HeaderTop,
   HeaderTitle,
   LogoutButton,
   PhotoContainer,
   Photo,
   PhotoButton,
   Content,
   Options,
   Option,
   OptionTitle,
} from './styles';

export function Profile(){
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
      navigation.goBack();
  }

  function handleSignOut() {
      navigation.goBack();
  }

  // Função que altera as opções
  function handleOptionChange(OptionSelected: 'dataEdit' | 'passwordEdit'){
      setOption(OptionSelected);
  }
  return(
    <Container>
        <Header>
            <HeaderTop>
                <BackButton 
                    color={theme.colors.shape}
                    onPress={handleBack}
                />
                <HeaderTitle>Editar Perfil</HeaderTitle>
                <LogoutButton onPress={handleSignOut} />
                    <Feather 
                        name="power" size={24} 
                        color={theme.colors.shape} 
                    />
            </HeaderTop>

            <PhotoContainer>
                <Photo  source={{ uri: 'https://avatars.githubusercontent.com/u/68642596?v=4'}}/>
                <PhotoButton onPress={() =>{}}>
                    <Feather 
                        name="camera"
                        size={24}
                        color={theme.colors.shape}
                    />
                </PhotoButton>

            </PhotoContainer>
        </Header>

        <Content>
            <Options>
                <Option 
                    active={option === 'dataEdit'}
                    onPress={() => handleOptionChange('dataEdit')}
                >
                    <OptionTitle active={option === 'dataEdit'}>
                        Dados
                    </OptionTitle>
                </Option>
                <Option active={option === 'passwordEdit'}>
                    <OptionTitle 
                        active={option === 'passwordEdit'}
                        onPress={() => handleOptionChange('passwordEdit')}
                    >
                        Trocar senha
                    </OptionTitle>
                </Option>
            </Options>
        </Content>
    </Container>
  );
}