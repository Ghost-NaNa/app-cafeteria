import { StyleSheet } from "react-native";



const inicioEstilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080202'
    },
    cafes: {
        paddingTop: 10,
        paddingHorizontal: 6
    },
    tituloContainer: {
        width: "100%",
        marginLeft: 14,
        padding: 6,
        alignItems: 'flex-start'
    },
    titulo: {
        fontSize: 24,
        letterSpacing: 1.5,
        color: "#fff",
        fontWeight: '700',
        marginBottom: 10,
    }
})

export default inicioEstilo;