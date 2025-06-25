import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from '../paginas/home/inicio';
import drawerEstilo from './estiloDrawer.js';
import SobreCafe from '../paginas/sobreCafe/sobreCafe.js';

const Drawer = createDrawerNavigator();

export default function Cabecalho() {
  return (
    <Drawer.Navigator initialRouteName="Home"  screenOptions={drawerEstilo}>
      <Drawer.Screen name="Home" component={Inicio} />
      <Drawer.Screen name="sobreCafe" component={SobreCafe} options={{drawerItemStyle: {display: 'none'}}}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
