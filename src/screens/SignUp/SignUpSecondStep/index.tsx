import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { PasswordInput } from '../../../components/PasswordInput';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';

import {
   Container,
   Header,
   Steps,
   Title,
   Subtitle,
   Form,
   FormTitle,
} from './styles';

export function SignUpSecondStep(){
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  return(
  <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
        <Steps>
          <Bullet active />
          <Bullet />
        </Steps>
      </Header>

      <Title>
        Crie sua {'\n'}conta
      </Title>
      <Subtitle>
        Faça seu cadastro de {'\n'}
        forma rápida e fácil
      </Subtitle>

      <Form>
        <FormTitle>2. Senha</FormTitle>
        <PasswordInput 
          iconName="lock"
          placeholder="Senha"
        />
        <PasswordInput 
          iconName="lock"
          placeholder=" Repetir Senha"
        />
      </Form>

      <Button
        color={theme.colors.success}
        title="Cadastrar"
      />

    </Container>  
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}