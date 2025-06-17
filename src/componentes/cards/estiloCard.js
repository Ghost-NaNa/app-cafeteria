import { StyleSheet } from "react-native";

const estiloCard = StyleSheet.create({
    container: {
        padding: 16,
        gap: 20
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden', // importante para o borderRadius funcionar no Android
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    imageBackground: {
        width: 200,
        height: 210,
        justifyContent: 'flex-end',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 12,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    nome: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    valor: {
        color: '#ddd',
        fontSize: 16,
        marginTop: 4,
    }
})

export default estiloCard;