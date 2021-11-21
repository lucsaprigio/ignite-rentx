import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
   Container
} from './styles';

/* Tipo do ícone */
interface Props extends TextInputProps {
    // Colocamos em colchetes para pegar o valor específico, nesse caso o name
    iconName: React.ComponentProps<typeof Feather>['name'] 
}

export function Input({
    iconName
}: Props){
    const theme = useTheme();

  return(
    <Container>
        <Feather 
            name={iconName}
            size={24}
            color={theme.colors.text_detail}
        />
    </Container>
  );
}