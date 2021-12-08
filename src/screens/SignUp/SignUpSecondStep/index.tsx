import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { api } from '../../../services/api';

import { useNavigation, useRoute } from '@react-navigation/native';
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

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep(){
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  /* Recuperando os dados do usuário */
  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  /* Função de registro de senha */
  async function handleRegister(){
    if(!password || !passwordConfirm){ // Se não tiver password manda o alerta
      return Alert.alert('Informe a senha e a confirmação dela!')
    }

    if(password != passwordConfirm){ // Confirmando se as senhas são iguaisA
      return Alert.alert('As senhas não conferem!')
    }

    // Enviar para API e cadastra
    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password
    })
    /* Se tudo acima der certo vá para próxima tela */
    .then(() => {
      //@ts-ignore
      navigation.navigate('Confirmation', {
        nextScreenRoute: 'Home',
        title: 'Conta Criada',
        message: `Agora é só fazer login \ne aproveitar.`
    });
  })
  /* Se não cai nesse Alert */
  .catch(() => {
    Alert.alert('Opa', 'Não foi possível cadastrar')
  });
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
          onChangeText={setPassword}
          value={password}
        />
        <PasswordInput 
          iconName="lock"
          placeholder=" Repetir Senha"
          onChangeText={setPasswordConfirm}
          value={passwordConfirm}
        />
      </Form>

      <Button
        color={theme.colors.success}
        title="Cadastrar"
        onPress={handleRegister}
      />

    </Container>  
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
}