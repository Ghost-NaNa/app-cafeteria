import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import inicioEstilo from './estiloInicio';
import Carrosel from '../../componentes/carrossel/carrosel.js';
import Card from '../../componentes/cards/cards.js';

export default function Inicio({ navigation }) {

    return (
        <SafeAreaView style={inicioEstilo.container}>

            <View style={inicioEstilo.cafes}>

                <View style={inicioEstilo.tituloContainer}>
                    <Text style={inicioEstilo.titulo}>Nossas bebidas mais vendidas</Text>
                </View>

                <Carrosel></Carrosel>

                <View style={inicioEstilo.tituloContainer}>
                    <Text style={inicioEstilo.titulo}>Veja também</Text>
                </View>

                <Card></Card>
            </View>

        </SafeAreaView>

    );
}