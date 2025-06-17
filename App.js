import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Cabecalho from './src/navegacao/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Cabecalho/>
    </NavigationContainer>
  );
}
