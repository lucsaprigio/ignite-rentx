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
    value?: string;
}

export function PasswordInput({
    iconName,
    value,
    ...rest
}: Props){
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isFocused, setIsFocused] = useState(false); // Saber se tem foco
    const [isFilled, setIsFilled] = useState(false); // Saber se está preenchido
    
    const theme = useTheme();

    /* Monitora se o usuário saiu do input ou não */
    function handleInputFocus() { // Usuário entrou na caixa
        setIsFocused(true);
    }

    function handleInputBlur() { // usuário saiu da caixa
        setIsFocused(false);
        setIsFilled(!!value) // O !! transforma o Valor em Lógico.
    }


    /* Função de Ativação do Eye */
    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState); // Pega o estado anterior, inverte dependendo da condição
    }

  return(
    <Container >
        <IconContainer isFocused={isFocused}>
        <Feather 
            name={iconName}
            size={24}
            color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}

        />
        </IconContainer>
        
        <InputText 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            secureTextEntry={isPasswordVisible}
            isFocused={isFocused}
            {...rest}
        />

        <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer isFocused={isFocused}>
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