import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './MenuStyles';

export function Menu() {
  return (
    <View style={styles.container}>
        <Text>Gerador de Senhas do IronMan</Text>
    </View>
  );
}