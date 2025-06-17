import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const estiloCarrosel = StyleSheet.create({
    container: {
        width: width
    },
    item: {
        width: width,
        height: 250,
        padding: 10,
        borderRadius: 15,
        overflow: 'hidden',        
        elevation: 5
    },
    imagemFundo: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        height: 250,
        width: width,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderRadius: 15,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    bebidaNome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    preco: {
        fontSize: 18,
        color: '#f0e1d0',
        fontWeight: '600',
        marginTop: 4,
    },
});

export default estiloCarrosel;