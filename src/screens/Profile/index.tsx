import React, { useState } from 'react';
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback, 
    Keyboard, 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

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
   Section
} from './styles';

export function Profile(){
  const { user } = useAuth();
  // Estado que controla os 'Dados' e 'Trocar Senha', se esta ativo ou não
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState(user.avatar); 
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license) 
  
  const theme = useTheme();
  const navigation = useNavigation();

  // Função que volta uma tela.
  function handleBack() {
      navigation.goBack();
  }

  // Função de Deslogar
  function handleSignOut() {
      navigation.goBack();
  }

  // Função que altera as opções
  function handleOptionChange(OptionSelected: 'dataEdit' | 'passwordEdit'){ // Pode ser o dataEdit OU passwordEdit
      setOption(OptionSelected);
  }

  // Função de alterar a imagem do usuário.
  async function handleAvatarSelect() {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4 ,4],
          quality: 1,
      });

      if(result.cancelled){
          return;
      }

      if(result.uri){
          setAvatar(result.uri)
      }
  }

  return(
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                       { !!avatar && <Photo  source={{ uri: avatar }}/>}
                        <PhotoButton onPress={handleAvatarSelect}>
                            <Feather 
                                name="camera"
                                size={24}
                                color={theme.colors.shape}
                            />
                        </PhotoButton>

                    </PhotoContainer>
                </Header>

                <Content style={{ marginBottom: useBottomTabBarHeight()}}>
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
                {
                    option === 'dataEdit' 
                    ?
                    <Section>
                        <Input 
                            iconName="user"
                            placeholder="Nome"
                            autoCorrect={false}
                            defaultValue={user.name}
                            onChangeText={setName}
                        />
                        <Input 
                            iconName="mail"
                            editable={false}
                            defaultValue={user.email}
                        />
                        <Input 
                            iconName="credit-card"
                            placeholder="CNH"
                            keyboardType="numeric"
                            defaultValue={user.driver_license}
                            onChangeText={setDriverLicense}
                        />
                    </Section>
                    :
                    <Section>
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Senha atual"
                        />
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Nova senha"
                        />
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Repetir senha"
                        />
                    </Section>
                }
                </Content>
            </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}