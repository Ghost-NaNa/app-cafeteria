import { StyleSheet } from "react-native";

const estiloCafe = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b785d', 
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 32, // Título um pouco maior
        fontWeight: '700', // Mais peso
        color: '#2C3E50', // Cor mais escura para o título
        marginBottom: 30,
        textAlign: 'center',
    },
    cardDetalhes: {
        width: '100%',
        backgroundColor: '#bb9e85',
        borderRadius: 15, // Bordas mais arredondadas
        padding: 25, // Mais padding interno
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 }, // Sombra um pouco mais proeminente
        shadowOpacity: 0.08, // Sombra suave
        shadowRadius: 12,
        elevation: 8,
        alignItems: 'center', // Centraliza itens dentro do card
    },
    imagemCafe: {
        width: '100%', // Imagem ocupando toda a largura do card
        height: 280, // Altura um pouco maior
        borderRadius: 10,
        marginBottom: 25,
        resizeMode: 'cover',
    },
    informacoesBasicas: {
        flexDirection: 'row', // Alinha preço e valor lado a lado
        alignItems: 'baseline', // Alinha pela base do texto
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center', // Centraliza o bloco de preço
    },
    labelPreco: {
        fontSize: 28,
        color: '#0D0E1C', // Um cinza mais suave para o label
        fontWeight: '500',
        marginRight: 8,
    },
    valorPreco: {
        fontSize: 23, // Preço maior e mais impactante
        fontWeight: 'bold',
        color: '#0D0E1C'    
    },
    secaoDescricao: {
        width: '100%',
    },
    labelDescricao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3B2F2F', // Cor mais escura para o label da descrição
        marginBottom: 10,
    },
    textoDescricao: {
        fontSize: 20,
        color: '#0D0E1C',
        lineHeight: 25,
        textAlign: 'justify',
    },
    btn: {
        backgroundColor: '#123',
        marginTop: 13,
        padding: 14,
        alignItems: "center",
        borderRadius: 15,
        width: 418,
        backgroundColor: "#382C2C",
        color: "#F0E1D0"
    },
})

export default estiloCafe;