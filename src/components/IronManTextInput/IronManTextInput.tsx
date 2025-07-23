import React from 'react';
import { TextInput } from 'react-native';
import { IronManTextInputProps } from '../../interfaces/IronManInputModel';
import { styles } from './InputStyles';

export function IronManTextInput(props: IronManTextInputProps) {
  return (
        <TextInput
        placeholder='Sua Senha'
        style={styles.inputer}
        value={props.pass}
        >
        </TextInput>
  );
}