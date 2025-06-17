import React from 'react';
import { View, TouchableOpacity,Text, Dimensions, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { maisVendidos } from '../../../cafes.js';
import estiloCarrosel from './estiloCarrosel.js';

const { width } = Dimensions.get('window');

const Carrosel = () => {
    return (
        <View style={estiloCarrosel.container}>
            <Carousel
                loop
                width={width}
                height={250}
                autoPlay={true}
                autoPlayInterval={3000}
                pagingEnabled
                mode="parallax" // nunca foi tão fácil centralizar algo
                modeConfig={{
                    parallaxScrollingScale: .95,
                    parallaxScrollingOffset: 50,
                    parallaxAdjacentItemScale: .7,
                }}
                data={maisVendidos}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) =>
                    console.log('Item atual:', maisVendidos[index].nome)
                }
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} style={estiloCarrosel.item}>
                        <ImageBackground
                            source={item.imagem}
                            style={estiloCarrosel.imagemFundo}
                            imageStyle={{ borderRadius: 15 }}
                        >
                            <View style={estiloCarrosel.overlay} />
                            <View style={estiloCarrosel.textContainer}>
                                <Text style={estiloCarrosel.bebidaNome}>{item.nome}</Text>
                                <Text style={estiloCarrosel.preco}>R$ {item.valor.toFixed(2)}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Carrosel;
