import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList, ScrollView } from "react-native";
import { novidades } from "../../../cafes.js";
import estiloCard from "./estiloCard.js";

const Card = () => {

    const renderItem = ({ item }) => (

        <TouchableOpacity style={estiloCard.card}>
            <ImageBackground
                source={item.imagem}
                style={estiloCard.imageBackground}
                imageStyle={{ borderRadius: 8 }}
                resizeMode="cover"
            >
                <View style={estiloCard.overlay}>
                    <Text style={estiloCard.nome}>{item.nome}</Text>
                    <Text style={estiloCard.valor}>R$ {item.valor.toFixed(2)}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (

        <ScrollView scrollEnabled={true} style={estiloCard.scroll}> 
            <FlatList
                data={novidades}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={estiloCard.container}
                showsVerticalScrollIndicator={true}
            />
        </ScrollView>


    )
}

export default Card