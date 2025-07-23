import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import IronManIconLogo from '../../../assets/iron-man-logo.png'

export function IronManLogo() {
  return (
    <>
        <Text style={styles.title}>
            Iron Man Password Generator
        </Text>
        <Image 
        source={IronManIconLogo}
        style={{
            resizeMode: 'contain',
            height: 180,
        }}
        />
    </>
  );
}