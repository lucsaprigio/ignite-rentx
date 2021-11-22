import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
   Container,
   InputText,
   IconContainer,
} from './styles';

/* Tipo do ícone */
interface Props extends TextInputProps {
    // Colocamos em colchetes para pegar o valor específico, nesse caso o name
    iconName: React.ComponentProps<typeof Feather>['name'] 
}

export function PasswordInput({
    iconName,
    ...rest
}: Props){
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    
    const theme = useTheme();

    /* Função de Ativação do Eye */
    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState); // Pega o estado anterior, inverte dependendo da condição
    }

  return(
    <Container>
        <IconContainer>
        <Feather 
            name={iconName}
            size={24}
            color={theme.colors.text_detail}
        />
        </IconContainer>
        
        <InputText 
            secureTextEntry={isPasswordVisible}
            {...rest}
        />

        <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
        <Feather 
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
        />
        </IconContainer>
        </BorderlessButton>

    </Container>
  );
}