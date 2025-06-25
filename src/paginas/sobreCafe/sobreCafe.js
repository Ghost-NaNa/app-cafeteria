import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native'; // Adicionamos StyleSheet para estiloCafe inline simples
import estiloCafe from './estiloCafe.js';

export default function SobreCafe() {
    const rota = useRoute();
    const { nome, imagem, valor, descricao } = rota.params;

    return (
        <SafeAreaView style={estiloCafe.container}>
            <ScrollView contentContainerStyle={estiloCafe.scrollContent}>
                <Text style={estiloCafe.titulo}>{nome}</Text>

                <View style={estiloCafe.cardDetalhes}>
                    <Image style={estiloCafe.imagemCafe} source={imagem} />

                    <View style={estiloCafe.informacoesBasicas}>
                        <Text style={estiloCafe.labelPreco}>Preço:</Text>
                        <Text style={estiloCafe.valorPreco}>R${valor}</Text>
                    </View>

                    <View style={estiloCafe.secaoDescricao}>
                        <Text style={estiloCafe.labelDescricao}>Descrição:</Text>
                        <Text style={estiloCafe.textoDescricao}>{descricao}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}