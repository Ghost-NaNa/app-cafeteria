import React, { useState, useRef, useEffect } from 'react'; // Importamos useState e useRef
import { View, TouchableOpacity, Text, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { maisVendidos } from '../../../cafes.js';
import estiloCarrosel from './estiloCarrosel.js';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Carrosel = () => {
    const navigation = useNavigation();

    // 1. Estado para controlar se o carrossel pode iniciar a animação.
    const [isReady, setIsReady] = useState(false);
    
    // contador para saber quantas imagens foram carregadas.
    const loadedImagesCount = useRef(0);

    const handleImageLoad = () => {
        // Incrementa o contador cada vez que uma imagem carrega
        loadedImagesCount.current += 1;
        
        // Se o número de imagens carregadas for igual ao total, mudamos o estado.
        if (loadedImagesCount.current >= maisVendidos.length) {
            setIsReady(true);
        }
    };

    return (
        <View style={estiloCarrosel.container}>
            {/* Opcional: Mostra um indicador de loading enquanto as imagens não estão prontas */}
            {!isReady && (
                <View style={{ height: 250, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#6a1b9a" />
                </View>
            )}

            <Carousel
                loop
                width={width}
                height={250}
                // 2. O autoPlay agora depende do estado `isReady`.
                autoPlay={isReady} 
                autoPlayInterval={3000}
                pagingEnabled
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: .95,
                    parallaxScrollingOffset: 50,
                    parallaxAdjacentItemScale: .7,
                }}
                data={maisVendidos}
                style={{ display: isReady ? 'flex' : 'none' }} // Esconde o carrossel até estar pronto
                scrollAnimationDuration={1000}
                onSnapToItem={(index) =>
                    console.log('Item atual:', maisVendidos[index].nome)
                }
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} style={estiloCarrosel.item} onPress={() => navigation.navigate("sobreCafe", { id: item.id, nome: item.nome, imagem: item.imagem, valor: item.valor, descricao: item.descricao })}>
                        <ImageBackground
                            source={item.imagem}
                            style={estiloCarrosel.imagemFundo}
                            imageStyle={{ borderRadius: 15 }}
                            // 3. Chamamos nossa função quando a imagem carregar.
                            onLoad={handleImageLoad} 
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

// Exportar com React.memo pode previnir re-renderizações desnecessárias
export default React.memo(Carrosel);